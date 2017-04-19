// 获取元素
var btn = document.querySelector('.btn');
var inp = document.querySelector('#inp');
var msg = document.querySelector('.msg');

// 聚焦
inp.focus();

// 留言
btn.onclick = function (){
	var val = inp.value;
	if (!val) {
		alert('请输入内容');
	} else {
		// 生成内容
		var li_ = document.createElement('li');
		var span_ = document.createElement('span');
		span_.innerHTML = val;
		var a_ = document.createElement('a');
		a_.innerHTML = 'delete';
		a_.href = 'javascript:;';
		a_.classList.add('del');
		li_.appendChild(span_);
		li_.appendChild(a_);
		msg.insertBefore(li_,msg.firstElementChild);
		// 清空输入框并聚焦
		inp.value = '';
		inp.focus();
	}
}
msg.onclick = function (e){
	console.log(e.target);
	if (e.target.classList.contains('del')) {
		msg.removeChild(e.target.parentNode);
	}
}