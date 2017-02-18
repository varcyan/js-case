window.onload = function (){
	//获取元素
	var li = document.querySelectorAll('.list li');
	var sel = document.querySelectorAll('.list .sel');
	var all = document.querySelector('.opt .all');
	var allSel = document.querySelector('.all .sel');
	
	//列表子项目数量
	var len = li.length;
	//计算被选中的li
	var num = 0;

	//为全选设定一个开关
	all.onOff = true;
	//list
	for(var i=0; i<len; i++){
		//设置自定义属性
		li[i].onOff = true;
		li[i].index = i;

		//移入事件
		li[i].onmouseover = function (){
			this.className = 'active';
		}
		//移出事件
		li[i].onmouseout = function (){
			//未选中的li可以执行
			if(this.onOff){	
				this.className = '';
			}
		}
		//点击事件
		li[i].onclick = function (){
			//选中与取消
			if(this.onOff){
				sel[this.index].innerHTML = '√';
				this.className = 'active';
				num++;
			}else{
				sel[this.index].innerHTML = '';
				this.className = '';
				num--;
			}
			this.onOff = !this.onOff;
			//console.log(num);
			//已选中的项目 全选与非全选状态
			if(num == len){
				allSel.innerHTML = '√';
				all.onOff = false;
			}else{
				allSel.innerHTML = '';
				all.onOff = true;
			}
		}
	}
	//全选
	//全选的点击事件
	all.onclick = function(){
		if(this.onOff){
			allSel.innerHTML = '√';
			for(var i=0; i<len; i++){
				sel[i].innerHTML = '√';
				li[i].className = 'active';
				li[i].onOff = false;
			}
			num = len;
		}else{
			allSel.innerHTML = '';
			for(var i=0; i<len; i++){
				sel[i].innerHTML = '';
				li[i].className = '';
				li[i].onOff = true;
			}
			num = 0;
		}
		this.onOff = !this.onOff;
	}
}