
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({

data:{
  content: '',
  urlcurrent: getApp().globalData.url,
  biaoti:'',
  neirong:'',
  xingming:'',
  xingbie:'',
  banji:'',
  banzhuren:'',
  detailstid:''
},
onLoad: function (options) { 

      if (options != null) {
        
        console.log("optionsid:" + options.id);
      
        wx.setStorage({
          key: 'fxid',
          data: options.id,
        });


      } 
        //this.setData({
        //    title: options.id
        //})
        // 页面初始化 options为页面跳转所带来的参数
        //弹幕  
        var that = this;
       that.detailstid = options.id;
        wx.request({
          url: getApp().globalData.url+"vxuesheng.action?list&rows=10&page=0",
            data: {
                id:  options.id, 
            },
            header: {
               // 'content-type': 'application/json'
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            method: 'GET',
            success: function (res) {
             // console.log("内容是："+res.data.rows[0]["a6"]);
         
                that.setData({
                  xingming: res.data.rows[0]["a1"],
                 // content: res.data.rows[0]["a6"].replace("http://localhost:8080/caipin/", getApp().globalData.url),
                  xingbie: res.data.rows[0]["a2"],
                  banji: res.data.rows[0]["aaa"],
                  banzhuren:res.data.rows[0]["a4"]
             
                })

              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
               // console.log(that.data.danmuList);
              var temp = WxParse.wxParse('article', 'html', that.data.content, that, 5);
               // that.setData({
                //  article: 'temp'
               // })
             
            }
        })
  
    },  
  //获取用户输入的姓名信息
  xingminginput: function (e) {
    console.log(e.detail.value);
    this.setData({
      xingming: e.detail.value
    })
  },
  //获取用户输入的班级信息
  banjiinput: function (e) {
    console.log(e.detail.value);
    this.setData({
      banji: e.detail.value
    })
  },
  //获取用户输入的班主任信息
  banzhureninput: function (e) {
    console.log(e.detail.value);
    this.setData({
      banzhuren: e.detail.value
    })
  },
  //获取用户输入的班主任信息
  xingbieinput: function (e) {
    console.log(e.detail.value);
    this.setData({
      xingbie: e.detail.value
    })
  }, 
  //获取用户输入的价格信息
  dianhuainput: function (e) {
    console.log(e.detail.value);
    this.setData({
      dianhua: e.detail.value
    })
  },//支付方式
  radiochange: function (e) {
    xingbie:e.detail.value
   // console.log('radio发生change事件，携带的value值为：', e.detail.value)
  },
  xiugaiclick: function (e) { 
    var that = this;

    console.log('userid' + wx.getStorageSync("userid") +"  neirong:::"+this.data.dianhua);
    wx.request({
      url: getApp().globalData.url +'xuesheng.action?update', //仅为示例，并非真实的接口地址
      data: {
        a1:that.data.xingming,
        a2: that.data.xingbie,
        a4: that.data.banzhuren,
        id:that.detailstid 
        
      },
      method: 'POST',//POST提交保证中文不乱码
      header: {
       // 'content-type': 'application/json' // 默认值
        'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
      },
      success: function (res) {
       // that.setData({ remenData: res.data.Data });
        console.log('数据是： ' + res.data.Data);

        wx.showToast({
          title: '修改成功',
         // image: '../image/hy_bt2.png',
          duration: 2000
        }) 
      }
    })



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
    }
   ,
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