(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b6a299e","chunk-2d0abc4e","chunk-744c9c7b"],{"15ec3":function(t,n){t.exports="你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"},"174f":function(t,n,e){"use strict";e.r(n),n["default"]=[{title:"占位符演示",json:{name:{first:"@FIRST",middle:"@FIRST",last:"@LAST",full:"@first @middle @last"}}}]},"880e":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("d2-container",[e("template",{slot:"header"},[t._v("数据占位符")]),e("d2-markdown",{staticClass:"d2-mb",attrs:{source:t.doc}}),t._l(t.settingDPD,(function(n,o){return e("d2-demo-mock-card",{key:o,staticStyle:{"margin-bottom":"0px !important"},attrs:{title:n.title,code:JSON.stringify(n.json,null,2),mock:t.mockResult[o]},on:{reload:function(n){return t.doMock(o)}}})}))],2)},c=[],i=(e("d3b7"),e("159b"),e("8bbf")),s=e.n(i),u=e("60bb"),l=e("27fd"),d=e.n(l),a=e("174f"),r=e("15ec3"),m=e.n(r),f={components:{"d2-demo-mock-card":function(){return e.e("chunk-4cddbd29").then(e.bind(null,"1c81"))}},data:function(){return{mockResult:[],settingDPD:a["default"],settingDPDClone:Object(u["cloneDeep"])(a["default"]),doc:m.a}},mounted:function(){var t=this;this.settingDPD.forEach((function(n,e){t.doMock(e)}))},methods:{doMock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s.a.set(this.mockResult,t,JSON.stringify(d.a.mock(this.settingDPDClone[t].json),null,2))}}},k=f,h=e("2877"),p=function(t){t.options.__source="src/views/demo/plugins/mock/dpd.vue"},b=p,g=Object(h["a"])(k,o,c,!1,null,null,null);"function"===typeof b&&b(g);n["default"]=g.exports}}]);