window.onload = function (){
	//获取元素
	var wrap = document.querySelector('.wrap');
	var n = 150;
	var str = '';	
	var span;
	var arrColor = ['#888', '#bbb', '#ddd','#ccc', '#f4f4f4',]
	for(var i=0; i<n; i++){
		str += '<span style="left:'+ (i%13 * 60) +'px; top:'+ ((i/1 + '')[0] * 60) +'px; background-color: '+ arrColor[i%arrColor.length] +'">'+ i +'</span>';
	}
	

	wrap.innerHTML = str;

	var wrap = document.querySelector('.wrap')
	var num = 100;
	for(var i=0; i<num; i++){
		wrap.innerHTML += '<span style="left:'+ (i%10 * 60) +'px; top:'+ (i/10+'')[0] * 60 +'px; background-color:'+ arrColor[i%arrColor.length] +';">'+ i +'</span>'
	}
}

// 0 1 2 3 4 5 6 7 8 9
// 10 11 12 13 14
// 21 22 23 24
// 31 32 33 34