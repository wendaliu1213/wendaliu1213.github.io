/* Lightweight static-site behavior: language, theme, navigation, and profile content. */
(() => {
  'use strict';
  const profile = window.SITE_PROFILE;
  if (!profile) { console.error('profile.js was not loaded.'); return; }

  const translations = {
    en: {
      skip:'Skip to content',navAbout:'About',navResearch:'Research',navProjects:'Projects',navPublications:'Publications',navContact:'Contact',
      heroKicker:'M.S. STUDENT · COMPUTER SCIENCE',heroLineOne:'Exploring the',heroLineTwo:'future of visual',heroLineThree:'compression.',
      heroDesc:'I study how generative models and learned representations can make image compression more efficient, perceptually compelling, and meaningful.',
      exploreResearch:'Explore research',getInTouch:'Get in touch',affiliatedWith:'CURRENTLY AT',stageInput:'01 / INPUT',stageLatent:'02 / LATENT',stageDecode:'03 / RECONSTRUCT',stageVisual:'Visual signal',stageCompact:'Compact tokens',stagePerceptual:'Generative decoding',diagramNote:'A conceptual view of generative image compression',scrollDiscover:'SCROLL TO DISCOVER',
      sectionAbout:'ABOUT ME',aboutTitle1:'Curiosity-driven',aboutTitle2:'research.',aboutSecondary:'I am particularly interested in the connection between representation learning, rate constraints, and the behavior of diffusion-based decoders. I aim to ground new ideas in careful paper reading and empirical evaluation.',atAGlance:'AT A GLANCE',labelRole:'POSITION',labelInstitute:'INSTITUTION',labelPeriod:'STUDY PERIOD',asideQuote:'Better representations make better reconstructions possible.',
      sectionResearch:'RESEARCH INTERESTS',researchAside:"WHAT I'M EXPLORING",researchTitle1:'The questions',researchTitle2:'that drive my work.',
      sectionProjects:'SELECTED WORK',projectAside:'RESEARCH IN PROGRESS',projectsTitle1:'Ideas, exploration,',projectsTitle2:'and ongoing work.',projectsIntro:'These are ongoing research directions and study activities, not claims of published results or released software.',viewProject:'Visit repository',
      sectionPublications:'PUBLICATIONS',publicationsAside:'SCHOLARLY OUTPUT',pubTitle1:'Research takes',pubTitle2:'time to develop.',noPubsTitle:'Publications will be listed here.',noPubsBody:'No publications have been added to this page. Future papers and preprints can be included with verified links.',comingSoon:'TO BE UPDATED',
      sectionContact:'CONTACT',contactTitle1:"Let's exchange",contactTitle2:'ideas.',contactDesc:'Interested in generative image compression, learned representations, or related research? Feel free to connect.',contactPlaceholder:'Contact links can be enabled by adding your email or GitHub username in profile.js.',
      footerTag:' · Academic Homepage',builtWith:'Built with HTML, CSS & JavaScript',backTop:'Back to top',email:'Email',github:'GitHub',scholar:'Google Scholar',orcid:'ORCID',cv:'Download CV'
    },
    zh: {
      skip:'跳转到正文',navAbout:'关于我',navResearch:'研究方向',navProjects:'研究项目',navPublications:'学术成果',navContact:'联系我',
      heroKicker:'计算机专业 · 硕士研究生',heroLineOne:'探索视觉信息',heroLineTwo:'更高效的',heroLineThree:'压缩与重建。',
      heroDesc:'我关注生成模型与学习式表征如何让图像压缩更高效，同时兼顾重建质量与感知体验。',
      exploreResearch:'了解研究方向',getInTouch:'联系我',affiliatedWith:'目前就读于',stageInput:'01 / 输入',stageLatent:'02 / 表征',stageDecode:'03 / 重建',stageVisual:'视觉信号',stageCompact:'紧凑 Token',stagePerceptual:'生成式重建',diagramNote:'生成式图像压缩的概念示意图',scrollDiscover:'向下浏览',
      sectionAbout:'关于我',aboutTitle1:'保持好奇，',aboutTitle2:'认真研究。',aboutSecondary:'我尤其关注表征学习、码率约束与扩散式解码器之间的联系，希望通过系统的论文阅读和实验验证来探索新的研究思路。',atAGlance:'个人概况',labelRole:'当前身份',labelInstitute:'所在学校',labelPeriod:'就读时间',asideQuote:'更好的表征，是实现更好重建的基础。',
      sectionResearch:'研究兴趣',researchAside:'当前探索方向',researchTitle1:'我正在思考的',researchTitle2:'研究问题。',
      sectionProjects:'研究与项目',projectAside:'持续探索中',projectsTitle1:'想法、探索，',projectsTitle2:'以及正在进行的工作。',projectsIntro:'以下内容为正在开展的研究方向与学习活动，不代表已发表成果或已经公开的软件项目。',viewProject:'访问代码仓库',
      sectionPublications:'学术成果',publicationsAside:'论文与预印本',pubTitle1:'研究需要',pubTitle2:'持续积累。',noPubsTitle:'论文成果将在此展示。',noPubsBody:'目前尚未添加已公开发表的论文。后续可在确认论文信息后补充标题、作者、会议和公开链接。',comingSoon:'待更新',
      sectionContact:'联系方式',contactTitle1:'期待交流',contactTitle2:'研究想法。',contactDesc:'如果你也关注生成式图像压缩、学习式表征及相关方向，欢迎交流。',contactPlaceholder:'在 profile.js 中填写邮箱或 GitHub 用户名后，这里会自动显示联系方式。',
      footerTag:' · 个人学术主页',builtWith:'基于 HTML、CSS 和 JavaScript 构建',backTop:'返回顶部',email:'邮箱',github:'GitHub',scholar:'Google Scholar',orcid:'ORCID',cv:'下载简历'
    }
  };

  const icons = {
    wave:'<path d="M2 12c3.3-7 6.6 7 10 0s6.7-7 10 0"/><path d="M2 6c3.3-7 6.6 7 10 0s6.7-7 10 0" opacity=".45"/>',
    blocks:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
    balance:'<path d="M12 3v18M5 7h14M4 7 1 14h6L4 7Zm16 0-3 7h6l-3-7ZM9 21h6"/>',
    email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github:'<path d="M9 19c-4.1 1.2-4.1-2-5.8-2.4M15 22v-3.8c0-1 .1-1.5-.5-2 3.1-.4 6.5-1.5 6.5-7A5.6 5.6 0 0 0 19.5 5c.2-1.2.1-2.2-.4-3-1.4 0-2.4.7-3.3 1.5a12 12 0 0 0-7.6 0C7.3 2.7 6.3 2 4.9 2c-.5.8-.6 1.8-.4 3A5.6 5.6 0 0 0 3 9.2c0 5.5 3.4 6.6 6.5 7-.6.5-.5 1-.5 2V22"/>',
    link:'<path d="M10 13a5 5 0 0 0 7 .3l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7-.3l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'
  };
  function svg(icon){return `<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[icon]||icons.link}</svg>`;}
  function node(tag, className, text){const n=document.createElement(tag); if(className)n.className=className; if(text!==undefined)n.textContent=text; return n;}
  const validWebUrl = (raw) => { try{ const u=new URL(raw);return ['https:','http:'].includes(u.protocol);}catch{return false;} };
  const validEmail = (raw) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw||'');
  const languageButton=document.getElementById('language-toggle');
  const themeButton=document.getElementById('theme-toggle');
  const menuButton=document.getElementById('menu-toggle');
  const mobileNav=document.getElementById('mobile-nav');
  let language='en';
  try{language=localStorage.getItem('academic-language')==='zh'?'zh':'en';}catch{}

  function renderTags(target,tags){const group=node('div','tag-row');(tags||[]).forEach(t=>group.append(node('span','tag',t)));target.append(group);}
  function renderCards(){
    const grid=document.getElementById('research-grid');grid.replaceChildren();
    (profile.focus||[]).forEach(item=>{
      const card=node('article','research-card');const header=node('div','research-header');
      const symbol=node('span','research-symbol');symbol.innerHTML=svg(item.icon);header.append(symbol,node('span','research-number',item.no));card.append(header);
      card.append(node('h3','',item.title?.[language]||''),node('p','',item.summary?.[language]||''));renderTags(card,item.tags);grid.append(card);
    });
    const list=document.getElementById('projects-list');list.replaceChildren();
    (profile.projects||[]).forEach(item=>{
      const row=node('article','project-row');row.append(node('span','project-index',item.number));const main=node('div','project-main');main.append(node('h3','',item.title?.[language]||''),node('p','',item.description?.[language]||''));renderTags(main,item.tags);row.append(main);
      const meta=node('div','project-meta');meta.append(node('span','project-status',item.category?.[language]||''));
      if(validWebUrl(item.url)){const a=node('a','project-link',translations[language].viewProject+' ↗');a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';meta.append(a);}
      row.append(meta);list.append(row);
    });
  }
  function renderContacts(){
    const links=document.getElementById('contact-links');links.replaceChildren();
    function add(label,url,iconName){const a=node('a','contact-link');a.href=url;if(!url.startsWith('mailto:')){a.target='_blank';a.rel='noopener noreferrer';}a.innerHTML=svg(iconName);a.append(document.createTextNode(label+' ↗'));links.append(a);}
    if(validEmail(profile.email)) add(translations[language].email, 'mailto:'+profile.email, 'email');
    if(profile.githubUsername && /^[A-Za-z0-9-]{1,39}$/.test(profile.githubUsername))add(translations[language].github,'https://github.com/'+profile.githubUsername,'github');
    if(validWebUrl(profile.googleScholarUrl))add(translations[language].scholar,profile.googleScholarUrl,'link');
    if(validWebUrl(profile.orcidUrl))add(translations[language].orcid,profile.orcidUrl,'link');
    if(profile.cvFile && !/^\s*(javascript:|data:)/i.test(profile.cvFile)){const link=profile.cvFile;if(validWebUrl(link)||/^[./a-zA-Z0-9_%-][a-zA-Z0-9_./%\-]*\.pdf$/i.test(link))add(translations[language].cv,link,'link');}
    document.getElementById('contact-placeholder').hidden=links.children.length!==0;
  }
  function renderLanguage(){
    document.documentElement.lang=language==='zh'?'zh-CN':'en';
    document.title=(language==='en'?profile.nameEn:profile.nameZh)+' · '+(language==='en'?'Academic Homepage':'个人学术主页');
    document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[language][key])el.textContent=translations[language][key];});
    document.getElementById('language-label').textContent=language==='en'?'中文':'EN';
    languageButton.setAttribute('aria-label',language==='en'?'切换为中文':'Switch to English');
    document.getElementById('brand-name').replaceChildren(document.createTextNode(language==='en'?profile.nameEn:profile.nameZh),node('span','brand-period','.'));
    document.getElementById('footer-name').textContent=language==='en'?profile.nameEn:profile.nameZh;
    document.getElementById('hero-university').textContent=language==='en'?profile.universityEn:profile.universityZh;
    document.getElementById('aside-degree').textContent=language==='en'?profile.degreeEn:profile.degreeZh;
    document.getElementById('aside-university').textContent=language==='en'?profile.universityEn:profile.universityZh;
    document.getElementById('aside-period').textContent=profile.educationPeriod||'';
    document.getElementById('profile-bio').textContent=profile.bio?.[language]||'';
    renderCards();renderContacts();
  }
  languageButton.addEventListener('click',()=>{language=language==='en'?'zh':'en';try{localStorage.setItem('academic-language',language);}catch{}renderLanguage();});
  let theme='dark';
  try{const saved=localStorage.getItem('academic-theme');if(['dark','light'].includes(saved))theme=saved;else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)theme='light';}catch{}
  function renderTheme(){document.documentElement.dataset.theme=theme;themeButton.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme');themeButton.title=theme==='dark'?'Light mode':'Dark mode';}
  themeButton.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';try{localStorage.setItem('academic-theme',theme);}catch{}renderTheme();});
  menuButton.addEventListener('click',()=>{const nowOpen=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(nowOpen));menuButton.setAttribute('aria-label',nowOpen?'Close menu':'Open menu');mobileNav.hidden=!nowOpen;});
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
  document.getElementById('copyright-year').textContent=String(new Date().getFullYear());
  renderTheme();renderLanguage();
})();
