!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){"use strict";function i(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(t,n)})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(3),u=function(){function e(t){if(i(this,e),!this.check)return console.warn("you browser don't support panoramic player"),!1;this._view={devicePixelRatio:window.devicePixelRatio||2,aspect:window.innerWidth/window.innerHeight||.6,fov:75,fovNear:1,fovFar:1100,radius:500,width:window.innerWidth,height:window.innerHeight,widthSeg:60,heightSeg:60,touch:!0,orientation:!0,latRange:85,touchYSens:.3,touchXSens:.5,betaSens:.8,gammaSens:.8,alphaSens:.8},this._player={url:"",crossOrigin:"anonymous",muted:!1,loop:!0,autoplay:!0,x5:["webkit-playsinline","playsinline"]},this._picture={url:"",crossOrigin:"anonymous"},this._mode="video",this._3D={lon:0,lat:0,latRange:this._view.latRange,distance:this._view.radius||500},this._canvas,this._camera,this._scene,this._geometry,this._texture,this._textureLoader,this._material,this._mesh,this._renderer,this._RAF,this._video,this._image,this._touchControl,this._orient,this._init(t)}return o(e,[{key:"_bindOrientation",value:function(){var e=this;this._orient=new s.OrientationControl,this._orient.move(function(t){var n=(t.event,t.delta),i=n.beta,o=n.gamma,a=(n.alpha,e._3D),r=a.lat,s=a.lon,u=a.latRange,c=e._view,l=c.betaSens,h=c.gammaSens;r-=i*l,s+=o*h,e._3D.lat=Math.max(-u,Math.min(u,r)),e._3D.lon=s})}},{key:"_bindTouch",value:function(){var e=this;this._touchControl=new s.TouchFinger,this._touchControl.swipe(function(t){if(t.event.target===e._canvas){var n=t.x,i=t.y,o=e._view,a=o.touchYSens,r=o.touchXSens,s=e._3D,u=s.lat,c=s.lon,l=s.latRange;u+=i*a,c+=n*r,e._3D.lat=Math.max(-l,Math.min(l,u)),e._3D.lon=c}})}},{key:"_init",value:function(e){var t=e.container,n=e.view,i=e.image,o=e.player;if(o?(Object.assign(this._player,o),this._mode="video"):i&&(Object.assign(this._picture,i),this._mode="image"),Object.assign(this._view,n),this._container=t,!this._player.url&&!this._picture.url)return void console.warn("missing <url> field-- ",url);"video"===this._mode&&this._initVideo(),this._initCanvas(),this._view.touch&&this._bindTouch(),this._view.orientation&&this._bindOrientation()}},{key:"_initVideo",value:function(){var e=this._player,t=e.crossOrigin,n=(e.touch,e.orientation,e.loop),i=e.autoplay,o=e.url,a=(e.muted,e.x5),r=document.createElement("video");if(r.loop=n,r.muted=!0,r.crossOrigin=t,r.src=o,i&&(r.autoplay=i),a&&a.length){var s=!0,u=!1,c=void 0;try{for(var l,h=a[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;r.setAttribute(d,d)}}catch(e){u=!0,c=e}finally{try{!s&&h.return&&h.return()}finally{if(u)throw c}}}this._video=r}},{key:"_initCanvas",value:function(){var e=void 0,t=void 0,n=void 0,i=void 0,o=void 0,a=void 0,r=void 0,s=void 0,u=this._view,c=u.devicePixelRatio,l=u.aspect,h=u.fov,d=u.fovNear,f=u.fovFar,v=u.width,m=u.height,_=u.radius,p=u.widthSeg,g=u.heightSeg;e=new THREE.PerspectiveCamera(h,l,d,f),e.target=new THREE.Vector3(0,0,0),t=new THREE.Scene,n=new THREE.SphereBufferGeometry(_,p,g),n.scale(-1,1,1),"video"===this._mode?i=new THREE.VideoTexture(this._video):(r=new THREE.TextureLoader,i=r.load(this._picture.url)),i.minFilter=THREE.LinearFilter,i.format=THREE.RGBFormat,o=new THREE.MeshBasicMaterial({map:i}),a=new THREE.Mesh(n,o),t.add(a),s=new THREE.WebGLRenderer,s.setPixelRatio(c),s.setSize(v,m),this._canvas=s.domElement,this._camera=e,this._scene=t,this._geometry=n,this._texture=i,this._textureLoader=r,this._material=o,this._mesh=a,this._renderer=s,this._container&&this._container.appendChild(s.domElement),this._RAF=this._animate()}},{key:"_animate",value:function(){this._RAF=requestAnimationFrame(this._animate.bind(this));var e=this._3D,t=e.lon,n=e.lat,i=(e.latRange,e.distance),o=this._camera,a=this._renderer,r=void 0,s=void 0;r=THREE.Math.degToRad(90-n),s=THREE.Math.degToRad(-t),o.position.x=i*Math.sin(r)*Math.cos(s),o.position.y=i*Math.cos(r),o.position.z=i*Math.sin(r)*Math.sin(s),o.lookAt(o.target),a.render(this._scene,o)}},{key:"play",value:function(){this._video&&this._video.play()}},{key:"pause",value:function(){this._video&&this._video.pause()}},{key:"on",value:function(e,t){this._video&&this._video.addEventListener(e,t,!1)}},{key:"addEventListener",value:function(){this.on.apply(this,arguments)}},{key:"bind",value:function(){this.on.apply(this,arguments)}},{key:"lat",set:function(e){var t=this._3D.latRange;this._3D.lat=Math.max(-t,Math.min(t,e))},get:function(){return this._3D.lat}},{key:"lon",set:function(e){this._3D.lon=lon},get:function(){return this._3D.lon}},{key:"canvas",get:function(){return this._canvas}},{key:"video",get:function(){return this._video}},{key:"src",set:function(e){var t=this;"video"===this._mode?this._video.src=e:this._textureLoader.load(e,function(e){e.minFilter=THREE.LinearFilter,e.format=THREE.RGBFormat,t._material.map=e})}},{key:"betaSens",set:function(e){this._view.betaSens=Math.max(.3,Math.min(1,e))},get:function(){return this._view.betaSens}},{key:"gammaSens",set:function(e){this._view.gammaSens=Math.max(.3,Math.min(1.5,e))},get:function(){return this._view.gammaSens}},{key:"touchYSens",set:function(e){this._view.touchYSens=Math.max(.3,Math.min(1.2,e))},get:function(){return this._view.touchYSens}},{key:"touchXSens",set:function(e){this._view.touchXSens=Math.max(.3,Math.min(1.5,e))},get:function(){return this._view.touchXSens}},{key:"check",get:function(){return r.default.webgl&&window.THREE}}],[{key:"isSupported",value:function(){return r.default.webgl&&window.THREE}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,n,i;e=e||{},t=void 0!==e.parent?e.parent:document.body,n=void 0!==e.id?e.id:"oldie",i=Detector.getWebGLErrorMessage(),i.id=n,t.appendChild(i)}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.OrientationControl=t.TouchFinger=void 0;var o=n(4),a=i(o),r=n(7),s=i(r);t.TouchFinger=a.default,t.OrientationControl=s.default},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(5),r=n(6),s=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(s),c=function(){function e(){var t=this;i(this,e),a.TOUCHEVENTS.forEach(function(e){document.addEventListener(e,t.touchControl.bind(t),!1)}),this._emitter=new u.default,this._touchprop={touchstart:!1,startTime:null,startPos:[],movePos:[],offset:{top:null,left:null}}}return o(e,[{key:"touchControl",value:function(e){var t=e.target,n=e.type,i=this._touchprop;switch(n){case"touchstart":case"mousedown":i.touchstart=!0,i.startTime=Date.now(),i.startPos=(0,r.getPosition)(e),i.offset=(0,r.getOffset)(t);break;case"touchmove":case"mousemove":if(!i.touchstart)return;i.movePos=(0,r.getPosition)(e),this._swipe(e);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":i.touchstart=!1,i.startPos=i.movePos=[]}}},{key:"_swipe",value:function(e){var t=this._touchprop,n=Date.now()-t.startTime,i=t.movePos,o=t.startPos,a=t.offset,r={event:e,position:{x:i[0].x-a.left,y:i[0].y-a.top},x:i[0].x-o[0].x,y:i[0].y-o[0].y,duration:n};this._emitter.emit("swipe",r),t.startPos=i.slice()}},{key:"on",value:function(e,t){switch(e){case"swipe":this._emitter.on(e,t);break;default:console.warn("invalid eventName, ",e),this._emitter.on(e,t)}}},{key:"bind",value:function(){this.on.apply(this,arguments)}},{key:"addEventListener",value:function(){this.on.apply(this,arguments)}},{key:"swipe",value:function(e){this._emitter.on("swipe",e)}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TOUCHEVENTS=["touchstart","touchmove","touchend","touchcancel","mousedown","mousemove","mouseup","mouseout"],t.SWIPE={minDis:20,time:200}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getPosition=function(e){var t=e.touches;if("number"==typeof e.pageX)return[{x:e.pageX,y:e.pageY}];if(t.length<=0)return console.warn("there is no finger on the screen, ",e.touches),[];var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){var u=r.value;n.push({x:u.pageX,y:u.pageY})}}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n},t.getOffset=function(e){var t=document.body||document.documentElement,n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||0),left:n.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(){function e(){if(i(this,e),!this.isSupport)return void console.warn("Your browser don't support orientation API ");window.addEventListener("deviceorientation",this._control.bind(this),!1),this._emitter=new r.default,this._deviceProp={start:{},first:!0}}return o(e,[{key:"_control",value:function(e){var t=e.alpha,n=e.beta,i=e.gamma,o=e.absolute,a=this._deviceProp;if(a.first)return a.start={alpha:t,beta:n,gamma:i,absolute:o},void(a.first=!1);var r={event:e,delta:{alpha:this.diffRange(t,a.start.alpha,"alpha"),beta:this.diffRange(n,a.start.beta,"beta"),gamma:this.diffRange(i,a.start.gamma,"gamma")},angle:{alpha:t,beta:n,gamma:i,absolute:o}};this._emitter.emit("move",r),a.start={alpha:t,beta:n,gamma:i,absolute:o}}},{key:"diffRange",value:function(e,t,n){var i=void 0;switch(n){case"alpha":case"beta":i=180;break;case"gamma":i=90}var o=e-t;return Math.abs(o)>i&&(o>0?o=2*i-o:o+=2*i),o}},{key:"on",value:function(e,t){switch(e){case"move":this._emitter.on(e,t);break;default:console.warn("invalid eventName, ",e),this._emitter.on(e,t)}}},{key:"bind",value:function(){this.on.apply(this,arguments)}},{key:"addEventListener",value:function(){this.on.apply(this,arguments)}},{key:"move",value:function(e){this._emitter.on("move",e)}},{key:"isSupport",get:function(){return!!window.DeviceOrientationEvent}}]),e}();t.default=s},,function(e,t,n){"use strict";var i=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i);window.onload=function(){new o.default({image:{url:"./banner.png"},container:document.getElementById("container")})}}]);