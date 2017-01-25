var util = require('../../utils/util.js')
Page({
  data: {
    InTheaters: {
      subjects: [],
      start: 0,
      count: 20,
      subjectsEmptyFlag: false
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var appInstance = getApp();
    var url = appInstance.globalData.doubanApi + "/v2/movie/top250?start=0&count=20";
    this.GetTheaters(url);
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
  onReachBottom: function () {
    //加载更多
    var start = this.data.InTheaters.start;
    var count = this.data.InTheaters.count;
    var appInstance = getApp();
    var url = appInstance.globalData.doubanApi;
    var intheatersurl = url + "/v2/movie/top250?count=20&start=" + start;
 
    this.GetTheaters(intheatersurl);
  },
  onPullDownRefresh: function () {
    //下拉刷新
    var appInstance = getApp();
    var url = appInstance.globalData.doubanApi + "/v2/movie/top250?start=0&count=20";
    this.setData({
      "InTheaters.subjectsEmptyFlag": true,
      "InTheaters.subjects":[]
    });
    this.GetTheaters(url);
  },
  GetTheaters: function (url) {
    wx.showToast({
      icon: "loading",
      title: "加载中..."
    });
    wx.showNavigationBarLoading();
    util.http(url, (subjects) => {
      if (this.data.InTheaters.subjectsEmptyFlag) {
        this.setData({
          "InTheaters.subjects": subjects
        });
        this.setData({
          "InTheaters.start": 20,
          "InTheaters.subjectsEmptyFlag": false
        });
      }
      else {
        this.setData({
          "InTheaters.subjects": this.data.InTheaters.subjects.concat(subjects)
        });
        this.setData({
          "InTheaters.start": this.data.InTheaters.start + 20,
          "InTheaters.subjectsEmptyFlag": false
        });
      }
wx.hideToast();
wx.hideNavigationBarLoading();
    })
     

  }
})