(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(9079),c=n(6010),s=n(3018),u=n(3783),d=n(7898),m=n(5537),p=n(2122),h=function(e){return r.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),y=n(9756),g=n(6742),v=n(3919),b=n(8617),k="menuLinkText_1J2g",E=["items"],C=["item"],N=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,r.memo)((function(e){var t=e.items,n=(0,y.Z)(e,E);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(j,(0,p.Z)({key:t,item:e},n))})))}));function j(e){var t=e.item,n=(0,y.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(S,(0,p.Z)({item:t},n));case"link":default:return r.createElement(x,(0,p.Z)({item:t},n))}}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(0,y.Z)(e,N),i=n.items,u=n.label,d=n.collapsible,m=_(n,o),h=(0,s.uR)({initialState:function(){return!!d&&(!m&&n.collapsed)}}),f=h.collapsed,g=h.setCollapsed,v=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:m,collapsed:f,setCollapsed:g}),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&m},t[k]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},l),u),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},r.createElement(T,{items:i,tabIndex:f?-1:0,onItemClick:a,activePath:o})))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(0,y.Z)(e,Z),l=t.href,i=t.label,s=_(t,a);return r.createElement("li",{className:"menu__list-item",key:i},r.createElement(g.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,v.Z)(l)?i:r.createElement("span",null,i,r.createElement(b.Z,null))))}var O="sidebar_15mo",P="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",I="sidebarLogo_3h0W",L="menu_Bmed",B="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},r.createElement(h,{className:D}))}function F(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,i=e.isHidden,u=function(){var e=(0,s.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),p=(0,s.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,y=(0,s.nT)().isClosed;return r.createElement("div",{className:(0,c.Z)(O,(t={},t[P]=h,t[w]=i,t))},h&&r.createElement(m.Z,{tabIndex:-1,className:I}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[B]=!y&&u,n))},r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:o,activePath:a}))),f&&r.createElement(M,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:"menu__list"},r.createElement(T,{items:n,activePath:a,onItemClick:function(){return t()}}))};function H(e){return r.createElement(s.Cv,{component:R,props:e})}var z=r.memo(F),W=r.memo(H);function U(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(z,e),a&&r.createElement(W,e))}var Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:Y};function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=J({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=J({},n,{backgroundColor:null}),a};function Q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),V(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),V(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=J({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?J({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),V(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),V(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=J({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?J({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),V(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)G(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return G(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var te=n(7594),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),oe=function(){var e=(0,s.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function he(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,s.LU)().prism,i=(0,r.useState)(!1),u=i[0],d=i[1],m=(0,r.useState)(!1),h=m[0],y=m[1];(0,r.useEffect)((function(){y(!0)}),[]);var g=(0,s.bc)(a)||o,v=(0,r.useRef)(null),b=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var C=a.match(me)[1];b=ne()(C).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var Z=E.replace(/\n$/,"");if(0===b.length&&void 0!==N){for(var _,T="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return pe(["js","jsBlock"]);case"jsx":case"tsx":return pe(["js","jsBlock","jsx"]);case"html":return pe(["js","jsBlock","html"]);case"python":case"py":return pe(["python"]);default:return pe()}}(N),S=E.replace(/\n$/,"").split("\n"),x=0;x<S.length;){var O=x+1,P=S[x].match(j);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=O+",";break;case"highlight-start":_=O;break;case"highlight-end":T+=_+"-"+(O-1)+","}S.splice(x,1)}else x+=1}b=ne()(T),Z=S.join("\n")}var w=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(Z),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(ee,(0,p.Z)({},$,{key:String(h),theme:k,code:Z,language:N}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("div",{className:le},g&&r.createElement("div",{style:n,className:ce},g),r.createElement("div",{className:(0,c.Z)(ie,N)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,se,"thin-scrollbar"),style:n},r.createElement("code",{className:de},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,p.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,p.Z)({key:t},l({token:e,key:t})))})))})))),r.createElement("button",{ref:v,type:"button","aria-label":(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ue,"clean-btn"),onClick:w},u?r.createElement(f.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(f.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var fe=n(6159),ye="details_1VDD";function ge(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,p.Z)({},t,{className:(0,c.Z)("alert alert--info",ye,t.className)}))}var ve={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(he,e):r.createElement("code",e)},a:function(e){return r.createElement(g.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(he,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ge,(0,p.Z)({},e,{summary:n}),a)},h1:(0,fe.Z)("h1"),h2:(0,fe.Z)("h2"),h3:(0,fe.Z)("h3"),h4:(0,fe.Z)("h4"),h5:(0,fe.Z)("h5"),h6:(0,fe.Z)("h6")},be=n(4608),ke="backToTopButton_35hR",Ee="backToTopButtonShow_18ls";function Ce(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ne=function(){var e,t=Ce(),n=t.smoothScrollTop,a=t.cancelScrollToTop,o=(0,r.useState)(!1),l=o[0],i=o[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||a(),n<300)i(!1);else if(r){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),r.createElement("button",{className:(0,c.Z)("clean-btn",ke,(e={},e[Ee]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Ze=n(5977),_e={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Te(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,m=e.children,p=(0,o.Z)().isClient,y=d.pluginId,g=d.version,v=u.sidebar,b=v?d.docsSidebars[v]:void 0,k=(0,r.useState)(!1),E=k[0],C=k[1],N=(0,r.useState)(!1),Z=N[0],_=N[1],T=(0,r.useCallback)((function(){Z&&_(!1),C(!E)}),[Z]);return r.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:g,tag:(0,s.os)(y,g)}},r.createElement("div",{className:_e.docPage},r.createElement(Ne,null),b&&r.createElement("aside",{className:(0,c.Z)(_e.docSidebarContainer,(t={},t[_e.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(_e.docSidebarContainer)&&E&&_(!0)}},r.createElement(U,{key:v,sidebar:b,path:u.path,onCollapse:T,isHidden:Z}),Z&&r.createElement("div",{className:_e.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.createElement(h,{className:_e.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(_e.docMainContainer,(n={},n[_e.docMainContainerEnhanced]=E||!b,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,(l={},l[_e.docItemWrapperEnhanced]=E,l))},r.createElement(a.Zo,{components:ve},m)))))}var je=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,Ze.LX)(a.pathname,e)}));return o?r.createElement(Te,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):r.createElement(be.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(9756),a=n(2122),o=n(7294),l=n(6010),i=n(4973),c=n(3018),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,d),m=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!m,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(9079),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);