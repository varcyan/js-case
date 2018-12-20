/*
1.编写一个程序，完成以下功能：
	声明一个名为s的String对象，并使它的内容是"Call Me wyzz";
	1。显示该字符串长度。
	2.使用IndexOf与LastIndexOf以及substr截取出“Me”。
	3.使用CharAt 与Character的IsUpperCase()方法显示所有的大写字母
	4.去掉字符串中的“Me”,让字符串变成Call  wyzz
	5.继续在字符串后拼接上“潭州学院”

var s = new String("Call Me wyzz");
console.log(s.length);	//字符串的长度
console.log(s.indexOf("M"));	//该字符串正数索引
console.log(s.lastIndexOf("e"));	//该字符串倒数索引
console.log(s.substr(5,2));	//所需字符串第一位出现的位置，长度
console.log(s.substring(5,7));//所需字符串第一位出现的位置，所需最后一位出现的位置+1
console.log(s.charAt(0) + s.charAt(5));	//返回索引位的字符串
console.log(s.replace("Me",""));
console.log(s.concat("潭州学院"))
*/
/*
2.判断回文：
	一个字符串若从头阅读与从尾阅读是相同的则是回文字符串如：asdsa
	请用封装一个函数判断一个传入的字符串是否为回文，返回boolean
*/
/*
function com(str){
	//打出正序的字符串
	var a = '';
	for(var i=0; i<str.length; i++){
		a += str.charAt(i);	
	}
	console.log(a);
	//打出倒叙的字符串
	var b = '';
	for(var i=str.length-1; i>=0; i--){
		b += str.charAt(i);
	}
	console.log(b);
	//比较两个字符串并输出判断结果
	var res = a==b;
	if(res){
		console.log("這个字符串是回文字符串~");
	}else{
		console.log("!!不是啊");
	}
}
com("asbsa1");
*/
/*
3.电子邮件的格式要求：
	1.必须包含@和. 而且@只能有一个
	2.不能以@或.开头以及结尾
	3.@必须出现在.之前
输入一个字符窜，判断该字符串是否为合格的电子邮件。
*/
/*
function com3(str){
	this.str = str;
	var c1 = str.indexOf('@');	//获得“@”首次出现的索引值
	var c2 = str.indexOf('.');
	var h1 = str.substr(c1+1);	//获得“@”后面的字符串的值
	var h2 = str.substr(c2+1);
	var cc1 = h1.indexOf('@');	//获取首个“@”后面字符串出现的“@”的索引值
	var cc2 = h2.indexOf('.');
	var len = str.length-1;		//索引值的最后一位
	if(c1 == -1||c2 == -1){		//使用indexOf()方法，如果该字符串内不存在“@”，返回-1
		console.log('字符中必须包含"@"和"."');
	}else{
		if(cc1>-1||cc2>-1){		//如果首个“@”后面的字符串中出现了“@”
			console.log('格式不对，只能包含一个‘@’和‘.’');
		}else{
			if(c1==0||c1==len||c2==0||c2==len){		//“@”和“.”不能出现在开头或结尾，开头索引值是0，结尾索引值是str.length-1
				console.log('"@"和"."不能放开头或结尾');
			}else{
				var res = c1-c2;	//“@”和“.”的索引值相减，“@”要出现在“.”前面，因此要求小于0，在它前一位res==-1
				if(res!=-1){
					console.log('"@"必须在"."前面');
				}else{
					console.log('OK~!');
				}	
			}	
		}
	}
}
com3('abc@.a')
*/
/*
4.使用Math类的方法 计算：
  1.输入一个数字，显示绝对值
  2.输入两个整数 ，计算幂
  3.输入一个浮点数，使用多种方式取整（向下取整，向上取整，四舍五入）
  5.课后扩展：编写一个四舍五入类实现：能对小数数据的指定小数位取整
*/
/*
//1.计算绝对值
function abso(){
	var num = parseFloat(window.prompt("请输入一个数字"));
	var ab = Math.abs(num);
	console.log(ab);
}
abso();
*/
/*
//2.输入两个整数 ，计算幂
*/
/*
function mi(){
	var btm;
	var exp;
	do{
		btm = parseFloat(window.prompt("请输入底数"));
	}while(btm!=btm)
	if(btm){
		exp = parseFloat(window.prompt("请输入次数"));
		var mi = Math.pow(btm,exp);
		console.log(mi);
	}
}
mi();
*/
// 3.输入一个浮点数，使用多种方式取整（向下取整，向上取整，四舍五入）
/*
function comZ(num){
	this.num = num;
}
comZ.prototype = {
	upz: function(){
		console.log('向上取整:' + Math.ceil(this.num));
	},
	downz: function(){
		console.log('向下取证:' + Math.floor(this.num));
	},
	norz:function(){
		console.log('四舍五入:' + Math.round(this.num));
	}
}
var a = window.prompt("请输入一个数字进行取整");
var b = new comZ(a);
b.upz();
b.downz();
b.norz();
*/
//5.课后扩展：编写一个四舍五入类实现：能对小数数据的指定小数位取整
//???
/*
5.使用Date类求获取当前日期,分别使用下以下格式打印:
	1)按日期的原格式打印.
	2)"当前时间是: xxxx年xx月xx日 星期X 北京时间"
	3)"当前时间是: xxxx年xx月xx日 时:分:秒"
	3)按欧美日期习惯输出当前日期 ("月-日-年 时:分:秒")

var now = new Date();	//获取当前的日期
var day = now.getDate();	//获取这个月的某一天
var week = now.getDay();	//获取星期几
var month = now.getMonth();		//获取当前月份
var fourYear = now.getFullYear();	//返回一个表示年份的4位数字
var hour = now.getHours();	//返回对象的小时
var minute = now.getMinutes();	//返回对象的分钟
var second = now.getSeconds();	//返回对象的秒数
console.log("现在的时间" + now);	
console.log(fourYear + "年" + (month+1) + "月" + day + "日 星期" + (week==0?"日":week) + " " + (hour<10?("0"+ hour):hour) + ":" + (minute<10?("0"+ minute):minute) + ":" + (second<10?("0"+second):second));
console.log(fourYear + "-" + (month+1) + "-" + day + " " + (hour<10?("0"+ hour):hour) + ":" + (minute<10?("0"+ minute):minute) + ":" + (second<10?("0"+second):second));
*/
/*
6.使用Date的Date(year,month,date) 构造方法,构造当前日期,打印输出.求出当前日期自1970年1月1日起的已经有多少天了.(getTime()方法返回时间到1970年1月1日0点0分0秒之间的毫秒数)
var now = new Date();
var end = now.getTime();
console.log("现在的时间是: " + now);
console.log("1970年1月1日到现在的毫秒数: " + end);
*/
/*
7.利用Random类,随机生成一个
	整数随机数
	0-1之间的小数随机数
	1-100之间的整数随机数
var ran = Math.random();	//生成0-1之间的小数随机数
var ranZ = parseInt(Math.random()*10);	//生成0-9之间的证书随机数
var ranB = parseInt(Math.random()*100);	//生成0-100之间的随机数
var ran1 = parseInt(Math.random()*100)%3;	//生成0/1/2随机数
console.log(ran);
console.log(ranZ);
console.log(ranB);
console.log(ran1);
*/

//*8.封装一个函数，传入年月日三个参数，页面输出当月日历
var arr = ["日","一","二","三","四","五","六"];
for(var i=0; i<arr.length; i++){
	document.write('<div class="week">' + arr[i] + "</div>");
}
for(var i=){

}
