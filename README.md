# Liu Wenda · Personal Academic Homepage / 个人学术主页

这是一个 **可直接部署到 GitHub Pages** 的双语学术主页，不需要 Node.js、npm、Jekyll 或其他构建工具。

## 功能

- 🌐 中英文切换（默认英文，支持记忆语言选择）
- 🌗 深色与浅色主题（遵循系统偏好，支持手动切换）
- 📱 响应式布局、移动端菜单
- 🎓 个人介绍、教育背景、研究方向、研究项目、论文栏、联系方式
- 🔒 未填写的联系方式、未公开的项目代码**不显示失效链接**
- ⚡ 纯静态 HTML / CSS / JS，直接双击 `index.html` 即可本地预览

## 文件结构

```text
liuwenda-academic-site/
├── index.html       # 页面结构（一般不用修改）
├── style.css        # 视觉样式
├── script.js        # 中英切换、主题、移动菜单、卡片生成
├── profile.js       # ⭐ 你主要修改这个文件
├── favicon.svg      # 网站标签页图标
├── .nojekyll        # 告诉 GitHub Pages 不用 Jekyll 处理
├── README.md        # 本文件
└── DEPLOY_GUIDE.md  # 中文部署和修改教程
```

## 先修改你的信息

编辑 `profile.js`：

```js
githubUsername: '你的 GitHub 用户名',
email: '你的邮箱',
googleScholarUrl: '',  // 没有就留空
orcidUrl: '',        // 没有就留空
cvFile: '',          // 例如 'assets/CV.pdf'，使用前先放入该文件
```

默认内容仅依据已知的学习与研究方向编写，没有杜撰发表论文、奖项或正式科研成果。请发布前自行核对研究项目名称、学校信息和个人简介。论文区默认显示「待更新」。

## 本地预览

双击 `index.html`，使用浏览器打开。所有功能不需要互联网连接。

## GitHub Pages 部署

详细操作见 [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)。

快捷版：建立名为 `你的GitHub用户名.github.io` 的 **Public** 仓库，把**解压后的文件**上传到仓库根目录，然后进入 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**。

访问 `https://你的GitHub用户名.github.io/`。

## 更新内容

修改 `profile.js`，提交到 GitHub `main` 分支后，GitHub Pages 会重新发布站点。更新的页面可能需要一些时间才能出现。

> 注意：这是公开网站，请不要提交电话号码、住址、密钥、未公开论文原稿或实验敏感数据。
