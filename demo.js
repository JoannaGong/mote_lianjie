var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
var d = new Date();
var t0 = d.getTime();

// if(isIos){
  (function ios(){
    var ifr = document.createElement("iframe");
    ifr.src = "weixin://"; /***打开app的协议，有ios同事提供 weixin://***/
    ifr.style.display = "none";
    document.body.appendChild(ifr);
    window.setTimeout(function(){
      document.body.removeChild(ifr);
       window.location.href = "https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4"; /***下载app的地址***/
    },2000)
  })();
// }
