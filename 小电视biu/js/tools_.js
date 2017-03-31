/**
 * 工具函数
 * version: 1.1.8
 * date: 2017-02-14
 */

var tools = {};

tools.version = '1.1.8';

// 默认时间：500
// 运动时间：easeOut
tools.animate = function (obj, attrs, duration, fx, fn){
  if(typeof duration === 'undefined'){
    duration = 500;
    fx = 'easeOut';
  }
  if(typeof duration === 'number'){
    if(typeof fx === 'undefined'){
      fx = 'easeOut';
    }
    if(typeof fx === 'function'){
      fn = fx;
      fx = 'easeOut';
    }
  }
  if(typeof duration === 'string'){
    if(typeof fx === 'undefined'){
      fx = duration;
      duration = 500;
    }
    if(typeof fx === 'function'){
      fn = fx;
      fx = 'easeOut';
      duration = 500;
    }
  }
  if(typeof duration === 'function'){
    fn = duration;
    fx = 'easeOut';
    duration = 500;
  }
  var startVal = {};
  var changeVal = {};
  var _this = this;
  for(var key in attrs){
    startVal[key] = this.css(obj, key);
    changeVal[key] = attrs[key] - startVal[key];
  }
  var startTime = Date.now();
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var t = Date.now() - startTime;
    if(t > duration){
      t = duration;
      clearInterval(obj.timer);
      obj.timer = null;
    }
    for(var key in changeVal){
      var val = _this.Tween[fx](t, startVal[key], changeVal[key], duration);
      _this.css(obj, key, val);
    }
    if(!obj.timer){
      if(typeof fn === 'function'){
        fn.call(obj);
      }
    }
  }, 4);
};

//
function tools(selector){
  var first = selector[0];
  var classArr = selector.split(' ');
  var retArr = null;
  if(first === '#' && classArr.length === 1){
    return document.getElementById(selector.substr(1));
  }else{
    retArr = Array.from(document.querySelectorAll(selector));
  }
  return retArr.length === 1 ? retArr[0] : retArr;
}

// 抖函数
tools.shake = function (obj, attr, nums, fn){
  if(obj.shake) return;
  var arr = [], _this = this;
  for(var i=nums; i>=0; i--){
    arr.push(i, -i);
  }
  var index = 0;
  var iniAttrVal = this.css(obj, attr);
  if(iniAttrVal === undefined){
    iniAttrVal = 0;
  }
  clearInterval(obj.shake);
  obj.shake = setInterval(function() {
    _this.css(obj, attr, iniAttrVal + arr[index++]);
    if(index == arr.length){
      clearInterval(obj.shake);
      obj.shake = null;
      if(typeof fn == 'function'){
        fn.call(obj);
      }
    }
  }, 1000/60);
};

// 设置或者获取元素的css样式
tools.css = function (){
  var len = arguments.length;
  if(len < 2){
    return false;
  }
  var obj = arguments[0], attr = arguments[1], val = arguments[2];
  var _this = this;
  if(len == 2){
    if(typeof attr === 'string'){
      if(isTransfrom(attr)){
        return this.setTransform(obj, attr);
      }
      if(getStyle(attr)){
        return Number.parseFloat(getComputedStyle(obj)[attr]);
      }
      if(attr === 'opacity'){
        return Number.parseFloat(getComputedStyle(obj)[attr]);
      }
      return getComputedStyle(obj)[attr];
    }else{
      for(var key in attr){
        setStyle(key, attr[key])
      }
    }
  }
  if(len == 3 && (typeof attr == 'string' || typeof attr == 'number')){
    setStyle(attr, val);
  }
  function isTransfrom(attr){
    return attr == 'translateX' || attr == 'translateY' || attr == 'rotate' || attr == 'rotateX' || attr == 'rotateY' || attr == 'skewX' || attr == 'skewY' || attr == 'scale' || attr == 'scaleX' || attr == 'scaleY';
  }
  function getStyle(attr){
    return attr == 'width' || attr == 'height' ||attr == 'top' || attr == 'left' || attr == 'bottom' || attr == 'right' || attr == 'margin-left' || attr == 'marginLeft' || attr == 'margin-right' || attr == 'marginRight' || attr == 'margin-bottom' || attr == 'marginBottom' || attr == 'margin-top' || attr == 'marginTop';
  }
  function setStyle(attr, value){
    if(getStyle(attr)){
      obj.style[attr] = value + 'px';
    }else if(isTransfrom(attr)){
      _this.setTransform(obj, attr, value);
    }else{
      obj.style[attr] = value;
    }
  }
}

// 设置和获取CSS3的transform的属性
tools.setTransform = function (obj, attr, val){
  var attrs = obj._transfrom = obj._transfrom || {};
  if(typeof val === 'undefined'){
    return attrs[attr];
  }
  if(typeof val === 'number' || typeof val === 'string'){
    attrs[attr] = val;
  }
  var str = '';
  for(var key in attrs){
    if(key == 'translateX' || key == 'translateY'){
      if(typeof attrs[key] == 'string'){
        str += ' ' + key + '('+attrs[key]+')';
      }else{
        str += ' ' + key + '('+attrs[key]+'px)';
      }
    }
    if(key == 'rotate' || key == 'rotateX' || key == 'rotateY' || key == 'skewX' || key == 'skewY'){
      str += ' ' + key + '('+attrs[key]+'deg)';
    }
    if(key == 'scale' || key == 'scaleX' || key == 'scaleY'){
      str += ' ' + key + '('+attrs[key]+')';
    }
  }
  obj.style.transform = str.trim();
  return obj;
}

// 设置或者获取元素的innerHTML
tools.html = function (obj, val){
  if(typeof val === 'undefined'){
    return obj.innerHTML;
  }
  obj.innerHTML = val;
};
// 设置或者获取元素的value
tools.val = function (obj, val){
  if(typeof val === 'undefined'){
    return obj.value;
  }
  obj.value = val;
};

// 返回随机数
tools.rp = function (arr){
  var max = Math.max.apply(this, arr);
  var min = Math.min.apply(this, arr);
  return Math.round(Math.random() * (max - min) + min);
}

//tween运动曲线
tools.Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c;
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) *
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) *
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - tools.Tween['bounceOut'](d-t, 0, c, d) + b;
	},
	bounceOut: function(t, b, c, d){//*
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return tools.Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return tools.Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}