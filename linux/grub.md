## 问题描述
* 系统：ubuntu，windows10  
* 开机引导程序：grub  
* 出现问题：升级windows10 16385，不料重启后没能进入升级界面，就连正常进入win10也没办法。于是启动PE修复win10开机引导，但ubuntu的grub被覆盖了  
* 解决问题：修复grub，使之成为开机引导程序  

## boot loader: grub
### 理论
[Boot Loader: Grub2](http://linux.vbird.org/linux_basic/0510osloader.php#grub)  

### 实践
* 启动ubuntu光盘，点击`try ubuntu`  
* 安装grub到硬盘的MBR  
`sudo grub-install /dev/sda`
* 让grub读取ubuntu的grub配置文件grub.cfg  
`set root=(hd0,9)`	# 我的/boot挂载在分区/dev/sda9  
`set prefix=(hd0,9)/grub`	# prefix 设定grub启动路径  
`insmod (hd0,9)/grub/i386-pc/normal.mod` # insmod 加载模块  
`normal`	# 进入grub菜单  
-------启动ubuntu中---------  
`sudo update-grub`	# 更新grub配置文件  
`sudo grub-install /dev/sda`	# 重新安装grub，使之读取此系统的grub.cfg  

参考：  
[1] [Grub Rescue修复方法](http://forum.ubuntu.org.cn/viewtopic.php?f=139&t=348503)  
[2] [多系统启动出现grub rescue模式，错误“normal.mod not found”解决办法](http://blog.sina.com.cn/s/blog_7deb436e0101nzkq.html)  
