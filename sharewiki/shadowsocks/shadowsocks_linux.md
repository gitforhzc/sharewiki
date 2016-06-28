## linux配置shadowsocks客户端
### 目录
* [平台](#平台)
* [安装shadowsocks](#安装shadowsocks)
* [shadowsocks配置文件](#shadowsocks配置文件)
* [启动Shadowsocks客户端](#启动Shadowsocks客户端)
* [配置浏览器(firefox)](#配置浏览器(firefox))
* [配置终端全局代理](#配置终端全局代理)
* [参考](#参考)  

### 正文
- 平台： centOS7 / Ubuntu / deepin
- 安装shadowsocks  
  `yum install python-setuptools`  
  `easy_install pip`    
  `pip install shadowsocks`  

- shadowsocks配置文件/usr/local/etc/ssconfig.json
```
{
        "server":"remote-shadowsocks-server-ip-addr",
        "server_port":remote-port,
        "local_address":"127.0.0.1",
        "local_port":1080,
        "password":"your-passwd",
        "timeout":300,
        "method":"aes-256-cfb",
        "fast_open":false,
        "workers":1
}
```

>//server        服务端监听地址(IPv4或IPv6)，若需同时指定多个服务端ip，可设置"server":["1.1.1.1","2.2.2.2"]  
//server_port   服务端端口，一般为443  
//local_address 本地监听地址，缺省为127.0.0.1  
//local_port    本地监听端口，一般为1080  
//password  用以加密的密匙  
//timeout       超时时间（秒）  
//method          加密方法，默认的table是一种不安全的加密，此处首推aes-256-cfb  
//fast_open 是否启用TCP-Fast-Open  
//wokers        worker数量，如果不理解含义不要改   

- 连接shadowsocks服务器  
   `sslocal -c /usr/local/etc/ssconfig.json`  
   或手动制定参数运行：  
   `sslocal -s 服务器地址 -p 服务器端口 -l 本地端端口 -k 密码 -m 加密方法`  
   实现自启并且使之后台运行，关闭终端也不影响：  
    * gnome  
    yum install gnome-tweak-tool   
    gnome-session-properties    
    click 'Add', command: sslocal -c /usr/local/etc/ssconfig.json      
    * 开机自启脚本  
    vim /etc/rc.local  
    sslocal -c /usr/local/etc/ssconfig.json  #append

也有图形化的客户端shadowsocks-gui@gitHub、shadowsocks-qt5等，可到源中下载安装。

- 配置浏览器(firefox)  
  1. 安装扩展autoproxy
  2. 配置proxy server  
  `name: shadowsocks`
  `proxy host: 127.0.0.1`
  `port:1080`
  `勾选sock5`
  3. 启用浏览器全局代理，默认代理为shadowsocks  

- 配置终端全局代理   
参见[CentOS命令行下使用代理：Shadowsocks+privoxy+redsocks实现全局代理](https://laowang.me/centos-global-privoxy.html)
``` 
1. 安装
su -
apt-get install privoxy
2. 配置
vim /etc/privoxy/config
783G	# 找到 783行
listen-address 127.0.0.1:8118
# 去掉前面的注释符号，后面的8118端口可以随便改，但不要和别的服务冲突
1336G	# 再找到 1336
forward-socks5t / 127.0.0.1:1080 .
# 去掉前面的注释符号，后面的1080端口要对应Shadowsocks服务里面的配置，要一致
exit	# 退出root用户
3. 代理
vim ~/.profile
# 添加以下几行
export http_proxy=http://127.0.0.1:8118
export ftp_proxy=http://127.0.0.1:8118
4. 开机自启服务
vim /etc/rc.local
sslocal -c /usr/local/etc/ssconfig.json
service privoxy start
5. 重启
```

- 参考  
[1][linux配置shadowsocks客户端](http://my.oschina.net/u/1432769/blog/619651)  
[2][LINUX上使用SHADOWSOCKS客户端](http://blog.liyibo.org/linux-shadowsocks-client/)  
[3][How do you manage startup applications in GNOME 3?](https://ask.fedoraproject.org/en/question/8926/how-do-you-manage-startup-applications-in-gnome-3/)  
[4][Ubuntu，CentOS等linux系统下使用shadowsocks方法](http://www.shadowsocks.asia/fangfa/28.html)  
[5][CentOS命令行下使用代理：Shadowsocks+privoxy+redsocks实现全局代理](https://laowang.me/centos-global-privoxy.html)
