window.onload = function(){
	var wrap = document.getElementById('wrap');
	var box = document.getElementsByTagName('div');
	var num = 135;
	var str = '';
  	
	var w = 100, h = 80;
	wrap.style.width = 15*(w+2) + 'px';
	for(var i=0; i<num; i++){
		str += '<div style="left:'+ i%15*(w+2) +'px; top:'+ (i/15+'')[0]*(h+2) +'px; background-position: '+ (-i%15*(w+2)) +'px '+ (-(i/15+'')[0]*(h+2)) +'px; width: '+ w +'px; height: '+ h +'px;"></div>';
	}
	wrap.innerHTML = str;
	for(var i=0; i<num; i++){
		box[i].onmouseover = function(){
			this.className = 'active'	
		}
		box[i].onmouseout = function(){
			this.className = '';
			this.style.opacity = 1;
		}
	}
}