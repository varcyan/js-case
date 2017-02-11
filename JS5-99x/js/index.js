window.onload = function (){
	//获取元素
	var wrap = document.getElementById('wrap');
	var wrap1 = document.getElementById('wrap1');
	console.log(wrap);
	for(var i=0; i<9; i++){
		for(var j=0; j<=i; j++){
			wrap.innerHTML += '<span>' + (j+1) + '*' + (i+1) + '=' + ((i+1)*(j+1)) + '</span>';
		}
		wrap.innerHTML += '<br />';
	}
}