(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c750b40"],{"0933":function(t,e,a){"use strict";e["a"]={data:function(){return{onlineStatusMap:{0:"离线",1:"在线"},eventStateMap:{0:"正常",4:"报警"},eventStatusMap:{1:"告警",2:"下发"}}}}},1086:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c}));a("af60");var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t||0===t?t+e:"-"},i=function(t,e){return parseInt(t,10)&&parseInt(e,10)},n=function(t,e){return i(t,e)?"".concat(t,"-").concat(e):"-"},c=function(t){return t?"K".concat(parseInt(t,10),"+").concat(parseInt(t%1*1e3,10)):"-"}},"23f5":function(t,e,a){var s=a("abdd"),i=a("cf6a");t.exports=function(t,e,a){var n,c;return i&&"function"==typeof(n=e.constructor)&&n!==a&&s(c=n.prototype)&&c!==a.prototype&&i(t,c),t}},"2f7b":function(t,e,a){var s=a("31c4"),i=a("b289"),n="["+i+"]",c=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),o=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(c,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"300b":function(t,e,a){},"47af":function(t,e,a){},"640c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"equip-manage-contain"},[a("article",{staticClass:"equip-manage-statistics"},[a("div",{staticClass:"statistics-item"},[a("p",{staticClass:"item-title"},[t._v("设备总数")]),a("p",{staticClass:"item-count"},[t._v(t._s(t.statisticsData.totalCount))])]),a("div",{staticClass:"statistics-item"},[a("p",{staticClass:"item-title"},[t._v("在线数")]),a("p",{staticClass:"item-count"},[t._v(t._s(t.statisticsData.online))])]),a("div",{staticClass:"statistics-item"},[a("p",{staticClass:"item-title"},[t._v("当天告警次数")]),a("p",{staticClass:"item-count"},[t._v(t._s(t.statisticsData.alertCount))])]),a("div",{staticClass:"statistics-item"},[a("p",{staticClass:"item-title"},[t._v("累计告警次数")]),a("p",{staticClass:"item-count"},[t._v(t._s(t.statisticsData.totalAlertCount))])]),a("div",{staticClass:"statistics-item"},[a("p",{staticClass:"item-title"},[t._v("告警下发次数")]),a("p",{staticClass:"item-count"},[t._v(t._s(t.statisticsData.commandCount))])])]),a("article",{staticClass:"equip-manage-search clearfix"},[a("div",{staticClass:"equip-manage-search-inner aiot-search-contain clearfix"},[a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("地区")]),a("span",{staticClass:"search-module-value"},[a("el-cascader",{attrs:{placeholder:"请选择地区",options:t.locationData,props:{value:"name",label:"name"},filterable:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("单位")]),a("span",{staticClass:"search-module-value"},[a("el-input",{attrs:{placeholder:"请输入单位",clearable:""},model:{value:t.seachData.agency,callback:function(e){t.$set(t.seachData,"agency",e)},expression:"seachData.agency"}})],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("道路")]),a("span",{staticClass:"search-module-value"},[a("el-input",{attrs:{placeholder:"请输入道路",clearable:""},model:{value:t.seachData.road,callback:function(e){t.$set(t.seachData,"road",e)},expression:"seachData.road"}})],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("设备编号")]),a("span",{staticClass:"search-module-value"},[a("el-input",{attrs:{placeholder:"请输入设备编号",clearable:""},model:{value:t.seachData.imei,callback:function(e){t.$set(t.seachData,"imei",e)},expression:"seachData.imei"}})],1)]),a("div",{staticClass:"search-module clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("设备状态")]),a("span",{staticClass:"search-module-value"},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.seachData.state,callback:function(e){t.$set(t.seachData,"state",e)},expression:"seachData.state"}},[a("el-option",{attrs:{label:"告警",value:1}}),a("el-option",{attrs:{label:"下发",value:2}})],1)],1)]),a("div",{staticClass:"search-module search-module2 clearfix"},[a("span",{staticClass:"search-module-name"},[t._v("告警时间")]),a("span",{staticClass:"search-module-value"},[a("el-date-picker",{attrs:{clearable:"",type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:t.seachData.alertTime,callback:function(e){t.$set(t.seachData,"alertTime",e)},expression:"seachData.alertTime"}})],1)]),a("div",{staticClass:"search-button",on:{click:t.searchData}})])]),a("article",{ref:"listTable",staticClass:"equip-manage-list table-wrapper"},[a("AiotList",{attrs:{totalNum:t.totalNum,isFull:!0,sizeType:1},on:{changePage:t.changePage}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-row-class-name":"aiot-table-list-header","row-class-name":"aiot-table-list-row","tooltip-effect":"light",height:"100%"}},[t._l(t.columns,(function(e,s){return["isIssue"===e.key?a("el-table-column",{key:e.key+s,attrs:{prop:e.key,label:e.label,"min-width":e.width},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isIssue?a("el-tooltip",{attrs:{content:"查看下发信息",placement:"top"}},[a("span",{staticClass:"issue",on:{click:function(a){return t.toDetail(e.row)}}},[t._v("已下发")])]):a("span",[t._v("未下发")])]}}],null,!0)}):a("el-table-column",{key:e.key+s,attrs:{prop:e.key,label:e.label,width:e.width,formatter:t.formatterColumn,"show-overflow-tooltip":""}})]}))],2)],1)],1),a("el-dialog",{attrs:{visible:t.equipIssueShow,width:"800px",title:"下发编组",center:"","custom-class":"aiot-modal","append-to-body":!0},on:{"update:visible":function(e){t.equipIssueShow=e}}},[t.equipIssueShow?a("EquipIssue",{attrs:{eventId:t.equipIssueData.eventId,imei:t.equipIssueData.imei}}):t._e()],1)],1)},i=[],n=(a("6a61"),a("4a97")),c=a("1086"),l=a("82cb"),o=a("1065"),r=a("4bff"),u=a("0933"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info-item"},[t._v("下发编组设备数量："+t._s(t.list.length))]),a("div",{staticClass:"info-body"},[t._v(" 下发编组编号： "),t._l(t.list,(function(e){return a("span",{key:e},[t._v(" "+t._s(e)+"， ")])}))],2)])])},p=[],h={name:"equipIssue",props:{eventId:{type:String,default:""},imei:{type:String,default:""}},data:function(){return{list:[]}},mounted:function(){this.getExecuteDetail()},methods:{getExecuteDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["f"])({eventId:t.eventId,imei:t.imei});case 2:a=e.sent,t.list=(null===a||void 0===a?void 0:a.consumerImei)||[],console.log(a);case 5:case"end":return e.stop()}}),e)})))()}}},f=h,m=(a("f15e"),a("5d22")),v=Object(m["a"])(f,d,p,!1,null,"cc6251f4",null),b=v.exports,g={components:{AiotList:l["a"],EquipIssue:b},mixins:[u["a"]],data:function(){return{formatVal:c["d"],locationData:o["a"],totalNum:0,pageSize:10,pageNum:1,tableData:[],columns:[{label:"设备编号",key:"imei"},{label:"状态",key:"eventState",width:80},{label:"所属单位",key:"agency"},{label:"路段",key:"road"},{label:"告警时间",key:"eventTime"},{label:"是否下发",key:"isIssue",width:100},{label:"下发编组",key:"consumerGroupCode"},{label:"下发路段",key:"consumerRoad"},{label:"是否解除",key:"isEnd"}],statisticsData:{totalCount:"",online:"",alertCount:"",totalAlertCount:"",commandCount:""},location:"",seachData:{province:"",city:"",agency:"",road:"",imei:"",state:"",alertTime:[]},equipIssueData:{},equipIssueShow:!1}},computed:{},watch:{location:function(){this.seachData.province=this.location[this.location.length-2]||"",this.seachData.city=this.location[this.location.length-1]||""}},methods:{formatterColumn:function(t,e){var a=e.property,s="";switch(a){case"eventState":s=this.eventStatusMap[t[a]];break;case"isIssue":s=t[a]?"已下发":"未下发";break;case"isEnd":s=t[a]?"已解除":"未解除";break;default:s=t[a];break}return Object(c["d"])(s)},changePage:function(t){switch(t.type){case"number":this.pageNum=t.value;break;case"size":this.pageSize=t.value;break;default:break}this.searchData()},searchData:function(){this.queryEventList(),this.getOverview()},queryEventList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={agency:t.seachData.agency,province:t.seachData.province,city:t.seachData.city,road:t.seachData.road,imei:t.seachData.imei,endTime:t.seachData.alertTime[0],startTime:t.seachData.alertTime[1],state:t.seachData.state,pageNum:t.pageNum,pageSize:t.pageSize},e.next=3,Object(r["k"])(s);case 3:i=e.sent,console.log("列表:",i),t.totalNum=(null===(a=i.meta)||void 0===a?void 0:a.count)||0,t.tableData=i.data||[];case 7:case"end":return e.stop()}}),e)})))()},getOverview:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["j"])({agency:t.seachData.agency,province:t.seachData.province,city:t.seachData.city,road:t.seachData.road});case 2:a=e.sent,console.log("总览：",a),t.statisticsData={totalCount:(null===a||void 0===a?void 0:a.devCount)||0,online:(null===a||void 0===a?void 0:a.onlineCount)||0,alertCount:(null===a||void 0===a?void 0:a.curEventCount)||0,totalAlertCount:(null===a||void 0===a?void 0:a.eventCount)||0,commandCount:(null===a||void 0===a?void 0:a.eventIssueCount)||0};case 5:case"end":return e.stop()}}),e)})))()},toDetail:function(t){console.log(t),this.equipIssueData=t,this.equipIssueShow=!0}},mounted:function(){this.searchData()}},C=g,y=(a("67cf"),a("c1bd"),Object(m["a"])(C,s,i,!1,null,"4081bdb6",null));e["default"]=y.exports},"67cf":function(t,e,a){"use strict";a("47af")},"6fec":function(t,e,a){},"7d72":function(t,e,a){"use strict";var s=a("6dd5"),i=a("9fd9"),n=a("d1a0"),c=a("91f2"),l=a("5b09"),o=a("d9a5"),r=a("23f5"),u=a("0ba2"),d=a("a2e9"),p=a("f628"),h=a("34a8").f,f=a("f2e6").f,m=a("d3f4").f,v=a("2f7b").trim,b="Number",g=i[b],C=g.prototype,y=o(p(C))==b,D=function(t){var e,a,s,i,n,c,l,o,r=u(t,!1);if("string"==typeof r&&r.length>2)if(r=v(r),e=r.charCodeAt(0),43===e||45===e){if(a=r.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+r}for(n=r.slice(2),c=n.length,l=0;l<c;l++)if(o=n.charCodeAt(l),o<48||o>i)return NaN;return parseInt(n,s)}return+r};if(n(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(y?d((function(){C.valueOf.call(a)})):o(a)!=b)?r(new g(D(e)),a,_):D(e)},k=s?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)l(g,w=k[I])&&!l(_,w)&&m(_,w,f(g,w));_.prototype=C,C.constructor=_,c(i,b,_)}},"82cb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aiot-list-contain"},[t.isFull?t._e():a("div",{class:["aiot-list-control",{active:!t.isShowList}],on:{click:t.toggleList}}),a("div",{class:["aiot-list-content",{full:t.isFull}]},[a("div",{staticClass:"aiot-list-table"},[a("div",{staticClass:"aiot-list-table-header-mask"}),t._t("default")],2),t.isShowList?a("div",{staticClass:"aiot-list-pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.pageNumber,"page-sizes":1===t.sizeType?[10,20,30]:[6,12],"page-size":6,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()])])},i=[],n=(a("7d72"),{props:{totalNum:{type:Number,default:0},isFull:{type:Boolean,default:!1},sizeType:{type:Number,default:0}},data:function(){return{isShowList:!0,pageSize:6,pageNumber:1}},methods:{toggleList:function(){this.isShowList=!this.isShowList,this.$emit("showList",this.isShowList)},handleSizeChange:function(t){this.pageSize=t,this.$emit("changePage",{type:"size",value:this.pageSize})},handleCurrentChange:function(t){this.pageNumber=t,this.$emit("changePage",{type:"number",value:this.pageNumber})}}}),c=n,l=(a("bfd4"),a("5d22")),o=Object(l["a"])(c,s,i,!1,null,"7fe7058a",null);e["a"]=o.exports},af60:function(t,e,a){"use strict";var s=a("b591"),i=a("a2e9"),n=a("fedf"),c=a("abdd"),l=a("3642"),o=a("ad3e"),r=a("2b23"),u=a("9610"),d=a("af5e"),p=a("ec84"),h=a("6f6b"),f=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),C=function(t){if(!c(t))return!1;var e=t[f];return void 0!==e?!!e:n(t)},y=!b||!g;s({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,s,i,n,c=l(this),d=u(c,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?c:arguments[e],C(n)){if(i=o(n.length),p+i>m)throw TypeError(v);for(a=0;a<i;a++,p++)a in n&&r(d,p,n[a])}else{if(p>=m)throw TypeError(v);r(d,p++,n)}return d.length=p,d}})},b289:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},bfd4:function(t,e,a){"use strict";a("6fec")},c00b:function(t,e,a){},c1bd:function(t,e,a){"use strict";a("300b")},f15e:function(t,e,a){"use strict";a("c00b")}}]);