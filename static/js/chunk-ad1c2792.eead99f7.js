(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad1c2792"],{"13bf":function(e,t,a){},"17bd":function(e,t,a){},"1a3f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"equip-stock-contain"},[a("article",{staticClass:"equip-stock-search clearfix"},[a("div",{staticClass:"equip-stock-search-inner aiot-search-contain clearfix"},[a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[e._v("IMEI号")]),a("span",{staticClass:"search-module-value"},[a("el-input",{attrs:{placeholder:"请输入IMEI号",clearable:""},model:{value:e.epuipId,callback:function(t){e.epuipId=t},expression:"epuipId"}})],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[e._v("绑定状态")]),a("span",{staticClass:"search-module-value"},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.equipStatus,callback:function(t){e.equipStatus=t},expression:"equipStatus"}},[a("el-option",{attrs:{label:"未绑定",value:0}}),a("el-option",{attrs:{label:"已绑定",value:1}})],1)],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[e._v("所属用户")]),a("span",{staticClass:"search-module-value"},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}},e._l(e.userList,(function(t){return a("el-option",{key:t.userId,attrs:{label:t.userName,value:t.userId}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.userName))]),a("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"12px"}},[e._v("("+e._s(t.loginName)+")")])])})),1)],1)]),a("div",{staticClass:"search-button",on:{click:e.getData}}),e.isAdd?a("div",{staticClass:"add-button"},[a("el-upload",{attrs:{action:"/api/gr/dev/batchImport","show-file-list":!1,"on-success":e.onSuccess,"on-error":e.onError,headers:e.myHeaders,"with-credentials":""}},[a("div",[e._v("导入设备")])])],1):e._e()]),e.isBind?a("div",{staticClass:"search-right"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.bindUser(0)}}},[e._v("批量绑定")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.bindUser(1)}}},[e._v("批量解绑")])],1):e._e()]),a("article",{ref:"listTable",staticClass:"equip-stock-list table-wrapper"},[a("AiotList",{attrs:{totalNum:e.totalNum,isFull:!0,sizeType:1},on:{changePage:e.changePage}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:"100%"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._l(e.columns,(function(t,s){return[a("el-table-column",{key:t.key+s,attrs:{prop:t.key,label:t.label,"min-width":t.width,"show-overflow-tooltip":!0,formatter:e.formatterColumn}})]})),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#0cd3d2"},attrs:{type:"text"},on:{click:function(a){return e.showDetail(t.row)}}},[e._v("修改")]),e.isDelete?a("el-button",{staticStyle:{color:"#eb577d"},attrs:{type:"text"},on:{click:function(a){return e.deleteEquip(t.row)}}},[e._v("删除")]):e._e()]}}])})],2)],1)],1),a("el-dialog",{attrs:{visible:e.detailShow,width:"800px",title:"设备详情",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(t){e.detailShow=t}}},[e.detailShow?a("StockAdd",{attrs:{devId:e.detailData.devId},on:{close:e.closeDetail}}):e._e()],1),a("el-dialog",{attrs:{visible:e.bindShow,width:"500px",title:"请选择绑定用户",center:"","custom-class":"aiot-modal add-user","append-to-body":!0},on:{"update:visible":function(t){e.bindShow=t}}},[e.bindShow?a("div",{staticClass:"brandreth-equip-add-contain clearfix"},[a("div",{staticClass:"brandreth-equip-add-li clearfix"},[a("span",{staticClass:"li-name"},[e._v("绑定用户")]),a("span",{staticClass:"li-value"},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.bindUserId,callback:function(t){e.bindUserId=t},expression:"bindUserId"}},e._l(e.userList,(function(t){return a("el-option",{key:t.userId,attrs:{label:t.userName,value:t.userId}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.userName))]),a("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"12px"}},[e._v("("+e._s(t.loginName)+")")])])})),1)],1)]),a("div",{staticClass:"brandreth-equip-add-li brandreth-equip-add-li-buttons"},[a("el-button",{attrs:{type:"primary"},on:{click:e.changeBindUser}},[e._v("确定")]),a("el-button",{staticClass:"brandreth-equip-add-button"},[e._v("取消")])],1)]):e._e()])],1)},i=[],n=a("e9ff"),r=a("06c4"),l=(a("e186"),a("34df"),a("82cb")),c=a("a15f"),o=a("39ea"),u=a("1086"),d=a("4bff"),p=a("7736"),b={components:{AiotList:l["a"],StockAdd:c["a"]},data:function(){return{isSearchUserList:Object(o["a"])("USER_SEARCH_LIST"),isSearchList:Object(o["a"])("GUARDRAIL_STOCK_LIST"),isAdd:Object(o["a"])("GUARDRAIL_STOCK_ADD"),isBind:Object(o["a"])("GUARDRAIL_STOCK_BIND"),isDelete:Object(o["a"])("GUARDRAIL_STOCK_DELETE"),epuipId:"",equipStatus:[],userId:"",bindUserId:"",totalNum:0,pageSize:10,pageNumber:1,tableData:[],columns:[{label:"序号",key:"id",width:100},{label:"IMEI",key:"imei",width:200},{label:"绑定状态",key:"status",width:100}],multipleSelection:[],detailShow:!1,bindShow:!1,bindStatus:""}},computed:Object(r["a"])(Object(r["a"])({},Object(p["b"])({userList:function(e){e.globle.userList}})),Object(p["b"])({userList:function(e){return e.globals.userList},myHeaders:function(e){return{Authorization:e.permission.token}}})),methods:{changeBindUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.bindUserId){t.next=3;break}return e.$message({type:"info",message:"请先选择绑定用户"}),t.abrupt("return");case 3:return a=e.multipleSelection.map((function(e){return e.devId})),t.next=6,Object(d["e"])({deviceIds:a,isRelieve:e.bindStatus,userId:e.bindUserId});case 6:s=t.sent,console.log(s),s>0?(e.$message({type:"success",message:"操作成功"}),e.bindShow=!1,e.getData()):e.$message({type:"error",message:"操作失败"});case 9:case"end":return t.stop()}}),t)})))()},bindUser:function(e){this.multipleSelection.length<1?this.$message({type:"info",message:"请先选择设备"}):(this.bindStatus=e,this.bindShow=!0)},changePage:function(e){switch(e.type){case"number":this.pageNumber=e.value;break;case"size":this.pageSize=e.value;break;default:break}this.getData()},onSuccess:function(e){var t=this;console.log("success",e),"0"===e.code?(this.$message({message:"导入成功!",type:"success"}),this.getData()):"00003"===e.code?this.$msgbox.alert("设备编号：".concat(e.msg,"无法添加，请修改后再次导入"),"导入失败",{confirmButtonText:"确定",callback:function(){t.$message({message:"导入失败!",type:"error"})}}):this.$message({message:"导入失败!",type:"error"})},onError:function(){this.$message({message:"导入失败!",type:"error"})},getData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSearchList){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(d["k"])({userId:e.userId,imei:e.epuipId,generation:2,status:e.equipStatus,pageNum:e.pageNumber,pageSize:e.pageSize});case 4:s=t.sent,console.log(s),e.tableData=(null===s||void 0===s?void 0:s.data)||[],e.totalNum=(null===s||void 0===s||null===(a=s.meta)||void 0===a?void 0:a.count)||0;case 8:case"end":return t.stop()}}),t)})))()},deleteEquip:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(d["d"])({id:e.id,devId:e.devId});case 2:s=a.sent,console.log(s),s>0?(t.$message({type:"success",message:"操作成功"}),t.getData()):t.$message({type:"error",message:"操作失败"});case 5:case"end":return a.stop()}}),a)})))()},closeDetail:function(){this.detailShow=!1},showDetail:function(e){this.detailData=e,this.detailShow=!0},handleSelectionChange:function(e){this.multipleSelection=e},formatterColumn:function(e,t){var a=t.property,s="",i={1:"已绑定",0:"未绑定"};switch(a){case"status":s=i[e[a]];break;default:s=e[a];break}return Object(u["d"])(s)}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isSearchUserList&&e.$store.dispatch("getUserList"),e.getData();case 2:case"end":return t.stop()}}),t)})))()}},h=b,m=(a("b240"),a("4c91"),a("d14b"),a("fb77"),a("cba8")),f=Object(m["a"])(h,s,i,!1,null,"746e7021",null);t["default"]=f.exports},"4c91":function(e,t,a){"use strict";a("13bf")},"988d":function(e,t,a){},a48f:function(e,t,a){},b240:function(e,t,a){"use strict";a("988d")},d14b:function(e,t,a){"use strict";a("a48f")},fb77:function(e,t,a){"use strict";a("17bd")}}]);