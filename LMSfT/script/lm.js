//最初に読み込む　実質テスト場
function init(){

}


//
;$(function($){
	var canvas;	
		$.fn.loadCanvasElement = function(){
			$(this).on('load',function(){
				canvas = $(this).contents().find('canvas');
				//console.log(canvas);
		});
	}
//setTimeout(function(){console.log(canvas);},8000);
});

;$(function($){

	$.fn.mouseEvent = function(e){
			//効かない
			$('#contents').mousedown(function(e){
				var types = ['','左','中央','右'];
				console.log(types[e.which]+'ボタン');
			});
			//効く
			$('#contents').mouseover(function(e){
				console.log(e.clientX+' , '+e.clientY);
			})
	}
});