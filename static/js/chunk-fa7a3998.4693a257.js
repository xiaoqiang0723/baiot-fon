(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa7a3998"],{"1ada":function(t,e,a){},"99de":function(t,e,a){"use strict";a("1ada")},b66c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aiot-login-contain"},[a("section",{staticClass:"aiot-login-box"},[a("p",{staticClass:"aiot-login-box-title clearfix"},[a("span",{staticClass:"aiot-login-box-name"},[t._v(t._s(t.aiotTitle))])]),a("div",{staticClass:"aiot-login-box-module"},[a("el-input",{staticClass:"aiot-login-input",attrs:{placeholder:"请输入用户名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"aiot-login-box-module"},[a("el-input",{staticClass:"aiot-login-input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),a("div",{staticClass:"aiot-login-box-module3"},[a("el-checkbox",{staticClass:"aiot-login-checked",model:{value:t.rememberpass,callback:function(e){t.rememberpass=e},expression:"rememberpass"}},[t._v("记住用户名和密码")])],1),a("div",{staticClass:"aiot-login-box-module2"},[a("div",{staticClass:"aiot-login-button aiot-login-button1"},[t._v("取 消")]),a("div",{staticClass:"aiot-login-button aiot-login-button2",on:{click:t.goMain}},[t._v(" 确 认 ")])])])])},i=[],n=a("ed3b"),o=(a("e186"),a("3e22"),a("bbfb")),c={data:function(){return{aiotTitle:"车路协同系统信息平台",name:"",pass:"",rememberpass:!1}},methods:{goMain:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])({username:t.name,password:t.pass});case 2:if(a=e.sent,200!==a.code){e.next=10;break}return t.$store.commit("changeToken",a.msg),e.next=7,t.$store.dispatch("getUserInfo");case 7:t.$router.push({path:"/"}),e.next=11;break;case 10:t.$store.commit("changeToken","");case 11:case"end":return e.stop()}}),e)})))()}}},l=c,r=(a("99de"),a("cba8")),u=Object(r["a"])(l,s,i,!1,null,"cbfef3e2",null);e["default"]=u.exports}}]);