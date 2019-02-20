/**
 * @author hu
 */
$(function(){
	
	
	 $(".menu").each(function(){
 	
			var $window=$(window),
			    $header=$(this), 

			    headerOffsetTop=$header.offset().top;

			    $window.on("scroll",function(){

			    	if($window.scrollTop()>headerOffsetTop){
			    		$header.addClass("sticky");
			    	}else{
			    		$header.removeClass("sticky");
			    	}
			    	var sc=($window.scrollTop()/2);
			    	$("#header").css("backgroundPositionY",sc);
			    });
			    $window.trigger("scroll");
		});
		});
	