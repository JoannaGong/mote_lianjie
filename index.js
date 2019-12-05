(function(){
  function openclient(){
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {  // 苹果
      var loadDateTime = new Date();
      window.setTimeout(function () {
        var timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 1000) {   // 下载
          alert('aa')
          window.location = "https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4";
        } else {
          alert('bb')
          window.close();
        }
      }, 800);
      window.location = "wxe3e7c50449fde018://";
    } else if (navigator.userAgent.match(/android/i)) {  // 安卓
      var state = null;
      try {
        state = window.open("wxe3e7c50449fde018://", '_blank');
      } catch (e) { }
      if (state) {
        // alert('aa')
        // window.close();
      } else {
        alert('bb')
        window.location = "https://model-back.xinghaotian.cn/yiyue.apk";
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    openclient()   // 自动打开app
    document.getElementById('down_app').addEventListener('click', openclient, false)
  }, false)
})()