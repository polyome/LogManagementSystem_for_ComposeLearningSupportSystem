
//CORS回避　html呼び出し
//問題点：htmlコンテンツしか呼び出さない(クロスサイトスクリプティングっぽい)
//	$(function() {
//		$.ajax({
//			url: './MelOn/index.html',
//			type: 'GET',
//			dataType: 'html',
//			success: function(data) {
//				alert("done");
// 				$('#left_frame').html(data.responseText);
//			},
//			error: function(xhr, status, err) {
//      			alert('HTML読み出しで問題がありました:' + url);
//    		}
//
//		});
//	}); 

//sleep関数
//		function step2() {
//			var command = "console.log(document.getElementById('app'));" ;
//			setTimeout(command, 10000);
//		}

//ブラウザのマウス座標の取得(没)
//function getmouseXY_windowSize(){
//	window.onmousemove = handleMouseMove;
//    function handleMouseMove(event) {
//        event = event || window.event;
//        console.log(event.clientX + ", " + event.clientY);
//    }
//}