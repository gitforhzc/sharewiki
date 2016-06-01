# 用root直接登入ubuntu 14_04
在终端如需切换root身份，可打开终端输入以下命令：  
1. 设置root密码  
> sudo passwd root  
2. 切换到root用户  
> sudo -s  

想要在登录界面使用root身份登录，可编辑/etc/lightdm/目录下的lightdm.conf文件，如没有此文件，直接创建
1. 在terminal下输入
> sudo gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
内容入下
[SeatDefaults] 
autologin-user=root  
user-session=ubuntu  
greeter-show-manual-login=true  

2. 在terminal下輸入
gedit /root/.profile 打开文件后找到“mesg n”，将其更改为“tty -s && mesg n”

3. 用reboot命令重启即可

## 引用
[1] [用root直接登入ubuntu 14_04](http://blog.csdn.net/loongembedded/article/details/37958405)  
[2] [ubuntu 14.04开机出现错误“Error found when loading /root/.profile”解决](http://blog.sina.com.cn/s/blog_68b1e07d0102vcqd.html)