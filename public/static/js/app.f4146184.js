(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],h=0,p=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1373:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"search-bar"},[n("div",{staticClass:"search-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"search-box",attrs:{type:"text",placeholder:"Search Stocks"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),n("img",{staticClass:"search-icon",attrs:{src:a("bbc5")}})])]),n("Table",{attrs:{rows:e.pageData,count:e.resultCount,allRows:e.result},on:{pageChange:e.handlePageChange}})],1)},o=[],i=(a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-controls"},[a("button",{staticClass:"export-button",on:{click:e.handleDataExport}},[e._v(" Export ")])]),a("div",{staticClass:"table-container"},[a("table",[e._m(0),a("tbody",{staticClass:"body"},e._l(e.rows,(function(t){return a("tr",{key:t.code},[a("td",{class:{green:t.close>=t.open,red:t.close<t.open}},[e._v(" "+e._s(t.code)+" ")]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.open))]),a("td",[e._v(e._s(t.high))]),a("td",[e._v(e._s(t.low))]),a("td",[e._v(e._s(t.close))])])})),0)]),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"page-no-control"},[a("div",{staticClass:"page-change-button",class:{disabled:e.disablePageDecrementBtn},on:{click:e.decrementPage}},[e._v(" ‹ ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageNo,expression:"pageNo"}],attrs:{name:"page-no",id:"page-no"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.pageNo=t.target.multiple?a:a[0]},e.handlePageNoChange]}},e._l(e.maxPageNo,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),a("div",{staticClass:"page-change-button",class:{disabled:e.disablePageIncrementBtn},on:{click:e.incrementPage}},[e._v(" › ")])]),a("div",{staticClass:"page-size-control-wrapper"},[a("div",{staticClass:"page-size-control"},[a("label",{attrs:{for:"page-size"}},[e._v("Page Size: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageSize,expression:"pageSize"}],attrs:{name:"page-size",id:"page-size"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.pageSize=t.target.multiple?a:a[0]},e.handlePageSizeChange]}},[a("option",{attrs:{value:"20"}},[e._v("20")]),a("option",{attrs:{value:"50"}},[e._v("50")]),a("option",{attrs:{value:"100"}},[e._v("100")])])]),a("p",[e._v("Total Count: "+e._s(e.count))])])])])])}),s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Code")]),a("th",[e._v("Name")]),a("th",[e._v("Open")]),a("th",[e._v("High")]),a("th",[e._v("Low")]),a("th",[e._v("Close")])])])}],c=(a("a9e3"),a("2909"));a("b64b"),a("a15b"),a("99af"),a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");function l(e){var t=function(e){return null===e?"":e},a=Object.keys(e[0]),n=[a.join(",")].concat(Object(c["a"])(e.map((function(e){return a.map((function(a){return t(e[a])})).join(",")})))).join("\r\n"),r=window.document.createElement("a");r.href=window.URL.createObjectURL(new Blob([n],{type:"text/csv"})),r.download="stoxData.csv",document.body.appendChild(r),r.click(),document.body.removeChild(r)}var u=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=function(){clearTimeout(a),e.apply(void 0,r)};clearTimeout(a),a=setTimeout(i,t)}},h=20,p={name:"Table",data:function(){return{pageNo:1,pageSize:h,maxPageNo:1,disablePageDecrementBtn:!0,disablePageIncrementBtn:!0}},props:{rows:Array,count:Number,allRows:Array},methods:{handlePageNoChange:function(){this.$emit("pageChange",this.pageNo,this.pageSize),this.disablePageIncrementBtn=this.pageNo==this.maxPageNo,this.disablePageDecrementBtn=1==this.pageNo},handlePageSizeChange:function(){this.pageNo=1,this.disablePageDecrementBtn=!0,this.maxPageNo=Math.ceil(this.count/this.pageSize),this.maxPageNo>1&&(this.disablePageIncrementBtn=!1),this.$emit("pageChange",1,this.pageSize)},incrementPage:function(){this.pageNo<this.maxPageNo?(this.pageNo=this.pageNo+1,this.disablePageDecrementBtn=!1,this.handlePageNoChange()):this.disablePageIncrementBtn=!0},decrementPage:function(){this.pageNo>1?(this.pageNo=this.pageNo-1,this.disablePageIncrementBtn=!1,this.handlePageNoChange()):this.disablePageDecrementBtn=!0},handleDataExport:function(){l(this.allRows)}},watch:{count:function(e){this.pageNo=1,this.disablePageDecrementBtn=!0,this.maxPageNo=Math.ceil(e/this.pageSize),this.disablePageIncrementBtn=!(this.maxPageNo>1)}}},d=p,g=(a("87a0"),a("2877")),f=Object(g["a"])(d,i,s,!1,null,"58345586",null),v=f.exports,m=a("bc3a"),b=a.n(m);function _(e){return b.a.get("/api/v1/stock-search/?search_key=".concat(e))}var P={data:function(){return{result:[],resultCount:0,pageData:[],searchString:""}},mounted:function(){this.handleSearch()},created:function(){var e=this;this.handleSearch=u((function(){_(e.searchString).then((function(t){e.result=t["data"]["data"]||[],e.resultCount=e.result.length,e.handlePageChange(1,h)})).catch((function(){e.result=[],e.resultCount=0,e.handlePageChange(1,h)}))}),500)},methods:{handlePageChange:function(e,t){var a=(e-1)*t,n=e*t,r=this.result.length;this.pageData=r>a?this.result.slice(a,n>r?r:n):[]}},name:"App",components:{Table:v},watch:{searchString:function(){this.handleSearch()}}},C=P,y=(a("034f"),Object(g["a"])(C,r,o,!1,null,null,null)),w=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,a){},"87a0":function(e,t,a){"use strict";a("1373")},bbc5:function(e,t,a){e.exports=a.p+"static/img/search.4cf2303d.png"}});
//# sourceMappingURL=app.f4146184.js.map