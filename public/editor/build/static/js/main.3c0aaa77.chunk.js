(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{27:function(e,t,n){e.exports=n(62)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return x}));var r=n(0),c=n.n(r),i=n(9),o=n.n(i),u=n(8),l=n(7),s=n(24),d=n(2),m=n(3),p=n(6),h=n(5),f=n(4),b=(n(38),n(39),n(40),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(p.a)(a)),a.renderGameLink=a.renderGameLink.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return c.a.createElement("li",null,c.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&c.a.createElement("li",{key:"gameLink"},c.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return c.a.createElement("div",{className:"MenuBar"},c.a.createElement("span",{className:"MenuTitle"},c.a.createElement("a",{href:"/"},"VENDOR")),c.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),n}(c.a.Component)),v=Object(u.b)((function(e){return{auth:e.auth}}))(b),E=(n(41),n(42),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={expanded:!1},a.setExpansion=a.setExpansion.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"contents"),c.a.createElement("p",null,"contents"),c.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return c.a.createElement("div",{className:"ExpandableList"},c.a.createElement("div",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+",this.state.expanded?this.displayContents():""))}}]),n}(c.a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"ObjectListColumn"},"ObjectListColumn",c.a.createElement(E,null))}}]),n}(c.a.Component),j=(n(43),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"DetailView"},"DetailView")}}]),n}(c.a.Component)),k=n(13),y=n.n(k),g=n(25),w=n(26),L=n.n(w),x=function(){return function(){var e=Object(g.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement("div",{className:"AppContainer"},c.a.createElement(O,null),c.a.createElement(j,null)))}}]),n}(c.a.Component),N=Object(u.b)(null,a)(C),D=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=Object(l.d)(D,{},Object(l.a)(s.a));o.a.render(c.a.createElement(u.a,{store:M},c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3c0aaa77.chunk.js.map