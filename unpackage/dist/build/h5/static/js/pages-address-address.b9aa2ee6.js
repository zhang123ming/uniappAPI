(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"0997":function(t,n,e){"use strict";e.r(n);var o=e("6711"),i=e("77e3");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("df4e");var a,c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"0ecb97a8",null,!1,o["a"],a);n["default"]=s.exports},6711:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getLocation.apply(void 0,arguments)}}},[t._v("获取当前定位")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.testLocation.apply(void 0,arguments)}}},[t._v("检测定位是否开启")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openSetting.apply(void 0,arguments)}}},[t._v("开启定位")]),e("v-uni-view",{staticClass:"box"},[t._v("当前位置经度是："+t._s(t.longitude)+"=== 当前位置纬度是："+t._s(t.latitude)+"==="+t._s(t.address))]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseLocation.apply(void 0,arguments)}}},[t._v("chooseLocation")])],1)},u=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}))},"77e3":function(t,n,e){"use strict";e.r(n);var o=e("ce21"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"7d76":function(t,n,e){var o=e("fea4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("03c8e8ce",o,!0,{sourceMap:!1,shadowMode:!1})},ce21:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{longitude:0,latitude:0,address:""}},methods:{chooseLocation:function(){var t=this;uni.chooseLocation({type:"gcj02",success:function(n){t.longitude=n.longitude,t.latitude=n.latitude,t.address=n.address}})},getLocation:function(){uni.getLocation({type:"gcj02",success:function(t){uni.showToast({title:t.longitude,duration:3e3});var n=t.latitude,e=t.longitude;uni.openLocation({latitude:n,longitude:e,success:function(){uni.showToast({title:"位置打开成功",duration:1e3})}})}})},testLocation:function(){var t=this;uni.getLocation({success:function(){uni.showToast({title:"授权成功"})},fail:function(n){uni.showModal({title:"温馨提示",content:"您已拒绝定位,请开启",confirmText:"去设置",success:function(n){n.confirm,t.openSetting()}})}})},openSetting:function(){}}};n.default=o},df4e:function(t,n,e){"use strict";var o=e("7d76"),i=e.n(o);i.a},fea4:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".box[data-v-0ecb97a8]{font-size:12px}",""]),t.exports=n}}]);