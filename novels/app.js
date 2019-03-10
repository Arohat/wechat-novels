App({
  // 全局数据
  globalData: {
    userInfo: null,
    BASE_URL: 'http://localhost:3001/'
  },
  // 登陆获取openid
  getOpenid: function() {
    var _this = this;
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            wx.request({
              url: `${this.globalData.BASE_URL}userInfo/openid`,
              data: {
                code: res.code
              },
              success: res => {
                wx.setStorageSync('openid', res.data.result.openid)
                resolve({
                  code: 200,
                  data: res.data.result.openid
                })
              }
            })
          } else {
            console.log('登陆失败' + res.errMsg);
            reject('error')
          }
        }
      })
    })
  },
  // 获取用户信息
  getSetting: function() {
    return new Promise((resolve, reject) => {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo'] == true) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                resolve(res.userInfo)
              },
              fail: err => {
                reject(err)
              }
            })
          } else if (res.authSetting['scope.userInfo'] == false) {
            // 授权弹窗被拒绝
            wx.openSetting({
              success: res => {
                resolve(res)
              },
              fail: err => {
                reject(err)
              }
            })
          } else {
            // 没有弹出过弹窗
            wx.getUserInfo({
              success: res => {
                resolve(res)
              },
              fail: err => {
                reject(err)
                wx.openSetting({
                  success: res => {
                    resolve(res)
                  },
                  fail: err => {
                    reject(err)
                  }
                })
              }
            })
          }
        }
      })
    })
  },
  // 生命周期
  onLaunch: function() {
    this.getSetting().then(res => {
      console.log(res)
      this.globalData.userInfo = res
    }).catch(err => {
      console.log(err)
    })
  }
})