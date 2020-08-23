(this["webpackJsonpvendor-app"]=this["webpackJsonpvendor-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(73)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return se}));var a={};n.r(a),n.d(a,"fetchUser",(function(){return P})),n.d(a,"fetchGold",(function(){return x})),n.d(a,"fetchDay",(function(){return G})),n.d(a,"fetchSuppliers",(function(){return A}));var r=n(0),o=n.n(r),i=n(12),u=n.n(i),c=n(7),l=n(11),s=n(27),p=n(2),d=n(3),m=n(6),v=n(5),f=n(4),h=(n(42),n(43),n(44),n(45),n(46),function(){var e=[];return{addItem:function(t){if(null===t||void 0===t)return!1;e.push(t)},getStoreInventory:function(){return e},updateStoreInventory:function(){!function(){var t={type:"SET_STORE_INVENTORY",inventory:e};se.dispatch(t)}()}}}()),y={potion:"potion",weapon:"weapon",armor:"armor"},b=["healing"],g=function(){var e=y,t=b,n=[],a=0,r=function(e){var t=e.type,n=e.name,r=e.value;this.type=t,this.name=n,this.value=r,this.id=a,a++},o=function(e){var t=e.type,n=e.level;this.type=t,this.level=n},i=function(e){var t=e.damage,n=e.level;this.damage=t,this.level=n},u=function(e){var t=e.armor,n=e.level;this.armor=t,this.level=n};return{createItem:function(t){var a=t.type,c=t.name,l=t.value,s=t.itemPayload;if(e[a]){var p=new r({type:a,name:c,value:l});switch(p.type){case e.potion:var d=s.type;if(!d)return void console.log("attempted to create invalid potion type");var m=s.level;if(!m)return void console.log("attempted to create a potion with an invalid level");var v={type:d,level:m};p[p.type]=new o(v);break;case e.weapon:var f=s.damage;if(!f)return void console.log("attempted to create a weapon without damage");var h=s.level;if(!h)return void console.log("attempted to create a weapon with an invalid level");var y={damage:f,level:h};p[p.type]=new i(y);break;case e.armor:var b=s.armor;if(!b)return void console.log("attempted to make a new armor without an armor value");var g=s.level;if(!g)return void console.log("attempted to make a new armor without a level value");var E={armor:b,level:g};p[p.type]=new u(E)}return n.push(p),p.id}console.log("invalid item type passed to items.createItem()")},getItem:function(e){var t=n.find((function(t){return t.id===e}));if(t)return t;console.log("attempted to retrieve invalid item.")},createTestPotion:function(n){var a=new r({type:e.potion,name:"Healing Potion",value:60});return a[e.potion]=new o({type:t.healing,level:n}),a},getItemTypes:function(){return e}}}(),E=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getInventoryItems=a.getInventoryItems.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(h.getStoreInventory()));this.props.setInventory(e)}},{key:"getInventoryItems",value:function(){if(this.props.inventory&&this.props.inventory.length>0){var e=[];return this.props.inventory.forEach((function(t){var n=g.getItem(t);e.push(n)})),o.a.createElement("div",null,e.map((function(e){return o.a.createElement("div",{className:"InventoryItem itemBackground",key:e.id},o.a.createElement("span",{className:"InventoryItemName"},e.name),o.a.createElement("div",{className:"ItemValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},e.value)))})))}return o.a.createElement("div",null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"StoreInventory"},this.getInventoryItems())}}]),n}(o.a.Component),S=Object(c.b)((function(e){return{inventory:e.storeState.inventory,inventoryCount:e.storeState.inventoryCount}}),(function(e){return{setInventory:function(t){return e({type:"SET_STORE_INVENTORY",inventory:t})}}}))(E),O=n(8),j=n.n(O),N=n(10),k=n(28),I=n.n(k),w=function(){var e="",t=1e3;return{chargeGold:function(e){if(t<e)return console.log("attempted to charge more gold than vendor owns"),!1;t-=e},getName:function(){return e},setName:function(t){e=t},getStartingGold:function(){return 1e3},getGold:function(){return t},setGold:function(e){t=e},updateGold:function(){!function(){var e={type:"SET_STORE_GOLD",amount:t};se.dispatch(e)}()}}}(),T=function(){var e=1;return{getDay:function(){return e},setDay:function(t){"number"===typeof t?e=t:console.log("trying to set day to a non number value!")},resetDay:function(){e=1}}}(),D=n(29),_=function(){var e=[],t={},n=1,a=Object.values(y),r=a.length,o=0,i=function(){var e=Object(N.a)(j.a.mark((function e(){var t,r,i,u,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n){e.next=3;break}return e.abrupt("return");case 3:return"armor"!==(r=a[o])&&(r+="s"),1,i=t,u="/".concat(r,"-in-level-range?min-level=").concat(1,"&max-level=").concat(i),e.prev=8,e.next=11,fetch(u);case 11:c=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log(e.t0);case 17:return c&&(c=c.json()),e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(){return e.apply(this,arguments)}}(),u=function e(){var n;o>=r||i().then((function(i){return n=i,null===t[a[o]]&&(t[a[o]]=[]),t[a[o]].push(n),++o===r&&function(e){var t={type:"SET_SUPPLY_SPAWNED",value:e};se.dispatch(t)}(!0),e(),!0})).catch((function(e){return console.log(e)}))},c=function(){var n=Math.floor(Math.random()*a.length),r=a[n],o=t[r],i=o[Math.floor(Math.random()*o.length)];Array.isArray(i)&&(i=i[0]);var u={};switch(u.level=i.level,i.item.type){case y.potion:u.type=i.type;break;case y.weapon:u.damage=i.damage;break;case y.armor:u.armor=i.armor}var c={};c.itemPayload=u,c.type=i.item.type,c.name=i.item.name,c.value=i.item.value;var l=g.createItem(c);e.push(l)};return{getSupplies:function(){return e},fillSupplies:function(){for(var e=0;e<10;e++)c();!function(e){var t={type:"SET_SUPPLY_READY",value:e};se.dispatch(t)}(!0)},fillSupplyPool:function(){o=0,a.forEach((function(e){null==t[e]&&(t[e]=[]),t[e].length=0})),u()},depleteSupply:function(t){var n=e.indexOf(t);if(n>=0)return e.splice(n,1)},setSupplyLevel:function(e){n=e}}}(),C=function(){var e=[],t=0,n=function(e){var n=e.name,a=e.offerings;this.name=n,this.offerings=a,this.inventory=[],this.id=t,t++};n.prototype.rankFavorites=function(){for(var e=[],t=this.offerings.length,n=0;n<t;n++)e.push(this.offerings[n]);e.sort((function(e,t){return e.markup-t.markup})),this.rankedOfferings=e},n.prototype.sellItem=function(e){var t=e.id,n=e.price,a=this.inventory.indexOf(t);return!(!a&&0!==a)&&(this.inventory.splice(a,1),this.gold+=n,!0)};var a=function(e){var t={type:"SET_SUPPLIERS",payload:e};se.dispatch(t)},r=function(){var e=Object(N.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/suppliers");case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return t&&(t=t.json()),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),o=j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}));return{initializeSuppliers:function(){var t=Object(N.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o().next().value.then((function(t){if(t){for(var o=t;e.length<r&&o.length>0;){var i=Math.floor(Math.random()*o.length),u=o.splice(i,1),c={name:(u=u[0]).name,offerings:u.offerings},l=new n(c);l.gold=1e3,e.push(l)}return e.forEach((function(e){return e.rankFavorites()})),a(e),e}}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getSuppliers:function(){return e},takeSupplierTurn:function(){!function(){var t=JSON.parse(JSON.stringify(_.getSupplies())),n=[],a=[];t.forEach((function(e){var t=g.getItem(e);n.push(t.type),a.push(t.value)}));var r=0,o=e.length;t.forEach((function(t,i){for(var u=[],c=0;c<o;c++){var l=r+c;l>=o&&(l-=o),u.push(l)}var s=!1;u.forEach((function(u){var c,l=e[u].rankedOfferings,p=Object(D.a)(l);try{for(p.s();!(c=p.n()).done;){if(c.value.type===n[i]&&!s&&e[u].gold>=a[i]){null===e[u].inventory&&(e[u].inventory=[]);var d=_.depleteSupply(t);Array.isArray(d)&&(d=d[0]),e[u].gold-=a[i],e[u].inventory.push(d),s=!0,(r=u+1)>o&&(r=0)}}}catch(m){p.e(m)}finally{p.f()}}))}))}(),a(e),function(e){var t={type:"SET_SUPPLY_READY",value:e};se.dispatch(t)}(!1)},sellItem:function(t){var n=t.id,a=t.itemId,r=t.price,o=e.find((function(e){return e.id===n}));if(console.log(o),!o)return!1;var i={id:a,price:r};return!!o.sellItem(i)},updateSuppliers:function(){a(e)}}}(),P=function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getGold();case 2:n=e.sent,t({type:"SET_STORE_GOLD",amount:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getDay();case 2:n=e.sent,t({type:"SET_DAY",day:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getSuppliers();case 2:n=e.sent,t({type:"SET_SUPPLIERS",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGold()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Store"},o.a.createElement("div",{className:"StoreMenuBar"},o.a.createElement("h2",{className:"StoreName"},this.props.storeName),o.a.createElement("span",{className:"Inspect",role:"img","aria-label":"inspect"},"\ud83d\udd0d "),o.a.createElement("div",{className:"GoldDisplay"},o.a.createElement("span",{className:"CoinSymbol",role:"img","aria-label":"coin"},"\u2689 "),this.props.gold)),o.a.createElement(S,null))}}]),n}(o.a.Component),M=Object(c.b)((function(e){return{storeName:e.storeState.name,gold:e.storeState.gold}}),(function(e){return{setStoreGold:function(t){return e({type:"SET_STORE_GOLD",amount:t})},fetchGold:function(){return e(x())}}}))(L),R=(n(65),n(30)),U=(n(66),n(67),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"SupplierBuyButton"},o.a.createElement("div",{className:"supplierBuyButtonIcon"},"buy"))}}]),n}(o.a.Component)),V=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getSuppllierInventory=a.getSuppllierInventory.bind(Object(m.a)(a)),a.handlePurchase=a.handlePurchase.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"handlePurchase",value:function(e){console.log("in handlePurchase"),console.dir(e),console.log("gold: ".concat(this.props.storeGold));var t=e.ids,n=e.price;if(!(n>this.props.storeGold)){var a=t[0],r={id:this.props.supplier.id,itemId:a,price:n};C.sellItem(r)&&(console.log("item sold by supplier"),w.chargeGold(n),h.addItem(a),console.log("item bought by vendor"),w.updateGold(),h.updateStoreInventory(),C.updateSuppliers())}}},{key:"getSuppllierInventory",value:function(){var e=this;if(!this.props.initialized)return"";var t=[];this.props.supplier.inventory.forEach((function(e){var n=g.getItem(e);t.push(n)}));var n={},a={},r={},i={};t.forEach((function(e){n[e.name]?(n[e.name]+=1,i[e.name].push(e.id)):(n[e.name]=1,a[e.name]=e.value,r[e.name]=e.type,i[e.name]=[e.id])}));for(var u=[],c=0,l=Object.entries(n);c<l.length;c++){var s=Object(R.a)(l[c],2),p=s[0],d={name:p,count:s[1],type:r[p],value:a[p],ids:i[p]};u.push(d)}return u.map((function(t){var n=e.props.supplier.offerings,a=n.findIndex((function(e){return e.type===t.type})),r=t.value;return-1!==a&&(r*=1+n[a].markup/1e3,r=Math.floor(r)),o.a.createElement("div",{className:"SupplierInventoryItem itemBackground",key:t.id},o.a.createElement("span",{className:"SupplierInventoryItemName"},t.name),o.a.createElement("span",{className:"ItemCount"}," (",t.count,")"),o.a.createElement("div",{className:"SupplierItemsValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},r),o.a.createElement("div",{className:"BuyButtonContainer",onClick:function(){return e.handlePurchase({ids:t.ids,price:r})}},o.a.createElement(U,null))))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"Supplier"},o.a.createElement("div",{className:"SupplierName"},this.props.supplier.name,o.a.createElement("div",{className:"SupplierValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},this.props.supplier.gold))),o.a.createElement("div",{className:"supplierInventory"},this.getSuppllierInventory()))}}]),n}(o.a.Component),B=Object(c.b)((function(e){return{supplyReady:e.supplies.ready,storeGold:e.storeState.gold}}))(V),Y=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={suppliersInitialized:!1},a.getSuppliers=a.getSuppliers.bind(Object(m.a)(a)),a.componentDidUpdate=a.componentDidUpdate.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){Array.isArray(this.props.suppliers)&&this.props.supplySpawned&&(this.props.supplyReady||_.fillSupplies()),Array.isArray(this.props.suppliers)&&this.props.supplyReady&&(this.state.suppliersInitialized||(C.takeSupplierTurn(),this.setState({suppliersInitialized:!0})))}},{key:"getSuppliers",value:function(){var e=this,t=this.props.suppliers;if(Array.isArray(t)){console.log(t);var n=t.map((function(t){return o.a.createElement(B,{supplier:t,initialized:e.state.suppliersInitialized})}));return o.a.createElement("div",{className:"suppliersContainer"},n)}return"no suppliers to render"}},{key:"render",value:function(){return o.a.createElement("div",{className:"Suppliers"},this.getSuppliers())}}]),n}(o.a.Component),z=Object(c.b)((function(e){return{suppliers:e.suppliers.suppliers,supplyReady:e.supplies.ready,supplySpawned:e.supplies.spawned}}))(Y),F=(n(68),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleNextDay=a.handleNextDay.bind(Object(m.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDay()}},{key:"handleNextDay",value:function(){var e=this.props.day;T.setDay(e+1),this.props.fetchDay()}},{key:"render",value:function(){return o.a.createElement("div",{className:"Days"},o.a.createElement("span",{className:"DayTitle"},"Day: ",this.props.day),o.a.createElement("button",{className:"nextDay",onClick:this.handleNextDay},"Finish Day"))}}]),n}(o.a.Component)),J=Object(c.b)((function(e){return{day:e.days.day}}),(function(e){return{fetchDay:function(){return e(G())}}}))(F),W=(n(69),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Details"},"Details")}}]),n}(o.a.Component)),H=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"GameScreen flex-container"},o.a.createElement("div",{className:"CommerceColumn"},o.a.createElement(J,null),o.a.createElement(M,null),o.a.createElement(z,null)),o.a.createElement(W,null))}}]),n}(o.a.Component),K=Object(c.b)((function(e){return{storeName:e.storeState.name}}))(H),$=(n(70),n(71),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Title"},"VENDOR")}}]),n}(o.a.Component)),q={init:function(e){T.setDay(1),e.name||console.log("Game must be started with a payload object that contains a store name!"),w.setName(e.name);var t=w.getStartingGold();w.setGold(t),_.setSupplyLevel(1),_.fillSupplyPool(),C.initializeSuppliers(3)},getGameLevel:function(){return 1}},Q=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleStart=a.handleStart.bind(Object(m.a)(a)),a.handleNameInput=a.handleNameInput.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"handleStart",value:function(){var e=this.props.name;e&&""!==e&&(q.init({name:e}),this.props.setStarted(!0))}},{key:"handleNameInput",value:function(e){13===e.charCode&&this.handleStart()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"StartScreen"},o.a.createElement($,null),o.a.createElement("div",{className:"NameInput"},o.a.createElement("div",{className:"nameInputGroup"},o.a.createElement("label",{htmlFor:"name",className:"NameLabel"},"Name: "),o.a.createElement("input",{id:"name",value:this.props.name,type:"text",onChange:function(t){return e.props.setStoreName(t.target.value)},onKeyPress:this.handleNameInput})),o.a.createElement("button",{onClick:this.handleStart,className:"StartButton"},"Start!")))}}]),n}(o.a.Component),X=Object(c.b)((function(e){return{started:e.gameState.started,name:e.storeState.name}}),(function(e){return{setStoreName:function(t){return e({type:"SET_STORE_NAME",name:t})},setStarted:function(t){return e({type:"SET_GAME_STATE",value:t})}}}))(Q),Z=(n(72),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(m.a)(a)),a.renderEditorLink=a.renderEditorLink.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderEditorLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&o.a.createElement("li",{key:"editorLink"},o.a.createElement("a",{className:"EditorLink",href:"/editor"},"editor"))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"MenuBar"},o.a.createElement("span",{className:"MenuTitle"},o.a.createElement("a",{href:"/"},"VENDOR")),o.a.createElement("ul",{className:"LoginContainer"},this.renderEditorLink(),this.renderLogin()))}}]),n}(o.a.Component)),ee=Object(c.b)((function(e){return{auth:e.auth}}))(Z),te=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getMainView=a.getMainView.bind(Object(m.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getMainView",value:function(){return this.props.started?o.a.createElement(K,null):o.a.createElement(X,null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ee,null),this.getMainView())}}]),n}(o.a.Component),ne=Object(c.b)((function(e){return{started:e.gameState.started}}),a)(te),ae=n(1),re={day:1},oe={started:!1,storeUpdate:!1},ie={name:"",gold:0,refreshing:!1,refreshed:!1,inventory:[],inventoryCount:0},ue={suppliers:null,count:0},ce={ready:!1,spawned:!1},le=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY":return Object(ae.a)(Object(ae.a)({},e),{},{day:t.day});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STATE":return Object(ae.a)(Object(ae.a)({},e),{},{started:t.value});case"SET_UPDATES":var n=t.payload,a=n.storeUpdate;return Object(ae.a)(Object(ae.a)({},e),{},{storeUpdate:a});case"SET_STORE_UPDATE":return Object(ae.a)(Object(ae.a)({},e),{},{storeUpdate:t.value});default:return e}},storeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STORE_NAME":return Object(ae.a)(Object(ae.a)({},e),{},{name:t.name});case"SET_STORE_GOLD":return Object(ae.a)(Object(ae.a)({},e),{},{gold:t.amount});case"SET_STORE_INVENTORY":var n=t.inventory,a=e.inventoryCount;return Array.isArray(n)&&(a=n.length),Object(ae.a)(Object(ae.a)({},e),{},{inventory:n,count:a});default:return e}},suppliers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLIERS":var n=0;return Array.isArray(t.payload)&&(n=t.payload.length),Object(ae.a)(Object(ae.a)({},e),{},{suppliers:t.payload,count:n});default:return e}},supplies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLY_READY":return Object(ae.a)(Object(ae.a)({},e),{},{ready:t.value});case"SET_SUPPLY_SPAWNED":return Object(ae.a)(Object(ae.a)({},e),{},{spawned:t.value});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=Object(l.d)(le,{},Object(l.a)(s.a));u.a.render(o.a.createElement(c.a,{store:se},o.a.createElement(o.a.StrictMode,null,o.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.885ea984.chunk.js.map