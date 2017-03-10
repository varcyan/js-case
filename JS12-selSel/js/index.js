window.onload = function (){
	var data = [
      {
        'catalog': 'aaa1',
        'cata-tag': ['tag1', 'tag2', 'tag3', 'tag4'],
        'imgs': ['1.jpg','2.jpg','3.jpg','4.jpeg']
      },
      {
        'catalog': 'bbb2',
        'cata-tag': ['tag1', 'tag2', 'tag3'],
        'imgs': ['5.jpg','6.jpg','7.jpg']
      },
      {
        'catalog': 'ccc3',
        'cata-tag': ['tag1', 'tag2'],
        'imgs': ['8.jpg','9.jpg']
      },
      {
        'catalog': 'ddd4',
        'cata-tag': ['tag1', 'tag2', 'tag3'],
        'imgs': ['10.jpg','11.jpg','12.jpg']
      },
      {
        'catalog': 'eee5',
        'cata-tag': ['tag1', 'tag2'],
        'imgs': ['13.jpeg','14.jpeg']
      }
    ];
    //获取元素
    var wrap = document.querySelector('section');
    //定义空字符串
    var strTag = strCon = '';

    var arrStr = [];
    var str = '';
    //Tag
    arrStr[0] = '<ul class="catalog">';
    arrStr[1] = arrStr[3] = '';	//清除默认undefined(使用+=会出现)
    for(var i=0, len=data.length; i<len; i++){
    	arrStr[1] += '<li>' + data[i].catalog + '</li>';
    	arrStr[3] += '<div class="item"></div>'
    }
    arrStr[2] = '</ul><div class="content">';
    arrStr[4] = '</div>'
    for(var i=0,len=arrStr.length; i<len; i++){
    	str += arrStr[i];
    }
    wrap.innerHTML = str;
   
    var log = document.querySelectorAll('.catalog li');
    var item = document.querySelectorAll('.content .item');
    var str1 = '<div class="imgs">';
    	strImg = ['','','','',''];
    	strTag = ['','','','',''];
    	str2 = '</div><ul class="tags">'
    	str3 = '</ul>';
    var prev = 0;
    //初始化
    log[0].style.background = '#fff';
    item[0].style.opacity = 1;
    item[0].style['z-index'] = 1;
    for(var i=0; i<data.length; i++){
    	//为每个log设置索引值
    	log[i].index = i;
    	//写入内容 item tags
    	for(var j=0, len=data[i].imgs.length; j<len; j++){
    		strImg[i] += '<a href="javascript:;"><img src="img/'+ data[i].imgs[j] +'"/></a>'
    		strTag[i] += '<li>' + data[i]['cata-tag'][j] + '</li>'
    	}
    	item[i].innerHTML = str1 + strImg[i] + str2 + strTag[i] + str3;
    	setItem(i);
    	//设置每个log的事件
    	log[i].onclick = function (){
    		//清空上一个
    		log[prev].style.background = '';
    		item[prev].style.opacity = ''
    		item[prev].style['z-index'] = '';
    		//设置当前事件
    		this.style.background = '#fff';
    		item[this.index].style.opacity = 1;
    		item[this.index].style['z-index'] = 1;
    		//把当前设置为上一个
    		prev = this.index;
    	}
    }
    function setItem(n){
    	var tags = item[n].querySelectorAll('.tags li');
    	var imgs = item[n].querySelectorAll('.imgs a');
    	var prev = 0;
    	//初始化
    	tags[0].style.background = 'rgba(0,0,0,.8)';
    	imgs[0].style.opacity = 1;
    	for(var i=0; i<tags.length; i++){
    		tags[i].index = i;
    		tags[i].onclick = function (){
    			//清空上一个
    			tags[prev].style.background = '';
    			imgs[prev].style.opacity = '';
    			//设置当前事件
    			this.style.background = 'rgba(0,0,0,.8)';
    			imgs[this.index].style.opacity = 1;
    			//设置上一个
    			prev = this.index;
    		}
    	}
    }

}