"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[333],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,p=d["".concat(c,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(944),o=r(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,m=e.values,d=e.groupId,f=e.className,p=(0,a.Z)(),v=p.tabGroupChoices,h=p.setTabGroupChoices,b=(0,n.useState)(u),y=b[0],g=b[1],k=n.Children.toArray(e.children),w=[];if(null!=d){var O=v[d];null!=O&&O!==y&&m.some((function(e){return e.value===O}))&&g(O)}var N=function(e){var t=e.currentTarget,r=w.indexOf(t),n=m[r].value;g(n),null!=d&&(h(d,n),setTimeout((function(){var e,r,n,a,o,i,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,r>=0&&o<=s&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case s:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case c:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5858:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(1395),l=r(8215),c=["components"],s={id:"small",title:"Start Small - Iterate & Practice",sidebar_label:"Start Small"},u={unversionedId:"transform/small",id:"transform/small",isDocsHomePage:!1,title:"Start Small - Iterate & Practice",description:"_",source:"@site/docs/transform/small.md",sourceDirName:"transform",slug:"/transform/small",permalink:"/devops/docs/transform/small",editUrl:"https://github.com/snohio/devops/docs/transform/small.md",version:"current",sidebar_label:"Start Small",frontMatter:{id:"small",title:"Start Small - Iterate & Practice",sidebar_label:"Start Small"},sidebar:"devopsJourney",previous:{title:"Where to Start Your Journey",permalink:"/devops/docs/transform/start"},next:{title:"Practice Kanban / Agile / Scrumban",permalink:"/devops/docs/transform/kanban"}},m=[{value:"Don&#39;t Bite Off More Than You Can Chew",id:"dont-bite-off-more-than-you-can-chew",children:[]},{value:"It&#39;s Called Practice For a Reason",id:"its-called-practice-for-a-reason",children:[]}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("img",{src:"../../img/transform/burger.jpg",alt:"Transformation",align:"right",width:"300"}),(0,o.kt)("h2",{id:"dont-bite-off-more-than-you-can-chew"},"Don't Bite Off More Than You Can Chew"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pick one or two things to start with."),(0,o.kt)("li",{parentName:"ul"},"Iterate - Keep doing it and making changes.")),(0,o.kt)("h2",{id:"its-called-practice-for-a-reason"},"It's Called Practice For a Reason"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be it anything we do, we need to practice."),(0,o.kt)("li",{parentName:"ul"},"These are Practices and they are called that for a reason!")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expand",mdxType:"TabItem"},(0,o.kt)("h2",{parentName:"div",id:"notes-for-this-slide"},"Notes for this Slide"),"  ")))))}f.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);