(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5c75"],{"5fiW":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i("t3Un");function n(t){return Object(a.a)({url:"api/status",method:"get",params:t})}},GBVI:function(t,e,i){"use strict";i.r(e);var a=i("P2sY"),n=i.n(a),r=i("QbLZ"),s=i.n(r),o=i("Wc5f"),c=i("gJ4V"),d=i("aVgD"),l=i("5fiW"),u=i("WZwz"),p=i("WYbc"),m=i("wk8/"),f=i("aMDH"),h=i("ZySA"),g=i("7Qib"),v=i("L2JU"),b=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"}],y=b.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),_={name:"TicketsTable",directives:{waves:h.a},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return y[t]}},data:function(){return{tableKey:0,tickets:[],service:[],priority:[],status:[],channel:[],area:[],type:[],ticket_types:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,priority:void 0,description:void 0,type:void 0,status:void 0,sort:"+id"},activetab:1,importanceOptions:[1,2,3],calendarTypeOptions:b,sortOptions:[{label:"ID Ascendente",key:"+id"},{label:"ID Descendente",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,userId:8,dataForm:new FormData,temp:{id:"",title:"",description:"",image:void 0,type:[],service:[],priority:[],channel:[],area:[],status:[],ticket_types:[],newComment:"",fileComment:"",updated_at:new Date,created_at:new Date},dialogFormVisible:!1,dialogDetail:!1,dialogStatus:"",dialogEditStatus:!1,textMap:{update:"Editar",create:"Crear",view:"Ver resumen"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"Tipo de Ticket es obligatorio",trigger:"change"}],title:[{required:!0,message:"El título es obligatorio",trigger:"blur"}],description:[{required:!0,message:"La descripción es obligatorio",trigger:"blur"}],priority:[{required:!0,message:"La Prioridad es obligatorio",trigger:"blur"}],service:[{required:!0,message:"El tipo de servicio es obligatorio",trigger:"blur"}],channel:[{required:!0,message:"El tipo de canal es obligatorio",trigger:"blur"}],area:[{required:!0,message:"El tipo dearea es obligatorio",trigger:"blur"}],user:[{required:!0,message:"El usuario es obligatorio",trigger:"blur"}]},downloadLoading:!1}},computed:s()({},Object(v.b)(["name","avatar","roles"]),{roles:function(){return this.$store.getters.roles[0]}}),created:function(){this.getList(),this.getListServices(),this.getListPriority(),this.getListStatus(),this.getListStatusAvailable(),this.getListArea(),this.getListChannels(),this.getListUsers(),this.getListTypes()},methods:{getDate:function(t){return new Date(t).toJSON().slice(0,10).replace(/-/g,"/")},getListServices:function(){var t=this;Object(c.f)().then(function(e){t.service=e.data})},getListTypes:function(){var t=this;Object(f.c)().then(function(e){t.type=e.data})},getListPriority:function(){var t=this;Object(d.c)().then(function(e){t.priority=e.data})},getListStatusAvailable:function(){var t=this;Object(o.h)(this.$route.params.ticketID).then(function(e){t.statusAvailable=e.data})},getListStatus:function(){var t=this;Object(l.a)().then(function(e){t.status=e.data})},getListArea:function(){var t=this;Object(u.c)().then(function(e){t.area=e.data})},getListChannels:function(){var t=this;Object(p.c)().then(function(e){t.channel=e.data})},getListUsers:function(){var t=this;Object(m.e)().then(function(e){t.users=e.data})},cancelEdit:function(){var t=this;Object(o.d)(this.$route.params.ticketID).then(function(e){t.ticket=e.data,t.temp={id:e.data.id,title:e.data.title,description:e.data.description,type:{id:e.data.type.id,name:e.data.type.name},service:{id:e.data.service.id,name:e.data.service.name},priority:{id:e.data.priority.id,name:e.data.priority.name,time:e.data.priority.time},channel:{id:e.data.channel.id,name:e.data.channel.name},area:{id:e.data.area.id,name:e.data.area.name},status:{id:e.data.status.id,name:e.data.status.name},comments:e.data.comments,assigned_to:e.data.asignado?e.data.asignado.name:"No asignado",created_user:e.data.user.name,updated_at:new Date,created_at:new Date,edit:!1},setTimeout(function(){console.log("cancel")},1500)})},getList:function(){var t=this;this.listLoading=!0,Object(o.d)(this.$route.params.ticketID).then(function(e){console.log("DETALLE DEL TICKET"),console.log(e.data),t.ticket=e.data,t.temp={id:e.data.id,title:e.data.title,description:e.data.description,type:{id:e.data.type.id,name:e.data.type.name},service:{id:e.data.service.id,name:e.data.service.name},priority:{id:e.data.priority.id,name:e.data.priority.name,time:e.data.priority.time},channel:{id:e.data.channel.id,name:e.data.channel.name},area:{id:e.data.area.id,name:e.data.area.name},status:{id:e.data.status.id,name:e.data.status.name},assigned_to:e.data.asignado?e.data.asignado.name:"No asignado",created_user:e.data.user.name,comments:e.data.comments.sort(function(t,e){return t.created_at>e.created_at?-1:e.created_at>t.created_at?1:0}),updated_at:new Date,created_at:new Date,edit:!1}})},getListFilterTicket:function(){var t=this;this.listLoading=!0,console.log(this.listQuery),console.log("----------");var e={title:this.listQuery.title,priority_id:this.listQuery.priority,status_id:this.listQuery.status};"undefined"!==this.listQuery.title&&void 0!==this.listQuery.title||delete e.title,"undefined"!==this.listQuery.priority&&void 0!==this.listQuery.priority||delete e.priority_id,"undefined"!==this.listQuery.status&&void 0!==this.listQuery.status||delete e.status_id,console.log(e),Object(o.e)(e).then(function(e){console.log("entro"),t.tickets=e.data.me,console.log(t.tickets),t.total=e.data.length,setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(t){console.log(this.listQuery.type),this.listQuery.page=1,this.getListFilterTicket()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){console.log(t),console.log(e),this.dialogStatus="edit",this.dialogEditStatus=!0,this.$message({message:"Registro Publicado",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:"",title:"",description:"",image:void 0,type:[],service:[],priority:[],channel:[],area:[],status:[],ticket_types:[],updated_at:new Date,created_at:new Date}},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},createData:function(t){var e=this;this.$refs.dataForm.validate(function(t){if(t){var i={channel_id:e.temp.channel,priority_id:e.temp.priority,service_id:e.temp.service,status_id:1,type_id:e.temp.type,title:e.temp.title,sla:"1",description:e.temp.description,user_id:e.temp.users};console.log(e.temp.users),console.log(i),Object(o.c)(i).then(function(){e.dialogFormVisible=!1,e.$notify({title:"Mensaje",message:"Registro creado",type:"success",duration:500}),e.getList(),e.resetTemp()})}})},handleFileUpdate:function(t){console.log(t),this.dataForm.append("files",t[0])},handleFileCommentTicket:function(t,e){window.open("http://40.87.47.203:8080/app/api/files/"+t)},addComment:function(t,e){var i=this,a=this.temp.id;"undefined"!==t&&void 0!==t&&(this.dataForm.delete("text"),this.dataForm.append("text",t),console.log("AGREGAR UN COMENTARIO"),console.log(a),console.log(this.dataForm),Object(o.b)(a,this.dataForm).then(function(){i.$notify({title:"Mensaje",message:"Se añadió un comentario",type:"success",duration:500}),i.getList(),i.temp.newComment="",document.getElementById("fileComment").value="",i.dataForm.delete("files")}))},handleUpdate:function(t){var e=this;this.temp=n()({},t),console.log(this.temp),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleDetail:function(t){var e=this;console.log(t),this.temp=n()({},t),console.log(this.temp),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="view",this.dialogDetail=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){if(void 0===t.temp.statusAvailable)var i={status_id:t.temp.status.id,title:t.temp.title,description:t.temp.description,service_id:t.temp.service.id,type_id:t.temp.type.id};else i={status_id:t.temp.statusAvailable,title:t.temp.title,description:t.temp.description,service_id:t.temp.service.id,type_id:t.temp.type.id};Object(o.j)(t.temp.id,i).then(function(){t.$notify({title:"Mensaje",message:"Item modificado correctamente",type:"success",duration:2e3}),t.getListStatusAvailable(),t.getList()})}})},handleDelete:function(t){this.$notify({title:"Mensaje",message:"Registro borrado",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([i.e("chunk-0d49"),i.e("chunk-b9a8")]).then(i.bind(null,"S/jZ")).then(function(e){var i=t.formatJson(["id","description","type","importance","status"],t.tickets);e.export_json_to_excel({header:["id","description","type","importance","status"],data:i,filename:"ticket-list"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(g.d)(e[t]):e[t]})})}}},j=i("KHd+"),w=Object(j.a)(_,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticStyle:{width:"50%",float:"left"}},[i("h2",{staticStyle:{"margin-left":"45px"}},[t._v("Detalle del ticket")]),t._v(" "),i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px","padding-top":"15px"},attrs:{model:t.temp,"label-position":"left","label-width":"180px"}},[i("div",{staticStyle:{"padding-bottom":"15px"}},[t.temp.edit?i("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))]):i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.temp.edit=!t.temp.edit}}},[t._v(t._s(t.$t("table.edit")))]),t._v(" "),t.temp.edit?i("el-button",{attrs:{type:"danger"},on:{click:t.cancelEdit}},[t._v(t._s(t.$t("table.cancel")))]):t._e()],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[t.temp.edit?i("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}}):i("div",[t._v(t._s(t.temp.title))])],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.description"),prop:"description"}},[t.temp.edit?i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Ingrese un texto"},model:{value:t.temp.description,callback:function(e){t.$set(t.temp,"description",e)},expression:"temp.description"}}):i("div",[t._v(t._s(t.temp.description))])],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[t.temp.edit?i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{placeholder:"Seleccione de la lista"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.type,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})):i("div",[t._v(t._s(t.temp.type.name))])],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.service"),prop:"service"}},[t.temp.edit?i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{placeholder:"Seleccione de la lista"},model:{value:t.temp.service,callback:function(e){t.$set(t.temp,"service",e)},expression:"temp.service"}},t._l(t.service,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})):i("div",[t._v(t._s(t.temp.service.name))])],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.status"),prop:"status"}},[t.temp.edit?i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{placeholder:"Seleccione de la lista"},model:{value:t.temp.status.id,callback:function(e){t.$set(t.temp.status,"id",e)},expression:"temp.status.id"}},t._l(t.statusAvailable,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})):i("div",[t._v(t._s(t.temp.status.name))])],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.priority"),prop:"priority"}},[i("div",[t._v(t._s(t.temp.priority.name))])]),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.channel"),prop:"channel"}},[i("div",[t._v(t._s(t.temp.channel.name))])]),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.area"),prop:"area"}},[i("div",[t._v(t._s(t.temp.area.name))])]),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.assignedTo"),prop:"assignedTo"}},[i("div",[t._v(t._s(t.temp.assigned_to))])]),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.createdAt"),prop:"createdAt"}},[i("div",[t._v(t._s(t.temp.created_user))])])],1)],1),t._v(" "),i("div",{staticStyle:{width:"50%",float:"left"}},[0!=t.temp.comments.length?i("h2",[t._v("Comentarios")]):i("h2",[t._v("No hay comentarios")]),t._v(" "),i("div",[i("el-input",{staticStyle:{"padding-bottom":"7px"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Ingrese su comentario"},model:{value:t.temp.newComment,callback:function(e){t.$set(t.temp,"newComment",e)},expression:"temp.newComment"}}),t._v(" "),i("input",{staticClass:"input-file",attrs:{id:"fileComment",type:"file",accept:"image/*"},on:{change:function(e){t.handleFileUpdate(e.target.files)}}}),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addComment(t.temp.newComment,"")}}},[t._v("Añadir comentario")])],1),t._v(" "),t._l(t.temp.comments,function(e){return i("div",{key:e.id,staticStyle:{"margin-bottom":"17px"}},[i("p",{staticStyle:{"margin-bottom":"7px","font-size":"14px"}},[i("b",[t._v(t._s(e.user.name))]),t._v(" "),i("span",{staticStyle:{color:"gray","font-size":"12px"}},[t._v(t._s(e.created_at))])]),t._v(" "),i("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(e.text))]),i("br"),t._v(" "),e.files.length>0?i("p",{staticStyle:{"margin-bottom":"5px","font-size":"13px"}},[t._v("Archivos adjuntos:")]):t._e(),t._v(" "),t._l(e.files,function(e){return i("div",{key:e.id,staticStyle:{"font-size":"13px"}},[i("a",{on:{click:function(i){t.handleFileCommentTicket(e.randonname,e.originalname)}}},[i("img",{staticStyle:{width:"24px","margin-bottom":"-4px"},attrs:{src:"https://icons-for-free.com/free-icons/png/512/2109135.png"}}),t._v(" "),i("span",[t._v(t._s(e.originalname))])])])})],2)})],2)])},[],!1,null,null,null);w.options.__file="detail_ticket.vue";e.default=w.exports},WYbc:function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"b",function(){return o});var a=i("t3Un");function n(){return Object(a.a)({url:"api/channels",method:"get"})}function r(t){return Object(a.a)({url:"api/channels/create",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"api/channels/"+e+"/update",method:"put",data:t})}function o(t){return Object(a.a)({url:"api/channels/"+t,method:"delete"})}},WZwz:function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"b",function(){return o});var a=i("t3Un");function n(){return Object(a.a)({url:"api/areas",method:"get"})}function r(t,e){return Object(a.a)({url:"api/areas/create",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"api/areas/"+e+"/update",method:"put",data:t})}function o(t){return Object(a.a)({url:"api/areas/"+t,method:"delete"})}},Wc5f:function(t,e,i){"use strict";i.d(e,"f",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"j",function(){return o}),i.d(e,"b",function(){return c}),i.d(e,"e",function(){return d}),i.d(e,"a",function(){return l}),i.d(e,"h",function(){return u}),i.d(e,"g",function(){return p}),i.d(e,"i",function(){return m});var a=i("t3Un");function n(t){return Object(a.a)({url:"api/tickets",method:"post",params:t})}function r(t){return Object(a.a)({url:"api/tickets/save",method:"post",data:t})}function s(t){return Object(a.a)({url:"api/tickets/"+t,method:"get"})}function o(t,e){return Object(a.a)({url:"api/tickets/"+t,method:"put",data:e})}function c(t,e){return Object(a.a)({url:"api/comment/ticket/"+t,method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function d(t){return Object(a.a)({url:"api/tickets",method:"post",data:t})}function l(t,e){return Object(a.a)({url:"api/tickets/assign/"+e,method:"patch",data:t})}function u(t){return Object(a.a)({url:"api/tickets/statusAvailable/"+t,method:"get"})}function p(t){return Object(a.a)({url:"api/tickets/reporting",method:"post",data:t})}function m(){return Object(a.a)({url:"api/tickets/dashboards",method:"post"})}},ZySA:function(t,e,i){"use strict";var a=i("P2sY"),n=i.n(a),r=(i("jUE0"),{bind:function(t,e){t.addEventListener("click",function(i){var a=n()({},e.value),r=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=r.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),c=s.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":((c=document.createElement("span")).className="waves-ripple",c.style.height=c.style.width=Math.max(o.width,o.height)+"px",s.appendChild(c)),r.type){case"center":c.style.top=o.height/2-c.offsetHeight/2+"px",c.style.left=o.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(i.pageY-o.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(i.pageX-o.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=r.color,c.className="waves-ripple z-active",!1}},!1)}}),s=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;e.a=r},aMDH:function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"b",function(){return o});var a=i("t3Un");function n(){return Object(a.a)({url:"api/types",method:"get"})}function r(t,e){return Object(a.a)({url:"api/types/create",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"api/types/"+e+"/update",method:"put",data:t})}function o(t){return Object(a.a)({url:"api/types/"+t,method:"delete"})}},aVgD:function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"b",function(){return o});var a=i("t3Un");function n(){return Object(a.a)({url:"api/priority",method:"get"})}function r(t){return Object(a.a)({url:"api/priority/create",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"api/priority/"+e+"/update",method:"put",data:t})}function o(t){return Object(a.a)({url:"api/priority/"+t,method:"delete"})}},gJ4V:function(t,e,i){"use strict";i.d(e,"f",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"g",function(){return s}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return c}),i.d(e,"e",function(){return d}),i.d(e,"a",function(){return l});var a=i("t3Un");function n(){return Object(a.a)({url:"api/services",method:"get"})}function r(t,e){return Object(a.a)({url:"api/services/create",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"api/services/"+e+"/update",method:"put",data:t})}function o(t){return Object(a.a)({url:"api/services/"+t,method:"delete"})}function c(){return Object(a.a)({url:"api/knowledge",method:"get"})}function d(){return Object(a.a)({url:"api/knowledgeByUser",method:"get"})}function l(t){return Object(a.a)({url:"api/knowledge/create",method:"post",data:t})}},jUE0:function(t,e,i){},"wk8/":function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return s}),i.d(e,"e",function(){return o}),i.d(e,"f",function(){return c}),i.d(e,"a",function(){return d}),i.d(e,"g",function(){return l});var a=i("t3Un");function n(){return Object(a.a)({url:"api/roles",method:"get"})}function r(){return Object(a.a)({url:"api/typeuser",method:"get"})}function s(t){return Object(a.a)({url:"api/users",method:"post",data:{role_id:"1,2,3"}})}function o(t){return Object(a.a)({url:"api/users",method:"post",data:{role_id:"1,3"}})}function c(t){return Object(a.a)({url:"api/users",method:"post",data:{role_id:"2"}})}function d(t){return Object(a.a)({url:"api/users/create",method:"post",data:t})}function l(t,e){return Object(a.a)({url:"api/users/"+e+"/update",method:"put",data:t,params:{id:e}})}}}]);