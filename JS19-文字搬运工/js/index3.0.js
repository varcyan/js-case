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
		n = 0;
		box[1].innerHTML = '';			//重置内容
		var arr = Array.from(box[0].value);
		n = box[0].value.length;
		num[1].innerHTML = '/ ' + n;
		clearInterval(timer);			//开定时器前清除定时器
		timer = setInterval(function (){
			box[1].innerHTML += arr.shift();			//右边盒子的内容
			num[0].innerHTML = box[1].innerHTML.length;	//已经移入的数量
			// 重置输入框的内容
			box[0].value = '';
			for(var i=0; i<arr.length; i++){
				box[0].value += arr[i];
			}
			// 当输入框空，结束
			if (box[0].value == '') {
				clearInterval(timer);
				timer = null;
			}
		}, 100)
	}
}