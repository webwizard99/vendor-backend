(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return C})),n.d(a,"fetchPotions",(function(){return T}));var r=n(0),o=n.n(r),i=n(11),c=n.n(i),u=n(7),s=n(8),l=n(27),p=n(2),d=n(3),m=n(1),f=n(5),h=n(4),b=(n(39),n(40),n(41),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(m.a)(a)),a.renderGameLink=a.renderGameLink.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return o.a.createElement("li",null,o.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return o.a.createElement("li",null,o.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&o.a.createElement("li",{key:"gameLink"},o.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"MenuBar"},o.a.createElement("span",{className:"MenuTitle"},o.a.createElement("a",{href:"/"},"VENDOR")),o.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),n}(o.a.Component)),v=Object(u.b)((function(e){return{auth:e.auth}}))(b),O=(n(42),n(43),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={expanded:!1},a.setExpansion=a.setExpansion.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"contents"),o.a.createElement("p",null,"contents"),o.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return o.a.createElement("div",{className:"ExpandableList"},o.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),o.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.state.expanded?this.displayContents():"")}}]),n}(o.a.Component)),E=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).displayContents=a.displayContents.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"getTitle",value:function(){return"Potions"}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return o.a.createElement("div",{className:"detailList"},t.map((function(t){return o.a.createElement("div",null,o.a.createElement("span",{className:"ListDetail",onClick:function(){return e.props.setDisplayForm("potion")}},t.type))})))}return""}}]),n}(O),j=Object(u.b)((function(e){return{potions:e.potions.potions}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",form:t})}}}))(E),y=n(10),k=n.n(y),g=n(15),w=n(16),L=n.n(w),C=function(){return function(){var e=Object(g.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(g.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/potions");case 2:n=e.sent,t({type:"SET_POTIONS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPotions()}},{key:"render",value:function(){return o.a.createElement("div",{className:"ObjectListColumn"},o.a.createElement(j,null))}}]),n}(o.a.Component),D=Object(u.b)((function(e){return{potions:e.potions.potions}}),a)(x),N=(n(62),n(63),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"PotionForm"},"PotionForm")}}]),n}(o.a.Component)),F=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getDetailForm=a.getDetailForm.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"getDetailForm",value:function(){if(!this.props.formType)return"no details to display";switch(this.props.formType){case"potion":return o.a.createElement(N,null);default:return"detail type unknown"}}},{key:"render",value:function(){return o.a.createElement("div",{className:"DetailView"},this.getDetailForm())}}]),n}(o.a.Component),M=Object(u.b)((function(e){return{formType:e.detail.type}}))(F),S=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement("div",{className:"AppContainer"},o.a.createElement(D,null),o.a.createElement(M,null)))}}]),n}(o.a.Component),_=Object(u.b)(null,a)(S),P=n(9),I={potions:null},G={type:!1},R=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(P.a)(Object(P.a)({},e),{},{potions:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":return Object(P.a)(Object(P.a)({},e),{},{type:t.form});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=Object(s.d)(R,{},Object(s.a)(l.a));c.a.render(o.a.createElement(u.a,{store:A},o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0f83e20b.chunk.js.map