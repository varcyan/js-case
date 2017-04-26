;(function ($){
	// 弹框
	class Alert {
		constructor (con){
			this.con = {
				title: '标题',
				content: '内容',
				confirm: '确定',
				cancel: '取消'
			}
			// 合并内容
			console.log(con);
			$.extend(true,this.con,con);
			this.init();
		}
		init (){
			this.box = this._creBox();
			$('body').append(this.box);
			this.close = $('.close');
			// 判断是否自定义位置
			if (this.con.left !== 'undefined' && this.con.top !== 'undefined'){
				this.box.css('left', this.con.left);
				this.box.css('top', this.con.top);
			} else {
				this._pstBox();
			}
			// 绑定事件执行
			this._event();
			// 判断是否自定义宽度
			if (this.con.width !== 'undefined') {
				this.box.width(this.con.width);
			}
			if (this.con.height !== 'undefined') {
				this.box.height(this.con.height);
			}
			
		}
		// 事件绑定
		_event (){		
			// 关闭弹框
			this.close.on('click', function (){
				this.box.remove();
			}.bind(this));
		}
		// pst 定位
		_pstBox (){
			var html = $('html');
			var body = $('body');
			var scrollTop = html[0].scrollTop || body[0].scrollTop;
			this.box.css('left', (html.outerWidth() - this.box.outerWidth())/2 + scrollTop + 'px');
			this.box.css('top', (html.outerHeight() - this.box.outerHeight())/2 + scrollTop + 'px');
			// 适应居中
			$(window).on('resize', function (){
				this._pstBox();
			}.bind(this));
			$(window).on('scroll', function (){
				this._pstBox();
			}.bind(this))
		}
		// 生成wrap并返回
		_creBox (){
			var box = $('<div>').addClass('full-pop');
			box.html(this._html());
			return box;
		}
		// 内部结构
		_html (){
			return `<div class="dialogTop">
						<div class="title">${this.con.title}</div>
				        <span class="close" title="关闭">×</span>
					</div>
		            <div class="content">${this.con.content}</div>
		            <div class="pop-btns">
		            	<button class="ok">${this.con.confirm}</button>
		            	<button class="cancel">${this.con.cancel}</button>
		            </div>`;
		}
	}
	$.fn.alert = function (con){
		new Alert(con);
	}
})(jQuery)