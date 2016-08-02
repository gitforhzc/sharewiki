## access username.github.io
> refer to [GitHubPages](https://pages.github.com/)  

1. create a repository named username.github.io
2. access your GitHubPages at https://username.github.io
```
for example:  
my username of GitHUb account is gitforhzc, do two things:  
    1. new repository named gitforhzc.github.io
    2. open browser and access https://gitforhzc.github.io
```

## deploy heox on GitHubPages
> refer to [Hexo](https://hexo.io/zh-cn/)  

### install
* requirements  
	* [Node.js](https://nodejs.org/en/)  
	```
	wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh  
	nvm install 4  
	```
	* [Git](https://git-scm.com/)    
		`sudo apt-get install git-core`
* install  
	` npm install -g hexo-cli `

### initialize
```
$ hexo init <folder>
$ cd <folder>
$ npm install
```

### config
> refer to [NexT](http://theme-next.iissnan.com/getting-started.html)  

* theme
```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next
```

* deploy
```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:gitforhzc/gitforhzc.github.io.git
  branch: master
```

### deploy
```
cd <folder>
hexo deploy

```

### theme
> refer to [next](http://theme-next.iissnan.com/getting-started.html)  

config new theme
```
hexo clean
hexo deploy
```

### writing
* post
```
 hexo new [layout] title  
 vim ./source/_post/.../title.*  
 tag: ...  
 categories: ...  
```
* draft
```
hexo new draft title  
vim ./source/_draft/.../title.*  
```

* publish draft to post
```
hexo publish title  
```

### mountONbranch
```
cd ./
git init
git remote add origin git@github.com:gitforhzc/gitforhzc.github.io
git branch hexo
git checkout hexo
git add .
git commit -m 'backup hexo source'
git push origin hexo
```
themes
```
cd ./themes/next
git init

git remote add origin git@github.com:gitforhzc/gitforhzc.github.io
git branch theme
git checkout theme
git add .
git commit -m 'backup theme source'
git push origin theme

```

### 参考
[1] [GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/#more)  
[2] [访客、留言板](http://www.arao.me/)  
[3] [hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)  
[4] [Hexo系列教程](https://www.mashiro.io/archives/)
