## show
> dpkg -l 包名	# 查看安装情况


## update
> sudo apt-get update	# 更新源    
> sudo apt-get upgrade	# 更新软件  
> sudo apt-get dist-upgrade	# 更新系统  

## remove
> sudo apt-get autoremove	# 移除不需要的依赖软件包  
> sudo apt-get autoclean	# 移除下载的软件包,即/var/cache/apt/archives目录   
> sudo apt-get remove package --purge	# 移除软件及配置文件  
> dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P	# 移除所有已删除包的残余配置文件


## source
* add ppa source
> example: see blueman.md
> sudo apt-get install python-software-properties	# for apt-apt-repository
> sudo add-apt-repository ppa:user/ppa-name		# add * to source.list
> sudo apt-get update


## system information
* hardware
> sudo lshw	# 查看当前硬件信息
> free		# 查看当前的内存使用情况
> df -h		# 查看硬盘剩余空间
> lsblk		# 查看块设备（硬盘分区）

* network # 有线网卡eth0,无线网卡wlan0
> ifconfig eth0 |awk '/inet/ {split($2,x,":");print x[2]}'	# 查看当前IP地址
> ifconfig eth0 | head -1 | awk '{print $5}'	# 查看当前网卡的物理地址

* service
> service --status-all	# 查看全部服务状态
> sudo update-rc.d 服务名 defaults 99	# 启动服务
> sudo update-rc.d 服务名 remove	# 删除服务
> service 服务名 start			# 临时启动服务
> service 服务名 restart		# 临时重启服务
> service 服务名 stop			# 临时关闭服务
