# linux配置shadowsocks客户端
## 目录
* [平台](#平台)
* [安装shadowsocks](#安装shadowsocks)
* [shadowsocks配置文件](#shadowsocks配置文件)
* [启动Shadowsocks客户端](#启动Shadowsocks客户端)
* [配置浏览器(firefox)](#配置浏览器(firefox))
* [配置终端全局代理](#配置终端全局代理)
* [参考](#参考)  

## 正文
### 平台： centOS7 / Ubuntu / deepin
### 安装shadowsocks  
```/sbin/bash
sudo yum install python-setuptools
sudo easy_install pip
sudo pip install shadowsocks
```
### shadowsocks配置文件
```
sudo touch /usr/local/etc/ssconfig.json
sudo vim /usr/local/etc/ssconfig.json
添加以下内容:
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

### 连接shadowsocks服务器  
   `sslocal -c /usr/local/etc/ssconfig.json -d start`  
   或手动制定参数运行：  
   `sslocal -s 服务器地址 -p 服务器端口 -l 本地端端口 -k 密码 -m 加密方法`  
   `-d start`使之后台运行，关闭终端也不影响      
### 开机自启shadowsocks  
    vim /etc/rc.local  
    sslocal -c /usr/local/etc/ssconfig.json  #append

也有图形化的客户端shadowsocks-gui@gitHub、shadowsocks-qt5等，可到源中下载安装。

### 配置终端全局代理   
参见[CentOS命令行下使用代理：Shadowsocks+privoxy+redsocks实现全局代理](https://laowang.me/centos-global-privoxy.html)  
#### ubuntu为例
0. 获取权限
```
su -
```
1. 安装  
```
apt-get install privoxy
```
2. 配置  
```
vim /etc/privoxy/config
# 查找修改以下两行
listen-address 127.0.0.1:8118
forward-socks5t / 127.0.0.1:1080 .
```
3. 代理
```
vim ~/.profile
export http_proxy=http://127.0.0.1:8118
export ftp_proxy=http://127.0.0.1:8118
```
4. 开机自启服务
```
vim /etc/rc.local
service privoxy start
```
5. 重启
```
sudo reboot
```

#### CentOS7为例
0. 获取权限
```
su -
```
1. 安装  
  * 下载privoxy最新版  
  http://sourceforge.net/projects/ijbswa/files/Sources/
  * 编译
  ```
  tar xzvf privoxy-3.0.23-stable-src.tar.gz
  cd privoxy-3.0.23-stable
  autoheader
  autoconf
  ./configure      # (--help to see options)
  make             # (the make from GNU, sometimes called gmake)
  ```
  * 建立账户  
  ```
  useradd privoxy -r -s /usr/sbin/nologin
  ```
  * 安装
  ```
  make install
  ```

2. 配置  
```
vim  /usr/local/etc/privoxy/config
添加
forward-socks5 / 127.0.0.1:1080 .
forward 10.*.*.*/ .
forward 192.168.*.*/ .
forward 127.*.*.*/ .
forward localhost/ .
```
3. 代理
```
vim ~/.profile
export http_proxy=http://127.0.0.1:8118
export ftp_proxy=http://127.0.0.1:8118
```
4. 开启服务  
`systemctl start privoxy`
5. 开机自启服务
```
vim /etc/rc.local
systemctl start privoxy
```
6. 重启
```
sudo reboot
```

### 配置浏览器(firefox)  
  1. 安装扩展autoproxy
  2. 配置proxy server  
  `name: shadowsocks`
  `proxy host: 127.0.0.1`
  `port:1080`
  `勾选sock5`
  3. 启用浏览器全局代理，默认代理为shadowsocks  



- 参考  
[1][linux配置shadowsocks客户端](http://my.oschina.net/u/1432769/blog/619651)  
[2][LINUX上使用SHADOWSOCKS客户端](http://blog.liyibo.org/linux-shadowsocks-client/)  
[3][How do you manage startup applications in GNOME 3?](https://ask.fedoraproject.org/en/question/8926/how-do-you-manage-startup-applications-in-gnome-3/)  
[4][Ubuntu，CentOS等linux系统下使用shadowsocks方法](http://www.shadowsocks.asia/fangfa/28.html)  
[5][CentOS命令行下使用代理：Shadowsocks+privoxy+redsocks实现全局代理](https://laowang.me/centos-global-privoxy.html)
