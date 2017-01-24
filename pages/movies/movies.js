// pages/movies/movies.js
Page({
  data: {
    InTheaters: {
       subjects:{}
    }

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.GetTheaters();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  http: function (url) {

  },
  GetTheaters: function () {
    wx.showToast({

      icon:"loading",
      title:"加载中..."
    });
    var appInstance = getApp();
    var url = appInstance.globalData.doubanApi + "/v2/movie/in_theaters";
    var that=this;
    wx.request({
      url: url,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {"Content-Type":"json" }, // 设置请求的 header
      success: function (res) {
        that.setData({
          "InTheaters.subjects":res.data.subjects
        });
        wx.hideToast();
      },
      fail: function () {
         console.log("执行失败！");
      },
      complete: function () {
        console.log("complete");
      }
    })
  }
})