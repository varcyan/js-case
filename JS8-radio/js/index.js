window.onload = function(){
	//声明变量
	var btn = document.querySelectorAll('.sel a');
	var act = document.querySelectorAll('.i_act');

	var prev = btn[0];

	/*for(var i=0; i<btn.length; i++){
		btn[i].index = i;
		btn[i].onclick = function(){
			prev.className = '';
			prevAct.style.display = '';
			this.className = 'btn_act';
			act[this.index].style.display = 'block';
			prev = this;
			prevAct = act[this.index];
		}
	}*/
	btn[0].className = 'btn_act';
	act[0].style.display = 'block';
	
	for(var i=0; i<btn.length; i++){
		btn[i].index = i;
		btn[i].onOff = true;
		btn[i].onclick = function(){
			/*
			// 1.
			if(this.className){
				this.className = '';
				act[this.index].style.display = 'none';
			}else{
				prev.className = '';
				act[prev.index].style.display = 'none';
				this.className = 'btn_act';
				act[this.index].style.display = 'block';
			}
			prev = this;*/

			// 2.
			if(!(this===prev)){
				prev.className = '';
				act[prev.index].style.display = '';
				prev.onOff = true;
			}	
			if(this.onOff){
				/*prev.className = '';
				prevAct.style.display = '';
				prev.onOff = true;*/
				this.className = 'btn_act';
				act[this.index].style.display = 'block';
			}else{
				this.className = '';
				act[this.index].style.display = '';
			}
			this.onOff = !this.onOff;
			prev = this;
		}
	}

}