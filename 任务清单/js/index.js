var wrap = document.getElementById('wrap');
	wrapLi = document.getElementsByTagName('li');
var get = document.getElementById('btn');
	cover = document.getElementById('cover');
	alertNum = document.getElementById('alertNum');
	confirm = document.getElementById('confirm');


//list清单
var listArr = [ '购物车按钮',
				'周末上班for(){}',
				'正方形/三角形/倒三角形/菱形',
				'与电脑进行石头剪刀布游戏',
				'日历',
				'点击遮罩层设置DIV属性',
				'图片轮播',
				'99乘法表',
				'导航(潭州教育-菜单)',
				'判断回文',
				'电子邮件的格式要求',
				'计算器',
				'正则表达式验证整数/验证数字/合法金额/验证邮箱'
			];
//写入html
for(var i=0; i<listArr.length; i++){
	wrap.innerHTML += '<li>' + (i+1) + '.&nbsp;' + listArr[i] + '</li>';
}
//console.log(listArr.length);

//生成随机并显示出来
function getNum(){
	//先将所有Li的外框颜色默认
	for(var i=0; i<wrapLi.length; i++){
		wrapLi[i].style.border = '1px solid #eee';
	}
	var num = parseInt(Math.random()*100)%listArr.length + 1;
	alertNum.innerHTML = num;
	cover.style.display = 'block';
	//选中的Li凸显出来
	wrapLi[num-1].style.border = '1px solid #FF7ABB';
}
get.onclick = getNum;

//遮罩隐藏
function coverHidden(){
	cover.style.display = 'none';
}
/*
//鼠标按下时
function btnMouseDown(){
	this.style.backgroundColor = '#FF7ABB';
	this.style.color = '#ffffff';
}
//鼠标松开后
function btnMouseUp(){
	this.style.backgroundColor = '#fff';
	this.style.color = '#333';
}
*/
//点击确认遮罩层消失
confirm.onclick = coverHidden;
