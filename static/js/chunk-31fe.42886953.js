(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-31fe"],{"2WEu":function(t,e,a){},"7BsA":function(t,e,a){t.exports=function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!r||!s);l++)o=n[l],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,i){var n,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),o.computed=l}return{esModule:n,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},B04q:function(t,e,a){var i,n,r;n=[e,a("MT78")],void 0===(r="function"==typeof(i=function(t,e){if(e){var a=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];e.registerTheme("vintage",{color:a,backgroundColor:"#fef8ef",graph:{color:a}})}else!function(t){"undefined"!=typeof console&&console&&console.error&&console.error(t)}("ECharts is not Loaded")})?i.apply(e,n):i)||(t.exports=r)},HmEs:function(t,e,a){"use strict";var i=a("KV+v");a.n(i).a},"KV+v":function(t,e,a){},KY90:function(t,e,a){"use strict";var i=a("2WEu");a.n(i).a},L5Ye:function(t,e,a){"use strict";var i=a("qAIL");a.n(i).a},PLwA:function(t,e,a){"use strict";var i={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},n=(a("kWXS"),a("KHd+")),r=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pan-item",style:{zIndex:this.zIndex,height:this.height,width:this.width}},[e("div",{staticClass:"pan-info"},[e("div",{staticClass:"pan-info-roles-container"},[this._t("default")],2)]),this._v(" "),e("img",{staticClass:"pan-thumb",attrs:{src:this.image}})])},[],!1,null,"f67ae59e",null);r.options.__file="index.vue";e.a=r.exports},Zg82:function(t,e,a){},gX0l:function(t,e,a){var i,n,r;n=[e,a("MT78")],void 0===(r="function"==typeof(i=function(t,e){if(e){var a=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],i={color:a,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:a[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:a},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",i)}else!function(t){"undefined"!=typeof console&&console&&console.error&&console.error(t)}("ECharts is not Loaded")})?i.apply(e,n):i)||(t.exports=r)},kWXS:function(t,e,a){"use strict";var i=a("Zg82");a.n(i).a},lAbF:function(t,e,a){"use strict";a.r(e);var i=a("QbLZ"),n=a.n(i),r=a("L2JU"),s=a("7BsA"),o=a.n(s),l=a("t3Un");function c(t){return Object(l.a)({url:"/users",method:"get",params:t})}var d={components:{CountTo:o.a},data:function(){return{users:[],tickets:[],areas:[]}},mounted:function(){this.getListUsers(),this.getListTickets(),this.getListAreas()},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},getListUsers:function(){var t=this;c().then(function(e){t.users=e.data})},getListTickets:function(){var t=this;(function(t){return Object(l.a)({url:"/tickets",method:"get",params:t})})().then(function(e){t.tickets=e.data})},getListAreas:function(){var t=this;(function(t){return Object(l.a)({url:"/areas",method:"get",params:t})})().then(function(e){t.areas=e.data})}}},u=(a("L5Ye"),a("KHd+")),h=Object(u.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Usuarios")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.users.length,duration:2600}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-ticket"},[a("svg-icon",{attrs:{"icon-class":"ticket","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Tickets")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.tickets.length,duration:3e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-bug"},[a("svg-icon",{attrs:{"icon-class":"bug","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Problemas")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":0,duration:3200}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("shoppings")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{attrs:{"icon-class":"tag","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Areas")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.areas.length,duration:3600}})],1)])])],1)},[],!1,null,"92a8276c",null);h.options.__file="PanelGroup.vue";var p=h.exports,m=a("MT78"),f=a.n(m),v=a("7Qib");a("n60c");var g={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({xAxis:{data:["Ene","Feb","Mar","Abr","May","Jun","Jul"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["Atendidos","Cancelados"]},calculable:!0,series:[{name:"Atendidos",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[50,92,81,154,260,230,240]},{name:"Cancelados",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[5,7,9,15,2,30,10]}]})},initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},b=Object(u.a)(g,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);b.options.__file="LineChart.vue";var y=b.exports;a("gX0l");var x={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(v.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Atendidos","En proceso","Cancelados"]},calculable:!0,series:[{name:"ESTADO DE LOS TICKETS",type:"pie",radius:[15,95],center:["50%","40%"],data:[{value:2237,name:"Atendidos"},{value:29,name:"En proceso"},{value:14,name:"Cancelados"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},_=Object(u.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);_.options.__file="PieChart.vue";var C=_.exports;a("gX0l");var w={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null,users:[]}},mounted:function(){var t=this;this.getListUsers(),this.initChart(),this.__resizeHandler=Object(v.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{getListUsers:function(){var t=this;c().then(function(e){t.users=e.data,console.log(t.users)})},initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"line"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},yAxis:[{type:"category",data:["Juan","Carlos","Luis","Ana"],axisTick:{alignWithLabel:!0}}],xAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"Atenciones",type:"bar",stack:"vistors",barWidth:"60%",data:[942,580,262,78],animationDuration:6e3}]})}}},S=Object(u.a)(w,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);S.options.__file="BarChart.vue";var A=S.exports;a("gX0l");var L={props:{className:{type:String,default:"chart2"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(v.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Jun","Jul","Ago","Set","Oct","Nov"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[52,200,334,390,330,220],animationDuration:6e3},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[52,200,334,390,330,220],animationDuration:6e3},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[52,200,334,390,330,220],animationDuration:6e3}]})}}},V=Object(u.a)(L,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);V.options.__file="BarChart2.vue";var D=V.exports;a("B04q");var k={props:{className:{type:String,default:"chart3"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(v.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["Atendidos","En Proceso"]},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Presupuesto","Informatica","Contabilidad"]}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"Atendidos",type:"bar",data:[20,49,70],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]}},{name:"En Proceso",type:"bar",data:[26,59,90],markPoint:{data:[{name:"Max",value:182.2,xAxis:7,yAxis:183},{name:"Min",value:2.3,xAxis:11,yAxis:3}]}}]})}}},E=Object(u.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);E.options.__file="BarChart3.vue";var F={name:"DashboardAdmin",components:{PanelGroup:p,RaddarChart:y,PieChart:C,BarChart:A,BarChart2:D,BarChart3:E.exports},data:function(){return{}},methods:{handleSetLineChartData:function(t){}}},O=(a("KY90"),Object(u.a)(F,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dashboard-editor-container"},[e("panel-group",{on:{handleSetLineChartData:this.handleSetLineChartData}}),this._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("raddar-chart")],1)]),this._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("pie-chart")],1)]),this._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart")],1)])],1),this._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart3")],1)]),this._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("pie-chart")],1)]),this._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart2")],1)])],1)],1)},[],!1,null,"5b0410e5",null));O.options.__file="index.vue";var T=O.exports,z={name:"DashboardEditor",components:{PanThumb:a("PLwA").a},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:n()({},Object(r.b)(["name","avatar","roles"]))},j=(a("HmEs"),Object(u.a)(z,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:" clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v(" Your roles:\n      "),t._v(" "),a("span",{staticClass:"pan-info-roles"},[t._v(t._s(t.roles)+" "+t._s(t.avatar)+" "+t._s(t.name))])]),t._v(" "),a("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),t._v(" "),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},[],!1,null,"e0b6509c",null));j.options.__file="index.vue";var N={name:"Dashboard",components:{adminDashboard:T,editorDashboard:j.exports},data:function(){return{currentRole:"adminDashboard"}},computed:n()({},Object(r.b)(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},q=Object(u.a)(N,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dashboard-container"},[e(this.currentRole,{tag:"component"})],1)},[],!1,null,null,null);q.options.__file="index.vue";e.default=q.exports},n60c:function(t,e,a){var i,n,r;n=[e,a("MT78")],void 0===(r="function"==typeof(i=function(t,e){if(e){var a=["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487"],i={color:a,title:{textStyle:{fontWeight:"normal"}},visualMap:{color:["#1790cf","#a2d4e6"]},toolbox:{iconStyle:{normal:{borderColor:"#06467c"}}},tooltip:{backgroundColor:"rgba(0,0,0,0.6)"},dataZoom:{dataBackgroundColor:"#dedede",fillerColor:"rgba(154,217,247,0.2)",handleColor:"#005eaa"},timeline:{lineStyle:{color:"#005eaa"},controlStyle:{normal:{color:"#005eaa",borderColor:"#005eaa"}}},candlestick:{itemStyle:{normal:{color:"#c12e34",color0:"#2b821d",lineStyle:{width:1,color:"#c12e34",color0:"#2b821d"}}}},graph:{color:a},map:{label:{normal:{textStyle:{color:"#c12e34"}},emphasis:{textStyle:{color:"#c12e34"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#e6b600"}}},gauge:{axisLine:{show:!0,lineStyle:{color:[[.2,"#2b821d"],[.8,"#005eaa"],[1,"#c12e34"]],width:5}},axisTick:{splitNumber:10,length:8,lineStyle:{color:"auto"}},axisLabel:{textStyle:{color:"auto"}},splitLine:{length:12,lineStyle:{color:"auto"}},pointer:{length:"90%",width:3,color:"auto"},title:{textStyle:{color:"#333"}},detail:{textStyle:{color:"auto"}}}};e.registerTheme("shine",i)}else!function(t){"undefined"!=typeof console&&console&&console.error&&console.error(t)}("ECharts is not Loaded")})?i.apply(e,n):i)||(t.exports=r)},qAIL:function(t,e,a){}}]);