協作版本系統（Concurrent Versions System）
# git
## git中文乱码
> https://gist.github.com/nightire/5069597
$ git config --global core.quotepath false          # 显示 status 编码
$ git config --global gui.encoding utf-8            # 图形界面编码
$ git config --global i18n.commit.encoding utf-8    # 提交信息编码
$ git config --global i18n.logoutputencoding utf-8  # 输出 log 编码
$ export LESSCHARSET=utf-8
# 最后一条命令是因为 git log 默认使用 less 分页，所以需要 bash 对 less 命令进行 utf-8 编码


## sparse checkout
> 作者：ce ge
链接：https://www.zhihu.com/question/25369412/answer/96174755
来源：知乎
著作权归作者所有，转载请联系作者获得授权。

Q: 如何在github上下载单个文件夹？  
A: Git1.7.0以后加入了Sparse Checkout模式，这使得Check Out指定文件或者文件夹成为可能。
```
$mkdir project_folder
$cd project_folder
$git init
$git remote add -f origin <url>
```
上面的代码会帮助你创建一个空的本地仓库，同时将远程Git Server URL加入到Git Config文件中。  
接下来，我们在Config中允许使用Sparse Checkout模式：
```
$git config core.sparsecheckout true
```
接下来你需要告诉Git哪些文件或者文件夹是你真正想Check Out的，你可以将它们作为一个列表保存在 .git/info/sparse-checkout 文件中。
```
$echo “libs” >> .git/info/sparse-checkout
$echo “apps/register.go” >> .git/info/sparse-checkout
$echo “resource/css” >> .git/info/sparse-checkout
```
最后，你只要以正常方式从你想要的分支中将你的项目拉下来就可以了：
```
$git pull origin master
```
具体可参考Git的Sparse checkout文档: http://schacon.github.io/git/git-read-tree.html#_sparse_checkout

## git submodule
http://www.kafeitu.me/git/2012/03/27/git-submodule.html
