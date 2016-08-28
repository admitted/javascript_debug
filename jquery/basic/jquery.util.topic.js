(function($){
	$.fixedTopicWidth = function(str,options) {
		var setting = $.extend({length:50,fill:null,fillLength:3}
				,options||{})
		//(abcddddddddddddddddd,12,".")-->(abcdddddd...)
		var pos = setting.length-str.length;
		if(pos>0) {
			return str;
		} else {
			if(setting.fill) {
				var fs = "";
				for(var i=0;i<setting.fillLength;i++) {
					fs=fs+setting.fill;
				}
				return (str.substr(0,setting.length-3)+fs);
			} else {
				return str.substr(0,setting.length);
			}
		}
	};
	
	$.fn.formatTopic = function(options) {
		this.each(function(n){
			//这个时候的this就不再是包装集对象，而是这个闭包对象
			//此时闭包对象中的引用是一个html的节点，要访问就需要使用$(this)
			$(this).html($.fixedTopicWidth($(this).html(),options));
		});
	}
	
	/**
	 * 使用$.fn来创建包装集插件
	 */
	$.fn.setColor = function(){
		//此时的this对象指的是整个包装集对象，已经被封装为包装集
		//就不用在使用$(this)来封装
		this.css("color","#0f0");
		//基于包装集的函数一定要能够支持链式结构
		return this;
	}
	
	/**
	 * 如果state为true就表示readOnly,否则表示取消readonly
	 */
	$.fn.setReadOnly = function(state) {
		//1、找到所有的文本框
		return this.filter("input:text")
			.prop("readOnly",state)
			.css("opacity",state?0.5:1.0);
	}
})(jQuery)
