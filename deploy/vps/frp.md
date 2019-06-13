- 安装golang
`pkg install golang`
- 获取frp源码
`go get github.com/fatedier/frp`
- 编译frps和frpc
```shell
    cd $HOME/go/src/github.com/fatedier/frp/cmd/frpc
    go build
    cd $HOME/go/src/github.com/fatedier/frp/cmd/frps
    go build
```

###### 参考
[1] [Android中运行使用termux运行frp](Android中运行使用termux运行frp "Android中运行使用termux运行frp")