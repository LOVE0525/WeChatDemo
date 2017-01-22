//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }, onReady:function(){
    console.log("log   onReady");
  },
  onShow:function(){
    console.log("log onShow");
  },
  onHide:function(){
    console.log("log onHide");
  },
  onUnload:function(){
    console.log("log onUnLoad");
  },
    onPullDownRefresh:function(e){
      console.log("用户下拉");
      wx.stopPullDownRefresh();
    },
    onReachBottom:function(){
      console.log("用户下拉触底事件");
    },
    onShareAppMessage:function(e){
      return {
        title: '测试分享',
        desc: '快来分享。。。',
        path: 'http://wx.qlogo.cn/mmhead/SlWGvyryTEYE2biaD6hnEE4aGP1ia6kdrkheDGsbPwBBU/132'
      }
    }
})
