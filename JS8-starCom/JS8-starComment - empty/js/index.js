window.onload = function (){
	(function (d){
		//获取元素
		var rate = d.querySelector('.rate');
		var stars = d.querySelectorAll('.star span');
		//评级文字内容
		var arrRate = ['极差', '较差', '一般', '较好~', '极好！'];
		var onOff = true;
		var last = 0;
		for(var i=0,len=stars.length; i<len; i++){
			//为每一颗星星设置索引值
			stars[i].index = i;
			//移入事件
			stars[i].onmouseover = function (){
				//清空全部（目的是为了清空除选中部分）
				empty();
				//移入后使当前移入星星及之前的星星都变成实心
				append(this.index);
				//评级出现 及 文字
				rate.style.opacity = '1';
				rate.innerHTML = arrRate[this.index];
			}

			//移出事件
			stars[i].onmouseout = function (){
				//鼠标移出清空所有
				empty();
				//评级消失
				if(onOff){
					rate.style.opacity = '';
				}else{
					append(last);
					rate.innerHTML = arrRate[last];
				}
			}
			//点击事件
			stars[i].onclick = function (){
				onOff = false;
				last = this.index;
			}

		}
		//清空
		function empty(){
			for(var i=0; i<len; i++){
				stars[i].innerHTML = '☆';
				stars[i].style.color = '';
			}
		}
		//生成
		function append(len_){
			for(var i=0; i<=len_; i++){
				stars[i].innerHTML = '★';
				//颜色控制
				if(len_<2){
					stars[i].style.color = 'rgba(255,0,0,.3)';
				}else{
					stars[i].style.color = '#e04b67';
				}
			}
		}
	})(document)
}