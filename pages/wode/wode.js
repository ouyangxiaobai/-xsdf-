// pages/boy_shuju/boy_shuju.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: [],
    date: '2016-11-08',
    array: [],
    index: 0,
    remenData: {},
    juese:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
    if (wx.getStorageSync('username') == null || wx.getStorageSync('username') == '') {
      wx.showToast({ title: '请您重新登录', icon: 'success', duration: 3000 })
      wx.navigateTo({
        url: '../login/login'
      })

    } 

    
 

    var userName = wx.getStorageSync('username');
    console.log("name::::::::::::" + userName);
    if (userName) {
      this.setData({ username: userName });
    } 
    var JueSe = wx.getStorageSync('juese');

if(JueSe)
{
 
    this.setData({ juese: wx.getStorageSync('juese') });
}    
console.log("JueSe::::::::::::" + JueSe);
    this.setData({ avatar: wx.getStorageSync('headimg') });

    if (options != null) {
      console.log("options:" + options.fxid);


      wx.setStorage({
        key: 'fxid',
        data: options.fxid,
      });


    }


  }, listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面

    var userName = wx.getStorageSync('bi_openid');
    if (userName) {
      this.setData({ userName: userName });
    }

    this.setData({
      index: e.detail.value
    });
    console.log('a11111111: ' + e.detail.value + ' userid: ' + userName);

    var that = this;
 

  },
  showinput: function (e) {
    console.log("aaaaaaaaaaaac");
    this.onLoad();
  },
  sxrefsh: function (e) {
    wx.showToast({ title: '刷新成功', icon: 'success', duration: 1000 })

    var thatone = this;
    var userName = wx.getStorageSync('bi_openid');
    console.log("name::::::::::::" + userName);
    if (userName) {
      this.setData({ userName: userName });
    } 

    return;
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

    var userName = wx.getStorageSync('bi_openid');


    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index?fxid=' + userName,
      success: function (res) {
        // 转发成功
        console.log(888888);
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})