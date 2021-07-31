"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5873,9514],{4608:function(e,t,a){a.r(t);var n=a(7294),r=a(9079),l=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},3007:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(2122),r=a(9756),l=a(7294),c=a(6010),i=a(6742),o=a(3018),s=a(4996),m=a(8465),d="socialBar_2nY3",u="socialLink_1As6",g="socialImage_2plZ",h="socialTitle_3JEm",b=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"#18243C"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#24314A"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#303C56"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#3B4862"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#47546F"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#52607B"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#5E6B87"}];function v(e){var t=e.title,a=e.imageUrl,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,c.Z)("padding-horiz--sm padding-vert--md",u),style:{backgroundColor:r},href:n},l.createElement("img",{className:(0,c.Z)(g),src:(0,s.Z)(a)}),l.createElement("div",{className:(0,c.Z)(h)},t))}var f=function(){return l.createElement("div",{className:(0,c.Z)(d)},b.map((function(e,t){return l.createElement(v,(0,n.Z)({key:t},e))})))},k=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,m=(0,r.Z)(e,k),d=(0,s.Z)(t),u=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?u:a}:{to:d},m),c)}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,d=void 0===m?{}:m,u={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,c.Z)("footer","padding--none","padding-top--lg",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container padding-horiz--xl"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},d&&(d.src||d.srcDark)&&l.createElement("div",null,d.href?l.createElement(i.Z,{href:d.href},l.createElement(p,{alt:d.alt,sources:u})):l.createElement(p,{alt:d.alt,sources:u})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(f,null))):null}},6565:function(e,t,a){a.d(t,{Z:function(){return U}});var n=a(2122),r=a(7294),l=a(6010),c=a(4973),i=a(3507),o=a(3018),s=a(2263),m={toggle:"toggle_3D-N"},d=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.dark),style:a},t)},u=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.light),style:a},t)},g=(0,r.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,c=e.disabled,i=e.onChange,o=(0,r.useState)(n),s=o[0],m=o[1],d=(0,r.useState)(!1),u=d[0],g=d[1],h=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":c}),role:"button",tabIndex:-1,onClick:function(e){var t=h.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},a.checked),r.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.createElement("input",{ref:h,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onFocus:function(){return g(!0)},onBlur:function(){return g(!1)}}))}));function h(e){var t=(0,o.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,c=t.lightIcon,i=t.lightIconStyle,m=(0,s.Z)().isClient;return r.createElement(g,(0,n.Z)({disabled:!m,icons:{checked:r.createElement(d,{icon:a,style:l}),unchecked:r.createElement(u,{icon:c,style:i})}},e))}var b=a(5350),v=a(5662),f=a(1839),k=a(3783),E=a(4201),p=a(5537),_=a(4478),N="toggle_2xs0",w="navbarHideable_1VR7",y="navbarHidden_1FmO",Z="right";function C(){return(0,o.LU)().navbar.items}function S(){var e=(0,o.LU)().colorMode.disableSwitch,t=(0,b.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function I(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,f.Z)(t);var i=C(),s=S(),m=function(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,o.g8)())?void 0:t({toggleSidebar:n}),c=(0,o.D9)(l),i=(0,r.useState)((function(){return!1})),s=i[0],m=i[1];(0,r.useEffect)((function(){l&&!c&&m(!0)}),[l,c]);var d=!!l;return(0,r.useEffect)((function(){d?a||m(!0):m(!1)}),[a,d]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(h,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(c.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var U=function(){var e,t,a,c,s,m,d,u=(0,o.LU)().navbar,g=u.hideOnScroll,b=u.style,f=(t=(0,k.Z)(),a="mobile"===t,c=(0,r.useState)(!1),s=c[0],m=c[1],d=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:a,toggle:d,shown:s}),U=S(),T=(0,v.Z)(g),L=T.navbarRef,x=T.isNavbarVisible,D=C(),F=D.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:Z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:Z)}))}}(D),R=B.leftItems,H=B.rightItems;return r.createElement("nav",{ref:L,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===b,"navbar--primary":"primary"===b,"navbar-sidebar--show":f.shown},e[w]=g,e[y]=g&&!x,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},(null==D?void 0:D.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(_.Z,null)),r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),R.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},H.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))})),!F&&r.createElement(i.Z,null),!U.disabled&&r.createElement(h,{className:N,checked:U.isDarkTheme,onChange:U.toggle}))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(I,{sidebarShown:f.shown,toggleSidebar:f.toggle}))}},3507:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(3018),l=a(6010),c="toggle_10iL",i=(0,n.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,a=e.closeIconStyle,i=e.searchIcon,o=e.searchIconStyle,s=(0,n.useState)(!1),m=s[0],d=s[1],u=(0,n.useRef)(null),g=function(e){var t=u.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void d(null==t?void 0:t.checked)};return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":m}),role:"button",tabIndex:-1,onClick:g},n.createElement("div",{className:"wiki-search-opened"},n.createElement("span",{className:(0,l.Z)(c),style:a},t)),n.createElement("div",{className:"wiki-search-closed"},n.createElement("span",{className:(0,l.Z)(c),style:o},i)),n.createElement("input",{ref:u,checked:m,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:g})),n.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":m})},n.createElement("div",{className:"wiki-search-header"}),n.createElement("div",{className:"wiki-search-main"},n.createElement("div",{className:"wiki-search-bar"},n.createElement("div",{className:"wiki-search-logo"},n.createElement("span",{className:(0,l.Z)(c),style:o},i)),n.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);