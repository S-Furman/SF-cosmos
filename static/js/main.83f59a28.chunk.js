(this["webpackJsonpsf-cosmos"]=this["webpackJsonpsf-cosmos"]||[]).push([[0],[,,function(e,t,n){e.exports={illustrationContainer:"Illustration_illustrationContainer__3Zetr",planet:"Illustration_planet__2zWOM",rocket:"Illustration_rocket__1Kmb0",landingGear:"Illustration_landingGear__30SE9",smoke1:"Illustration_smoke1__1oluB",smoke2:"Illustration_smoke2__pbs_b",enterActive:"Illustration_enterActive__3nmy7",enterDone:"Illustration_enterDone__Bnwss",exitActive:"Illustration_exitActive__3Tvea",exitOut:"Illustration_exitOut__9oHBd",launchEnterActive:"Illustration_launchEnterActive__2oxNa",launchEnterDone:"Illustration_launchEnterDone__3EMSC",launchExitActive:"Illustration_launchExitActive__1aSdK",launchExitOut:"Illustration_launchExitOut__2t_Pu"}},,function(e,t,n){e.exports={rightCircle:"BackgroundElements_rightCircle__2G6-J",upperCircle:"BackgroundElements_upperCircle__3JTy6",leftCircle:"BackgroundElements_leftCircle__2OfZF",dot1:"BackgroundElements_dot1__2NySL",dot2:"BackgroundElements_dot2__3nnFi",dot3:"BackgroundElements_dot3__1IOP8",dot4:"BackgroundElements_dot4__1txRG",dot5:"BackgroundElements_dot5__H96gJ"}},,function(e,t,n){e.exports={header:"Header_header__2XMqV",typeBtn:"Header_typeBtn__3RhHB",status:"Header_status__3KcV8",container:"Header_container__1bVj5"}},function(e,t,n){e.exports={headline:"Headline_headline__1O9-m",exitIcon:"Headline_exitIcon__3DnTI",headerTitle:"Headline_headerTitle__qBGc8"}},,function(e,t,n){e.exports={singleCard:"SingleCard_singleCard__3Flpk",title:"SingleCard_title__3dc1y"}},,function(e,t,n){e.exports={cardsContainer:"Cards_cardsContainer__29S0M"}},function(e,t,n){e.exports={btn:"Button_btn__-wb1s"}},function(e,t,n){e.exports={modal:"Modal_modal__20Rlp"}},function(e,t,n){e.exports={container:"SingleRecord_container__1fwbD"}},function(e,t,n){e.exports={navbar:"Navbar_navbar__3W7iq"}},,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n.n(c),s=n(5),r=n.n(s),l=(n(21),n(3)),o=n(0),d=i.a.createContext({type:"",chooseType:function(){},isVisible:!1,changeVisibility:function(){}}),u=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),u=r[0],C=r[1],j={isVisible:a,changeVisibility:function(){return i(!a)},type:u,chooseType:function(e){return C(e)}};return Object(o.jsx)(d.Provider,{value:j,children:e.children})},C=n(9),j=n.n(C),b=function(e){var t=Object(c.useContext)(d);return Object(o.jsx)("header",{onClick:function(){t.changeVisibility(),t.chooseType(e.title)},className:j.a.singleCard,style:{backgroundImage:"linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%), url(".concat(e.imgPath,")")},children:Object(o.jsx)("p",{className:j.a.title,children:e.title})})},m=n.p+"static/media/crew.3755e6a5.svg",_=n.p+"static/media/capsules.70d7f74e.svg",h=n.p+"static/media/rockets.24649eeb.svg",p=n.p+"static/media/details.75f21274.svg",g=n(11),x=n.n(g),O=function(){var e=[{title:"Capsules",imgPath:_},{title:"Crew",imgPath:m},{title:"Rockets",imgPath:h},{title:"Starlinks",imgPath:p}];return Object(o.jsx)("article",{className:x.a.cardsContainer,children:e.map((function(e,t){return Object(o.jsx)(b,{title:e.title,imgPath:e.imgPath},t)}))})},f=n(2),v=n.n(f),k=n(28),y=n.p+"static/media/Planet.3dfe2663.svg",N=n.p+"static/media/Rocket.714cbe96.svg",E=n.p+"static/media/Smoke 1.40147cfb.svg",H=n.p+"static/media/Smoke 2.504b6526.svg",V=n.p+"static/media/landing gear.1f3e6da7.svg",I=n(12),S=n.n(I),w=function(e){return Object(o.jsx)("button",{onClick:e.click,className:S.a.btn,children:e.children})},P=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(c.useEffect)((function(){setTimeout((function(){a(!1)}),1e3)}),[n]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:v.a.illustrationContainer,children:[Object(o.jsx)("img",{className:v.a.planet,src:y,alt:"planet"}),Object(o.jsx)(k.a,{in:n,timeout:300,classNames:{enterActive:v.a.launchEnterActive,enterDone:v.a.launchEnterDone,exitActive:v.a.launchExitActive,exitDone:v.a.launchExitDone},nodeRef:i,children:Object(o.jsxs)("div",{ref:i,children:[Object(o.jsx)("img",{className:v.a.rocket,src:N,alt:"rocket"}),Object(o.jsx)("img",{className:v.a.landingGear,src:V,alt:"landing Gear"})]})}),Object(o.jsx)(k.a,{in:n,timeout:300,classNames:{enterActive:v.a.enterActive,enterDone:v.a.enterDone,exitActive:v.a.exitActive,exitDone:v.a.exitDone},nodeRef:s,children:Object(o.jsxs)("div",{ref:s,children:[Object(o.jsx)("img",{className:v.a.smoke1,src:E,alt:"1st smoke"}),Object(o.jsx)("img",{className:v.a.smoke2,src:H,alt:"2nd smoke"})]})}),Object(o.jsx)(w,{click:function(){return a(!0)},children:"Launch Rocket!"})]})})},B=n(13),A=n.n(B),M=n(7),L=n.n(M),D=n.p+"static/media/Icon Color.1e4b9463.svg",T=function(e){var t=Object(c.useContext)(d);return Object(o.jsxs)("div",{className:L.a.headline,children:[Object(o.jsx)("p",{className:L.a.headerTitle,children:e.title}),Object(o.jsx)("img",{className:L.a.exitIcon,onClick:t.changeVisibility,src:D,alt:"exit icon"})]})},R=n(6),Z=n.n(R),F=n(14),G=n.n(F),J=function(e){return Object(o.jsxs)("div",{className:G.a.container,children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{style:{marginLeft:"32px"},children:e.details})]})},q=function(e){return Object(o.jsxs)("header",{className:Z.a.header,children:[Object(o.jsx)("button",{className:Z.a.typeBtn,children:"Type"}),Object(o.jsx)("p",{className:Z.a.status,children:"Status"}),Object(o.jsx)("div",{className:Z.a.container,style:{overflowX:"hidden",overflowY:"scroll"},children:e.data.slice(0,30).map((function(t,n){return Object(o.jsx)(J,{name:t[e.name],details:t[e.details]},n)}))})]})},K=function(){var e=Object(c.useContext)(d),t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],i=n[1],s=!!a,r=Object(c.useState)(""),u=Object(l.a)(r,2),C=u[0],j=u[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),_=m[0],h=m[1];return Object(c.useEffect)((function(){var t;"Capsules"===e.type&&(t="https://api.spacexdata.com/v4/capsules",j("type"),h("status")),"Crew"===e.type&&(t="https://api.spacexdata.com/v4/crew",j("name"),h("agency")),"Rockets"===e.type&&(t="https://api.spacexdata.com/v4/rockets",j("name"),h("first_flight")),"Starlinks"===e.type&&(t="https://api.spacexdata.com/v4/starlink",j("version"),h("spaceTrack.object")),fetch(t).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[e.type]),Object(o.jsxs)("div",{className:A.a.modal,children:[Object(o.jsx)(T,{title:e.type}),s&&Object(o.jsx)(q,{data:a,name:C,details:_})]})};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function z(e,t){var n=e.title,i=e.titleId,s=W(e,["title","titleId"]);return c.createElement("svg",X({width:116,height:24,viewBox:"0 0 116 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),n?c.createElement("title",{id:i},n):null,a||(a=c.createElement("path",{d:"M36.0511 13.7753C36.2691 12.729 36.7922 11.9008 37.5333 11.3341C38.2743 10.7674 39.1898 10.4622 40.3232 10.4622C41.2822 10.4622 42.1541 10.7238 42.8952 11.2905C43.6362 11.8136 44.1593 12.6419 44.3773 13.7753H36.0511ZM40.3232 6.66967C37.7948 6.66967 35.746 7.49793 34.133 9.15445C32.5201 10.811 31.7354 12.8598 31.7354 15.301C31.7354 17.7858 32.5637 19.8347 34.1766 21.4912C35.7896 23.1041 37.9692 23.9324 40.6719 23.9324C43.6362 23.9324 45.903 22.8861 47.516 20.7937C47.6468 20.6193 47.6032 20.3142 47.3852 20.1834L44.6824 18.6141C44.5081 18.5269 44.2901 18.5705 44.1593 18.7012C43.3311 19.6167 42.1977 20.0526 40.7155 20.0526C38.2307 20.0526 36.6614 19.05 36.0947 17.0011H48.0391C48.257 17.0011 48.4314 16.8704 48.4314 16.6524C48.5186 16.1729 48.5186 15.6933 48.5186 15.2574C48.5186 12.8162 47.7339 10.7674 46.1646 9.11086C44.6825 7.49793 42.6772 6.66967 40.3232 6.66967ZM59.5911 7.14919H59.3732H59.286C59.286 7.14919 58.5013 7.14919 58.109 7.23638C57.5859 7.32356 57.0628 7.54153 56.5832 7.80308C56.4961 7.89027 56.3653 7.93386 56.2781 8.02104C55.8422 8.36979 55.4934 8.76212 55.1883 9.24164C55.1011 9.37242 55.0575 9.50319 54.9703 9.63397C54.9703 9.54679 54.9703 9.4596 54.9703 9.32882V7.58512C54.9703 7.36716 54.7959 7.19279 54.578 7.19279H51.1778C50.9598 7.19279 50.7854 7.36716 50.7854 7.58512V23.1041C50.7854 23.3221 50.9598 23.4964 51.1778 23.4964H54.578C54.7959 23.4964 54.9703 23.3221 54.9703 23.1041V15.6933C54.9703 13.9061 55.4934 12.6855 56.4961 11.988C57.0628 11.6392 57.6731 11.3777 58.3269 11.2905C58.7193 11.2469 59.1552 11.2033 59.5475 11.2033C59.7655 11.2033 59.9399 11.0289 59.9399 10.811V7.58512C59.9835 7.32356 59.8091 7.14919 59.5911 7.14919ZM27.2018 14.342C26.3735 14.0368 25.5453 13.7753 24.717 13.5573C23.8888 13.3393 23.1913 13.1214 22.6246 12.8598C22.0579 12.5983 21.7527 12.2495 21.7527 11.8136C21.7527 11.4213 21.9271 11.0725 22.2758 10.8546C22.6682 10.5494 23.1041 10.4622 23.6708 10.4622C24.7606 10.4622 25.5453 10.8982 26.0684 11.77C26.1992 11.9444 26.4171 12.0316 26.6351 11.9444L29.4686 10.375C29.6866 10.2443 29.7302 9.98271 29.643 9.80834C29.0327 8.8929 28.248 8.15182 27.289 7.62871C26.1992 7.01841 24.9786 6.71327 23.6708 6.71327C21.9271 6.71327 20.4449 7.19279 19.2679 8.10823C18.0909 9.02368 17.4806 10.2879 17.4806 11.9008C17.4806 12.947 17.7858 13.8625 18.3525 14.5599C18.9192 15.2574 19.6167 15.7805 20.4449 16.1293C21.2732 16.4344 22.1015 16.7396 22.9297 16.9575C23.758 17.1755 24.4555 17.4371 25.0222 17.6986C25.5889 17.9602 25.894 18.3089 25.894 18.7448C25.894 19.6603 25.153 20.1398 23.6272 20.1398C22.1451 20.1398 21.1424 19.5731 20.5757 18.4397C20.4885 18.2217 20.1834 18.1781 20.009 18.2653L17.1319 19.8782C16.9575 19.9654 16.8703 20.227 16.9575 20.4449C18.2217 22.799 20.4449 23.976 23.6272 23.976C25.5017 23.976 27.071 23.54 28.2916 22.6246C29.5558 21.7091 30.1661 20.4449 30.1661 18.7448C30.1661 17.655 29.861 16.696 29.2942 15.9549C28.7275 15.1702 28.0301 14.6471 27.2018 14.342ZM15.0395 9.15445L11.6392 7.45434C11.3777 7.32356 11.0725 7.49793 11.0725 7.80308V15.9549C11.0725 17.3063 10.7674 18.3089 10.1135 19.0064C9.4596 19.6603 8.58775 20.009 7.49793 20.009C6.5389 20.009 5.75423 19.7039 5.14393 19.1372C4.57723 18.5705 4.27208 17.7422 4.27208 16.6524V13.9496C4.27208 13.6445 3.96693 13.4701 3.70537 13.6009L0.305148 15.3446C0.0871853 15.4318 0 15.5626 0 15.6933V17.1755C0 19.2679 0.566704 20.9245 1.74371 22.1451C2.92071 23.3221 4.40286 23.9324 6.14656 23.9324C8.36979 23.9324 9.98271 23.1913 11.0289 21.6655V23.1041C11.0289 23.3221 11.2033 23.4964 11.4213 23.4964H14.8215C15.0395 23.4964 15.2138 23.3221 15.2138 23.1041V9.50319C15.2574 9.32882 15.1702 9.19805 15.0395 9.15445ZM72.5817 7.14919H69.2687V3.22586C69.2687 2.92071 68.9636 2.74634 68.702 2.87711L65.2582 4.57723C65.1274 4.66441 65.0402 4.79519 65.0402 4.92597V7.14919H62.599C62.3811 7.14919 62.2067 7.32356 62.2067 7.54153V10.811C62.2067 11.0289 62.3811 11.2033 62.599 11.2033H65.0402V18.0038C65.0402 20.227 65.6505 21.7963 66.8275 22.6682C67.9609 23.4964 69.879 23.8016 72.5817 23.54C72.7997 23.54 72.9305 23.3657 72.9305 23.1477V20.0962C72.9305 19.8782 72.7561 19.7039 72.5381 19.7039C71.9278 19.7475 71.3611 19.7475 70.9252 19.7039C70.4021 19.6603 69.9662 19.5295 69.7046 19.2679C69.3995 19.0064 69.2687 18.6141 69.2687 18.0474V11.2033H72.5817C72.7997 11.2033 72.9741 11.0289 72.9741 10.811V7.54153C72.9741 7.32356 72.7997 7.14919 72.5817 7.14919ZM79.513 7.14919H76.1127C75.8948 7.14919 75.7204 7.32356 75.7204 7.54153V23.0605C75.7204 23.2785 75.8948 23.4528 76.1127 23.4528H79.513C79.7309 23.4528 79.9053 23.2785 79.9053 23.0605V7.54153C79.9053 7.32356 79.7309 7.14919 79.513 7.14919ZM103.445 13.7753C103.663 12.729 104.186 11.9008 104.927 11.3341C105.669 10.7674 106.584 10.4622 107.717 10.4622C108.676 10.4622 109.548 10.7238 110.289 11.2905C111.03 11.8136 111.554 12.6419 111.772 13.7753H103.445ZM113.646 9.15445C112.077 7.49793 110.115 6.66967 107.717 6.66967C105.189 6.66967 103.14 7.49793 101.527 9.15445C99.9143 10.811 99.1296 12.8598 99.1296 15.301C99.1296 17.7858 99.9579 19.8347 101.571 21.4912C103.184 23.1041 105.363 23.9324 108.066 23.9324C111.03 23.9324 113.341 22.8861 114.91 20.7937C115.041 20.6193 114.997 20.3578 114.779 20.227L112.033 18.6576C111.859 18.5705 111.684 18.6141 111.554 18.7448C110.725 19.6603 109.592 20.1398 108.11 20.1398C105.625 20.1398 104.056 19.1372 103.489 17.0883H115.477C115.651 17.0883 115.826 16.9575 115.869 16.7832C115.956 16.3036 116 15.8241 116 15.3882C116 12.8598 115.215 10.811 113.646 9.15445ZM98.563 7.14919H94.7704C94.596 7.14919 94.4652 7.23638 94.4216 7.41075L90.5419 18.5705L86.6186 7.41075C86.575 7.23638 86.4006 7.14919 86.2698 7.14919H82.4773C82.2157 7.14919 81.9977 7.41075 82.1285 7.6723L88.0135 23.2349C88.0571 23.3657 88.2315 23.4964 88.3623 23.4964H92.6343C92.8087 23.4964 92.9395 23.4092 92.9831 23.2349L98.8681 7.6723C98.9989 7.41075 98.8245 7.14919 98.563 7.14919ZM77.8129 0C77.1154 0 76.5051 0.261556 75.982 0.784667C75.4589 1.30778 75.1973 1.91808 75.1973 2.61556C75.1973 3.31304 75.4589 3.92334 75.982 4.44645C76.5487 5.01315 77.2461 5.27471 78.0308 5.18752C78.5975 5.14393 79.1206 4.88238 79.5566 4.53363C80.1233 4.01052 80.4284 3.35663 80.4284 2.61556C80.4284 1.91808 80.1669 1.30778 79.6437 0.784667C79.1206 0.261556 78.5103 0 77.8129 0Z",fill:"white"})))}var U=c.forwardRef(z),Y=(n.p,n(15)),Q=n.n(Y),$=function(){return Object(o.jsx)("div",{className:Q.a.navbar,children:Object(o.jsx)(U,{})})},ee=(n(25),function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("p",{children:"Copyright \xa9 Usertive & SpaceX API"}),Object(o.jsx)("p",{children:"Recruiment Task / Summer 2021"})]})}),te=n(4),ne=n.n(te),ae=n.p+"static/media/rightCircle.1b631783.svg",ce=n.p+"static/media/leftCircle.06db1f7b.svg",ie=n.p+"static/media/upperCircle.d226a7b0.svg",se=n.p+"static/media/Path 109.7e4ed2e3.svg",re=n.p+"static/media/Path 108.9c1db7f0.svg",le=n.p+"static/media/Path 107.7e4ed2e3.svg",oe=n.p+"static/media/Path 106.e46b3f52.svg",de=n.p+"static/media/Path 110.e46b3f52.svg",ue=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:ne.a.rightCircle,src:ae,alt:"backgound circle"}),Object(o.jsx)("img",{className:ne.a.upperCircle,src:ie,alt:"backgound circle"}),Object(o.jsx)("img",{className:ne.a.leftCircle,src:ce,alt:"backgound circle"}),Object(o.jsx)("img",{className:ne.a.dot1,src:se,alt:"background dot"}),Object(o.jsx)("img",{className:ne.a.dot2,src:re,alt:"background dot"}),Object(o.jsx)("img",{className:ne.a.dot3,src:le,alt:"background dot"}),Object(o.jsx)("img",{className:ne.a.dot4,src:oe,alt:"background dot"}),Object(o.jsx)("img",{className:ne.a.dot5,src:de,alt:"background dot"})]})},Ce=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(ue,{}),Object(o.jsx)($,{}),e.children,Object(o.jsx)(ee,{})]})};var je=function(){var e=Object(c.useContext)(d);return Object(o.jsx)(Ce,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(P,{}),e.isVisible&&Object(o.jsx)(K,{})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(je,{})})}),document.getElementById("root")),be()}],[[26,1,2]]]);
//# sourceMappingURL=main.83f59a28.chunk.js.map