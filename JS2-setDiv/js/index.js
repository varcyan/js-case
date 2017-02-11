//当页面加载完成时执行
window.onload = function (){ 
	//声明变量并获取元素(通过id)
	//获取设置按钮
	var set = document.getElementById('btn_set');
	//console.log(set);

	//获取div盒子
	var box = document.getElementById('box');
	
	//获取mask
	var mask = document.getElementById('mask');
	//console.log(mask);

	//获取恢复按钮
	var reset = document.getElementById('btn_reset');
	//获取确认按钮
	var confirm = document.getElementById('btn_confirm');

	//获取改变color的元素
	var cGreen = document.getElementById('c_green');
	var cYellow = document.getElementById('c_yellow');
	var cBlue = document.getElementById('c_blue');

	//获取改变width的元素
	var w100 = document.getElementById('w_100');
	var w240 = document.getElementById('w_240');
	var w300 = document.getElementById('w_300');

	//获取改变height的元素
	var h100 = document.getElementById('h_100');
	var h240 = document.getElementById('h_240');
	var h300 = document.getElementById('h_300');


	//设置对应事件
	//点击按钮时出现mask
	set.onclick = maskOver;
	//点击确认按钮后mask消失
	confirm.onclick = maskNone;
	//设置颜色
	cGreen.onclick = setGreen;
	cYellow.onclick = setYellow;
	cBlue.onclick = setBlue;
	//设置宽度
	w100.onclick = setW100;
	w240.onclick = setW240;
	w300.onclick = setW300;
	//设置高度
	h100.onclick = setH100;
	h240.onclick = setH240;
	h300.onclick = setH300;
	//恢复原来的样子
	reset.onclick = setReset;
	
	//定义函数
	//函数（mask出现）
	function maskOver(){
		mask.style.display = 'flex';
	}
	//函数（mask消失）
	function maskNone(){
		mask.style.display = 'none';
	}
	//改变颜色
	function setGreen(){
		box.style.background = 'green';
		box.style.color = '#fff';
	}
	function setYellow(){
		box.style.background = 'yellow';
		box.style.color = '#000';
	}
	function setBlue(){
		box.style.background = 'blue';
		box.style.color = '#fff';
	}

	//改变宽度
	function setW100(){
		box.style.width = 100 + 'px';
	}
	function setW240(){
		box.style.width = 240 + 'px';
	}
	function setW300(){
		box.style.width = 300 + 'px';
	}

	//改变高度
	function setH100(){
		box.style.height = 100 + 'px';
	}
	function setH240(){
		box.style.height = 240 + 'px';
	}
	function setH300(){
		box.style.height = 300 + 'px';
	}

	//恢复原始样子
	function setReset(){
		box.style.cssText = '';
	}
}
