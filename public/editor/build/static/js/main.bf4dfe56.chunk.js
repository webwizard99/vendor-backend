(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,a){e.exports=a(72)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return I})),a.d(n,"fetchPotions",(function(){return x}));var r=a(0),i=a.n(r),l=a(11),o=a.n(l),c=a(6),s=a(9),u=a(27),p=a(1),m=a(2),d=a(5),f=a(4),v=a(3),b=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(d.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return i.a.createElement("li",null,i.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return i.a.createElement("li",null,i.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&i.a.createElement("li",{key:"gameLink"},i.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return i.a.createElement("div",{className:"MenuBar"},i.a.createElement("span",{className:"MenuTitle"},i.a.createElement("a",{href:"/"},"VENDOR")),i.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(i.a.Component)),h=Object(c.b)((function(e){return{auth:e.auth}}))(b),y=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"ExpandableList"},i.a.createElement("div",{className:"TitleBar"},i.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),i.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(i.a.Component)),E=(a(45),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"NewButton"},i.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(i.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return i.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},i.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return i.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),i.a.createElement("div",null,i.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(y),O=Object(c.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),j=a(10),N=a.n(j),k=a(15),D=a(16),C=a.n(D),I=function(){return function(){var e=Object(k.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(k.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions()}},{key:"render",value:function(){return i.a.createElement("div",{className:"ObjectListColumn"},i.a.createElement(O,null))}}]),a}(i.a.Component),F=Object(c.b)((function(e){return{potions:e.potions.potions}}),n)(w),T=(a(64),a(65),["healing"]),B=(a(66),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(d.a)(n)),n.getMethod=n.getMethod.bind(Object(d.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(i.a.Component)),L=(a(67),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"CloseFormButton"},i.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(i.a.Component)),P=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPotionOptions",value:function(){return T.map((function(e){return i.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",r="",l="",o="";if(this.props.edit){var c=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=c.item.name,n=c.item.value,r=c.item.details,l=c.type,o=c.level,t=a}return i.a.createElement("div",{className:"PotionForm"},i.a.createElement("div",{className:"form-heading-bar"},i.a.createElement("h2",{className:"form-heading"},t),i.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},i.a.createElement(L,null))),i.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),i.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),i.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:r})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),i.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:l},this.getPotionOptions())),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),i.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),i.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),i.a.createElement("input",{type:"submit",value:"Create Potion",class:"button create-button"})))}}]),a}(B),M=Object(c.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(P),_=(a(68),a(69),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(d.a)(n)),n.getHeading=n.getHeading.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getHeading",value:function(){return""}},{key:"render",value:function(){return i.a.createElement("div",{className:"DisplayStatic"},this.getDisplay())}}]),a}(i.a.Component)),S=(a(70),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"EditButton"},i.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(i.a.Component)),A=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,r=t.item.details,l=t.type,o=t.level;return i.a.createElement("div",{className:"PotionDisplay"},i.a.createElement("div",{className:"heading-bar"},i.a.createElement("h2",{className:"display-heading"},a),i.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},i.a.createElement(S,null))),i.a.createElement("div",{className:"display-fields-area"},i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Name"),i.a.createElement("span",{className:"display-text"},a)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Value"),i.a.createElement("span",{className:"display-number"},n)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Details"),i.a.createElement("span",{className:"display-text"},r)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Type"),i.a.createElement("span",{className:"display-text"},l)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Level"),i.a.createElement("span",{className:"display-number"},o))))}}]),a}(_),V=Object(c.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(A),R=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(d.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?i.a.createElement(M,null):i.a.createElement(V,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return i.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();default:return i.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return i.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(i.a.Component),G=Object(c.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))(R),H=(a(71),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"DialogBoxContainer"},i.a.createElement("div",{className:"DialogBox"},"DialogBox"))}}]),a}(i.a.Component)),U=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n.getDialog=n.getDialog.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?i.a.createElement(H,null):""}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement("div",{className:"AppContainer"},i.a.createElement(F,null),i.a.createElement(G,null)),this.getDialog())}}]),a}(i.a.Component),J=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(U),W=a(8),X={potions:null},$={type:!1,targetId:null,edit:!1},q={active:!0,text:"",ref:null,yesCallback:null,noCallback:null},z=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(W.a)(Object(W.a)({},e),{},{potions:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,r=t.payload.form;return Object(W.a)(Object(W.a)({},e),{},{type:r,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(W.a)(Object(W.a)({},e),{},{active:t.payload.active,text:t.payload.text,ref:t.payload.ref,yesCallback:t.payload.yesCallback,noCallback:t.payload.noCallback});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(s.d)(z,{},Object(s.a)(u.a));o.a.render(i.a.createElement(c.a,{store:K},i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.bf4dfe56.chunk.js.map