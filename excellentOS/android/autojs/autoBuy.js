/*用法：
**0.打开小米商城
**1.清空购物车
**2.设置默认收货地址
**3.打开待开售界面
**4.查看上述界面的"已选"，修改以下的自定义购买选项
**5.运行脚本
**6.切换到第3步的界面
*/

//作为独立程序运行就必须定义items，格式如下
/*
//自定义购买选项
var items = {
    "版本" : "3GB+32GB",
    "颜色" : "浅蓝色",
    "容量" : "64GB",
}
*/

//作为模块运行，导出函数，依赖主程序loadingAutoBuy.js
module.exports = autoBuy;

function autoBuy(shopName){
    if (shopName == "xm"){
        buyXM();
    }else if (shopName == "jd"){
        buyJD();
    }
}

function buyJD(){
    toastLog("jd");
}

function buyXM(){
    //等待开售
    ready();
    //开始抢购
    order();
    //结算付款
    pay();
    //确认订单
    confirm();
}

function ready(){
    auto();
    var miPackage = "com.xiaomi.shop";
    if (currentPackage != miPackage){
        toast("请打开小米商城的购买界面");
        waitForPackage(miPackage);
    }        
}

function order(){
    while(!clickBtn("加入购物车", 3600));
    //选择新地址
    if (clickBtn("选择新地址", 0.3, close)){
        while(!clickBtn("加入购物车"));
    }
    //配置选项
    clickBtn("确定", 0.3, optionSet); 
    //等待排队
    while(textContains("排队中").exists());
}

function pay(){
    while(!clickPos("购物车"));
    if(!clickBtn("结算")){
        while(!back());//购物车有时为空，重试
        buyXM();
    }
    while(!clickPos("微信支付"));
    while(!clickBtn("付款"));  
}

function confirm(){
    text("立即支付").waitFor();
    while(!back());      
    while(!clickPos("查看订单"));
    toastLog("确认订单无误后");
    toastLog("在15分钟内付款");
    exit();
}

function clickPos(btnText, timeout){
    timeout = (timeout == null ? 1000 : timeout*1000);
    var btn = text(btnText).findOne(timeout);
    if(btn != null){
        var rect = btn.bounds();
        rect.top -= 40;
        rect.bottom += 20;
        click(rect.centerX(), rect.centerY());
    }else{
        log(btnText + "超时");
        return false;
    }
    log(btnText);
    return true;
}

function clickBtn(btnText, timeout, proc){
    timeout = (timeout == null ? 1000 : timeout*1000);
    var btn = className("Button").textContains(btnText).findOne(timeout);
    if(btn != null){
         if (proc != null){
             proc(timeout);             
         }else{
             btn.click();
         }
    }else{
        log(btnText + "超时");
        return false;
    }
    log(btnText);
    return true;
}

function optionSet(timeout){
    for (key in items){
        var value = items[key];
        if (text(key).exists()){
            if(!click(value)){
                outOfStock(key, value);
            }
        }
        else{
            log("选项没有" + key);
        }
    }
    var btn = className("Button").findOne(timeout);
    if(btn != null){
        var btnText = btn.text();
        if (btnText == "确定" || btnText == "加入购物车"){
            btn.click();
        }else if(btnText == "到货通知"){
            outOfStock("", "");
        }
    }
}

function outOfStock(key, value){
    toastLog(key + value + "没货");
    toastLog("请按本界面有货选项自定义脚本");
    toastLog("脚本已退出");
    exit();
}

function close(timeout){
    var btn = idContains("close_btn").findOne(timeout);
    if( btn != null){
        btn.click();
        log("关闭选项");
    }else{
        toastLog("关闭异常，请手动关闭");
    }
}


