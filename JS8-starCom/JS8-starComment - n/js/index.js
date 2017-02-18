window.onload = function (){
	(function (d){
		//获取元素
		var rate = d.querySelector('.rate');
		var stars = d.querySelectorAll('.star span');
		//评级文字内容
		var arrRate = ['极差', '较差', '一般', '较好~', '极好！'];
		var len = stars.length;
		var n = -1, colors = null;

		for(var i=0; i<len; i++){
			//自定义索引值
			stars[i].index = i;		
			//移入
			stars[i].onmouseover = function (){
				//清空所有星星的实心
				empty();
				//使当前星星及之前的星星变成实心
				append(this.index);
				//评级出现
				rate.style.opacity = '1';
			}
			//移出
			stars[i].onmouseout = function (){
				//清空所有星星的实心
				empty();
				if(n == -1){
					//评级消失（未点击时消失）
					rate.style.opacity = '';
				}else{
					append(n);
				}
			}
			//点击
			stars[i].onclick = function (){
				n = this.index;
			}
		}

		//清空
		function empty(){
			for(var i=0; i<len; i++){
				stars[i].innerHTML = '☆';
				stars[i].style.color = '';
			}
		}
		//设置星星
		function append(len_){
			for(var i=0; i<=len_; i++){
				stars[i].innerHTML = '★';
				if(len_<=1){
					colors = 'pink';
				}else{
					colors = '#e04b67';
				}
				stars[i].style.color = colors;
			}
			rate.innerHTML = arrRate[len_];
		}
	})(document)
}