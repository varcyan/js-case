window.onload = function (){
	//获取元素
	//input
	var text = document.getElementById('text');
	//head
	var hdWrap = document.querySelector('.head_wrap');
	var user = document.querySelector('.user');
	//commit
	var cmt = document.querySelector('.commit');
	//chartBox
	var ctBox = document.querySelector('.chart_wrap');
	//user
	var person;
	//head
	var n;

	//设置开关	
	var onOff = true;
	
	//重置内容 获取焦点
	function fc(){
		text.value = '';
		text.focus();
	}
	
	//头像切换
	hdWrap.onclick = function (){
		if(onOff){
			user.src = 'img/2.png';
			onOff = false;
		}else{
			user.src = 'img/1.png';
			onOff = true;
		}
		fc();	//重置内容 获取焦点
	}
	
	var last1;
	var last2;
	//发送内容
	cmt.onclick = function (){
		//判断输入框是否为空
		if(!text.value){
			alert('请输入内容');
		}else{
			//判断user及head
			if(onOff){
				person = 'chartA';
				n = 1;
			}else{
				person = 'chartB';
				n = 2;
			}
			ctBox.innerHTML = '<li class="chart ' + person + '"><a class="head fl" href="javascript:;"><img src="img/' + n +'.png" /></a><div class="text fl">' + text.value + '<i></i></div></li>' + ctBox.innerHTML;
		}
		fc();

		//当对话为不同user时增加他们之间的间距
		// last1 = document.querySelector('.chart_wrap .chart:first-child');
		// last2 = document.querySelector('.chart_wrap .chart:nth-of-type(2)');
		// if(last1.className != last2.className){
		// 	last1.style['margin-bottom'] = "30px";
		// }
	}

}