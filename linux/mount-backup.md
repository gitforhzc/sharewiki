## 分区环境
/sda4挂载在根目录/  
/sda5为windows系统的分区，可挂载在Linux的目录（如/media/hzc-deepin/backups)  

## [备份策略][1]  
* [挂载][2]  
	mkdir /media/hzc-deepin/backups # 创建挂载的空目录  
	mount /dev/sda5 /media/hzc-deepin/backups # 挂载  
* 系统备份[dump][3]  
	1. 备份对象  
		根目录/  

	2. 完整备份    
		dump -0u -f /media/hzc-deepin/backups/all.bak / 

	3. 累积备份  
		dump -1u -f /media/hzc-deepin/backups/alldiff.bak / 

* 关键目录备份[tar][4]
	1. 备份对象  
		/home	# 家目录：个人资料  
		/usr	# 软件  
		/etc	# 系统设置
		/boot	# 开机引导程序
		/root	# root用户的家目录  

	2. tar打包并压缩目录以备份  
		tar -jpcv -f /media/hzc-deepin/backups/home.tar.bz2 /home  
		tar -jpcv -f /media/hzc-deepin/backups/usr.tar.bz2 /usr  
		tar -jpcv -f /media/hzc-deepin/backups/etc.tar.bz2 /etc  
		tar -jpcv -f /media/hzc-deepin/backups/boot.tar.bz2 /boot  
		tar -jpcv -f /media/hzc-deepin/backups/root.tar.bz2 /root  

	3. tar -N 'time'以差异备份
		tar -N '2016-06-23' -jpcv -f /media/hzc-deepin/backups/homediff.tar.bz2 /home  
		tar -N '2016-06-23' -jpcv -f /media/hzc-deepin/backups/usrdiff.tar.bz2 /usr  
		tar -N '2016-06-23' -jpcv -f /media/hzc-deepin/backups/etcdiff.tar.bz2 /etc  
		tar -N '2016-06-23' -jpcv -f /media/hzc-deepin/backups/bootdiff.tar.bz2 /boot  
		tar -N '2016-06-23' -jpcv -f /media/hzc-deepin/backups/rootdiff.tar.bz2 /root  


[1]: http://linux.vbird.org/linux_basic/0580backup.php#backup_type
[2]: https://wiki.deepin.org/index.php?title=%E6%8C%82%E8%BD%BD
[3]: http://man.linuxde.net/dump
[4]: http://linux.vbird.org/linux_basic/0240tarcompress.php#tar

