window.onload = function (){
	//获取元素
	var star = document.querySelectorAll('.star span');
	var rate = document.querySelector('.comment .rate');

	//评级数组
	var arrRate = ['极差','一般','不错','推荐','力推'];

	//颜色、class名称
	var colors;
	var names;
	//上一个
	var last = 0;
	//一只开关
	var onOff = true;

	for(var i=0; i<star.length; i++){
		//为每个星星定义一个index属性
		star[i].index = i;
		//鼠标移入
		star[i].onmouseover = function(){
			//当开关关着的时候（点击完）
			if(!onOff){
				//先清空颜色（为了点击后移入时仍然显示初始颜色）
				for(var j=0; j<star.length; j++){
					star[j].style.color = '';
				}
			}
			//rate 显示（显示文字、显示状态）
			rate.innerHTML = arrRate[this.index];
			rate.style.opacity = '1';
			//判断星级颜色
			for(var j=0; j<=this.index; j++){
				if(this.index<=1){
					names = 'pink';
				}else{
					names = 'great';
				}
				star[j].className = names;
			}
			
		}
		//鼠标移出
		star[i].onmouseout = function(){
			//清空全部
			for(var j=0; j<star.length; j++){
				star[j].className = '';
			}
			//rate 消失
			if(onOff){
				rate.style.opacity = '';
			}else{
				//重置为点击时的文字
				rate.innerHTML = arrRate[last];
				//重置为点击时的星星显示状态
				for(var y=0; y<=last; y++){
					if(last<=1){
						colors = 'pink';
					}else{
						colors = '#e04b67';
					}
					star[y].style.color = colors;
				}
			}
		}
		//鼠标点击
		star[i].onclick = function (){
			//点击前清空上一次点击的星星显示状态
			for(j=0; j<star.length; j++){
				star[j].style.color = '';
			}
			//判断点击后星级显示状态
			for(var j=0; j<=this.index; j++){
				if(this.index<=1){
					colors = 'pink';
				}else{
					colors = '#e04b67';
				}
				star[j].style.color = colors;
			}
			//关掉开关（保留点击状态）
			onOff = false;
			//将当前的 index值保留（作为上一次状态）
			last = this.index;
		}

	}
}