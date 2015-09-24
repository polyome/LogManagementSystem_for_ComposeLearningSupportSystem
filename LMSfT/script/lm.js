;$(function($){

		$.fn.runTest = function(){

			$(this).on('load',function(){
				var canvas = $(this).loadCanvasElement();

				$(canvas).selfHtml();
				//$(canvas).mouseEvent(canvas);
		});
	}
		$.fn.selfHtml = function(){

			//outer = $(this).outerHeight();
			outer = $(this).get(0).outerHTML;
			console.log(outer);

		}

		$.fn.loadCanvasElement = function(){
				var canvas = $(this).contents().find('canvas');
				console.log(canvas);

				//現在のサイズ
				console.log('width:'+canvas.width()+',height:'+canvas.height());
				
				console.log();


				return canvas;
	}

		$.fn.mouseEvent = function(canvas){
			$(this).mousedown(function(canvas){
				var types = ['','左','中央','右'];
				console.log(types[canvas.which]+'ボタン');
		});
		//補正が必要	X軸方向のみ120-130pxのズレ
		//			canvasサイズ比を乗除する width = currentWidth * (static TMWidth/static canvasWidth);
			$(this).mousemove(function(canvas){
				console.log('width:'+(canvas.clientX-125) +',height:'+canvas.clientY);
		});
	}
});