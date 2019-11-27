document.getElementById('icon_left').onclick = function(){
  document.getElementById('go_app').style.display = 'none';
};

(function(){
  var ua = navigator.userAgent.toLowerCase();
  var t;
  var config = {
    scheme_IOS: '',
    scheme_Adr: '',
    download_url: document.getElementById('down_app').nodeValue,
    timeout: 600
  };

  function openclient(){
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = ua.indexOf('os') > 0 ? config.scheme_IOS : config.scheme_Adr;
    ifr.style.display = 'none';

    document.body.appendChild(ifr);

    var t = setTimeout(function(){
      var endTime = Date.now();
      if(endTime - startTime > config.timeout + 20){
        document.body.removeChild(ifr);
      }else{
        window.location = config.download_url;
      }
    }, config.timeout);

    window.onblur = function(){
      this.clearTimeout(t);
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('open_app').addEventListener('click', openclient, false)
  }, false)

})()


// var u = navigator.userAgent,
// app = navigator.appVersion;

// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;  // 安卓终端或者uc浏览器
// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);   //ios终端

// alert('是否是iOS：' + isiOS);

// if(isAndroid){
//   alert('是Android：' + isAndroid);
// }

// if(isiOS ){
//   alert('是isiOS ：' + isiOS );
// }
