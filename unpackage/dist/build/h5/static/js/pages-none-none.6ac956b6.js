(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-none-none"],{"02b2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=i},"1aab":function(t,e,n){"use strict";var a=n("cbee"),i=n.n(a);i.a},"2a50":function(t,e,n){"use strict";n.r(e);var a=n("8e04"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"2f7e":function(t,e,n){"use strict";n.r(e);var a=n("eb08"),i=n("2a50");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"1099f4d1",null,!1,a["a"],o);e["default"]=u.exports},"3a2b":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},4863:function(t,e,n){"use strict";var a=n("758c"),i=n.n(a);i.a},6558:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-status-bar[data-v-f4c651ac]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},"6f03":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-nav-bar-text[data-v-61974f5c]{\n\n\nfont-size:%?32?%\n}.uni-nav-bar-right-text[data-v-61974f5c]{font-size:%?28?%}.uni-navbar__content[data-v-61974f5c]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-61974f5c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-61974f5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-61974f5c]{height:44px}.uni-navbar--fixed[data-v-61974f5c]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-61974f5c]{\nbox-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-61974f5c]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},"758c":function(t,e,n){var a=n("6558");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("903b1772",a,!0,{sourceMap:!1,shadowMode:!1})},"8e04":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{},onBackPress:function(t){"backbutton"!=t.from&&"navigateBack"!=t.from||(console.log("asas"),uni.showModal({title:"温馨提示",content:"确定退出吗？",cancelText:"取消",confirmText:"确定",success:function(t){if(t.confirm)uni.showToast({title:"确定",mask:!0,duration:2e3});else if(t.cancel){var e=getCurrentPages().pop();if(!e)return;e.onLoad()}}}))}};e.default=a},a571:function(t,e,n){"use strict";var a={uniStatusBar:n("c4f8").default,uniIcons:n("9aef").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},c4f8:function(t,e,n){"use strict";n.r(e);var a=n("3a2b"),i=n("f269");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4863");var o,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"f4c651ac",null,!1,a["a"],o);e["default"]=u.exports},ca05:function(t,e,n){"use strict";n.r(e);var a=n("a571"),i=n("fc49");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("1aab");var o,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"61974f5c",null,!1,a["a"],o);e["default"]=u.exports},cbee:function(t,e,n){var a=n("6f03");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("62a08098",a,!0,{sourceMap:!1,shadowMode:!1})},eb08:function(t,e,n){"use strict";var a={uniNavBar:n("ca05").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{"left-icon":"back","left-text":"返回","right-text":"菜单",title:"none"}}),n("v-uni-navigator",{attrs:{url:"../about/about"}},[n("v-uni-button",{attrs:{type:"warn"}},[t._v("wx")])],1)],1)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},ef9b:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c4f8")),r=a(n("9aef")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},f269:function(t,e,n){"use strict";n.r(e);var a=n("02b2"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},fc49:function(t,e,n){"use strict";n.r(e);var a=n("ef9b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);