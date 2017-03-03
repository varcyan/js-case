window.onload = function (){
	var types = document.querySelectorAll('.type dl');	// 四个dl
	var choose = document.querySelector('.mark');		// 标记wrap
	var arr = [];

	// 为每一行添加一样的功能
	for (var i=0; i<types.length; i++){	
		oneDl(i);
	}

	// 单行的功能
	function oneDl(tag){	
		var opts = types[tag].children;	//每一行的a
		var prev = 0;
		for (var i=0; i<opts.length; i++) {
			opts[i].index = i;
			opts[i].tag = tag;
			// 每个opt点击事件
			opts[i].onclick = function () {
				choose.innerHTML = '';
				// 点击opt样式
				opts[prev].classList.remove('active');	//去掉上一个的class
				this.classList.add('active');			//设置当前点击的class
				prev = this.index;						//把当前這个设置为上一个
				console.log(this.tag);
				// 生成 去重 排序
				delRepeat(creat(this), this).sort(function (a,b){
					return a.tag - b.tag;
				})
				// 添加至choose
				addHTML();
			}
		}
	}
	// 添加至HTML
	function addHTML() {
		arr.forEach(function (item){
			choose.appendChild(item);
		})
	}
	// 生成
	function creat(this_){
		var mark = document.createElement('mark');	//生成需要的元素
		var a = document.createElement('a');
		a.href = "javascript:;"
		a.innerHTML = 'x';
		mark.innerHTML = this_.innerHTML;
		mark.appendChild(a);
		mark.tag = this_.tag;
		a.onclick = function (){
			this_.classList.remove('active');	//去除下面列表中的选择
			for (var i=0; i<arr.length; i++) {	//去除数组中的這个值
				if (arr[i].tag == this_.tag) {
					arr.splice(i, 1);
				}
			}
			choose.innerHTML = '';
			addHTML();							//将新数组重新填入HTML
		}
		return mark;
	}
	// 数组去重（同一排的只放一个）
	function delRepeat(mark, this_){
		if (arr.length) {
			for (var j=0; j<arr.length; j++) {
				if (arr[j].tag == this_.tag) {
					console.log(arr[j]);
					arr[j] = mark;
					return arr;		
				}
			}
		}
		arr.push(mark);		//把生成好的放入数组
		return arr;
	}
}