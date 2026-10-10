(() => {
'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const projects = [
  {id:'forge', name:'Forge', number:'01', category:'product', type:'PRODUCT / THINKING COMPANION', tagline:'A place for unfinished thoughts.', description:'An AI-assisted thinking companion for capturing sparks of ideas, expanding fragments, and thinking in a non-linear way. Built as a Rails and React TypeScript application.', tags:['Ruby on Rails','React','TypeScript','Tailwind CSS'], links:[['Repository','https://github.com/parikesitad-pm/forge'],['Live frontend','https://frontendreactts.vercel.app']]},
  {id:'stack', name:'STACK', number:'02', category:'product', type:'PRODUCT / MARKDOWN WORKSPACE', tagline:'Markdown notes without the noise.', description:'A Markdown-first notes workspace with offline-friendly local storage, per-user isolation, organization tools, and an intentionally focused editor.', tags:['React','TypeScript','IndexedDB','Auth0','AWS'], links:[['Repository','https://github.com/parikesitad-pm/stack-react_ts_with_aws_deployment'],['Live website','https://stack-md.online']]},
  {id:'untitled', name:'untitled', number:'03', category:'product', type:'PRODUCT / ASSESSMENT', tagline:'Define yourself.', description:'Interactive assessments spanning activity builders, participant areas, weighted scoring, leaderboards and a durable stats/results system. Frontend and Firebase backend are separate repositories.', tags:['React','TypeScript','Firebase','Firestore','Cloudinary'], links:[['Frontend','https://github.com/parikesitad-pm/frontend_untitled_modula_project_react_ts'],['Backend','https://github.com/parikesitad-pm/backend_untitled_modula_project_firebase']]},
  {id:'dotmod', name:'DOTMOD', number:'04', category:'tooling', type:'TOOLING / WORKSTATION', tagline:'Backup first. Rebuild later.', description:'Portable Windows environment backup-and-restore tooling, including configuration snapshots, developer profiles, safe rollback and reproducible workstation setup.', tags:['PowerShell','WinGet','Windows','Developer Tools'], links:[['Repository','https://github.com/parikesitad-pm/windows_dotfiles']]},
  {id:'autofailover', name:'AutoFailover', number:'05', category:'desktop', type:'DESKTOP GUI / PYTHON', tagline:'Keep live connections alive.', description:'A Python desktop app with a CustomTkinter UI for network failover automation. Designed around healthy path selection and protection of live workloads such as vMix, OBS and Zoom.', tags:['Python','CustomTkinter','Networking','Automation'], links:[['Repository','https://github.com/parikesitad-pm/smart_auto_failover']]},
  {id:'afrizal', name:'Afrizal Portfolio', number:'06', category:'creative', type:'CREATIVE / INTERACTIVE PORTFOLIO', tagline:'Motion, interaction and identity.', description:'A multilingual interactive portfolio for Afrizal Pramudyan, using custom interfaces, animation, and 3D to present multidisciplinary creative work.', tags:['React','TypeScript','GSAP','Three.js','i18n'], links:[['Repository','https://github.com/parikesitad-pm/ap_branding_react_ts'],['Live website','https://ap-branding-react-ts.vercel.app']]},
  {id:'base', name:'MODULA Base', number:'07', category:'experiment', type:'EXPERIMENT / ERP + POS', tagline:'Exploring business-system foundations.', description:'An earlier ERP, inventory, POS and accounting architecture experiment. This is a legacy exploration, not a production-ready or commercially available product.', tags:['React','TypeScript','Ruby','ERP / POS'], links:[['Repository','https://github.com/parikesitad-pm/modula_base']]},
  {id:'manjaro', name:'Manjaro Dotfiles', number:'08', category:'tooling', type:'SHELL / LINUX ENVIRONMENT', tagline:'A terminal-first development setup.', description:'Modular Manjaro GNOME development environment with automated Bash setup, Zsh configuration, Starship prompts, Kitty, and developer tools.', tags:['Bash','Zsh','Starship','Manjaro'], links:[['Repository','https://github.com/parikesitad-pm/dotfile_v2']]},
  {id:'gundam', name:'Gundam GNOME', number:'09', category:'tooling', type:'SHELL / DESKTOP AUTOMATION', tagline:'A declarative Linux desktop.', description:'Script-driven GNOME desktop customization inspired by Gundam 00, with automated installation, theme presets, and lightweight Linux workstation tuning.', tags:['Shell','Bash','GNOME','Linux'], links:[['Repository','https://github.com/parikesitad-pm/gundam-celestial-gnome-theme']]}
];
const grid = $('#projectGrid'), modal = $('#projectDialog');
const closeDialog = $('#closeDialog');
function make(tag, cls, text) {const e = document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e}
function openProject(p) {
 $('#modalIndex').textContent='PROJECT / '+p.number;
 $('#modalType').textContent=p.type;
 $('#modalTitle').textContent=p.name;
 $('#modalDescription').textContent=p.description;
 const tags=$('#modalTags');tags.replaceChildren(...p.tags.map(t=>make('span','',t)));
 const links=$('#modalLinks');links.replaceChildren(...p.links.map(([label,url])=>{const a=make('a','',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a}));
 if(!modal.open) modal.showModal();
}
closeDialog.addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
function renderProjects(filter='all') {
 const selected=projects.filter(p=>filter==='all'||p.category===filter);
 grid.replaceChildren(...selected.map(p=>{
   const card=make('button','project');card.type='button';card.setAttribute('aria-label','Open '+p.name+' details');
   const top=make('div','project-top');top.append(make('span','project-index',p.number+' / 09'),make('span','project-type',p.category.toUpperCase()));
   const heading=make('h3','',p.name),subtitle=make('p','',p.tagline),bottom=make('div','project-bottom');
   bottom.append(make('span','',p.tags[0]),make('span','project-arrow','↗'));
   card.append(top,heading,subtitle,bottom);
   card.addEventListener('click',()=>openProject(p));return card;
 }));
}
renderProjects();
$$('.filter').forEach(button=>button.addEventListener('click',()=>{
 $$('.filter').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 renderProjects(button.dataset.filter);
}));
const palette=$('#commandDialog'), paletteInput=$('#commandInput'), results=$('#commandResults');
const sections=[{name:'Home',hash:'#top'},{name:'About',hash:'#about'},{name:'Projects',hash:'#projects'},{name:'Tech stack',hash:'#stack'},{name:'Contact',hash:'#contact'}];
const commands=[...sections.map(s=>({label:s.name,meta:'PAGE',run:()=>document.querySelector(s.hash)?.scrollIntoView({behavior:reduced?'auto':'smooth'})})),...projects.map(p=>({label:p.name,meta:'PROJECT',run:()=>openProject(p)}))];
let filtered=commands,selected=0;
function selectCommand(items=filtered) {
 $$('.palette-item').forEach((btn,i)=>{btn.classList.toggle('chosen',i===selected);btn.setAttribute('aria-selected',String(i===selected))});
}
function filterCommands() {
 const q=paletteInput.value.trim().toLowerCase();
 filtered=commands.filter(c=>(c.label+' '+c.meta).toLowerCase().includes(q));
 results.replaceChildren(...filtered.map((cmd,i)=>{
   const btn=make('button','palette-item');btn.type='button';btn.setAttribute('role','option');
   btn.append(make('span','',cmd.label),make('small','',cmd.meta));
   btn.addEventListener('mouseenter',()=>{selected=i;selectCommand()});
   btn.addEventListener('click',()=>executeCommand(i));
   return btn;
 }));
 selected=0;selectCommand();
 if(!filtered.length)results.append(make('p','palette-empty','No matching commands'));
}
function openCommand(){if(!palette.open)palette.showModal();paletteInput.value='';filterCommands();paletteInput.focus()}
function executeCommand(i){const c=filtered[i];palette.close();if(c)c.run()}
$('#commandButton').addEventListener('click',openCommand);
paletteInput.addEventListener('input',filterCommands);
paletteInput.addEventListener('keydown',e=>{
 if(e.key==='ArrowDown'){e.preventDefault();selected=(selected+1)%Math.max(filtered.length,1);selectCommand()}
 if(e.key==='ArrowUp'){e.preventDefault();selected=(selected-1+Math.max(filtered.length,1))%Math.max(filtered.length,1);selectCommand()}
 if(e.key==='Enter'){e.preventDefault();executeCommand(selected)}
});
palette.addEventListener('click',e=>{if(e.target===palette)palette.close()});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette.open?palette.close():openCommand()}});
function onScroll(){
 const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
 $('#progress').style.width=(scrollY/max*100)+'%';
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(!reduced && 'IntersectionObserver' in window){
 const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});
 $$('.reveal').forEach(el=>obs.observe(el));
}else $$('.reveal').forEach(el=>el.classList.add('visible'));
const terminal=$('#typedProjects');
if(!reduced){
 const lines=['forge · stack · untitled','zsh · pwsh · bash · starship','build · break · learn · repeat'];
 let line=0,pos=0,erasing=false;
 function type(){
   const target=lines[line];
   if(!erasing){pos=Math.min(target.length,pos+1)}else{pos=Math.max(0,pos-1)}
   terminal.textContent=target.slice(0,pos);
   const cursor=make('span','caret');cursor.setAttribute('aria-hidden','true');terminal.append(cursor);
   if(pos===target.length&&!erasing){erasing=true;setTimeout(type,1550);return}
   if(pos===0&&erasing){erasing=false;line=(line+1)%lines.length;setTimeout(type,350);return}
   setTimeout(type,erasing?40:85);
 }setTimeout(type,550);
}else terminal.textContent='forge · stack · untitled · dotmod';
if(!reduced&&window.matchMedia('(pointer: fine)').matches){
 const glow=$('#pointerGlow');let x=-1000,y=-1000,gx=-1000,gy=-1000;
 addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY},{passive:true});
 function follow(){gx+=(x-gx)*.09;gy+=(y-gy)*.09;glow.style.transform='translate('+(gx-235)+'px,'+(gy-235)+'px)';requestAnimationFrame(follow)}follow();
 $$('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform='translate('+((e.clientX-r.left-r.width/2)*.09)+'px,'+((e.clientY-r.top-r.height/2)*.11)+'px)'});el.addEventListener('pointerleave',()=>el.style.transform='')});
}
if(!reduced) {
 const canvas=$('#particles'),ctx=canvas.getContext('2d');
 let points=[],w=0,h=0,visible=true;
 const resize=()=>{const r=canvas.getBoundingClientRect();w=r.width;h=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);points=Array.from({length:Math.min(48,Math.floor(w/22))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.2+.4,s:Math.random()*.32+.09,a:Math.random()*.35+.09}))};
 function frame(){if(visible){ctx.clearRect(0,0,w,h);for(const p of points){p.y-=p.s;if(p.y<0){p.y=h;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(240,156,191,'+p.a+')';ctx.fill()}const cx=w*.78,cy=h*.48;ctx.strokeStyle='rgba(170,91,139,.13)';for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(cx,cy,140+i*75,.1,5.45);ctx.stroke()}}requestAnimationFrame(frame)}
 resize();addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{visible=!document.hidden});frame();
}
})();