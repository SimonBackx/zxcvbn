(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,s,e){"use strict";e.r(s);var r={name:"ZxcvbnResult",props:{result:{type:Object,default:()=>({})}},computed:{hasSuggestions(){return this.result.feedback.suggestions.length>0}}},n=e(6),_=Object(n.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",{staticClass:"result"},[e("tr",[e("td",[t._v("password:")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("strong",[t._v(t._s(t.result.password))])])]),t._v(" "),e("tr",[e("td",[t._v("guessesLog10:")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.result.guessesLog10))])]),t._v(" "),e("tr",[e("td",[t._v("score:")]),t._v(" "),e("td",[t._v(t._s(t.result.score)+" / 4")])]),t._v(" "),e("tr",[e("td",[t._v("function runtime (ms):")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.result.calcTime))])]),t._v(" "),t._m(0),t._v(" "),e("tr",[e("td",[t._v("100 / hour:")]),t._v(" "),e("td",[t._v(t._s(t.result.crackTimesDisplay.onlineThrottling100PerHour))]),t._v(" "),e("td",[t._v("(throttled online attack)")])]),t._v(" "),e("tr",[e("td",[t._v("10  / second:")]),t._v(" "),e("td",[t._v(t._s(t.result.crackTimesDisplay.onlineNoThrottling10PerSecond))]),t._v(" "),e("td",[t._v("(unthrottled online attack)")])]),t._v(" "),e("tr",[e("td",[t._v("10k / second:")]),t._v(" "),e("td",[t._v(t._s(t.result.crackTimesDisplay.offlineSlowHashing1e4PerSecond))]),t._v(" "),e("td",[t._v("(offline attack, slow hash, many cores)")])]),t._v(" "),e("tr",[e("td",[t._v("10B / second:")]),t._v(" "),e("td",[t._v(t._s(t.result.crackTimesDisplay.offlineFastHashing1e10PerSecond))]),t._v(" "),e("td",[t._v("(offline attack, fast hash, many cores)")])]),t._v(" "),t.result.feedback.warning?e("tr",[e("td",[t._v("warning:")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.result.feedback.warning))])]):t._e(),t._v(" "),t.hasSuggestions?e("tr",[e("td",{staticStyle:{"vertical-align":"top"}},[t._v("suggestions:")]),t._v(" "),t.result.feedback.suggestions?e("td",{attrs:{colspan:"2"}},[t._l(t.result.feedback.suggestions,(function(s){return[t._v("\n        - "+t._s(s)+"\n      ")]}))],2):t._e()]):t._e()])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{attrs:{colspan:"3"}},[this._v("guess times:")])])}],!1,null,null,null);s.default=_.exports}}]);