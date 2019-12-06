var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
var open_app_url = 'wxe3e7c50449fde018://';
var download_url;



(function(){
  function openclient(){
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = open_app_url;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);

    var t = setTimeout(function(){
      var endTime = Date.now();
      if(endTime - startTime > 1000){
        document.body.removeChild(ifr);
      }else{
        window.location = open_app_url;
      }
    }, 1000);

    window.onblur = function(){
      this.clearTimeout(t);
    }
  }

  function init(){
    // if(isWeixin){
  
    // }else 
    if(isAndroid){
      download_url = 'https://model-back.xinghaotian.cn/yiyue.apk';
    }else if(isIos){
      download_url = "https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4";
    }
    document.getElementById('down_app').href = download_url;
  }

  window.addEventListener('DOMContentLoaded', function(){
    openclient()   // 自动打开app
    document.getElementById('down_app').addEventListener('click', init, false)
  }, false)

})()