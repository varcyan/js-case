var prev = document.getElementById('prev');
    next = document.getElementById('next');

var wrap = document.getElementById('wrap');
var imgs = document.getElementsByClassName('sImg');

var text = document.getElementById('text');

var oUl = document.getElementsByTagName('ul')[0];
	oLi = oUl.getElementsByTagName('li');

//wrap的宽度设置
wrap.style.width = imgs.length*500 + 'px';

//初始化
oLi[0].style.backgroundColor = '#f60';


var num = 0;
next.onclick = function(){
	oLi[num].style.backgroundColor = '#888';
	num++;
	if(num == imgs.length){
		num = 0;
	}
	doGet();
	
}
prev.onclick = function(){
	oLi[num].style.backgroundColor = '#888';
	num--;
	if(num < 0){
		num = imgs.length-1;
	}
	doGet();
}

function doGet(){
	wrap.style.marginLeft = -(num*500) + 'px';
	text.innerHTML = num+1;
	oLi[num].style.backgroundColor = '#f60';
}

for(var i=0; i<imgs.length; i++){
	oLi[i].index = i;
	oLi[i].onclick = function(){
		oLi[num].style.backgroundColor = '#888';
		
		this.style.backgroundColor = '#f60';
		
		num = this.index;
		
		doGet();
		
	}
}




/*



index 索引值

function play(){
    for(var i=0;i<list.length;i++){
        if(i==index){
            list[i].style.display="block";
        }else{
            list[i].style.display="none";
        }
    }
}


var n = 0;
oImg[0].style.display = 'block';

oRight.onclick = function(){
	oImg[n].style.display = 'none';
	n++; //n = n + 1;
	if ( n >= oImg.length )
	{
		n = 0;
	};
	oImg[n].style.display = 'block';
};

*/