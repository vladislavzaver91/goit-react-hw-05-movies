"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{7197:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return le}});var o=n(5861),r=n(9439),a=n(4687),i=n.n(a),s=n(1087),c=n(2791),u=n(4942),l=n(1413);function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=n(3433);function p(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var m=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(o&&(o+=" "),o+=t);return o},v=["theme","type"],h=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},E=function(e){return y(e)||T(e)?e:null},b=function(e){return(0,c.isValidElement)(e)||y(e)||T(e)||g(e)};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,u=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,l=e.done,d=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,f.Z)(n)))};(e=t.classList).add.apply(e,(0,f.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(s?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function Z(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var x={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,f.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},I=function(e){var t=e.theme,n=e.type,o=d(e,v);return c.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},_={info:function(e){return c.createElement(I,(0,l.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(I,(0,l.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(I,(0,l.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(I,(0,l.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function O(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,c.useState)([]),a=(0,r.Z)(o,2),i=a[0],s=a[1],u=(0,c.useRef)(null),p=(0,c.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function C(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function I(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function O(){var e=v.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,r=t.staleId,a=d(t,h);if(b(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||p.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,f=a.data,m=v.props,C=function(){return I(i)},L=null==s;L&&v.count++;var N,R,k=(0,l.Z)((0,l.Z)((0,l.Z)({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:s,data:f,closeToast:C,isIn:!1,className:E(a.className||m.toastClassName),bodyClassName:E(a.bodyClassName||m.bodyClassName),progressClassName:E(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(N=a.autoClose,R=m.autoClose,!1===N||g(N)&&N>0?N:R),deleteToast:function(){var e=Z(p.get(i),"removed");p.delete(i),x.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var o=null==i?v.props.limit:1;if(1===t||1===o)v.displayedToast++,O();else{var r=o>t?t:o;v.displayedToast=r;for(var a=0;a<r;a++)O()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(T(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):y(r)||g(r)?a=r:o?a=_.spinner():function(e){return e in _}(n)&&(a=_[n](i))),a}(k),T(a.onOpen)&&(k.onOpen=a.onOpen),T(a.onClose)&&(k.onClose=a.onClose),k.closeButton=m.closeButton,!1===a.closeButton||b(a.closeButton)?k.closeButton=a.closeButton:!0===a.closeButton&&(k.closeButton=!b(m.closeButton)||m.closeButton);var P=e;(0,c.isValidElement)(e)&&!y(e.type)?P=(0,c.cloneElement)(e,{closeToast:C,toastProps:k,data:f}):T(e)&&(P=e({closeToast:C,toastProps:k,data:f})),m.limit&&m.limit>0&&v.count>m.limit&&L?v.queue.push({toastContent:P,toastProps:k,staleId:r}):g(o)?setTimeout((function(){w(P,k,r)}),o):w(P,k,r)}}function w(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),s((function(e){return[].concat((0,f.Z)(e),[o]).filter((function(e){return e!==n}))})),x.emit(4,Z(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return v.containerId=e.containerId,x.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&I(e)})).on(5,C).emit(2,v),function(){p.clear(),x.emit(3,v)}}),[]),(0,c.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",I),document.addEventListener("touchmove",x),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=L(t.nativeEvent),f.y=w(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():C()}}function C(){a(!0)}function Z(){a(!1)}function x(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&Z(),f.x=L(t),f.y=w(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),T(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",C),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(_.onMouseEnter=Z,_.onMouseLeave=C),y&&(_.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:C,pauseToast:Z,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:_}}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,d=e.style,f=e.controlledProgress,p=e.progress,v=e.rtl,h=e.isIn,g=e.theme,y=i||f&&0===p,E=(0,l.Z)((0,l.Z)({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(E.transform="scaleX(".concat(p,")"));var b=m("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),C=T(s)?s({rtl:v,type:a,defaultClassName:b}):m(b,s);return c.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:C,style:E},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){h&&o()}))}var P=function(e){var t=N(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,v=e.closeToast,h=e.transition,g=e.position,y=e.className,E=e.style,b=e.bodyClassName,C=e.bodyStyle,Z=e.progressClassName,x=e.progressStyle,I=e.updateId,_=e.role,O=e.progress,L=e.rtl,w=e.toastId,P=e.deleteToast,M=e.isIn,B=e.isLoading,A=e.iconOut,D=e.closeOnClick,z=e.theme,S=m("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),j=T(y)?y({rtl:L,position:g,type:f,defaultClassName:S}):m(S,y),F=!!O||!u,q={closeToast:v,type:f,theme:z},H=null;return!1===i||(H=T(i)?i(q):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,q):R(q)),c.createElement(h,{isIn:M,done:P,position:g,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,l.Z)((0,l.Z)({id:w,onClick:d,className:j},a),{},{style:E,ref:r}),c.createElement("div",(0,l.Z)((0,l.Z)({},M&&{role:_}),{},{className:T(b)?b({type:f}):m("Toastify__toast-body",b),style:C}),null!=A&&c.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},A),c.createElement("div",null,s)),H,c.createElement(k,(0,l.Z)((0,l.Z)({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:z,delay:u,isRunning:n,isIn:M,closeToast:v,hide:p,type:f,style:x,className:Z,controlledProgress:F,progress:O||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},B=C(M("bounce",!0)),A=(C(M("slide",!0)),C(M("zoom")),C(M("flip")),(0,c.forwardRef)((function(e,t){var n=O(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,d=e.containerId;function f(e){var t=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(i)?i({position:e,rtl:u,defaultClassName:t}):m(t,E(i))}return(0,c.useEffect)((function(){t&&(t.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:d},o((function(e,t){var n=t.length?(0,l.Z)({},s):(0,l.Z)((0,l.Z)({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(P,(0,l.Z)((0,l.Z)({},r),{},{isIn:a(r.toastId),style:(0,l.Z)((0,l.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,z=new Map,S=[],j=1;function F(){return""+j++}function q(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:F()}function H(e,t){return z.size>0?x.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function Q(e,t){return(0,l.Z)((0,l.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function V(e){return function(t,n){return H(t,Q(e,n))}}function G(e,t){return H(e,Q("default",t))}G.loading=function(e,t){return H(e,Q("default",(0,l.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=y(r)?G.loading(r,n):G.loading(r.render,(0,l.Z)((0,l.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=(0,l.Z)((0,l.Z)((0,l.Z)({type:e},s),n),{},{data:r}),i=y(t)?{render:t}:t;return o?G.update(o,(0,l.Z)((0,l.Z)({},a),i)):G(i.render,(0,l.Z)((0,l.Z)({},a),i)),r}G.dismiss(o)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},G.success=V("success"),G.info=V("info"),G.error=V("error"),G.warning=V("warning"),G.warn=G.warning,G.dark=function(e,t){return H(e,Q("default",(0,l.Z)({theme:"dark"},t)))},G.dismiss=function(e){z.size>0?x.emit(1,e):S=S.filter((function(t){return null!=e&&t.options.toastId!==e}))},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),x.emit(5,e)},G.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||D);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,l.Z)((0,l.Z)((0,l.Z)({},o),t),{},{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,H(i,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return x.on(4,e),function(){x.off(4,e)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,(function(e){D=e.containerId||e,z.set(D,e),S.forEach((function(e){x.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&x.off(0).off(1).off(5)}));var U,Y,W,X,K,J=n(8594),$=n(4723),ee=n(168),te=n(7691),ne=n(9128),oe=te.ZP.div(U||(U=(0,ee.Z)(["\n    display: flex;\n    align-items: center;\n"]))),re=te.ZP.form(Y||(Y=(0,ee.Z)(["\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: 16px;\n"]))),ae=te.ZP.button(W||(W=(0,ee.Z)(["\n    width: 40px;\n    height: 40px;\n    border-radius: 4px;\n"]))),ie=(0,te.ZP)(ne.G4C)(X||(X=(0,ee.Z)(["\n    width: 20px;\n    height: 20px;\n"]))),se=te.ZP.input(K||(K=(0,ee.Z)(["\n    display: inline-block;\n    width: 300px;\n    height: 40px;\n    font: inherit;\n    font-size: 20px;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    &::placeholder {\n        font: inherit;\n        font-size: 18px;\n    }\n"]))),ce=n(184),ue=function(e){var t=e.onSubmit;return(0,ce.jsx)(oe,{children:(0,ce.jsxs)(re,{onSubmit:function(e){e.preventDefault(),t(e.target.query.value),e.target.reset()},children:[(0,ce.jsx)(se,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,ce.jsx)(ae,{type:"submit",children:(0,ce.jsx)(ie,{})})]})})},le=function(){var e,t=(0,c.useState)([]),n=(0,r.Z)(t,2),a=n[0],u=n[1],l=(0,s.lr)(),d=(0,r.Z)(l,2),f=d[0],p=d[1],m=null!==(e=f.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,J.Ai)(m);case 5:t=e.sent,0===(n=t.results).length&&G.error("Unfortunately, your search returned no results."),u(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]);return(0,ce.jsxs)("main",{children:[(0,ce.jsx)(ue,{onSubmit:function(e){""!==e?p(""!==e?{query:e.trim()}:{}):G.error("You have not entered anything!")}}),a.length>0&&(0,ce.jsx)($.O,{movies:a}),(0,ce.jsx)(A,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}}]);
//# sourceMappingURL=197.40b47652.chunk.js.map