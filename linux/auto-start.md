## 开机启动时自动运行程序

> Linux加载后, 它将初始化硬件和设备驱动, 然后运行第一个进程init。  
init根据配置文件继续引导过程，启动其它进程。通常情况下，修改放置  
/etc/rc  
/etc/rc.d  
/etc/rc?.d  
目录下的脚本文件，可以使init自动启动其它程序。例如：编辑/etc/rc.d/rc.local 文件(该文件通常是系统最后启动的脚本)，在文件最末加上一行“xinit”或“startx”，可以在开机启动后直接进入X－Window。  

## 登录时自动运行程序
> 用户登录时，bash先自动执行系统管理员建立的全局登录脚本 ：  
/ect/profile  
然后bash在用户起始目录下按顺序查找三个特殊文件中的一个：  
~/.bash_profile、  
~/.bash_login、  
~/.profile，  
但只执行最先找到的一个。因此，只需根据实际需要在上述文件中加入命令就可以实现用户登录时自动运行某些程序。


## 参考  
[1] [自启动程序](https://wiki.deepin.org/index.php?title=%E8%87%AA%E5%90%AF%E5%8A%A8%E7%A8%8B%E5%BA%8F)
