(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unseen/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"008d":function(e,t,a){"use strict";a("c2b7")},"044a":function(e,t,a){e.exports=a.p+"img/pawn_4.a281cce8.png"},"05ac":function(e,t,a){e.exports=a.p+"img/pawn_3.a337a850.png"},"05c8":function(e,t,a){},"0651":function(e,t,a){"use strict";a("e7b2")},"0ab2":function(e,t,a){e.exports=a.p+"img/logo.591f5fc5.gif"},"0ea0":function(e,t,a){},1:function(e,t){},"1b21":function(e,t,a){"use strict";a("29f7")},"29f7":function(e,t,a){},"2f61":function(e,t,a){},"2f79":function(e,t,a){e.exports=a.p+"img/pawn_0.ceb5bf40.png"},"37f5":function(e,t,a){"use strict";a("4411")},4353:function(e,t,a){e.exports=a.p+"img/pawn_mister_x.ff74ef9a.png"},"436e":function(e,t,a){e.exports=a.p+"img/pawn_2.cd6bc56b.png"},4411:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t){var a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(a)}a("72d8");const c={};c.render=n;var o=c,s=(a("b0c0"),a("6c02")),i={class:"main-panel"};function l(e,t,a,n,c,o){var s=Object(r["w"])("Header"),l=Object(r["w"])("GameHistory"),u=Object(r["w"])("GameButtons"),p=Object(r["w"])("UserHamburgerMenu");return Object(r["p"])(),Object(r["d"])("div",i,[Object(r["g"])(s),Object(r["g"])(l,{games:c.games},null,8,["games"]),Object(r["g"])(u),Object(r["g"])(p)])}var u=Object(r["G"])("data-v-68c2bd50");Object(r["s"])("data-v-68c2bd50");var p={class:"header__main-panel"},d=Object(r["g"])("h1",null,"Unseen",-1);Object(r["q"])();var b=u((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",p,[d])})),m={name:"Header"};a("37f5");m.render=b,m.__scopeId="data-v-68c2bd50";var g=m,O=Object(r["G"])("data-v-7b9431da");Object(r["s"])("data-v-7b9431da");var j={class:"my-games__main-panel"},f={key:0};Object(r["q"])();var _=O((function(e,t,a,n,c,o){var s=Object(r["w"])("Game");return Object(r["p"])(),Object(r["d"])("div",j,[a.games&&a.games.length>0?(Object(r["p"])(),Object(r["d"])("span",f,"Active games")):Object(r["e"])("",!0),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.games,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.game_id,game:e},null,8,["game"])})),128))])})),v=Object(r["G"])("data-v-07b604bc");Object(r["s"])("data-v-07b604bc");var y={class:"game__main-panel"},h={class:"game__date-container"};Object(r["q"])();var w=v((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",y,[Object(r["g"])("div",{class:"name-container",id:a.game.game_id+"container"},[Object(r["g"])("h1",{id:a.game.game_id+"name",class:{overflows:c.overflows}},Object(r["z"])(a.game.game_id),11,["id"])],8,["id"]),Object(r["g"])("div",h,Object(r["z"])(a.game.date),1)])})),C={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},mounted:function(){var e=document.getElementById(this.game.game_id+"name"),t=document.getElementById(this.game.game_id+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("cad6");C.render=w,C.__scopeId="data-v-07b604bc";var k=C,P={name:"GameHistory",components:{Game:k},props:{games:{required:!0}}};a("c7ff");P.render=_,P.__scopeId="data-v-7b9431da";var G=P,T=Object(r["G"])("data-v-0e005901");Object(r["s"])("data-v-0e005901");var M={class:"manage-new-game__main-class"},x={class:"game-info__wrapper"},E=Object(r["g"])("div",{class:"back-arrow"},null,-1),S=Object(r["g"])("button",null,"Join",-1),q={class:"game-info__wrapper"},I=Object(r["g"])("div",{class:"back-arrow"},null,-1),U=Object(r["g"])("button",null,"Create",-1);Object(r["q"])();var A=T((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",M,[null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(r["e"])("",!0),null===c.choice?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(r["e"])("",!0),Object(r["E"])(Object(r["g"])("div",x,[Object(r["g"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(){return o.joinGame&&o.joinGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[E]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.gameToJoin=e})},null,512),[[r["B"],c.gameToJoin]]),S],32)],512),[[r["C"],"join"===c.choice]]),Object(r["E"])(Object(r["g"])("div",q,[Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["F"])((function(){return o.createGame&&o.createGame.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",{class:"back-arrow-wrapper",onClick:t[6]||(t[6]=function(e){return c.choice=null})},[I]),Object(r["E"])(Object(r["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.gameToCreate=e})},null,512),[[r["B"],c.gameToCreate]]),U],32)],512),[[r["C"],"create"===c.choice]]),c.showPopup?(Object(r["p"])(),Object(r["d"])("div",{key:2,class:"game-buttons__popup-background",onClick:t[12]||(t[12]=function(e){return c.showPopup=!1})},[Object(r["g"])("div",{class:"game-buttons__popup",onClick:t[11]||(t[11]=Object(r["F"])((function(){}),["stop"]))},[Object(r["g"])("h1",null,Object(r["z"])(c.popupMessage),1),Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:t[9]||(t[9]=function(e){return o.redirectToGame(c.popupGame)})},Object(r["z"])(c.popupConfirmButton),1),Object(r["g"])("button",{onClick:t[10]||(t[10]=function(e){return c.showPopup=!1})},"Cancel")])])])):Object(r["e"])("",!0)])})),X=1.1,B=100,L=5,N=5,z={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},Y="https://papero.tk",H="https://papero.tk/user/get_info",J="https://papero.tk/server/unseen/games/all",R="https://papero.tk/server/unseen/games/status_by_id",D="https://papero.tk/auth/local",F=a("bc3a"),$=a.n(F),K={name:"GameButtons",data:function(){return{router:Object(s["d"])(),choice:null,gameToJoin:null,gameToCreate:null,showPopup:!1,popupMessage:"",popupConfirmButton:"",popupGame:null}},methods:{joinGame:function(){var e=this;this.gameToJoin&&$.a.get(R,{params:{game_id:this.gameToJoin}}).then((function(t){t.data?e.router.push({name:"Game",params:{gameId:e.gameToJoin}}):(e.popupMessage="This game does not exist",e.popupConfirmButton="Create it now",e.popupGame=e.gameToJoin,e.showPopup=!0)}))},createGame:function(){var e=this;this.gameToCreate&&$.a.get(R,{params:{game_id:this.gameToCreate}}).then((function(t){t.data?(e.popupMessage="This game already exists",e.popupConfirmButton="Join it now",e.popupGame=e.gameToCreate,e.showPopup=!0):e.router.push({name:"Game",params:{gameId:e.gameToCreate}})}))},redirectToGame:function(e){this.router.push({name:"Game",params:{gameId:e}})}}};a("994e");K.render=A,K.__scopeId="data-v-0e005901";var Q=K,V=a("0ab2"),W=a.n(V),Z=a("a405"),ee=a.n(Z),te=Object(r["G"])("data-v-5bc14df2");Object(r["s"])("data-v-5bc14df2");var ae={class:"user-hamburger-menu__menu"},re={key:0,class:"logged-menu"},ne=Object(r["f"])("Username: "),ce=Object(r["g"])("button",null,"Logout",-1),oe={key:1,class:"not-logged-menu"},se=Object(r["g"])("p",null,"You are currently not logged in",-1),ie=Object(r["g"])("img",{src:ee.a},null,-1);Object(r["q"])();var le=te((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!c.show}],onClick:t[5]||(t[5]=Object(r["F"])((function(){}),["stop"]))},[Object(r["g"])("div",ae,[Object(r["g"])("img",{class:"home-button",src:W.a,onClick:t[1]||(t[1]=function(){return o.redirectToHome&&o.redirectToHome.apply(o,arguments)})}),o.username?(Object(r["p"])(),Object(r["d"])("div",re,[Object(r["g"])("div",null,[Object(r["g"])("p",null,[ne,Object(r["g"])("strong",null,Object(r["z"])(o.username),1)]),ce]),o.logged?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"procede-with-google",onClick:t[2]||(t[2]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Activate sync with google"))])):(Object(r["p"])(),Object(r["d"])("div",oe,[se,Object(r["g"])("button",{class:"procede-with-google",onClick:t[3]||(t[3]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Sign in now with google")]))]),Object(r["g"])("div",{class:["user-hamburger-menu__icon",{rotated:c.show}],onClick:t[4]||(t[4]=function(e){return c.show=!c.show})},[ie],2)],2)})),ue=a("5502"),pe={name:"UserHamburgerMenu",props:{showChat:Boolean,game:Object},data:function(){return{store:Object(ue["b"])(),show:!1}},computed:{logged:function(){return this.store.state.logged},username:function(){return this.store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.show=!1}))},methods:{redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e}}};a("0651");pe.render=le,pe.__scopeId="data-v-5bc14df2";var de=pe,be={name:"Home",components:{UserHamburgerMenu:de,GameButtons:Q,GameHistory:G,Header:g},data:function(){return{games:null,store:Object(ue["b"])()}},mounted:function(){var e=this;$.a.get(H).then((function(t){t.data?(e.store.dispatch("setLogged",t.data.google_signed_in),e.store.dispatch("setUsername",t.data.username)):e.store.dispatch("setLogged",!1)})),$.a.get(J).then((function(t){e.games=t.data}))}};a("a265");be.render=l;var me=be,ge=Object(r["G"])("data-v-238cf86e");Object(r["s"])("data-v-238cf86e");var Oe={class:"game__main-panel"};Object(r["q"])();var je=ge((function(e,t,a,n,c,o){var s=Object(r["w"])("UserHamburgerMenu"),i=Object(r["w"])("PregamePhase"),l=Object(r["w"])("GamePhase"),u=Object(r["w"])("PostGamePhase");return Object(r["p"])(),Object(r["d"])("div",Oe,[Object(r["g"])(s,{"show-chat":!0,game:n.game},null,8,["game"]),0===n.status?(Object(r["p"])(),Object(r["d"])(i,{key:0,players:n.players,"current-player":n.currentPlayer,onJoingame:n.joinGame,onQuitgame:n.quitGame,onKickplayer:n.kickPlayer,onChangecolor:n.changeColor,onChangemisterx:n.changeMisterX,onStartgame:n.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===n.status?(Object(r["p"])(),Object(r["d"])(l,{key:1,players:n.players,"current-player":n.currentPlayer,game:n.game},null,8,["players","current-player","game"])):2===n.status?(Object(r["p"])(),Object(r["d"])(u,{key:2})):Object(r["e"])("",!0)])})),fe=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(r["G"])("data-v-2dd80bfd"));Object(r["s"])("data-v-2dd80bfd");var _e={class:"pregame-phase__main-panel"},ve=Object(r["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),ye={class:"pregame-phase__players"},he=Object(r["g"])("div",{class:"pregame-phase__players-table"},null,-1),we={class:"pregame-phase__buttons"},Ce={class:"pregame-phase__information-panel"},ke=Object(r["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),Pe=Object(r["g"])("br",null,null,-1),Ge={id:"pregame-phase__url",class:"pregame-phase__copy"},Te=Object(r["f"])("Copy"),Me=Object(r["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),xe=Object(r["g"])("br",null,null,-1),Ee={id:"pregame-phase__tag",class:"pregame-phase__copy"},Se=Object(r["f"])("Copy"),qe={class:"pregame-phase__admin-and-mister-x"},Ie=Object(r["f"])("The admin of this lobby is: ");Object(r["q"])();var Ue=fe((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("ChangeColorPopup"),l=Object(r["w"])("ChangeMisterXPopup"),u=Object(r["x"])("clipboard");return Object(r["p"])(),Object(r["d"])("div",_e,[ve,Object(r["g"])("div",ye,[he,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(n){return Object(r["p"])(),Object(r["d"])(s,{key:n.local_id,player:n,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(r["g"])("div",we,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(r["e"])("",!0),a.currentPlayer?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(r["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(r["p"])(),Object(r["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(r["e"])("",!0)]),Object(r["g"])("div",Ce,[Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[ke,Pe,Object(r["g"])("p",Ge,Object(r["z"])(o.url.toString()),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[Te,Object(r["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(r["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[Me,xe,Object(r["g"])("p",Ee,Object(r["z"])(o.id),1),Object(r["E"])(Object(r["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[Se,Object(r["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(r["g"])("div",qe,[Object(r["g"])("p",null,[Ie,Object(r["g"])("strong",null,Object(r["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(r["g"])(i,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(r["e"])("",!0),c.showChangeMisterXPopup?(Object(r["p"])(),Object(r["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(r["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(r["e"])("",!0)])})),Ae=Object(r["G"])("data-v-04f04e17");Object(r["s"])("data-v-04f04e17");var Xe={class:"player-label__info-labels"},Be={class:"player-label__username-label"},Le={key:0,class:"player-label__is-you-label"};Object(r["q"])();var Ne=Ae((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":n.player.is_admin}]},[Object(r["g"])("img",{src:n.player.is_mister_x?a("4353"):a("5a8c")("./pawn_"+n.player.color+".png"),class:{"kicked-player":o.fadeOut,"hover-animation":o.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return s.kickPlayer&&s.kickPlayer.apply(s,arguments)})},null,10,["src"]),Object(r["g"])("div",Xe,[Object(r["g"])("strong",Be,Object(r["z"])(n.player.username),1),s.isYou?(Object(r["p"])(),Object(r["d"])("strong",Le,"You")):Object(r["e"])("",!0)])],2)})),ze={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("9aa1");ze.render=Ne,ze.__scopeId="data-v-04f04e17";var Ye=ze,He=Object(r["G"])("data-v-4eeb591d");Object(r["s"])("data-v-4eeb591d");var Je={class:"change-popup__main-panel"},Re=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),De={class:"change-popup__available-pawns"};Object(r["q"])();var Fe=He((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",Je,[Re,Object(r["g"])("div",De,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(s.colorsAvailable,(function(t){return Object(r["p"])(),Object(r["d"])("img",{src:a("5a8c")("./pawn_"+t+".png"),key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),$e=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],r=0;r<N;r++)e.includes(r)||a.push(r);return a}}});a("65ed");$e.render=Fe,$e.__scopeId="data-v-4eeb591d";var Ke=$e,Qe=Object(r["G"])("data-v-4af72e0f");Object(r["s"])("data-v-4af72e0f");var Ve={class:"change-popup__main-panel"},We=Object(r["g"])("div",{class:"change-popup__table-panel"},null,-1),Ze={class:"change-popup__available-pawns"},et={class:"player-label__info-labels"},tt={class:"player-label__username-label"},at={key:0,class:"player-label__is-you-label"};Object(r["q"])();var rt=Qe((function(e,t,n,c,o,s){return Object(r["p"])(),Object(r["d"])("div",Ve,[We,Object(r["g"])("div",Ze,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.players,(function(t){return Object(r["E"])((Object(r["p"])(),Object(r["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(r["g"])("img",{src:t.is_mister_x?a("4353"):a("5a8c")("./pawn_"+t.color+".png"),onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(r["g"])("div",et,[Object(r["g"])("strong",tt,Object(r["z"])(t.username),1),t.local_id===n.currentPlayer.local_id?(Object(r["p"])(),Object(r["d"])("strong",at,"You")):Object(r["e"])("",!0)])],2)),[[r["C"],!t.is_mister_x]])})),128))])])})),nt={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("f0f2");nt.render=rt,nt.__scopeId="data-v-4af72e0f";var ct=nt,ot={name:"PregamePhase",components:{ChangeMisterXPopup:ct,ChangeColorPopup:Ke,PlayerLabel:Ye},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(s["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("5a08");ot.render=Ue,ot.__scopeId="data-v-2dd80bfd";var st=ot,it=Object(r["G"])("data-v-2527c12a");Object(r["s"])("data-v-2527c12a");var lt={class:"game-phase__main-panel"};Object(r["q"])();var ut=it((function(e,t,a,n,c,o){var s=Object(r["w"])("MapManager"),i=Object(r["w"])("GameSideBarNormal"),l=Object(r["w"])("GameSideBarMisterX");return Object(r["p"])(),Object(r["d"])("div",lt,[Object(r["g"])(s,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(r["p"])(),Object(r["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(r["p"])(),Object(r["d"])(i,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),pt=Object(r["G"])("data-v-42da2f0e"),dt=pt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(r["F"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(r["F"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(r["F"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(r["F"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),bt={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-L,document.querySelector(t));break;case"arrowup":this.verticalScroll(-L,document.querySelector(t));break;case"a":this.horizontalScroll(-L,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-L,document.querySelector(t));break;case"s":this.verticalScroll(L,document.querySelector(t));break;case"arrowdown":this.verticalScroll(L,document.querySelector(t));break;case"d":this.horizontalScroll(L,document.querySelector(t));break;case"arrowright":this.horizontalScroll(L,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(X,e.deltaY/B));var a=document.querySelector(".map-manager__main-panel"),r=e.offsetX*(t-1)+a.scrollLeft*t,n=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(r),a.scrollTop=Math.round(n)}},computed:{imgPercentage:function(){return 100*Math.pow(X,this.deltaY/B)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");bt.render=dt,bt.__scopeId="data-v-42da2f0e";var mt=bt,gt=Object(r["G"])("data-v-11f1ca98");Object(r["s"])("data-v-11f1ca98");var Ot={class:"game-sidebar-normal__main-panel"},jt={class:"game-sidebar-normal__players"},ft={class:"game-sidebar-normal__transport-cards"},_t={class:"game-sidebar-normal__transport-wrapper"},vt={class:"game-sidebar-normal__transport-wrapper"},yt={class:"game-sidebar-normal__transport-wrapper"},ht={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var wt=gt((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",Ot,[Object(r["g"])("div",jt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",ft,[Object(r["g"])("div",_t,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingTaxis,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(r["g"])("div",vt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingBuses,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(r["g"])("div",yt,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.remainingUndergrounds,(function(e){return Object(r["p"])(),Object(r["d"])(i,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(r["g"])("div",ht,[Object(r["g"])(l)])])})),Ct=Object(r["G"])("data-v-622d1fb6");Object(r["s"])("data-v-622d1fb6");var kt={class:"player-label__main-panel"},Pt={key:0,src:"/assets/misterx_icon.png"};Object(r["q"])();var Gt=Ct((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",kt,[Object(r["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(r["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(r["g"])("strong",null,Object(r["z"])(a.player.username),1),a.player.is_mister_x?(Object(r["p"])(),Object(r["d"])("img",Pt)):Object(r["e"])("",!0)],2)])})),Tt={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return N[this.player.color]}}};a("b5fc");Tt.render=Gt,Tt.__scopeId="data-v-622d1fb6";var Mt=Tt,xt=Object(r["G"])("data-v-343523c3"),Et=xt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(r["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),St={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");St.render=Et,St.__scopeId="data-v-343523c3";var qt=St,It=(a("2532"),Object(r["G"])("data-v-7d7830d9"));Object(r["s"])("data-v-7d7830d9");var Ut=Object(r["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(r["q"])();var At=It((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(r["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(r["z"])(e),3),Ut])})),128))],4)})),Xt={name:"MisterXTable",data:function(){return{gameConfig:z}}};a("9fc6");Xt.render=At,Xt.__scopeId="data-v-7d7830d9";var Bt=Xt,Lt={name:"GameSideBarNormal",components:{MisterXTable:Bt,TransportCard:qt,PlayerLabel:Mt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return z.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return z.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return z.underground-this.currentPlayer.used_underground}}};a("c86b");Lt.render=wt,Lt.__scopeId="data-v-11f1ca98";var Nt=Lt,zt=Object(r["G"])("data-v-6aebdd9a");Object(r["s"])("data-v-6aebdd9a");var Yt={class:"game-sidebar-normal__main-panel"},Ht={class:"game-sidebar-normal__players"},Jt={class:"game-sidebar-normal__transport-cards"},Rt={class:"game-sidebar-normal__transport-wrapper"},Dt={class:"game-sidebar-normal__transport-wrapper"},Ft={class:"game-sidebar-normal__misterx-table"};Object(r["q"])();var $t=zt((function(e,t,a,n,c,o){var s=Object(r["w"])("PlayerLabel"),i=Object(r["w"])("TransportCard"),l=Object(r["w"])("MisterXTable");return Object(r["p"])(),Object(r["d"])("div",Yt,[Object(r["g"])("div",Ht,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.game.players,(function(e){return Object(r["p"])(),Object(r["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(r["g"])("div",Jt,[Object(r["g"])("div",Rt,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(2,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(r["g"])("div",Dt,[(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["v"])(5,(function(e){return Object(r["g"])(i,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(r["g"])("div",Ft,[Object(r["g"])(l)])])})),Kt={name:"GameSideBarNormal",components:{MisterXTable:Bt,TransportCard:qt,PlayerLabel:Mt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");Kt.render=$t,Kt.__scopeId="data-v-6aebdd9a";var Qt=Kt,Vt={name:"GamePhase",components:{GameSideBarNormal:Nt,GameSideBarMisterX:Qt,MapManager:mt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");Vt.render=ut,Vt.__scopeId="data-v-2527c12a";var Wt=Vt,Zt=Object(r["G"])("data-v-20d2bdd2"),ea=Zt((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",null," postgame ")})),ta={name:"PostGamePhase"};ta.render=ea,ta.__scopeId="data-v-20d2bdd2";var aa=ta,ra={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},na=a("8055"),ca=a.n(na),oa=a("a1e9"),sa={name:"Game",components:{PostGamePhase:aa,GamePhase:Wt,PregamePhase:st},setup:function(){var e=ca()(Y,{path:"/unseen/socket.io/"}),t=Object(s["c"])().params.gameId,a=Object(oa["j"])(void 0),r=Object(oa["j"])(void 0),n=Object(oa["j"])([]),c=Object(oa["j"])({});function o(e){a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(r.value=t)})):r.value=null,n.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function i(){e.emit(ra.JOIN_GAME)}function l(){e.emit(ra.QUIT_GAME)}function u(t){e.emit(ra.KICK_PLAYER,t)}function p(t){e.emit(ra.CHANGE_COLOR,t)}function d(){e.emit(ra.START_GAME)}function b(t){e.emit(ra.CHANGE_MISTER_X,t)}return e.emit(ra.CONNECT_TO_GAME,{game_id:t}),e.on(ra.CONNECT_TO_GAME,(function(e){o(e)})),e.on(ra.LOBBY_MODIFIED,(function(e){o(e)})),e.on(ra.START_GAME,(function(e){o(e)})),{status:a,currentPlayer:r,players:n,game:c,joinGame:i,quitGame:l,kickPlayer:u,changeColor:p,changeMisterX:b,startGame:d}}};a("1b21");sa.render=je,sa.__scopeId="data-v-238cf86e";var ia=sa,la=Object(ue["a"])({state:{username:null,logged:!1},mutations:{SET_USERNAME:function(e,t){e.username=t},SET_LOGGED:function(e,t){e.logged=t}},actions:{setUsername:function(e,t){var a=e.commit;a("SET_USERNAME",t)},setLogged:function(e,t){var a=e.commit;a("SET_LOGGED",t)}}}),ua=[{path:"/unseen",name:"Home",component:me},{path:"/unseen/:gameId",name:"Game",component:ia}],pa=Object(s["a"])({history:Object(s["b"])(),base:"unseen",routes:ua});pa.beforeEach((function(e,t,a){"Game"===e.name?la.state.username?a():$.a.get(D).then((function(){a()})):a()}));var da=pa,ba=a("c479"),ma=a.n(ba),ga=Object(r["c"])(o);ga.use(da),ga.use(la),ga.use(ma.a),ga.mount("#app")},"5a08":function(e,t,a){"use strict";a("def4")},"5a8c":function(e,t,a){var r={"./pawn_0.png":"2f79","./pawn_1.png":"624c","./pawn_2.png":"436e","./pawn_3.png":"05ac","./pawn_4.png":"044a","./pawn_mister_x.png":"4353"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="5a8c"},"624c":function(e,t,a){e.exports=a.p+"img/pawn_1.a4e8246a.png"},"65ed":function(e,t,a){"use strict";a("b656")},"72d8":function(e,t,a){"use strict";a("a7bb")},"77b1":function(e,t,a){},"881d":function(e,t,a){},"90ad":function(e,t,a){},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"994e":function(e,t,a){"use strict";a("2f61")},"9aa1":function(e,t,a){"use strict";a("90ad")},"9be6":function(e,t,a){"use strict";a("b99c")},"9fc6":function(e,t,a){"use strict";a("e25a")},a265:function(e,t,a){"use strict";a("77b1")},a405:function(e,t,a){e.exports=a.p+"img/hamburger_icon.dfd455a4.png"},a7bb:function(e,t,a){},b5fc:function(e,t,a){"use strict";a("f8bf")},b656:function(e,t,a){},b99c:function(e,t,a){},c2b7:function(e,t,a){},c7ff:function(e,t,a){"use strict";a("e448")},c86b:function(e,t,a){"use strict";a("05c8")},cad6:function(e,t,a){"use strict";a("0ea0")},def4:function(e,t,a){},e25a:function(e,t,a){},e448:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},e7b2:function(e,t,a){},eb72:function(e,t,a){},f0f2:function(e,t,a){"use strict";a("881d")},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.9f42d458.js.map