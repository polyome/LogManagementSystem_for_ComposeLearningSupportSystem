tm.define("lm",{
//最初に読み込む　今のところ実質テスト場
init : function(){

console.log(tm.app.CanvasApp.width);
console.log(tm.display.CanvasApp.height);


},

getmouseXYfromWindowSize : function(){
	window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event;
        console.log(event.clientX + ", " + event.clientY);
    }
},


})