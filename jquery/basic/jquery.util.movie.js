// jQuery.noConflict();
//此时的$就不再是jquery中的$，而是闭包中的$,而闭包中的$又是jQuery对象
(function($){
	$.say = function(hello) {
		alert("hello "+hello);
	}
	
	/**
	 * 如果有一个插件，参数很多，而且很多参数并不是必须的
	 * 如此在调用的时候就会非常麻烦
	 * $.complex("aa");
	 * $.complex("aa",null,null,null,null,null,null,"abc");
	 * $.complex("aa","abc")
	 */
	// $.complex = function(p1,a2,a3,a4,a5,a6,a7,a8) {
// 		
	// }
	 /**
	  * 插件的参数的解决方法一般是通过options来定义
	  * options中一般使用json来定义，这个时候就可以灵活来确定参数个数
	  */
	   $.complex = function(p1,options,p2) {
	   	/**
	   	 * 在代码中,通过extend方法来完成覆盖
	   	 */
	   		var settings = $.extend({
	   			a2:"ok",
	   			a3:"hello",
	   			a4:"你好"
	   		},options||{});
	   		alert(p1+p2);
	   		alert(settings.a2+","+settings.a3+","+settings.a4);
	   }
})(jQuery)//传入jQuery作为参数
