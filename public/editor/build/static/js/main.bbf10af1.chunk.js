(this["webpackJsonpvendor-editor"]=this["webpackJsonpvendor-editor"]||[]).push([[0],Array(28).concat([function(e,t,a){e.exports=a(80)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return B})),a.d(n,"fetchPotions",(function(){return L})),a.d(n,"fetchWeapons",(function(){return A})),a.d(n,"fetchArmor",(function(){return _}));var l=a(0),r=a.n(l),i=a(13),s=a.n(i),o=a(6),c=a(10),u=a(27),m=a(1),p=a(2),d=a(5),f=a(4),y=a(3),v=(a(39),a(40),a(41),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).renderLogin=n.renderLogin.bind(Object(d.a)(n)),n.renderGameLink=n.renderGameLink.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return r.a.createElement("li",null,r.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return r.a.createElement("li",null,r.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderGameLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&r.a.createElement("li",{key:"gameLink"},r.a.createElement("a",{className:"GameLink",href:"/"},"game"))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"MenuBar"},r.a.createElement("span",{className:"MenuTitle"},r.a.createElement("a",{href:"/"},"VENDOR")),r.a.createElement("ul",{className:"LoginContainer"},this.renderGameLink(),this.renderLogin()))}}]),a}(r.a.Component)),h=Object(o.b)((function(e){return{auth:e.auth}}))(v),b=(a(42),a(43),a(44),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n.setExpansion=n.setExpansion.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getNewButton",value:function(){return""}},{key:"getTitle",value:function(){return"Item"}},{key:"setExpansion",value:function(){var e=this.state.expanded;this.setState({expanded:!e})}},{key:"displayContents",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"contents"),r.a.createElement("p",null,"contents"),r.a.createElement("p",null,"contents"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ExpandableList"},r.a.createElement("div",{className:"TitleBar"},r.a.createElement("span",{className:"expansionBtn",onClick:this.setExpansion},this.state.expanded?"-":"+"),r.a.createElement("span",{className:"ExpanderTitle"},this.getTitle()),this.getNewButton()),this.state.expanded?this.displayContents():"")}}]),a}(r.a.Component)),E=(a(45),a(46),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NewButton"},r.a.createElement("div",{className:"buttonIcon"},"+"))}}]),a}(r.a.Component)),g=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getTitle",value:function(){return"Potions"}},{key:"getNewButton",value:function(){var e=this;return r.a.createElement("div",{className:"NewPotionButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:null})}},r.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.potions){var t=this.props.potions;return r.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"potion"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),r.a.createElement("p",null,r.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(b),N=Object(o.b)((function(e){return{potions:e.potions.potions,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(g),O=(a(47),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getTitle",value:function(){return"Weapons"}},{key:"getNewButton",value:function(){var e=this;return r.a.createElement("div",{className:"NewWeaponButton",onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:null})}},r.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.weapons){var t=this.props.weapons;return r.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"weapon"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),r.a.createElement("p",null,r.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(b)),j=Object(o.b)((function(e){return{weapons:e.weapons.weapons,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(O),D=(a(48),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).displayContents=n.displayContents.bind(Object(d.a)(n)),n.getNewButton=n.getNewButton.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getTitle",value:function(){return"Armor"}},{key:"getNewButton",value:function(){return r.a.createElement("div",{className:"NewArmorButton"},r.a.createElement(E,null))}},{key:"displayContents",value:function(){var e=this;if(this.props.armor){var t=this.props.armor;return r.a.createElement("div",{className:"detailList"},t.map((function(t){var a="ListDetail";return"armor"===e.props.form&&e.props.targetId===t.id&&(a+=" activeItem"),r.a.createElement("p",null,r.a.createElement("span",{className:a,onClick:function(){return e.props.setDisplayForm({form:"armor",edit:!1,targetId:t.id})}},t.item.name))})))}return""}}]),a}(b)),k=Object(o.b)((function(e){return{armor:e.armor.armor,form:e.detail.type,targetId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(D),I=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getTitle",value:function(){return"Items"}},{key:"displayContents",value:function(){return r.a.createElement("div",{className:"detailList"},r.a.createElement(N,null),r.a.createElement(j,null),r.a.createElement(k,null))}}]),a}(b),w=a(9),x=a.n(w),F=a(11),C=a(12),T=a.n(C),B=function(){return function(){var e=Object(F.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(F.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/potions");case 2:a=e.sent,t({type:"SET_POTIONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(F.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/weapons");case 2:a=e.sent,t({type:"SET_WEAPONS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var e=Object(F.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/armor");case 2:a=e.sent,t({type:"SET_ARMOR",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).shouldComponentUpdate=n.shouldComponentUpdate.bind(Object(d.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPotions(),this.props.fetchWeapons(),this.props.fetchArmor()}},{key:"shouldComponentUpdate",value:function(e,t){if(this.props.dialogActive&!e.dialogActive)return!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"ObjectListColumn"},r.a.createElement(I,null))}}]),a}(r.a.Component),S=Object(o.b)((function(e){return{dialogActive:e.dialog.active}}),n)(M),P=(a(67),a(68),["healing"]),R=(a(69),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getForm=n.getForm.bind(Object(d.a)(n)),n.getMethod=n.getMethod.bind(Object(d.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getForm",value:function(){return""}},{key:"getMethod",value:function(){return""}},{key:"handleCloseButton",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"DisplayForm"},this.getForm())}}]),a}(r.a.Component)),V=(a(70),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"CloseFormButton"},r.a.createElement("p",{className:"closeButtonIcon"},"X"))}}]),a}(r.a.Component)),W=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getPotionOptions",value:function(){return P.map((function(e){return r.a.createElement("option",{value:e},e)}))}},{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"potion",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Potion",a="",n="",l="",i="",s="",o=1e3,c=null,u=null;if(this.props.edit){var m=this.props.potions.find((function(t){return t.id===e.props.displayId}));a=m.item.name,n=m.item.value,l=m.item.details,o=m.item.rarity,i=m.type,s=m.level,t=a,c=m.id,u=m.itemId}return r.a.createElement("div",{className:"PotionForm"},r.a.createElement("div",{className:"form-heading-bar"},r.a.createElement("h2",{className:"form-heading"},t),r.a.createElement("div",{className:"close-potion-btn",onClick:this.handleCloseButton},r.a.createElement(V,null))),r.a.createElement("form",{action:"/potions",className:"input-fields-area",id:"PotionPostForm",method:"POST"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"potion name",maxLength:"26",defaultValue:a})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),r.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:l})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),r.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"type"},"Type"),r.a.createElement("select",{className:"potion-select",name:"type",id:"type",defaultValue:i},this.getPotionOptions())),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),r.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:s})),r.a.createElement("input",{type:"hidden",name:"id",value:c}),r.a.createElement("input",{type:"hidden",name:"itemId",value:u}),r.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),r.a.createElement("input",{type:"submit",value:this.props.edit?"Update Potion":"Create Potion",class:"button create-button"})))}}]),a}(R),Y=Object(o.b)((function(e){return{edit:e.detail.edit,potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(W),U=(a(71),a(72),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getDisplay=n.getDisplay.bind(Object(d.a)(n)),n.getDeleteButton=n.getDeleteButton.bind(Object(d.a)(n)),n.handleYes=n.handleYes.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getDisplay",value:function(){return""}},{key:"getDeleteButton",value:function(){return""}},{key:"handleYes",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"DisplayStatic"},this.getDisplay(),this.getDeleteButton())}}]),a}(r.a.Component)),G=(a(73),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"EditButton"},r.a.createElement("div",{className:"editButtonIcon"},"edit"))}}]),a}(r.a.Component)),H=(a(74),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"DeleteButton"},r.a.createElement("div",{className:"deletButtonIcon"},"DELETE"))}}]),a}(r.a.Component)),q={makeRequest:function(){var e=Object(F.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t,"/").concat(a),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},J=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,r.a.createElement("div",{className:"DeletePotionButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Potion from Database?"})}},r.a.createElement(H,null))}},{key:"handleYes",value:function(){console.log("Delete handler in potion display component reached!"),q.makeRequest("potion",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.potions.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,l=t.item.details,i=t.item.rarity,s=t.type,o=t.level;return r.a.createElement("div",{className:"PotionDisplay"},r.a.createElement("div",{className:"heading-bar"},r.a.createElement("h2",{className:"display-heading"},a),r.a.createElement("div",{className:"PotionEditButton",onClick:function(){return e.props.setDisplayForm({form:"potion",edit:!0,targetId:t.id})}},r.a.createElement(G,null))),r.a.createElement("div",{className:"display-fields-area"},r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Name"),r.a.createElement("span",{className:"display-text"},a)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Value"),r.a.createElement("span",{className:"display-number"},n)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Details"),r.a.createElement("span",{className:"display-text"},l)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Rarity"),r.a.createElement("span",{className:"display-text"},i)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Type"),r.a.createElement("span",{className:"display-text"},s)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Level"),r.a.createElement("span",{className:"display-number"},o))))}}]),a}(U),X=Object(o.b)((function(e){return{potions:e.potions.potions,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(J),$=(a(75),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"weapon",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Weapon",a="",n="",l="",i=1e3,s="",o=1,c=null,u=null;if(this.props.edit){var m=this.props.weapons.find((function(t){return t.id===e.props.displayId}));a=m.item.name,n=m.item.value,l=m.item.details,i=m.item.rarity,s=m.level,o=m.damage,t=a,c=m.id,u=m.itemId}return r.a.createElement("div",{className:"WeaponForm"},r.a.createElement("div",{className:"form-heading-bar"},r.a.createElement("h2",{className:"form-heading"},t),r.a.createElement("div",{className:"close-weapon-btn",onClick:this.handleCloseButton},r.a.createElement(V,null))),r.a.createElement("form",{action:"/weapons",className:"input-fields-area",id:"WeaponPostForm",method:"POST"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"weapon name",maxLength:"26",defaultValue:a})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),r.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:l})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),r.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:i})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),r.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:s})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"damage"},"Damage"),r.a.createElement("input",{type:"number",name:"damage",id:"damage",className:"input-number",placeholder:"#",defaultValue:o})),r.a.createElement("input",{type:"hidden",name:"id",value:c}),r.a.createElement("input",{type:"hidden",name:"itemId",value:u}),r.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),r.a.createElement("input",{type:"submit",value:this.props.edit?"Update Weapon":"Create Weapon",class:"button create-button"})))}}]),a}(R)),z=Object(o.b)((function(e){return{edit:e.detail.edit,weapons:e.weapons.weapons,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))($),K=(a(76),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getDeleteButton",value:function(){var e=this;return window.dialogRef=this,r.a.createElement("div",{className:"DeleteWeaponButton",onClick:function(){return e.props.setDialog({active:!0,text:"Delete Weapon from Database?"})}},r.a.createElement(H,null))}},{key:"handleYes",value:function(){q.makeRequest("weapon",this.props.displayId),this.props.setDialog({active:!1,text:""})}},{key:"getDisplay",value:function(){var e=this,t=this.props.weapons.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,l=t.item.details,i=t.item.rarity,s=t.level,o=t.damage;return r.a.createElement("div",{className:"WeaponDisplay"},r.a.createElement("div",{className:"heading-bar"},r.a.createElement("h2",{className:"display-heading"},a),r.a.createElement("div",{className:"WeaponEditButton",onClick:function(){return e.props.setDisplayForm({form:"weapon",edit:!0,targetId:t.id})}},r.a.createElement(G,null))),r.a.createElement("div",{className:"display-fields-area"},r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Name"),r.a.createElement("span",{className:"display-text"},a)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Value"),r.a.createElement("span",{className:"display-number"},n)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Details"),r.a.createElement("span",{className:"display-text"},l)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Rarity"),r.a.createElement("span",{className:"display-text"},i)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Level"),r.a.createElement("span",{className:"display-number"},s)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Damage"),r.a.createElement("span",{className:"display-text"},o))))}}]),a}(U)),Q=Object(o.b)((function(e){return{weapons:e.weapons.weapons,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})},setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(K),Z=(a(77),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getMethod",value:function(){return this.props.edit?"_put":"_post"}},{key:"handleCloseButton",value:function(e){e.preventDefault(),!1===this.props.edit?this.props.setDisplayForm({form:!1,targetId:null,edit:!1}):this.props.setDisplayForm({form:"armor",targetId:this.props.displayId,edit:!1})}},{key:"getForm",value:function(){var e=this,t="New Armor",a="",n="",l="",i=1e3,s="",o=1,c=null,u=null;if(this.props.edit){var m=this.props.armor.find((function(t){return t.id===e.props.displayId}));a=m.item.name,n=m.item.value,l=m.item.details,i=m.item.rarity,s=m.level,o=m.armor,t=a,c=m.id,u=m.itemId}return r.a.createElement("div",{className:"ArmorForm"},r.a.createElement("div",{className:"form-heading-bar"},r.a.createElement("h2",{className:"form-heading"},t),r.a.createElement("div",{className:"close-armor-btn",onClick:this.handleCloseButton},r.a.createElement(V,null))),r.a.createElement("form",{action:"/armor",className:"input-fields-area",id:"ArmorPostForm",method:"POST"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-text",placeholder:"armor name",maxLength:"26",defaultValue:a})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"value"},"Value"),r.a.createElement("input",{type:"number",name:"value",id:"value",className:"input-number",placeholder:"#",min:"1",max:"10000",defaultValue:n})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",name:"details",id:"details",className:"input-text",placeholder:"details...",maxLength:"200",defaultValue:l})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"rarity"},"Rarity"),r.a.createElement("input",{type:"number",name:"rarity",id:"rarity",className:"input-number",placeholder:"#",min:"1",max:"1000",defaultValue:i})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"level"},"Level"),r.a.createElement("input",{type:"number",name:"level",id:"level",className:"input-number",placeholder:"#",defaultValue:s})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"item-label",htmlFor:"armor"},"Armor"),r.a.createElement("input",{type:"number",name:"armor",id:"armor",className:"input-number",placeholder:"#",defaultValue:o})),r.a.createElement("input",{type:"hidden",name:"id",value:c}),r.a.createElement("input",{type:"hidden",name:"itemId",value:u}),r.a.createElement("input",{type:"hidden",name:"_METHOD",value:this.getMethod()}),r.a.createElement("input",{type:"submit",value:this.props.edit?"Update Armor":"Create Armor",class:"button create-button"})))}}]),a}(R)),ee=Object(o.b)((function(e){return{edit:e.detail.edit,armor:e.armor.armor,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(Z),te=(a(78),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getDeleteButton",value:function(){return r.a.createElement("div",{className:"DeleteArmorButton"},r.a.createElement(H,null))}},{key:"getDisplay",value:function(){var e=this,t=this.props.armor.find((function(t){return t.id===e.props.displayId})),a=t.item.name,n=t.item.value,l=t.item.details,i=t.item.rarity,s=t.level,o=t.armor;return r.a.createElement("div",{className:"ArmorDisplay"},r.a.createElement("div",{className:"heading-bar"},r.a.createElement("h2",{className:"display-heading"},a),r.a.createElement("div",{className:"WeaponEditButton",onClick:function(){return e.props.setDisplayForm({form:"armor",edit:!0,targetId:t.id})}},r.a.createElement(G,null))),r.a.createElement("div",{className:"display-fields-area"},r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Name"),r.a.createElement("span",{className:"display-text"},a)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Value"),r.a.createElement("span",{className:"display-number"},n)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Details"),r.a.createElement("span",{className:"display-text"},l)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Rarity"),r.a.createElement("span",{className:"display-text"},i)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Level"),r.a.createElement("span",{className:"display-number"},s)),r.a.createElement("div",{className:"display-group"},r.a.createElement("span",{className:"display-label"},"Armor"),r.a.createElement("span",{className:"display-text"},o))))}}]),a}(U)),ae=Object(o.b)((function(e){return{armor:e.armor.armor,displayId:e.detail.targetId}}),(function(e){return{setDisplayForm:function(t){return e({type:"SET_DETAIL_FORM",payload:t})}}}))(te),ne=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getDetail=n.getDetail.bind(Object(d.a)(n)),n.getPotionDetail=n.getPotionDetail.bind(Object(d.a)(n)),n.getWeaponDetail=n.getWeaponDetail.bind(Object(d.a)(n)),n.getArmorDetail=n.getArmorDetail.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"getPotionDetail",value:function(){return null===this.props.targetId||this.props.edit?r.a.createElement(Y,null):r.a.createElement(X,null)}},{key:"getWeaponDetail",value:function(){return null==this.props.targetId||this.props.edit?r.a.createElement(z,null):r.a.createElement(Q,null)}},{key:"getArmorDetail",value:function(){return null==this.props.targetId||this.props.edit?r.a.createElement(ee,null):r.a.createElement(ae,null)}},{key:"getDetail",value:function(){if(!this.props.formType)return r.a.createElement("div",{className:"BlankForm"},"no details to display");switch(this.props.formType){case"potion":return this.getPotionDetail();case"weapon":return this.getWeaponDetail();case"armor":return this.getArmorDetail();default:return r.a.createElement("div",{className:"BlankForm"},"detail type unknown")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"DetailView"},this.getDetail())}}]),a}(r.a.Component),le=Object(o.b)((function(e){return{formType:e.detail.type,targetId:e.detail.targetId,edit:e.detail.edit}}))(ne),re=(a(79),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleNo=n.handleNo.bind(Object(d.a)(n)),n.handleYes=n.handleYes.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"handleNo",value:function(e){var t=e.target.classList;(t.contains("DialogBoxContainer")||t.contains("dialog-no-btn"))&&this.props.setDialog({active:!1,text:"",ref:null,yesCallback:null,noCallback:null})}},{key:"handleYes",value:function(){window.dialogRef.handleYes()}},{key:"render",value:function(){return r.a.createElement("div",{className:"DialogBoxContainer",onClick:this.handleNo},r.a.createElement("div",{className:"DialogBox"},r.a.createElement("div",{className:"dialog-heading-bar"},r.a.createElement("h2",{className:"dialog-heading"},"Confirm Choice")),r.a.createElement("div",{className:"dialog-prompt"},this.props.text),r.a.createElement("div",{className:"dialog-button-bar"},r.a.createElement("button",{className:"dialog-no-btn",onClick:this.handleNo},"NO"),r.a.createElement("button",{className:"dialog-yes-btn",onClick:this.handleYes},"YES"))))}}]),a}(r.a.Component)),ie=Object(o.b)((function(e){return{text:e.dialog.text}}),(function(e){return{setDialog:function(t){return e({type:"SET_DIALOG",payload:t})}}}))(re),se=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n.getDialog=n.getDialog.bind(Object(d.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getDialog",value:function(){return this.props.dialogActive?r.a.createElement(ie,null):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("div",{className:"AppContainer"},r.a.createElement(S,null),r.a.createElement(le,null)),this.getDialog())}}]),a}(r.a.Component),oe=Object(o.b)((function(e){return{dialogActive:e.dialog.active}}),n)(se),ce=a(7),ue={potions:null},me={type:!1,targetId:null,edit:!1},pe={active:!1,text:""},de={weapons:null},fe={armor:null},ye=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},potions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POTIONS":return Object(ce.a)(Object(ce.a)({},e),{},{potions:t.payload});default:return e}},weapons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEAPONS":return Object(ce.a)(Object(ce.a)({},e),{},{weapons:t.payload});default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAIL_FORM":var a=t.payload.targetId,n=t.payload.edit,l=t.payload.form;return Object(ce.a)(Object(ce.a)({},e),{},{type:l,targetId:a,edit:n});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIALOG":return Object(ce.a)(Object(ce.a)({},e),{},{active:t.payload.active,text:t.payload.text});default:return e}},armor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARMOR":return Object(ce.a)(Object(ce.a)({},e),{},{armor:t.payload});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=Object(c.d)(ye,{},Object(c.a)(u.a));s.a.render(r.a.createElement(o.a,{store:ve},r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[28,1,2]]]);
//# sourceMappingURL=main.bbf10af1.chunk.js.map