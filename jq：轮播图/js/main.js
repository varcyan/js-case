$(function (){
	// 获取元素
	var imgBox = $('.imgs');	//图片容器
	var dots = $('.dots li');

	var next = $('.next'); 	//下一张
	var prev = $('.prev'); 	//上一张

	// 克隆最后一张到第一张
	$('.imgs a:last').clone().prependTo(imgBox);
	// imgs
	var imgs = imgBox.children();
	var len = imgs.length;
	
	// 获取一张图片的宽度（用于计算容器的宽度 以及 移动的单位）
	var w = $('.imgs a:first').width();		
	// 设置一个 n 作为基本数
	var n = 1;
	var now = null;	//用于存取当前的这一张

	// 设置图片容器的宽度
	imgBox.width(len * w);

	// 初始化
	imgBox.css('left', -n*w);
	dots.removeClass('active').eq(n-1).addClass('active');
	now = imgs.eq(n);

	// 下一张
	next.on('click', function(){
		if (imgBox.is(':animated')) return;
		reset();	// 重置状态
		n++;
		// 如果到达最后一张 瞬间拉到'第一张位置上的'最后一张 再继续向后运动
		if (n === len) {
			n = 0;
			imgBox.css('left', -n*w);
			n++;
		}
		set();	//设置
	})
	// 上一张
	prev.on('click', function (){
		if (imgBox.is(':animated')) return;
		reset(); // 重置状态
		n--;
		if (n === -1) {
			n = len - 1;
			imgBox.css('left', -n*w);
			n--;
		}
		set();	// 设置
	})
	// dots 点击切换位置
	dots.on('mousemove', function (){
		// 希望出现的dot索引-----------------------
		var thisIndex = $(this).index();
		// 如果希望出现的那张就是当前显示的這张 则返回
		if (thisIndex === n - 1) return;
		if (imgBox.is(':animated')) return; 
		// 隐藏 ------------------------------------
		imgs.hide();				 //隐藏所有
		// 显示
		now.show();					 // 当前這张显示
		imgs.eq(thisIndex+1).show(); // 让希望出现的那一张图片显示
		// dots------------------------------------
		dots.removeClass('active').eq($(this).index()).addClass('active');
		// 判断移入方向-----------------------------
		if (thisIndex >= n) {
			imgBox.css('left', 0);
			imgBox.animate({left: -w});
		} else {
			imgBox.css('left', -w);
			imgBox.animate({left: 0});
		}
		// 更新值---------------------------------
		n = thisIndex + 1;	// 更新n的值
		now = imgs.eq(n);	// 改变当前显示这张的指向
	})
	

	// 设置 位置、dot状态 及 now（当前這张） 的指向
	function set(){
		dots.removeClass('active').eq(n-1).addClass('active');
		imgBox.animate({left: -n*w})
		now = imgs.eq(n);
	}
	// 重置
	function reset(){
		imgs.show();
		imgBox.css('left', -n*w);
	}


})