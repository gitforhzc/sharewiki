[mount-ntfs](http://www.phpini.com/linux/rhel-centos-fedora-mount-ntfs-partition)   
* 先啟用 EPEL Repository  
` yum install epel-release`
* NTFS-3G 為 Linux 提供 NTFS 分割區的的驅動程式  
`yum -y install ntfs-3g`
* 將分割區掛載到 /mnt/ntfs 目錄  
`mkdir /mnt/ntfs`  
`mount -t ntfs-3g /dev/sdb1 /mnt/ntfs`
