"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[44],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(944),o=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,h=e.groupId,p=e.className,m=(0,r.Z)(),v=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,a.useState)(c),g=y[0],w=y[1],b=a.Children.toArray(e.children),k=[];if(null!=h){var N=v[h];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&w(N)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),a=d[n].value;w(a),null!=h&&(f(h,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case l:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:D,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(1395),s=n(8215),l=["components"],u={id:"aha",title:"The Aha! Moment",sidebar_label:"Aha! Moment"},c={unversionedId:"journey/aha",id:"journey/aha",isDocsHomePage:!1,title:"The Aha! Moment",description:"_",source:"@site/docs/journey/aha.md",sourceDirName:"journey",slug:"/journey/aha",permalink:"/devops/docs/journey/aha",editUrl:"https://github.com/snohio/devops/docs/journey/aha.md",version:"current",sidebar_label:"Aha! Moment",frontMatter:{id:"aha",title:"The Aha! Moment",sidebar_label:"Aha! Moment"},sidebar:"devopsJourney",previous:{title:"Enter the Fog",permalink:"/devops/docs/journey/foglight"},next:{title:"The Road Less Traveled",permalink:"/devops/docs/journey/chef"}},d=[{value:"That Day I Had the Aha Moment",id:"that-day-i-had-the-aha-moment",children:[{value:"Some Backstory",id:"some-backstory",children:[]},{value:"DevOpsDays 2016 - November 10th, 2016",id:"devopsdays-2016---november-10th-2016",children:[]},{value:"That is when I fell in &lt;3 with DevOps",id:"that-is-when-i-fell-in-3-with-devops",children:[]}]}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("img",{src:"../../img/journey/devopsdays.png",alt:"Example banner",align:"right"}),(0,o.kt)("h2",{id:"that-day-i-had-the-aha-moment"},"That Day I Had the Aha Moment"),(0,o.kt)("h3",{id:"some-backstory"},"Some Backstory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dell Foglight was at our End of Life."),(0,o.kt)("li",{parentName:"ul"},"We were deploying vRealize suite which included vROps which competed with Foglight."),(0,o.kt)("li",{parentName:"ul"},"Chef was in a Proof of Concept by another team and coming to our org to build and support."),(0,o.kt)("li",{parentName:"ul"},"Struggling with being Engineering and Ops.")),(0,o.kt)("h3",{id:"devopsdays-2016---november-10th-2016"},"DevOpsDays 2016 - ",(0,o.kt)("a",{parentName:"h3",href:"https://devopsdays.org/events/2016-nashville/welcome/"},"November 10th, 2016")),(0,o.kt)("p",null,"The Speakers Were Amazing - ",(0,o.kt)("a",{parentName:"p",href:"https://devopsdays.org/events/2016-nashville/program"},"Program Link")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"th",href:"https://www.linkedin.com/in/johnwillisatlanta/"},"John Willis")," (co-author of The Phoenix Project)"),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"th",href:"https://www.linkedin.com/in/nathen/"},"Nathen Harvey")," (VP - Community Development @ Chef) #hugops"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://www.linkedin.com/in/jasonhand24/"},"Jason Hand")," (DevOps Evangelist VictorOps)")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://www.linkedin.com/in/andrewclayshafer/"},"Andrew Clay Shafer")," (VP of Transformation @ Red Hat)"))))),(0,o.kt)("h3",{id:"that-is-when-i-fell-in-3-with-devops"},"That is when I fell in <3 with DevOps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What I love about these events: Local (Mostly), Inexpensive, External Voices"),(0,o.kt)("li",{parentName:"ul"},"Find a ",(0,o.kt)("a",{parentName:"li",href:"https://devopsdays.org/"},"DevOpsDays event")," near you!"),(0,o.kt)("li",{parentName:"ul"},"My ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=U2-PzeiQEaE"},"DevOps for Tweens")," Ignite Speech at DevOpsDays Columbus- 2017")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"expand",mdxType:"TabItem"},(0,o.kt)("h2",{parentName:"div",id:"leading-up-to-devopsdays"},"Leading Up to DevOpsDays"),(0,o.kt)("p",{parentName:"div"},"DevOpsDays 2016 could not have come at a better time. It was a buzzword high up in our organization but more as a concept than a reality. I had recently read The Phoenix Project and that hit home when it came to the Operational folks and Applications Teams.  "),(0,o.kt)("p",{parentName:"div"},"Going into DevOpsDays I knew Foglight was going away and was starting to take on vROps (because it was the same as Foglight) and beginning to take support and operations of this product called Chef. I knew a little about Chef and knew that HPSA was on the way out and the BSA team that supported HPSA was moving to the vRealize Stack utilizing Chef for the Configuration Management aspect of the builds. They along with our OS Managed Services Compliance team was using Chef and Inspec to confirm systems were built correctly. I knew of the connections between Chef and DevOps but it hadn't quite sunk in yet."),(0,o.kt)("h2",{parentName:"div",id:"guided-by-voices"},"Guided by Voices"),(0,o.kt)("p",{parentName:"div"},"I travelled to Nashville which was the closest DevOpsDays to me and as I was sitting in the first days of key notes, my eyes were opened to a whole new world. All of those things that I found troublesome - sitting in queues waiting for work, documentation handed down to support, not having visibility to the whole picture, end to end, design to development to support, I suddenly ",(0,o.kt)("em",{parentName:"p"},"got it"),"."),(0,o.kt)("p",{parentName:"div"},'Andrew Clay Shafer taking about DevOps being "hard", as in the culture to accept. John Willis giving an update on where we were and where we are in the community, Suzie Prince talking about how to sell DevOps to leaders and day one wrapped by Nathen Harvey talking about Developers struggling to buy in. Day two was even more eye opening with Jason Hand talking about Blameless PostMortems and ChatOps. The latter being one of the most important practices that I almost immediately put into practice when I got back home.'),(0,o.kt)("h2",{parentName:"div",id:"open-sessions"},"Open Sessions"),(0,o.kt)("p",{parentName:"div"},"One of my favorite things about DevOpsDays are the Open Sessions. These are PostIt driven workshops that are made up on the fly. If there is something you want to talk about, throw it out there and see if others want to engage. It was all about community! In fact everything was about community. Had never experienced something so open, community driven, everyone engaged events, ever.  And I had even been very involved in promoting local music in my community (another story for another time.)"),(0,o.kt)("h2",{parentName:"div",id:"i-left-that-day"},"I left that day"),(0,o.kt)("p",{parentName:"div"},"I left that event forever changed. It completely drove my career from that point forward. I would no longer advocate for managed services, separate teams supporting a product. I was from then until now going to be an advocate for a DevOps culture."))))))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);