//最初に読み込む　実質テスト場
function init(){

console.log(tm.display.CanvasApp.width);

}


//ブラウザのマウス座標の取得(没)
function getmouseXY_windowSize(){
	window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event;
        console.log(event.clientX + ", " + event.clientY);
    }
}