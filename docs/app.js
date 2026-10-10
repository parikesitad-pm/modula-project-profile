(() => {
'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const projects = [
  {
    "id": "forge",
    "name": "Forge",
    "number": "01",
    "category": "product",
    "group": "core",
    "type": "CORE MODULA / THINKING COMPANION",
    "tagline": "A place for unfinished thoughts.",
    "description": "A thinking companion for capturing sparks and developing ideas. Rails + React TypeScript architecture, with AI-assisted features and an evolving workspace.",
    "tags": [
      "Rails",
      "React",
      "TypeScript",
      "AI"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/forge"
      ],
      [
        "Live frontend",
        "https://frontendreactts.vercel.app"
      ]
    ]
  },
  {
    "id": "stack",
    "name": "STACK",
    "number": "02",
    "category": "product",
    "group": "core",
    "type": "CORE MODULA / MARKDOWN",
    "tagline": "Markdown notes without the noise.",
    "description": "A Markdown-first, local-first writing space built on React and TypeScript with IndexedDB, Auth0 and cloud integration plans.",
    "tags": [
      "React",
      "TypeScript",
      "IndexedDB",
      "Auth0"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/stack-react_ts_with_aws_deployment"
      ],
      [
        "Live website",
        "https://stack-md.online"
      ]
    ]
  },
  {
    "id": "untitled",
    "name": "untitled",
    "number": "03",
    "category": "product",
    "group": "core",
    "type": "CORE MODULA / ASSESSMENTS",
    "tagline": "Define yourself.",
    "description": "Activity builder, assessment participant flows, scoring, leaderboards and result data. Frontend with React and backend with Firebase, developed as distinct repositories.",
    "tags": [
      "React",
      "TypeScript",
      "Firebase",
      "Cloudinary"
    ],
    "links": [
      [
        "Frontend",
        "https://github.com/parikesitad-pm/frontend_untitled_modula_project_react_ts"
      ],
      [
        "Backend",
        "https://github.com/parikesitad-pm/backend_untitled_modula_project_firebase"
      ]
    ]
  },
  {
    "id": "point",
    "name": "POINT",
    "number": "04",
    "category": "product",
    "group": "core",
    "type": "CORE MODULA / POS & OPERATIONS",
    "tagline": "Business operations, designed for the counter.",
    "description": "POINT by MODULA is a React 19 + TypeScript frontend for point-of-sale and business operations. Includes owner dashboard, catalog management, and cashier login/terminal flows. Currently documented as a frontend mock evaluation, not a production payments solution.",
    "tags": [
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Frontend prototype"
    ],
    "links": [
      [
        "Frontend repository",
        "https://github.com/parikesitad-pm/point_by_modula_project_frontend"
      ]
    ]
  },
  {
    "id": "base",
    "name": "MODULA Base",
    "number": "05",
    "category": "experiment",
    "group": "core",
    "type": "CORE MODULA / EARLY FOUNDATION",
    "tagline": "Where the business-system experiments began.",
    "description": "An earlier architecture experiment exploring ERP, point of sale, inventory, supply-chain and accounting workflows. Legacy exploration—not presented as a live, production-ready enterprise system.",
    "tags": [
      "Ruby",
      "React",
      "ERP / POS",
      "Legacy"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/modula_base"
      ]
    ]
  },
  {
    "id": "dotmod",
    "name": "DOTMOD",
    "number": "06",
    "category": "tooling",
    "group": "workbench",
    "type": "WORKBENCH / WINDOWS & POWERSHELL",
    "tagline": "Backup first. Rebuild later.",
    "description": "Windows workstation backup-and-restore system with PowerShell, inventories, declarative developer profiles and safe restoration workflows.",
    "tags": [
      "PowerShell",
      "WinGet",
      "Windows",
      "Automation"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/windows_dotfiles"
      ]
    ]
  },
  {
    "id": "autofailover",
    "name": "AutoFailover",
    "number": "07",
    "category": "desktop",
    "group": "workbench",
    "type": "WORKBENCH / PYTHON GUI",
    "tagline": "Keep live connections alive.",
    "description": "A Python and CustomTkinter desktop tool for network failover automation focused on maintaining connectivity for Zoom, vMix and OBS live-production workloads.",
    "tags": [
      "Python",
      "CustomTkinter",
      "Networking"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/smart_auto_failover"
      ]
    ]
  },
  {
    "id": "manjaro",
    "name": "Manjaro Dotfiles",
    "number": "08",
    "category": "tooling",
    "group": "workbench",
    "type": "WORKBENCH / SHELL",
    "tagline": "Terminal-first development environment.",
    "description": "Automated Manjaro GNOME setup with Zsh, Bash, Starship, Kitty, VS Code configuration, productivity aliases and development toolchains.",
    "tags": [
      "Zsh",
      "Bash",
      "Starship",
      "Manjaro"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/dotfile_v2"
      ]
    ]
  },
  {
    "id": "gundam",
    "name": "Gundam GNOME",
    "number": "09",
    "category": "tooling",
    "group": "workbench",
    "type": "WORKBENCH / LINUX DESKTOP",
    "tagline": "Declarative desktop automation.",
    "description": "Gundam Celestial GNOME desktop customization with Shell scripts, presets, performance-aware configuration and repeatable Linux setup.",
    "tags": [
      "Shell",
      "GNOME",
      "Linux",
      "Bash"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/gundam-celestial-gnome-theme"
      ]
    ]
  },
  {
    "id": "xfce",
    "name": "Gundam Glass XFCE",
    "number": "10",
    "category": "tooling",
    "group": "workbench",
    "type": "WORKBENCH / LINUX THEMING",
    "tagline": "A scripted Linux desktop setup.",
    "description": "Shell-driven XFCE setup and theme automation for a lightweight, customized Linux developer desktop.",
    "tags": [
      "Bash",
      "XFCE",
      "Shell"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/xfce_themed"
      ]
    ]
  },
  {
    "id": "afrizal",
    "name": "Afrizal Portfolio",
    "number": "11",
    "category": "creative",
    "group": "creative",
    "type": "CREATIVE / INTERACTIVE PORTFOLIO",
    "tagline": "Motion, interaction and identity.",
    "description": "A multilingual React and TypeScript creative portfolio using GSAP, Three.js, animation and tailored interactions to present visual-design work.",
    "tags": [
      "React",
      "TypeScript",
      "GSAP",
      "Three.js"
    ],
    "links": [
      [
        "Repository",
        "https://github.com/parikesitad-pm/ap_branding_react_ts"
      ],
      [
        "Live website",
        "https://ap-branding-react-ts.vercel.app"
      ]
    ]
  }
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
 grid.replaceChildren();
 const groups=[
  {id:'core',title:'01 / CORE MODULA ECOSYSTEM',subtitle:'Products and product foundations'},
  {id:'workbench',title:'02 / SHELL, AUTOMATION & DESKTOP',subtitle:'Tools, workstations and GUI'},
  {id:'creative',title:'03 / CREATIVE BUILDS',subtitle:'Motion and visual craft'}
 ];
 for(const group of groups){
   const members=selected.filter(p=>p.group===group.id);
   if(!members.length) continue;
   const heading=make('div','project-group-label');
   heading.append(make('span','project-group-name',group.title),make('span','project-group-subtitle',group.subtitle));
   grid.append(heading);
   for(const p of members){
     const card=make('button','project');
     card.type='button';
     card.dataset.category=p.category;
     card.setAttribute('aria-label','Open '+p.name+' project details');
     const top=make('div','project-top');
     top.append(make('span','project-index',p.number+' / 11'),make('span','project-type',p.category.toUpperCase()));
     const headingText=make('h3','',p.name),subtitle=make('p','',p.tagline),bottom=make('div','project-bottom');
     bottom.append(make('span','',p.tags[0]),make('span','project-arrow','↗'));
     card.append(top,headingText,subtitle,bottom);
     card.addEventListener('click',()=>openProject(p));
     grid.append(card);
   }
 }
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
 const lines=['forge · stack · untitled · point','zsh · bash · pwsh · starship','modula-base · shell · desktop'];
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