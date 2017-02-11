window.onload = function (){
	// 获取元素--------------------------------------------------------
	// ipad
	var iBtn = document.querySelector('.i_btn');
	var main = document.querySelector('.main');
	// 按钮
	var btnCir = document.querySelector('.btn_cir');
	var btnOrd = document.querySelector('.btn_order');
	// 按钮信息
	var btnInfo = document.querySelector('.btn_info');
	// 图片切换按钮
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	// 图片
	var img = document.getElementById('imgWrap');
	// 图片描述
	var num = document.querySelector('.num');
	var tag = document.querySelector('.tag');
	// mask
	var mask = document.querySelector('.mask');
	var mskTag = document.querySelector('.msk_tag');
	var confirm = document.querySelector('.confirm');
	// 数组
	var arrImg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
	var imgInfo = ['初音未来~', 'ayiix~', '啦啦啦~', '此绘彼卷~', '三笠！~', '嘛~~~~' ];
	// num
	var n = 0;
	// 开关
	var flag = true;
	var onOff = true;
	
	// 初始化-------------------------------------------------
	cir();
	change();
	confirm.onclick = maskOut;
	btnCir.onclick = cir;
	btnOrd.onclick = ord;
	next.onclick = nextClick;
	prev.onclick = prevClick;

	// 遮罩层状态-------------------------------------------------
	// mask out
	function maskOut(){
		mask.style.transform = '';
		onOff = true;
	}
	// mask act
	function maskAct(){
		mask.style.transform = 'translate(-50%, -50%) scale(1)';
		onOff = false;
	}

	// 切换方式----------------------------------------------------
	// 循环切换
	function cir(){
		if(onOff){
			//开关状态 cir
			flag = true;
			//改变显示样式
			btnInfo.innerHTML = '图片可以从最后一张跳转到第一张循环切换';
			cirAct();
		}
	}
	// 顺序切换
	function ord(){
		if(onOff){
			//开关状态 ord
			flag = false;
			//改变显示样式
			btnInfo.innerHTML = '图片只能到最后一张或只能到第一张按顺序切换';
			ordAct();
		}
	}

	// click------------------------------------------------------
	// next
	function nextClick(){	
		if(onOff){
			n++;
			//当图片到最后一张时
			if(n > arrImg.length-1){
				//开关状态
				if(flag){
					n = 0;
				}else{
					//遮罩层出现
					maskAct();
					//遮罩层提示语
					mskTag.innerHTML = '已经是最后一张啦！~！';
					n = n - 1;
				}
			}
			change();
		}
	}
	// prev
	
	function prevClick(){
		if(onOff){
			n--;
			//当图片到第一张时
			if(n < 0){
				//开关状态
				if(flag){
					n = arrImg.length - 1;
				}else{
					//遮罩层出现
					maskAct();
					//遮罩层提示语
					mskTag.innerHTML = '已经到第一张啦！~！';
					n = n + 1;
				}
			}
			change();
		}
	}

	//change ----------------------------------------------
	function change(){
		//图片路径
		img.src = 'img/' + arrImg[n];
		//图片编号
		num.innerHTML = (n + 1) + '/' + arrImg.length;
		//图片描述
		tag.innerHTML = imgInfo[n];
	}
	//按钮状态-------------------------------------
	function cirAct(){	
		btnCir.className += ' btn_act';
		btnOrd.className -= ' btn_act';
	};
	function ordAct(){
		btnOrd.className += ' btn_act';
		btnCir.className -= ' btn_act';
	}
	//home事件---------------------------------------
	var turn = true;
	iBtn.onclick = function (){	
		if(turn){
			main.style.transform = 'scale(0)';
			turn = false;
		}else{
			main.style.transform = 'scale(1)';
			turn = true;
		}
		
	}
}