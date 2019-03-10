const {
  BASE_URL
} = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    type: '',
    start: 0,
    limit: 10
  },
  req: function(start, limit) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${BASE_URL}/book/category`,
        data: {
          type: this.data.type,
          start,
          limit
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

  'loading-more': function() {
    this.data.start += 10;
    console.log(this.data.start)
    this.req(this.data.start, this.data.limit).then(res => {
      if (res.data.code == 200) {
        this.setData({
          info: [...this.data.info, ...res.data.result]
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },

  goDetail: function(e) {
    wx.navigateTo({
      url: `../bookDetail/bookDetail?id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      type: options.type
    })
    this.req(this.data.start, this.data.limit).then(res => {
      if (res.data.code) {
        this.setData({
          info: res.data.result
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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