(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return B})),a.d(n,"fetchPotions",(function(){return T})),a.d(n,"fetchWeapons",(function(){return L}));var i=a(0),r=a.n(i),l=a(12),o=a.n(l),c=a(6),s=a(10),u=a(27),p=a(1),d=a(2),m=a(5),f=a(4),v=a(3),h=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(m.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return r.a.createElement("li",null,r.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return r.a.createElement("li",null,r.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&r.a.createElement("li",{key:"gameLink"},r.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"MenuBar"},r.a.createElement("span",{className:"MenuTitle"},r.a.createElement("a",{href:"/"},"VENDOR")),r.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(r.a.Component)),b=Object(c.b)((function(e){return{auth:e.auth}}))(h),y=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"contents"),r.a.createElement("p",null,"contents"),r.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ExpandableList"},r.a.createElement("div",{className:"TitleBar"},r.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),r.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(r.a.Component)),E=(a(45),a(46),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NewButton"},r.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(r.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(m.a)(n)),n.getNewButton=n.getNewButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return r.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},r.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return r.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),r.a.createElement("div",null,r.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(y),O=Object(c.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),j=(a(47),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(m.a)(n)),n.getNewButton=n.getNewButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Weapons"}},{key:"getNewButton",value:function(){return""}},{key:"displayContents",value:function(){var e=this;if(this.props.weapons){var t=this.props.weapons;return r.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"weapon"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),r.a.createElement("div",null,r.a.createElement("span",{className:a},t.item.name))})))}return""}}]),a}(y)),N=Object(c.b)((function(e){return{weapons:e.weapons.weapons,form:e.detail.type,targetId:e.detail.targetId}}))(j),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Items"}},{key:"displayContents",value:function(){return r.a.createElement("div",{className:"detailList"},r.a.createElement(O,null),r.a.createElement(N,null))}}]),a}(y),D=a(9),w=a.n(D),C=a(11),x=a(13),I=a.n(x),B=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/weapons");case 2:a=e.sent,t({type:"SET_WEAPONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).shouldComponentUpdate=n.shouldComponentUpdate.bind(Object(m.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions(),this.props.fetchWeapons()}},{key:"shouldComponentUpdate",value:function(e,t){if(this.props.dialogActive&!e.dialogActive)return!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"ObjectListColumn"},r.a.createElement(k,null))}}]),a}(r.a.Component),P=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(F),S=(a(66),a(67),["healing"]),_=(a(68),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(m.a)(n)),n.getMethod=n.getMethod.bind(Object(m.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(r.a.Component)),M=(a(69),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"CloseFormButton"},r.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(r.a.Component)),A=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getPotionOptions",value:function(){return S.map((function(e){return r.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",i="",l="",o="",c=1e3,s=null,u=null;if(this.props.edit){var p=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=p.item.name,n=p.item.value,i=p.item.details,c=p.item.rarity,l=p.type,o=p.level,t=a,s=p.id,u=p.itemId}return r.a.createElement("div",{className:"PotionForm"},r.a.createElement("div",{className:"form-heading-bar"},r.a.createElement("h2",{className:"form-heading"},t),r.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},r.a.createElement(M,null))),r.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),r.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:i})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),r.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:c})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),r.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:l},this.getPotionOptions())),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),r.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),r.a.createElement("input",{type:"hidden",name:"id",value:s}),r.a.createElement("input",{type:"hidden",name:"itemId",value:u}),r.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),r.a.createElement("input",{type:"submit",value:this.props.edit?"Update Potion":"Create Potion",class:"button create-button"})))}}]),a}(_),R=Object(c.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(A),V=(a(70),a(71),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(m.a)(n)),n.getDeleteButton=n.getDeleteButton.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getDeleteButton",value:function(){return""}},{key:"handleYes",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"DisplayStatic"},this.getDisplay(),this.getDeleteButton())}}]),a}(r.a.Component)),Y=(a(72),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"EditButton"},r.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(r.a.Component)),G=(a(73),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"DeleteButton"},r.a.createElement("div",{className:"deletButtonIcon"},"DELETE"))}}]),a}(r.a.Component)),U={makeRequest:function(){var e=Object(C.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,"/").concat(a),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},W=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,r.a.createElement("div",{className:"DeletePotionButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Potion from Database?"})}},r.a.createElement(G,null))}},{key:"handleYes",value:function(){console.log("Delete handler in potion display component reached!"),U.makeRequest("potion",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,i=t.item.details,l=t.type,o=t.level,c=t.item.rarity;return r.a.createElement("div",{className:"PotionDisplay"},r.a.createElement("div",{className:"heading-bar"},r.a.createElement("h2",{className:"display-heading"},a),r.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},r.a.createElement(Y,null))),r.a.createElement("div",{className:"display-fields-area"},r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Name"),r.a.createElement("span",{className:"display-text"},a)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Value"),r.a.createElement("span",{className:"display-number"},n)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Details"),r.a.createElement("span",{className:"display-text"},i)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Rarity"),r.a.createElement("span",{className:"display-text"},c)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Type"),r.a.createElement("span",{className:"display-text"},l)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Level"),r.a.createElement("span",{className:"display-number"},o))))}}]),a}(V),H=Object(c.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(W),q=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(m.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?r.a.createElement(R,null):r.a.createElement(H,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return r.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();default:return r.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(r.a.Component),J=Object(c.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))(q),X=(a(74),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleNo=n.handleNo.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handleNo",value:function(e){var t=e.target.classList;(t.contains("DialogBoxContainer")||t.contains("dialog-no-btn"))&&this.props.setDialog({active:!1,text:"",ref:null,yesCallback:null,noCallback:null})}},{key:"handleYes",value:function(){window.dialogRef.handleYes()}},{key:"render",value:function(){return r.a.createElement("div",{className:"DialogBoxContainer",onClick:this.handleNo},r.a.createElement("div",{className:"DialogBox"},r.a.createElement("div",{className:"dialog-heading-bar"},r.a.createElement("h2",{className:"dialog-heading"},"Confirm Choice")),r.a.createElement("div",{className:"dialog-prompt"},this.props.text),r.a.createElement("div",{className:"dialog-button-bar"},r.a.createElement("button",{className:"dialog-no-btn",onClick:this.handleNo},"NO"),r.a.createElement("button",{className:"dialog-yes-btn",onClick:this.handleYes},"YES"))))}}]),a}(r.a.Component)),$=Object(c.b)((function(e){return{text:e.dialog.text}}),(function(e){return{setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(X),z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.getDialog=n.getDialog.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?r.a.createElement($,null):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"AppContainer"},r.a.createElement(P,null),r.a.createElement(J,null)),this.getDialog())}}]),a}(r.a.Component),K=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(z),Q=a(8),Z={potions:null},ee={type:!1,targetId:null,edit:!1},te={active:!1,text:""},ae={weapons:null},ne=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(Q.a)(Object(Q.a)({},e),{},{potions:t.payload});default:return e}},weapons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEAPONS":return Object(Q.a)(Object(Q.a)({},e),{},{weapons:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,i=t.payload.form;return Object(Q.a)(Object(Q.a)({},e),{},{type:i,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(Q.a)(Object(Q.a)({},e),{},{active:t.payload.active,text:t.payload.text});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(s.d)(ne,{},Object(s.a)(u.a));o.a.render(r.a.createElement(c.a,{store:ie},r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d936faf1.chunk.js.map