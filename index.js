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
  var config = {
    scheme_IOS: 'wxe3e7c50449fde018://',
    scheme_Adr: 'wxe3e7c50449fde018://',  // https://model-back.xinghaotian.cn/yiyue.apk
  };

  function openclient(){
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = ua.indexOf('os') > 0 ? config.scheme_IOS : config.scheme_Adr;
    ifr.style.display = 'none';

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

