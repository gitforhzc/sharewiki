## 自动化shell脚本
* 批量执行git提交命令
	file: commit.sh
```
#!/bin/bash

git add *
git commit -m 'default'
git push origin maste

```

* 备份所使用的命令，以待crontab使用
	file:~/auto-full-backup.sh
```
#!/bin/bash
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

	file: ～/auto-diff-backup.sh
```
#!/bin/bash 
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


## [/etc/fstab][1]开机自动挂载
```
# /dev/sda5 
UUID="0004D84500007FB1" /media/hzc-deepin/存储中转站
ntfs        rw.relatime,date=ordered    0 1

```


## [/etc/crontab][2]定时自动备份
```
crontab -e   

# full backup at 00:00 every monday  
# m h  dom mon dow   command
  0 0  *   *    1    ~/auto-full-backup.sh

# diff backup at 00:00 every day
# m h  dom mon dow   command
  0 0  *    *   *    ~/auto-diff-backup.sh

```

[1]: http://linux.vbird.org/linux_basic/0230filesystem.php#mount

[2]: http://linux.vbird.org/linux_basic/0430cron.php#whatiscron_type


