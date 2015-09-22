tm.define("lm",{
//最初に読み込む　今のところ実質テスト場

//script

init : function(){

this.hold = new Array();
this.starttime = this.Starttimer();

//console.log(document.getElementById("app"));

alert("work");
},

//getmouseXYfromWindowSize : function(){
//  window.onmousemove = handleMouseMove;
//    function handleMouseMove(event) {
//        event = event || window.event;
//        console.log(event.clientX + ", " + event.clientY);
//    }
//},

getmouseXY : function(){
  var p = app.pointing;

  var x = p.x;
  var y = p.y;

    console.log(x+","+y);
},

Starttimer : function(){

  return new Date();
},

gettime : function(starttime){

  //timer?
   var currentTime = new Date();
   console.log((currentTime - this.starttime) / 1000 + "秒");
},


play: function(){
    console.log(this.hold);
},


saveScreen : function(){

//html2canvas -> toDataURL

  //document.body
  html2canvas(document.body, {
    onrendered: function(canvas) {
    document.body.appendChild(canvas);
  }
});

//data取得
//  var canvas = document.getElementById("app");
//  canvas.toDataURL();//CORS

},

toOutput : function(){},

//muphicバージョン
holdFunction : function(define){
  this.hold.push(define);
},


update: function(){},
})