(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(329),o=n(330);t.a=function(e){var t=e.onRemove;return r.a.createElement(a.Fragment,null,r.a.createElement("b",null,"Tem certeza ?"),r.a.createElement(c.a,null),r.a.createElement(o.a,{fluid:!0,size:"mini",onClick:function(){t()},color:"blue"},"Sim"))}},203:function(e,t,n){e.exports=n(328)},327:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),l=n(101),i=n.n(l),u=n(35),s=(n(214),n(74)),m=n(24),d=n(25),f=n(332);function E(){var e=Object(m.a)(["\n  min-height: 90vh;\n"]);return E=function(){return e},e}var p=d.a.div(E()),h=function(e){var t=e.children;return r.a.createElement(f.a,{as:"main"},r.a.createElement(p,null,t))},g=n(338),v=n(32);function C(){var e=Object(m.a)(["\n  width: 100%;\n  min-height: 200px;\n  background-color: #f26202;\n  margin-top: 30px;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return C=function(){return e},e}var b=d.a.footer(C()),y=function(){return r.a.createElement(b,null,r.a.createElement(g.a,{as:"h2"},r.a.createElement(v.a,{name:"cart"}),r.a.createElement(g.a.Content,null,"Shopping Cart",r.a.createElement(g.a.Subheader,null,"Projeto exemplo carrinho de compras"))),r.a.createElement("a",{style:{color:"#000"},href:"https://github.com/juniorstreichan/shopping-cart/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{name:"github",size:"large"})))},w={NAVBAR_HEIGHT:80},R=n(336),A=n(330),O=n(77),T=n(335),k=n(166),j=n(334),S=n(337),x=n(72),I=n(144);function P(){var e=Object(m.a)(["\n  max-height: 70vh !important;\n  overflow: auto;\n\n  margin-bottom: 10px;\n"]);return P=function(){return e},e}var z,_=d.a.aside(P()),L=function(){var e=Object(a.useContext)(x.a),t=e.products,n=e.removeItem,c=Object(a.useState)(!1),o=Object(s.a)(c,2),l=o[0],i=o[1],m=t.length>0,d=m?t.map(function(e){return e.price||0}).reduce(function(e,t){return e+t}):0,f=r.a.createElement(A.a,{fluid:!0,color:"orange",onClick:function(){return i(!l)}},r.a.createElement(v.a,{name:l?"caret up":"caret down"}),r.a.createElement(v.a,{name:"cart"}),m&&r.a.createElement(O.a,{circular:!0,color:"green",size:"tiny"},t.length)),E=Object(a.useMemo)(function(){return console.log("ENTROU NO MEMO"),t.map(function(e,t){return r.a.createElement(T.a.Item,{key:"".concat(t,"-PopoverCart-").concat(e.id)},r.a.createElement(k.a,{size:"tiny",src:e.imageUrl}),r.a.createElement(T.a.Content,{floated:"right"},r.a.createElement(O.a,null,e.price&&e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))),r.a.createElement("br",null),r.a.createElement(T.a.Content,{floated:"right"},r.a.createElement(j.a,{hideOnScroll:!0,position:"left center",on:"click",content:r.a.createElement(I.a,{onRemove:function(){return n(e.id)}}),trigger:r.a.createElement(A.a,{icon:"trash",color:"red",size:"mini"})})),r.a.createElement(T.a.Content,null,r.a.createElement("small",null,e.name)))})},[t,n]);return r.a.createElement(j.a,{basic:!0,style:{width:"400px"},wide:!0,trigger:f,on:"click",open:l},r.a.createElement(S.a,{size:"massive",color:"orange"},r.a.createElement("strong",null," Meu Carrinho"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("small",null,m?r.a.createElement(a.Fragment,null,"Quantidade:  ",r.a.createElement("b",null,t.length),r.a.createElement("br",null),"Total:  ",r.a.createElement("b",null,d.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))):r.a.createElement(a.Fragment,null,"est\xe1 vazio ...",r.a.createElement(v.a,{name:"leaf"}),r.a.createElement(v.a,{name:"leaf"}),r.a.createElement(v.a,{name:"leaf"}))))),r.a.createElement(_,null,r.a.createElement(T.a,{ordered:!0,size:"massive",divided:!0,verticalAlign:"middle"},E)),r.a.createElement(u.b,{to:m?"carrinho":"produtos"},r.a.createElement(A.a,{color:"green",fluid:!0,animated:!0},r.a.createElement(A.a.Content,{visible:!0},m?"Finalizar Compra":"Ver Produtos"),r.a.createElement(A.a.Content,{hidden:!0},r.a.createElement(v.a,{name:m?"arrow right":"arrow left"}),r.a.createElement(v.a,{name:"cart"})))))},D=function(){return r.a.createElement(R.a,{inverted:!0,fixed:"top",size:"massive"},r.a.createElement(R.a.Item,null),r.a.createElement(R.a.Item,null,r.a.createElement(u.c,{exact:!0,to:"/",activeStyle:{color:"orange"}},r.a.createElement("b",null,"Shopping Cart"))),r.a.createElement(R.a.Item,{position:"right"},r.a.createElement(L,null)),r.a.createElement(R.a.Item,null))};!function(e){e[e.CART_CLEAR=0]="CART_CLEAR",e[e.CART_ADD=1]="CART_ADD",e[e.CART_REMOVE=2]="CART_REMOVE"}(z||(z={}));var N=z,B=n(76),M=n(151),V=n(152),W=new(function(){function e(){Object(M.a)(this,e),this.key="persist:cart"}return Object(V.a)(e,[{key:"getProductsCart",value:function(){try{return JSON.parse(localStorage.getItem(this.key)||"[]")}catch(e){return console.log(e),[]}}},{key:"setProductsToCart",value:function(e){localStorage.setItem(this.key,JSON.stringify(e||[]))}},{key:"addProductToCart",value:function(e){var t=[].concat(Object(B.a)(this.getProductsCart()),[e]);this.setProductsToCart(t)}},{key:"removeProductOfCart",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=this.getProductsCart().filter(function(t){return t.id!==e});this.setProductsToCart(t)}},{key:"clearCart",value:function(){localStorage.setItem(this.key,"[]")}}]),e}());function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return W.removeProductOfCart(t),e.filter(function(e){return e.id!==t})}function F(e,t){switch(t.type){case N.CART_CLEAR:return{products:(W.clearCart(),[])};case N.CART_REMOVE:return{products:U(e.products,t.id)};case N.CART_ADD:return{products:(n=e.products,a=t.product,a&&!n.find(function(e){return e.id===a.id})?(W.addProductToCart(a),[].concat(Object(B.a)(n),[a])):n)};default:return e}var n,a}var H=n(38),J=n(333);function G(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60vh;\n"]);return G=function(){return e},e}var Q=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,436))}),$=Object(a.lazy)(function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,430))}),q=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,433))}),K=d.a.section(G()),X=function(){var e=r.a.createElement(K,null,r.a.createElement(J.a,{active:!0,inline:"centered",size:"massive"},"CARREGANDO..."));return r.a.createElement(a.Suspense,{fallback:e},r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/",exact:!0,component:Q}),r.a.createElement(H.b,{path:"/produtos",component:$}),r.a.createElement(H.b,{path:"/carrinho",exact:!0,component:q}),r.a.createElement(H.b,{path:"*",render:function(){return r.a.createElement(H.a,{to:"/"})}})))};function Y(){var e=Object(m.a)(["\n  margin-top: ","px;\n"]);return Y=function(){return e},e}var Z=d.a.div(Y(),w.NAVBAR_HEIGHT),ee={products:W.getProductsCart()},te=function(){var e=Object(a.useReducer)(F,ee),t=Object(s.a)(e,2),n=t[0],c=t[1];return r.a.createElement(Z,null,r.a.createElement(x.a.Provider,{value:{clearCart:function(){c({type:N.CART_CLEAR})},products:n.products,removeItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";c({type:N.CART_REMOVE,id:e})},addItem:function(e){c({type:N.CART_ADD,product:e})},hasInTheCart:function(e){return n.products.filter(function(t){return t.id===e.id}).length>0}}},r.a.createElement(D,null),r.a.createElement(h,null,r.a.createElement(X,null)),r.a.createElement(y,null)))},ne=(n(327),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ae(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,{titleTemplate:"%s | Shopping Cart",defaultTitle:"Shopping Cart"}),r.a.createElement(te,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-cart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/shopping-cart","/service-worker.js");ne?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ae(t,e)})}}()},72:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({removeItem:function(e){return console.log(e)},addItem:function(e){return console.log(e)},clearCart:function(){return null},hasInTheCart:function(){return!1},products:[]});t.a=r}},[[203,1,2]]]);
//# sourceMappingURL=main.74c040a5.chunk.js.map