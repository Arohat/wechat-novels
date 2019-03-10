const {
  BASE_URL
} = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: ''
  },
  // 跳转详情
  goBookDetail: function(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `bookDetail/bookDetail?id=${id}`
    })
  },
  // 跳转更多
  goAll: function(e) {
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: `bookAll/bookAll?type=${type}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: `${BASE_URL}book/category`,
      success: res => {
        console.log(res.data)
        if (res.data.code == 200) {
          // 修改名称
          res.data.result.forEach(item => {
            switch (item.name) {
              case 'new':
                item.zwName = '新上架'
                break;
              case 'top':
                item.zwName = '热门'
                break;
              case 'gallery':
                item.zwName = '画册'
                break;
            }
          })
          this.setData({
            info: res.data.result
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