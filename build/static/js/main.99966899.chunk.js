(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{1:function(e,t,a){e.exports={App:"App_App__3KeYz",SquareContainer:"App_SquareContainer__zB65W",LeftDiv:"App_LeftDiv__1aWRf",LeftDivActive:"App_LeftDivActive__1aFnA",RightDiv:"App_RightDiv__7DTxd",RightDivActive:"App_RightDivActive__1v68p",ButtonHolderSpan:"App_ButtonHolderSpan__1MOjY",PrimaryButton:"App_PrimaryButton__3zX5r",PrimaryButtonActive:"App_PrimaryButtonActive__1Ym5F",RestartButton:"App_RestartButton__2Jcwc",RestartButtonActive:"App_RestartButtonActive__2cLnc",ModalEnterActive:"App_ModalEnterActive__2fnuI",modalEnter:"App_modalEnter__3US-0",ModalExitActive:"App_ModalExitActive__1xACH",modalExit:"App_modalExit__1oLHK"}},20:function(e,t,a){e.exports={Squares:"squares_Squares__2ZZxe"}},21:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2ozYo"}},22:function(e,t,a){e.exports={Modal:"Modal_Modal__2uHbM"}},28:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(7),c=a(8),u=(a(38),a(5)),l=a(24),m=a(17),f=a(18),v=a(19),d=a(25),p=a(23),_=a(40),h=a(1),q=a.n(h),E=a(6),S=a.n(E),A=Object(s.b)((function(e){return{squares:e.squares}}))((function(e){var t=Boolean(e.squares["square".concat(e.value)]),a=Object(n.useRef)(null),i=[S.a.Square,"X"===e.squares["square".concat(e.value)]?S.a.SquareX:"O"===e.squares["square".concat(e.value)]?S.a.SquareO:null];return r.a.createElement(_.a,{in:t,timeout:300,classNames:{enter:S.a.SquareValueEnter,enterActive:S.a.SquareValueEnterActive},nodeRef:a},r.a.createElement("button",{ref:a,className:i.join(" "),onClick:function(){return e.markPosition("square".concat(e.value))}},r.a.createElement("span",{className:S.a.SquareSpan},e.squares["square".concat(e.value)])))})),g=a(20),O=a.n(g),R=Object(n.memo)((function(e){return r.a.createElement("div",{className:O.a.Squares},r.a.createElement(A,{value:e.row,markPosition:e.onMarkPosition}),r.a.createElement(A,{value:e.row+1,markPosition:e.onMarkPosition}),r.a.createElement(A,{value:e.row+2,markPosition:e.onMarkPosition}))})),w=a(21),b=a.n(w),k=function(e){return r.a.createElement("div",{className:b.a.Backdrop,onClick:e.close})},y=a(22),B=a.n(y),P=function(e){return r.a.createElement("div",{className:B.a.Modal,onClick:e.close,style:"X"===e.winner?{backgroundColor:"#9fd4ff"}:"O"===e.winner?{backgroundColor:"#296392"}:e.winner?null:{backgroundColor:"#ffffff"}},e.winner?r.a.createElement("div",null,"winner is ",e.winner):r.a.createElement("div",null,"game is a draw"))},j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).checkGameStatus=function(){for(var e in r.squareStates)if(""===r.squareStates[e])return!1;return!0},r.checkWinnerHandler=function(){var e,t=Object(m.a)(r.ruleSet);try{for(t.s();!(e=t.n()).done;){var a=Object(l.a)(e.value,3),n=a[0],i=a[1],o=a[2];if(r.squareStates["square".concat(n)]&&r.squareStates["square".concat(n)]===r.squareStates["square".concat(i)]&&r.squareStates["square".concat(i)]===r.squareStates["square".concat(o)])return r.setState({gameOver:!0}),r.player}}catch(s){t.e(s)}finally{t.f()}return r.setState({gameOver:r.checkGameStatus()}),!1},r.startGameHandler=function(){r.player="X",r.squareStates=Object(u.a)({},r.props.squares),r.setState({gameStart:!0})},r.markPositionHandler=function(e){r.squareStates[e]||(r.squareStates[e]=r.player,r.winner=r.checkWinnerHandler(),r.props.markPosition(e,r.player),r.result||r.state.gameOver||(r.player="X"===r.player?"O":"X"))},r.endGame=function(){r.setState({gameOver:!1,gameStart:!1}),r.props.restartGame()},r.state={gameStart:!1,gameOver:!1},r.ruleSet=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],r.startBtnRef=Object(n.createRef)(),r.restartBtnRef=Object(n.createRef)(),r.leftRef=Object(n.createRef)(),r.rightRef=Object(n.createRef)(),r.modalRef=Object(n.createRef)(),r}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:q.a.App},this.state.gameOver?r.a.createElement(k,{close:this.endGame}):null,r.a.createElement(_.a,{in:this.state.gameOver,timeout:500,mountOnEnter:!0,unmountOnExit:!0,classNames:{enterActive:q.a.ModalEnterActive,exitActive:q.a.ModalExitActive}},r.a.createElement(P,{winner:this.winner,close:this.endGame})),r.a.createElement("span",{className:q.a.ButtonHolderSpan},r.a.createElement(_.a,{in:this.state.gameStart,timeout:500,mountOnEnter:!0,unmountOnExit:!0,nodeRef:this.restartBtnRef,classNames:{enterDone:q.a.RestartButtonActive}},r.a.createElement("button",{ref:this.restartBtnRef,className:q.a.RestartButton,onClick:this.endGame},"restart")),r.a.createElement(_.a,{in:!this.state.gameStart,timeout:500,mountOnEnter:!0,unmountOnExit:!0,nodeRef:this.startBtnRef,classNames:{enter:q.a.PrimaryButtonActive,exitActive:q.a.PrimaryButtonActive,exitDone:q.a.PrimaryButtonActive}},r.a.createElement("button",{ref:this.startBtnRef,className:q.a.PrimaryButton,onClick:this.startGameHandler},"start the game"))),r.a.createElement("div",{className:q.a.SquareContainer},r.a.createElement(_.a,{in:!this.state.gameStart,timeout:500,unmountOnExit:!0,nodeRef:this.leftRef,classNames:{exit:q.a.LeftDiv,exitActive:q.a.LeftDivActive}},r.a.createElement("div",{className:q.a.LeftDiv,ref:this.leftRef})),r.a.createElement(_.a,{in:!this.state.gameStart,timeout:500,unmountOnExit:!0,nodeRef:this.rightRef,classNames:{exit:q.a.RightDiv,exitActive:q.a.RightDivActive}},r.a.createElement("div",{className:q.a.RightDiv,ref:this.rightRef})),r.a.createElement("div",null,r.a.createElement(R,{row:1,onMarkPosition:this.markPositionHandler}),r.a.createElement(R,{row:4,onMarkPosition:this.markPositionHandler}),r.a.createElement(R,{row:7,onMarkPosition:this.markPositionHandler}))))}}]),a}(n.Component),x=Object(s.b)((function(e){return{squares:e.squares}}),(function(e){return{markPosition:function(t,a){return e({type:"MARK_POSITION",position:t,player:a})},restartGame:function(){e({type:"RESTART"})}}}))(j),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=a(9),C={result:!1,squares:{square1:"",square2:"",square3:"",square4:"",square5:"",square6:"",square7:"",square8:"",square9:""}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MARK_POSITION":return Object(u.a)(Object(u.a)({},e),{},{player:t.player,squares:Object(u.a)(Object(u.a)({},e.squares),{},Object(D.a)({},t.position,t.player))});case"RESTART":return Object(u.a)({},C);default:return e}},L="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,W=Object(c.c)(H,L());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:W},r.a.createElement(x,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()},6:function(e,t,a){e.exports={Square:"square_Square__26EKs",SquareX:"square_SquareX__Xn7lK",SquareO:"square_SquareO__garIg",SquareValueEnter:"square_SquareValueEnter__2bnER",SquareValueEnterActive:"square_SquareValueEnterActive__3yCbp"}}},[[28,1,2]]]);
//# sourceMappingURL=main.99966899.chunk.js.map