# GitHub Pages 学术主页：部署与修改指南

## 0. 你将得到什么

这套源码可在 GitHub Pages 免费托管（GitHub Free 的站点仓库需要公开）。默认网址是 `https://你的GitHub用户名.github.io/`。

无需购买服务器、购买域名，也无需安装 Node.js。**不要直接上传 ZIP 压缩包；必须解压后上传里面的文件。**

## 1. 先编辑个人信息（推荐）

1. 解压 `liuwenda-academic-site.zip`。
2. 使用 VS Code 打开 `liuwenda-academic-site/profile.js`。
3. 填写 `githubUsername`（GitHub 的登录用户名，不是显示昵称）和 `email`。没有 Scholar、ORCID、简历就保持空字符串。
4. 阅读并核对页面中预置的英文和中文简介、研究方向、项目描述；这些都是可修改内容。
5. 保存 `profile.js`，双击 `index.html` 本地检查页面。点击右上角「中文」和主题切换按钮测试。

注意：不要将空白 `githubUsername` 留作最终状态，否则网页不会显示 GitHub 联系链接；这是为了避免错误链接。

## 2. 在 GitHub 建立正确的仓库

1. 登录 https://github.com/ 。
2. 右上角 `+` → `New repository`（或者进入 https://github.com/new ）。
3. `Repository name`：`你的GitHub用户名.github.io`。例：用户名 `example-user`，仓库名必须是 `example-user.github.io`（不是 `Liu Wenda.github.io`，也不是 `example-user.github.io-main`）。
4. Visibility 选 **Public**。
5. 点击 `Create repository`。是否预先创建 GitHub 的 README 都可以；如果创建了，上传本项目的同名 `README.md` 时选择覆盖或先删除原文件。

## 3. 用浏览器上传源码（最简单）

1. 打开刚创建的仓库，进入 `Code` 页面。
2. 点击 `Add file` → `Upload files`。对于空仓库，可点击 `uploading an existing file`。
3. **把解压后目录里面的文件**拖进去，保证 `index.html`、`style.css`、`script.js`、`profile.js` 和 `favicon.svg` 在仓库**根目录**。`README.md` 和 `DEPLOY_GUIDE.md` 一并上传即可；`.nojekyll` 可以一起上传，未上传也不影响这个纯静态站点。
4. 点击页面底部的 `Commit changes`。

正确结构：

```
你的GitHub用户名.github.io/
    index.html
    style.css
    script.js
    profile.js
    favicon.svg
    README.md
    DEPLOY_GUIDE.md
```

错误示例：仓库里只有一个 `liuwenda-academic-site.zip`，或者 `index.html` 藏在某个子文件夹里。

## 4. 启用 GitHub Pages

1. 仓库页面点击 `Settings`。
2. 左侧导航栏点击 `Pages`。
3. `Build and deployment` → `Source` 选 `Deploy from a branch`。
4. `Branch` 选 `main`，目录选 `/(root)`，点击 `Save`。
5. 访问：`https://你的GitHub用户名.github.io/`。

GitHub 官方说明：发布变更可能需要最长约 10 分钟；也可以在仓库 `Actions` 中查看部署进度。

## 5. 后续维护

- 改研究方向、简介、项目：修改 `profile.js` 并在 GitHub 中提交。
- 添加真正的项目仓库：在 `profile.js` 的对应 `projects[].url` 中填写完整 `https://github.com/...` 链接；页面才会出现「访问代码仓库」按钮。
- 添加论文：目前「Publications」是诚信展示的空状态。确认发表论文以后，可在 `index.html` 的 `<section id="publications">` 内手工添加论文卡片，或让代码助手帮你改成由 `profile.js` 中的 `publications` 数据动态渲染。
- 放 CV：新建 `assets/` 文件夹，放入 `CV.pdf`，再把 `cvFile` 改为 `'assets/CV.pdf'`，提交文件及修改。
- 自定义颜色：修改 `style.css` 文件顶部 `:root` 的 `--accent`、`--accent2` 等变量。
- 想更换图片：当前主页采用 CSS 和 SVG 实现的概念视觉图，不依赖任何在线图片服务。

## 6. Git 命令行上传（可选）

如果已安装 Git，并且已经在 GitHub 上建好了空仓库，可在**解压后的目录内**运行：

```bash
git init
git branch -M main
git add .
git commit -m "Create personal academic homepage"
git remote add origin https://github.com/你的GitHub用户名/你的GitHub用户名.github.io.git
git push -u origin main
```

如果仓库此前已经在线创建了 README 等提交，建议用浏览器上传方式，或者先 `git clone` 再拷贝文件、提交并推送，避免历史冲突。

## 7. 常见问题

**访问网站出现 404？**
确认：仓库名与用户名完全一致；仓库为 Public；`index.html` 在根目录；Pages 选 `main` + `/(root)`；`Actions` 没有部署报错；部署已完成。必要时硬刷新（Ctrl+F5）。

**CSS 或语言按钮失效？**
检查根目录是否同时上传了 `style.css`、`script.js`、`profile.js`，文件大小写一致。

**打开网页是 GitHub 的仓库文件列表？**
你打开的是 `github.com/用户名/用户名.github.io`（代码仓库地址），而不是 `https://用户名.github.io/`（网站地址）。

**可以使用自定义域名吗？**
可以，后续在仓库 Settings → Pages 配置 Custom domain，并配置域名的 DNS。第一次部署无需购买域名。

## 参考资料（GitHub 官方）

- https://docs.github.com/zh/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites
