/*
**经测试：
**手动（每秒约2次）不断挣扎耗时约20秒
**脚本每秒点击50次挣扎，依旧耗时20秒
*/
playdwrg();

function playdwrg(){
    var isDebug = false;
    if(isDebug){
        console.show();  
    }
    getPermission();
    registKey();
}

function getPermission(){
    auto(); //无障碍服务
    setScreenMetrics(1080, 1920); //屏幕分辨率
    if(!requestScreenCapture(true)){
        toastLog("请求截图失败");
        exit();
    }
}

function registKey(){
    //监听按键
    events.observeKey();
    //屏蔽音量键原有功能
    events.setKeyInterceptionEnabled("volume_up", true);
    events.setKeyInterceptionEnabled("volume_down", true);
    
    var ridThread;
    toastLog("按音量上键开始挣脱");
    events.onKeyDown("volume_up", function(){
        toastLog("开始挣脱");
        ridThread = threads.start(getRid);
    });
    
    toastLog("按音量下键停止挣脱");
    events.onKeyDown("volume_down", function(){
        toastLog("停止挣脱");
        ridThread.interrupt();
    });
}

function getRid(){
    var dir = "/sdcard/scripts/playdwrg/";
    var img = captureScreen(dir + "captured.png");
    if (img != null){
        var left_templ = images.read(dir + "clickLeft.png");
        var right_templ = images.read(dir +"clickRight.png");
        if(left_templ != null && right_templ != null){
            var left = findImage(img, left_templ, { threshold: 0.6 });
            var right = findImage(img, right_templ, { threshold: 0.6 });
            if(left != null && right != null){
                toastLog("正在挣脱中");
                while(true){
                    click(left.x + 100, left.y + 100);
                    log(left.x + 100, left.y + 100);
                    sleep(random(10,100));
                    click(right.x + 100, right.y + 100);
                    log(right.x + 100, right.y + 100);
                    sleep(random(10,100));
                }
            }else{
                toastLog("匹配失败");
                exit();
            }
         }else{
             toastLog("模板读取错误，请查看模板图片目录");
             exit();
         }
     }else{
        toastLog("截图失败");
        exit();
    }
}