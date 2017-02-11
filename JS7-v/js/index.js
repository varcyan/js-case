window.onload = function (){	
	//获取元素
	var box = document.querySelector('.box');
	var btn = document.querySelector('.btn');
	var text = document.querySelector('.text');
	var arrDir = ['bottom', 'right', 'top', 'left'];
	var str = '';
	var count;
	var n = 50;
	var num = 0;
	
	//事件
	btn.onclick = function (){
		if(text.value == '' && box.innerHTML == ''){
			alert('必须输入一个数值！@');
		}
		if(text.value != ''){
			if(text.value%2 && 0 < text.value && text.value < 25){
				count = text.value;
				console.log(count);
			}else{
				alert('你必须输入一个小于25的正奇数！');
			}
		}
		box.style.cssText = 'width:'+ count*n +'px; height:'+ count*n +'px;';
		str = '';
		for(var i=0; i<count; i++){
			str += '<li class="item" style="'+ arrDir[1-(num%2)+2] +':'+ n*i +'px;'+ arrDir[num] +':'+ ((i<(count/2))?((i+1)%count-1):(count%(i+1)))*50 +'px;">' + (i+1) + '</li>';	
		}
		box.innerHTML = str;	
		num++;
		num = num%arrDir.length;
		text.value = '';
	}
}



//------------------------------------------


/*	
	left bottom
	top right
	left top
	top left
*/
//(count<(count/2))?(i+1)%count-1:count%(i+1)

/*
1 
	2
3
0 1

1
	2
		3
	4
5
0 1 2

1
	2
		3
			4
		5
	6
7
0 1 1 3 2 1 0

1
	2
		3
			4
				5
			6
		7
	8
9
0 1 0 1 4 3 2 1 0





2
	3
		4
			5
		6
	7
8


0
	1
		2
	3
4


*/


// if(num0 < arrDir.length-1){
		// 	// num0 = arrDir.length - 1;
		// 	num0++;
		// }else{
		// 	// num0 = arrDir.length - 2;
		// 	num0--;
		// }
		// if(!(2%(num+1))){
		// 	2%(num+1) = 2%(num+1) + 3;
		// }

/*	0  1  0 0      0 /2   0           (1-(3%(num+1))%2)+2   (0 1 0 3 ( 0 1 0 1	 1010
	1  2  0 1    2       0					1-(num%2)+2	        
	2  3  2 0   1    /2   1    
	3  4  2 1   0         1*/         

/*
	li[0] 0 0  1,
	li[1] 1 1  2,
	li[2] 2 2  3,
	li[3] 1 3  4,
	li[4] 0 4  5,

	li[0] 0 1
	li[1] 1 2
	li[2] 2 3
	li[3] 3 2
	li[4] 4 1


*/