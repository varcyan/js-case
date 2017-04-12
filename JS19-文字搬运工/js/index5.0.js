window.onload = function (){
	// 获取元素
	var btn = document.querySelector('.btn');
	var box = document.querySelectorAll('.box');
	var num = document.querySelectorAll('.num');

	var timer;

	btn.onclick = function (){
		if (!box[0].value) {			//输入框不能为空
			alert('请输入内容');
			return;
		}
		if (timer) return;	 			//如果正在运行，则点击无效

		box[1].innerHTML = '';			//重置内容	
		num[0].innerHTML = 0;
		num[1].innerHTML = '/ ' + box[0].value.length;	//总字数
		
		clearInterval(timer);			//开定时器前清除定时器
		timer = setInterval(function (){
			box[1].innerHTML += box[0].value.substr(0,1);
			box[0].value = box[0].value.substr(1);
			num[0].innerHTML = box[1].innerHTML.length;	//已经移入的数量
			// 当输入框空，结束
			if (box[0].value == '') {
				clearInterval(timer);
				timer = null;
			}
		}, 80)
	}
}