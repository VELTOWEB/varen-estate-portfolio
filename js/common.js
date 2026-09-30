
(function(){
 document.documentElement.classList.add('js-ready');
 const header=document.getElementById('siteHeader');
 const menuBtn=document.querySelector('.menu-toggle'); const mobileNav=document.getElementById('mobileNav'); const closeBtn=document.querySelector('.mobile-nav-close');
 function onScroll(){ if(header) header.classList.toggle('scrolled',window.scrollY>32); }
 onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
 function setMenu(open){ if(!mobileNav||!menuBtn)return; mobileNav.classList.toggle('is-open',open); mobileNav.setAttribute('aria-hidden',String(!open)); menuBtn.setAttribute('aria-expanded',String(open)); document.body.classList.toggle('nav-open',open); if(open){const l=mobileNav.querySelector('a'); if(l) setTimeout(()=>l.focus(),20);} }
 if(menuBtn) menuBtn.addEventListener('click',()=>setMenu(true)); if(closeBtn) closeBtn.addEventListener('click',()=>setMenu(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false); if(typeof window.closeLightbox==='function') window.closeLightbox();}});
 const els=[...document.querySelectorAll('.reveal')];
 if('IntersectionObserver' in window){ const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -30px'}); els.forEach(el=>io.observe(el)); setTimeout(()=>els.filter(el=>!el.classList.contains('is-visible')&&el.getBoundingClientRect().top<window.innerHeight).forEach(el=>el.classList.add('is-visible')),120); } else els.forEach(el=>el.classList.add('is-visible'));
 document.querySelectorAll('[data-demo-form]').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault(); const out=form.querySelector('.form-success'); if(!form.checkValidity()){form.reportValidity(); return;} if(out) out.textContent=form.dataset.success||'요청이 완료되었습니다.'; form.reset();});});
 window.addEventListener('error',function(e){ if(e.target && e.target.tagName==='IMG'){e.target.classList.add('image-error'); e.target.alt='이미지를 불러올 수 없습니다.';} },true);
})();
