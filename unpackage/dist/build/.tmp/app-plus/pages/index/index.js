(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0822":function(e,t,n){"use strict";(function(e){n("8782"),n("921b");i(n("66fd"));var t=i(n("0e61"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"0e61":function(e,t,n){"use strict";n.r(t);var i=n("fbcb"),o=n("a2b9");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("2f3d");var c=n("2877"),u=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"2f3d":function(e,t,n){"use strict";var i=n("ebb2"),o=n.n(i);o.a},a2b9:function(e,t,n){"use strict";n.r(t);var i=n("b49f"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},b49f:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(n("1cd2"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{title:"你好!",array:[{id:"123",pic:"../../static/xyj.jpg",describe:"小白鸽打空调",video:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/video/uni-app20190127.mp4"},{id:"456",pic:"../../static/xyj.jpg",describe:"涡轮增压洗衣机",video:"https://video.pearvideo.com/mp4/adshort/20191008/cont-1609658-14458233_adpkg-ad_hd.mp4"}],imgs:"../../static/xyj.jpg",show:!1,videoFrequency:"https://video.pearvideo.com/mp4/adshort/20191008/cont-1609658-14458233_adpkg-ad_hd.mp4"}},onLoad:function(t){for(var n=0;n<this.array.length;n++)t.e==this.array[n].id&&(this.imgs=this.array[n].pic,this.title=this.array[n].describe,this.videoFrequency=this.array[n].video);e.getStorage({key:"kouling",success:function(e){console.log(i(e," at pages\\index\\index.vue:51"))}}),e.getUserInfo({provider:"weixin",success:function(e){console.log(i(e," at pages\\index\\index.vue:67"))}})},onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},methods:{instruction:function(){e.navigateTo({url:"instruction"})},crea:function(){e.navigateTo({url:"ceshi"})},play:function(){this.show=!0,this.videoContext.play()}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},ebb2:function(e,t,n){},fbcb:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})}},[["0822","common/runtime","common/vendor"]]]);