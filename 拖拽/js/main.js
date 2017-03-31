// 获取元素
var box = document.querySelector('.box');

box.addEventListener('mousedown', fnDown);
	function fnDown(e){
		var dx = e.pageX - this.offsetLeft;
		var dy = e.pageY - this.offsetTop;
		document.addEventListener('mousemove', fnMove)
		document.addEventListener('mouseup', fnUp);	
		function fnMove(e){
			console.log(dx, dy);
			var l = e.pageX - dx;
			var t = e.pageY - dy;
			box.style.left = l + 'px';
			box.style.top = t + 'px';
		}
		function fnUp(e) {
			document.removeEventListener('mousemove', fnMove);
			document.removeEventListener('mouseup', fnUp);
		}
		
	}

