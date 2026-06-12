/* Floating palette switcher — toggles the 7 color schemes (data-theme on <html>). */
const THEMES=[
 {id:'dark',name:'Metallic Dark',tag:'Cores da marca',sw:['#0F0F0F','#ACAFB2','#4296E6']},
 {id:'blue',name:'Blue-Forward',tag:'Cores da marca',sw:['#ffffff','#1f7ae0','#0c1622']},
 {id:'mono',name:'Editorial Mono',tag:'Cores da marca',sw:['#ffffff','#0a0a0a','#4296E6']},
 {id:'proptech',name:'Proptech',tag:'Paleta moderna',sw:['#0b1f3a','#0e9f6e','#ffffff']},
 {id:'warm',name:'Warm Estate',tag:'Paleta moderna',sw:['#f7f2ea','#b6883f','#211c15']},
 {id:'gray',name:'Soft Gray',tag:'Paleta clara',sw:['#eef0f2','#171a1e','#4296E6']},
 {id:'sky',name:'Sky Blue',tag:'Paleta clara',sw:['#e3eefb','#1f7ae0','#0b1c30']}
];
function setTheme(id){
  document.documentElement.setAttribute('data-theme',id);
  document.querySelectorAll('.theme-opt').forEach(o=>o.classList.toggle('active',o.dataset.id===id));
}
document.addEventListener('DOMContentLoaded',()=>{
  const fab=document.createElement('button');
  fab.className='theme-fab'; fab.innerHTML='🎨 <span>Cores</span>';
  const panel=document.createElement('div');
  panel.className='theme-panel';
  panel.innerHTML='<h4>Esquema de cores</h4>'+THEMES.map(t=>
    `<button class="theme-opt" data-id="${t.id}"><span class="theme-sw">${t.sw.map(c=>`<i style="background:${c}"></i>`).join('')}</span><span><span class="nm">${t.name}</span><br><span class="tg">${t.tag}</span></span></button>`).join('');
  document.body.appendChild(panel); document.body.appendChild(fab);
  fab.addEventListener('click',e=>{e.stopPropagation();panel.classList.toggle('open');});
  document.addEventListener('click',e=>{if(!panel.contains(e.target)&&e.target!==fab)panel.classList.remove('open');});
  panel.querySelectorAll('.theme-opt').forEach(o=>o.addEventListener('click',()=>{setTheme(o.dataset.id);panel.classList.remove('open');}));
  setTheme('dark');
});
