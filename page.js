// ScrollFire

var options = [
  {selector: '#lang', offset: 300, callback: function(el) {
    Materialize.showStaggeredList($(el));
	  } },
	  {selector: '#web', offset: 300, callback: function(el) {
    Materialize.showStaggeredList($(el));
	  } },
	  {selector: '#frameworks', offset: 300, callback: function(el) {
    Materialize.showStaggeredList($(el));
	  } }
];
Materialize.scrollFire(options);

$(document).ready(function(){


   	$(window).scroll(function(){
   		var scroll = $(window).scrollTop();

   		if(scroll >=570)
   		{
   			$(".section1").addClass("fixed");
   		}
   		if(scroll <570)
   		{
   			$(".section1").removeClass("fixed");
   		}


   		if(scroll >= 200)
   		{
   			$(".inf").removeClass("hide");
	   		$(".inf").addClass("fadeInUp");					   		
   		}
	   	if(scroll >= 1000)
	   	{
	   		$(".edu").removeClass("hide");
	   		$(".edu").addClass("fadeInLeft");
	   		
	   	}
	   	if(scroll >=1000 && scroll <= 1900)
	   	{
	   		$(".e").addClass("underline");
	   	}
	   	if(!(scroll >=1000 && scroll <= 1900))
	   	{
	   		$(".e").removeClass("underline");
	   	}
	   	if(scroll >= 1900 && scroll <= 2900)
	   	{
	   		$(".s").addClass("underline");
	   	}
	   	if(!(scroll >= 1900 && scroll <= 2900))
	   	{
	   		$(".s").removeClass("underline");
	   	}
	   	if(scroll >= 2900 && scroll <= 4300)
	   	{
	   		$(".p").addClass("underline");
	   	}
	   	if(!(scroll >= 2900 && scroll <= 4300))
	   	{
	   		$(".p").removeClass("underline");
	   	}
	   	if(scroll >= 4300 && scroll <= 5700)
	   	{
	   		$(".c").addClass("underline");
	   	}
	   	if(!(scroll >= 4300 && scroll <= 5700))
	   	{
	   		$(".c").removeClass("underline");
	   	}
	   	if(scroll >=4400)
	   	{
	   		$(".c1").removeClass("hide");
	   		$(".c2").removeClass("hide");
	   		$(".c1").addClass("fadeInLeft");
	   		$(".c2").addClass("fadeInRight");
	   	}
	   	if(scroll >=4700)
	   	{
	   		$(".c3").removeClass("hide");
	   		$(".c4").removeClass("hide");
	   		$(".c3").addClass("fadeInLeft");
	   		$(".c4").addClass("fadeInRight");
	   	}
	   	if(scroll >=5100)
	   	{
	   		$(".c5").removeClass("hide");
	   		$(".c6").removeClass("hide");
	   		$(".c5").addClass("fadeInLeft");
	   		$(".c6").addClass("fadeInRight");
	   	}
	   	if(scroll >= 5500)
	   	{
	   		$(".resume").removeClass("hide");
	   		$(".resume").addClass("fadeInUp")
	   	}

	   	if(scroll >= 6300)
	   	{
	   		$(".cont").removeClass("hide");
	   		$(".cont").addClass("bounceInDown")
	   	}


   });

	$('.tap-target').tapTarget('open');
		// $('.tap-target').tapTarget('close');

	
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);