
(function(){
 const grid=document.getElementById('homeListings'); if(grid){grid.innerHTML=window.PROPERTIES.filter(p=>['VRN-1001','VRN-1002','VRN-1005','VRN-1009','VRN-1011','VRN-1012'].includes(p.id)).map(window.VarenCard).join('');window.bindFavoriteButtons(grid);grid.querySelectorAll('.property-card').forEach(el=>el.classList.add('reveal','is-visible'));}
 const form=document.getElementById('heroSearch'); if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const q=new URLSearchParams();for(const [k,v] of d.entries())if(v)q.set(k,v);location.href='properties.html'+(q.toString()?'?'+q.toString():'');});
})();
