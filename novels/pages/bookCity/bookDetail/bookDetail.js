const {
  BASE_URL
} = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    // 评分
    avar: ''
  },
  // 跳转分类
  goBookCity: function(e) {
    var tag = e.currentTarget.dataset.tag
    wx.navigateTo({
      url: `../../classify/classifyInfo/classifyInfo?tag=${tag}`,
    })
  },
  // 跳转出版
  jumpPublish: function() {
    wx.navigateTo({
      url: 'bookPublish/bookPublish'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this)
    wx.request({
      url: `${BASE_URL}book/detail`,
      data: {
        id: options.id
      },
      success: res => {
        if (res.data.code == 200) {
          this.setData({
            message: res.data.result,
            avar: Math.ceil(res.data.result.average_rating)
          })
        }
      }
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