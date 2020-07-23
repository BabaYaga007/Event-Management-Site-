!function(i,t){var n=function(i){var t,n;if(t=n=0,i.offsetParent)do t+=i.offsetLeft,n+=i.offsetTop;while(i=i.offsetParent);return[t,n]},e=function(i){this.canvas=i.canvas,this.minRadius=i.minRadius||15,this.arcWidth=i.arcWidth||5,this.gapWidth=i.gapWidth||3,this.centerX=i.centerX||this.canvas.width/2,this.centerY=i.centerY||this.canvas.height/2,this.infoLineLength=i.infoLineLength||60,this.horizLineLength=i.horizLineLength||10,this.infoLineAngleInterval=i.infoLineAngleInterval||Math.PI/8,this.infoLineBaseAngle=i.infoLineBaseAngle||Math.PI/6,this.context=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.circles=[],this.runningCount=0};e.prototype={constructor:e,addEntry:function(i){return this.circles.push(new s({canvas:this.canvas,context:this.context,centerX:this.centerX,centerY:this.centerY,innerRadius:this.minRadius+this.circles.length*(this.gapWidth+this.arcWidth),arcWidth:this.arcWidth,infoLineLength:this.infoLineLength,horizLineLength:this.horizLineLength,id:this.circles.length,fillColor:i.fillColor,outlineColor:i.outlineColor,progressListener:i.progressListener,infoListener:i.infoListener,infoLineAngle:this.infoLineBaseAngle+this.circles.length*this.infoLineAngleInterval})),this},start:function(i){var t=this;return this.timer=setInterval(function(){t._update()},i||33),this},stop:function(){clearTimeout(this.timer)},_update:function(){return this._clear(),this.circles.forEach(function(i){i.update()}),this},_clear:function(){return this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this}};var s=function(i){if(this.id=i.id,this.canvas=i.canvas,this.context=i.context,this.centerX=i.centerX,this.centerY=i.centerY,this.arcWidth=i.arcWidth,this.innerRadius=i.innerRadius||0,this.fillColor=i.fillColor||"#fff",this.outlineColor=i.outlineColor||this.fillColor,this.progressListener=i.progressListener,this.infoLineLength=i.infoLineLength||250,this.horizLineLength=i.horizLineLength||50,this.infoListener=i.infoListener,this.infoLineAngle=i.infoLineAngle,this.outerRadius=this.innerRadius+this.arcWidth,this.infoListener){var e=this.infoLineAngle,s=(this.innerRadius+this.outerRadius)/2,h=Math.sin(e),o=Math.cos(e);this.infoLineStartX=this.centerX+h*s,this.infoLineStartY=this.centerY-o*s,this.infoLineMidX=this.centerX+h*this.infoLineLength,this.infoLineMidY=this.centerY-o*this.infoLineLength,this.infoLineEndX=this.infoLineMidX+(0>h?-this.horizLineLength:this.horizLineLength),this.infoLineEndY=this.infoLineMidY;var r=t.createElement("div"),a=r.style;a.color=this.fillColor,a.position="absolute",a.left=this.infoLineEndX+n(this.canvas)[0]+"px",r.className="ProgressCircleInfo",r.id="progress_circle_info_"+this.id,t.body.appendChild(r),this.infoText=r}};s.prototype={constructor:s,update:function(){this.progress=this.progressListener(),this._draw(),this.infoListener&&(this.info=this.infoListener(),this._drawInfo())},_draw:function(){var i=this.context,t=-Math.PI/2,n=0+t,e=n+this.progress*Math.PI*2,s=this.centerX,h=this.centerY,o=this.innerRadius,r=this.outerRadius;return i.fillStyle=this.fillColor,i.strokeStyle=this.outlineColor,i.beginPath(),i.arc(s,h,o,n,e,!1),i.arc(s,h,r,e,n,!0),i.closePath(),i.stroke(),i.fill(),this},_drawInfo:function(){var i,t;return i=[[this.infoLineStartX,this.infoLineStartY],[this.infoLineMidX,this.infoLineMidY],[this.infoLineEndX,this.infoLineEndY]],this._drawSegments(i,!1),this.infoText.innerHTML=this.info,t=this.infoText.offsetHeight,this.infoText.style.top=this.infoLineEndY+n(this.canvas)[1]-t/2+"px",this},_drawSegments:function(i,t){var n=this.context;n.beginPath(),n.moveTo(i[0][0],i[0][1]);for(var e=1;e<i.length;++e)n.lineTo(i[e][0],i[e][1]);t&&n.closePath(),n.stroke()}},i.ProgressCircle=e}(window,document);