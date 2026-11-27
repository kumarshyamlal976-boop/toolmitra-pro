(function () {
  'use strict';
  var id = 'G-G39684WTC3', key = 'toolmitra_analytics_consent', loaded = false;
  function choice() { try { return localStorage.getItem(key); } catch(e) { return null; } }
  function start() {
    if (loaded) return;
    loaded = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
    gtag('consent','default',{analytics_storage:'denied'});
    gtag('consent','update',{analytics_storage:'granted'});
    gtag('js',new Date());
    gtag('config',id,{allow_google_signals:false,allow_ad_personalization_signals:false,page_location:location.origin+location.pathname});
    var script=document.createElement('script'); script.async=true; script.src='https://www.googletagmanager.com/gtag/js?id='+id; document.head.appendChild(script);
  }
  function save(value) {
    try { localStorage.setItem(key,value); } catch(e) {}
    if(value==='yes') start(); else { window['ga-disable-'+id]=true; if(loaded) gtag('consent','update',{analytics_storage:'denied'}); document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(/^_ga(?:_|$)/.test(n)){document.cookie=n+'=; Max-Age=0; path=/';document.cookie=n+'=; Max-Age=0; path=/; domain='+location.hostname;}}); }
    if(value==='yes' && loaded && window.gtag){window['ga-disable-'+id]=false;gtag('consent','update',{analytics_storage:'granted'});}
    document.getElementById('tm-analytics-panel').hidden=true;
  }
  if(choice()==='yes') start();
  document.addEventListener('DOMContentLoaded',function(){
    var box=document.createElement('section');box.id='tm-analytics-panel';box.setAttribute('aria-label','Analytics privacy choices');box.style.cssText='max-width:760px;margin:16px auto;padding:16px;background:#fff;color:#18203c;border:1px solid #ccc;border-radius:12px;font:14px/1.5 system-ui';box.hidden=choice()!==null;
    box.innerHTML='<strong>Optional website analytics</strong><p>Allow Google Analytics to measure visits and improve our tools? You can decline and still use all tools. <a href="privacy.html">Privacy policy</a></p><button type="button" id="tm-allow">Allow analytics</button> <button type="button" id="tm-deny">Decline analytics</button>';
    var wrap=document.createElement('div');wrap.style.cssText='text-align:center;padding:12px';var btn=document.createElement('button');btn.type='button';btn.textContent='Analytics privacy settings';btn.onclick=function(){box.hidden=false;};wrap.appendChild(btn);wrap.appendChild(box);document.body.appendChild(wrap);
    document.getElementById('tm-allow').onclick=function(){save('yes');};document.getElementById('tm-deny').onclick=function(){save('no');};
  });
})();
