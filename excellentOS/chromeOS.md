## ChromeOS
### CloudReady
#### install
    install idCloudReady to VirtualBox   
    download: https://www.neverware.com/freedownload

1. install VirtualBox  
    download: https://www.virtualbox.org/wiki/Downloads          

2. new virtualbox VM  
    for example:
  > name: CloudReady  
    type: Linux  
    version: other linux(64-bit)   
    memory: 2048MB  
    harddisk: create VDI now 32GB  

3. convert .bin to .vdi  
    copy .bin to CloudReady directory, then run :
```
  "C:\Program Files\Oracle\VirtualBox/VBoxManage" convertfromraw "E:\VirtualBox VMs\CloudReady\chromiumos_image.bin" "E:\VirtualBox VMs\CloudReady\tmpcloudready.vdi"
```

4. virtualbox VM setting  
  > go to setting-> system:  
    enable EFI  
    change pointing device to PS/2 Mouse  
    *warning*: go to setting->network:  
     choose network address transform(NAT) to share localhost's shadowsocks
     go to setting-> storage:  
     add cloudready.vdi,and set it as port 0, while CloudReady.vdi as port 1.

5. copy data from cloudready.vdi to CloudReady.vdi  
    设置完成，启动虚拟机。进入CloudReady界面。

  ```
  Ctrl + Alt + F2 # 进入命令行模式
  username: chronos
  password: chrome
  # 格式化CloudyReady.vdi，将MBR磁盘格式化为GPT
  sudo parted /dev/sdb mklabel gpt
  password: chrome  
  mkpart primary 0 -1 # 划分所有空间到一个分区
  sudo chromeos-install –-skip_src_removable -–dst /dev/sdb
  ```
  1. When sure, type Y and press enter.
  2. When the message “Please shutdown,remove the USB device, cross your fingers, and reboot.” appears
  Press CTRL + ALT + F1 to get back to the Welcome screen.
  3. Click Shutdown, remove your USB stick(cloudready.vdi), and reboot.  

6. syn google account
  1. login
  2. setting
  3. download Extension
    * shadowsocks
    * Proxy SwitchyOmega  
      `sock5 127.0.0.1  1080`

### reference
[1] [虚拟机中安装Chrome OS（cloudready）](http://www.gigiwangs.com/archives/1891)   
[2] [解决鼠标在virtualbox失灵](https://equk.co.uk/2016/02/19/cloudready-virtualbox)  
[3] [VirtualBox 网络设置](http://reverland.bitbucket.org/VirtualBox_net.html)  
[4] [MBR格式化为GPT](http://leeforget.blog.51cto.com/6950397/1375908)
[5] [chromiumOS download](http://arnoldthebat.co.uk/wordpress/)


## RemixOS
### how-to-install
http://forum.xda-developers.com/showpost.php?p=66047894&postcount=114
