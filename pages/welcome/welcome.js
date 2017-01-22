Page({
  onLoad:function(e){
      console.log("welcome  onload "+e);
  },
  onShow:function(){
      console.log("welcome on show");
  }
  ,
  onHide:function(){
      console.log("welcome on hide");
  },
  onUnload:function(){
    console.log("welcome on unload");
  },
  onReady:function(){
      console.log("welcome on ready");
  },
   onShareAppMessage:function(){
        
        return {
          title:"小程序",
          desc:"来啊",
          path:"/pages/main/main"

        };
   },
   openPoster:function(){
       wx.navigateTo({
         url: '/pages/poster/poster',
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
   }

    
});
