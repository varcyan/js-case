window.onload = function (){
	//获取元素
	var commit = document.querySelector('.commit a');	//提交
	var text   = document.querySelector('.text');		//输入框
	var msg    = document.querySelector('.msg');		//留言框ul

	//data
	var imgsArr = ['1.png', '2.png', '3.png', '4.png', '5.png'];
	//事件
	commit.onclick = function (){
		if (!text.value) {				// 输入内容不能为空
			alert('请输入内容');
			return;
		}
		var li = document.createElement('li');			//生成节点
		var a = document.createElement('a');
		var span = document.createElement('span');
		span.innerHTML = text.value;					//写入内容
		var img = document.createElement('img');
		li.appendChild(a);
		li.appendChild(span);
		img.src = `img/${imgsArr[parseInt(Math.random()*imgsArr.length)]}`;	//放入随机图片
		a.appendChild(img);
		msg.insertBefore(li, msg.firstElementChild);	//插入节点	
		text.value = '';								//清空文本框



	}

}