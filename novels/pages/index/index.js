//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 存储用户信息
    userInfo: {},
    // 是否有用户信息
    hasUserInfo: false,
    // 判断小程序API是否在该版本可用
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // 已经授权跳转首页
    wx.reLaunch({
      url: '../bookCity/bookCity',
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      // 已经授权跳转首页
      wx.reLaunch({
        url: '../bookCity/bookCity',
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          // 已经授权跳转首页
          wx.reLaunch({
            url: '../bookCity/bookCity',
          })
        }
      })
    }
  }
})