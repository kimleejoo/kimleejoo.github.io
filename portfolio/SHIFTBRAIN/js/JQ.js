/**
 * @author hu
 */
$(function(){
	//slideshow
	
	//slideshow 클래스를 가진 요소마다 작업을 수행
	$(".slideshow").each(function(){
		var $slides=$(this).find("img"),//모든 슬라이드(이미지)
		    slideCount=$slides.length,//슬라이드 갯수
		    currentIndex=0; //현재 슬라이드를 나타내는 인덱스
		    
		//첫번째 슬라이드에 페이드 인으로 표시
		$slides.eq(currentIndex).fadeIn(); //fadeIn:서서히 나타나도록
		
		//5초 마다 showNextSlide 함수를 실행
		setInterval(showNextSlide,5000);
		
		//다음슬라이드를 표시하는 함수
		function showNextSlide(){
			//다음 표시 할 슬라이드의 인덱스
			//(만약 마지막 슬라이드라면 처음으로 돌아 가지)
			var nextIndex=(currentIndex+1)%slideCount;
			
			//현재 슬라이드 페이드 아웃
			$slides.eq(currentIndex).fadeOut();
			
			//다음 슬라이드 페이드 인
			$slides.eq(nextIndex).fadeIn();
			
			//현재 슬라이드 인덱스를 업데이트
			currentIndex=nextIndex;
		}
	});
			//고정 헤더 처리
		  $(".page-header").each(function(){
			var $window=$(window), //창을  jquery 변수로 선언
			    $header=$(this),   //헤더를 변수로 선언
			    //헤더의 기본 위치를 검색
			    headerOffsetTop=$header.offset().top;
			    
			    //윈도우의 스크롤 이벤트를 모니터링
			    //(창이 스크롤 할 때마다 작업을 수행하기)
			    $window.on("scroll",function(){
			    	//윈도우의 스크롤 양을 확인하고
			    	//헤더의 기본 위치를 지나서 있으면 클래스를 부여
			    	//그렇지 않으면 삭제
			    	if($window.scrollTop()>headerOffsetTop){
			    		$header.addClass("sticky");
			    	}else{
			    		$header.removeClass("sticky");
			    	}
			    });
			    //윈도우의 스크롤 이벤트를 발생시키는
			    //헤더의 초기위치 조정하기 위해
			    $window.trigger("scroll");
		});
		
		//Tab
		$("#work").each(function(){
			var $tabList=$(this).find(".tabs-nav"),//탭의 목록
			    $tabAnchors=$tabList.find("a"),//탭 링크
			    $tabPannels=$(this).find(".tabs-panel"); //패널
			    
		
		
		//탭이 클릭 되었을 때의 처리
		//인자로 이벤트 객체를 받음.
		$tabList.on("click","a",function(event){
			//링크 클릭에 대한 기본 동작을 취소
			event.preventDefault();
			
			//클릭 된 탭을 변수 선언
			var $this=$(this);
			
			//모든 탭의 선택 상태를 해제하고,
			//클릭 된 탭을 선택 상태로 변경
			$tabAnchors.removeClass("active");
			$this.addClass("active");
			
			//모든 페널을 비표시로 하고
			//클릭 된 탭에 대응하는 패널을 표시
			$tabPannels.hide();
			$($this.attr("href")).show();
		});
		//첫 번째 탭을 선택 상태로
		$tabAnchors.eq(0).trigger("click");
	    
		});
	   //Top버튼
	   $(".back-to-top").on("click",function(){
	   	$("html").animate({scrollTop:0},500);
	   });
	
});
