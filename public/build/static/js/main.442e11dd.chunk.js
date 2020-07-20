(this["webpackJsonpvendor-app"]=this["webpackJsonpvendor-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(66)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return x}));var r=n(0),o=n.n(r),i=n(10),c=n.n(i),u=n(5),s=n(9),l=n(25),m=n(3),d=n(4),p=n(1),v=n(7),f=n(6),h=(n(39),n(40),n(41),n(42),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Title"},"VENDOR")}}]),n}(o.a.Component)),y=(n(43),function(){var e="",t=1e3;return{getName:function(){return e},setName:function(t){e=t},getStartingGold:function(){return 1e3},getGold:function(){return t},setGold:function(e){t=e}}}()),b=(n(44),function(){var e={potion:"potion",weapon:"weapon",armor:"armor"},t="healing",n=function(e,t,n){this.type=e,this.name=t,this.value=n},a=function(e,t){this.type=e,this.level=t};return{createItem:function(t,r,o,i){if(t[t]){var c=new n(t,r,o);switch(c.type){case e.potion:var u=i.type;if(!u)return void console.log("attempted to create invalid potion type");var s=i.level;if(!s)return void console.log("attempted to create a potion with an invalid level");c[c.type]=new a(u,s)}return c}console.log("invalid item type passed to items.createItem()")},createTestPotion:function(r){var o=new n(e.potion,"Healing Potion",60);return o[e.potion]=new a(t,r),o},getItemTypes:function(){return e}}}()),E=function(){var e=[],t=0,n=function(n){n.id=t,t++,e.push(n)};return{addPotion:function(e,t,a){var r=b.getItemTypes(),o=b.createItem(r.potion,e,t,a);n(o)},addTestPotion:function(){var e=b.createTestPotion();n(e)},getStoreInventory:function(){return e}}}(),O=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getInventoryItems=a.getInventoryItems.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(JSON.stringify(E.getStoreInventory()));this.props.setInventory(e)}},{key:"getInventoryItems",value:function(){return this.props.inventory&&this.props.inventory.length>0?o.a.createElement("div",null,this.props.inventory.map((function(e){return o.a.createElement("div",{className:"InventoryItem",key:e.id},o.a.createElement("span",{className:"InventoryItemName"},e.name),o.a.createElement("div",{className:"ItemValueGroup"},o.a.createElement("span",{className:"CoinSymbol"},"\u2689 "),o.a.createElement("span",{className:"InventoryItemValue"},e.value)))}))):o.a.createElement("div",null,"No inventory")}},{key:"render",value:function(){return o.a.createElement("div",{className:"StoreInventory"},this.getInventoryItems())}}]),n}(o.a.Component),g=Object(u.b)((function(e){return{inventory:e.storeState.inventory}}),(function(e){return{setInventory:function(t){return e({type:"SET_STORE_INVENTORY",inventory:t})}}}))(O),j=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=a.componentDidMount.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=y.getGold();this.props.setStoreGold(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Store"},o.a.createElement("div",{className:"StoreMenuBar"},o.a.createElement("h2",{className:"StoreName"},this.props.storeName),o.a.createElement("span",{className:"Inspect",role:"img","aria-label":"inspect"},"\ud83d\udd0d "),o.a.createElement("div",{className:"GoldDisplay"},o.a.createElement("span",{className:"CoinSymbol",role:"img","aria-label":"coin"},"\u2689 "),this.props.gold)),o.a.createElement(g,null))}}]),n}(o.a.Component),S=Object(u.b)((function(e){return{storeName:e.storeState.name,gold:e.storeState.gold}}),(function(e){return{setStoreGold:function(t){return e({type:"SET_STORE_GOLD",amount:t})}}}))(j),N=(n(45),function(){var e=1;return{getDay:function(){return e},setDay:function(t){"number"===typeof t?e=t:console.log("trying to set day to a non number value!")},resetDay:function(){e=1}}}()),k=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleNextDay=a.handleNextDay.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleNextDay",value:function(){var e=this.props.day;N.setDay(e+1),this.props.setDay(N.getDay())}},{key:"render",value:function(){return o.a.createElement("div",{className:"Days"},"Day: ",this.props.day,o.a.createElement("br",null),o.a.createElement("button",{className:"nextDay",onClick:this.handleNextDay},"Finish Day"))}}]),n}(o.a.Component),T=Object(u.b)((function(e){return{day:e.days.day}}),(function(e){return{setDay:function(t){return e({type:"SET_DAY",day:t})}}}))(k),I=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"GameScreen"},o.a.createElement(h,null),o.a.createElement(S,null),o.a.createElement(T,null))}}]),n}(o.a.Component),D=Object(u.b)((function(e){return{storeName:e.storeState.name}}))(I),w=(n(46),{init:function(e){N.setDay(1),e.name||console.log("Game must be started with a payload object that contains a store name!"),y.setName(e.name);var t=y.getStartingGold();y.setGold(t),function(){for(var e=0;e<5;e++)E.addTestPotion()}()}}),_=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleStart=a.handleStart.bind(Object(p.a)(a)),a.handleNameInput=a.handleNameInput.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleStart",value:function(){var e=this.props.name;e&&""!==e&&(w.init({name:e}),this.props.setStarted(!0))}},{key:"handleNameInput",value:function(e){13===e.charCode&&this.handleStart()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"StartScreen"},o.a.createElement(h,null),o.a.createElement("div",{className:"NameInput"},o.a.createElement("div",{className:"nameInputGroup"},o.a.createElement("label",{htmlFor:"name",className:"NameLabel"},"Name: "),o.a.createElement("input",{id:"name",value:this.props.name,type:"text",onChange:function(t){return e.props.setStoreName(t.target.value)},onKeyPress:this.handleNameInput})),o.a.createElement("button",{onClick:this.handleStart,className:"StartButton"},"Start!")))}}]),n}(o.a.Component),M=Object(u.b)((function(e){return{started:e.gameState.started,name:e.storeState.name}}),(function(e){return{setStoreName:function(t){return e({type:"SET_STORE_NAME",name:t})},setStarted:function(t){return e({type:"SET_GAME_STATE",value:t})}}}))(_),C=(n(47),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).renderLogin=a.renderLogin.bind(Object(p.a)(a)),a.renderEditorLink=a.renderEditorLink.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"renderLogin",value:function(){switch(this.props.auth){case null:return;case!1:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/auth/facebook"},"Login with Facebook"));default:return o.a.createElement("li",{key:"login"},o.a.createElement("a",{href:"/api/logout"},"Logout"))}}},{key:"renderEditorLink",value:function(){switch(this.props.auth){case null:case!1:return!1;default:return"owner"===this.props.auth.type&&o.a.createElement("li",{key:"editorLink"},o.a.createElement("a",{className:"EditorLink",href:"/editor"},"editor"))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"MenuBar"},o.a.createElement("span",{className:"MenuTitle"},o.a.createElement("a",{href:"/"},"VENDOR")),o.a.createElement("ul",{className:"LoginContainer"},this.renderEditorLink(),this.renderLogin()))}}]),n}(o.a.Component)),G=Object(u.b)((function(e){return{auth:e.auth}}))(C),L=n(14),R=n.n(L),A=n(26),U=n(27),V=n.n(U),x=function(){return function(){var e=Object(A.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getMainView=a.getMainView.bind(Object(p.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"getMainView",value:function(){return this.props.started?o.a.createElement(D,null):o.a.createElement(M,null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null),this.getMainView())}}]),n}(o.a.Component),B=Object(u.b)((function(e){return{started:e.gameState.started}}),a)(P),F=n(2),J={day:N.getDay()},Y={started:!1,storeUpdate:!1},H={name:"",gold:0,refreshing:!1,refreshed:!1,inventory:[]},W=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY":return Object(F.a)(Object(F.a)({},e),{},{day:t.day});default:return e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STATE":return Object(F.a)(Object(F.a)({},e),{},{started:t.value});case"SET_UPDATES":var n=t.payload,a=n.storeUpdate;return Object(F.a)(Object(F.a)({},e),{},{storeUpdate:a});case"SET_STORE_UPDATE":return Object(F.a)(Object(F.a)({},e),{},{storeUpdate:t.value});default:return e}},storeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STORE_NAME":return Object(F.a)(Object(F.a)({},e),{},{name:t.name});case"SET_STORE_GOLD":return Object(F.a)(Object(F.a)({},e),{},{gold:t.amount});case"SET_STORE_INVENTORY":var n=t.inventory;return Object(F.a)(Object(F.a)({},e),{},{inventory:n});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(s.d)(W,{},Object(s.a)(l.a));c.a.render(o.a.createElement(u.a,{store:K},o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.442e11dd.chunk.js.map