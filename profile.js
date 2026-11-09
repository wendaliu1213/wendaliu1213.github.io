/**
 * EDIT THIS FILE FIRST.
 * 先修改这个文件中的个人信息，再上传到 GitHub Pages。
 * 空字符串表示不展示对应链接，避免公开错误联系方式。
 */
window.SITE_PROFILE = {
  nameEn: 'Liu Wenda',
  nameZh: '刘文达',
  initials: 'LW',
  universityEn: 'Wuhan University of Technology',
  universityZh: '武汉理工大学',
  degreeEn: 'M.S. Student in Computer Science and Technology',
  degreeZh: '计算机科学与技术专业硕士研究生',
  educationPeriod: { en: 'Sep 2026 — Present', zh: '2026年9月 — 至今' },
  // 教育经历按时间倒序填写，页面会自动生成中英文时间线。
  education: [
    {
      school: { en: 'Wuhan University of Technology', zh: '武汉理工大学' },
      major: { en: 'Master’s Student · Computer Science and Technology', zh: '计算机科学与技术 · 硕士研究生' },
      period: { en: 'Sep 2026 — Present', zh: '2026年9月 — 至今' },
      current: true
    },
    {
      school: { en: 'Jingdezhen Ceramic University', zh: '景德镇陶瓷大学' },
      major: { en: 'Undergraduate · Computer Science and Technology', zh: '计算机科学与技术 · 本科' },
      period: { en: 'Sep 2021 — Jun 2025', zh: '2021年9月 — 2025年6月' },
      current: false
    }
  ],
  
  // 重要：填写你自己的信息，留空时页面不会显示无效链接。
  githubUsername: 'wendaliu1213',       // e.g. 'your-github-username'（不要填 github.com）
  email: 'wendaliu@whut.edu.cn',                // e.g. 'you@example.com'
  googleScholarUrl: '',     // 可选：完整的 https:// 链接
  orcidUrl: '',             // 可选：完整的 https:// 链接
  cvFile: '',               // 可选：'assets/CV.pdf'，并把 PDF 放到对应目录

  // 简介、研究领域与项目描述都是可编辑的中英双语文本。
  bio: {
    en: 'I am pursuing a master’s degree in Computer Science and Technology at Wuhan University of Technology (since September 2026). I previously studied Computer Science and Technology at Jingdezhen Ceramic University (September 2021 – June 2025). My research interests include learned image compression, diffusion-based reconstruction, and rate–distortion–perception optimization.',
    zh: '我于2021年9月至2025年6月在景德镇陶瓷大学学习计算机科学与技术专业，2026年9月起在武汉理工大学攻读计算机科学与技术硕士学位。目前主要关注学习式图像压缩与生成模型的交叉研究，尤其是扩散模型重建、离散表示，以及码率—失真—感知质量之间的权衡。'
  },
  focus: [
    {
      no: '01', icon: 'wave',
      title: { en: 'Diffusion-Based Compression', zh: '基于扩散模型的图像压缩' },
      summary: {
        en: 'Exploring generative reconstruction from compact representations, including perceptual quality and decoding efficiency.',
        zh: '研究如何由紧凑表征实现生成式重建，重点关注感知质量与解码效率。'
      },
      tags: ['Diffusion Models', 'Image Coding']
    },
    {
      no: '02', icon: 'blocks',
      title: { en: 'Discrete Latent Representations', zh: '离散潜变量表示' },
      summary: {
        en: 'Studying vector quantization, codebook representations, and how compression-oriented tokens interact with generative decoders.',
        zh: '探索向量量化、码本表征，以及面向压缩的 token 与生成式解码器之间的关系。'
      },
      tags: ['Vector Quantization', 'Tokens']
    },
    {
      no: '03', icon: 'balance',
      title: { en: 'Rate–Distortion–Perception', zh: '码率—失真—感知优化' },
      summary: {
        en: 'Investigating optimization objectives that balance bitrate, reconstruction fidelity, and perceptual realism.',
        zh: '关注如何设计训练目标，在码率、重建保真度与感知真实感之间取得平衡。'
      },
      tags: ['Optimization', 'Perception']
    }
  ],
  projects: [
    {
      number: '01',
      category: { en: 'Ongoing research', zh: '正在研究' },
      title: { en: 'Generative Image Compression', zh: '生成式图像压缩研究' },
      description: {
        en: 'An ongoing investigation into diffusion-based image compression pipelines, examining representation design, reconstruction behavior, and practical rate–quality trade-offs.',
        zh: '围绕扩散式图像压缩流程展开研究，关注表征设计、重建行为以及实际码率与重建质量之间的权衡。'
      },
      tags: ['Diffusion', 'Compression', 'PyTorch'],
      url: '' // 有公开代码仓库后再填入完整 URL
    },
    {
      number: '02',
      category: { en: 'Exploratory study', zh: '探索性研究' },
      title: { en: 'Rate-Aware Discrete Token Learning', zh: '码率感知的离散 Token 学习' },
      description: {
        en: 'Exploring whether differentiable approximations of discrete code assignment can support rate-aware training and representations better suited to generative reconstruction.',
        zh: '探索通过离散码本选择的可微近似，引入码率约束，并学习更适用于生成式重建的离散表征。'
      },
      tags: ['Vector Quantization', 'Rate Modeling', 'Research Idea'],
      url: ''
    },
    {
      number: '03',
      category: { en: 'Research practice', zh: '科研学习' },
      title: { en: 'Paper Reading & Method Analysis', zh: '论文阅读与方法分析' },
      description: {
        en: 'Maintaining a structured reading and analysis workflow for work in learned and generative image compression, including CoD, AEIC, and related methods.',
        zh: '围绕学习式与生成式图像压缩持续开展结构化论文阅读和方法对比，包括 CoD、AEIC 等相关工作。'
      },
      tags: ['Literature Review', 'Image Compression'],
      url: ''
    }
  ]
};
