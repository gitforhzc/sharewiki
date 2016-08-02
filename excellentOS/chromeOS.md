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


## Chrome Extension
download URL: https://chrome.google.com/webstore
+ [regular](#regular)
+ [beautify](#beautify)
+ [efficiency](#efficiency)
+ [syn](#syn)
+ [tools](#tools)
+ [english](#english)
+ [monitor](#monitor)


### regular
* Proxy SwitchyOmega  
浏览器代理神器：可以轻松快捷地管理多个代理，并能快速地在代理之间切换。可以设置规则或使用 PAC 自动智能对指定的网站使用代理  
* Shadowsocks
 sock5代理，配合proxifier实现全局代理
* Chrono下载管理器
让你轻松高效地管理Chrome浏览器中的下载任务
* Better Extension Manager  
小巧好用的 Chrome 扩展/应用批量管理扩展
* Context  
它不仅可以禁用/启用全部扩展，还可以让你对扩展进行分组，并且可以快速启用/禁用某个分组的扩展

### beautify
* Ink for Google  
改善 Google 服務的版面設計,
加入更多 Material Design 設計元素
* stylish  
Stylish 是一款用户样式管理器，可让您调整网页的样式。它可让您轻松地为 Google、Facebook、YouTube、Orkut 和其他许多网站安装主题背景和皮肤。
* 远方new tab  
让新标签页内的背景图片每次打开都不一样
* SmootScroll  
平滑滚动页面
* AutoPagerize  
自动翻页,浏览网页时，可以自动翻页并将每一页的内容接在现有内容的末尾
* Force Microsoft Yahei Font  
强制让 Chrome 使用微软雅黑显示网页。
* 关灯看视频  
观看视频时自动调暗页面，让您仿佛置身于电影院中
* Adblock Plus  
屏蔽广告

### efficiency
* Vimium  
键盘流必备神器, 用 VIM 的操作方式来操作 Chrome
* crxMouse Chrome Gestures  
鼠标手势、超级拖拽、平滑滚动、标签列表等功能
* OneTab  
将当前打开的所有标签页保存到一个页面（列表）以备稍后或下次再访问
* Lazarus: Form Recovery  
输入的内容自动保存，防止浏览器意外关闭导致的内容丢失
* Octotree  
用来显示 Github 项目的目录结构，它允许你直接从浏览器中浏览项目
* Auto HD For YouTube™  
在播放 Youtube 的视频时，使用提前预定好的清晰度
* 删除谷歌重定向  
避免谷歌搜索结果链接重定向, 同时防止点击追踪

### syn
* Save to Pocket  
随时保存正在浏览的文章到Pocket，待有时间后再仔细阅读，设置好标签后可以归类浏览；
* LastPass  
在线存储你的密码, 支持密码自动填充、生成密码
* Pushbullet  
在 iOS、Android 手机和电脑的 Chrome 之间互相传递文字、链接、图片等信息。  
* Black Menu for Google™  
将各种Google服务集成到扩展程序上。
