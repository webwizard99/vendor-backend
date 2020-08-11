(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],{28:function(e,t,a){e.exports=a(79)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return T})),a.d(n,"fetchPotions",(function(){return L})),a.d(n,"fetchWeapons",(function(){return _})),a.d(n,"fetchArmor",(function(){return A}));var r=a(0),l=a.n(r),i=a(13),o=a.n(i),s=a(6),c=a(10),u=a(27),p=a(1),m=a(2),d=a(5),f=a(4),v=a(3),h=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(d.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return l.a.createElement("li",null,l.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return l.a.createElement("li",null,l.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&l.a.createElement("li",{key:"gameLink"},l.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return l.a.createElement("div",{className:"MenuBar"},l.a.createElement("span",{className:"MenuTitle"},l.a.createElement("a",{href:"/"},"VENDOR")),l.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(l.a.Component)),y=Object(s.b)((function(e){return{auth:e.auth}}))(h),b=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"contents"),l.a.createElement("p",null,"contents"),l.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"ExpandableList"},l.a.createElement("div",{className:"TitleBar"},l.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),l.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(l.a.Component)),E=(a(45),a(46),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"NewButton"},l.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(l.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return l.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},l.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return l.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),l.a.createElement("p",null,l.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(b),N=Object(s.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),O=(a(47),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getTitle",value:function(){return"Weapons"}},{key:"getNewButton",value:function(){var e=this;return l.a.createElement("div",{className:"NewWeaponButton",onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:null})}},l.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.weapons){var t=this.props.weapons;return l.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"weapon"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),l.a.createElement("p",null,l.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(b)),j=Object(s.b)((function(e){return{weapons:e.weapons.weapons,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(O),D=(a(48),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getTitle",value:function(){return"Armor"}},{key:"getNewButton",value:function(){return l.a.createElement("div",{className:"NewArmorButton"},l.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.armor){var t=this.props.armor;return l.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"armor"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),console.log(t.id),l.a.createElement("p",null,l.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"armor",edit:!1,target:t.id})}},t.item.name))})))}return""}}]),a}(b)),k=Object(s.b)((function(e){return{armor:e.armor.armor,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(D),w=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getTitle",value:function(){return"Items"}},{key:"displayContents",value:function(){return l.a.createElement("div",{className:"detailList"},l.a.createElement(N,null),l.a.createElement(j,null),l.a.createElement(k,null))}}]),a}(b),I=a(9),C=a.n(I),x=a(11),F=a(12),B=a.n(F),T=function(){return function(){var e=Object(x.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(x.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var e=Object(x.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("/weapons");case 2:a=e.sent,t({type:"SET_WEAPONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(x.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("/armor");case 2:a=e.sent,t({type:"SET_ARMOR",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).shouldComponentUpdate=n.shouldComponentUpdate.bind(Object(d.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions(),this.props.fetchWeapons(),this.props.fetchArmor()}},{key:"shouldComponentUpdate",value:function(e,t){if(this.props.dialogActive&!e.dialogActive)return!0}},{key:"render",value:function(){return l.a.createElement("div",{className:"ObjectListColumn"},l.a.createElement(w,null))}}]),a}(l.a.Component),M=Object(s.b)((function(e){return{dialogActive:e.dialog.active}}),n)(S),P=(a(67),a(68),["healing"]),R=(a(69),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(d.a)(n)),n.getMethod=n.getMethod.bind(Object(d.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(l.a.Component)),W=(a(70),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"CloseFormButton"},l.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(l.a.Component)),V=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getPotionOptions",value:function(){return P.map((function(e){return l.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",r="",i="",o="",s=1e3,c=null,u=null;if(this.props.edit){var p=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=p.item.name,n=p.item.value,r=p.item.details,s=p.item.rarity,i=p.type,o=p.level,t=a,c=p.id,u=p.itemId}return l.a.createElement("div",{className:"PotionForm"},l.a.createElement("div",{className:"form-heading-bar"},l.a.createElement("h2",{className:"form-heading"},t),l.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},l.a.createElement(W,null))),l.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),l.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),l.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:r})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),l.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:s})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),l.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:i},this.getPotionOptions())),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),l.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),l.a.createElement("input",{type:"hidden",name:"id",value:c}),l.a.createElement("input",{type:"hidden",name:"itemId",value:u}),l.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),l.a.createElement("input",{type:"submit",value:this.props.edit?"Update Potion":"Create Potion",class:"button create-button"})))}}]),a}(R),Y=Object(s.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(V),G=(a(71),a(72),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(d.a)(n)),n.getDeleteButton=n.getDeleteButton.bind(Object(d.a)(n)),n.handleYes=n.handleYes.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getDeleteButton",value:function(){return""}},{key:"handleYes",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"DisplayStatic"},this.getDisplay(),this.getDeleteButton())}}]),a}(l.a.Component)),U=(a(73),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"EditButton"},l.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(l.a.Component)),H=(a(74),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"DeleteButton"},l.a.createElement("div",{className:"deletButtonIcon"},"DELETE"))}}]),a}(l.a.Component)),q={makeRequest:function(){var e=Object(x.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,"/").concat(a),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},J=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,l.a.createElement("div",{className:"DeletePotionButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Potion from Database?"})}},l.a.createElement(H,null))}},{key:"handleYes",value:function(){console.log("Delete handler in potion display component reached!"),q.makeRequest("potion",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,r=t.item.details,i=t.item.rarity,o=t.type,s=t.level;return l.a.createElement("div",{className:"PotionDisplay"},l.a.createElement("div",{className:"heading-bar"},l.a.createElement("h2",{className:"display-heading"},a),l.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},l.a.createElement(U,null))),l.a.createElement("div",{className:"display-fields-area"},l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Name"),l.a.createElement("span",{className:"display-text"},a)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Value"),l.a.createElement("span",{className:"display-number"},n)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Details"),l.a.createElement("span",{className:"display-text"},r)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Rarity"),l.a.createElement("span",{className:"display-text"},i)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Type"),l.a.createElement("span",{className:"display-text"},o)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Level"),l.a.createElement("span",{className:"display-number"},s))))}}]),a}(G),X=Object(s.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(J),$=(a(75),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"weapon",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Weapon",a="",n="",r="",i=1e3,o="",s=1,c=null,u=null;if(this.props.edit){var p=this.props.weapons.find((function(t){return t.id===e.props.displayId}));a=p.item.name,n=p.item.value,r=p.item.details,i=p.item.rarity,o=p.level,s=p.damage,t=a,c=p.id,u=p.itemId}return l.a.createElement("div",{className:"WeaponForm"},l.a.createElement("div",{className:"form-heading-bar"},l.a.createElement("h2",{className:"form-heading"},t),l.a.createElement("div",{className:"close-weapon-btn",onClick:this.handleCloseButton},l.a.createElement(W,null))),l.a.createElement("form",{action:"/weapons",className:"input-fields-area",id:"WeaponPostForm",method:"POST"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"weapon name",maxLength:"26",defaultValue:a})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),l.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),l.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:r})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),l.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:i})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),l.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:o})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"item-label",htmlFor:"damage"},"Damage"),l.a.createElement("input",{type:"number",name:"damage",id:"damage",className:"input-number",placeholder:"#",defaultValue:s})),l.a.createElement("input",{type:"hidden",name:"id",value:c}),l.a.createElement("input",{type:"hidden",name:"itemId",value:u}),l.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),l.a.createElement("input",{type:"submit",value:this.props.edit?"Update Weapon":"Create Weapon",class:"button create-button"})))}}]),a}(R)),z=Object(s.b)((function(e){return{edit:e.detail.edit,weapons:e.weapons.weapons,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))($),K=(a(76),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,l.a.createElement("div",{className:"DeleteWeaponButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Weapon from Database?"})}},l.a.createElement(H,null))}},{key:"handleYes",value:function(){q.makeRequest("weapon",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.weapons.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,r=t.item.details,i=t.item.rarity,o=t.level,s=t.damage;return l.a.createElement("div",{className:"WeaponDisplay"},l.a.createElement("div",{className:"heading-bar"},l.a.createElement("h2",{className:"display-heading"},a),l.a.createElement("div",{className:"WeaponEditButton",onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!0,targetId:t.id})}},l.a.createElement(U,null))),l.a.createElement("div",{className:"display-fields-area"},l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Name"),l.a.createElement("span",{className:"display-text"},a)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Value"),l.a.createElement("span",{className:"display-number"},n)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Details"),l.a.createElement("span",{className:"display-text"},r)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Rarity"),l.a.createElement("span",{className:"display-text"},i)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Level"),l.a.createElement("span",{className:"display-number"},o)),l.a.createElement("div",{className:"display-group"},l.a.createElement("span",{className:"display-label"},"Damage"),l.a.createElement("span",{className:"display-text"},s))))}}]),a}(G)),Q=Object(s.b)((function(e){return{weapons:e.weapons.weapons,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(K),Z=(a(77),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getDeleteButton",value:function(){return l.a.createElement("div",{className:"DeleteArmorButton"},l.a.createElement(H,null))}},{key:"getDisplay",value:function(){return l.a.createElement("div",{className:"ArmorDisplay"},"ArmorDisplay")}}]),a}(G)),ee=Object(s.b)((function(e){return{armor:e.armor.armor,displayId:e.detail.targetId}}))(Z),te=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(d.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(d.a)(n)),n.getWeaponDetail=n.getWeaponDetail.bind(Object(d.a)(n)),n.getArmorDetail=n.getArmorDetail.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?l.a.createElement(Y,null):l.a.createElement(X,null)}},{key:"getWeaponDetail",value:function(){return null==this.props.targetId||this.props.edit?l.a.createElement(z,null):l.a.createElement(Q,null)}},{key:"getArmorDetail",value:function(){return null==this.props.targetId||this.props.edit?"missingid":l.a.createElement(ee,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return l.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();case"weapon":return this.getWeaponDetail();case"armor":return this.getArmorDetail();default:return l.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return l.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(l.a.Component),ae=Object(s.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))(te),ne=(a(78),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleNo=n.handleNo.bind(Object(d.a)(n)),n.handleYes=n.handleYes.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleNo",value:function(e){var t=e.target.classList;(t.contains("DialogBoxContainer")||t.contains("dialog-no-btn"))&&this.props.setDialog({active:!1,text:"",ref:null,yesCallback:null,noCallback:null})}},{key:"handleYes",value:function(){window.dialogRef.handleYes()}},{key:"render",value:function(){return l.a.createElement("div",{className:"DialogBoxContainer",onClick:this.handleNo},l.a.createElement("div",{className:"DialogBox"},l.a.createElement("div",{className:"dialog-heading-bar"},l.a.createElement("h2",{className:"dialog-heading"},"Confirm Choice")),l.a.createElement("div",{className:"dialog-prompt"},this.props.text),l.a.createElement("div",{className:"dialog-button-bar"},l.a.createElement("button",{className:"dialog-no-btn",onClick:this.handleNo},"NO"),l.a.createElement("button",{className:"dialog-yes-btn",onClick:this.handleYes},"YES"))))}}]),a}(l.a.Component)),re=Object(s.b)((function(e){return{text:e.dialog.text}}),(function(e){return{setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(ne),le=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n.getDialog=n.getDialog.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?l.a.createElement(re,null):""}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement("div",{className:"AppContainer"},l.a.createElement(M,null),l.a.createElement(ae,null)),this.getDialog())}}]),a}(l.a.Component),ie=Object(s.b)((function(e){return{dialogActive:e.dialog.active}}),n)(le),oe=a(7),se={potions:null},ce={type:!1,targetId:null,edit:!1},ue={active:!1,text:""},pe={weapons:null},me={armor:null},de=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(oe.a)(Object(oe.a)({},e),{},{potions:t.payload});default:return e}},weapons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEAPONS":return Object(oe.a)(Object(oe.a)({},e),{},{weapons:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,r=t.payload.form;return Object(oe.a)(Object(oe.a)({},e),{},{type:r,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(oe.a)(Object(oe.a)({},e),{},{active:t.payload.active,text:t.payload.text});default:return e}},armor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARMOR":return Object(oe.a)(Object(oe.a)({},e),{},{armor:t.payload});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=Object(c.d)(de,{},Object(c.a)(u.a));o.a.render(l.a.createElement(s.a,{store:fe},l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c8f9cb30.chunk.js.map