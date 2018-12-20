//小头爸牵着大头儿子的手去吃饭，吃完饭后，小头爸爸背着大头儿子回家
//小头爸爸 大头儿子 饭
//吃 F背 回家
Object.prototype.extends = function(func,actions){
	for(var p in func.prototype){
		this.prototype[p] = func.prototype[p];
	}
	for(var p in actions){
		this.prototype[p] = actions[p];
	}
}
//alert(1);
function Person(name){
	this.name = name;
}
Person.prototype = {
	eat: function (rice){
		console.log(this.name + "正在吃" + rice.name);
	},
	backHome: function (p1,p2){
		console.log(p1.name + "和" + p2.name + "回家");
	},
	getHand: function(person){
		console.log(this.name + "牵着" + person.name + "的手");
	}
}
function Father(name){
	this.name = name;
}
Father.extends(Person,{
	carry: function(person){
		console.log(this.name + "背着" + person.name);
	},
	work: function(){
		console.log(this.name + "工作..");
	}
})
function Child(name){
	this.name = name;
}
Child.extends(Person,{
	fun: function(){
		console.log(this.name + "玩游戏..");
	}
})
function Mother(name){
	this.name = name;
}
Mother.extends(Person,{
	hug: function(person){
		if(person.prototype == Child.prototype){
			console.log(this.name + "玩游戏..");
		}else{
			console.log("!!!");
		}
	}
})
function Rice(name){
	this.name = name;
}
var bb = new Father("小头爸爸");
var er = new Child("大头儿子");
var mm = new Mother("围裙妈妈");
var f1 = new Rice("肉末炒饭");
var f2 = new Rice("蛋炒饭");
bb.getHand(er);
bb.eat(f1);
er.eat(f2);
console.log("吃完饭后..");
bb.carry(er);
bb.backHome(bb,er);
console.log("回家后..");
bb.work();
er.fun();
console.log("十点的时候")
mm.hug(er);
console.log(bb.__proto__);
