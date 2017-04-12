window.onload = function (){
	// 获取元素
	var btn = document.querySelector('.btn');
	var box = document.querySelectorAll('.box');

	var timer;

	btn.onclick = function (){
		if (!box[0].value) {			//输入框不能为空
			alert('请输入内容');
			return;
		}
		if (timer) return;	 			//如果正在运行，则点击无效
		box[1].innerHTML = '';			//重置内容
		var arr = Array.from(box[0].value);
		clearInterval(timer);			//开定时器前清除定时器
		timer = setInterval(function (){
			box[1].innerHTML += box[0].value[0];
			arr.shift()
			// 重置输入框的内容
			box[0].value = '';
			for(var i=0; i<arr.length; i++){
				box[0].value += arr[i];
			}
			console.log(box[0].value);
			// 当输入框空，结束
			if (box[0].value == '') {
				clearInterval(timer);
				timer = null;
			}
		}, 100)
	}
}