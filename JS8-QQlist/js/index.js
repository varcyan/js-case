window.onload = function (){
	//获取元素
	var group = document.querySelectorAll('.wrap .group');
	var list = document.querySelectorAll('.wrap .list');
	var item = document.querySelectorAll('.list li');
	var row = document.querySelectorAll('.headn i');
	var head = document.querySelectorAll('.wrap .headn');

	//上一个组, 上一个item
	var prev = 0, prevItem = 0;

	//head 事件
	for(var i=0; i<group.length; i++){
		//给每个group添加一个index
		head[i].index = i;
		// //给每个group添加一个开关
		head[i].onOff = true;
		
		//group鼠标点击事件
		head[i].onclick = function (){
			if(this.onOff){
				//清空上一个
				// head[prev].className = 'headn';
				list[prev].style.display = '';
				row[prev].className = '';
				head[prev].onOff = true;
				//点击后执行的事情
				// this.className += ' act';
				list[this.index].style.display = 'block';
				row[this.index].className = 'row_act';
			}else{
				//点击后执行的事情
				// head[prev].className = 'headn';
				list[this.index].style.display = '';
				row[this.index].className = '';
			}
			this.onOff = !this.onOff;
			//把当前点击的设为上一个
			prev = this.index;
		}
	}
	//item 事件
	for(var i=0; i<item.length; i++){
		//为每个item设置index
		item[i].index = i;
		//为每个item设置onOff
		item[i].onOff = true;

		//每个item的鼠标移入事件
		item[i].onmouseover = function (){
			//当开关开着才可以执行
			if(this.onOff){
				this.className = 'hover';
			}
		}
		//每个item的鼠标移出事件
		item[i].onmouseout = function (){
			//当开关开着才可以执行
			if(this.onOff){
				this.className = '';
			}
		}
		//给每个item添加点击事件
		item[i].onclick = function(){
			//清空上一个item的点击状态
			item[prevItem].onOff = true;
			item[prevItem].className = '';
			//设置点击的item
			//关掉开关（不执行hover效果）
			this.onOff = false;
			this.className = 'active';
			//将目前点击的item设置为上一个
			prevItem = this.index;
		}
	}
}