window.onload = function (){
	//获取元素
	var li = document.querySelectorAll('.list li');
	var sel = document.querySelectorAll('.list .sel');
	var all = document.querySelector('.opt .all');
	var allSel = document.querySelector('.all .sel');

	//定义变量
	var len = li.length;
	var onOff = true,
		num = 0;
	for(var i=0; i<len; i++){
		//设置自定义属性
		li[i].onOff = true;
		li[i].index = i;
		//隔行换色
		li[i].bgColor = li[i].className = i%2 ? 'one_by' : '';

		//移入事件
		li[i].onmouseover = function (){
			this.className = this.onOff? 'hover' : 'active';
		}
		//移出事件
		li[i].onmouseout = function (){
			this.className = this.onOff? this.bgColor : 'active';
		}
		//点击事件
		li[i].onclick = function (){
			this.className = this.onOff? 'active' : 'hover';
			sel[this.index].innerHTML = this.onOff? '√' : '';
			this.onOff = !this.onOff;
			num = this.onOff? --num : ++num;
			allSel.innerHTML = num==6? '√' : '';
			onOff = num==6? false : true;
		}
	}
	//全选事件
	all.onclick = function (){
		allSel.innerHTML = onOff? '√' : '';
		for(var i=0; i<len; i++){
			li[i].className = onOff? 'active' : li[i].bgColor;
			sel[i].innerHTML = onOff? '√' : '';
			li[i].onOff = onOff? false : true;
		}
		onOff = !onOff;
	}
}