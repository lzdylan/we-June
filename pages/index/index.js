//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    goods: {
      imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度 
      imgUrls: "../../images/goods.jpg",
      price: 2499,
      label: ['南洋金珠','14-16mm正圆无暇','经典吊坠'],
      describe: '带上之后简直美的没朋友！O(∩_∩)O哈哈~'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
