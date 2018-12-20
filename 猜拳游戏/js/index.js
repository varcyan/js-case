//普通玩家 电脑玩家 采取系统
//玩家 系统
Object.prototype.extends = function(func,actions){
	for(var p in func.prototype){
		this.prototype[p] = func.prototype;
	}
	for(var p in actions){
		this.prototype[p] = actions[p];
	}
}
function Player(name){
	this.name = name;
	this.point = -1;	//初始化
}
Player.prototype = {
	guess: function (){
		console.error("猜拳方法是个抽象方法");
	}
}
function Nor(name){
	Player.call(this,name);
}
Nor.extends(Player,{
	guess: function(){
		do{
			this.point = parseInt(window.prompt("请输入猜拳,石头-1,剪刀-2,布-3"));
		}while(!(this.point&&(this.point==1||this.point==2||this.point==3)))
	}
})
var p1 = new Nor("几许");
p1.guess();
console.log(p1.point);
function Com(name){
	Player.call(this,name);
}
Com.extends(Player,{
	guess: function(){
		this.point = parseInt(Math.random()*10)%3+1;
	}
})
var c1 = new Com("一号");
c1.guess();
console.log(c1.point);
function wh(who){
	switch(who.point){
		case 1:
			return "石头";
			break;
		case 2:
			return "剪刀";
			break;
		case 3:
			return "布";
			break;
		default:
			return "纳尼..";
	}
}
function Sys(player1,player2){
	this.one = player1;
	this.two = player2;
}
Sys.prototype = {
	get: function(){
		console.log("第一位是普通玩家:" + this.one.name + " 出的是:" + wh(this.one));
		console.log("第二位是电脑玩家:" + this.two.name + " 出的是:" + wh(this.two));
		var result = this.resIt();
		this.resEnd(result);
	},
	resIt: function(){
		var res = this.one.point-this.two.point;
		switch(res){
			case 0:
				return 0;
				break;
			case -1:
			case 2:
				return -1;
				break;
			case 1:
			case -2:
				return 1;
				break;
		}
	},
	resEnd: function(res){
		if(res==0){
			console.log("这局是平局~");
		}else if(res==-1){
			console.log(this.one.name + "赢~o(∩_∩)o~  " + this.two.name + "输o(︶︿︶)o");
		}else{
			console.log(this.one.name + "输o(︶︿︶)o " + this.two.name + "赢~o(∩_∩)o~");
		}
	}
}
var system = new Sys(p1,c1);
system.get();
/*
//玩家：普通玩家/电脑玩家； 猜拳系统
Object.prototype.extends = function(func,actions){
	for(var p in func.prototype){
		this.prototype[p] = func.prototype[p];
	}
	for(var p in actions){
		this.prototype[p] = actions[p];
	}
}
function Player(name){
	this.name = name;
	this.point = -1;
}
Player.prototype = {
	guess: function(){
		console.error(this.name + '不能使用这个方法');
	}
}
//普通玩家
function Normal(name){
	Player.call(this,name);
}
Normal.extends(Player,{
	guess: function(){
		do{
			this.point = window.prompt('请出拳,石头-1,剪刀-2,布-3');
		}while(!(this.point&&(this.point==1||this.point==2||this.point==3)));
		return this.point;
	}
}) 
//电脑玩家
function Comp(name){
	Player.call(this,name);
}
Comp.extends(Player,{
	guess: function(){
		this.point = parseInt(Math.random()*10)%3+1;
		return this.point;
	}
})
//生成玩家
var p1 = new Normal('1号');
var p2 = new Comp('2号');
//猜拳系统
function Sys(p1,p2){
	this.p1 = p1;
	this.p2 = p2;
}
Sys.prototype = {
	doIt: function(){
		this.p1.guess();
		this.p2.guess();
		console.log(this.resIt());
		this.p1.point = this.whatQ(this.p1);
		this.p2.point = this.whatQ(this.p2);
		console.log(this.p1.name + ':' + this.p1.point);
		console.log(this.p2.name + ':' + this.p2.point);
		
	},
	whatQ: function(who){
		switch(who.point){
			case '1':
			case 1:
				return '石头';
				break;
			case '2':
			case 2:
				return '剪刀';
				break;
			case '3':
			case 3:
				return '布';
				break;
			default:
				return '纳米..';
		}
	},
	resIt: function(){
		//石头1, 剪刀2, 布3
		var res = this.p1.point - this.p2.point;
		if(res == -1){
			return this.p1.name + '赢';
		}else if(res == 1){
			return this.p2.name + '赢';
		}else if(res == 0){
			return '平局';
		}
	}
}
var s1 = new Sys(p1,p2);
s1.doIt();
*/