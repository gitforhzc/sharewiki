[![build-info]][travis-url]
[build-info]: https://travis-ci.org/gitforhzc/gitforhzc.github.io.svg?branch=hexo
[travis-url]: https://travis-ci.org/

## install
* [Node.js](https://nodejs.org/en/)  
`yum install nodejs npm`
* [Git](https://git-scm.com/)  
`yum install git-core`

## getSource
```
git clone https://github.com/gitforhzc/gitforhzc.github.io.git
git clone https://github.com/gitforhzc/gitforhzc.github.io.git --branch theme ./themes/next/
```

## install hexo dependencies
npm install -g hexo-cli  
npm install  

## run hexo 
hexo clean  
hexo generate  
nohup hexo server &  