(function(){
  var ua = navigator.userAgent.toLowerCase();
  var open_app_url = 'wxe3e7c50449fde018://';
  var down_android_url = 'https://model-back.xinghaotian.cn/yiyue.apk';

  function openclient(){
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = open_app_url;
    ifr.style.display = 'none';

    document.body.appendChild(ifr);

    var t = setTimeout(function(){
      var endTime = Date.now();
      if(endTime - startTime > 620){
        document.body.removeChild(ifr);
      }else{
        window.location = 'wxe3e7c50449fde018://';
      }
    }, 600);

    window.onblur = function(){
      this.clearTimeout(t);
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    openclient()   // 自动打开app
    // document.getElementById('down_app').addEventListener('click', openclient, false)
  }, false)

})()
