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
