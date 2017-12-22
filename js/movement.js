$(function(){
		boxRollovers();
	});

function boxRollovers()
{
		$selector = $("li");
		XAngle = 0;
		YAngle = 0;
		Z = 00;
		
		$selector.on("mousemove",function(e){
			var $this = $(this);
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.5 - (XRel / width)) * 20; 
			XAngle = (0.2 - (YRel / width)) * 3;
			updateView($this.children(".li"));
		});
		
		$selector.on("mouseleave",function(){
			oLayer = $(this).children(".li");
			oLayer.css({"transform":"perspective(925px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
			oLayer.find("strong").css({"transform":"perspective(925px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
	}
	
function updateView(oLayer)
{
		oLayer.css({"transform":"perspective(925px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
		oLayer.find("strong").css({"transform":"perspective(925px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
	}

