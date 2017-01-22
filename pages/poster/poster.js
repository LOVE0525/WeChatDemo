Page({
  data:{
    PageData:[
        {
           post_imageUrl: "http://mmbiz.qpic.cn/mmbiz_png/WRGz2LWLARDKOmvSlXIaOlyqInCjOywytd2g3WdzECL9BRq77g6MGgoknqzqQdgZxVIgnKdNrhzNjfQFKI9yGA/0?wx_fmt=png",
    post_title: "Papi酱给积家拍了广告片，她和品牌都在给自己加戏",
    post_desc: "不想成为代言人的网红不是好明星。",
    post_id:"1"
        },{
           post_imageUrl: "http://mmbiz.qpic.cn/mmbiz_png/WRGz2LWLARDPc3vovB0l9hVO2mPHpeaqvdbvI5O8N6I3eNVjEbVSRuxIpsaLYI9iahlvpV41VBWP0Jy1IAYgicXQ/0?wx_fmt=png",
    post_title: "重磅发布！2016年氪估值排行榜 | WISE·2016时代峰会",
    post_desc: "此榜单涵盖了在2013年10月到2016年10月间，获得融资、主营业务在中国大陆，且具备TMT行业属性的未上市企业Top200，并给出了相应的估值。",
    post_id:"2"
        },{
           post_imageUrl: "http://mmbiz.qpic.cn/mmbiz_jpg/WRGz2LWLARDjWhVob1ZKHRSJEchWTC8I69fzur1SIRs9fic4DCJjHXFaAQWNNXhRB12MGZRPIw201gc3m8pRkyg/0?wx_fmt=jpeg",
    post_title: "为什么越学反而越蠢？碎片化学习是个骗局 | 周末漫谈",
    post_desc: "碎片化的陷阱，在于极大提高了并没有什么用的信息，而降低了最重要的独立思考能力。",
    post_id:"3"
        }
    ]
   

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   console.log("poster onload")
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("poster onready");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
 console.log("poster onshow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
 console.log("poster onhide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
 console.log("poster onunload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("poster onpulldownrefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("poster onreachbottom");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  tabchange:function(e){
  console.log(e);
  },
  openDetail:function(event){
    wx.navigateTo({
      url: 'postdetail/postdetail?postid='+event.currentTarget.dataset.postid,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log(event);
  }
})