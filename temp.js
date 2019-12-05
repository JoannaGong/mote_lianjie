// window.onload = function () {
//   var openUrl = document.getElementById('down_app').href
//   openApp(openUrl, false)
// }


// function openApp(openUrl, callback) {
//   //区分是否android和ios方法
//   var u = navigator.userAgent, app = navigator.appVersion;
//   var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
//   var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

//   if (isAndroid) {
//     openUrl = 'https://model-back.xinghaotian.cn/yiyue.apk'
//   } else if (isIos) {
//     // window.location.href = 'wxe3e7c50449fde018://';
//     openUrl = 'wxe3e7c50449fde018://'
//   }
//   //检查app是否打开
//   function checkOpen(cb) {
//     var _clickTime = +(new Date());
//     function check(elsTime) {
//       if (elsTime > 3000 || document.hidden || document.webkitHidden) {
//         cb(1);
//       } else {
//         cb(0);
//       }
//     }
//     //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
//     var _count = 0, intHandle;
//     intHandle = setInterval(function () {
//       _count++;
//       var elsTime = +(new Date()) - _clickTime;
//       if (_count >= 100 || elsTime > 3000) {
//         clearInterval(intHandle);
//         check(elsTime);
//       }
//     }, 20);
//   }
//   //在iframe 中打开APP
//   var ifr = document.createElement('iframe');
//   ifr.src = openUrl;
//   ifr.style.display = 'none';
//   if (callback) {
//     checkOpen(function (opened) {//checkOpen中的cbk参数 = function (opened)
//       if (opened == 0) {
//         //用户没有安装app 可以请求下载地址并跳转 跳转方法：window.location.href 即可
//       } else if (opened == 1) {
//         //用户打开了app  用户有安装app 
//       }
//     });
//   }
//   document.body.appendChild(ifr);
//   setTimeout(function () {
//     document.body.removeChild(ifr);
//   }, 3000);
// }


(function(){
  var ua = navigator.userAgent.toLowerCase();
  var open_app_url = 'wxe3e7c50449fde018://';
  var down_android_url = 'https://model-back.xinghaotian.cn/yiyue.apk';

  function openclient(){
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = open_app_url;
    // ifr.style.display = 'none';
    document.getElementById('go_app').style.display = 'none'

    document.body.appendChild(ifr);

    // var t = setTimeout(function(){
    //   var endTime = Date.now();
    //   if(endTime - startTime > 1000){
    //     document.body.removeChild(ifr);
    //   }else{
    //     // alert('hhh')
    //     // window.location = ifr.src;
    //   }
    // }, 1000);

    // window.onblur = function(){
    //   this.clearTimeout(t);
    // }
  }

  window.addEventListener('DOMContentLoaded', function(){
    openclient()   // 自动打开app
    document.getElementById('down_app').addEventListener('click', openclient, false)
  }, false)

})()


var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
var d = new Date();
var t0 = d.getTime();

//判断执行安卓按钮还是苹果按钮
$(function () {
  if (isAndroid) {
    $(".a-btn").show();
  } else {
    $(".i-btn").show();
  }
});

//跳转下载
// 安卓 // openApp("安卓下载链接");
$(".a-btn").click(function () {
  openApp("https://model-back.xinghaotian.cn/yiyue.apk");
});

// 苹果 // openApp("IOS App Store下载链接");
$(".i-btn").click(function () {
  openApp("https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4");
});

// 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
window.addEventListener('DOMContentLoaded', function(){
  var ifr = document.createElement('iframe');
  ifr.src = 'weixin://';
  ifr.style.display = 'none'
  document.body.appendChild(ifr);
  openApp('https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4')
}, false)

// 否则打开a标签的href链接
function openApp(src) {
  var delay = setInterval(function () {
    var d = new Date();
    var t1 = d.getTime();
    if (t1 - t0 < 3000 && t1 - t0 > 2000) {
      // alert('请下载APP');
      window.location.href = src;
    }
    if (t1 - t0 >= 3000) {
      clearInterval(delay);
    }
  }, 2000);
}

