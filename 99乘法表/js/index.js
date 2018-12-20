var wrap = document.getElementById('wrap');
/*
for(var i=1; i<10; i++){
	for(var j=1; j<=i; j++){
		document.write('<span class="smBox">' + j + ' * ' + i + '=' + ((i*j)>=10?(i*j):(i*j + '&nbsp;&nbsp;')) + '</span>');
	}
	document.write('<br />');
}
*/

//用表格形式显示一个九九乘法表  
  
document.write("<table>");  
  
for (var x = 1; x <= 9; x++)  
{  
    document.write("<tr>");  
    for (var y = 1; y <= x; y++)  
    {  
        document.write("<th>"+y+"*"+x+"="+y*x+"</th>");  
    }  
    document.write("</tr>");  
}  
document.write("</table>");  
