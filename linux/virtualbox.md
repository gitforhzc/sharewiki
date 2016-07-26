centos7 is running on win10-virtualbox
## 启用USB 3.0
* install
`Oracle_VM_VirtualBox_Extension_Pack`[link](https://www.virtualbox.org/wiki/Downloads)

* setting
  1. on virtualbox  
  `setting-> USB device -> USB 3.0`
  2. on ubuntu terminal(if centos7 then ignore)
  `sudo usermod -a -G vboxusers hzc`
  3. reboot  
  `sudo reboot`

* USB driver(if windows7, then install)
`install USB driver on windows7`

## 调整VirtualBox硬盘大小
1. 添加VBoxManage环境变量  
> C:\Program Files\Oracle\VirtualBox

2. 获取当前虚拟机的uuid  
> VBoxManage list hdds

3. 调整虚拟硬盘大小为64G  
> VBoxManage modifyhd `uuid` –-resize 65536

4. 重新启动virtualbox  
