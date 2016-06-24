## [自动化shell script][1]
* 批量执行git提交命令  
	
```
# file: ./commit.sh
#!/bin/bash

git add *
git commit -m 'default'
git push origin master

```

* 备份所使用的命令，以待crontab使用  
	
```
# file:~/auto-full-backup.sh
#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH
echo ${PATH}

umount /dev/sda5
mkdir /media/hzc-deepin/backups # 创建挂载的空目录  
mount /dev/sda5 /media/hzc-deepin/backups # 挂载  

dump -0u -f /media/hzc-deepin/backups/all.bak /   

tar -jpcv -f /media/hzc-deepin/backups/home.tar.bz2 /home  
tar -jpcv -f /media/hzc-deepin/backups/usr.tar.bz2 /usr  
tar -jpcv -f /media/hzc-deepin/backups/etc.tar.bz2 /etc  
tar -jpcv -f /media/hzc-deepin/backups/boot.tar.bz2 /boot  
tar -jpcv -f /media/hzc-deepin/backups/root.tar.bz2 /root  

```

```
# file: ～/auto-diff-backup.sh
#!/bin/bash 

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH
echo ${PATH}

mountdir=/media/hzc-deepin/backups
date=$(date +%Y-%m-%d)

umount /dev/sda5
mkdir ${mountdir} # 创建挂载的空目录
mount /dev/sda5 ${mountdir} # 挂载  

dump -1u \
    -f ${mountdir}/alldiff-${date}.bak /

for target in home usr etc root boot
do
    tar -N ${date} -jpcv -f ${dir}/${target}diff-${date}.tar.bz2 /${target}    

done
```


## [开机自动挂载][2]
```
sudo vim /etc/fstab

# /dev/sda5 
UUID="0004D84500007FB1" /media/hzc-deepin/存储中转站
ntfs        rw.relatime,date=ordered    0 1

```


## [定时自动备份][3]
```
su -
crontab -e   

# file: /var/spool/cron/crontab/root
# full backup at 00:00 every monday  
# m h  dom mon dow   command
  0 0  *   *    1    /root/script/auto-full-backup.sh

# diff backup at 00:00 every day
# m h  dom mon dow   command
  0 0  *    *   *    /root/script/auto-diff-backup.sh

```
重定向输出内容，查看crontab任务是否执行成功。[参考](http://blog.csdn.net/ithomer/article/details/6817019)
```
su -
crontab -e   

# file: /var/spool/cron/crontab/root
# full backup at 00:00 every monday  
# m h  dom mon dow   command
  0 0  *   *    1    /root/script/auto-full-backup.sh > /home/hzc-deepin/crond-weekly.log 2>&1

# diff backup at 00:00 every day
# m h  dom mon dow   command
  0 0  *    *   *    /root/script/auto-diff-backup.sh > /home/hzc-deepin/crond-daily.log 2>&1

```



[1]: http://linux.vbird.org/linux_basic/0340bashshell-scripts.php

[2]: http://linux.vbird.org/linux_basic/0230filesystem.php#bootup

[3]: http://linux.vbird.org/linux_basic/0430cron.php#whatiscron_type




