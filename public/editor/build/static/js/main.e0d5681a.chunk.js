(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,a){e.exports=a(77)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return B})),a.d(n,"fetchPotions",(function(){return F})),a.d(n,"fetchWeapons",(function(){return T}));var l=a(0),i=a.n(l),r=a(12),o=a.n(r),c=a(6),s=a(10),u=a(27),p=a(1),d=a(2),m=a(5),f=a(4),v=a(3),h=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(m.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return i.a.createElement("li",null,i.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return i.a.createElement("li",null,i.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&i.a.createElement("li",{key:"gameLink"},i.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return i.a.createElement("div",{className:"MenuBar"},i.a.createElement("span",{className:"MenuTitle"},i.a.createElement("a",{href:"/"},"VENDOR")),i.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(i.a.Component)),b=Object(c.b)((function(e){return{auth:e.auth}}))(h),y=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"),i.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"ExpandableList"},i.a.createElement("div",{className:"TitleBar"},i.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),i.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(i.a.Component)),E=(a(45),a(46),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"NewButton"},i.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(i.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(m.a)(n)),n.getNewButton=n.getNewButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return i.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},i.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return i.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),i.a.createElement("div",null,i.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(y),O=Object(c.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),N=(a(47),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(m.a)(n)),n.getNewButton=n.getNewButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Weapons"}},{key:"getNewButton",value:function(){var e=this;return i.a.createElement("div",{className:"NewWeaponButton",onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:null})}},i.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.weapons){var t=this.props.weapons;return i.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"weapon"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),i.a.createElement("div",null,i.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(y)),j=Object(c.b)((function(e){return{weapons:e.weapons.weapons,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(N),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getTitle",value:function(){return"Items"}},{key:"displayContents",value:function(){return i.a.createElement("div",{className:"detailList"},i.a.createElement(O,null),i.a.createElement(j,null))}}]),a}(y),D=a(9),w=a.n(D),C=a(11),I=a(13),x=a.n(I),B=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/weapons");case 2:a=e.sent,t({type:"SET_WEAPONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).shouldComponentUpdate=n.shouldComponentUpdate.bind(Object(m.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions(),this.props.fetchWeapons()}},{key:"shouldComponentUpdate",value:function(e,t){if(this.props.dialogActive&!e.dialogActive)return!0}},{key:"render",value:function(){return i.a.createElement("div",{className:"ObjectListColumn"},i.a.createElement(k,null))}}]),a}(i.a.Component),P=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(L),S=(a(66),a(67),["healing"]),_=(a(68),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(m.a)(n)),n.getMethod=n.getMethod.bind(Object(m.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(i.a.Component)),M=(a(69),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"CloseFormButton"},i.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(i.a.Component)),A=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getPotionOptions",value:function(){return S.map((function(e){return i.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",l="",r="",o="",c=1e3,s=null,u=null;if(this.props.edit){var p=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=p.item.name,n=p.item.value,l=p.item.details,c=p.item.rarity,r=p.type,o=p.level,t=a,s=p.id,u=p.itemId}return i.a.createElement("div",{className:"PotionForm"},i.a.createElement("div",{className:"form-heading-bar"},i.a.createElement("h2",{className:"form-heading"},t),i.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},i.a.createElement(M,null))),i.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),i.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),i.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:l})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),i.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:c})),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),i.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:r},this.getPotionOptions())),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),i.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),i.a.createElement("input",{type:"hidden",name:"id",value:s}),i.a.createElement("input",{type:"hidden",name:"itemId",value:u}),i.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),i.a.createElement("input",{type:"submit",value:this.props.edit?"Update Potion":"Create Potion",class:"button create-button"})))}}]),a}(_),W=Object(c.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(A),R=(a(70),a(71),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(m.a)(n)),n.getDeleteButton=n.getDeleteButton.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getDeleteButton",value:function(){return""}},{key:"handleYes",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"DisplayStatic"},this.getDisplay(),this.getDeleteButton())}}]),a}(i.a.Component)),V=(a(72),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"EditButton"},i.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(i.a.Component)),Y=(a(73),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"DeleteButton"},i.a.createElement("div",{className:"deletButtonIcon"},"DELETE"))}}]),a}(i.a.Component)),G={makeRequest:function(){var e=Object(C.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,"/").concat(a),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},U=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,i.a.createElement("div",{className:"DeletePotionButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Potion from Database?"})}},i.a.createElement(Y,null))}},{key:"handleYes",value:function(){console.log("Delete handler in potion display component reached!"),G.makeRequest("potion",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,l=t.item.details,r=t.item.rarity,o=t.type,c=t.level;return i.a.createElement("div",{className:"PotionDisplay"},i.a.createElement("div",{className:"heading-bar"},i.a.createElement("h2",{className:"display-heading"},a),i.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},i.a.createElement(V,null))),i.a.createElement("div",{className:"display-fields-area"},i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Name"),i.a.createElement("span",{className:"display-text"},a)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Value"),i.a.createElement("span",{className:"display-number"},n)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Details"),i.a.createElement("span",{className:"display-text"},l)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Rarity"),i.a.createElement("span",{className:"display-text"},r)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Type"),i.a.createElement("span",{className:"display-text"},o)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Level"),i.a.createElement("span",{className:"display-number"},c))))}}]),a}(R),H=Object(c.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(U),q=(a(74),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getForm",value:function(){return i.a.createElement("div",{className:"WeaponForm"},"WeaponForm")}}]),a}(_)),J=(a(75),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getDeleteButton",value:function(){return i.a.createElement("div",{className:"DeleteWeaponButton"},i.a.createElement(Y,null))}},{key:"getDisplay",value:function(){var e=this,t=this.props.weapons.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,l=t.item.details,r=t.item.rarity,o=t.level,c=t.damage;return i.a.createElement("div",{className:"WeaponDisplay"},i.a.createElement("div",{className:"heading-bar"},i.a.createElement("h2",{className:"display-heading"},a),i.a.createElement("div",{className:"WeaponEditButton"},i.a.createElement(V,null))),i.a.createElement("div",{className:"display-fields-area"},i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Name"),i.a.createElement("span",{className:"display-text"},a)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Value"),i.a.createElement("span",{className:"display-number"},n)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Details"),i.a.createElement("span",{className:"display-text"},l)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Rarity"),i.a.createElement("span",{className:"display-text"},r)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Level"),i.a.createElement("span",{className:"display-number"},o)),i.a.createElement("div",{className:"display-group"},i.a.createElement("span",{className:"display-label"},"Damage"),i.a.createElement("span",{className:"display-text"},c))))}}]),a}(R)),X=Object(c.b)((function(e){return{weapons:e.weapons.weapons,displayId:e.detail.targetId}}))(J),$=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(m.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(m.a)(n)),n.getWeaponDetail=n.getWeaponDetail.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?i.a.createElement(W,null):i.a.createElement(H,null)}},{key:"getWeaponDetail",value:function(){return null==this.props.targetId||this.props.edit?i.a.createElement(q,null):i.a.createElement(X,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return i.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();case"weapon":return this.getWeaponDetail();default:return i.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return i.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(i.a.Component),z=Object(c.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))($),K=(a(76),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleNo=n.handleNo.bind(Object(m.a)(n)),n.handleYes=n.handleYes.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handleNo",value:function(e){var t=e.target.classList;(t.contains("DialogBoxContainer")||t.contains("dialog-no-btn"))&&this.props.setDialog({active:!1,text:"",ref:null,yesCallback:null,noCallback:null})}},{key:"handleYes",value:function(){window.dialogRef.handleYes()}},{key:"render",value:function(){return i.a.createElement("div",{className:"DialogBoxContainer",onClick:this.handleNo},i.a.createElement("div",{className:"DialogBox"},i.a.createElement("div",{className:"dialog-heading-bar"},i.a.createElement("h2",{className:"dialog-heading"},"Confirm Choice")),i.a.createElement("div",{className:"dialog-prompt"},this.props.text),i.a.createElement("div",{className:"dialog-button-bar"},i.a.createElement("button",{className:"dialog-no-btn",onClick:this.handleNo},"NO"),i.a.createElement("button",{className:"dialog-yes-btn",onClick:this.handleYes},"YES"))))}}]),a}(i.a.Component)),Q=Object(c.b)((function(e){return{text:e.dialog.text}}),(function(e){return{setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(K),Z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.getDialog=n.getDialog.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?i.a.createElement(Q,null):""}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement("div",{className:"AppContainer"},i.a.createElement(P,null),i.a.createElement(z,null)),this.getDialog())}}]),a}(i.a.Component),ee=Object(c.b)((function(e){return{dialogActive:e.dialog.active}}),n)(Z),te=a(8),ae={potions:null},ne={type:!1,targetId:null,edit:!1},le={active:!1,text:""},ie={weapons:null},re=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(te.a)(Object(te.a)({},e),{},{potions:t.payload});default:return e}},weapons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEAPONS":return Object(te.a)(Object(te.a)({},e),{},{weapons:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,l=t.payload.form;return Object(te.a)(Object(te.a)({},e),{},{type:l,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(te.a)(Object(te.a)({},e),{},{active:t.payload.active,text:t.payload.text});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(s.d)(re,{},Object(s.a)(u.a));o.a.render(i.a.createElement(c.a,{store:oe},i.a.createElement(i.a.StrictMode,null,i.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.e0d5681a.chunk.js.map