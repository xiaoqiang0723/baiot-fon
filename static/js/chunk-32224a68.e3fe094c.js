(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32224a68"],{"0449":function(a,e,t){},"0a34":function(a,e,t){"use strict";t("9eb4")},"780b":function(a,e,t){"use strict";t("cc4e")},"7bc2":function(a,e,t){"use strict";t.d(e,"e",(function(){return i})),t.d(e,"d",(function(){return n})),t.d(e,"f",(function(){return l})),t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return o}));var s=t("c1e1"),i=function(a){var e=a.deviceName,t=a.pageNum,i=a.pageSize;return Object(s["b"])("/api/rc/warning/occupyWaringList",{device_name:e,page_num:t,page_size:i})},n=function(a){var e=a.deviceId;return Object(s["b"])("/api/rc/warning/occupyWaringDetail",{device_id:e})},l=function(a){return Object(s["b"])("/api/rc/manager/list",a)},c=function(a){return Object(s["b"])("/api/rc/manager/deviceDetail",a)},r=function(a){return Object(s["b"])("/api/rc/manager/deviceHistory",a)},o=function(a){var e=a.deviceId,t=a.groupId,i=a.type;return Object(s["b"])("/api/rc/warning/ctlByDeviceId",{device_id:e,group_id:t,type:i})}},"82cb":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"aiot-list-contain"},[a.isFull?a._e():t("div",{class:["aiot-list-control",{active:!a.isShowList}],on:{click:a.toggleList}}),t("div",{class:["aiot-list-content",{full:a.isFull}]},[t("div",{staticClass:"aiot-list-table"},[t("div",{staticClass:"aiot-list-table-header-mask"}),a._t("default")],2),a.isShowList?t("div",{staticClass:"aiot-list-pagination"},[t("el-pagination",{attrs:{background:"","current-page":a.pageNumber,"page-sizes":1===a.sizeType?[10,20,30]:[6,12],"page-size":6,layout:"total, sizes, prev, pager, next, jumper",total:a.totalNum},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1):a._e()])])},i=[],n=(t("3828"),{props:{totalNum:{type:Number,default:0},isFull:{type:Boolean,default:!1},sizeType:{type:Number,default:0}},data:function(){return{isShowList:!0,pageSize:6,pageNumber:1}},methods:{toggleList:function(){this.isShowList=!this.isShowList,this.$emit("showList",this.isShowList)},handleSizeChange:function(a){this.pageSize=a,this.$emit("changePage",{type:"size",value:this.pageSize})},handleCurrentChange:function(a){this.pageNumber=a,this.$emit("changePage",{type:"number",value:this.pageNumber})}}}),l=n,c=(t("bfd4"),t("cba8")),r=Object(c["a"])(l,s,i,!1,null,"7fe7058a",null);e["a"]=r.exports},"9eb4":function(a,e,t){},bfd4:function(a,e,t){"use strict";t("f66c")},c6ec:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"rescue-manage-contain"},[t("article",{staticClass:"rescue-manage-search"},[t("div",{staticClass:"rescue-manage-search-inner aiot-search-contain clearfix"},[t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("地区")]),t("span",{staticClass:"search-module-value"},[t("el-cascader",{attrs:{placeholder:"请选择地区",options:a.locationData,props:{value:"name",label:"name"},filterable:""}})],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("时间")]),t("span",{staticClass:"search-module-value"},[t("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:a.time,callback:function(e){a.time=e},expression:"time"}})],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("状态")]),t("span",{staticClass:"search-module-value"},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.status,callback:function(e){a.status=e},expression:"status"}},a._l(a.statusList,(function(a){return t("el-option",{key:a.value,attrs:{label:a.name,value:a.value}})})),1)],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("管理单位")]),t("span",{staticClass:"search-module-value"},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.management,callback:function(e){a.management=e},expression:"management"}},a._l(a.managementList,(function(a){return t("el-option",{key:a.value,attrs:{label:a.name,value:a.value}})})),1)],1)]),t("div",{staticClass:"search-module clearfix"},[t("span",{staticClass:"search-module-name"},[a._v("编号")]),t("span",{staticClass:"search-module-value"},[t("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:a.id,callback:function(e){a.id=e},expression:"id"}})],1)]),t("div",{staticClass:"search-opearte clearfix"},[t("div",{staticClass:"search-button",on:{click:a.searchData}})])])]),t("article",{ref:"listTable",staticClass:"rescue-manage-list table-wrapper"},[t("AiotList",{attrs:{totalNum:a.totalNum,isFull:!0,sizeType:a.sizeType},on:{changePage:a.changePage}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:"100%"}},[a._l(a.columns,(function(e,s){return[t("el-table-column",{key:e.key+s,attrs:{prop:e.key,label:e.label,width:e.width,formatter:a.formatterColumn,"show-overflow-tooltip":!0}})]})),t("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"rescue-manage-list-operate operate2",on:{click:function(t){return a.showModal(e.row)}}})]}}])})],2)],1)],1),t("el-dialog",{attrs:{visible:a.modalShow,width:"1300px",title:"救援管理",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(e){a.modalShow=e}}},[t("RescueDetail",{attrs:{modalInfo:a.detailModalInfo}})],1)],1)},i=[],n=t("e9ff"),l=(t("e186"),t("34df"),t("d30f"),t("aa0c"),t("caaf")),c=t.n(l),r=t("1086"),o=t("1065"),u=t("82cb"),d=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"brandreth-rescue-modal clearfix"},[t("article",{staticClass:"rescue-lf"},[t("AiotMap",{attrs:{isControl:!1},on:{mapOperate:a.mapOperate}})],1),t("article",{staticClass:"rescue-lr"},[a._m(0),t("div",{staticClass:"rescue-notice"},[a._v("上传救援信息")]),t("div",{staticClass:"rescue-battery"},[t("Battery",{attrs:{batteryLay:"vertical",batteryNum:a.electricity||0}})],1)])])},p=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ul",{staticClass:"rescue-data-list clearfix"},[t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备编号：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备状态：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联车主：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("联系方式：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联保险公司：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联保险单号：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("开机时间：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("车辆型号：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("关联4S店：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("保险到期时间：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("设备请求救援时间：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("救援处理时间：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("救援状态：")]),t("span",{staticClass:"data-value"})]),t("li",{staticClass:"rescue-data-li clearfix"},[t("span",{staticClass:"data-name"},[a._v("救援人员联系方式：")]),t("span",{staticClass:"data-value"})])])}],m=t("95a1"),h=t("8e5c"),f=t("98c8"),v=t("10c7"),g=t.n(v),b=t("8f22"),C=t.n(b),y=t("d192"),w=t.n(y),_=t("46bf"),k=t.n(_),x=t("7bc2"),L=t("5976"),S=t.n(L),N={name:"equipDetail",props:{modalInfo:{type:Object}},components:{AiotMap:h["a"],Battery:f["a"]},data:function(){return this.alertIsEndHash={0:"未解除",1:"解除"},this.deviceStatusHash={0:"正常",1:"碰撞",2:"倾倒",3:"离线"},{data:{},electricity:100,loading:!1,logLoading:!1,loadWarn:!1,localWarn:!1,localFrash:!0,tableData:[],pageNum:1,pageSize:50,count:0,formatVal:r["d"]}},watch:{"modalInfo.show":{handler:function(a){a&&(this.tableData=[],this.data={},this.pageNum=1,this.getDetail(this.modalInfo.id),this.getLog(this.modalInfo.id))},immediate:!0}},methods:{setMap:function(){if(this.AMap&&this.map&&this.data&&this.data.lng&&this.data.lat){var a=new this.AMap.Marker({icon:this.getMarkerIcon(this.data.deviceType,this.data.deviceStatus),anchor:"bottom-center",position:new this.AMap.LngLat(this.data.lng,this.data.lat)});this.map.add(a),this.map.setCenter(a.getPosition())}},getMarkerIcon:function(a,e){switch(a){case 1:switch(e){case 0:return C.a;case 1:return g.a;case 2:return g.a;case 3:return g.a;default:return C.a}case 2:switch(e){case 0:return k.a;default:return w.a}default:return C.a}},mapOperate:function(a){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.map=a,t.next=3,Object(m["a"])();case 3:e.AMap=t.sent;case 4:case"end":return t.stop()}}),t)})))()},getDetail:function(a){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.detailCancel&&(e.detailCancel(),e.detailCancel=null),e.loading=!0,t.next=4,Object(x["b"])({device_id:a},{cancelToken:new S.a.CancelToken((function(a){e.detailCancel=a}))});case 4:s=t.sent,e.loading=!1,e.data=s,e.setMap();case 8:case"end":return t.stop()}}),t)})))()},getLog:function(a){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.logCancel&&(e.logCancel(),e.logCancel=null),e.logLoading=!0,t.next=4,Object(x["c"])({device_id:a,page_num:e.pageNum,page_size:50},{cancelToken:new S.a.CancelToken((function(a){e.logCancel=a}))});case 4:s=t.sent,e.logLoading=!1,e.tableData=s.data||[],e.total=s.meta.count||0;case 8:case"end":return t.stop()}}),t)})))()},pageChange:function(a){this.pageNum=a,this.getLog(this.modalInfo.id)}}},O=N,z=(t("e5dd"),t("cba8")),D=Object(z["a"])(O,d,p,!1,null,"0a796bd8",null),j=D.exports,M=t("bced"),I={components:{AiotList:u["a"],RescueDetail:j},data:function(){return{locationData:o["a"],province:"",city:"",id:"",management:"",managementList:[],status:"",cityList:[],statusList:[{name:"成功",value:!0},{name:"失败",value:!1}],time:"",modalShow:!1,detailModalInfo:{},totalNum:0,pageSize:10,sizeType:1,pageNumber:1,tableData:[],columns:[{label:"救援编号",key:"id"},{label:"设备编号",key:"imei"},{label:"发生时间",key:"eventTime"},{label:"处理状态",key:"evtState"},{label:"相关车辆",key:"plateNum"},{label:"车主姓名",key:"vehicleOwnerName"},{label:"联系电话",key:"phone"},{label:"关联保单",key:"insurancePolicyNum"}],formatVal:r["d"]}},computed:{provinceList:function(){var a=o["a"].map((function(a){var e={name:a.name,id:a.id};return e}));return a}},methods:{changeProvince:function(){var a=this;this.province?o["a"].forEach((function(e){e.id===a.province&&(a.cityList=e.children||[])})):this.cityList=[]},addPartner:function(){},showModal:function(a){this.detailModalInfo=a,this.modalShow=!0},changePage:function(a){switch(a.type){case"number":this.pageNumber=a.value;break;case"size":this.pageSize=a.value;break;default:break}this.searchData()},searchData:function(){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.time?c()("".concat(a.time," 00:00:00")).valueOf():void 0,s=a.time?c()("".concat(a.time," 23:59:59")).valueOf():void 0,i={evtId:a.id,evtState:a.state,beginDate:t,endDate:s,pageNum:a.pageNumber,pageCount:a.pageSize},a.loading=!0,e.next=6,Object(M["b"])(i);case 6:n=e.sent,a.loading=!1,a.tableData=n.records,a.totalNum=n.total;case 10:case"end":return e.stop()}}),e)})))()},formatterColumn:function(a,e){var t=e.property,s="";switch(t){case"evtState":s=!0===a[t]?"成功":"失败";break;default:s=a[t];break}return Object(r["d"])(s)}},mounted:function(){this.time="2021-01-05",this.searchData()}},T=I,R=(t("0a34"),t("780b"),Object(z["a"])(T,s,i,!1,null,"27c55c64",null));e["default"]=R.exports},cc4e:function(a,e,t){},e5dd:function(a,e,t){"use strict";t("0449")},f66c:function(a,e,t){}}]);