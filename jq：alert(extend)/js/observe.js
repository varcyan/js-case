// 观察者
class Observe {
	constructor(){
		// '联系方式'汇总
		this.contact = {};
	}
	// 订阅
	subscribe (status_, handle) {
		// 如果没有这个订阅项目，则创建一个项目容器
		if (!this.contact[status_]){
			this.contact[status_] = [];
		}
		// 把'联系方式'放到订阅容器中
		this.contact[status_].push(handle);
	}
	// 删除
	unSubscribe (status_, handle) {
		var arr = this.contact[status_];
		if (arr && arr instanceof Array){
			for (var i=0; i<arr.length; i++){
				if (arr[i] === handle){	// 找到這一项
					arr.splice(i,1);	// 从数组中删除
					break;
				}
			}
		}
	}
	// 发布
	publish (status_) {
		// 根据状态找到订阅者
		var arr = this.contact[status_];
		if (arr && arr instanceof Array) {
			for (var i=0; i<arr.length; i++){
				arr[i]();
			}
		}
	}
}