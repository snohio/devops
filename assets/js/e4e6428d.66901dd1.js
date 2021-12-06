"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[944],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(u),h=y[0],k=y[1],g=r.Children.toArray(e.children),w=[];if(null!=p){var N=v[p];null!=N&&N!==h&&m.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;k(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(1395),l=n(8215),c=["components"],s={id:"kanban",title:"Practice Kanban / Agile / Scrumban",sidebar_label:"Practice Kanban"},u={unversionedId:"transform/kanban",id:"transform/kanban",isDocsHomePage:!1,title:"Practice Kanban / Agile / Scrumban",description:"_",source:"@site/docs/transform/kanban.md",sourceDirName:"transform",slug:"/transform/kanban",permalink:"/devops/docs/transform/kanban",editUrl:"https://github.com/snohio/devops/docs/transform/kanban.md",version:"current",sidebar_label:"Practice Kanban",frontMatter:{id:"kanban",title:"Practice Kanban / Agile / Scrumban",sidebar_label:"Practice Kanban"},sidebar:"devopsJourney",previous:{title:"Start Small - Iterate & Practice",permalink:"/devops/docs/transform/small"},next:{title:"Stand Ups and Demos",permalink:"/devops/docs/transform/standup"}},m=[{value:"Use Any Tool",id:"use-any-tool",children:[]},{value:"Use User Story format for Descriptions",id:"use-user-story-format-for-descriptions",children:[]}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("img",{src:"../../img/transform/kanban.png",alt:"Transformation",align:"right",width:"450"}),(0,o.kt)("h2",{id:"use-any-tool"},"Use Any Tool"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trello"),(0,o.kt)("li",{parentName:"ul"},"CA Agile"),(0,o.kt)("li",{parentName:"ul"},"Swift Kanban"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"GitHub"))),(0,o.kt)("h2",{id:"use-user-story-format-for-descriptions"},"Use User Story format for Descriptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As the (Stakeholder)"),(0,o.kt)("li",{parentName:"ul"},"I want to (Task)"),(0,o.kt)("li",{parentName:"ul"},"So that (Outcome)")),(0,o.kt)("p",null,"This actually helps me remember what cards are doing!"),(0,o.kt)("p",null,"Also, I love GitHub because Everything as Code in Markdown!"),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expand",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"div"},"  Free Verse!"),"  ")))))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);