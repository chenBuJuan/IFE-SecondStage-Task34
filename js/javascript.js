/*javascript*/
/*定义记录block状态的数据结构*/
var blockState = {
    
    "xIndex" : 6,
    "yIndex" : 5,
    "direction" : "left",
    "rotate" : 0
    
};
/*全局变量*/
var oBlock = document.getElementById("block");
var oLog = document.getElementById("log").getElementsByClassName("mes")[0];
/*定义go函数*/
function go(){
    
    switch (blockState.direction){
        
        case "left" : 
            oBlock.style.left = (blockState.xIndex - 1) * 40 + "px";
            blockState.xIndex--;
            break;
        
        case "right" : 
            oBlock.style.left = (blockState.xIndex + 1) * 40 + "px";
            blockState.xIndex++;
            break;
            
        case "top" : 
            oBlock.style.top = (blockState.yIndex - 1) * 40 + "px";
            blockState.yIndex--;
            break;
            
        case "bottom" : 
            oBlock.style.top = (blockState.yIndex + 1) * 40 + "px";
            blockState.yIndex++;
            break;
        
    }
    
}
/*定义tunLef函数*/
function tunLef(){
    
    var iRotate = blockState.rotate - 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义tunRig函数*/
function tunRig(){
    
    var iRotate = blockState.rotate + 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义tunBac函数*/
function tunBac(){
    
    var iRotate = blockState.rotate + 180;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义traLef函数*/
function traLef(){
    
    oBlock.style.left = (blockState.xIndex - 1) * 40 + "px";
    blockState.xIndex--;
    
}
/*定义traTop函数*/
function traTop(){
    
    oBlock.style.top = (blockState.yIndex - 1) * 40 + "px";
    blockState.yIndex--;
    
}
/*定义traRig函数*/
function traRig(){
    
    oBlock.style.left = (blockState.xIndex + 1) * 40 + "px";
    blockState.xIndex++;
    
}
/*定义traBot函数*/
function traBot(){
    
    oBlock.style.top = (blockState.yIndex + 1) * 40 + "px";
    blockState.yIndex++;
    
}
/*定义movLef函数*/
function movLef(){
    
    oBlock.style["-webkit-transform"] = "rotate(0deg)";
    blockState.direction = "left";
    blockState.rotate = 0;
    go();
    
}
/*定义movTop函数*/
function movTop(){
    
    oBlock.style["-webkit-transform"] = "rotate(90deg)";
    blockState.direction = "top";
    blockState.rotate = 90;
    go();
    
}
/*定义movRig函数*/
function movRig(){
    
    oBlock.style["-webkit-transform"] = "rotate(180deg)";
    blockState.direction = "right";
    blockState.rotate = 180;
    go();
    
}
/*定义movBot函数*/
function movBot(){
    
    oBlock.style["-webkit-transform"] = "rotate(270deg)";
    blockState.direction = "bottom";
    blockState.rotate = 270;
    go();
    
}
/*定义指令执行成功时函数*/
function runSuc(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
                
    newNode.style.color = "green";
    newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'执行成功。";
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义指令执行失败时函数*/
function runFai(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
                
    newNode.style.color = "red";
    newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'执行失败!";
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义指令执行错误或无指令时函数*/
function orderErr(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
    
    newNode.style.color = "red";
    
    if(str){
        
        newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'错误!";
        
    }else{
        
        newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 请输入指令!";
        
    }
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义事件函数，处理指令*/
function run(){
    
    var sValue = document.getElementById("text-input").value.replace(/(^\s+)|(\s+$)/g,"");
    
    switch (true){
        
        case (/^go$/i).test(sValue) : 
        
            if(blockState.xIndex == 1 && blockState.direction == "left" || blockState.xIndex == 10 && blockState.direction == "right" || blockState.yIndex == 1 && blockState.direction == "top" || blockState.yIndex == 10 && blockState.direction == "bottom"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                go();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^tun lef$/i).test(sValue) : 
        
            tunLef();
            
            runSuc(sValue);
                
            break;
            
        case (/^tun rig$/i).test(sValue) : 
        
            tunRig();
            
            runSuc(sValue);
                
            break;
            
        case (/^tun bac$/i).test(sValue) : 
        
            tunBac();
            
            runSuc(sValue);
                
            break;
            
        case (/^tra lef$/i).test(sValue) :
            
            if(blockState.xIndex == 1 && blockState.direction == "left"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                traLef();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^tra top$/i).test(sValue) :
            
            if(blockState.yIndex == 1 && blockState.direction == "top"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                traTop();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^tra rig$/i).test(sValue) :
            
            if(blockState.xIndex == 10 && blockState.direction == "right"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                traRig();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^tra bot$/i).test(sValue) :
            
            if(blockState.yIndex == 10 && blockState.direction == "bottom"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                traBot();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^mov lef$/i).test(sValue) :
            
            if(blockState.xIndex == 1 && blockState.direction == "left"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                movLef();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^mov top$/i).test(sValue) :
            
            if(blockState.yIndex == 1 && blockState.direction == "top"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                movTop();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^mov rig$/i).test(sValue) :
            
            if(blockState.xIndex == 10 && blockState.direction == "right"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                movRig();
                
                runSuc(sValue);
                
                break;
                
            }
            
        case (/^mov bot$/i).test(sValue) :
            
            if(blockState.yIndex == 10 && blockState.direction == "bottom"){
                
                runFai(sValue);
                
                break;
                
            }else{
                
                movBot();
                
                runSuc(sValue);
                
                break;
                
            }
            
        default :
            
            orderErr(sValue);
        
    }
    
}
/*绑定事件函数*/
function init(){
    
    var oBtn = document.getElementById("button-input");
    
    oBtn.addEventListener("click",run);
    
}
/*初始化*/
init();