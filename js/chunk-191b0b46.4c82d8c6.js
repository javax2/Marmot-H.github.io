(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191b0b46"],{"2f21":function(t,i,n){"use strict";var s=n("79e5");t.exports=function(t,i){return!!t&&s(function(){i?t.call(null,function(){},1):t.call(null)})}},"427b":function(t,i,n){},"55dd":function(t,i,n){"use strict";var s=n("5ca1"),o=n("d8e8"),e=n("4bf8"),r=n("79e5"),a=[].sort,c=[1,2,3];s(s.P+s.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!n("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(e(this)):a.call(e(this),o(t))}})},"78a5":function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"city_body"},[n("div",{ref:"city_list",staticClass:"city_list"},[n("div",[n("div",{staticClass:"city_hot"},[n("h2",[t._v("热门城市")]),n("ul",{staticClass:"clearfix"},t._l(t.hostList,function(i){return n("li",{key:i.id,on:{tap:function(n){return t.handleToCity(i.nm,i.id)}}},[t._v(t._s(i.nm))])}),0)]),n("div",{ref:"city_sorts",staticClass:"city_sort"},t._l(t.cityList,function(i){return n("div",{key:i.index},[n("h2",[t._v(t._s(i.index))]),n("ul",t._l(i.list,function(i){return n("li",{key:i.id,on:{tap:function(n){return t.handleToCity(i.nm,i.id)}}},[t._v(t._s(i.nm))])}),0)])}),0)])]),n("div",{staticClass:"city_index"},[n("ul",t._l(t.cityList,function(i,s){return n("li",{on:{touchstart:function(i){return t.hanldToIndex(s)}}},[t._v(t._s(i.index))])}),0)])])},o=[],e=(n("55dd"),n("1fba")),r={name:"index",data:function(){return{cityList:[],hostList:[]}},mounted:function(){var t=this,i=window.localStorage.getItem("cityList"),n=window.localStorage.getItem("hostList");i&&n?(this.cityList=JSON.parse(i),this.hostList=JSON.parse(n)):this.axios.get("/api/cityList").then(function(i){if("ok"===i.data.msg){var n=i.data.data.cities,s=t.formatCityList(n),o=s.cityList,e=s.hostList;t.cityList=o,t.hostList=e,window.localStorage.setItem("cityList",JSON.stringify(o)),window.localStorage.setItem("hostList",JSON.stringify(e))}});var s=new e["a"](this.$refs.city_list,{tap:!0});this.scroll=s},methods:{formatCityList:function(t){for(var i=[],n=[],s=0;s<t.length;s++)1===t[s].isHot&&n.push(t[s]);for(var o=0;o<t.length;o++){var e=t[o].py.substr(0,1).toUpperCase();if(a(e))i.push({index:e,list:[{nm:t[o].nm,id:t[o].id}]});else for(var r=0;r<i.length;r++)i[r].index===e&&i[r].list.push({nm:t[o].nm,id:t[o].id})}function a(t){for(var n=0;n<i.length;n++)if(i[n].index===t)return!1;return!0}return i.sort(function(t,i){return t.index>i.index?1:t.index<i.index?-1:0}),{cityList:i,hostList:n}},hanldToIndex:function(t){var i=this.$refs.city_sorts.getElementsByTagName("h2");this.scroll.scrollTo(0,-i[t].offsetTop)},handleToCity:function(t,i){this.$store.commit("city/CITY_INFO",{nm:t,id:i}),window.localStorage.setItem("nowNm",t),window.localStorage.setItem("nowId",i),this.$router.push("/movie/nowplaying")}}},a=r,c=(n("df63"),n("2877")),l=Object(c["a"])(a,s,o,!1,null,"17c1f38d",null);i["default"]=l.exports},df63:function(t,i,n){"use strict";var s=n("427b"),o=n.n(s);o.a}}]);
//# sourceMappingURL=chunk-191b0b46.4c82d8c6.js.map