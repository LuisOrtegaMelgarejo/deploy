(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f4d8"],{Add6:function(t,e,i){},cyBF:function(t,e,i){"use strict";i.r(e);var n=i("wkzA"),o=(i("Add6"),[{element:".hamburger-container",popover:{title:"Menu",description:"Abrir  y cerrar menu lateral",position:"bottom"}},{element:".breadcrumb-container",popover:{title:"Navegación",description:"Indica la ubicación de la pagina actual",position:"bottom"}},{element:".screenfull",popover:{title:"Pantalla Completa",description:"Cambiar a pantalla completa",position:"left"}},{element:".international-icon",popover:{title:"Idioma",description:"Cambiar el idioma del sistema",position:"left"}},{element:".theme-switch",popover:{title:"Tema",description:"Personalizar el tema del sistema",position:"left"}},{element:".tags-view-container",popover:{title:"Historial",description:"Historial de las paginas visitadas",position:"bottom"}}]),s=new n({animate:!0,opacity:.75,padding:10,allowClose:!0,overlayClickNext:!1,doneBtnText:"Terminar",closeBtnText:"Cerrar",stageBackground:"#ffffff",nextBtnText:"Siguiente",prevBtnText:"Anterior",showButtons:!0,keyboardControl:!0,scrollIntoViewOptions:{},onHighlightStarted:function(t){},onHighlighted:function(t){},onDeselected:function(t){},onReset:function(t){},onNext:function(t){},onPrevious:function(t){}}),r={name:"Guide",data:function(){return{driver:null}},mounted:function(){this.driver=s},methods:{guide:function(){this.driver.defineSteps(o),this.driver.start()}}},l=i("KHd+"),a=Object(l.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("p",{staticClass:"warn-content"},[t._v("\n    "+t._s(t.$t("guide.description"))+"\n  ")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.guide(e)}}},[t._v(t._s(t.$t("guide.button")))])],1)},[],!1,null,null,null);a.options.__file="index.vue";e.default=a.exports},wkzA:function(t,e,i){window,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=10)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.createNodeFromString=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.getStyleProperty=function t(e,i){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]){for(var n=["","-webkit-","-ms-","moz-","-o-"],o=0;o<n.length;o++){var s=t(e,n[o]+i);if(s)return s}return""}var r="";return e.currentStyle?r=e.currentStyle[i]:document.defaultView&&document.defaultView.getComputedStyle&&(r=document.defaultView.getComputedStyle(e,null).getPropertyValue(i)),r&&r.toLowerCase?r.toLowerCase():r},e.isDomElement=function(t){return t&&"object"===(void 0===t?"undefined":n(t))&&"nodeType"in t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.OVERLAY_OPACITY=.75,e.OVERLAY_PADDING=10,e.SHOULD_ANIMATE_OVERLAY=!0,e.SHOULD_OUTSIDE_CLICK_CLOSE=!0,e.ALLOW_KEYBOARD_CONTROL=!0,e.SHOULD_OUTSIDE_CLICK_NEXT=!1,e.ESC_KEY_CODE=27,e.LEFT_KEY_CODE=37,e.RIGHT_KEY_CODE=39;var n=e.ID_OVERLAY="driver-page-overlay",o=e.ID_STAGE="driver-highlighted-element-stage",s=e.ID_POPOVER="driver-popover-item",r=(e.CLASS_DRIVER_HIGHLIGHTED_ELEMENT="driver-highlighted-element",e.CLASS_POSITION_RELATIVE="driver-position-relative",e.CLASS_FIX_STACKING_CONTEXT="driver-fix-stacking",e.CLASS_STAGE_NO_ANIMATION="driver-stage-no-animation",e.CLASS_POPOVER_TIP="driver-popover-tip"),l=e.CLASS_POPOVER_TITLE="driver-popover-title",a=e.CLASS_POPOVER_DESCRIPTION="driver-popover-description",h=e.CLASS_POPOVER_FOOTER="driver-popover-footer",d=e.CLASS_CLOSE_BTN="driver-close-btn",u=e.CLASS_NEXT_STEP_BTN="driver-next-btn",c=e.CLASS_PREV_STEP_BTN="driver-prev-btn";e.CLASS_BTN_DISABLED="driver-disabled",e.ANIMATION_DURATION_MS=400,e.POPOVER_HTML='\n  <div id="'+s+'">\n    <div class="'+r+'"></div>\n    <div class="'+l+'">Popover Title</div>\n    <div class="'+a+'">Popover Description</div>\n    <div class="'+h+'">\n      <button class="'+d+'">Close</button>\n      <span class="driver-btn-group">\n        <button class="'+c+'">&larr; Previous</button>\n        <button class="'+u+'">Next &rarr;</button>\n      </span>\n    </div>\n  </div>',e.OVERLAY_HTML='<div id="'+n+'"></div>',e.STAGE_HTML='<div id="'+o+'"></div>'},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),r=i(0),l=i(6),a=(n=l)&&n.__esModule?n:{default:n},h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.node,n=e.options,o=e.popover,s=e.stage,r=e.overlay,l=e.window,a=e.document;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.node=i,this.document=a,this.window=l,this.options=n,this.overlay=r,this.popover=o,this.stage=s,this.animationTimeout=null}return o(t,[{key:"isInView",value:function(){for(var t=this.node.offsetTop,e=this.node.offsetLeft,i=this.node.offsetWidth,n=this.node.offsetHeight,o=this.node;o.offsetParent;)t+=(o=o.offsetParent).offsetTop,e+=o.offsetLeft;return t>=this.window.pageYOffset&&e>=this.window.pageXOffset&&t+n<=this.window.pageYOffset+this.window.innerHeight&&e+i<=this.window.pageXOffset+this.window.innerWidth}},{key:"scrollManually",value:function(){var t=this.node.getBoundingClientRect().top+this.window.pageYOffset-this.window.innerHeight/2;this.window.scrollTo(0,t)}},{key:"bringInView",value:function(){if(!this.isInView())if(this.node.scrollIntoView)try{this.node.scrollIntoView(this.options.scrollIntoViewOptions||{behavior:"instant",block:"center"})}catch(t){this.scrollManually()}else this.scrollManually()}},{key:"getCalculatedPosition",value:function(){var t=this.document.body,e=this.document.documentElement,i=this.window,n=this.window.pageYOffset||e.scrollTop||t.scrollTop,o=i.pageXOffset||e.scrollLeft||t.scrollLeft,s=this.node.getBoundingClientRect();return new a.default({top:s.top+n,left:s.left+o,right:s.left+o+s.width,bottom:s.top+n+s.height})}},{key:"getPopover",value:function(){return this.popover}},{key:"onDeselected",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.hidePopover(),t&&this.hideStage(),this.removeHighlightClasses(),this.window.clearTimeout(this.animationTimeout),this.options.onDeselected&&this.options.onDeselected(this)}},{key:"isSame",value:function(t){return!(!t||!t.node)&&t.node===this.node}},{key:"onHighlightStarted",value:function(){this.options.onHighlightStarted&&this.options.onHighlightStarted(this)}},{key:"onHighlighted",value:function(){this.showPopover(),this.showStage(),this.addHighlightClasses();var t=this.popover;t&&!t.isInView()&&t.bringInView(),this.isInView()||this.bringInView(),this.options.onHighlighted&&this.options.onHighlighted(this)}},{key:"removeHighlightClasses",value:function(){this.node.classList.remove(s.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.node.classList.remove(s.CLASS_POSITION_RELATIVE);for(var t=this.document.querySelectorAll("."+s.CLASS_FIX_STACKING_CONTEXT),e=0;e<t.length;e++)t[e].classList.remove(s.CLASS_FIX_STACKING_CONTEXT)}},{key:"addHighlightClasses",value:function(){this.node.classList.add(s.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.canMakeRelative()&&this.node.classList.add(s.CLASS_POSITION_RELATIVE),this.fixStackingContext()}},{key:"fixStackingContext",value:function(){for(var t=this.node.parentNode;t&&t.tagName&&"body"!==t.tagName.toLowerCase();){var e=(0,r.getStyleProperty)(t,"z-index"),i=parseFloat((0,r.getStyleProperty)(t,"opacity")),n=(0,r.getStyleProperty)(t,"transform",!0),o=(0,r.getStyleProperty)(t,"transform-style",!0),l=(0,r.getStyleProperty)(t,"transform-box",!0),a=(0,r.getStyleProperty)(t,"filter",!0),h=(0,r.getStyleProperty)(t,"perspective",!0);(/[0-9]+/.test(e)||i<1||n&&"none"!==n||o&&"flat"!==o||l&&"border-box"!==l||a&&"none"!==a||h&&"none"!==h)&&t.classList.add(s.CLASS_FIX_STACKING_CONTEXT),t=t.parentNode}}},{key:"canMakeRelative",value:function(){var t=this.getStyleProperty("position");return-1===["absolute","fixed","relative"].indexOf(t)}},{key:"getStyleProperty",value:function(t){return(0,r.getStyleProperty)(this.node,t)}},{key:"showStage",value:function(){this.stage.show(this.getCalculatedPosition())}},{key:"getNode",value:function(){return this.node}},{key:"hideStage",value:function(){this.stage.hide()}},{key:"hidePopover",value:function(){this.popover&&this.popover.hide()}},{key:"showPopover",value:function(){var t=this;if(this.popover){var e=this.getCalculatedPosition(),i=s.ANIMATION_DURATION_MS;this.options.animate&&this.overlay.lastHighlightedElement||(i=0),this.animationTimeout=this.window.setTimeout(function(){t.popover.show(e)},i)}}},{key:"getFullPageSize",value:function(){var t=this.document.body,e=this.document.documentElement;return{height:Math.max(t.scrollHeight,t.offsetHeight,e.scrollHeight,e.offsetHeight),width:Math.max(t.scrollWidth,t.offsetWidth,e.scrollWidth,e.offsetWidth)}}},{key:"getSize",value:function(){return{height:Math.max(this.node.scrollHeight,this.node.offsetHeight),width:Math.max(this.node.scrollWidth,this.node.offsetWidth)}}}]),t}();e.default=h,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),r=i(0),l=i(2),a=(n=l)&&n.__esModule?n:{default:n},h=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.options=t,o.window=i,o.document=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),o(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(s.ID_STAGE);t||(t=(0,r.createNodeFromString)(s.STAGE_HTML),document.body.appendChild(t)),this.node=t,this.options.animate?this.node.classList.remove(s.CLASS_STAGE_NO_ANIMATION):this.node.classList.add(s.CLASS_STAGE_NO_ANIMATION)}},{key:"hide",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"setInitialStyle",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right=""}},{key:"show",value:function(t){this.makeNode(),this.setInitialStyle();var e=2*this.options.padding,i=t.right-t.left+e,n=t.bottom-t.top+e;this.node.style.display="block",this.node.style.position="absolute",this.node.style.width=i+"px",this.node.style.height=n+"px",this.node.style.top=t.top-e/2+"px",this.node.style.left=t.left-e/2+"px",this.node.style.backgroundColor=this.options.stageBackground}}]),e}();e.default=h,t.exports=e.default},function(t,e,i){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-t)),o=window.setTimeout(function(){e(i+n)},n);return t=i+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(2),l=(n=r)&&n.__esModule?n:{default:n},a=i(1),h=i(0),d=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.options=o({isFirst:!0,isLast:!0,totalCount:1,currentIndex:0,showButtons:!0,closeBtnText:"Close",doneBtnText:"Done",startBtnText:"Next &rarr;",nextBtnText:"Next &rarr;",prevBtnText:"&larr; Previous"},t),s.window=i,s.document=n,s.makeNode(),s.hide(),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l.default),s(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(a.ID_POPOVER);t||(t=(0,h.createNodeFromString)(a.POPOVER_HTML),document.body.appendChild(t)),this.node=t,this.tipNode=t.querySelector("."+a.CLASS_POPOVER_TIP),this.titleNode=t.querySelector("."+a.CLASS_POPOVER_TITLE),this.descriptionNode=t.querySelector("."+a.CLASS_POPOVER_DESCRIPTION),this.footerNode=t.querySelector("."+a.CLASS_POPOVER_FOOTER),this.nextBtnNode=t.querySelector("."+a.CLASS_NEXT_STEP_BTN),this.prevBtnNode=t.querySelector("."+a.CLASS_PREV_STEP_BTN),this.closeBtnNode=t.querySelector("."+a.CLASS_CLOSE_BTN)}},{key:"getTitleNode",value:function(){return this.titleNode}},{key:"getDescriptionNode",value:function(){return this.descriptionNode}},{key:"hide",value:function(){this.node.style.display="none"}},{key:"setInitialState",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right="",this.node.querySelector("."+a.CLASS_POPOVER_TIP).className=a.CLASS_POPOVER_TIP}},{key:"show",value:function(t){switch(this.setInitialState(),this.titleNode.innerHTML=this.options.title,this.descriptionNode.innerHTML=this.options.description||"",this.renderButtons(),this.options.position){case"left":this.positionOnLeft(t);break;case"right":this.positionOnRight(t);break;case"top":this.positionOnTop(t);break;case"bottom":this.positionOnBottom(t);break;case"auto":default:this.autoPosition(t)}}},{key:"renderButtons",value:function(){this.nextBtnNode.innerHTML=this.options.nextBtnText,this.prevBtnNode.innerHTML=this.options.prevBtnText,this.closeBtnNode.innerHTML=this.options.closeBtnText,this.options.showButtons&&this.options.totalCount&&1!==this.options.totalCount?(this.footerNode.style.display="block",this.options.isFirst?(this.prevBtnNode.classList.add(a.CLASS_BTN_DISABLED),this.nextBtnNode.innerHTML=this.options.startBtnText):this.prevBtnNode.classList.remove(a.CLASS_BTN_DISABLED),this.options.isLast?this.nextBtnNode.innerHTML=this.options.doneBtnText:this.nextBtnNode.innerHTML=this.options.nextBtnText):this.footerNode.style.display="none"}},{key:"positionOnLeft",value:function(t){var e=this.getSize().width,i=this.options.padding+10;this.node.style.left=t.left-e-i+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("right")}},{key:"positionOnRight",value:function(t){var e=this.options.padding+10;this.node.style.left=t.right+e+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("left")}},{key:"positionOnTop",value:function(t){var e=this.getSize().height,i=this.options.padding+10;this.node.style.top=t.top-e-i+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("bottom")}},{key:"positionOnBottom",value:function(t){var e=this.options.padding+10;this.node.style.top=t.bottom+e+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("top")}},{key:"autoPosition",value:function(t){var e=this.getFullPageSize(),i=this.getSize(),n=e.height,o=i.height,s=this.options.padding+10;t.bottom+o+s>=n?this.positionOnTop(t):this.positionOnBottom(t)}}]),e}();e.default=d,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.left,n=void 0===i?0:i,o=e.top,s=void 0===o?0:o,r=e.right,l=void 0===r?0:r,a=e.bottom,h=void 0===a?0:a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.left=n,this.right=l,this.top=s,this.bottom=h}return n(t,[{key:"canHighlight",value:function(){return this.left<this.right&&this.top<this.bottom}},{key:"equals",value:function(t){return Math.round(this.left)===Math.round(t.left)&&Math.round(this.right)===Math.round(t.right)&&Math.round(this.top)===Math.round(t.top)&&Math.round(this.bottom)===Math.round(t.bottom)}}]),t}();e.default=o,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(1),s=i(0),r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.highlightedElement=null,this.lastHighlightedElement=null,this.hideTimer=null,this.window=i,this.document=n,this.removeNode=this.removeNode.bind(this)}return n(t,[{key:"makeNode",value:function(){var t=this.document.getElementById(o.ID_OVERLAY);t||(t=(0,s.createNodeFromString)(o.OVERLAY_HTML),document.body.appendChild(t)),this.node=t,this.node.style.opacity="0",this.options.animate||this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"highlight",value:function(t){t&&t.node?t.isSame(this.highlightedElement)||(this.window.clearTimeout(this.hideTimer),t.onHighlightStarted(),this.highlightedElement&&!this.highlightedElement.isSame(this.lastHighlightedElement)&&this.highlightedElement.onDeselected(),t.getCalculatedPosition().canHighlight()&&(this.lastHighlightedElement=this.highlightedElement,this.highlightedElement=t,this.show(),this.highlightedElement.onHighlighted())):console.warn("Invalid element to highlight. Must be an instance of `Element`")}},{key:"show",value:function(){var t=this;this.node&&this.node.parentElement||(this.makeNode(),window.setTimeout(function(){t.node.style.opacity=""+t.options.opacity,t.node.style.position="fixed",t.node.style.left="0",t.node.style.top="0",t.node.style.bottom="0",t.node.style.right="0"}))}},{key:"getHighlightedElement",value:function(){return this.highlightedElement}},{key:"getLastHighlightedElement",value:function(){return this.lastHighlightedElement}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.onReset&&this.options.onReset(),this.highlightedElement&&this.highlightedElement.onDeselected(!0),this.highlightedElement=null,this.lastHighlightedElement=null,this.node&&(this.window.clearTimeout(this.hideTimer),this.options.animate&&!t?(this.node.style.opacity="0",this.hideTimer=this.window.setTimeout(this.removeNode,o.ANIMATION_DURATION_MS)):this.removeNode())}},{key:"removeNode",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"refresh",value:function(){this.highlightedElement&&(this.highlightedElement.showPopover(),this.highlightedElement.showStage())}}]),t}();e.default=r,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=u(i(7)),r=u(i(2)),l=u(i(5));i(4);var a=i(1),h=u(i(3)),d=i(0);function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n({animate:a.SHOULD_ANIMATE_OVERLAY,opacity:a.OVERLAY_OPACITY,padding:a.OVERLAY_PADDING,scrollIntoViewOptions:null,allowClose:a.SHOULD_OUTSIDE_CLICK_CLOSE,keyboardControl:a.ALLOW_KEYBOARD_CONTROL,overlayClickNext:a.SHOULD_OUTSIDE_CLICK_NEXT,stageBackground:"#ffffff",onHighlightStarted:function(){},onHighlighted:function(){},onDeselected:function(){},onReset:function(){}},e),this.document=document,this.window=window,this.isActivated=!1,this.steps=[],this.currentStep=0,this.overlay=new s.default(this.options,window,document),this.onResize=this.onResize.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onClick=this.onClick.bind(this),this.bind()}return o(t,[{key:"bind",value:function(){this.window.addEventListener("resize",this.onResize,!1),this.window.addEventListener("keyup",this.onKeyUp,!1),this.window.addEventListener("click",this.onClick,!1)}},{key:"onClick",value:function(t){if(this.isActivated&&this.hasHighlightedElement()){var e=this.overlay.getHighlightedElement(),i=this.document.getElementById(a.ID_POPOVER),n=e.node.contains(t.target),o=i&&i.contains(t.target);if(n||o||!this.options.overlayClickNext)if(n||o||!this.options.allowClose){var s=t.target.classList.contains(a.CLASS_NEXT_STEP_BTN),r=t.target.classList.contains(a.CLASS_PREV_STEP_BTN);t.target.classList.contains(a.CLASS_CLOSE_BTN)?this.reset():s?this.moveNext():r&&this.movePrevious()}else this.reset();else this.moveNext()}}},{key:"onResize",value:function(){this.isActivated&&this.overlay.refresh()}},{key:"onKeyUp",value:function(t){this.isActivated&&this.options.keyboardControl&&(t.keyCode===a.ESC_KEY_CODE&&this.options.allowClose?this.reset():0!==this.steps.length&&(t.keyCode===a.RIGHT_KEY_CODE?this.moveNext():t.keyCode===a.LEFT_KEY_CODE&&this.movePrevious()))}},{key:"movePrevious",value:function(){this.currentStep-=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"moveNext",value:function(){this.currentStep+=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"hasNextStep",value:function(){return!!this.steps[this.currentStep+1]}},{key:"hasPreviousStep",value:function(){return!!this.steps[this.currentStep-1]}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.currentStep=0,this.isActivated=!1,this.overlay.clear(t)}},{key:"hasHighlightedElement",value:function(){var t=this.overlay.getHighlightedElement();return t&&t.node}},{key:"getHighlightedElement",value:function(){return this.overlay.getHighlightedElement()}},{key:"getLastHighlightedElement",value:function(){return this.overlay.getLastHighlightedElement()}},{key:"defineSteps",value:function(t){this.steps=[];for(var e=0;e<t.length;e++){var i=this.prepareElementFromStep(t[e],t,e);i&&this.steps.push(i)}}},{key:"prepareElementFromStep",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o={},s=t,a="string"!=typeof t&&!(0,d.isDomElement)(t);if(!t||a&&!t.element)throw new Error("Element is required in step "+i);a&&(s=t.element,o=n({},this.options,t));var u=(0,d.isDomElement)(s)?s:this.document.querySelector(s);if(!u)return console.warn("Element to highlight "+s+" not found"),null;var c=null;if(o.popover&&o.popover.title){var p=n({},this.options,o.popover,{totalCount:e.length,currentIndex:i,isFirst:0===i,isLast:i===e.length-1});c=new l.default(p,this.window,this.document)}var f=n({},this.options,o),v=new h.default(f,this.window,this.document);return new r.default({node:u,options:o,popover:c,stage:v,overlay:this.overlay,window:this.window,document:this.document})}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.steps||0===this.steps.length)throw new Error("There are no steps defined to iterate");this.isActivated=!0,this.currentStep=t,this.overlay.highlight(this.steps[t])}},{key:"highlight",value:function(t){this.isActivated=!0;var e=this.prepareElementFromStep(t);e&&this.overlay.highlight(e)}}]),t}();e.default=c,t.exports=e.default},function(t,e){},function(t,e,i){i(9),t.exports=i(8)}])}}]);