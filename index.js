var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isWeibo = ua.indexOf('weibo') != -1;
var isQq = ua.indexOf('QQ') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
var open_app_url = 'wxe3e7c50449fde018://';
var download_url;

setTitle('艺约链接')

function setTitle(title){
  document.title = title || document.title;
  var ifr = document.createElement('iframe')
  ifr.src = "/favicon.ico";
  ifr.onload = function() {
    setTimeout(function(){
      ifr.remove();
    }, 0)
  }
  document.body.appendChild(ifr);
}


(function(){
  if(isAndroid){
    download_url = 'https://model-back.xinghaotian.cn/yiyue.apk';
  }else if(isIos){
    download_url = "https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4";
  }

  function openclient(){
    var startTime = Date.now();
    var aLink = document.createElement('a');
    aLink.href = open_app_url;
    document.body.appendChild(aLink);
    aLink.click();

    var t = setTimeout(function(){
      var endTime = Date.now();
      if(endTime - startTime > 620){
        document.body.removeChild(aLink);
      }else{
        window.location = download_url;
      }
    }, 600);

    window.onblur = function(){
      this.clearTimeout(t);
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    if(isWeibo){
      document.getElementById('JweixinTip').style.display='block';
      function weixinTip(ele){
        ele.onclick=function(e){
          window.event? window.event.returnValue = false : e.preventDefault();
          document.getElementById('JweixinTip').style.display='block';
        }
        document.getElementById('JweixinTip').onclick=function(){
          this.style.display='none';
        }
      }
      var btn1 = document.getElementById('open_app'); //打开
      weixinTip(btn1);
      var btn2 = document.getElementById('down_app'); //下载
      weixinTip(btn2);
    }else{
      openclient()   // 自动打开app
      document.getElementById('down_app').addEventListener('click', function(){
        document.getElementById('down_app').href = download_url;
      }, false)
    }
    
  }, false)

})()