// 获取元素
var box = document.querySelector('.box');
var bulletWrap = document.querySelector('.bullet');

// 速度
var speed = 15;
// 方向开关
var oLeft = oRight = oTop = oBottom = 0;
var bullet = 0;

//运动
setInterval(function (){
	if (oLeft){
		box.style.left = box.offsetLeft + speed + 'px';
	} else if (oRight) {
		box.style.left = box.offsetLeft - speed + 'px';
	}
	if (oTop){
		box.style.top = box.offsetTop + speed + 'px';
	} else if (oBottom){
		box.style.top = box.offsetTop - speed + 'px';
	}
	inner();
},50)

// 子弹
setInterval(function (){
	if (bullet){
		var span_ = document.createElement('span');
		span_.style.left = box.offsetLeft + 40 + 'px';
		span_.style.top = box.offsetTop + 'px';
		bulletWrap.appendChild(span_);
		tools.animate(span_, {top : -10}, 2000, 'linear', function (){
			bulletWrap.removeChild(span_);
		});
	}
}, 120)


//键盘按下
window.onkeydown = function (e){
	var key = e.keyCode;
	switch (key){
		case 39:
			oLeft = 1;
			break;
		case 37:
			oRight = 1;
			break;
		case 38:
			oBottom = 1;
			break;
		case 40:
			oTop = 1;
			break;
		case 32: 
			bullet = 1;
			break;
	}
}
//键盘取消
window.onkeyup = function (e){
	var key = e.keyCode
	switch (key){
		case 39:
			oLeft = 0;
			break;
		case 37:
			oRight = 0;
			break;
		case 38:
			oBottom = 0;
			break;
		case 40:
			oTop = 0;
			break;
		case 32: 
			bullet = 0;
			break;
	}
}
function inner(){
	var doc = document.documentElement;
	console.log(doc.clientWidth);
	if (box.offsetLeft <= 0){
		box.style.left = 0 + 'px';
	}
	if (box.offsetTop <= 0){
		box.style.top = 0 + 'px';
	}
	if (box.offsetLeft >= doc.clientWidth - box.offsetWidth){
		box.style.left = doc.clientWidth - box.offsetWidth + 'px';
	}
	if (box.offsetTop >= doc.clientHeight - box.offsetHeight){
		box.style.top = doc.clientHeight - box.offsetHeight + 'px';
	}
}
inner();