/**
 * @author hu
 */
$(function(){
	
	
	 $(".header").each(function(){
 	
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
			    	$(".slider").css("backgroundPositionY",sc);
			    });
			    $window.trigger("scroll");
		});
		});