(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ebbb"],{"RU/L":function(e,t,a){a("Rqdy");var i=a("WEpk").Object;e.exports=function(e,t,a){return i.defineProperty(e,t,a)}},Rnvl:function(e,t,a){"use strict";a.r(t);var i=a("YEIV"),l=a.n(i),n=a("wk8/"),r=a("WZwz"),o={name:"InlineEditTable",filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]}},data:function(){var e;return{users:[],areas:[],roles:[],types:[],listLoading:!0,listQuery:{page:1,limit:10},temp:(e={id:void 0,email:"",name:"",last_name:"",password:"",area_id:""},l()(e,"password",""),l()(e,"role_id",""),l()(e,"type_id",""),e),dialogFormVisible:!1,dialogConfirmDelete:!1,dialogStatus:"",textMap:{update:"Editar",create:"Crear",delete:"Eliminar"}}},created:function(){this.getList(),this.getListArea(),this.getListRoles(),this.getListTypes()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(n.d)().then(function(t){var a=t.data;e.users=a.map(function(t){return e.$set(t,"edit",!1),t.originalName=t.name,t.originalLastName=t.last_name,t.originalEmail=t.email,t.originalPassword=t.password,t.originalAreaId=t.area.id,t.originalRoleId=t.roles[0].id,t.originalAreaName=t.area.name,t.originalTypeName=t.type.name,t.originalRoleName=t.roles[0].name,t}),e.listLoading=!1})},getListRoles:function(){var e=this;Object(n.b)().then(function(t){e.roles=t.data})},getListArea:function(){var e=this;Object(r.c)().then(function(t){e.areas=t.data})},getListTypes:function(){var e=this;Object(n.c)().then(function(t){e.types=t.data})},cancelEdit:function(e){e.name=e.originalName,e.last_name=e.originalLastName,e.email=e.originalEmail,e.password=e.originalPassword,e.area.id=e.originalAreaId,e.roles[0].id=e.originalRoleId,e.area.name=e.originalAreaName,e.type.name=e.originalTypeName,e.roles[0].name=e.originalRoleName,e.edit=!1,this.$message({message:"El campo se ha restaurado con su valor original",type:"warning"})},confirmEdit:function(e){var t=this;e.edit=!1,e.roles[0].name=this.roles.filter(function(t){return t.id==e.roles[0].id})[0].name,e.area.name=this.areas.filter(function(t){return t.id==e.area.id})[0].name,e.type.name=this.types.filter(function(t){return t.id==e.type.id})[0].name,e.originalName=e.name,e.originalLastName=e.last_name,e.originalEmail=e.email,e.originalPassword=e.password,e.originalAreaId=e.area.id,e.originalRoleId=e.roles[0].id,e.originalAreaName=e.area.name,e.originalTypeName=e.type.name,e.originalRoleName=e.roles[0].name;var a={email:e.email,name:e.name,last_name:e.last_name,password:e.password,role_id:e.roles[0].id,area_id:e.area.id,type_id:e.type.id};Object(n.g)(a,e.id).then(function(){t.$message({message:"EL campo de ha modificado",type:"success"})})},resetTemp:function(){this.temp={id:void 0,name:"",time:0}},handleDelete:function(e){this.dialogStatus="delete",this.dialogConfirmDelete=!0,this.idDelete=e.id},deleteData:function(e){var t=this;deleteUser(e).then(function(){t.dialogConfirmDelete=!1,t.getList(),t.$message({message:"El usuario ha sido eliminado",type:"success"})})},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&Object(n.a)(e.temp).then(function(){e.users.unshift(e.temp),e.dialogFormVisible=!1,e.getList(),e.$notify({title:"Mensaje",message:"Registro creado",type:"success",duration:2e3})})})}}},s=(a("geON"),a("KHd+")),c=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Email","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.email,callback:function(a){e.$set(t.row,"email",a)},expression:"scope.row.email"}})]:a("span",[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Nombre","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]:a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Apellidos","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.last_name,callback:function(a){e.$set(t.row,"last_name",a)},expression:"scope.row.last_name"}})]:a("span",[e._v(e._s(t.row.last_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Password","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-input",{staticClass:"edit-input",attrs:{type:"password",size:"small"},model:{value:t.row.password,callback:function(a){e.$set(t.row,"password",a)},expression:"scope.row.password"}})]:a("span",[e._v("*************")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Area","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:t.row.area.id,callback:function(a){e.$set(t.row.area,"id",a)},expression:"scope.row.area.id"}},e._l(e.areas,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))]:a("span",[e._v(e._s(t.row.area.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Tipo","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:t.row.type.id,callback:function(a){e.$set(t.row.type,"id",a)},expression:"scope.row.type.id"}},e._l(e.types,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))]:a("span",[e._v(e._s(t.row.type.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Rol","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:t.row.roles[0].id,callback:function(a){e.$set(t.row.roles[0],"id",a)},expression:"scope.row.roles[0].id"}},e._l(e.roles,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))]:a("span",[e._v(e._s(t.row.roles[0].name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Acciones",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(a){e.confirmEdit(t.row)}}},[e._v("Ok")]):a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(e){t.row.edit=!t.row.edit}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),t.row.edit?e._e():a("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete")))]),e._v(" "),t.row.edit?a("el-button",{attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(a){e.cancelEdit(t.row)}}},[e._v(e._s(e.$t("table.cancel")))]):e._e()]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogConfirmDelete},on:{"update:visible":function(t){e.dialogConfirmDelete=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"0px"},attrs:{"label-position":"left","label-width":"90px"}},[a("div",[e._v("¿Seguro que quieres eliminar este usuario?")])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogConfirmDelete=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.deleteData(e.idDelete)}}},[e._v(e._s(e.$t("table.delete")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"90px"}},[a("el-form-item",{attrs:{label:e.$t("table.email"),prop:"name"}},[a("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.name"),prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.last_name"),prop:"last_name"}},[a("el-input",{model:{value:e.temp.last_name,callback:function(t){e.$set(e.temp,"last_name",t)},expression:"temp.last_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.password"),prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.areas"),prop:"areas"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:e.temp.area_id,callback:function(t){e.$set(e.temp,"area_id",t)},expression:"temp.area_id"}},e._l(e.areas,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.types"),prop:"types"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:e.temp.type_id,callback:function(t){e.$set(e.temp,"type_id",t)},expression:"temp.type_id"}},e._l(e.types,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.roles"),prop:"roles"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Seleccione de la lista"},model:{value:e.temp.role_id,callback:function(t){e.$set(e.temp,"role_id",t)},expression:"temp.role_id"}},e._l(e.roles,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateServices}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},[],!1,null,"6b583bdc",null);c.options.__file="users.vue";t.default=c.exports},Rqdy:function(e,t,a){var i=a("Y7ZC");i(i.S+i.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(e,t,a){e.exports={default:a("RU/L"),__esModule:!0}},WZwz:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"a",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"b",function(){return o});var i=a("t3Un");function l(){return Object(i.a)({url:"api/areas",method:"get"})}function n(e,t){return Object(i.a)({url:"api/areas/create",method:"post",data:e})}function r(e,t){return Object(i.a)({url:"api/areas/"+t+"/update",method:"put",data:e})}function o(e){return Object(i.a)({url:"api/areas/"+e,method:"delete"})}},YEIV:function(e,t,a){"use strict";t.__esModule=!0;var i=function(e){return e&&e.__esModule?e:{default:e}}(a("SEkw"));t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},Z8NM:function(e,t,a){},geON:function(e,t,a){"use strict";var i=a("Z8NM");a.n(i).a},"wk8/":function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"c",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"a",function(){return c}),a.d(t,"g",function(){return d});var i=a("t3Un");function l(){return Object(i.a)({url:"api/roles",method:"get"})}function n(){return Object(i.a)({url:"api/typeuser",method:"get"})}function r(e){return Object(i.a)({url:"api/users",method:"post",data:{role_id:"1,2,3"}})}function o(e){return Object(i.a)({url:"api/users",method:"post",data:{role_id:"1,3"}})}function s(e){return Object(i.a)({url:"api/users",method:"post",data:{role_id:"2"}})}function c(e){return Object(i.a)({url:"api/users/create",method:"post",data:e})}function d(e,t){return Object(i.a)({url:"api/users/"+t+"/update",method:"put",data:e,params:{id:t}})}}}]);