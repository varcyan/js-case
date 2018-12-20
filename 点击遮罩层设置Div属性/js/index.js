//声明变量
var cover = document.getElementById('cover');
var btn = document.getElementById('btn');
var reset = document.getElementById('reset');
var box = document.getElementById('myDiv');
var cancel = document.getElementById('cancel');
var confirm = document.getElementById('confirm');
var color = document.getElementsByClassName('color');
var width = document.getElementsByClassName('width');
var height = document.getElementsByClassName('height');
var radius = document.getElementById('radius');
var minus = document.getElementById('minus');
var add = document.getElementById('add');
var myColor = document.getElementById('myColor');
//遮罩层出现
function coverVisible(){
	cover.style.display = 'block';
}
btn.onclick = coverVisible;

//遮罩层隐藏
function coverHidden(){
	cover.style.display = 'none';
}
confirm.onclick = coverHidden;

//获得当前色块的颜色(通过行内样式获得)
function colorHere(){
	box.style.backgroundColor = this.style.backgroundColor;
}
for(var i=0; i<color.length; i++){
	color[i].onclick = colorHere;
}

//获得当前宽度
function widthHere(){
	box.style.width = this.innerHTML + 'px';
}
for(var i=0; i<width.length; i++){
	width[i].onclick = widthHere;
}
//获得当前高度
function heightHere(){
	box.style.height = this.innerHTML + 'px';
}
for(var i=0; i<height.length; i++){
	height[i].onclick = heightHere;
}

//重置
function origin(){
	box.style.width = '100px';
	box.style.height = '100px';
	box.style.background = '#eee';
	cover.style.display = 'none';
	box.style.borderRadius = '0px';
}
cancel.onclick = origin;
reset.onclick = origin;

//开关变换角样式
var onOff = true;
radius.onclick = function (){
	if(onOff){
		box.style.borderRadius = '8%';
		onOff = false;
	}else{
		box.style.borderRadius = '0px';
		onOff = true;
	}
}

//自定义颜色
myColor.onchange = function(){
	box.style.background = myColor.value;
}

function nono(){
	console.log('目前不可用~o(︶︿︶)o');
}
minus.onclick = nono;
add.onclick = nono;




