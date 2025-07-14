
(function(){
    if (window.lazyYTInit) return;
    window.lazyYTInit = true;
  
    var io = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        var el  = e.target;
        var vid = el.dataset.videoId;
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + vid + '?rel=0';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
        el.innerHTML = '';
        el.appendChild(iframe);
        obs.unobserve(el);
      });
    }, {
      root: null,
      rootMargin: '0px 0px 200px 0px',
      threshold: 0
    });
  
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.lazy-yt').forEach(function(el){
        var vid = el.dataset.videoId;
        el.style.cssText =
          'position:relative;padding-bottom:0;height:0;overflow:hidden;'+
          'background:url(https://img.youtube.com/vi/' + vid + '/hqdefault.jpg) center/cover no-repeat;'+
          'cursor:pointer;';
        var btn = document.createElement('div');
        btn.style.cssText =
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);'+
          'width:68px;height:48px;'+
          "background:url('https://i.imgur.com/TxzC70f.png') no-repeat center;";
        el.appendChild(btn);
        io.observe(el);
      });
    });
  })();
  