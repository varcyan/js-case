window.onload = function (){
	//获取元素
	var wrap = document.querySelector('.wrap');
	var dot = document.querySelector('.dot');
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');

	//图片数组
	var arrImg = ['1.jpg','2.jpg','3.jpg','4.jpg'];
	//索引初始值、字符串
	var num = 0;
	var len = arrImg.length;
	var strWrap = '', strDot = '';
	
	//写入相应的图片、dot、
	for(var i=0,len=arrImg.length; i<len; i++){
		strWrap += '<a href="javascript:;"><img src="img/'+ arrImg[i] +'" /></a>'
		strDot += '<li><span><i></i></span></li>';
	}
	wrap.innerHTML += strWrap;
	dot.innerHTML += strDot;

	//获取新生成的元素
	//缩略图
	var dot = document.querySelectorAll('.dot li');
	var dotSml = document.querySelectorAll('.dot li span');
	//图片
	var img = document.querySelectorAll('.wrap a');

	var timer = setInterval(nextImg,2000);

	//上一个
	var last = 0;

	//c初始化
	act();
	//设置事件
	for(var i=0; i<len; i++){
		//为每个dot添加索引值Index
		dot[i].index = i;
		dot[i].onOff = true;
		//为每个dot装入相应缩略图
		dotSml[i].style.background = 'rgba(0,0,0,.5) url("img/'+ arrImg[i] +'") no-repeat 0 0/100% 100% content-box padding-box';
		//鼠标移入事件
		dot[i].onmouseover = function (){
			//设置移入事件
			dotSml[this.index].className = 'active';
		}
		//鼠标移出事件
		dot[i].onmouseout = function (){
			//移出清空
			dotSml[this.index].className = '';
		}
		//点击事件
		dot[i].onclick = function (){
			clearInterval(timer);
			timer = setInterval(nextImg,2000);
			num = this.index;
			//清除
			noAct();
			//设置事件
			act();
			dotSml[num].className = '';
			console.log(num);
		}
	}

	//page切换
	//下一张
	prev.onclick = function(){
		noAct();
		num--;
		if(num < 0){
			num = arrImg.length-1;
		}
		act();
		console.log(num);
	}
	next.onclick = nextImg;
	function nextImg(){
		noAct();
		num++;
		if(num > arrImg.length-1){
			num = 0;
		}	
		act();
		console.log(num);
	}
	//自动切换
	
	wrap.onmouseover = prev.onmouseover = next.onmouseover = function(){
		clearInterval(timer);
	}
	wrap.onmouseout = prev.onmouseout = next.onmouseout = function(){
		timer = setInterval(nextImg,2000);
	}
	//act
	function act(){
		img[num].className = 'active';
		dot[num].className = 'active';
	}
	//no act
	function noAct(){
		for(var i=0; i<len; i++){
			img[i].className = '';
			dot[i].className = '';
		}	
	}
}