$(document).ready(function(){

	$("li").mouseenter(function(){
		$("li").fadeTo("slow", 0.5);
  	});

	$("li").mouseleave(function(){
		$("li").fadeTo("fast", 1);
	});

	$("img").click(function(){
		$(this).text("Clicked",1);
	});

	$("h1").one("click",function() {
  $(this).height(100).css({
    backgroundColor: "purple"});

     });

});
