const {
  BASE_URL
} = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null,
    aver: 0,
    directoryTotal: 0,
    directoryList: [],
    id: 0,
    start: 0,
    limit: 10,
    // 排序方式：0正， 1反
    latestFirst: 0
  },
  // 跳转分类详情
  gocata: function(e) {
    wx.navigateTo({
      url: `../classifyInfo/classifyInfo?tag=${e.currentTarget.dataset.tag}`,
    })
  },
  // directory:目录部分数据请求
  directory: function(id, start, limit, latestFirst) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${BASE_URL}book/directory`,
        data: {
          id,
          start,
          limit,
          latestFirst
        },
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },
  // 加载更多
  handleClick: function() {
    this.data.start += 10;
    // 目录信息
    const {
      id,
      start,
      limit,
      latestFirst
    } = this.data
    this.directory(id, start, limit, latestFirst).then(res => {
      if (res.data.code == 200) {
        this.setData({
          directoryList: [...this.data.directoryList, ...res.data.result.list]
        })
        console.log(this.data.directoryList)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 头部信息
    wx.request({
      url: `${BASE_URL}book/serial`,
      data: {
        id: options.id
      },
      success: res => {
        if (res.data.code == 200) {
          console.log(res.data.result)
          this.setData({
            info: res.data.result,
            aver: Math.ceil(res.data.result.averageRating)
          })
        }
      }
    })
    this.data.id = options.id;
    // 目录信息
    const {
      id,
      start,
      limit,
      latestFirst
    } = this.data
    this.directory(id, start, limit, latestFirst).then(res => {
      if (res.data.code == 200) {
        this.setData({
          directoryTotal: res.data.result.total,
          directoryList: res.data.result.list
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})