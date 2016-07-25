window.onload=function(){

	window.onresize=function(){
		var banerLeft=$(".banerLeft");
		var bannerRight=$(".bannerRight");
		// alert($(".bannerRight").height())
		$(".banerLeft").height($(".bannerRight").height());
		var as=$(".imgBox a");
		var len=as.length;
		as.width(banerLeft.width());
		var asW=as.width();
		// alert(asW)
		var imgBox=$(".imgBox");
		imgBox.width(banerLeft.width()*len);

		
		var leftBtn=$(".leftBtn");
		var rightBtn=$(".leftBtn");
		var s=0;
		// alert(len)
		// function move(type){
		// 	if(type=="r"){
		// 		s++;
		// 		if(s==len){
		// 			s=len-1;
		// 		}
		// 	}else if(type=="l"){
		// 		s--;
		// 		if(s<0){
		// 			s=0;
		// 		}
		// 	}
			
		// 	imgBox.animate({left:-s*asW},2000);
		// }
		// var t=setInterval(function(){move("r")},1000);
		// leftBtn.click(function(){
		// 	move('r');
		// })
		// banerLeft.hover(function(){
		// 	clearInterval(t);
		// },function(){
		// 	t=setInterval(function(){move("r")},1000);
		// })
		// rightBtn.click(function(){
		// 	move("r");
		// })
		// leftBtn.click(function(){
		// 	move("r");
		// })
	}
	window.onresize();
}