(function(){
  function openclient(){
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {  // 苹果
      var loadDateTime = new Date();
      window.setTimeout(function () {
        var timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 5000) {   // 下载
          window.location = "https://apps.apple.com/cn/app/%E8%89%BA%E7%BA%A6/id1485342529?ign-mpt=uo%3D4";
        } else {
          window.close();
        }
      }, 600);
      window.location = "wxe3e7c50449fde018://";
    } else if (navigator.userAgent.match(/android/i)) {  // 安卓
      var state = null;
      try {
        state = window.open("wxe3e7c50449fde018://", '_blank');
      } catch (e) { }
      if (state) {
        window.close();
      } else {
        alert(state);
        // window.location = "https://model-back.xinghaotian.cn/yiyue.apk";
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    openclient()   // 自动打开app
    document.getElementById('down_app').addEventListener('click', openclient, false)
  }, false)
})()