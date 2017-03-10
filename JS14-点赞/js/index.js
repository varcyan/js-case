window.onload = function (){
	//获取元素
	var list = document.querySelectorAll('.list li');
	var a = document.querySelector('.list');

	var arr = [];

	//为每一组li添加相同的功能
	for(var i=0,len=list.length; i<len; i++){
		set(i);
	}
	//单组li的功能
	function set(i){
		var btn = list[i].querySelector('.list .opt');
		var heart = list[i].querySelector('.list li i');
		var text = list[i].querySelector('.list a span');

		//鼠标点击改变数字++
		var onOff = true;
		var num = 1, str = '+';
		text.innerHTML = str + num;	//初始化
		btn.onclick = function (){
			if(onOff){
				onOff = false;
				num++;
				text.innerHTML = str + num;
				mTween(heart,{
					'top': -20,
					'opacity': 1
				},100,'linear',function(){
					mTween(heart,{
						'top': -40,
						'opacity': 0
					},100,'linear',function(){
						heart.style['top'] = 0;
						heart.style['opacity'] = 0;
						onOff = true;
					})
				});
			}
			//把最新的num添加到数组arr
			arr[i] = num;
			console.log(arr);
		}
		arr[i] = num;	//把默认的

		//鼠标移入移出改变背景图定位
		btn.onmouseover = function (){
			this.style['background-position'] = '-137px 0';
		}
		btn.onmouseout = function (){
			this.style['background-position'] = '';
		}

	}


}