## access username.github.io
> refer to [GitHubPages](https://pages.github.com/)  

1. create a repository named username.github.io
2. access your GitHubPages to https://username.github.io
```
for example:  
my username of GitHub account is gitforhzc, now do two things:  
    1. new repository named gitforhzc.github.io
    2. create index.html which is to show home page
    3. open browser and access https://gitforhzc.github.io
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

### deploy git
**requirements: add ssh key to github**
* install hexo-deployer-git  
`npm install hexo-deployer-git --save`
* open ./\_config.yml  
```
deploy:
  type: git
  repo: git@github.com:gitforhzc/gitforhzc.github.io.git
  branch: master
```
* deploy  
`hexo deploy`

### theme
> refer to [NexT](http://theme-next.iissnan.com/getting-started.html)  

* download theme NexT  
`git clone git@github.com:iissnan/hexo-theme-next.git ./themes/next`
* activate theme  
```
# file: ./_config.yml
theme: next
```

* deploy new theme
```
hexo clean
hexo generate --deploy
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

### backupONbranch
#### hexo source code
```
cd ./
git init
git remote add origin git@github.com:gitforhzc/gitforhzc.github.io
git checkout -b hexo
git add .
git commit -m 'backup hexo source'
git push origin hexo
```
#### themes
```
cd ./themes/next
git init
git remote add origin git@github.com:gitforhzc/gitforhzc.github.io
git checkout -b theme
git add .
git commit -m 'backup theme source'
git push origin theme

```

### 参考
[1] [hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)  
[2] [访客、留言板](http://www.arao.me/)  
