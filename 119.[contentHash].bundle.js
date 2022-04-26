"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[119],{9119:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(2318),o=n(7882),i=n(7294),r=n(4933),s=n(951),c=n(1907),l=n(3492),p=n(9912),d=n(1724),m=n(7294);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,o,i=[],r=!0,s=!1;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){s=!0,o=e}finally{try{r||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=function(e){var t=e.name,n=e.dates,a=e.pic,g=e.short_desc,h=e.long_desc,f=e.link,b=e.languages,v=e.tools,y=e.experience,S=e.subjects,_=e.focus,j=e.school_proj,w=e.code_snippet,E=e.partner,k=(0,o.Z)(),A=u((0,i.useState)(!1),2),C=A[0],x=A[1];return m.createElement("div",{className:k.root},m.createElement(r.Z,{className:k.card},m.createElement("div",{className:k.cardHeader},m.createElement(d.H1,null,t),m.createElement(d.H2,null,n)),m.createElement(s.Z,{component:"img",height:"200rem",width:"100%",image:a,alt:t}),m.createElement("div",{className:"bg-primary color-text padding_tb"},m.createElement(d.xv,{className:"bold"},g),m.createElement(d.xv,null,b?"Languages: ".concat(b.join(", ")):""),m.createElement(d.xv,null,v?"Tools: ".concat(v.join(", ")):""),m.createElement(d.xv,null,S?"Subjects: ".concat(S.join(", ")):"")),m.createElement(c.Z,{disableSpacing:!0},m.createElement("div",{className:"bg-primary"},m.createElement(d.pb,{expand:C,onClick:function(){return x(!C)},"aria-expanded":C,"aria-label":"show more"},m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",stroke:"#26A641"},m.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),m.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}))))),m.createElement("div",{className:"bg-primary color-text"},m.createElement(l.Z,{in:C,timeout:"auto",unmountOnExit:!0},m.createElement(p.Z,null,m.createElement(s.Z,{component:"img",image:w,alt:"Code Snippet for {name}"}),m.createElement("div",{className:"padding_tb"},m.createElement(d.xv,null,h),m.createElement(d.xv,null,y?"Experience: ".concat(y):""),m.createElement(d.xv,null,_?"Focus: ".concat(_.join(", ")):""),m.createElement(d.xv,null,j?"School Project":"Personal Project"),m.createElement(d.xv,null,E.boolean?m.createElement("a",{href:E.link,target:"_blank",rel:"noreferrer"},E.name):"")),m.createElement("div",{className:"center"},m.createElement(d.ZP,{className:k.customButton,href:f,target:"_blank",rel:"noreferrer"},m.createElement(d.xv,null,"View Project"))))))))},f=n.p+"headphones_screenshot.06d2d9a307f1fd4b0d9f5a2b72a05bf1.webp",b=n.p+"headphones_snippet.e4498867c1f078ee96da38ee9c3f56ba.jpg",v=n.p+"smiling_school_screenshot.5d9a34c32aa2d922f8539d62d779cf00.webp",y=n.p+"smiling_school_snippet.2dd5f5bfca1c1b32d0f4e2b99ec68dbe.jpg",S=n.p+"twilight_bark_screenshot.ed6560d56c80ff0d724fc644ff30b058.webp",_=n.p+"twilight_bark_snippet.c0816a95cd6112c61ef55b0a64f30268.jpg",j=[{name:"Holberton Headphones",dates:"8/25/21 - 9/3/21",pic:f,short_desc:"Recreation of fully-responsive static frontend",long_desc:"7-day exact replication of Figma design at 3 sizes using pure CSS",link:"https://github.com/RLewis11769/holberton-headphones",languages:["CSS","HTML"],tools:["None"],experience:"Less than 1 month of CSS",subjects:["Frontend Web Development","Figma Replica","Static Content","Responsiveness","Accessibility"],focus:["Accessibility","Accuracy","Basics"],code_snippet:b,school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Smiling School - JavaScript",dates:"10/4/21 - 10/12/21",pic:v,short_desc:"Recreation of fully-responsive dynamic frontend",long_desc:"7-day exact replication of Figma design with gifs. All data loaded from 4 APIs. This specific portion of the project added onto an existing Bootstrap-based static content replication.",link:"https://github.com/RLewis11769/holberton-smiling-school-javascript",languages:["JavaScript","HTML","CSS"],tools:["Bootstrap","jQuery","Ajax","Slick Carousel"],experience:"Less than 3 months of frontend development",subjects:["Frontend Web Development","Figma Replica","Dynamic Content","API","Loading Animation","Responsiveness","Accessibility"],focus:["Reusability","Organization","Optimization"],code_snippet:y,school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Waves Recording Studio",dates:"10/14/21 - 10/25/21",pic:n.p+"waves_screenshot.59cf06876d3f7b36e7a7d3d83e0787ba.webp",short_desc:"Custom dynamic frontend for recording studio utilizing the Spotify API",long_desc:'11-day custom frontend from design to implementation based on "waves" as a prompt. All data loaded from 2 Spotify API endpoints using Client Credentials authorization.',link:"https://github.com/RLewis11769/waves_custom-frontend",languages:["JavaScript","HTML","CSS"],tools:["Bootstrap","jQuery","jQuery Validation (for forms)","Slick (for carousel)","Spotify API"],experience:"3 months of frontend development",subjects:["Frontend Web Development","Custom Design","Dynamic Content","APIs","Asynchronous Programming","Final Project","Responsiveness","Accessibility"],focus:["Organization","Planning","Design","Spotify API","Client Credentials authorization"],code_snippet:n.p+"waves_snippet.1a255029acf3e30208bce778ebcc7cdb.jpg",school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Twilight Bark Chat",dates:"2/15/22 - 2/27/22",pic:S,short_desc:"Async WebSocket chat application including full user authentication",long_desc:'13-day custom full site from design to implementation based on "outside" as a prompt. Full custom user authentication, from signup to change user nameto reset password including 401 error checking. Authorized users can create and join any chat room with messages updated in realtime as well as added to database.',link:"https://github.com/RLewis11769/outside-dogs",languages:["Python","JavaScript","HTML","CSS"],tools:["Django","Tailwind CSS","Redis","AsyncWebsocketConsumer","Vanilla JavaScript DOM manipulation","SQLite3"],experience:"3 months of backend development - no websocket experience",subjects:["Backend Web Development","Frontend Web Development","Custom Design","Custom Authentication","Asynchronous Programming","Channel consumer","Client-side message parsing","Databases","APIs","Responsiveness","Accessibility"],focus:["Organization","Planning","Design","Authentication","Security","Web sockets","Signals","Configuration"],code_snippet:_,school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"VIBER",dates:"4/15/22 - 4/16/22",pic:n.p+"viber_screenshot.00a52480eb8957db0aac4403d7683fdd.png",short_desc:"24-hour hackathon project to match job applicants and companies based on culture",long_desc:"",link:"https://github.com/RLewis11769/outside-dogs",languages:["JavaScript","HTML","CSS"],tools:["jQuery","Vanilla JavaScript DOM manipulation"],experience:"~10 months of frontend development",subjects:["Frontend Web Development","Hackathon",""],focus:["Goal","MVP","Creativity","Organization","Planning"],code_snippet:n.p+"viber_snippet.b89e0297c41b75c9596c4700bf2110a0.jpg",school_proj:!1,partner:{boolean:!0,name:"",link:""}}],w=n(7294);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function k(){var e=(0,o.Z)();return w.createElement("section",{id:"projects"},w.createElement(a.Z,{variant:"h1",className:e.title},"Highlighted Projects"),w.createElement("div",{className:"cols"},j.map((function(e,t){return w.createElement(h,E({key:t},e))}))))}}}]);