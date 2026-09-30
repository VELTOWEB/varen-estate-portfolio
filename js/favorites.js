
(function(){
 const KEY='varenFavorites';
 function read(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return []}}
 function write(ids){try{localStorage.setItem(KEY,JSON.stringify(ids))}catch(e){}}
 window.VarenFavorites={has:id=>read().includes(id),toggle:function(id){const a=read();const i=a.indexOf(id);if(i>=0)a.splice(i,1);else a.push(id);write(a);return a.includes(id)},all:read};
 window.VarenCard=function(p){
   const status=p.status?'<span class="status-badge">'+p.status+'</span>':'';
   const active=window.VarenFavorites.has(p.id)?' is-active':'';
   const rooms=p.rooms?'<span>방 '+p.rooms+'</span>':''; const baths=p.bathrooms?'<span>욕실 '+p.bathrooms+'</span>':'';
   return '<article class="property-card" data-id="'+p.id+'"><a class="property-card-link" href="property.html?id='+encodeURIComponent(p.id)+'"><div class="property-image">'+status+'<img src="'+p.coverImage+'" alt="'+p.title+' 대표 이미지" loading="lazy"></div><div class="property-meta"><div class="property-kicker"><span>'+window.VAREN_AREAS[p.area].name+' · '+p.propertyType+'</span><span>'+p.id+'</span></div><h3>'+p.title+'</h3><p class="property-price">'+p.priceLabel+'</p><div class="property-specs"><span>전용 '+p.exclusiveArea+'</span>'+rooms+baths+'</div></div></a><button type="button" class="favorite-btn'+active+'" data-favorite="'+p.id+'" aria-label="관심 매물 '+(active?'해제':'추가')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.8L6 21V4.8Z"/></svg></button></article>';
 };
 window.bindFavoriteButtons=function(root){(root||document).querySelectorAll('[data-favorite]').forEach(btn=>{if(btn.dataset.bound)return;btn.dataset.bound='1';btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const state=window.VarenFavorites.toggle(btn.dataset.favorite);btn.classList.toggle('is-active',state);btn.setAttribute('aria-label','관심 매물 '+(state?'해제':'추가'));});});};
})();
