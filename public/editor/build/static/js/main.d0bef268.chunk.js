(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return x})),a.d(n,"fetchPotions",(function(){return I}));var i=a(0),l=a.n(i),r=a(11),o=a.n(r),c=a(6),s=a(9),u=a(27),d=a(1),p=a(2),m=a(5),f=a(4),h=a(3),v=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(m.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return l.a.createElement("li",null,l.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return l.a.createElement("li",null,l.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&l.a.createElement("li",{key:"gameLink"},l.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return l.a.createElement("div",{className:"MenuBar"},l.a.createElement("span",{className:"MenuTitle"},l.a.createElement("a",{href:"/"},"VENDOR")),l.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(l.a.Component)),b=Object(c.b)((function(e){return{auth:e.auth}}))(v),y=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"contents"),l.a.createElement("p",null,"contents"),l.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"ExpandableList"},l.a.createElement("div",{className:"TitleBar"},l.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),l.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(l.a.Component)),E=(a(45),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"NewButton"},l.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(l.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(m.a)(n)),n.getNewButton=n.getNewButton.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return l.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},l.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return l.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),l.a.createElement("div",null,l.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(y),O=Object(c.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),j=a(10),N=a.n(j),k=a(15),D=a(16),C=a.n(D),x=function(){return function(){var e=Object(k.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(k.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions()}},{key:"render",value:function(){return l.a.createElement("div",{className:"ObjectListColumn"},l.a.createElement(O,null))}}]),a}(l.a.Component),B=Object(c.b)((function(e){return{potions:e.potions.potions}}),n)(w),T=(a(64),a(65),["healing"]),F=(a(66),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(m.a)(n)),n.getMethod=n.getMethod.bind(Object(m.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(l.a.Component)),L=(a(67),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"CloseFormButton"},l.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(l.a.Component)),P=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getPotionOptions",value:function(){return T.map((function(e){return l.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",i="",r="",o="";if(this.props.edit){var c=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=c.item.name,n=c.item.value,i=c.item.details,r=c.type,o=c.level,t=a}return l.a.createElement("div",{className:"PotionForm"},l.a.createElement("div",{className:"form-heading-bar"},l.a.createElement("h2",{className:"form-heading"},t),l.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},l.a.createElement(L,null))),l.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),l.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),l.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:i})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),l.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:r},this.getPotionOptions())),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),l.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),l.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),l.a.createElement("input",{type:"submit",value:"Create Potion",class:"button create-button"})))}}]),a}(F),M=Object(c.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(P),_=(a(68),a(69),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(m.a)(n)),n.getDeleteButton=n.getDeleteButton.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getDeleteButton",value:function(){return""}},{key:"handleYes",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"DisplayStatic"},this.getDisplay(),this.getDeleteButton())}}]),a}(l.a.Component)),S=(a(70),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"EditButton"},l.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(l.a.Component)),A=(a(71),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"DeleteButton"},l.a.createElement("div",{className:"deletButtonIcon"},"DELETE"))}}]),a}(l.a.Component)),R={makeRequest:function(e,t){return fetch("/".concat(e,"/").concat(t),{method:"DELETE"})}},Y=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,l.a.createElement("div",{className:"DeletePotionButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Potion from Database?"})}},l.a.createElement(A,null))}},{key:"handleYes",value:function(){console.log("Delete handler in potion display component reached!");var e=R.makeRequest("potion",this.props.displayId);console.log(e),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,i=t.item.details,r=t.type,o=t.level;return l.a.createElement("div",{className:"PotionDisplay"},l.a.createElement("div",{className:"heading-bar"},l.a.createElement("h2",{className:"display-heading"},a),l.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},l.a.createElement(S,null))),l.a.createElement("div",{className:"display-fields-area"},l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Name"),l.a.createElement("span",{className:"display-text"},a)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Value"),l.a.createElement("span",{className:"display-number"},n)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Details"),l.a.createElement("span",{className:"display-text"},i)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Type"),l.a.createElement("span",{className:"display-text"},r)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Level"),l.a.createElement("span",{className:"display-number"},o))))}}]),a}(_),V=Object(c.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(Y),G=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(m.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?l.a.createElement(M,null):l.a.createElement(V,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return l.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();default:return l.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return l.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(l.a.Component),U=Object(c.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))(G),H=(a(72),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleNo=n.handleNo.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"handleNo",value:function(e){var t=e.target.classList;(t.contains("DialogBoxContainer")||t.contains("dialog-no-btn"))&&this.props.setDialog({active:!1,text:"",ref:null,yesCallback:null,noCallback:null})}},{key:"handleYes",value:function(){window.dialogRef.handleYes()}},{key:"render",value:function(){return l.a.createElement("div",{className:"DialogBoxContainer",onClick:this.handleNo},l.a.createElement("div",{className:"DialogBox"},l.a.createElement("div",{className:"dialog-heading-bar"},l.a.createElement("h2",{className:"dialog-heading"},"Confirm Choice")),l.a.createElement("div",{className:"dialog-prompt"},this.props.text),l.a.createElement("div",{className:"dialog-button-bar"},l.a.createElement("button",{className:"dialog-no-btn",onClick:this.handleNo},"NO"),l.a.createElement("button",{className:"dialog-yes-btn",onClick:this.handleYes},"YES"))))}}]),a}(l.a.Component)),q=Object(c.b)((function(e){return{text:e.dialog.text}}),(function(e){return{setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(H),J=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.getDialog=n.getDialog.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?l.a.createElement(q,null):""}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement("div",{className:"AppContainer"},l.a.createElement(B,null),l.a.createElement(U,null)),this.getDialog())}}]),a}(l.a.Component),W=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(J),X=a(8),$={potions:null},z={type:!1,targetId:null,edit:!1},K={active:!1,text:""},Q=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(X.a)(Object(X.a)({},e),{},{potions:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,i=t.payload.form;return Object(X.a)(Object(X.a)({},e),{},{type:i,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(X.a)(Object(X.a)({},e),{},{active:t.payload.active,text:t.payload.text});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(s.d)(Q,{},Object(s.a)(u.a));o.a.render(l.a.createElement(c.a,{store:Z},l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d0bef268.chunk.js.map