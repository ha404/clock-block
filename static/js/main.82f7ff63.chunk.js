(this["webpackJsonpclock-block"]=this["webpackJsonpclock-block"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"clocks":[{"name":"Local\ud83c\udfe1","dateTimes":[["en-US"],["en-US",{"timeStyle":"medium"}]]},{"name":"New York\ud83d\uddfd","dateTimes":[["en-US",{"timeStyle":"short","timeZone":"America/New_York"}]]}]}')},26:function(e,n,t){"use strict";t.r(n);var o=t(9),c=(t(18),t(0)),i=t.n(c),a=t(10),r=t.n(a),s=t(2),l=t.p+"static/media/EricssonGA628.e38b432c.woff",d=t.p+"static/media/EricssonGA628.00f2c15d.woff2",f=t(17),p=t(15),m=t(16),b=t(11),u=t(1),w=s.b.div.withConfig({displayName:"Clocks__StyledClocks",componentId:"sc-1nxrjpl-0"})(["font-family:'Ericsson GA628';font-stretch:extra-expanded;"]),j=s.b.div.withConfig({displayName:"Clocks__StyledClock",componentId:"sc-1nxrjpl-1"})(["margin:0 0 4vw;&:last-of-type{margin:0;}"]),h=s.b.div.withConfig({displayName:"Clocks__StyledTime",componentId:"sc-1nxrjpl-2"})(["display:flex;justify-content:center;align-items:center;margin:0 0 1vw;padding:2vw 1vw 1vw;font-size:10vw;text-align:center;color:red;background:#211;"]),x=s.b.div.withConfig({displayName:"Clocks__StyledLocation",componentId:"sc-1nxrjpl-3"})(["padding:2vw 1vw 1vw;font-size:6vw;text-align:center;text-transform:uppercase;color:yellow;background:#202910;"]);function g(){var e=Object(c.useState)(new Date),n=Object(m.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((function(){setInterval((function(){return o(new Date)}),1e3)}),[]),Object(u.jsx)(w,{children:b.clocks.map((function(e){var n=e.name,o=e.dateTimes;return Object(u.jsxs)(j,{children:[o.map((function(e){return Object(u.jsx)(h,{children:Object(f.a)(Intl.DateTimeFormat,Object(p.a)(e)).format(t)})})),Object(u.jsx)(x,{children:n})]})}))})}var v=s.b.div.withConfig({displayName:"App__StyledApp",componentId:"sc-6oqcux-0"})(["min-height:100vh;padding:4vw;background:#111;font-family:'Ericsson GA628';font-stretch:extra-expanded;"]),y=s.b.a.withConfig({displayName:"App__StyledAutolock",componentId:"sc-6oqcux-1"})(["display:table;margin:4vw auto 0;font-size:2vw;text-transform:uppercase;text-decoration:none;color:white;cursor:pointer;"]);var k,O=function(){return Object(u.jsxs)(v,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(y,{onClick:function(){window.location.href="App-prefs://prefs:root=DISPLAY&path=AUTOLOCK"},children:"iPad Auto-Lock \ud83d\udd12"})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),i(e),a(e)}))},S=Object(s.a)(k||(k=Object(o.a)(["\n@font-face {\n    font-family: 'Ericsson GA628';\n    src: url(",") format('woff2'),\n      url(",") format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"])),d,l);r.a.render(Object(u.jsxs)(i.a.StrictMode,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(O,{})]}),document.getElementById("root")),C()}},[[26,1,2]]]);
//# sourceMappingURL=main.82f7ff63.chunk.js.map