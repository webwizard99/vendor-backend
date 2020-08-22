(this["webpackJsonpvendor-app"]=this["webpackJsonpvendor-app"]||[]).push([[0],{29:function(e,t,n){e.exports=n(70)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return ce}));var a={};n.r(a),n.d(a,"fetchUser",(function(){return M})),n.d(a,"fetchGold",(function(){return C})),n.d(a,"fetchDay",(function(){return L})),n.d(a,"fetchSuppliers",(function(){return P}));var r=n(0),o=n.n(r),i=n(12),c=n.n(i),u=n(8),s=n(11),l=n(26),p=n(2),f=n(3),v=n(6),m=n(5),d=n(4),h=(n(40),n(41),n(42),n(43),n(44),{potion:"potion",weapon:"weapon",armor:"armor"}),y=["healing"],b=function(){var e=h,t=y,n=[],a=0,r=function(e){var t=e.type,n=e.name,r=e.value;this.type=t,this.name=n,this.value=r,this.id=a,a++},o=function(e){var t=e.type,n=e.level;this.type=t,this.level=n},i=function(e){var t=e.damage,n=e.level;this.damage=t,this.level=n},c=function(e){var t=e.armor,n=e.level;this.armor=t,this.level=n};return{createItem:function(t){var a=t.type,u=t.name,s=t.value,l=t.itemPayload;if(e[a]){var p=new r({type:a,name:u,value:s});switch(p.type){case e.potion:var f=l.type;if(!f)return void console.log("attempted to create invalid potion type");var v=l.level;if(!v)return void console.log("attempted to create a potion with an invalid level");var m={type:f,level:v};p[p.type]=new o(m);break;case e.weapon:var d=l.damage;if(!d)return void console.log("attempted to create a weapon without damage");var h=l.level;if(!h)return void console.log("attempted to create a weapon with an invalid level");var y={damage:d,level:h};p[p.type]=new i(y);break;case e.armor:var b=l.armor;if(!b)return void console.log("attempted to make a new armor without an armor value");var g=l.level;if(!g)return void console.log("attempted to make a new armor without a level value");var O={armor:b,level:g};p[p.type]=new c(O)}return n.push(p),p.id}console.log("invalid item type passed to items.createItem()")},getItem:function(e){var t=n.find((function(t){return t.id===e}));if(t)return t;console.log("attempted to retrieve invalid item.")},createTestPotion:function(n){var a=new r({type:e.potion,name:"Healing Potion",value:60});return a[e.potion]=new o({type:t.healing,level:n}),a},getItemTypes:function(){return e}}}(),g=function(){var e=[],t=0,n=function(n){n.id=t,t++,e.push(n)};return{addPotion:function(e,t,a){var r=b.getItemTypes(),o=b.createItem(r.potion,e,t,a);n(o)},addTestPotion:function(){var e=b.createTestPotion();n(e)},getStoreInventory:function(){return e}}}(),O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getInventoryItems=a.getInventoryItems.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(g.getStoreInventory()));this.props.setInventory(e)}},{key:"getInventoryItems",value:function(){return this.props.inventory&&this.props.inventory.length>0?o.a.createElement("div",null,this.props.inventory.map((function(e){return o.a.createElement("div",{className:"InventoryItem",key:e.id},o.a.createElement("span",{className:"InventoryItemName"},e.name),o.a.createElement("div",{className:"ItemValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},e.value)))}))):o.a.createElement("div",null,"No inventory")}},{key:"render",value:function(){return o.a.createElement("div",{className:"StoreInventory"},this.getInventoryItems())}}]),n}(o.a.Component),E=Object(u.b)((function(e){return{inventory:e.storeState.inventory}}),(function(e){return{setInventory:function(t){return e({type:"SET_STORE_INVENTORY",inventory:t})}}}))(O),S=n(7),j=n.n(S),k=n(10),N=n(27),w=n.n(N),T=function(){var e="",t=1e3;return{getName:function(){return e},setName:function(t){e=t},getStartingGold:function(){return 1e3},getGold:function(){return t},setGold:function(e){t=e}}}(),D=function(){var e=1;return{getDay:function(){return e},setDay:function(t){"number"===typeof t?e=t:console.log("trying to set day to a non number value!")},resetDay:function(){e=1}}}(),I=n(28),_=function(){var e=[],t=0;console.log(t);var n=j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t=10;case 2:case"end":return e.stop()}}),e)})),a=function(){var e=Object(k.a)(j.a.mark((function e(t){var n,a,r,o,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=Object.values(h),a=Math.floor(Math.random()*n.length),"armor"!==(r=n[a])&&(r+="s"),1,o=t,i="/".concat(r,"-in-level-range?min-level=").concat(1,"&max-level=").concat(o),e.prev=9,e.next=12,fetch(i);case 12:c=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.log(e.t0);case 18:return c&&(c=c.json()),e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),r=function(n){var r;a(n).then((function(n){if(Array.isArray(n)){var a=Math.floor(Math.random()*n.length);r=n[a]}var o={};switch(o.level=r.level,r.item.type){case h.potion:o.type=r.type;break;case h.weapon:o.damage=r.damage;break;case h.armor:o.armor=r.armor}var i={};i.itemPayload=o,i.type=r.item.type,i.name=r.item.name,i.value=r.item.value;var c=b.createItem(i);return e.push(c),t++,!0})).catch((function(e){return console.log(e)}))};return{getSupplies:function(){return e},fillSupplies:function(e){for(var t=0;t<10;t++)r(e);n().next().then((function(e){console.log(e),function(e){var t={type:"SET_SUPPLY_READY",value:e};ce.dispatch(t)}(!0)}))},depleteSupply:function(t){console.log(e);var n=e.indexOf(t);if(n>=0){var a=e.splice(n,1);return console.log(a),a}}}}(),x=function(){var e=[],t=function(e){var t=e.name,n=e.offerings;this.name=t,this.offerings=n,this.inventory=[]};t.prototype.rankFavorites=function(){for(var e=[],t=this.offerings.length,n=0;n<t;n++)e.push(this.offerings[n]);e.sort((function(e,t){return e.markup-t.markup})),this.rankedOfferings=e};var n=function(e){var t={type:"SET_SUPPLIERS",payload:e};ce.dispatch(t)},a=function(){var e=Object(k.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/suppliers");case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return t&&(t=t.json()),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),r=j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:case"end":return e.stop()}}),e)}));return{initializeSuppliers:function(){var a=Object(k.a)(j.a.mark((function a(o){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r().next().value.then((function(a){if(a){for(var r=a;e.length<o&&r.length>0;){var i=Math.floor(Math.random()*r.length),c=r.splice(i,1),u={name:(c=c[0]).name,offerings:c.offerings},s=new t(u);e.push(s)}return e.forEach((function(e){return e.rankFavorites()})),n(e),e}}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),getSuppliers:function(){return e},takeSupplierTurn:function(){!function(){var t=JSON.parse(JSON.stringify(_.getSupplies())),n=[];t.forEach((function(e){var t=b.getItem(e);n.push(t.type)})),console.log(n);var a=0,r=e.length;t.forEach((function(t,o){for(var i=[],c=0;c<r;c++){var u=a+c;u>=r&&(u-=r),i.push(u)}var s=!1;i.forEach((function(i){var c,u=e[i].rankedOfferings,l=Object(I.a)(u);try{for(l.s();!(c=l.n()).done;){if(c.value.type===n[o]&&!s){null===e[i].inventory&&(e[i].inventory=[]),console.log(t);var p=_.depleteSupply(t);e[i].inventory.push(p),s=!0,(a=i+1)>r&&(a=0)}}}catch(f){l.e(f)}finally{l.f()}}))}))}(),n(e),function(e){var t={type:"SET_SUPPLY_READY",value:e};ce.dispatch(t)}(!1)}}}(),M=function(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getGold();case 2:n=e.sent,t({type:"SET_STORE_GOLD",amount:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getDay();case 2:n=e.sent,t({type:"SET_DAY",day:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getSuppliers();case 2:n=e.sent,t({type:"SET_SUPPLIERS",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGold()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Store"},o.a.createElement("div",{className:"StoreMenuBar"},o.a.createElement("h2",{className:"StoreName"},this.props.storeName),o.a.createElement("span",{className:"Inspect",role:"img","aria-label":"inspect"},"\ud83d\udd0d "),o.a.createElement("div",{className:"GoldDisplay"},o.a.createElement("span",{className:"CoinSymbol",role:"img","aria-label":"coin"},"\u2689 "),this.props.gold)),o.a.createElement(E,null))}}]),n}(o.a.Component),A=Object(u.b)((function(e){return{storeName:e.storeState.name,gold:e.storeState.gold}}),(function(e){return{setStoreGold:function(t){return e({type:"SET_STORE_GOLD",amount:t})},fetchGold:function(){return e(C())}}}))(R),G=(n(63),n(64),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Supplier"},o.a.createElement("div",{className:"SupplierName"},this.props.supplier.name))}}]),n}(o.a.Component)),U=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={suppliersInitialized:!1},a.getSuppliers=a.getSuppliers.bind(Object(v.a)(a)),a.componentDidUpdate=a.componentDidUpdate.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"componentDidUpdate",value:function(){this.props.supplyReady&&console.log("supply ready in Suppliers.jsx"),Array.isArray(this.props.suppliers)&&this.props.supplyReady&&(console.log(this.state.suppliersInitialized),this.state.suppliersInitialized||(console.log("reached logic to run takeSupplierTurn"),x.takeSupplierTurn(),this.setState({suppliersInitialized:!0})))}},{key:"getSuppliers",value:function(){var e=this.props.suppliers;if(Array.isArray(e)){console.log(e);var t=e.map((function(e){return o.a.createElement(G,{supplier:e})}));return o.a.createElement("div",{className:"suppliersContainer"},t)}return"no suppliers to render"}},{key:"render",value:function(){return o.a.createElement("div",{className:"Suppliers"},this.getSuppliers())}}]),n}(o.a.Component),V=Object(u.b)((function(e){return{suppliers:e.suppliers.suppliers,supplyReady:e.supplies.ready}}))(U),Y=(n(65),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleNextDay=a.handleNextDay.bind(Object(v.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDay()}},{key:"handleNextDay",value:function(){var e=this.props.day;D.setDay(e+1),this.props.fetchDay()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Days"},o.a.createElement("span",{className:"DayTitle"},"Day: ",this.props.day),o.a.createElement("button",{className:"nextDay",onClick:this.handleNextDay},"Finish Day"))}}]),n}(o.a.Component)),F=Object(u.b)((function(e){return{day:e.days.day}}),(function(e){return{fetchDay:function(){return e(L())}}}))(Y),z=(n(66),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Details"},"Details")}}]),n}(o.a.Component)),J=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"GameScreen flex-container"},o.a.createElement("div",{className:"CommerceColumn"},o.a.createElement(F,null),o.a.createElement(A,null),o.a.createElement(V,null)),o.a.createElement(z,null))}}]),n}(o.a.Component),B=Object(u.b)((function(e){return{storeName:e.storeState.name}}))(J),H=(n(67),n(68),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Title"},"VENDOR")}}]),n}(o.a.Component)),W={init:function(e){D.setDay(1),e.name||console.log("Game must be started with a payload object that contains a store name!"),T.setName(e.name);var t=T.getStartingGold();T.setGold(t),function(){for(var e=0;e<5;e++)g.addTestPotion()}(),_.fillSupplies(1),console.log(_.getSupplies()),x.initializeSuppliers(3)}},K=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleStart=a.handleStart.bind(Object(v.a)(a)),a.handleNameInput=a.handleNameInput.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"handleStart",value:function(){var e=this.props.name;e&&""!==e&&(W.init({name:e}),this.props.setStarted(!0))}},{key:"handleNameInput",value:function(e){13===e.charCode&&this.handleStart()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"StartScreen"},o.a.createElement(H,null),o.a.createElement("div",{className:"NameInput"},o.a.createElement("div",{className:"nameInputGroup"},o.a.createElement("label",{htmlFor:"name",className:"NameLabel"},"Name: "),o.a.createElement("input",{id:"name",value:this.props.name,type:"text",onChange:function(t){return e.props.setStoreName(t.target.value)},onKeyPress:this.handleNameInput})),o.a.createElement("button",{onClick:this.handleStart,className:"StartButton"},"Start!")))}}]),n}(o.a.Component),$=Object(u.b)((function(e){return{started:e.gameState.started,name:e.storeState.name}}),(function(e){return{setStoreName:function(t){return e({type:"SET_STORE_NAME",name:t})},setStarted:function(t){return e({type:"SET_GAME_STATE",value:t})}}}))(K),q=(n(69),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(v.a)(a)),a.renderEditorLink=a.renderEditorLink.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderEditorLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&o.a.createElement("li",{key:"editorLink"},o.a.createElement("a",{className:"EditorLink",href:"/editor"},"editor"))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"MenuBar"},o.a.createElement("span",{className:"MenuTitle"},o.a.createElement("a",{href:"/"},"VENDOR")),o.a.createElement("ul",{className:"LoginContainer"},this.renderEditorLink(),this.renderLogin()))}}]),n}(o.a.Component)),Q=Object(u.b)((function(e){return{auth:e.auth}}))(q),X=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getMainView=a.getMainView.bind(Object(v.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(v.a)(a)),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getMainView",value:function(){return this.props.started?o.a.createElement(B,null):o.a.createElement($,null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Q,null),this.getMainView())}}]),n}(o.a.Component),Z=Object(u.b)((function(e){return{started:e.gameState.started}}),a)(X),ee=n(1),te={day:1},ne={started:!1,storeUpdate:!1},ae={name:"",gold:0,refreshing:!1,refreshed:!1,inventory:[]},re={suppliers:null,count:0},oe={ready:!1},ie=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY":return Object(ee.a)(Object(ee.a)({},e),{},{day:t.day});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STATE":return Object(ee.a)(Object(ee.a)({},e),{},{started:t.value});case"SET_UPDATES":var n=t.payload,a=n.storeUpdate;return Object(ee.a)(Object(ee.a)({},e),{},{storeUpdate:a});case"SET_STORE_UPDATE":return Object(ee.a)(Object(ee.a)({},e),{},{storeUpdate:t.value});default:return e}},storeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STORE_NAME":return Object(ee.a)(Object(ee.a)({},e),{},{name:t.name});case"SET_STORE_GOLD":return Object(ee.a)(Object(ee.a)({},e),{},{gold:t.amount});case"SET_STORE_INVENTORY":var n=t.inventory;return Object(ee.a)(Object(ee.a)({},e),{},{inventory:n});default:return e}},suppliers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLIERS":var n=0;return Array.isArray(t.payload)&&(n=t.payload.length),Object(ee.a)(Object(ee.a)({},e),{},{suppliers:t.payload,count:n});default:return e}},supplies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLY_READY":return Object(ee.a)(Object(ee.a)({},e),{},{ready:t.value});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=Object(s.d)(ie,{},Object(s.a)(l.a));c.a.render(o.a.createElement(u.a,{store:ce},o.a.createElement(o.a.StrictMode,null,o.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.06f10f1b.chunk.js.map