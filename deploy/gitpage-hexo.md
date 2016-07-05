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
> refer to [NexT](http://theme-next.iissnan.com/)
> file: <folder>/_config.yml  

* theme 
```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: landscape-plus
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

apply new theme
```
hexo clean
hexo deploy
```

### writing
> hexo new [layout] title
> vim .../title.*
> tag: ...
> categories: ...


  
