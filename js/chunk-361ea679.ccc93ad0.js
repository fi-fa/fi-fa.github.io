(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361ea679"],{"030a":function(e,t,n){},"54df":function(e,t,n){"use strict";n.r(t);var c=n("1da1"),a=(n("d3b7"),n("25f0"),n("96cf"),n("7a23")),i=n("b070"),r=n("6be8"),u=function(e){return Object(a["H"])("data-v-7b6ccfad"),e=e(),Object(a["F"])(),e},o={class:"game-view"},l={class:"container"},s={class:"menu-options-box"},b=u((function(){return Object(a["j"])("i",{class:"icon-calendar"},null,-1)})),j={class:"font-bold"},O=u((function(){return Object(a["j"])("i",{class:"icon-arrow"},null,-1)})),d=u((function(){return Object(a["j"])("i",{class:"icon-calendar"},null,-1)})),v={class:"font-bold"},f=u((function(){return Object(a["j"])("i",{class:"icon-arrow"},null,-1)})),m={class:"current-data-box flex flex-align-center"},p={class:"c-card left-box flex flex-col flex-center"},w=u((function(){return Object(a["j"])("div",null,"游戏名",-1)})),g={class:"c-input-group c-input-group-box"},h=["value"],x={class:"c-input-group c-input-group-box mt-2"},k=["value"],y=u((function(){return Object(a["j"])("div",{class:"mt-3"},"游戏ID",-1)})),T={class:"c-input-group c-input-group-box"},D=["value"],E={class:"mt-2 text-secondary-0"},P={class:"mt-2 text-secondary-0"},V={key:1,class:"text-grey-6 text-center"},C={class:"game-schedule-modal"},J=["onClick"],R=u((function(){return Object(a["j"])("br",null,null,-1)})),$={setup:function(e){var t=Object(a["q"])("chainInfo"),n=document.body.clientWidth,u=Object(a["J"])(!1),$=Object(a["I"])({modalVisible:!1,currentPage:1,totalPage:10}),I=function(){$.modalVisible=!0},L=Object(a["J"])([]),S=Object(a["J"])({}),_=Object(a["I"])({startTime:new Date((new Date).toLocaleDateString()).getTime()}),N=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(u.value=!1,new Date(t).getTime()!==_.startTime){e.next=3;break}return e.abrupt("return");case 3:return _.startTime=new Date(t).getTime(),S.value={},e.next=7,M();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].games({startTime:Math.floor(_.startTime/1e3).toString(),endTime:(Math.floor(_.startTime/1e3)+86400).toString()});case 2:t=e.sent,0===t.code&&(L.value=t.data,S.value=L.value[0]||{});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){$.modalVisible=!1,S.value=L.value[e],console.log(S.value)},A=Object(a["J"])(!0),q=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a["S"])([function(){return t.isActive},function(){return t.isLogin}],(function(){t.isActive&&t.isLogin&&q()}),{immediate:!0}),function(e,t){var c=Object(a["L"])("van-popup"),i=Object(a["L"])("van-calendar");return Object(a["E"])(),Object(a["i"])("div",o,[Object(a["j"])("div",l,[Object(a["j"])("div",{class:"back-btn mb-4",style:{width:"fit-content"},onClick:t[0]||(t[0]=function(t){return e.$router.back()})},"<<返回"),Object(a["j"])("div",s,[Object(a["j"])("div",{class:"menu-item-box",onClick:t[1]||(t[1]=function(e){return u.value=!0})},[b,Object(a["j"])("span",j,Object(a["O"])(Object(a["P"])(r["c"])(Object(a["P"])(_).startTime,"{y}-{m}-{d}")),1),O]),Object(a["j"])("div",{class:"menu-item-box",onClick:I},[d,Object(a["j"])("span",v,Object(a["O"])(e.$t("gameView.allMatches")),1),f])]),Object(a["j"])("div",m,[Object(a["j"])("div",p,[S.value["_id"]?(Object(a["E"])(),Object(a["i"])(a["a"],{key:0},[w,Object(a["j"])("div",g,[Object(a["j"])("textarea",{value:S.value["nameEN"]},null,8,h)]),Object(a["j"])("div",x,[Object(a["j"])("textarea",{value:S.value["nameCN"]},null,8,k)]),y,Object(a["j"])("div",T,[Object(a["j"])("textarea",{value:S.value["_id"]},null,8,D)]),A.value?Object(a["h"])("",!0):(Object(a["E"])(),Object(a["i"])(a["a"],{key:0},[Object(a["j"])("div",E,Object(a["O"])(e.$t("gameView.result"))+" "+Object(a["O"])(S.value["result"]),1),Object(a["j"])("div",P,Object(a["O"])(e.$t("gameView.over")),1)],64))],64)):(Object(a["E"])(),Object(a["i"])("div",V,Object(a["O"])(e.$t("noData")),1))])]),Object(a["m"])(c,{class:"modal-popup",show:Object(a["P"])($).modalVisible,"onUpdate:show":t[2]||(t[2]=function(e){return Object(a["P"])($).modalVisible=e}),position:Object(a["P"])(n)<750?"top":"center"},{default:Object(a["U"])((function(){return[Object(a["j"])("div",C,[(Object(a["E"])(!0),Object(a["i"])(a["a"],null,Object(a["K"])(L.value,(function(t,n){return Object(a["E"])(),Object(a["i"])("div",{class:"schedule-item",key:n,onClick:function(e){return U(n)}},[Object(a["l"])(Object(a["O"])("en"===e.$i18n.locale?t.nameEN:t.nameCN)+" ",1),R,Object(a["l"])(" "+Object(a["O"])(Object(a["P"])(r["c"])(1e3*t.startTime)),1)],8,J)})),128))])]})),_:1},8,["show","position"]),Object(a["m"])(i,{show:u.value,"onUpdate:show":t[3]||(t[3]=function(e){return u.value=e}),"show-confirm":!1,"min-date":new Date("1970-01-01"),onSelect:N},null,8,["show","min-date"])])])}}},I=(n("d53e"),n("6b0d")),L=n.n(I);const S=L()($,[["__scopeId","data-v-7b6ccfad"]]);t["default"]=S},d53e:function(e,t,n){"use strict";n("030a")}}]);