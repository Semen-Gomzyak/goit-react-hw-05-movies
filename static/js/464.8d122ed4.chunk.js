"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[464],{260:function(e,t,n){n.d(t,{$:function(){return d},Oe:function(){return s},_k:function(){return l},lR:function(){return u},uy:function(){return c}});var r=n(861),o=n(757),a=n.n(o),i=n(44),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("https://api.themoviedb.org/3/trending/all/day?api_key=bb9be7856d820d280efdc8865f07d5b2");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("https://api.themoviedb.org/3/search/movie?api_key=bb9be7856d820d280efdc8865f07d5b2&language=en-US&".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},464:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(982),o=n(885),a=n(731),i=n(791);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var f=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r},p=["theme","type"],m=["delay","staleId"],v=function(e){return"number"==typeof e&&!isNaN(e)},g=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},y=function(e){return g(e)||h(e)?e:null},b=function(e){return(0,i.isValidElement)(e)||g(e)||h(e)||v(e)};function E(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,s=e.collapse,c=void 0===s||s,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,s=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,g=(0,i.useRef)(0);return(0,i.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var a;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,r.Z)(n)))};(e=t.classList).add.apply(e,(0,r.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,i.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),c?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),i.createElement(i.Fragment,null,o)}}function T(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var x={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},O=function(e){var t=e.theme,n=e.type,r=l(e,p);return i.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},C={info:function(e){return i.createElement(O,u({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return i.createElement(O,u({},e),i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return i.createElement(O,u({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return i.createElement(O,u({},e),i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}};function _(e){var t=(0,i.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,i.useState)([]),s=(0,o.Z)(a,2),c=s[0],d=s[1],f=(0,i.useRef)(null),p=(0,i.useRef)(new Map).current,E=function(e){return-1!==c.indexOf(e)},O=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:E,getToast:function(e){return p.get(e)}}).current;function _(e){var t=e.containerId;!O.props.limit||t&&O.containerId!==t||(O.count-=O.queue.length,O.queue=[])}function w(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=O.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function k(e,t){var r=t.delay,o=t.staleId,a=l(t,m);if(b(e)&&!function(e){return!f.current||O.props.enableMultiContainer&&e.containerId!==O.props.containerId||p.has(e.toastId)&&null==e.updateId}(a)){var s=a.toastId,c=a.updateId,d=a.data,E=O.props,_=function(){return w(s)},k=null==c;k&&O.count++;var L,N,R=u(u(u({},E),{},{style:E.toastStyle,key:O.toastKey++},a),{},{toastId:s,updateId:c,data:d,closeToast:_,isIn:!1,className:y(a.className||E.toastClassName),bodyClassName:y(a.bodyClassName||E.bodyClassName),progressClassName:y(a.progressClassName||E.progressClassName),autoClose:!a.isLoading&&(L=a.autoClose,N=E.autoClose,!1===L||v(L)&&L>0?L:N),deleteToast:function(){var e=T(p.get(s),"removed");p.delete(s),x.emit(4,e);var t=O.queue.length;if(O.count=null==s?O.count-O.displayedToast:O.count-1,O.count<0&&(O.count=0),t>0){var r=null==s?O.props.limit:1;if(1===t||1===r)O.displayedToast++,I();else{var o=r>t?t:r;O.displayedToast=o;for(var a=0;a<o;a++)I()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,s={theme:t,type:n};return!1===o||(h(o)?a=o(s):(0,i.isValidElement)(o)?a=(0,i.cloneElement)(o,s):g(o)||v(o)?a=o:r?a=C.spinner():function(e){return e in C}(n)&&(a=C[n](s))),a}(R),h(a.onOpen)&&(R.onOpen=a.onOpen),h(a.onClose)&&(R.onClose=a.onClose),R.closeButton=E.closeButton,!1===a.closeButton||b(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!b(E.closeButton)||E.closeButton);var Z=e;(0,i.isValidElement)(e)&&!g(e.type)?Z=(0,i.cloneElement)(e,{closeToast:_,toastProps:R,data:d}):h(e)&&(Z=e({closeToast:_,toastProps:R,data:d})),E.limit&&E.limit>0&&O.count>E.limit&&k?O.queue.push({toastContent:Z,toastProps:R,staleId:o}):v(r)?setTimeout((function(){P(Z,R,o)}),r):P(Z,R,o)}}function P(e,t,n){var o=t.toastId;n&&p.delete(n);var a={content:e,props:t};p.set(o,a),d((function(e){return[].concat((0,r.Z)(e),[o]).filter((function(e){return e!==n}))})),x.emit(4,T(a,null==a.props.updateId?"added":"updated"))}return(0,i.useEffect)((function(){return O.containerId=e.containerId,x.cancelEmit(3).on(0,k).on(1,(function(e){return f.current&&w(e)})).on(5,_).emit(2,O),function(){p.clear(),x.emit(3,O)}}),[]),(0,i.useEffect)((function(){O.props=e,O.isToastActive=E,O.displayedToast=c.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:E}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,i.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],s=(0,i.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,i.useRef)(null),f=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,i.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,b=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",_),document.addEventListener("touchmove",C),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=I(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?O():x()}}function x(){a(!0)}function O(){a(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&O(),f.x=w(t),f.y=I(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,i.useEffect)((function(){p.current=e})),(0,i.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),h(e.onOpen)&&e.onOpen((0,i.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,i.isValidElement)(e.children)&&e.children.props)}}),[]),(0,i.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",x),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var k={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(k.onMouseEnter=O,k.onMouseLeave=x),b&&(k.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:k}}function P(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return i.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,c=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,b=c||p&&0===m,E=u(u({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});p&&(E.transform="scaleX(".concat(m,")"));var T=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),x=h(l)?l({rtl:v,type:a,defaultClassName:T}):f(T,l);return i.createElement("div",s({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:x,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var N=function(e){var t=k(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,E=e.style,T=e.bodyClassName,x=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,_=e.updateId,w=e.role,I=e.progress,N=e.rtl,R=e.toastId,Z=e.deleteToast,S=e.isIn,j=e.isLoading,M=e.iconOut,D=e.closeOnClick,B=e.theme,z=f("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":D}),A=h(b)?b({rtl:N,position:y,type:p,defaultClassName:z}):f(z,b),F=!!I||!l,H={closeToast:v,type:p,theme:B},q=null;return!1===s||(q=h(s)?s(H):(0,i.isValidElement)(s)?(0,i.cloneElement)(s,H):P(H)),i.createElement(g,{isIn:S,done:Z,position:y,preventExitTransition:r,nodeRef:o},i.createElement("div",u(u({id:R,onClick:d,className:A},a),{},{style:E,ref:o}),i.createElement("div",u(u({},S&&{role:w}),{},{className:h(T)?T({type:p}):f("Toastify__toast-body",T),style:x}),null!=M&&i.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},M),i.createElement("div",null,c)),q,i.createElement(L,u(u({},_&&!F?{key:"pb-".concat(_)}:{}),{},{rtl:N,theme:B,delay:l,isRunning:n,isIn:S,closeToast:v,hide:m,type:p,style:C,className:O,controlledProgress:F,progress:I||0}))))},R=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Z=E(R("bounce",!0)),S=(E(R("slide",!0)),E(R("zoom")),E(R("flip")),(0,i.forwardRef)((function(e,t){var n=_(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,s=e.className,c=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(s)?s({position:e,rtl:l,defaultClassName:t}):f(t,y(s))}return(0,i.useEffect)((function(){t&&(t.current=o.current)}),[]),i.createElement("div",{ref:o,className:"Toastify",id:d},r((function(e,t){var n=t.length?u({},c):u(u({},c),{},{pointerEvents:"none"});return i.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return i.createElement(N,u(u({},o),{},{isIn:a(o.toastId),style:u(u({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:Z,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,M=new Map,D=[],B=1;function z(){return""+B++}function A(e){return e&&(g(e.toastId)||v(e.toastId))?e.toastId:z()}function F(e,t){return M.size>0?x.emit(0,e,t):D.push({content:e,options:t}),t.toastId}function H(e,t){return u(u({},t),{},{type:t&&t.type||e,toastId:A(t)})}function q(e){return function(t,n){return F(t,H(e,n))}}function U(e,t){return F(e,H("default",t))}U.loading=function(e,t){return F(e,H("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},U.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=g(o)?U.loading(o,n):U.loading(o.render,u(u({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=u(u(u({type:e},s),n),{},{data:o}),i=g(t)?{render:t}:t;return r?U.update(r,u(u({},a),i)):U(i.render,u(u({},a),i)),o}U.dismiss(r)},l=h(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},U.success=q("success"),U.info=q("info"),U.error=q("error"),U.warning=q("warning"),U.warn=U.warning,U.dark=function(e,t){return F(e,H("default",u({theme:"dark"},t)))},U.dismiss=function(e){M.size>0?x.emit(1,e):D=D.filter((function(t){return null!=e&&t.options.toastId!==e}))},U.clearWaitingQueue=function(e){return void 0===e&&(e={}),x.emit(5,e)},U.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},U.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=M.get(n||j);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=u(u(u({},r),t),{},{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,F(i,a)}}),0)},U.done=function(e){U.update(e,{progress:1})},U.onChange=function(e){return x.on(4,e),function(){x.off(4,e)}},U.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},U.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,(function(e){j=e.containerId||e,M.set(j,e),D.forEach((function(e){x.emit(0,e.content,e.options)})),D=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&x.off(0).off(1).off(5)}));var Q,V,G,W,X,Y,K,$=n(168),J=n(444),ee=J.ZP.div(Q||(Q=(0,$.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),te=J.ZP.form(V||(V=(0,$.Z)(["\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n"]))),ne=J.ZP.input(G||(G=(0,$.Z)(["\n  width: 400px;\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    color: white;\n    background-color: green;\n  }\n"]))),re=J.ZP.button(W||(W=(0,$.Z)(["\n  color: black;\n  background-color: #f5f4fa;\n  font-size: 17px;\n  line-height: 1.62;\n  text-align: center;\n  border: 1px solid #9c9c9c;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  max-width: 300px;\n  transition-property: color, background-color, box-shadow;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: white;\n    background-color: green;\n  }\n"]))),oe=n(184),ae=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,o.Z)(n,2),a=r[0],s=r[1];return(0,oe.jsx)(ee,{children:(0,oe.jsxs)(te,{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),s("")):U.error("Enter a movie title")},children:[(0,oe.jsx)(ne,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"movieTitle",value:a,onChange:function(e){var t=e.currentTarget.value;s(t)}}),(0,oe.jsx)(re,{type:"submit",className:"SearchButton",children:"Search"})]})})},ie=n(689),se=J.ZP.ul(X||(X=(0,$.Z)(["\n  padding: 10px;\n  list-style: none;\n  margin: 0;\n"]))),ce=J.ZP.li(Y||(Y=(0,$.Z)(["\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),ue=(0,J.ZP)(a.rU)(K||(K=(0,$.Z)(["\n  font-size: 16px;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    font-weight: 700;\n    color: green;\n  }\n"]))),le=function(e){var t=e.movies,n=(0,ie.TH)();return(0,oe.jsx)(se,{children:t.length>0&&t.map((function(e){return(0,oe.jsx)(ce,{children:(0,oe.jsx)(ue,{to:"".concat(e.id),state:{from:n},children:e.title?e.title:e.name})},e.id)}))})},de=n(260),fe=function(){var e,t=(0,i.useState)([]),n=(0,o.Z)(t,2),s=n[0],c=n[1],u=(0,a.lr)(),l=(0,o.Z)(u,2),d=l[0],f=l[1],p=null!==(e=d.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){if(""!==p)try{(0,de.$)(d).then((function(e){return c((0,r.Z)(e))}))}catch(e){console.log(e)}}),[p,d]);return(0,oe.jsxs)("main",{children:[(0,oe.jsx)(ae,{value:p,onSubmit:function(e){f({query:e})}}),(0,oe.jsx)(le,{movies:s})]})}}}]);
//# sourceMappingURL=464.8d122ed4.chunk.js.map