(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{373:function(e,t,r){e.exports=r(456)},378:function(e,t,r){},455:function(e,t,r){},456:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(16),o=r.n(c),u=(r(378),r(20)),s=r.n(u),i=r(37),f=r(64),l=r(23),d=r(195),p=r(344),b=r.n(p),v=("http://".concat("localhost",":").concat(5e3),b.a.create({baseURL:"https://cheq-home-assignment.herokuapp.com/v1/vasts"})),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/fetch_vasts");case 2:return t=e.sent,r=t.data.vasts,e.abrupt("return",r.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.id,t))}),{}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(s.a.mark((function e(t,r,n,a){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/create_vast",{position:t,height:n,width:r,vastUrl:a});case 2:return c=e.sent,o=c.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,a,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.vastId,n=t.position,a=t.width,c=t.height,o=t.vastUrl,e.next=3,v.post("/edit_vast",{vastId:r,position:n,height:c,width:a,vastUrl:o});case 3:return u=e.sent,i=u.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("?id=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v.get("?id=".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return e.response?e.response.data.message:e.message},g=function(e,t,r){var c=a.a.createContext();return{Context:c,Provider:function(o){var u=o.children,s=Object(n.useReducer)(e,r),i=Object(d.a)(s,2),p=i[0],b=i[1],v=Object.keys(t).reduce((function(e,r){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},r,t[r](b)))}),{});return a.a.createElement(c.Provider,{value:Object(l.a)({state:p},v)},u)}}}((function(e,t){var r=t.type,n=t.payload;switch(r){case"SET_ERROR":var a=n.error;return Object(l.a)(Object(l.a)({},e),{},{error:a,loading:!1});case"ADD_VAST":var c=n.vast;return Object(l.a)(Object(l.a)({},e),{},{error:"",loading:!1,vasts:Object(l.a)(Object(l.a)({},e.vasts),{},Object(f.a)({},c.id,c))});case"SET_VASTS":var o=n.vasts;return Object(l.a)(Object(l.a)({},e),{},{loading:!0,vasts:o,error:""});case"UPDATE_VAST":var u=n.patched,s=e.vasts[u.id];return Object(l.a)(Object(l.a)({},e),{},{vasts:Object(l.a)(Object(l.a)({},e.vasts),{},Object(f.a)({},s.id,u)),loading:!1,error:""});case"REMOVE_VAST":var i=n.id,d=Object.keys(e.vasts).filter((function(e){return e!=i}));return Object(l.a)(Object(l.a)({},e),{},{vasts:d.reduce((function(t,r){return Object(l.a)(Object(l.a)({},t),{},Object(f.a)({},r,e.vasts[r]))}),{}),loading:!1,error:""});default:return e}}),{addVast:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(r){var n,a,c,o,u,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.position,a=r.width,c=r.height,o=r.vastUrl,t.prev=1,t.next=4,j(n,c,a,o);case 4:u=t.sent,e({type:"ADD_VAST",payload:{vast:u}}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),i=E(t.t0),e({type:"SET_ERROR",payload:{error:i}});case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},updateVast:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(r){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(r);case 3:n=t.sent,e({type:"UPDATE_VAST",payload:{patched:n}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a=E(t.t0),e({type:"SET_ERROR",payload:{error:a}});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},fetchVasts:function(e){return Object(i.a)(s.a.mark((function t(){var r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:r=t.sent,e({type:"SET_VASTS",payload:{vasts:r}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n=E(t.t0),e({type:"SET_ERROR",payload:{error:n}});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))},removeVast:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(r){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(r);case 3:e({type:"REMOVE_VAST",payload:{id:r}}),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),n=E(t.t0),e({type:"SET_ERROR",payload:{error:n}});case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},setError:function(e){return function(t){e({type:"SET_ERROR",payload:{error:t}})}}},{vasts:[],loading:!1,error:""}),R=g.Provider,x=g.Context,y=r(140),k=r(345),_=r.n(k),S=r(235),T=r(352),V=r.n(T),A=r(353),U=r.n(A),C=r(354),P=r.n(C),D=r(364),L=r.n(D),I=r(355),M=r.n(I),B=r(362),F=r.n(B),J=r(238),N=r.n(J),q=r(237),H=r.n(q),W=r(356),X=r.n(W),z=r(357),G=r.n(z),K=r(359),Q=r.n(K),Y=r(360),Z=r.n(Y),$=r(361),ee=r.n($),te=r(365),re=r.n(te),ne=r(358),ae=r.n(ne),ce=r(363),oe=r.n(ce),ue=r(366),se=r.n(ue),ie=r(236);function fe(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return fe=function(){return e},e}function le(){var e=Object(S.a)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 6px;\n  border-radius: 5px;\n"]);return le=function(){return e},e}var de=ie.a.div(le()),pe=ie.a.div(fe()),be=function(e){return a.a.createElement(pe,e,a.a.createElement(de,null,a.a.createElement(V.a,{style:{verticalAlign:"bottom"}}),a.a.createElement("span",null,"Xml"),a.a.createElement(U.a,{style:{verticalAlign:"bottom"}})))},ve={Add:Object(n.forwardRef)((function(e,t){return a.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return a.a.createElement(M.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return a.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return a.a.createElement(X.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return a.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return a.a.createElement(G.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return a.a.createElement(ae.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return a.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(Z.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(ee.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(N.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(F.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return a.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return a.a.createElement(oe.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return a.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return a.a.createElement(re.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return a.a.createElement(se.a,Object.assign({},e,{ref:t}))}))},Oe=function(e){var t=new Blob([e],{type:"text/xml"}),r=URL.createObjectURL(t);window.open(r),URL.revokeObjectURL(r)},je=["top_left","top_middle","top_right","middle_left","middle_right","middle_middle","bottom_left","bottom_middle","bottom_right"],me=function(){var e=Object(n.useContext)(x),t=e.state.vasts,r=Object(y.a)(e,["state"]),c=r.fetchVasts,o=r.addVast,u=r.updateVast,d=r.removeVast;Object(n.useEffect)((function(){0===t.length&&c()}),[]);var p=Object(n.useCallback)(function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:r=e.sent,Oe(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),b=Object(n.useMemo)((function(){return{columns:[{title:"Vast Url",field:"vastUrl"},{title:"Position",field:"position",lookup:je.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t,t))}),{})},{title:"Width",field:"width",type:"numeric"},{title:"Height",field:"height",type:"numeric"},{title:"Actions",align:"right",readOnly:!0,render:function(e){var t=e.id;Object(y.a)(e,["id"]);return a.a.createElement(be,{onClick:function(){return p(t)},id:t})}}]}}),[]);return a.a.createElement(_.a,{title:"Vasts Table",columns:b.columns,data:Object.values(t),icons:ve,editable:{onRowAdd:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("addRow",t),e.next=4,o(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onRowUpdate:function(){var e=Object(i.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("addRow",r.id,t),e.next=3,u(Object(l.a)({vastId:r.id},t));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),onRowDelete:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("removeRow",t.id),e.next=3,d(t.id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})},he=(r(455),r(486)),we=r(487),Ee=r(321),ge=function(e){return a.a.createElement(we.a,Object.assign({elevation:6,variant:"filled"},e))},Re=Object(Ee.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),xe=function(){var e=Re(),t=Object(n.useContext)(x),r=t.state.error,c=Object(y.a)(t,["state"]).setError,o=Object(n.useState)(r),u=Object(d.a)(o,2),s=u[0],i=u[1];Object(n.useEffect)((function(){i(r)}),[r]);return a.a.createElement("div",{className:e.root},a.a.createElement(he.a,{open:s,onClose:function(e,t){c(null)}},a.a.createElement(ge,{severity:"error"},r)))};var ye=function(){return a.a.createElement(R,null,a.a.createElement(xe,null),a.a.createElement(me,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ye,null)),document.getElementById("root"))}},[[373,1,2]]]);
//# sourceMappingURL=main.9ea03d56.chunk.js.map