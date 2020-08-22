(this["webpackJsonpvendor-app"]=this["webpackJsonpvendor-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(69)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return M})),n.d(a,"fetchGold",(function(){return _})),n.d(a,"fetchDay",(function(){return x})),n.d(a,"fetchSuppliers",(function(){return C}));var r=n(0),o=n.n(r),i=n(12),c=n.n(i),u=n(7),l=n(11),s=n(26),p=n(1),m=n(2),f=n(5),v=n(4),d=n(3),h=(n(39),n(40),n(41),n(42),n(43),{potion:"potion",weapon:"weapon",armor:"armor"}),y=["healing"],b=function(){var e=h,t=y,n=[],a=0,r=function(e){var t=e.type,n=e.name,r=e.value;this.type=t,this.name=n,this.value=r,this.id=a,a++},o=function(e){var t=e.type,n=e.level;this.type=t,this.level=n},i=function(e){var t=e.damage,n=e.level;this.damage=t,this.level=n},c=function(e){var t=e.armor,n=e.level;this.armor=t,this.level=n};return{createItem:function(t){var a=t.type,u=t.name,l=t.value,s=t.itemPayload;if(e[a]){var p=new r({type:a,name:u,value:l});switch(p.type){case e.potion:var m=s.type;if(!m)return void console.log("attempted to create invalid potion type");var f=s.level;if(!f)return void console.log("attempted to create a potion with an invalid level");var v={type:m,level:f};p[p.type]=new o(v);break;case e.weapon:var d=s.damage;if(!d)return void console.log("attempted to create a weapon without damage");var h=s.level;if(!h)return void console.log("attempted to create a weapon with an invalid level");var y={damage:d,level:h};p[p.type]=new i(y);break;case e.armor:var b=s.armor;if(!b)return void console.log("attempted to make a new armor without an armor value");var g=s.level;if(!g)return void console.log("attempted to make a new armor without a level value");var O={armor:b,level:g};p[p.type]=new c(O)}return n.push(p),p.id}console.log("invalid item type passed to items.createItem()")},getItem:function(e){var t=n.find((function(t){return t.id===e}));if(t)return t;console.log("attempted to retrieve invalid item.")},createTestPotion:function(n){var a=new r({type:e.potion,name:"Healing Potion",value:60});return a[e.potion]=new o({type:t.healing,level:n}),a},getItemTypes:function(){return e}}}(),g=function(){var e=[],t=0,n=function(n){n.id=t,t++,e.push(n)};return{addPotion:function(e,t,a){var r=b.getItemTypes(),o=b.createItem(r.potion,e,t,a);n(o)},addTestPotion:function(){var e=b.createTestPotion();n(e)},getStoreInventory:function(){return e}}}(),O=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getInventoryItems=a.getInventoryItems.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(g.getStoreInventory()));this.props.setInventory(e)}},{key:"getInventoryItems",value:function(){return this.props.inventory&&this.props.inventory.length>0?o.a.createElement("div",null,this.props.inventory.map((function(e){return o.a.createElement("div",{className:"InventoryItem",key:e.id},o.a.createElement("span",{className:"InventoryItemName"},e.name),o.a.createElement("div",{className:"ItemValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},e.value)))}))):o.a.createElement("div",null,"No inventory")}},{key:"render",value:function(){return o.a.createElement("div",{className:"StoreInventory"},this.getInventoryItems())}}]),n}(o.a.Component),E=Object(u.b)((function(e){return{inventory:e.storeState.inventory}}),(function(e){return{setInventory:function(t){return e({type:"SET_STORE_INVENTORY",inventory:t})}}}))(O),j=n(8),S=n.n(j),N=n(10),k=n(27),w=n.n(k),D=function(){var e="",t=1e3;return{getName:function(){return e},setName:function(t){e=t},getStartingGold:function(){return 1e3},getGold:function(){return t},setGold:function(e){t=e}}}(),T=function(){var e=1;return{getDay:function(){return e},setDay:function(t){"number"===typeof t?e=t:console.log("trying to set day to a non number value!")},resetDay:function(){e=1}}}(),I=function(){var e=[],t=function(e){var t=e.name,n=e.offerings;this.name=t,this.offerings=n},n=function(){var e=Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/suppliers");case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return t&&(t=t.json()),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return{initializeSuppliers:function(){var a=Object(N.a)(S.a.mark((function a(r){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n().then((function(n){if(n)for(var a=n;e.length<r&&a.length>0;){var o=Math.floor(Math.random()*a.length),i=a.splice(o,1),c={name:(i=i[0]).name,offerings:i.offerings},u=new t(c);e.push(u)}})),console.log(e);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),getSuppliers:function(){return e}}}(),M=function(){return function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){return function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getGold();case 2:n=e.sent,t({type:"SET_STORE_GOLD",amount:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getDay();case 2:n=e.sent,t({type:"SET_DAY",day:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getSuppliers();case 2:n=e.sent,t({type:"SET_SUPPLIERS",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGold()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Store"},o.a.createElement("div",{className:"StoreMenuBar"},o.a.createElement("h2",{className:"StoreName"},this.props.storeName),o.a.createElement("span",{className:"Inspect",role:"img","aria-label":"inspect"},"\ud83d\udd0d "),o.a.createElement("div",{className:"GoldDisplay"},o.a.createElement("span",{className:"CoinSymbol",role:"img","aria-label":"coin"},"\u2689 "),this.props.gold)),o.a.createElement(E,null))}}]),n}(o.a.Component),A=Object(u.b)((function(e){return{storeName:e.storeState.name,gold:e.storeState.gold}}),(function(e){return{setStoreGold:function(t){return e({type:"SET_STORE_GOLD",amount:t})},fetchGold:function(){return e(_())}}}))(G),L=(n(62),n(63),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Supplier"},o.a.createElement("div",{className:"SupplierName"},this.props.supplierName))}}]),n}(o.a.Component)),R=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a.getSuppliers=a.getSuppliers.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("in Suppliers component lifecycle method"),this.props.fetchSuppliers()}},{key:"getSuppliers",value:function(){var e=this.props.suppliers;return console.log(e),console.log(Array.isArray(e)),Array.isArray(e)?o.a.createElement("div",{className:"suppliersContainer"},e.map((function(e){return console.log(e),o.a.createElement(L,{supplierName:e.name})}))):""}},{key:"render",value:function(){return o.a.createElement("div",{className:"Suppliers"},this.getSuppliers())}}]),n}(o.a.Component),P=Object(u.b)((function(e){return{suppliers:e.suppliers.suppliers,suppliersCount:e.suppliers.count}}),(function(e){return{fetchSuppliers:function(){return e(C())}}}))(R),U=(n(64),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleNextDay=a.handleNextDay.bind(Object(f.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDay()}},{key:"handleNextDay",value:function(){var e=this.props.day;T.setDay(e+1),this.props.fetchDay()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Days"},o.a.createElement("span",{className:"DayTitle"},"Day: ",this.props.day),o.a.createElement("button",{className:"nextDay",onClick:this.handleNextDay},"Finish Day"))}}]),n}(o.a.Component)),V=Object(u.b)((function(e){return{day:e.days.day}}),(function(e){return{fetchDay:function(){return e(x())}}}))(U),B=(n(65),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Details"},"Details")}}]),n}(o.a.Component)),F=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"GameScreen flex-container"},o.a.createElement("div",{className:"CommerceColumn"},o.a.createElement(V,null),o.a.createElement(A,null),o.a.createElement(P,null)),o.a.createElement(B,null))}}]),n}(o.a.Component),J=Object(u.b)((function(e){return{storeName:e.storeState.name}}))(F),Y=(n(66),n(67),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Title"},"VENDOR")}}]),n}(o.a.Component)),H=function(){var e=[],t=function(){var e=Object(N.a)(S.a.mark((function e(t){var n,a,r,o,i,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=Object.values(h),a=Math.floor(Math.random()*n.length),"armor"!==(r=n[a])&&(r+="s"),1,o=t,i="/".concat(r,"-in-level-range?min-level=").concat(1,"&max-level=").concat(o),e.prev=9,e.next=12,fetch(i);case 12:c=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.log(e.t0);case 18:return c&&(c=c.json()),e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),n=function(n){var a;t(n).then((function(t){if(Array.isArray(t)){var n=Math.floor(Math.random()*t.length);a=t[n]}var r={};switch(r.level=a.level,a.item.type){case h.potion:r.type=a.type;break;case h.weapon:r.damage=a.damage;break;case h.armor:r.armor=a.armor}var o={};o.itemPayload=r,o.type=a.item.type,o.name=a.item.name,o.value=a.item.value;var i=b.createItem(o);return e.push(i),!0})).catch((function(e){return console.log(e)}))};return{getSupplies:function(){return e},fillSupplies:function(e){for(var t=0;t<10;t++)n(e)}}}(),z={init:function(e){T.setDay(1),e.name||console.log("Game must be started with a payload object that contains a store name!"),D.setName(e.name);var t=D.getStartingGold();D.setGold(t),function(){for(var e=0;e<5;e++)g.addTestPotion()}(),I.initializeSuppliers(3),console.log(I.getSuppliers()),H.fillSupplies(1)}},W=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleStart=a.handleStart.bind(Object(f.a)(a)),a.handleNameInput=a.handleNameInput.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"handleStart",value:function(){var e=this.props.name;e&&""!==e&&(z.init({name:e}),this.props.setStarted(!0))}},{key:"handleNameInput",value:function(e){13===e.charCode&&this.handleStart()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"StartScreen"},o.a.createElement(Y,null),o.a.createElement("div",{className:"NameInput"},o.a.createElement("div",{className:"nameInputGroup"},o.a.createElement("label",{htmlFor:"name",className:"NameLabel"},"Name: "),o.a.createElement("input",{id:"name",value:this.props.name,type:"text",onChange:function(t){return e.props.setStoreName(t.target.value)},onKeyPress:this.handleNameInput})),o.a.createElement("button",{onClick:this.handleStart,className:"StartButton"},"Start!")))}}]),n}(o.a.Component),K=Object(u.b)((function(e){return{started:e.gameState.started,name:e.storeState.name}}),(function(e){return{setStoreName:function(t){return e({type:"SET_STORE_NAME",name:t})},setStarted:function(t){return e({type:"SET_GAME_STATE",value:t})}}}))(W),$=(n(68),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(f.a)(a)),a.renderEditorLink=a.renderEditorLink.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderEditorLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&o.a.createElement("li",{key:"editorLink"},o.a.createElement("a",{className:"EditorLink",href:"/editor"},"editor"))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"MenuBar"},o.a.createElement("span",{className:"MenuTitle"},o.a.createElement("a",{href:"/"},"VENDOR")),o.a.createElement("ul",{className:"LoginContainer"},this.renderEditorLink(),this.renderLogin()))}}]),n}(o.a.Component)),q=Object(u.b)((function(e){return{auth:e.auth}}))($),Q=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getMainView=a.getMainView.bind(Object(f.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getMainView",value:function(){return this.props.started?o.a.createElement(J,null):o.a.createElement(K,null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(q,null),this.getMainView())}}]),n}(o.a.Component),X=Object(u.b)((function(e){return{started:e.gameState.started}}),a)(Q),Z=n(6),ee={day:1},te={started:!1,storeUpdate:!1},ne={name:"",gold:0,refreshing:!1,refreshed:!1,inventory:[]},ae={suppliers:null,count:0},re=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY":return Object(Z.a)(Object(Z.a)({},e),{},{day:t.day});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STATE":return Object(Z.a)(Object(Z.a)({},e),{},{started:t.value});case"SET_UPDATES":var n=t.payload,a=n.storeUpdate;return Object(Z.a)(Object(Z.a)({},e),{},{storeUpdate:a});case"SET_STORE_UPDATE":return Object(Z.a)(Object(Z.a)({},e),{},{storeUpdate:t.value});default:return e}},storeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STORE_NAME":return Object(Z.a)(Object(Z.a)({},e),{},{name:t.name});case"SET_STORE_GOLD":return Object(Z.a)(Object(Z.a)({},e),{},{gold:t.amount});case"SET_STORE_INVENTORY":var n=t.inventory;return Object(Z.a)(Object(Z.a)({},e),{},{inventory:n});default:return e}},suppliers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLIERS":var n=0;return Array.isArray(t.payload)&&(n=t.payload.length),Object(Z.a)(Object(Z.a)({},e),{},{suppliers:t.payload,count:n});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(l.d)(re,{},Object(l.a)(s.a));c.a.render(o.a.createElement(u.a,{store:oe},o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4d8e207b.chunk.js.map