(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],p=0,b=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},c=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"008d":function(e,t,r){"use strict";r("c2b7")},"05c8":function(e,t,r){},"05e9":function(e,t,r){},"0f4e":function(e,t,r){},1:function(e,t){},1297:function(e,t,r){"use strict";r("05e9")},3141:function(e,t,r){"use strict";r("5357")},5357:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23");function n(e,t){var r=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])(r)}r("3141");const c={};c.render=n;var o=c,s=r("6c02"),i=Object(a["F"])("data-v-12707b23");Object(a["s"])("data-v-12707b23");var l=Object(a["f"])(" Scotland yard home "),u=Object(a["f"])("Go to game");Object(a["q"])();var p=i((function(e,t,r,n,c,o){var s=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",null,[l,Object(a["g"])(s,{to:{name:"Game",params:{gameId:"855855"}}},{default:i((function(){return[u]})),_:1})])})),b={name:"Home"};b.render=p,b.__scopeId="data-v-12707b23";var d=b,m=Object(a["F"])("data-v-57aad056");Object(a["s"])("data-v-57aad056");var _={class:"game__main-panel"};Object(a["q"])();var O=m((function(e,t,r,n,c,o){var s=Object(a["w"])("PregamePhase"),i=Object(a["w"])("GamePhase"),l=Object(a["w"])("PostGamePhase");return Object(a["p"])(),Object(a["d"])("div",_,[0===n.status?(Object(a["p"])(),Object(a["d"])(s,{key:0,players:n.players,"current-player":n.currentPlayer,onJoingame:n.joinGame,onQuitgame:n.quitGame,onKickplayer:n.kickPlayer,onChangecolor:n.changeColor,onChangemisterx:n.changeMisterX,onStartgame:n.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===n.status?(Object(a["p"])(),Object(a["d"])(i,{key:1,players:n.players,"current-player":n.currentPlayer,game:n.game},null,8,["players","current-player","game"])):2===n.status?(Object(a["p"])(),Object(a["d"])(l,{key:2})):Object(a["e"])("",!0)])})),g=(r("4160"),r("159b"),r("d3b7"),r("25f0"),Object(a["F"])("data-v-6f658c64"));Object(a["s"])("data-v-6f658c64");var y={class:"pregame-phase__main-panel"},j=Object(a["g"])("header",{class:"pregame-phase__header"},"Scotland Yard",-1),f={class:"pregame-phase__players"},v=Object(a["g"])("div",{class:"pregame-phase__players-table"},null,-1),h={class:"pregame-phase__buttons"},P={class:"pregame-phase__information-panel"},C=Object(a["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),w=Object(a["g"])("br",null,null,-1),k={id:"pregame-phase__url",class:"pregame-phase__copy"},T=Object(a["f"])("Copy"),S=Object(a["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),M=Object(a["g"])("br",null,null,-1),E={id:"pregame-phase__tag",class:"pregame-phase__copy"},A=Object(a["f"])("Copy"),I={class:"pregame-phase__admin-and-mister-x"},x=Object(a["f"])("The admin of this lobby is: ");Object(a["q"])();var q=g((function(e,t,r,n,c,o){var s=Object(a["w"])("PlayerLabel"),i=Object(a["w"])("ChangeColorPopup"),l=Object(a["w"])("ChangeMisterXPopup"),u=Object(a["x"])("clipboard");return Object(a["p"])(),Object(a["d"])("div",y,[j,Object(a["g"])("div",f,[v,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.players,(function(n){return Object(a["p"])(),Object(a["d"])(s,{key:n.local_id,player:n,"current-player":r.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(a["g"])("div",h,[r.currentPlayer&&!r.currentPlayer.is_mister_x?(Object(a["p"])(),Object(a["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(a["e"])("",!0),r.currentPlayer?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),r.currentPlayer&&r.currentPlayer.is_admin?(Object(a["p"])(),Object(a["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(a["e"])("",!0),!r.currentPlayer||!r.currentPlayer.is_admin||1===r.players.length&&r.currentPlayer.is_mister_x?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),r.currentPlayer&&1!==r.players.length?(Object(a["p"])(),Object(a["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(a["e"])("",!0)]),Object(a["g"])("div",P,[Object(a["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[C,w,Object(a["g"])("p",k,Object(a["z"])(o.url.toString()),1),Object(a["D"])(Object(a["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[T,Object(a["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(a["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[S,M,Object(a["g"])("p",E,Object(a["z"])(o.id),1),Object(a["D"])(Object(a["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[A,Object(a["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(a["g"])("div",I,[Object(a["g"])("p",null,[x,Object(a["g"])("strong",null,Object(a["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(a["p"])(),Object(a["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(a["g"])(i,{players:r.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(a["e"])("",!0),c.showChangeMisterXPopup?(Object(a["p"])(),Object(a["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(a["g"])(l,{players:r.players,"current-player":r.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(a["e"])("",!0)])})),G=Object(a["F"])("data-v-eef82e6e");Object(a["s"])("data-v-eef82e6e");var X={class:"player-label__info-labels"},N={class:"player-label__username-label"},L={key:0,class:"player-label__is-you-label"};Object(a["q"])();var R=G((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":r.player.is_admin}]},[Object(a["g"])("img",{src:r.player.is_mister_x?"/assets/pawn_mister_x.png":"/assets/pawn_"+r.player.color+".png",class:{"kicked-player":c.fadeOut,"hover-animation":c.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return o.kickPlayer&&o.kickPlayer.apply(o,arguments)})},null,10,["src"]),Object(a["g"])("div",X,[Object(a["g"])("strong",N,Object(a["z"])(r.player.username),1),o.isYou?(Object(a["p"])(),Object(a["d"])("strong",L,"You")):Object(a["e"])("",!0)])],2)})),Y={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};r("852c");Y.render=R,Y.__scopeId="data-v-eef82e6e";var U=Y,B=Object(a["F"])("data-v-16e594e6");Object(a["s"])("data-v-16e594e6");var F={class:"change-popup__main-panel"},z=Object(a["g"])("div",{class:"change-popup__table-panel"},null,-1),K={class:"change-popup__available-pawns"};Object(a["q"])();var D=B((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",F,[z,Object(a["g"])("div",K,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(o.colorsAvailable,(function(t){return Object(a["p"])(),Object(a["d"])("img",{src:"/assets/pawn_"+t+".png",key:t,onClick:function(r){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),$=(r("caad"),1.1),J=100,H=5,V=5,Q={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},W="ws://api.unseen.papero.tk",Z={name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var r=[],a=0;a<V;a++)e.includes(a)||r.push(a);return r}}};r("9c04");Z.render=D,Z.__scopeId="data-v-16e594e6";var ee=Z,te=Object(a["F"])("data-v-be35ed7e");Object(a["s"])("data-v-be35ed7e");var re={class:"change-popup__main-panel"},ae=Object(a["g"])("div",{class:"change-popup__table-panel"},null,-1),ne={class:"change-popup__available-pawns"},ce={class:"player-label__info-labels"},oe={class:"player-label__username-label"},se={key:0,class:"player-label__is-you-label"};Object(a["q"])();var ie=te((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",re,[ae,Object(a["g"])("div",ne,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.players,(function(t){return Object(a["D"])((Object(a["p"])(),Object(a["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(a["g"])("img",{src:t.is_mister_x?"/assets/pawn_mister_x.png":"/assets/pawn_"+t.color+".png",onClick:function(r){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(a["g"])("div",ce,[Object(a["g"])("strong",oe,Object(a["z"])(t.username),1),t.local_id===r.currentPlayer.local_id?(Object(a["p"])(),Object(a["d"])("strong",se,"You")):Object(a["e"])("",!0)])],2)),[[a["B"],!t.is_mister_x]])})),128))])])})),le={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};r("f6bf");le.render=ie,le.__scopeId="data-v-be35ed7e";var ue=le,pe={name:"PregamePhase",components:{ChangeMisterXPopup:ue,ChangeColorPopup:ee,PlayerLabel:U},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(s["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};r("8ca4");pe.render=q,pe.__scopeId="data-v-6f658c64";var be=pe,de=Object(a["F"])("data-v-2527c12a");Object(a["s"])("data-v-2527c12a");var me={class:"game-phase__main-panel"};Object(a["q"])();var _e=de((function(e,t,r,n,c,o){var s=Object(a["w"])("MapManager"),i=Object(a["w"])("GameSideBarNormal"),l=Object(a["w"])("GameSideBarMisterX");return Object(a["p"])(),Object(a["d"])("div",me,[Object(a["g"])(s,{class:"game-phase__map-manager"}),r.currentPlayer.is_mister_x?(Object(a["p"])(),Object(a["d"])(l,{key:1,class:"game-phase__game-stats",players:r.players,"current-player":r.currentPlayer,game:r.game},null,8,["players","current-player","game"])):(Object(a["p"])(),Object(a["d"])(i,{key:0,class:"game-phase__game-stats",players:r.players,"current-player":r.currentPlayer,game:r.game},null,8,["players","current-player","game"]))])})),Oe=Object(a["F"])("data-v-42da2f0e"),ge=Oe((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(a["E"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(a["E"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(a["E"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(a["E"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(a["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),ye={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-H,document.querySelector(t));break;case"arrowup":this.verticalScroll(-H,document.querySelector(t));break;case"a":this.horizontalScroll(-H,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-H,document.querySelector(t));break;case"s":this.verticalScroll(H,document.querySelector(t));break;case"arrowdown":this.verticalScroll(H,document.querySelector(t));break;case"d":this.horizontalScroll(H,document.querySelector(t));break;case"arrowright":this.horizontalScroll(H,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow($,e.deltaY/J));var r=document.querySelector(".map-manager__main-panel"),a=e.offsetX*(t-1)+r.scrollLeft*t,n=e.offsetY*(t-1)+r.scrollTop*t;r.scrollLeft=Math.round(a),r.scrollTop=Math.round(n)}},computed:{imgPercentage:function(){return 100*Math.pow($,this.deltaY/J)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};r("e59f");ye.render=ge,ye.__scopeId="data-v-42da2f0e";var je=ye,fe=Object(a["F"])("data-v-11f1ca98");Object(a["s"])("data-v-11f1ca98");var ve={class:"game-sidebar-normal__main-panel"},he={class:"game-sidebar-normal__players"},Pe={class:"game-sidebar-normal__transport-cards"},Ce={class:"game-sidebar-normal__transport-wrapper"},we={class:"game-sidebar-normal__transport-wrapper"},ke={class:"game-sidebar-normal__transport-wrapper"},Te={class:"game-sidebar-normal__misterx-table"};Object(a["q"])();var Se=fe((function(e,t,r,n,c,o){var s=Object(a["w"])("PlayerLabel"),i=Object(a["w"])("TransportCard"),l=Object(a["w"])("MisterXTable");return Object(a["p"])(),Object(a["d"])("div",ve,[Object(a["g"])("div",he,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.players,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===r.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(a["g"])("div",Pe,[Object(a["g"])("div",Ce,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(o.remainingTaxis,(function(e){return Object(a["p"])(),Object(a["d"])(i,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(a["g"])("div",we,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(o.remainingBuses,(function(e){return Object(a["p"])(),Object(a["d"])(i,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(a["g"])("div",ke,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(o.remainingUndergrounds,(function(e){return Object(a["p"])(),Object(a["d"])(i,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(a["g"])("div",Te,[Object(a["g"])(l)])])})),Me=Object(a["F"])("data-v-622d1fb6");Object(a["s"])("data-v-622d1fb6");var Ee={class:"player-label__main-panel"},Ae={key:0,src:"/assets/misterx_icon.png"};Object(a["q"])();var Ie=Me((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",Ee,[Object(a["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":r.isPlaying}]},[Object(a["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(a["g"])("strong",null,Object(a["z"])(r.player.username),1),r.player.is_mister_x?(Object(a["p"])(),Object(a["d"])("img",Ae)):Object(a["e"])("",!0)],2)])})),xe={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return V[this.player.color]}}};r("b5fc");xe.render=Ie,xe.__scopeId="data-v-622d1fb6";var qe=xe,Ge=Object(a["F"])("data-v-343523c3"),Xe=Ge((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:r.color}},[Object(a["g"])("img",{class:"transport-card__image",src:r.src},null,8,["src"])],4)})),Ne={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};r("9be6");Ne.render=Xe,Ne.__scopeId="data-v-343523c3";var Le=Ne,Re=(r("2532"),Object(a["F"])("data-v-7d7830d9"));Object(a["s"])("data-v-7d7830d9");var Ye=Object(a["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(a["q"])();var Ue=Re((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(a["p"])(),Object(a["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(a["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(a["z"])(e),3),Ye])})),128))],4)})),Be={name:"MisterXTable",data:function(){return{gameConfig:Q}}};r("9fc6");Be.render=Ue,Be.__scopeId="data-v-7d7830d9";var Fe=Be,ze={name:"GameSideBarNormal",components:{MisterXTable:Fe,TransportCard:Le,PlayerLabel:qe},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return Q.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return Q.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return Q.underground-this.currentPlayer.used_underground}}};r("c86b");ze.render=Se,ze.__scopeId="data-v-11f1ca98";var Ke=ze,De=Object(a["F"])("data-v-6aebdd9a");Object(a["s"])("data-v-6aebdd9a");var $e={class:"game-sidebar-normal__main-panel"},Je={class:"game-sidebar-normal__players"},He={class:"game-sidebar-normal__transport-cards"},Ve={class:"game-sidebar-normal__transport-wrapper"},Qe={class:"game-sidebar-normal__transport-wrapper"},We={class:"game-sidebar-normal__misterx-table"};Object(a["q"])();var Ze=De((function(e,t,r,n,c,o){var s=Object(a["w"])("PlayerLabel"),i=Object(a["w"])("TransportCard"),l=Object(a["w"])("MisterXTable");return Object(a["p"])(),Object(a["d"])("div",$e,[Object(a["g"])("div",Je,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.game.players,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===r.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(a["g"])("div",He,[Object(a["g"])("div",Ve,[(Object(a["p"])(),Object(a["d"])(a["a"],null,Object(a["v"])(2,(function(e){return Object(a["g"])(i,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(a["g"])("div",Qe,[(Object(a["p"])(),Object(a["d"])(a["a"],null,Object(a["v"])(5,(function(e){return Object(a["g"])(i,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(a["g"])("div",We,[Object(a["g"])(l)])])})),et={name:"GameSideBarNormal",components:{MisterXTable:Fe,TransportCard:Le,PlayerLabel:qe},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};r("97a4");et.render=Ze,et.__scopeId="data-v-6aebdd9a";var tt=et,rt={name:"GamePhase",components:{GameSideBarNormal:Ke,GameSideBarMisterX:tt,MapManager:je},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};r("008d");rt.render=_e,rt.__scopeId="data-v-2527c12a";var at=rt,nt=Object(a["F"])("data-v-20d2bdd2"),ct=nt((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",null," postgame ")})),ot={name:"PostGamePhase"};ot.render=ct,ot.__scopeId="data-v-20d2bdd2";var st=ot,it={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},lt=r("8055"),ut=r.n(lt),pt=r("a1e9"),bt={name:"Game",components:{PostGamePhase:st,GamePhase:at,PregamePhase:be},setup:function(){var e=ut()(W),t=Object(s["c"])().params.gameId,r=Object(pt["j"])(void 0),a=Object(pt["j"])(void 0),n=Object(pt["j"])([]),c=Object(pt["j"])({}),o=prompt("id:"),i=prompt("username:");function l(e){console.log(e),r.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(a.value=t)})):a.value=null,n.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function u(){e.emit(it.JOIN_GAME)}function p(){e.emit(it.QUIT_GAME)}function b(t){e.emit(it.KICK_PLAYER,t)}function d(t){e.emit(it.CHANGE_COLOR,t)}function m(){e.emit(it.START_GAME)}function _(t){e.emit(it.CHANGE_MISTER_X,t)}return e.emit(it.CONNECT_TO_GAME,{user_id:o,game_id:t,username:i}),e.on(it.CONNECT_TO_GAME,(function(e){l(e)})),e.on(it.LOBBY_MODIFIED,(function(e){l(e)})),e.on(it.START_GAME,(function(e){l(e)})),{status:r,currentPlayer:a,players:n,game:c,joinGame:u,quitGame:p,kickPlayer:b,changeColor:d,changeMisterX:_,startGame:m}}};r("1297");bt.render=O,bt.__scopeId="data-v-57aad056";var dt=bt,mt=[{path:"/",name:"Home",component:d},{path:"/:gameId",name:"Game",component:dt}],_t=Object(s["a"])({history:Object(s["b"])(),routes:mt}),Ot=_t,gt=(r("a9e3"),r("5502")),yt=Object(gt["a"])({state:{status:{type:Number},currentPlayer:{type:Object},players:{type:Array},playingPlayer:{type:String},isRevelation:{type:Boolean},lastMisterXKnownPosition:{type:Number},misterXMoves:{type:Array}},mutations:{SET_STATUS:function(e,t){e.status=t},SET_CURRENT_PLAYER:function(e,t){e.currentPlayer=t},SET_PLAYERS:function(e,t){e.players=t},SET_PLAYING_PLAYER:function(e,t){e.playingPlayer=t},SET_IS_REVELATION:function(e,t){e.isRevelation=t},SET_LAST_MISTER_X_KNOWN_POSITION:function(e,t){e.lastMisterXKnownPosition=t},SET_MISTER_X_MOVES:function(e,t){e.misterXMoves=t}},actions:{setStatus:function(e,t){var r=e.commit;r("SET_STATUS",t)},setCurrentPlayer:function(e,t){var r=e.commit;r("SET_CURRENT_PLAYER",t)},setPlayers:function(e,t){var r=e.commit;r("SET_PLAYERS",t)},setPlayingPlayer:function(e,t){var r=e.commit;r("SET_PLAYING_PLAYER",t)},setIsRevelation:function(e,t){var r=e.commit;r("SET_IS_REVELATION",t)},setLastMisterXKnownPosition:function(e,t){var r=e.commit;r("SET_LAST_MISTER_X_KNOWN_POSITION",t)},setMisterXMoves:function(e,t){var r=e.commit;r("SET_MISTER_X_MOVES",t)}},modules:{}}),jt=r("c479"),ft=r.n(jt),vt=Object(a["c"])(o);vt.use(Ot),vt.use(yt),vt.use(ft.a),vt.mount("#app")},"576e":function(e,t,r){},"746c":function(e,t,r){},"852c":function(e,t,r){"use strict";r("9c42")},"8ca4":function(e,t,r){"use strict";r("746c")},"97a4":function(e,t,r){"use strict";r("9815")},9815:function(e,t,r){},"9be6":function(e,t,r){"use strict";r("b99c")},"9c04":function(e,t,r){"use strict";r("576e")},"9c42":function(e,t,r){},"9fc6":function(e,t,r){"use strict";r("e25a")},b5fc:function(e,t,r){"use strict";r("f8bf")},b99c:function(e,t,r){},c2b7:function(e,t,r){},c86b:function(e,t,r){"use strict";r("05c8")},e25a:function(e,t,r){},e59f:function(e,t,r){"use strict";r("eb72")},eb72:function(e,t,r){},f6bf:function(e,t,r){"use strict";r("0f4e")},f8bf:function(e,t,r){}});
//# sourceMappingURL=app.f393aef3.js.map