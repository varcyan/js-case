window.onload = function (){
	//获取元素
	var item = document.querySelectorAll('.item');
	var tips = document.querySelector('.tips');
	console.log(item);
	for(var i=0,len=item.length; i<len; i++){
		fn(item[i]);
	}
	function fn(ele){
		var show = ele.querySelector('.show');
		var inp = ele.querySelector('.inp');
		var inpText = ele.querySelector('.inp .text');
		var showText = ele.querySelector('.show .text');
		var btChange = ele.querySelector('.show .btn_change');
		var save = ele.querySelector('.inp a:nth-of-type(1)');
		var cancel = ele.querySelector('.inp a:nth-of-type(2)');	
		console.log(save);

		//修改
		btChange.onclick = function (){
			change(show,inp,false);
			inpText.value = showText.innerHTML;
			inpText.select();
		}
		//取消
		cancel.onclick = function (){
			change(show,inp,true);
			tips.style.display = '';
		}
		//确定
		var val;
		save.onclick = function (){
			val = inpText.value;
			if(val){
				showText.innerHTML = val;
				change(show,inp,true);
			}else{
				tips.style.display = 'block';
			}
			inpText.value = '';
		}
		inpText.onclick = function (){
			tips.style.display = '';
		}
		//change
		function change(ele1,ele2,flag){
			ele1.style.display = flag ? 'block' : 'none';
			ele2.style.display = flag ? 'none' : 'block';
		}
	}
	

}