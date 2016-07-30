## 使用Proxifier把shadowsocks转为全局代理

### 前言  
ssh和ss代理都属于socks5代理，通俗的理解，socks5只是局部代理，不能像vpn那样把整个电脑都代理。因此，一般情况下只有支持socks5的软件才能使用ssh、ss代理。

我们使用的IE浏览器就不支持socks5代理，一般的游戏，也不支持socks5代理，那么这些软件如何使用代理？除了使用vpn，我们还有一种不错的办法，那就是把socks5代理转换成全局代理，效果跟vpn几乎一样。

### 配置Proxifier
1. 打开Proxifier->Profile->Proxy Servers，添加如下代理服务器
[截图](https://kyonli.com/wp-content/uploads/2014/09/Proxifier1.png)  
2. 打开Proxifier->Profile->Proxification Rules，在Localhost中的Target hosts里加入shadowsocks服务器IP或域名；Default的Action选择上一步中添加的服务器。整体看起来应该是这样的[截图](https://kyonli.com/wp-content/uploads/2014/09/Proxifier2.png)  
3. 打开Proxifier->Profile->Name Resolution，选择后两项[截图](https://kyonli.com/wp-content/uploads/2014/09/Proxifier3.png)

### 引用
[1] [使用Proxifier+shadowsocks实现Windows平台全局代理并实现国内外智能分流](https://kyonli.com/p/64)