Page({
  data:{
  
  },
  onLoad:function(event){
      this.setData({"postId":event.postid});
  }
  ,
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})