(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8ypT":function(e,t,a){},Exb3:function(e,t,a){},Ocwo:function(e,t,a){e.exports={section:"styles-module--section--7LH9S",exhibition:"styles-module--exhibition--M3RBx",moreButton:"styles-module--moreButton--CcZkX",nirikshak:"styles-module--nirikshak--3FF1j",megatreopuz:"styles-module--megatreopuz--3Ph5S","opacity-transition":"styles-module--opacity-transition--12dVb",opacityTransition:"styles-module--opacity-transition--12dVb","opacity-enter":"styles-module--opacity-enter--3xWya",opacityEnter:"styles-module--opacity-enter--3xWya","default-dimension":"styles-module--default-dimension--22l5S",defaultDimension:"styles-module--default-dimension--22l5S","enter-card":"styles-module--enter-card--1dpZj",enterCard:"styles-module--enter-card--1dpZj","card-transition":"styles-module--card-transition--3bplo",cardTransition:"styles-module--card-transition--3bplo","label-background":"styles-module--label-background--1WyO4",labelBackground:"styles-module--label-background--1WyO4","label-image-background":"styles-module--label-image-background--2OeX8",labelImageBackground:"styles-module--label-image-background--2OeX8","label-card":"styles-module--label-card--1zBjj",labelCard:"styles-module--label-card--1zBjj",title:"styles-module--title--3E_dN",subtitle:"styles-module--subtitle--dslUF"}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=(a("8ypT"),a("Exb3"),a("Ocwo")),l=a.n(o);a("LK8F");function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var s=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n},u=function(e){var t=e.current,a=Object(n.useState)(!1),o=a[0],i=a[1],u=Object(n.useState)(t),c=u[0],d=u[1],m=Object(n.useRef)(null);Object(n.useEffect)((function(){if(null!==m.current){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(m.current))}),{threshold:.8});return e.observe(m.current),function(){m.current&&(null==e||e.unobserve(m.current))}}}),[m.current]),Object(n.useEffect)((function(){o&&(i(!1),requestAnimationFrame((function(){return setTimeout((function(){i(!0),d(t)}),300)})))}),[t]);var y=Object(n.useMemo)((function(){switch(c){case"Megatreopuz":return[l.a.megatreopuz,"Megatreopuz","A secure, scalable and powerful cryptic online hunt platform"];case"Nirikshak":return[l.a.nirikshak,"Nirikshak","An autonomous REST API testing framework"]}}),[c]),b=y[0],f=y[1],p=y[2];return r.a.createElement("section",{ref:m,className:l.a.section},r.a.createElement("div",{className:l.a.exhibition},r.a.createElement("div",{className:s(l.a.defaultDimension,l.a.labelImageBackground,o&&l.a.enterCard,b)}),r.a.createElement("div",{className:s(l.a.defaultDimension,l.a.labelBackground,o&&l.a.enterCard,b)}),r.a.createElement("div",{className:s(l.a.defaultDimension,l.a.labelCard,b)},r.a.createElement("h3",{className:s(l.a.title,l.a.opacityTransition,o&&l.a.opacityEnter)},f),r.a.createElement("h4",{className:s(l.a.subtitle,l.a.opacityTransition,o&&l.a.opacityEnter)},p),r.a.createElement("button",{className:s(l.a.moreButton,l.a.opacityTransition,o&&l.a.opacityEnter,b)},"Know More"))))};t.default=function(){var e=Object(n.useState)("Megatreopuz"),t=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"100vh"}}),r.a.createElement(u,{current:t}),r.a.createElement("button",{style:{position:"fixed",top:0,left:0},onClick:function(){return a((function(e){return"Megatreopuz"==e?"Nirikshak":"Megatreopuz"}))}},"Toggle Project"),r.a.createElement("div",{style:{height:"100vh"}}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a09ec3299711ccf7edb5.js.map