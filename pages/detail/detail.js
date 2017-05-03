// pages/detail/detail.js
Page({
  data:{
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度 
    price: 2499,
    label: ['南洋金珠','14-16mm正圆无暇','经典吊坠'],
    userInfo: {}
  },
  goIndex: function() {
    wx.switchTab({
      url: '../index/index',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  goShopingCart: function() {
    wx.switchTab({
      url: '../shopingCart/shopingCart',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  goBigimage: function() {
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: ['http://www.yespearl.com/upimg/zhenzhu/t_diaozhui0327150221_0.jpg'],
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  goAssess: function() {
    wx.navigateTo({
      url: '../assess/assess',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})