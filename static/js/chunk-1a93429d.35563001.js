(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a93429d"],{1739:function(a,e,t){"use strict";t("3503")},"31d3":function(a,e,t){},3503:function(a,e,t){},"377d":function(a,e,t){"use strict";t("5355")},5355:function(a,e,t){},"5af4":function(a,e,t){"use strict";t("ec2ec")},"6ded":function(a,e,t){},"70a4":function(a,e,t){"use strict";t("31d3")},"7bcc":function(a,e,t){"use strict";t("6ded")},"82cb":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"aiot-list-contain"},[a.isFull?a._e():t("div",{class:["aiot-list-control",{active:!a.isShowList}],on:{click:a.toggleList}}),t("div",{class:["aiot-list-content",{full:a.isFull}]},[t("div",{staticClass:"aiot-list-table"},[t("div",{staticClass:"aiot-list-table-header-mask"}),a._t("default")],2),a.isShowList?t("div",{staticClass:"aiot-list-pagination"},[t("el-pagination",{attrs:{background:"","current-page":a.pageNumber,"page-sizes":1===a.sizeType?[10,20,30]:[6,12],"page-size":6,layout:"total, sizes, prev, pager, next, jumper",total:a.totalNum},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1):a._e()])])},i=[],l=(t("a9e3"),{props:{totalNum:{type:Number,default:0},isFull:{type:Boolean,default:!1},sizeType:{type:Number,default:0}},data:function(){return{isShowList:!0,pageSize:6,pageNumber:1}},methods:{toggleList:function(){this.isShowList=!this.isShowList,this.$emit("showList",this.isShowList)},handleSizeChange:function(a){this.pageSize=a,this.$emit("changePage",{type:"size",value:this.pageSize})},handleCurrentChange:function(a){this.pageNumber=a,this.$emit("changePage",{type:"number",value:this.pageNumber})}}}),n=l,c=(t("bfd4"),t("2877")),r=Object(c["a"])(n,s,i,!1,null,"7fe7058a",null);e["a"]=r.exports},b1ed:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"equip-manage-contain"},[t("article",{staticClass:"equip-manage-search"},[t("div",{staticClass:"equip-manage-search-inner aiot-search-contain clearfix"},[t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("地区")]),t("span",{staticClass:"search-module-value"},[t("el-cascader",{attrs:{placeholder:"请选择地区",options:a.locationData,props:{value:"name",label:"name"},filterable:""}})],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("时间")]),t("span",{staticClass:"search-module-value"},[t("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:a.time,callback:function(e){a.time=e},expression:"time"}})],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("状态")]),t("span",{staticClass:"search-module-value"},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.state,callback:function(e){a.state=e},expression:"state"}},a._l(a.statusList,(function(a){return t("el-option",{key:a.value,attrs:{label:a.name,value:a.value}})})),1)],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("编号")]),t("span",{staticClass:"search-module-value"},[t("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:a.id,callback:function(e){a.id=e},expression:"id"}})],1)]),t("div",{staticClass:"search-opearte clearfix"},[t("div",{staticClass:"search-button",on:{click:a.searchData}}),t("div",{staticClass:"add-button"},[t("el-upload",{staticClass:"upload",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1}},[a._v(" + 批量添加 ")])],1),t("div",{staticClass:"add-button add-button2",on:{click:a.addEquip}},[a._v(" + 单设备添加 ")])]),t("div",{staticClass:"search-button",on:{click:a.searchData}})])]),t("article",{ref:"listTable",staticClass:"equip-manage-list table-wrapper"},[t("AiotList",{attrs:{totalNum:a.totalNum,isFull:!0,sizeType:a.sizeType},on:{changePage:a.changePage}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:"100%"}},[a._l(a.columns,(function(e,s){return[t("el-table-column",{key:e.key+s,attrs:{prop:e.key,label:e.label,width:e.width,formatter:a.formatterColumn,"show-overflow-tooltip":!0}})]})),t("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"equip-manage-list-operate operate2",on:{click:function(t){return a.showModal(e.row)}}})]}}])})],2)],1)],1),t("el-dialog",{attrs:{visible:a.modalShow,width:"1300px",title:"设备详情",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(e){a.modalShow=e}}},[t("EquipDetail",{attrs:{modalInfo:a.detailModalInfo}})],1),t("el-dialog",{attrs:{visible:a.addShow,width:"600px",title:"添加设备",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(e){a.addShow=e}}},[t("EquipAdd")],1)],1)},i=[],l=t("c7eb"),n=t("1da1"),c=(t("d81d"),t("b0c0"),t("d3b7"),t("159b"),t("c1df")),r=t.n(c),o=t("1086"),u=t("1065"),d=t("82cb"),m=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"brandreth-rescue-modal clearfix"},[t("article",{staticClass:"rescue-lf"},[t("AiotMap",{attrs:{isControl:!1},on:{mapOperate:a.mapOperate}})],1),t("article",{staticClass:"rescue-lr"},[t("ul",{staticClass:"rescue-data-list clearfix"},[t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备编号：")]),t("span",{staticClass:"data-value"},[a._v(a._s(a.modalInfo.id))])]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备状态：")]),t("span",{staticClass:"data-value"},[a._v(a._s({1:"在线",0:"离线"}[a.modalInfo.onlines]))])]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联车主：")]),t("span",{staticClass:"data-value"},[a._v(a._s(a.modalInfo.vehicleOwnerName))])]),a._m(0),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联保险公司：")]),t("span",{staticClass:"data-value"},[a._v(a._s(a.modalInfo.insuranceCompany))])]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联保险单号：")]),t("span",{staticClass:"data-value"},[a._v(a._s(a.modalInfo.insurancePolicyNum))])]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("开机时间：")]),t("span",{staticClass:"data-value"},[a._v(a._s(a.modalInfo.upTime))])]),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5)]),t("div",{staticClass:"rescue-notice"},[a._v("上传报警信息")]),t("div",{staticClass:"rescue-battery"},[t("Battery",{attrs:{batteryLay:"vertical",batteryNum:a.electricity||0}})],1)])])},p=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("联系方式：")]),t("span",{staticClass:"data-value"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("车辆型号：")]),t("span",{staticClass:"data-value"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联4S店：")]),t("span",{staticClass:"data-value"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("保险到期时间：")]),t("span",{staticClass:"data-value"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备最近报警时间：")]),t("span",{staticClass:"data-value"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("报警处理时间：")]),t("span",{staticClass:"data-value"})])}],f=t("95a1"),h=t("8e5c"),v=t("98c8"),b=t("10c7"),g=t.n(b),C=t("8f22"),_=t.n(C),y=t("d192"),w=t.n(y),k=t("46bf"),x=t.n(k),S={name:"equipDetail",props:{modalInfo:{type:Object}},components:{AiotMap:h["a"],Battery:v["a"]},data:function(){return this.alertIsEndHash={0:"未解除",1:"解除"},this.deviceStatusHash={0:"正常",1:"碰撞",2:"倾倒",3:"离线"},{data:{},electricity:100,loading:!1,logLoading:!1,loadWarn:!1,localWarn:!1,localFrash:!0,tableData:[],pageNum:1,pageSize:50,count:0,formatVal:o["d"]}},watch:{"modalInfo.show":{handler:function(a){a&&(this.tableData=[],this.data={},this.pageNum=1,this.getDetail(this.modalInfo.id),this.getLog(this.modalInfo.id))},immediate:!0}},methods:{setMap:function(){if(this.AMap&&this.map&&this.data&&this.data.lng&&this.data.lat){var a=new this.AMap.Marker({icon:this.getMarkerIcon(this.data.deviceType,this.data.deviceStatus),anchor:"bottom-center",position:new this.AMap.LngLat(this.data.lng,this.data.lat)});this.map.add(a),this.map.setCenter(a.getPosition())}},getMarkerIcon:function(a,e){switch(a){case 1:switch(e){case 0:return _.a;case 1:return g.a;case 2:return g.a;case 3:return g.a;default:return _.a}case 2:switch(e){case 0:return x.a;default:return w.a}default:return _.a}},mapOperate:function(a){var e=this;return Object(n["a"])(Object(l["a"])().mark((function t(){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.map=a,t.next=3,Object(f["a"])();case 3:e.AMap=t.sent;case 4:case"end":return t.stop()}}),t)})))()}}},N=S,O=(t("70a4"),t("2877")),L=Object(O["a"])(N,m,p,!1,null,"441eebed",null),$=L.exports,j=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"equip-add-contain"},[t("el-form",{ref:"form",staticClass:"equip-add-ruleForm",attrs:{model:a.form,"label-position":"right","label-width":"120px"}},[t("el-form-item",{attrs:{label:"设备编号"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"设备状态"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.form.region,callback:function(e){a.$set(a.form,"region",e)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"关联车主"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"联系方式"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"关联保险公司"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.form.region,callback:function(e){a.$set(a.form,"region",e)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"关联保险单号"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"车辆型号"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"关联4S店"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"保险到期时间"}},[t("el-input",{attrs:{clearable:""},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:a.onSubmit}},[a._v("确定")]),t("el-button",[a._v("取消")])],1)],1)],1)},z=[],M={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){}}},E=M,D=(t("1739"),t("5af4"),Object(O["a"])(E,j,z,!1,null,"0bb3bf7e",null)),I=D.exports,q=t("bced"),A={components:{AiotList:d["a"],EquipDetail:$,EquipAdd:I},data:function(){return this.statusList=[{name:"在线",value:1},{name:"离线",value:0}],{locationData:u["a"],loading:!1,province:"",city:"",cityList:[],time:"",state:"",id:"",addShow:!1,modalShow:!1,detailModalInfo:{},sizeType:1,totalNum:0,pageSize:10,pageNumber:1,tableData:[],columns:[{label:"设备编号",key:"id"},{label:"设备状态",key:"online",width:120},{label:"所属公司",key:"insuranceCompany",width:120},{label:"关联车辆",key:"plateNum"},{label:"车主名称",key:"vehicleOwnerName"},{label:"保险单号",key:"insurancePolicyNum"},{label:"开机时间",key:"upTime"},{label:"保险到期日",key:"insurancePolicyTime"}],formatVal:o["d"]}},computed:{provinceList:function(){var a=u["a"].map((function(a){var e={name:a.name,id:a.id};return e}));return a}},methods:{changeProvince:function(){var a=this;this.province?u["a"].forEach((function(e){e.id===a.province&&(a.cityList=e.children||[])})):this.cityList=[]},showModal:function(a){this.modalShow=!0,this.detailModalInfo=a},changePage:function(a){switch(a.type){case"number":this.pageNumber=a.value;break;case"size":this.pageSize=a.value;break;default:break}this.searchData()},searchData:function(){var a=this;return Object(n["a"])(Object(l["a"])().mark((function e(){var t,s,i,n;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.time?r()("".concat(a.time," 00:00:00")).valueOf():void 0,s=a.time?r()("".concat(a.time," 23:59:59")).valueOf():void 0,i={userName:void 0,phone:void 0,plateNumber:void 0,id:a.id,state:a.state,beginDate:t,endDate:s,pageNum:a.pageNumber,pageCount:a.pageSize},a.loading=!0,e.next=6,Object(q["a"])(i);case 6:n=e.sent,a.loading=!1,console.log(n);case 9:case"end":return e.stop()}}),e)})))()},formatterColumn:function(a,e){var t=e.property,s="";switch(t){case"online":s=a[t]?"在线":"离线";break;default:s=a[t];break}return Object(o["d"])(s)},addEquip:function(){this.addShow=!0}},mounted:function(){this.time="2021-01-05",this.searchData()}},P=A,T=(t("377d"),t("7bcc"),Object(O["a"])(P,s,i,!1,null,"3ec44526",null));e["default"]=T.exports},bced:function(a,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return n}));var s=t("c1e1"),i=function(a){return Object(s["a"])("/api/v1/dev/page_query",a)},l=function(a){return Object(s["a"])("/api/v1/event/page_query",a)},n=function(){return Object(s["a"])("/api/v1/dev/online_stats")}},bfd4:function(a,e,t){"use strict";t("dd6c")},dd6c:function(a,e,t){},ec2ec:function(a,e,t){}}]);