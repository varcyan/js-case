window.onload = function (){
	//获取元素
	var list = document.querySelectorAll('.calList li');
	var aAll = document.querySelectorAll('.allBox .allNum');
	//单价数组
	var arrPrice = [12.5, 10, 8.5, 8, 14.5];
	//数据汇总
	var arrAll = [];

	//为每一行li的元素设定相同功能
	for(var i=0,len=list.length; i<len; i++){
		getLi(i);
	}
	//获取单行li中的元素
	function getLi(i){
		var optNum = list[i].querySelectorAll('.opt span');	//加减
		var inp = list[i].querySelector('.opt input');	//输入框
		var price = list[i].querySelectorAll('.calList .price span');	//价格框(单价 小计)
		//写入相应单价及小计
		price[0].innerHTML = arrPrice[i];
		price[1].innerHTML = 0;
		//减
		optNum[0].onclick = function (){
			inp.value = arrAll[i].count = inp.value*1 ? --inp.value : 0;
			change();
		}
		//加
		optNum[1].onclick = function (){
			inp.value = arrAll[i].count = ++inp.value;
			change();
		}
		//点击'+''-'时发生的事件
		function change(){
			price[1].innerHTML = arrAll[i].add = inp.value*arrPrice[i];	//小计	
			allNum();	//汇总
		}
		//写入数据
		arrAll[i] = {
			count: inp.value*1,	//数目
			one: arrPrice[i]*1,	//单价
			add: inp.value*arrPrice[i]	//小计
		};
	}
	//总计
	function allNum(){
		var arrN = [0, 0, 0];	//用于总计初始值
		for(var i=0; i<arrAll.length; i++){
			arrN[0] += arrAll[i].count;	//数目合计
			arrN[1] += arrAll[i].add;	//总价合计
			if(arrAll[i].count>0 && arrAll[i].one > arrN[2]){	//最高单价
				arrN[2] = arrAll[i].one;
			}
		}
		//写入
		for(var i=0,len=arrN.length; i<len; i++){
			aAll[i].innerHTML = arrN[i];
		}
	}	
	
	/*
	//已选项中单价最高的
	var arrMost = [];
	if(texts[i].value>0){
		arrMost[arrMost.length] = arrPrice[i];  //把数目不为0的单价添加至数组
		for(var j=0; j<arrMost.length; j++){
			if(arrMost[j] > n){
				n = arrMost[j];
			}
		}
	}
	*/

}