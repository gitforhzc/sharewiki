## [自动化shell script][1]
* 批量执行git提交命令  
	
```
# file: ./commit.sh
#!/bin/bash

git add *
git commit -m 'default'
git push origin master

```

* 备份所使用的命令，以待crond使用  
	
```
# file:~/auto-full-backup.sh
#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH
echo ${PATH}

mountdir=/media/hzc/mid-storage
workdir=${mountdir}/customed-backups/full-backup

umount /dev/sda5
mkdir ${mountdir} # 创建挂载的空目录  
mount /dev/sda5 ${mountdir} # 挂载  
mkdir -p ${workdir}

dump -0u -f ${workdir}/all.bak / 

for target in home usr etc boot root
do
    tar -jpcv -f ${workdir}/${target}.tar.bz2 /${target}
done

exit 0

```

```
# file: ～/auto-diff-backup.sh
#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH
echo ${PATH}

mountdir=/media/hzc/mid-storage
yesterday=$(date --date='1 days ago' +%Y-%m-%d)
today=$(date +%Y-%m-%d)
workdir=${mountdir}/customed-backups/diff-${today}-backup

umount /dev/sda5
mkdir ${mountdir} # 创建挂载的空目录
mount /dev/sda5 ${mountdir} # 挂载  
mkdir -p  ${workdir}

dump -1u \
    -f ${workdir}/alldiff-${today}.backup / 

for target in home usr etc root boot
do
    tar -N ${yesterday} -jpcv -f ${workdir}/${target}diff-${today}.tar.bz2 /${target}    
    
done

exit 0
```


## [开机自动挂载][2]
```
sudo vim /etc/fstab

# /dev/sda5 
UUID="0004D84500007FB1" /media/hzc/mid-storage
ntfs        rw.relatime,date=ordered    0 1

```


## [定时自动备份][3]
> 重定向输出内容，查看crontab任务是否执行成功。[参考](http://blog.csdn.net/ithomer/article/details/6817019)
```
su -
crontab -e   

# file: /var/spool/cron/crontab/root
# full backup at 00:00 every monday  
# m h  dom mon dow   command
  0 0  *   *    1    /root/shell-scripts/auto-full-backup.sh > /home/hzc/crond-weekly.log 2>&1

# diff backup at 00:00 every day
# m h  dom mon dow   command
  0 0  *    *   *    /root/shell-scripts/auto-diff-backup.sh > /home/hzc/crond-daily.log 2>&1 

```





[1]: http://linux.vbird.org/linux_basic/0340bashshell-scripts.php

[2]: http://linux.vbird.org/linux_basic/0230filesystem.php#bootup

[3]: http://linux.vbird.org/linux_basic/0430cron.php#whatiscron_type




