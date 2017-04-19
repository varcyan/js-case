$(function (){
	// 获取元素
	var commit = $('.commit a');
	var msg = $('.msg');
	var text = $('.text');
	// imgs
	var imgsArr = ['1.png', '2.png', '3.png', '4.png', '5.png'];

	// 点击留言
	commit.click(function (){
		if (text.val().trim() !== '' ){
			// 生成结构
			var img = $('<img>');
			var a = $('<a>');
			var span = $('<span>');
			var li = $('<li />');
			var i = $('<i>');
			i.html('del');
			img.attr('src', 'img/' + imgsArr[parseInt(Math.random()*imgsArr.length)]);
			span.html(text.val());
			img.appendTo(a);
			a.appendTo(li);
			span.appendTo(li);
			i.appendTo(li);
			li.prependTo(msg);
			// 清空输入框内容并聚焦
   			text.val('');
   			text.focus();
		} else {
			alert('请输入内容');
		}
	})
	// 删除留言
	msg.click(function (e){
		if (e.target.nodeName.toUpperCase() === 'I'){
			$(e.target.parentNode).remove();
		}
	})
})