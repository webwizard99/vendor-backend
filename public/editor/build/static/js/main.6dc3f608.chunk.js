(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return x})),n.d(a,"fetchPotions",(function(){return C}));var r=n(0),i=n.n(r),o=n(11),c=n.n(o),l=n(7),s=n(8),u=n(27),m=n(2),p=n(3),d=n(1),h=n(5),f=n(4),v=(n(39),n(40),n(41),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(d.a)(a)),a.renderGameLink=a.renderGameLink.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return i.a.createElement("li",null,i.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return i.a.createElement("li",null,i.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&i.a.createElement("li",{key:"gameLink"},i.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return i.a.createElement("div",{className:"MenuBar"},i.a.createElement("span",{className:"MenuTitle"},i.a.createElement("a",{href:"/"},"VENDOR")),i.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),n}(i.a.Component)),b=Object(l.b)((function(e){return{auth:e.auth}}))(v),E=(n(42),n(43),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={expanded:!1},a.setExpansion=a.setExpansion.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"ExpandableList"},i.a.createElement("div",{className:"TitleBar"},i.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),i.a.createElement("span",{className:"ExpanderTitle"},this.getTitle())),this.state.expanded?this.displayContents():"")}}]),n}(i.a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).displayContents=a.displayContents.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"getTitle",value:function(){return"Potions"}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return i.a.createElement("div",{className:"detailList"},t.map((function(t){return i.a.createElement("div",null,i.a.createElement("span",{className:"ListDetail",onClick:function(){return e.props.setDisplayForm("potion")}},t.type))})))}return""}}]),n}(E),y=Object(l.b)((function(e){return{potions:e.potions.potions}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",form:t})}}}))(O),j=n(10),k=n.n(j),g=n(15),N=n(16),T=n.n(N),x=function(){return function(){var e=Object(g.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(g.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/potions");case 2:n=e.sent,t({type:"SET_POTIONS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPotions()}},{key:"render",value:function(){return i.a.createElement("div",{className:"ObjectListColumn"},i.a.createElement(y,null))}}]),n}(i.a.Component),w=Object(l.b)((function(e){return{potions:e.potions.potions}}),a)(L),D=(n(62),n(63),"https://vendor-backend.herokuapp.com/"),F=["healing"],_=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"getPotionOptions",value:function(){return F.map((function(e){return i.a.createElement("option",{value:e},e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"PotionForm"},i.a.createElement("form",{action:D+"potions",id:"PotionPostForm",method:"POST"},i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"name"}),i.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26"})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"value"}),i.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000"})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"details"}),i.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200"})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"type"}),i.a.createElement("select",{className:"potion-select",name:"type",id:"type"},this.getPotionOptions())),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"level"}),i.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#"})),i.a.createElement("input",{type:"hidden",name:"key",id:"key",value:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).EDITOR_API_KEY}),i.a.createElement("input",{type:"submit",value:"Create Potion",class:"create-button"})))}}]),n}(i.a.Component),S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getDetailForm=a.getDetailForm.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"getDetailForm",value:function(){if(!this.props.formType)return i.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return i.a.createElement(_,null);default:return i.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return i.a.createElement("div",{className:"DetailView"},this.getDetailForm())}}]),n}(i.a.Component),P=Object(l.b)((function(e){return{formType:e.detail.type}}))(S),M=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement("div",{className:"AppContainer"},i.a.createElement(w,null),i.a.createElement(P,null)))}}]),n}(i.a.Component),I=Object(l.b)(null,a)(M),B=n(9),R={potions:null},A={type:!1},U=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(B.a)(Object(B.a)({},e),{},{potions:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":return Object(B.a)(Object(B.a)({},e),{},{type:t.form});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(s.d)(U,{},Object(s.a)(u.a));c.a.render(i.a.createElement(l.a,{store:G},i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6dc3f608.chunk.js.map