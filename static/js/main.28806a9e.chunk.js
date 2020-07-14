(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{371:function(e,t,r){e.exports=r(454)},376:function(e,t,r){},453:function(e,t,r){},454:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(16),s=r.n(c),o=(r(376),r(20)),u=r.n(o),i=r(36),f=r(79),l=r(25),d=r(193),p=r(339),b=r.n(p),v=("http://".concat("localhost",":").concat(5e3),b.a.create({baseURL:"https://cheq-home-assignment.herokuapp.com/v1/vasts"})),O=function(){var e=Object(i.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/fetch_vasts");case 2:return t=e.sent,r=t.data.vasts,e.abrupt("return",r.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.id,t))}),{}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(u.a.mark((function e(t,r,n,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/create_vast",{position:t,height:n,width:r,vastUrl:a});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n,a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.vastId,n=t.position,a=t.width,c=t.height,s=t.vastUrl,e.next=3,v.post("/edit_vast",{vastId:r,position:n,height:c,width:a,vastUrl:s});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("?id=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("?id=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e,t){var r=e.response?e.response.data:e.message;console.error(r),t({type:"SET_ERROR",payload:{error:r}})},E=function(e,t,r){var c=a.a.createContext();return{Context:c,Provider:function(s){var o=s.children,u=Object(n.useReducer)(e,r),i=Object(d.a)(u,2),p=i[0],b=i[1],v=Object.keys(t).reduce((function(e,r){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},r,t[r](b)))}),{});return a.a.createElement(c.Provider,{value:Object(l.a)({state:p},v)},o)}}}((function(e,t){var r=t.type,n=t.payload;switch(r){case"SET_ERROR":var a=n.error;return Object(l.a)(Object(l.a)({},e),{},{error:a,loading:!1});case"ADD_VAST":var c=n.vast;return Object(l.a)(Object(l.a)({},e),{},{error:"",loading:!1,vasts:Object(l.a)(Object(l.a)({},e.vasts),{},Object(f.a)({},c.id,c))});case"SET_VASTS":var s=n.vasts;return Object(l.a)(Object(l.a)({},e),{},{loading:!0,vasts:s,error:""});case"UPDATE_VAST":var o=n.patched,u=e.vasts[o.id];return Object(l.a)(Object(l.a)({},e),{},{vasts:Object(l.a)(Object(l.a)({},e.vasts),{},Object(f.a)({},u.id,o)),loading:!1,error:""});case"REMOVE_VAST":var i=n.id,d=Object.keys(e.vasts).filter((function(e){return e!=i}));return Object(l.a)(Object(l.a)({},e),{},{vasts:d.reduce((function(t,r){return Object(l.a)(Object(l.a)({},t),{},Object(f.a)({},r,e.vasts[r]))}),{}),loading:!1,error:""});default:return e}}),{addVast:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(r){var n,a,c,s,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.position,a=r.width,c=r.height,s=r.vastUrl,t.prev=1,t.next=4,j(n,c,a,s);case 4:o=t.sent,i=o.data,e({type:"ADD_VAST",payload:{vast:i}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),g(t.t0,e);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},updateVast:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(r){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(r);case 3:n=t.sent,a=n.data,e({type:"UPDATE_VAST",payload:{patched:a}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(t.t0,e);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchVasts:function(e){return Object(i.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:r=t.sent,e({type:"SET_VASTS",payload:{vasts:r}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g(t.t0,e);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))},removeVast:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(r);case 3:e({type:"REMOVE_VAST",payload:{id:r}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),g(t.t0,e);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}},{vasts:[],loading:!1,error:""}),x=E.Provider,y=E.Context,R=r(340),k=r.n(R),V=r(351),S=r.n(V),A=r(361),T=r.n(A),U=r(352),_=r.n(U),P=r(359),C=r.n(P),D=r(233),L=r.n(D),I=r(232),B=r.n(I),M=r(353),W=r.n(M),F=r(354),J=r.n(F),N=r(356),q=r.n(N),H=r(357),X=r.n(H),$=r(358),z=r.n($),G=r(362),K=r.n(G),Q=r(355),Y=r.n(Q),Z=r(360),ee=r.n(Z),te=r(363),re=r.n(te),ne=r(344),ae=r(349),ce=r.n(ae),se=r(350),oe=r.n(se);function ue(){var e=Object(ne.a)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  display: inline;\n  padding: 6px;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return ue=function(){return e},e}var ie=r(345).a.div(ue()),fe=function(e){return a.a.createElement(ie,e,a.a.createElement(ce.a,{style:{verticalAlign:"bottom"}}),a.a.createElement("text",null,"Xml"),a.a.createElement(oe.a,{style:{verticalAlign:"bottom"}}))},le={Add:Object(n.forwardRef)((function(e,t){return a.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return a.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return a.a.createElement(B.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return a.a.createElement(W.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return a.a.createElement(L.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return a.a.createElement(J.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return a.a.createElement(Y.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return a.a.createElement(q.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(X.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(z.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(L.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(C.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return a.a.createElement(B.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return a.a.createElement(ee.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return a.a.createElement(T.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return a.a.createElement(K.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return a.a.createElement(re.a,Object.assign({},e,{ref:t}))}))};function de(){var e=Object(n.useContext)(y),t=e.state,r=t.vasts,c=t.error,s=e.fetchVasts,o=e.addVast,f=e.updateVast,p=e.removeVast;Object(n.useEffect)((function(){0===r.length&&s()}),[]);var b=Object(n.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:r=e.sent,n=new Blob([r],{type:"text/xml"}),a=URL.createObjectURL(n),window.open(a),URL.revokeObjectURL(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),v=a.a.useState({columns:[{title:"Vast Url",field:"vastUrl"},{title:"Position",field:"position"},{title:"Width",field:"width",type:"numeric"},{title:"Height",field:"height",type:"numeric"},{title:"Actions",align:"right",readOnly:!0,render:function(e){return a.a.createElement(fe,{onClick:function(){return b(e.id)},id:e.id})}}]}),O=Object(d.a)(v,2),j=O[0];O[1];return a.a.createElement(k.a,{title:a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("span",{style:{flex:1}},"Vasts Table"),c&&a.a.createElement("div",{style:{marginLeft:"30px",color:"red"}},c.message)),columns:j.columns,data:Object.values(r),icons:le,editable:{onRowAdd:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("addRow",t),e.next=3,o(t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onRowUpdate:function(){var e=Object(i.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("addRow",r.id,t),e.next=3,f(Object(l.a)({vastId:r.id},t));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),onRowDelete:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("removeRow",t.id),e.next=3,p(t.id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})}r(453);var pe=function(){return a.a.createElement(x,null,a.a.createElement("div",{className:"App"},a.a.createElement(de,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[371,1,2]]]);
//# sourceMappingURL=main.28806a9e.chunk.js.map