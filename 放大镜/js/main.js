// 获取元素
var cover = document.querySelector('.cover');	
var wrap = document.querySelector('.wrap');
var show = document.querySelector('.show');
// 比例
var s = parseInt(getComputedStyle(show)['background-size'])/parseInt(getComputedStyle(wrap)['background-size']);

// 移入图片使方块出现、大图出现
wrap.onmouseover = function (){
	cover.style.display = 'block';
	show.style.display = 'block';
}
console.log(getComputedStyle(wrap)['background-size']);
// 移出使小方块、大图消失
wrap.onmouseout = function (){
	cover.style.display = '';
	show.style.display = '';
}
// 当鼠标在图片上移动时
wrap.onmousemove = function (e){
	// 计算left/top值
	var l = e.clientX - this.offsetLeft - cover.offsetWidth/2;
	var t = e.clientY - this.offsetTop - cover.offsetHeight/2;
	// 使方块不出wrap的范围
	if (l <= 0) l = 0;
	if (l >= this.offsetWidth - cover.offsetWidth) {
		l = this.offsetWidth - cover.offsetWidth;
	}
	if (t <= 0) t = 0;
	if (t >= this.offsetHeight - cover.offsetHeight) {
		t = this.offsetHeight - cover.offsetHeight;
	}
	cover.style.left = l + 'px';
	cover.style.top = t + 'px';
	// 获取比例
	console.log(s);
	show.style['background-position-x'] = - l*s + 'px';
	show.style['background-position-y'] = - t*s + 'px';
}