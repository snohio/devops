"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[355],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),o=a(944),i=a(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var d=function(e){var t=e.lazy,a=e.block,d=e.defaultValue,u=e.values,p=e.groupId,h=e.className,m=(0,o.Z)(),f=m.tabGroupChoices,w=m.setTabGroupChoices,g=(0,n.useState)(d),v=g[0],y=g[1],b=n.Children.toArray(e.children),k=[];if(null!=p){var O=f[p];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&y(O)}var I=function(e){var t=e.currentTarget,a=k.indexOf(t),n=u[a].value;y(n),null!=p&&(w(p,n),setTimeout((function(){var e,a,n,o,i,r,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,a>=0&&i<=c&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case c:var n=k.indexOf(e.target)+1;a=k[n]||k[0];break;case l:var o=k.indexOf(e.target)-1;a=k[o]||k[k.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:I,onClick:I},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7201:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=a(1395),s=a(8215),l=["components"],c={id:"practices",title:"Diving In to DevOps Practices",sidebar_label:"DevOps Practices"},d={unversionedId:"practice/practices",id:"practice/practices",isDocsHomePage:!1,title:"Diving In to DevOps Practices",description:"_",source:"@site/docs/practice/practices.md",sourceDirName:"practice",slug:"/practice/practices",permalink:"/devops/docs/practice/practices",editUrl:"https://github.com/snohio/devops/docs/practice/practices.md",version:"current",sidebar_label:"DevOps Practices",frontMatter:{id:"practices",title:"Diving In to DevOps Practices",sidebar_label:"DevOps Practices"},sidebar:"devopsJourney",previous:{title:"Building my DevOps Team",permalink:"/devops/docs/practice/team"},next:{title:"Creating our own API",permalink:"/devops/docs/practice/doesapi"}},u=[{value:"Practices and Principles Employed",id:"practices-and-principles-employed",children:[{value:"Kanban / Agile: Iterations, iterations, iterations",id:"kanban--agile-iterations-iterations-iterations",children:[]},{value:"Stand-ups, Demos, Retrospectives, Post Mortems",id:"stand-ups-demos-retrospectives-post-mortems",children:[]},{value:"ChatOps (alerts, notifications, visibility)",id:"chatops-alerts-notifications-visibility",children:[]},{value:"<em>Everything</em> as Code (in GitHub)",id:"everything-as-code-in-github",children:[]},{value:"Failure is always an Option",id:"failure-is-always-an-option",children:[]}]}],p={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("img",{src:"../../img/practice/cliff_diving.jpg",alt:"Diving In",align:"right"}),(0,i.kt)("h2",{id:"practices-and-principles-employed"},"Practices and Principles Employed"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Here is what we did and what worked what didn't.")),(0,i.kt)("h3",{id:"kanban--agile-iterations-iterations-iterations"},"Kanban / Agile: Iterations, iterations, iterations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Went from SwiftKanban to CA Agile (Rally) to GitHub."),(0,i.kt)("li",{parentName:"ul"},"Eventually landed on our own form of Scrumban on GitHub.")),(0,i.kt)("h3",{id:"stand-ups-demos-retrospectives-post-mortems"},"Stand-ups, Demos, Retrospectives, Post Mortems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some of this is easier in theory than practice."),(0,i.kt)("li",{parentName:"ul"},"This is the stuff that really takes a commitment to perform.")),(0,i.kt)("h3",{id:"chatops-alerts-notifications-visibility"},"ChatOps (alerts, notifications, visibility)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created a number of integrations in ",(0,i.kt)("em",{parentName:"li"},"Flowdock"),"."),(0,i.kt)("li",{parentName:"ul"},"It's hard for some to embrace.")),(0,i.kt)("h3",{id:"everything-as-code-in-github"},(0,i.kt)("em",{parentName:"h3"},"Everything")," as Code (in GitHub)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation, Notes, Issues, Projects.")),(0,i.kt)("h3",{id:"failure-is-always-an-option"},"Failure is always an Option"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Know when to pivot!"),(0,i.kt)("li",{parentName:"ul"},"Learn from it as a group (PIR)"),(0,i.kt)("li",{parentName:"ul"},"Self Healing failure story.")),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(r.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"expand",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"div"},"  These are some of the DevOps Practices and Principles that we employed. All were not without their challenges and I'd like to go through some of them. "),(0,i.kt)("h3",{parentName:"div",id:"kanban"},"Kanban"),(0,i.kt)("p",{parentName:"div"},"  Most of us were familar enough with Kanban and Agile and brought that into our practices for Chef. As a company we were embracing Agile, although like any good organization, modified it to fit the higher ups ideas of Agile. It was loosely based on the Scaled Agile Framework. We moved from Swift Kanban to CA's Rally. We had a scrum master assigned to us and those early days of figuring out what we needed to do really benefitted by writing solid Capabilities, Features and User Stories. One of the difficulties with strict Agile is that our engineer and some ops folks had a tough time using it for daily work. It is a real culture shift for someone who is used to doing what is needed when it is needed and planning is difficult. Another issue with Agile is that you really have to work to get operations tasks planned for, especially break fix. We had an 80% rule which allowed for some flexibility as well as made sure to plan for those on call to be unavailable during their week. "),(0,i.kt)("p",{parentName:"div"},"  As time went on, we lost our scrum master and had split up those duties among ourselves. This required folks that didn't generally do planning and writing user stories and owning features to add that into the work schedule. We were also putting more and more work into Github so after a lot of trial and error, we comfortably landed on just using GitHub for issues and Project kanban tracking. We were pretty much practicing Scrumban which is exactly what it sounds like - Scrum with Kanban. "),(0,i.kt)("h3",{parentName:"div",id:"scrumban--agile-stuffs"},"Scrumban / Agile Stuffs"),(0,i.kt)("p",{parentName:"div"},'  One of the things that was important (and is with Agile) is Iterations. Working in small amounts, getting a little bit done and not being afraid to change the things that aren\'t working. So along with the tools that we used, we also put into practice daily stand ups. This took a variaty of forms and methods, we did it daily on the phone to a couple of times a week and sprinkled in some "virtual stand ups" using Flowdock, our Chat tool. This was something I picked up from a DevOpsDays Open Spaces discussion. Regardless of the approach, just keep doing it! Over and over and over. That goes for any of these practices and principles. They call it a practice for a reason, because you have to do it over and over again.'),(0,i.kt)("p",{parentName:"div"},"  Along with those Stand Ups we did weekly Demos to showcase our work. It gave everyone a chance to show off what they did and hopefully share some lessons learned. This also is a great tool to provide visibility and accountability. It also was a great place to have corrections and spawned ideas for continued enhancements. Sometimes we'd come away from demos with 3 or 4 new ideas to continuously improve the products. We later offered to have these 100% opened to the community as it helped us show our internal customers the work we were doing."),(0,i.kt)("p",{parentName:"div"},"  Lastly the Post Mortems which we preffered to call them Blameless Post Incident Reviews. We typically would only do these as needed and tried to find a non-biased person on our team or another to host them. We stuck with a form created internally to gather the information and set the plan forward. The most important thing is to keep them blameless."),(0,i.kt)("h3",{parentName:"div",id:"chatops"},"ChatOps"),(0,i.kt)("p",{parentName:"div"},'  One of my favorite practices that I picked up at DevOpsDays was ChatOps. Personally I have always been a "social Internet" user - even before the Internet. I ran a BBS specifically so folks could chat with the "SysOp" and in college I spend many hours in the lab on a telnet-based chat forum and even running an IRC server on our Vax. So it was pretty natural to find it so appealing. There were other folks at our organization starting use Flowdock - also a CA tool - and we jumped on that right away. We created some integrations with Rally, GitHub and our monitoring platform.'),(0,i.kt)("p",{parentName:"div"},'  ChatOps was actually one of our most successful practices. Some folks on the team struggled with communications, but having that open to them allowed them to be who they were. It made for more transparent conversations and I always encouraged folks to "ask in public". It greatly reduced my email, or at least the ones I cared about. Flowdock became the center to our Chef community and we ended up created a number of custom Bot integrations for Chef, our pipeline and support functions. One of the few struggles was getting everyone to participate - at least a little bit. Our virtual stand ups helped with that to some degree.'),(0,i.kt)("h3",{parentName:"div",id:"everything-as-code"},"Everything as Code"),(0,i.kt)("p",{parentName:"div"},'  Everything as Code is one of my newer favorite practices. It was something that I didn\'t really learn until I was about 3 years into leading the team. One of the challenges with DevOps - especially for former server operations folks such as myself - is that they are just not comfortable with source code management. I have been scripting stuff for as long as I have been in IT. Even back in college, I had a job at the first public Internet Service Providers in Cincinnati. I would write code using a tool called "Expect" that would log in to systems and pull information from them that we used for billing and other things. I would always write code and save it to some network storage and then test and execute it from there. Using a source code tool was never a part of my culture.  It was suggested to me that we start doing all of our documentation in markdown because we kept changing wiki platforms and it was a matter of rewriting content. Markdown would become our last content format. That process opened my eyes to all that markdown could be used for. I started putting all of my notes into a GitHub repo using Visual Studio Code - moving them from One Note. Public documentation was put together in markdown and wrapped into a GitHub pages form using Docusaurus. Issues and issue templates were created - which drove GitHub usage as we transitioned from Rally to GitHub projects. My world became everything as code and I started living life as a developer. Still to this day, presentations like this one are done with markdown (with react.js extensions) using Docusaurus to generate the content you see here! It really helped me learn and embrace the DEV in DevOps.'),(0,i.kt)("h3",{parentName:"div",id:"failure-is-an-option"},"Failure ",(0,i.kt)("em",{parentName:"h3"},"is")," an option"),(0,i.kt)("p",{parentName:"div"},"  It was important for us to remember - to embed in our new DevOps culture - that failure is always an option. Without failures, we cannot make improvements. What was critical to the success was that we learned from those failures and changed from the path. The sooner you can do that, the less time is wasted. This is one of the critical pieces of the Demos, Retrospectives, PIRs, everything we just did above."),(0,i.kt)("p",{parentName:"div"},'  Story time! One of the times that we failed to fail fast enough was when we were working on a large self-healing project. Our team had gotten larger with more developers and it was a period that we were not communicating the best - especially with standups and demos. Our engineer at the time missed a few and we just were not as good about doing them on a scheduled basis - mostly because we were all doing a lot of work. The developers started going down a path with a simple principle in mind - that they were going to basically create a "watchdog" service that ran on the systems that would then run commands locally to fix the broken Chef agents. About 6 months of effort went into the design both on the watchdog agent as well as an API and database functions built around it. During a demo when it was completed, our engineer flatly stated that it would not pass a security review and getting that to pass would be a monumental effort. It was something that was taken for granted that it was doable but really never discussed in preplanning. Eventually about 50% of the work was scrapped. There were a LOT of take aways from that effort and while we did lose about 3 months of work, we learned some very valuable lessons as a team. In the end we had a better product to support our Chef Clients.'),"  ")))))}h.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);