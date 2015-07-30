tm.define("lm",{
//最初に読み込む　今のところ実質テスト場

init : function(){

this.hold = new Array();
var starttime;

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

starttimer : function(){

 starttime = new Date();
},

gettime : function(){

  //timer?
   var currentTime = new Date();
   //console.log((currentTime - starttime) / 1000 + "秒");
},


play: function(){

    console.log(this.hold);
},


saveScreen : function(){

    //html2canvas -> toDataURL
//  html2canvas(document.body, {
//    onrendered: function(app) {
//    document.body.appendChild(app);
//  }
//});
//
  alert("aa");

},

holdFunction : function(define){

  this.hold.push(define);
},

update: function(){},

})