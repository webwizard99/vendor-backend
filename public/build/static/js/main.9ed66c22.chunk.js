(this["webpackJsonpvendor-app"]=this["webpackJsonpvendor-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(73)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return pe}));var a={};n.r(a),n.d(a,"fetchUser",(function(){return U})),n.d(a,"fetchGold",(function(){return F})),n.d(a,"fetchDay",(function(){return L})),n.d(a,"fetchSuppliers",(function(){return R}));var r=n(0),i=n.n(r),o=n(12),u=n.n(o),c=n(7),s=n(11),l=n(27),p=n(3),m=n(4),d=n(1),v=n(6),f=n(5),h=(n(42),n(43),n(44),n(45),n(2)),y={potion:"potion",weapon:"weapon",armor:"armor"},b=["healing"],g=function(){var e=y,t=b,n=[],a={},r=0,i=function(e){var t=e.type,n=e.name,i=e.value,o=e.prototypeId;this.type=t,this.name=n,this.value=i,this.prototypeId=o,this.id=r,a[r]=t,r++},o=function(e){var t=e.type,n=e.level;this.type=t,this.level=n},u=function(e){var t=e.damage,n=e.level;this.damage=t,this.level=n},c=function(e){var t=e.armor,n=e.level;this.armor=t,this.level=n};return{createItem:function(t){var a=t.type,r=t.name,s=t.value,l=t.itemPayload;if(e[a]){var p=new i({type:a,name:r,value:s});switch(p.type){case e.potion:var m=l.type;if(!m)return void console.log("attempted to create invalid potion type");var d=l.level;if(!d)return void console.log("attempted to create a potion with an invalid level");var v={type:m,level:d};p[p.type]=new o(v);break;case e.weapon:var f=l.damage;if(!f)return void console.log("attempted to create a weapon without damage");var h=l.level;if(!h)return void console.log("attempted to create a weapon with an invalid level");var y={damage:f,level:h};p[p.type]=new u(y);break;case e.armor:var b=l.armor;if(!b)return void console.log("attempted to make a new armor without an armor value");var g=l.level;if(!g)return void console.log("attempted to make a new armor without a level value");var S={armor:b,level:g};p[p.type]=new c(S)}return n.push(p),p.id}console.log("invalid item type passed to items.createItem()")},getItem:function(e){var t=n.find((function(t){return t.id===e}));if(t)return t;console.log("attempted to retrieve invalid item.")},getItemType:function(e){return null!==a[e]&&a[e]},getItemTypeIndex:function(){return a},createTestPotion:function(n){var a=new i({type:e.potion,name:"Healing Potion",value:60});return a[e.potion]=new o({type:t.healing,level:n}),a},getItemTypes:function(){return e}}}(),S=function(){var e=[],t=function(){var t=[];return e.forEach((function(e){var n=g.getItem(e.itemId);t.push(Object(h.a)(Object(h.a)({},n),{},{markup:e.markup}))})),t};return{addItem:function(t){if(null===t||void 0===t)return!1;var n={itemId:t,markup:150};e.push(n)},getStoreInventory:function(){return e},updateStoreInventory:function(){!function(){var t={type:"SET_STORE_INVENTORY",inventory:e};pe.dispatch(t)}()},getComposedInventory:function(){return t()},getFilteredInventory:function(e){return e&&"all"!==e.toLowerCase()?(n=e,t().filter((function(e){return e.type===n}))):t();var n},getFilteredStoreItems:function(t){return n=t,e.filter((function(e){return S.getItemType(e.itemId)===n}));var n},markupFilteredStoreItems:function(t){var n,a,r=t.filter,i=t.markup;n=r,a=i,e.forEach((function(e){"all"!==n.toLowerCase()&&g.getItemType(e.itemId)!==n||(e.markup+=a,e.markup>4e3&&(e.markup=4e3),e.markup<0&&(e.markup=0))}))},markupStoreItem:function(t){!function(t,n){e.find((function(e){return e.itemId===t})).markup+=n}(t.id,t.markup)}}}(),O=S,E=(n(46),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={markup:50,id:null},a.valence=1,a.handleOneIncrement=a.handleOneIncrement.bind(Object(d.a)(a)),a.getInventoryItems=a.getInventoryItems.bind(Object(d.a)(a)),a.getIncrementOneButtons=a.getIncrementOneButtons.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(O.getStoreInventory()));this.props.setInventory(e)}},{key:"handleOneIncrement",value:function(e){var t=e.id,n=e.posNeg;console.log("id: ".concat(t,", posNeg: ").concat(n));var a={id:t,markup:this.state.markup*n};O.markupStoreItem(a)}},{key:"getIncrementOneButtons",value:function(e){var t=this;return i.a.createElement("div",{className:"incrementButtons incrementOneSet"},i.a.createElement("div",{className:"decreaseOne incrementButton button",onClick:function(){return t.handleOneIncrement({id:e,posNeg:-1})}},i.a.createElement("span",{className:"incrementIcon minusOne"},"-")),i.a.createElement("div",{className:"increaseOne incrementButton button",onClick:function(){return t.handleOneIncrement({id:e,posNeg:1})}},i.a.createElement("span",{className:"incrementIcon plusOne"},"+")))}},{key:"getInventoryItems",value:function(){var e,t=this;return this.props.inventory&&this.props.inventory.length>0?(e=this.props.filterActive&&"all"!==this.props.storeFilter?O.getFilteredInventory(this.props.storeFilter):O.getComposedInventory(),i.a.createElement("div",null,e.map((function(e){var n=Math.floor(e.value*(1+e.markup/1e3));return i.a.createElement("div",{className:"InventoryItem itemBackground",key:e.id},i.a.createElement("span",{className:"InventoryItemName"},e.name),t.getIncrementOneButtons(e.id),i.a.createElement("div",{className:"ItemValueGroup"},i.a.createElement("span",{className:"InventoryItemValue"},i.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),n)))})))):i.a.createElement("div",null)}},{key:"render",value:function(){return i.a.createElement("div",{className:"StoreInventory"},this.getInventoryItems())}}]),n}(i.a.Component)),k=Object(c.b)((function(e){return{inventory:e.storeState.inventory,inventoryCount:e.storeState.inventoryCount,filterActive:e.storeState.filterActive,storeFilter:e.storeState.filter,storeNeedsUpdate:e.storeState.needsUpdate}}),(function(e){return{setInventory:function(t){return e({type:"SET_STORE_INVENTORY",inventory:t})}}}))(E),j=n(8),I=n.n(j),N=n(10),T=n(28),w=n.n(T),D=function(){var e="",t=1e3;return{chargeGold:function(e){if(t<e)return console.log("attempted to charge more gold than vendor owns"),!1;t-=e},getName:function(){return e},setName:function(t){e=t},getStartingGold:function(){return 1e3},getGold:function(){return t},setGold:function(e){t=e},updateGold:function(){!function(){var e={type:"SET_STORE_GOLD",amount:t};pe.dispatch(e)}()}}}(),_=function(){var e=1;return{getDay:function(){return e},setDay:function(t){"number"===typeof t?e=t:console.log("trying to set day to a non number value!")},resetDay:function(){e=1}}}(),A=n(29),M=function(){var e=[],t={},n=1,a=Object.values(y),r=a.length,i=0,o=function(){var e=Object(N.a)(I.a.mark((function e(){var t,r,o,u,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n){e.next=3;break}return e.abrupt("return");case 3:return"armor"!==(r=a[i])&&(r+="s"),1,o=t,u="/".concat(r,"-in-level-range?min-level=").concat(1,"&max-level=").concat(o),e.prev=8,e.next=11,fetch(u);case 11:c=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log(e.t0);case 17:return c&&(c=c.json()),e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(){return e.apply(this,arguments)}}(),u=function e(){var n;i>=r||o().then((function(o){return n=o,null===t[a[i]]&&(t[a[i]]=[]),t[a[i]].push(n),++i===r&&function(e){var t={type:"SET_SUPPLY_SPAWNED",value:e};pe.dispatch(t)}(!0),e(),!0})).catch((function(e){return console.log(e)}))},c=function(){var n=Math.floor(Math.random()*a.length),r=a[n],i=t[r],o=i[Math.floor(Math.random()*i.length)];Array.isArray(o)&&(o=o[0]);var u={};switch(u.level=o.level,o.item.type){case y.potion:u.type=o.type;break;case y.weapon:u.damage=o.damage;break;case y.armor:u.armor=o.armor}var c={};c.itemPayload=u,c.type=o.item.type,c.name=o.item.name,c.value=o.item.value,c.prototypeId=o.item.id;var s=g.createItem(c);e.push(s)};return{getSupplies:function(){return e},fillSupplies:function(){for(var e=0;e<10;e++)c();!function(e){var t={type:"SET_SUPPLY_READY",value:e};pe.dispatch(t)}(!0)},fillSupplyPool:function(){i=0,a.forEach((function(e){null==t[e]&&(t[e]=[]),t[e].length=0})),u()},depleteSupply:function(t){var n=e.indexOf(t);if(n>=0)return e.splice(n,1)},setSupplyLevel:function(e){n=e}}}(),C=function(){var e=[],t=0,n=function(e){var n=e.name,a=e.offerings;this.name=n,this.offerings=a,this.inventory=[],this.id=t,t++};n.prototype.rankFavorites=function(){for(var e=[],t=this.offerings.length,n=0;n<t;n++)e.push(this.offerings[n]);e.sort((function(e,t){return e.markup-t.markup})),this.rankedOfferings=e},n.prototype.sellItem=function(e){var t=e.id,n=e.price,a=this.inventory.indexOf(t);return!(!a&&0!==a)&&(this.inventory.splice(a,1),this.gold+=n,!0)};var a=function(e){var t={type:"SET_SUPPLIERS",payload:e};pe.dispatch(t)},r=function(){var e=Object(N.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/suppliers");case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return t&&(t=t.json()),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),i=I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}));return{initializeSuppliers:function(){var t=Object(N.a)(I.a.mark((function t(r){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i().next().value.then((function(t){if(t){for(var i=t;e.length<r&&i.length>0;){var o=Math.floor(Math.random()*i.length),u=i.splice(o,1),c={name:(u=u[0]).name,offerings:u.offerings},s=new n(c);s.gold=1e3,e.push(s)}return e.forEach((function(e){return e.rankFavorites()})),a(e),e}}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getSuppliers:function(){return e},takeSupplierTurn:function(){!function(){var t=JSON.parse(JSON.stringify(M.getSupplies())),n=[],a=[];t.forEach((function(e){var t=g.getItem(e);n.push(t.type),a.push(t.value)}));var r=0,i=e.length;t.forEach((function(t,o){for(var u=[],c=0;c<i;c++){var s=r+c;s>=i&&(s-=i),u.push(s)}var l=!1;u.forEach((function(u){var c,s=e[u].rankedOfferings,p=Object(A.a)(s);try{for(p.s();!(c=p.n()).done;){if(c.value.type===n[o]&&!l&&e[u].gold>=a[o]){null===e[u].inventory&&(e[u].inventory=[]);var m=M.depleteSupply(t);Array.isArray(m)&&(m=m[0]),e[u].gold-=a[o],e[u].inventory.push(m),l=!0,(r=u+1)>i&&(r=0)}}}catch(d){p.e(d)}finally{p.f()}}))}))}(),a(e),function(e){var t={type:"SET_SUPPLY_READY",value:e};pe.dispatch(t)}(!1)},sellItem:function(t){var n=t.id,a=t.itemId,r=t.price,i=e.find((function(e){return e.id===n}));if(!i)return!1;var o={id:a,price:r};return!!i.sellItem(o)},updateSuppliers:function(){a(e)}}}(),U=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getGold();case 2:n=e.sent,t({type:"SET_STORE_GOLD",amount:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getDay();case 2:n=e.sent,t({type:"SET_DAY",day:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getSuppliers();case 2:n=e.sent,t({type:"SET_SUPPLIERS",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={markup:50},a.timer=void 0,a.delay=200,a.markupIntensity=10,a.valence=1,a.increaseMarkup=a.increaseMarkup.bind(Object(d.a)(a)),a.repeat=a.repeat.bind(Object(d.a)(a)),a.onMouseDown=a.onMouseDown.bind(Object(d.a)(a)),a.onMouseUp=a.onMouseUp.bind(Object(d.a)(a)),a.markupOut=a.markupOut.bind(Object(d.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a.toggleFilter=a.toggleFilter.bind(Object(d.a)(a)),a.getFilter=a.getFilter.bind(Object(d.a)(a)),a.handleFilter=a.handleFilter.bind(Object(d.a)(a)),a.getIncrementButtons=a.getIncrementButtons.bind(Object(d.a)(a)),a.handleIncrease=a.handleIncrease.bind(Object(d.a)(a)),a.handleDecrease=a.handleDecrease.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchGold()}},{key:"handleFilter",value:function(e){var t=e.target.value;this.props.setStoreFilter(t)}},{key:"increaseMarkup",value:function(){this.setState({markup:this.state.markup+this.markupIntensity})}},{key:"onMouseDown",value:function(e){var t=e.target;(t.classList.contains("decreaseAll")||t.classList.contains("minus"))&&(this.valence=-1),t.classList.contains("increaseAll")&&(this.valence=1),this.repeat()}},{key:"repeat",value:function(){this.increaseMarkup(),-1===this.valence&&this.handleDecrease(),1===this.valence&&this.handleIncrease(),this.timer=setTimeout(this.repeat,this.delay),this.markupIntensity+=5}},{key:"onMouseUp",value:function(){clearTimeout(this.timer),this.markupIntensity=50,this.valence=1,this.markupOut()}},{key:"markupOut",value:function(){this.setState({markup:50})}},{key:"handleIncrease",value:function(){var e={filter:this.props.storeFilter,markup:this.state.markup};O.markupFilteredStoreItems(e),O.updateStoreInventory(),this.props.toggleStoreUpdateStatus()}},{key:"handleDecrease",value:function(){var e={filter:this.props.storeFilter,markup:-1*this.state.markup};O.markupFilteredStoreItems(e),O.updateStoreInventory(),this.props.toggleStoreUpdateStatus()}},{key:"getIncrementButtons",value:function(){return this.props.filterActive?i.a.createElement("div",{className:"incrementButtons"},i.a.createElement("div",{className:"decreaseAll incrementButton button",onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},i.a.createElement("span",{className:"incrementIcon minus"},"-")),i.a.createElement("div",{className:"increaseAll incrementButton button",onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},i.a.createElement("span",{className:"incrementIcon plus"},"+"))):""}},{key:"getFilter",value:function(){if(!this.props.filterActive)return"";var e=Object.values(y);return i.a.createElement("select",{className:"StoreItemTypeFilter",defaultValue:this.props.storeFilter,onChange:this.handleFilter},i.a.createElement("option",{value:"all"},"all"),e.map((function(e){return i.a.createElement("option",{value:e},e)})))}},{key:"toggleFilter",value:function(){var e=!this.props.filterActive;this.props.setStoreFilterActive(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Store"},i.a.createElement("div",{className:"StoreMenuBar"},i.a.createElement("h2",{className:"StoreName"},this.props.storeName),i.a.createElement("div",{className:"FilterGroup"},this.getIncrementButtons(),this.getFilter()),i.a.createElement("span",{className:"Inspect",role:"img","aria-label":"inspect",onClick:this.toggleFilter},"\ud83d\udd0d "),i.a.createElement("div",{className:"GoldDisplay"},i.a.createElement("div",{className:"StoreGold"},i.a.createElement("span",{className:"CoinSymbol",role:"img","aria-label":"coin"},"\u2689 "),this.props.gold))),i.a.createElement(k,null))}}]),n}(i.a.Component),x=Object(c.b)((function(e){return{storeName:e.storeState.name,gold:e.storeState.gold,filterActive:e.storeState.filterActive,storeFilter:e.storeState.filter,storeNeedsUpdate:e.storeState.needsUpdate}}),(function(e){return{setStoreGold:function(t){return e({type:"SET_STORE_GOLD",amount:t})},fetchGold:function(){return e(F())},setStoreFilter:function(t){return e({type:"SET_STORE_FILTER",filter:t})},setStoreFilterActive:function(t){return e({type:"SET_STORE_FILTER_ACTIVE",value:t})},toggleStoreUpdateStatus:function(){return e({type:"SET_STORE_UPDATE_STATUS"})}}}))(P),G=(n(65),n(30)),B=(n(66),n(67),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"SupplierBuyButton button"},i.a.createElement("div",{className:"supplierBuyButtonIcon"},"buy"))}}]),n}(i.a.Component)),V=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getSuppllierInventory=a.getSuppllierInventory.bind(Object(d.a)(a)),a.handlePurchase=a.handlePurchase.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"handlePurchase",value:function(e){var t=e.ids,n=e.price;if(!(n>this.props.storeGold)){var a=t[0],r={id:this.props.supplier.id,itemId:a,price:n};C.sellItem(r)&&(D.chargeGold(n),O.addItem(a),D.updateGold(),O.updateStoreInventory(),C.updateSuppliers())}}},{key:"getSuppllierInventory",value:function(){var e=this;if(!this.props.initialized)return"";var t=[];this.props.supplier.inventory.forEach((function(e){var n=g.getItem(e);t.push(n)}));var n={},a={},r={},o={};t.forEach((function(e){n[e.name]?(n[e.name]+=1,o[e.name].push(e.id)):(n[e.name]=1,a[e.name]=e.value,r[e.name]=e.type,o[e.name]=[e.id])}));for(var u=[],c=0,s=Object.entries(n);c<s.length;c++){var l=Object(G.a)(s[c],2),p=l[0],m={name:p,count:l[1],type:r[p],value:a[p],ids:o[p]};u.push(m)}return u.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0})),u.map((function(t){var n=e.props.supplier.offerings,a=n.findIndex((function(e){return e.type===t.type})),r=t.value;return-1!==a&&(r*=1+n[a].markup/1e3,r=Math.floor(r)),i.a.createElement("div",{className:"SupplierInventoryItem itemBackground",key:t.id},i.a.createElement("span",{className:"SupplierInventoryItemName"},t.name," (",t.count,")"),i.a.createElement("div",{className:"SupplierItemsValueGroup"},i.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),i.a.createElement("span",{className:"InventoryItemValue"},r)),i.a.createElement("div",{className:"BuyButtonContainer",onClick:function(){return e.handlePurchase({ids:t.ids,price:r})}},i.a.createElement(B,null)))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"Supplier"},i.a.createElement("div",{className:"SupplierName"},this.props.supplier.name,i.a.createElement("div",{className:"SupplierValueGroup"},i.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),i.a.createElement("span",{className:"InventoryItemValue"},this.props.supplier.gold))),i.a.createElement("div",{className:"supplierInventory"},this.getSuppllierInventory()))}}]),n}(i.a.Component),Y=Object(c.b)((function(e){return{supplyReady:e.supplies.ready,storeGold:e.storeState.gold}}))(V),z=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={suppliersInitialized:!1},a.getSuppliers=a.getSuppliers.bind(Object(d.a)(a)),a.componentDidUpdate=a.componentDidUpdate.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(){Array.isArray(this.props.suppliers)&&this.props.supplySpawned&&(this.props.supplyReady||M.fillSupplies()),Array.isArray(this.props.suppliers)&&this.props.supplyReady&&(this.state.suppliersInitialized||(C.takeSupplierTurn(),this.setState({suppliersInitialized:!0})))}},{key:"getSuppliers",value:function(){var e=this,t=this.props.suppliers;if(Array.isArray(t)){var n=t.map((function(t){return i.a.createElement(Y,{supplier:t,initialized:e.state.suppliersInitialized})}));return i.a.createElement("div",{className:"suppliersContainer",ref:function(t){e.container=t}},n,i.a.createElement("div",{className:"spacer"}))}return"no suppliers to render"}},{key:"render",value:function(){return i.a.createElement("div",{className:"Suppliers"},this.getSuppliers())}}]),n}(i.a.Component),J=Object(c.b)((function(e){return{suppliers:e.suppliers.suppliers,supplyReady:e.supplies.ready,supplySpawned:e.supplies.spawned}}))(z),W=(n(68),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleNextDay=a.handleNextDay.bind(Object(d.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDay()}},{key:"handleNextDay",value:function(){var e=this.props.day;_.setDay(e+1),this.props.fetchDay()}},{key:"render",value:function(){return i.a.createElement("div",{className:"Days"},i.a.createElement("div",{className:"DayTitle"},"Day: ",this.props.day),i.a.createElement("div",{className:"nextDay button",onClick:this.handleNextDay},"Finish Day"))}}]),n}(i.a.Component)),H=Object(c.b)((function(e){return{day:e.days.day}}),(function(e){return{fetchDay:function(){return e(L())}}}))(W),K=(n(69),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Details"},"Details")}}]),n}(i.a.Component)),$=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"GameScreen flex-container"},i.a.createElement("div",{className:"CommerceColumn"},i.a.createElement(H,null),i.a.createElement(x,null),i.a.createElement(J,null)),i.a.createElement(K,null))}}]),n}(i.a.Component),q=Object(c.b)((function(e){return{storeName:e.storeState.name}}))($),Q=(n(70),n(71),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Title"},"VENDOR")}}]),n}(i.a.Component)),X={init:function(e){_.setDay(1),e.name||console.log("Game must be started with a payload object that contains a store name!"),D.setName(e.name);var t=D.getStartingGold();D.setGold(t),M.setSupplyLevel(1),M.fillSupplyPool(),C.initializeSuppliers(3)},getGameLevel:function(){return 1}},Z=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleStart=a.handleStart.bind(Object(d.a)(a)),a.handleNameInput=a.handleNameInput.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"handleStart",value:function(){var e=this.props.name;e&&""!==e&&(X.init({name:e}),this.props.setStarted(!0))}},{key:"handleNameInput",value:function(e){13===e.charCode&&this.handleStart()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"StartScreen"},i.a.createElement(Q,null),i.a.createElement("div",{className:"NameInput"},i.a.createElement("div",{className:"nameInputGroup"},i.a.createElement("label",{htmlFor:"name",className:"NameLabel"},"Name: "),i.a.createElement("input",{id:"name",value:this.props.name,type:"text",onChange:function(t){return e.props.setStoreName(t.target.value)},onKeyPress:this.handleNameInput})),i.a.createElement("button",{onClick:this.handleStart,className:"StartButton"},"Start!")))}}]),n}(i.a.Component),ee=Object(c.b)((function(e){return{started:e.gameState.started,name:e.storeState.name}}),(function(e){return{setStoreName:function(t){return e({type:"SET_STORE_NAME",name:t})},setStarted:function(t){return e({type:"SET_GAME_STATE",value:t})}}}))(Z),te=(n(72),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(d.a)(a)),a.renderEditorLink=a.renderEditorLink.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return i.a.createElement("li",{key:"login"},i.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return i.a.createElement("li",{key:"login"},i.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderEditorLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&i.a.createElement("li",{key:"editorLink"},i.a.createElement("a",{className:"EditorLink",href:"/editor"},"editor"))}}},{key:"render",value:function(){return i.a.createElement("div",{className:"MenuBar"},i.a.createElement("span",{className:"MenuTitle"},i.a.createElement("a",{href:"/"},"VENDOR")),i.a.createElement("ul",{className:"LoginContainer"},this.renderEditorLink(),this.renderLogin()))}}]),n}(i.a.Component)),ne=Object(c.b)((function(e){return{auth:e.auth}}))(te),ae=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getMainView=a.getMainView.bind(Object(d.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(d.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getMainView",value:function(){return this.props.started?i.a.createElement(q,null):i.a.createElement(ee,null)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(ne,null),this.getMainView())}}]),n}(i.a.Component),re=Object(c.b)((function(e){return{started:e.gameState.started}}),a)(ae),ie={day:1},oe={started:!1,storeUpdate:!1},ue={name:"",gold:0,filterActive:!1,filter:"all",needsUpdate:!1,inventory:[],inventoryCount:0},ce={suppliers:null,count:0},se={ready:!1,spawned:!1},le=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY":return Object(h.a)(Object(h.a)({},e),{},{day:t.day});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STATE":return Object(h.a)(Object(h.a)({},e),{},{started:t.value});case"SET_UPDATES":var n=t.payload,a=n.storeUpdate;return Object(h.a)(Object(h.a)({},e),{},{storeUpdate:a});case"SET_STORE_UPDATE":return Object(h.a)(Object(h.a)({},e),{},{storeUpdate:t.value});default:return e}},storeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STORE_NAME":return Object(h.a)(Object(h.a)({},e),{},{name:t.name});case"SET_STORE_GOLD":return Object(h.a)(Object(h.a)({},e),{},{gold:t.amount});case"SET_STORE_INVENTORY":var n=t.inventory,a=e.inventoryCount;return Array.isArray(n)&&(a=n.length),Object(h.a)(Object(h.a)({},e),{},{inventory:n,inventoryCount:a});case"SET_STORE_FILTER_ACTIVE":return Object(h.a)(Object(h.a)({},e),{},{filterActive:t.value});case"SET_STORE_FILTER":return Object(h.a)(Object(h.a)({},e),{},{filter:t.filter});case"SET_STORE_UPDATE_STATUS":var r=!e.needsUpdate;return Object(h.a)(Object(h.a)({},e),{},{needsUpdate:r});default:return e}},suppliers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLIERS":var n=0;return Array.isArray(t.payload)&&(n=t.payload.length),Object(h.a)(Object(h.a)({},e),{},{suppliers:t.payload,count:n});default:return e}},supplies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUPPLY_READY":return Object(h.a)(Object(h.a)({},e),{},{ready:t.value});case"SET_SUPPLY_SPAWNED":return Object(h.a)(Object(h.a)({},e),{},{spawned:t.value});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=Object(s.d)(le,{},Object(s.a)(l.a));u.a.render(i.a.createElement(c.a,{store:pe},i.a.createElement(i.a.StrictMode,null,i.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.9ed66c22.chunk.js.map