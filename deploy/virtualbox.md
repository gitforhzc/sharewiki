centos7 is running on win10-virtualbox
## 启用USB 3.0
* [install](https://www.virtualbox.org/wiki/Downloads)  
`Oracle_VM_VirtualBox_Extension_Pack`

* setting
  1. on virtualbox  
  `setting-> USB device -> USB 3.0`
  2. on ubuntu terminal(if centos7 then ignore)  
  `sudo usermod -a -G vboxusers hzc`
  3. reboot  
  `sudo reboot`

* USB driver(if windows7, then install)  
`install USB driver on windows7`

## [调整VirtualBox硬盘大小](http://blog.sina.com.cn/s/blog_62c89b450101lo91.html)
1. 添加VBoxManage环境变量  
` C:\Program Files\Oracle\VirtualBox`

2. 获取当前虚拟机的uuid  
` VBoxManage list hdds`

3. 调整虚拟硬盘大小为64G  
` VBoxManage modifyhd 'uuid' –-resize 65536`

4. 重新启动virtualbox  

## NAT端口转发
### 为什么要为virtualbox配置端口映射？
如果我们使用NAT方式作为虚拟机连接网络的方式，那么虚拟机相当于我们内网的一台机器，我们想要连接到这台内网的机器，就需要通过映射的端口来访问。

### 如何设置端口映射？
右击我们的虚拟机点击设置，点击网络，连接方式选择“网络地址转换(NAT)”——>选择高级——>勾选“接入网线”——>点击“端口转发”  
然后新增一条记录：
其中，名称随便填，协议选择TCP，主机IP和子系统IP不填，主机端口填（XXXX），子系统端口填（22）。

### 与虚拟机连接连接的一些实例
为什么需要和虚拟机连接呢？首先通过shell管理服务器的时候我们就需要和虚拟机里的服务器通过ssh连接。

### 参考
[1] 为virtualbox配置端口映射: http://www.jianshu.com/p/573cf2ea4da9  
[2] VirtualBox设置NAT端口映射: http://forum.ubuntu.org.cn/viewtopic.php?f=65&t=382161  
[3] 安装和使用Linux花生壳服务: http://service.oray.com/question/116.html  
[4] VirtualBox中的四种网络连接方式: http://www.jianshu.com/p/f59a0695b164
