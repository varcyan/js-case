var wrap = document.getElementsByClassName('wrap');
var box = document.getElementsByClassName('box');

for(var i=0; i<wrap.length; i++){
	wrap[i].index = i;
	wrap[i].onmouseover = function(){
		box[this.index].style.display = 'block';
	}
	wrap[i].onmouseout = function(){
		box[this.index].style.display = 'none';
	}
}
