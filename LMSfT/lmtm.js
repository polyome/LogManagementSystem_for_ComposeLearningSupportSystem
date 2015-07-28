tm.define("lm",{
//最初に読み込む　今のところ実質テスト場

init : function(){

this.hold = new Array();

console.log(this.hold);

},

//getmouseXYfromWindowSize : function(){
//	window.onmousemove = handleMouseMove;
//    function handleMouseMove(event) {
//        event = event || window.event;
//        console.log(event.clientX + ", " + event.clientY);
//    }
//},

getmouseXY : function(){
	var p = app.pointing;

	var x = p.x;
    var y = p.y;

    this.hold.push(x+","+y);

},

play: function(){

    console.log(this.hold)
},


update: function(){
},

})