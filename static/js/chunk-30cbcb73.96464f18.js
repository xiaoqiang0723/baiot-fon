(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30cbcb73"],{"0341":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"equip-manage-contain"},[e("article",{staticClass:"equip-manage-search"},[e("div",{staticClass:"equip-manage-search-inner aiot-search-contain clearfix"},[e("div",{staticClass:"search-module clearfix"},[e("span",{staticClass:"search-module-name"},[a._v("组网编号")]),e("span",{staticClass:"search-module-value"},[e("el-input",{attrs:{placeholder:"请输入组网编号",clearable:""},model:{value:a.epuipId,callback:function(t){a.epuipId=t},expression:"epuipId"}})],1)]),e("div",{staticClass:"search-module clearfix"},[e("span",{staticClass:"search-module-name"},[a._v("设备状态")]),e("span",{staticClass:"search-module-value"},[e("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.equipStatus,callback:function(t){a.equipStatus=t},expression:"equipStatus"}},a._l(a.equipStatusList,(function(a){return e("el-option",{key:a.value,attrs:{label:a.name,value:a.value}})})),1)],1)]),e("div",{staticClass:"search-module search-module2 clearfix"},[e("span",{staticClass:"search-module-name"},[a._v("报警时间")]),e("span",{staticClass:"search-module-value"},[e("el-date-picker",{attrs:{clearable:"",type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:a.equipTime,callback:function(t){a.equipTime=t},expression:"equipTime"}})],1)]),e("div",{staticClass:"search-button",on:{click:a.searchData}})])]),e("article",{ref:"listTable",staticClass:"equip-manage-list table-wrapper"},[e("AiotList",{attrs:{totalNum:a.totalNum,isFull:!0},on:{changePage:a.changePage}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:"100%"}},[e("el-table-column",{attrs:{label:"",width:"40"},scopedSlots:a._u([{key:"default",fn:function(a){return[e("span",{class:["equip-manage-status",{active:0===a.row.warningStatus}]})]}}])}),a._l(a.columns,(function(t,l){return["electricity"===t.key?e("el-table-column",{key:t.key+l,attrs:{prop:t.key,label:t.label,width:t.width},scopedSlots:a._u([{key:"default",fn:function(t){return[t.row.electricity||0===t.row.electricity?e("Battery",{attrs:{batteryLay:"vertical",batteryNum:t.row.electricity}}):e("div",{staticStyle:{"text-align":"center"}},[a._v("-")])]}}],null,!0)}):e("el-table-column",{key:t.key+l,attrs:{prop:t.key,label:t.label,width:t.width,formatter:a.formatterColumn}})]})),a.isOpearte?e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[1===t.row.isGroup?e("span",{staticClass:"equip-manage-list-operate",on:{click:function(e){return a.showOperateModal(t.row)}}}):e("span",{staticClass:"equip-manage-list-operate operate2",on:{click:function(e){return a.showEquipModal(t.row)}}})]}}],null,!1,1473767903)}):a._e(),e("el-table-column",{attrs:{type:"expand"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.row.children,"show-header":!1,"row-class-name":"aiot-table-list-row"}},[e("el-table-column",{attrs:{label:"",width:"40"}},[[e("span",{class:["equip-manage-status",{active:0===t.row.warningStatus}]})]],2),a._l(a.columns,(function(t,l){return["electricity"===t.key?e("el-table-column",{key:t.key+"child"+l,attrs:{prop:t.key,label:t.label,width:t.width},scopedSlots:a._u([{key:"default",fn:function(a){return[e("Battery",{attrs:{batteryLay:"vertical",batteryNum:a.row.electricity}})]}}],null,!0)}):e("el-table-column",{key:t.key+l,attrs:{prop:t.key,label:t.label,width:t.width,align:"center","show-overflow-tooltip":!0,formatter:a.formatterColumn}})]})),a.isOpearte?e("el-table-column",{attrs:{label:"操作",width:"100"}},[[e("span",{staticClass:"equip-manage-list-operate operate2",on:{click:function(e){return a.showEquipModal(t.row)}}})]],2):a._e(),e("el-table-column",{attrs:{label:"",width:"47"}})],2)]}}])})],2)],1)],1),e("el-dialog",{attrs:{visible:a.detailModalInfo.show,width:"1300px",title:"设备详情",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(t){return a.$set(a.detailModalInfo,"show",t)}}},[e("EquipDetail",{attrs:{modalInfo:a.detailModalInfo}})],1),e("el-dialog",{attrs:{visible:a.modalShow2,width:"600px",title:"设备操作",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(t){a.modalShow2=t}}},[a.modalShow2?e("EquipOperate",{attrs:{equipList:a.activeOccupyList}}):a._e()],1)],1)},i=[],s=e("0344"),n=(e("aa0c"),e("65fb"),e("34df"),e("7bc2")),r=e("1086"),c=e("98c8"),o=e("82cb"),u=e("5c3f"),d=e("39ea"),p=e("4bce"),m=e("bc0a"),h={components:{Battery:c["a"],AiotList:o["a"],EquipDetail:p["a"],EquipOperate:m["a"]},mixins:[u["a"]],data:function(){return{isOpearte:Object(d["a"])("OCCUPY_EQUIP_OPERATE"),epuipId:"",equipStatus:null,equipTime:[],detailModalInfo:{show:!1,id:null},activeOccupyList:[],modalShow2:!1,totalNum:0,pageSize:6,pageNumber:1,tableData:[],columns:[{label:"组网设备编号",key:"id"},{label:"数量",key:"count",width:100},{label:"占道路段",key:"road"},{label:"设备电量",key:"electricity",width:100},{label:"设备状态",key:"deviceStatus",width:100},{label:"报警方式",key:"alertWay"},{label:"开始时间",key:"occupyRoadStartTime"},{label:"报警时间",key:"alertStartTime"}],formatVal:r["d"]}},computed:{equipStatusList:function(){var a=this,t=[];return Object.keys(this.deviceStatusMap).forEach((function(e){t.push({name:a.deviceStatusMap[e],value:e})})),t}},methods:{showDetail:function(a){console.log(a)},showEquipModal:function(a){this.detailModalInfo.show=!0,this.detailModalInfo.id=a.id},showOperateModal:function(a){this.activeOccupyList=a.children,this.modalShow2=!0},changePage:function(a){switch(a.type){case"number":this.pageNumber=a.value;break;case"size":this.pageSize=a.value;break;default:break}this.searchData()},searchData:function(){var a=this,t="",e="";if(this.equipTime&&2===this.equipTime.length){var l=Object(s["a"])(this.equipTime);t=l[0],e=l[1]}var i={device_type:this.equipStatus,device_name:this.epuipId,alert_start_time:t,alert_end_time:e,page_num:this.pageNumber,page_size:this.pageSize};Object(n["f"])(i).then((function(t){if(t){a.totalNum=t.meta.count;var e=t.data.map((function(a){return 1===a.isGroup?(Object.assign(a,{id:a.deviceId,road:a.occupy_area_road,warningStatus:a.isAlert,electricity:"",alertWay:"",deviceStatus:""}),a.children.map((function(a){return Object.assign(a,{id:a.deviceId,road:a.occupyAreaRoad,warningStatus:a.isAlert}),a}))):Object.assign(a,{id:a.deviceId,road:a.occupyAreaRoad,warningStatus:a.isAlert}),a}));a.tableData=e}}))},formatterColumn:function(a,t){var e=t.property,l="";switch(e){case"deviceStatus":l=this.deviceStatusMap[a[e]];break;case"alertWay":l=this.alertWayMap[a[e]];break;default:l=a[e];break}return Object(r["d"])(l)}},mounted:function(){this.searchData()}},f=h,b=(e("41bb"),e("1c1d"),e("cba8")),v=Object(b["a"])(f,l,i,!1,null,"42dd0b0a",null);t["default"]=v.exports},"1c1d":function(a,t,e){"use strict";e("62e1")},"3f76":function(a,t,e){"use strict";e("77aa")},"41bb":function(a,t,e){"use strict";e("b3fec")},"4bce":function(a,t,e){"use strict";var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"row1"},[e("div",{staticClass:"mapWrap"},[e("AiotMap",{attrs:{isControl:!1},on:{mapOperate:a.mapOperate}})],1),e("div"),e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"listWrap",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(39, 57, 102)"}},[e("div",[e("span",{staticClass:"label"},[a._v("设备编号")]),e("span",[a._v(a._s(a.formatVal(a.data.deviceId)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备组网编号")]),e("span",[a._v(a._s(a.formatVal(a.data.groupId)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备名称")]),e("span",[a._v(a._s(a.formatVal(a.data.deviceName)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备状态")]),e("span",[a._v(a._s(a.formatVal(a.deviceStatusHash[a.data.deviceStatus])))])]),e("div",[e("span",{staticClass:"label"},[a._v("占道开始时间")]),e("span",[a._v(a._s(a.formatVal(a.data.occupyRoadStartTime)))])]),e("div",[e("span",{staticClass:"label"},[a._v("占道结束时间")]),e("span",[a._v(a._s(a.formatVal(a.data.occupyRoadEndTime)))])]),a._m(0),e("div",[e("span",{staticClass:"label"},[a._v("设备占道路段")]),e("span",[a._v(a._s(a.formatVal(a.data.roadName)))])]),a._m(1),a._m(2),a._m(3),e("div",[e("span",{staticClass:"label"},[a._v("设备报警时间")]),e("span",[a._v(a._s(a.formatVal(a.data.alertStartTime)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备报警次数")]),e("span",[a._v(a._s(a.formatVal(a.data.alertNum)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备报警是否解除")]),e("span",[a._v(a._s(a.formatVal(a.alertIsEndHash[a.data.alertIsEnd])))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备报警解除时间")]),e("span",[a._v(a._s(a.formatVal(a.data.alertEndTime)))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备工作时常")]),e("span",[a._v(a._s(a.formatVal(a.data.workTime,"秒")))])]),e("div",[e("span",{staticClass:"label"},[a._v("设备工作次数")]),e("span",[a._v(a._s(a.formatVal(a.data.workNum)))])]),e("div",{staticClass:"switchBox"},[e("div",[e("span",{staticClass:"sl"},[a._v("LORA报警")]),e("el-switch",{staticClass:"switch-text",model:{value:a.loadWarn,callback:function(t){a.loadWarn=t},expression:"loadWarn"}})],1),a._m(4)])]),e("div",[e("Battery",{attrs:{batteryLay:"vertical",batteryNum:a.data.electricity||0}})],1)]),e("div",{staticClass:"row2 table-wrapper"},[e("Table",{attrs:{loading:a.logLoading,height:250,columns:a.columns,tableData:a.tableData}}),e("el-pagination",{staticClass:"mypage aiot-list-pagination",attrs:{small:"",layout:"prev, pager, next",total:a.count,"page-size":a.pageSize,"page-count":a.pageNum},on:{"current-change":a.pageChange}})],1)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("span",{staticClass:"label"},[a._v("设备出厂时间")]),e("span",[a._v("-")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("span",{staticClass:"label"},[a._v("设备所属单位")]),e("span",[a._v("-")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("span",{staticClass:"label"},[a._v("设备报警方式")]),e("span",[a._v("-")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("span",{staticClass:"label"},[a._v("设备报警状态")]),e("span",[a._v("-")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("span",{staticClass:"sl"},[a._v("位置刷新")]),e("div",{staticClass:"btn"},[e("i",{staticClass:"iconfont icon-shuaxin"})])])}],s=e("e9ff"),n=(e("e186"),e("34df"),e("95a1")),r=e("8e5c"),c=e("98c8"),o=e("10c7"),u=e.n(o),d=e("8f22"),p=e.n(d),m=e("d192"),h=e.n(m),f=e("46bf"),b=e.n(f),v=e("1086"),g=e("7bc2"),w=e("5976"),_=e.n(w),y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(39, 57, 102)",data:a.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:a.height,"default-expand-all":""}},[a._l(a.columns,(function(t,l){return[e("el-table-column",{key:t.key+l,attrs:{prop:t.key,label:t.label,width:t.width,"show-overflow-tooltip":!0},scopedSlots:a._u([{key:"default",fn:function(e){return t.render?[a._v(" "+a._s(t.render(e))+" ")]:void 0}}],null,!0)})]}))],2)},k=[],C=(e("3828"),{name:"dialogTable",props:{loading:{type:Boolean,default:!0},height:{type:Number,default:250},tableData:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}}}}),S=C,O=e("cba8"),q=Object(O["a"])(S,y,k,!1,null,"c1b5bca6",null),x=q.exports,I={name:"equipDetail",props:{modalInfo:{type:Object}},data:function(){return this.alertIsEndHash={0:"未解除",1:"解除"},this.deviceStatusHash={0:"正常",1:"碰撞",2:"倾倒",3:"离线"},this.columns=[{label:"告警序号",key:"warnIndex",render:function(a){return a.row.warnIndex||"-"}},{label:"告警时间",key:"warnTime",render:function(a){return a.row.warnTime||"-"}},{label:"告警路段",key:"warnRoad",render:function(a){return a.row.warnRoad||"-"}}],{data:{},loading:!1,logLoading:!1,loadWarn:!1,localWarn:!1,localFrash:!0,tableData:[],pageNum:1,pageSize:50,count:0,formatVal:v["d"]}},watch:{"modalInfo.show":{handler:function(a){a&&(this.tableData=[],this.data={},this.pageNum=1,this.getDetail(this.modalInfo.id),this.getLog(this.modalInfo.id))},immediate:!0}},components:{AiotMap:r["a"],Battery:c["a"],Table:x},methods:{setMap:function(){if(this.AMap&&this.map&&this.data&&this.data.lng&&this.data.lat){var a=new this.AMap.Marker({icon:this.getMarkerIcon(this.data.deviceType,this.data.deviceStatus),anchor:"bottom-center",position:new this.AMap.LngLat(this.data.lng,this.data.lat)});this.map.add(a),this.map.setCenter(a.getPosition())}},getMarkerIcon:function(a,t){switch(a){case 1:switch(t){case 0:return p.a;case 1:return u.a;case 2:return u.a;case 3:return u.a;default:return p.a}case 2:switch(t){case 0:return b.a;default:return h.a}default:return p.a}},mapOperate:function(a){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.map=a,e.next=3,Object(n["a"])();case 3:t.AMap=e.sent;case 4:case"end":return e.stop()}}),e)})))()},getDetail:function(a){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.detailCancel&&(t.detailCancel(),t.detailCancel=null),t.loading=!0,e.next=4,Object(g["b"])({device_id:a},{cancelToken:new _.a.CancelToken((function(a){t.detailCancel=a}))});case 4:l=e.sent,t.loading=!1,t.data=l,t.setMap();case 8:case"end":return e.stop()}}),e)})))()},getLog:function(a){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logCancel&&(t.logCancel(),t.logCancel=null),t.logLoading=!0,e.next=4,Object(g["c"])({device_id:a,page_num:t.pageNum,page_size:50},{cancelToken:new _.a.CancelToken((function(a){t.logCancel=a}))});case 4:l=e.sent,t.logLoading=!1,t.tableData=l.data||[],t.total=l.meta.count||0;case 8:case"end":return e.stop()}}),e)})))()},pageChange:function(a){this.pageNum=a,this.getLog(this.modalInfo.id)}}},M=I,T=(e("3f76"),Object(O["a"])(M,l,i,!1,null,"48c62a70",null));t["a"]=T.exports},"62e1":function(a,t,e){},"77aa":function(a,t,e){},b3fec:function(a,t,e){}}]);