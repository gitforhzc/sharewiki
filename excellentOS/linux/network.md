## virtualbox centos 静态网络配置
我是安装的32位版本的centos
1. 用ifconfig -a查看网路配置信息
2. 查看/etc/sysconfig/network-script/下的文件，找到与eth0相关的ifcfg-eth0文件
3. 用vi编辑器编辑ifcfg-eth0，设置BOOTPROTO="STATIC",ONBOOT="YES",设置IPADDR,MASK,GATEWAY（根据自己的网络环境设置）
4. 重启network服务，用命令service network restart
5. 试试能不能ping通本地网关，ping 192.168.1.1，结果不OK
6. 在virtualbox界面选中你的虚拟主机，右键“设置”-“网络”将网卡1的连接方式设置为“桥接网卡”然后再ping
7. 查看本地主机IP，在centos里ping本地主机IP
8. 在本地主机ping centos的IP


[1] http://www.it610.com/article/4912275.htm
