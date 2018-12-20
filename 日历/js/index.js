/*
var now = new Date();	//获得当前时间
var now1 = now.toLocaleString();	//用字符串方式表示
console.log(now1);
var nYear = now.getFullYear();	//获得当前年份
console.log(nYear);
var nMonth = now.getMonth()+1;	//获得当前月份
console.log(nMonth);
var nDate = now.getDate();	//获得当前日期
console.log(nDate);
var week = wDate.getDay(); //星期几
console.log(days);
*/


//用户输入年月
var wYear = parseInt(prompt('请输入年份'));
var wMonth = parseInt(prompt('请输入月份'))-1;
var wDate = new Date(wYear,wMonth,1);	//用户设置的年月
var lDate = new Date(wYear,wMonth+1,0);	//到这个月的最后一天
var days = lDate.getDate();	//这个月有多少天
var week = wDate.getDay(); //1号是星期几
//console.log(days);
//console.log(week);	

document.write(wYear + '年' + (wMonth+1) + '月<br />');	//输出用户设置的年月
var weekArr = ['日','一','二','三','四','五','六<br />'];	//数组:星期
document.write(weekArr.join('&nbsp;'));	//输出星期
for(var i=0; i<week; i++){
	document.write('&nbsp;&nbsp;');
}
for(var i=1; i<=days; i++){
	document.write(i + (i>=10?'&nbsp;':'&nbsp; '));
	if((i+week)%7==0){
		document.write('<br />');
	}
}