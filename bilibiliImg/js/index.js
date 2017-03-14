window.onload = function (){
	//获取元素
	var box = document.querySelector('.box');
	var down = document.querySelector('.down');

	var t1 = t2 = 0;	//次数
	var timer = null;
	
	box.onmouseover = function (){	
		clearInterval(timer);	//处理加速
		timer = setInterval(function (){
			t2++;
			if (t2 > 15) {
				t2 = 9;
			}
			console.log(t2);
			box.style['background-position'] = ''+ t2*(-80) +'px 0';
		},100);
	}
	box.onmouseout = function (){	
		clearInterval(timer);	//处理加速
		timer = setInterval(function (){
			t2--;
			if (t2 <= 0) {
				t2 = 0;
				clearInterval(timer);
			}
			console.log(t2);
			box.style['background-position'] = ''+ t2*(-80) +'px 0';
		},100);
	}


}