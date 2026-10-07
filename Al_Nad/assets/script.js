
document.addEventListener('DOMContentLoaded',()=>{
 const loader=document.querySelector('.preloader');
 if(loader) setTimeout(()=>loader.classList.add('hide'),500);
 document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 const back=document.querySelector('.backtop');
 window.addEventListener('scroll',()=>{if(back)back.style.display=scrollY>450?'grid':'none'});
 if(back)back.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 document.querySelectorAll('form.quote-form').forEach(form=>{
  form.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(form), subject=encodeURIComponent('Equipment Quote Request');
   const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nEquipment: ${data.get('equipment')}\nCompany / Project: ${data.get('company')}\nLocation: ${data.get('location')}\nMessage: ${data.get('message')}`);
   window.location.href=`mailto:info@alnaduae.com?subject=${subject}&body=${body}`;
  });
 });
});

document.addEventListener('click',function(e){
 const btn=e.target.closest('[data-product-modal]');
 if(!btn) return;
 const modalEl=document.getElementById('productDetailModal');
 if(!modalEl) return;
 modalEl.querySelector('.modal-product-image').src=btn.dataset.image||'';
 modalEl.querySelector('.modal-product-image').alt=btn.dataset.title||'';
 modalEl.querySelector('.product-modal-title').textContent=btn.dataset.title||'Equipment';
 modalEl.querySelector('.product-modal-desc').textContent=btn.dataset.desc||'';
 const modal=bootstrap.Modal.getOrCreateInstance(modalEl);
 modal.show();
});

// Professional navigation and accessibility helpers
(function(){
 const path=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.navbar .nav-link').forEach(a=>{const href=(a.getAttribute('href')||'').split('/').pop(); if(href===path && !a.classList.contains('dropdown-toggle')) a.classList.add('active');});
 document.querySelectorAll('.mega-menu a').forEach(a=>a.addEventListener('click',()=>{const nav=document.getElementById('nav'); if(nav && nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();}));
})();
