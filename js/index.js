window.onload=function(){
	var uls=document.getElementById("ul_list");
	var prev=document.getElementById("left");
	var next=document.getElementById("right");
	var timer;
	var index=1;
	var ols=document.getElementById("ol_list").getElementsByTagName("li");
	var contenBox=document.getElementById("contenBox");
	
	//实现图片切换
	function animate(offset){
		var newLeft=parseInt(uls.style.left)+offset;
		uls.style.left=newLeft+"px";
		//判断最后一张回到第一张
		if(newLeft<-3600){
			uls.style.left=-600+"px"
		}
		//判断第一张回到最后一张
		if(newLeft>-600){
			uls.style.left=-3600+"px"
		}
	}
	
	//上一张
	prev.onclick=function(){
		index--;
		if(index<1){
			index=6;
		}
		subScript();
		animate(600);
	}
	
	//下一张
	next.onclick=function(){
		index++;
		if(index>6){
			index=1
		}
		subScript();
		animate(-600);
	}
	
	//自动播放
	function autoPlay(){
		timer=setInterval(function(){
			next.onclick();
		},1500)
	}
	
	autoPlay()
	
	//停止自动播放
	function stop(){
		clearInterval(timer)
	}
	
	//鼠标滑过与离开
	contenBox.onmousemove=stop;
	contenBox.onmouseout=autoPlay;
	
	//底部样式切换
	function subScript(){
		for (var i = 0; i < ols.length; i++) {
			if(ols[i].className=="on"){
				ols[i].className=""
			}
		}
		ols[index-1].className="on"
	}
	
	//点击底部小圆点切换
	for (var i = 0; i < ols.length; i++) {
		(function(i){
			ols[i].onclick=function(){
				var clickIndex=parseInt(this.getAttribute("index"));
				var offset=600*(index-clickIndex);
				animate(offset);
				index=clickIndex;
				subScript();
			}
		})(i)
	}
}	

