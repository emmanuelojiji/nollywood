(this["webpackJsonpnollywood-2"]=this["webpackJsonpnollywood-2"]||[]).push([[0],[,,,,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),n=i(4),s=i.n(n),o=(i(9),i(2)),r=i.p+"static/media/logo.0f98ea67.svg",d=(i(10),i(0)),l=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{src:r,className:"logo",alt:"logo"}),Object(d.jsx)("button",{className:"header-button",children:"BUTTON"})]})},u=(i(12),i(13),function(e){return Object(d.jsx)("a",{className:"category-button ".concat(e.addActiveClass),onClick:e.onClick,children:e.title})}),g=function(e){var t=e.isFunnySelected,i=e.setIsFunnySelected,c=e.isSadSelected,a=e.setIsSadSelected,n=e.isCrazySelected,s=e.setIsCrazySelected;return Object(d.jsxs)("div",{className:"category-container",children:[Object(d.jsx)(u,{title:"Funny",onClick:function(){i(!t)},addActiveClass:t&&"active"}),Object(d.jsx)(u,{title:"Sad",onClick:function(){a(!c)},addActiveClass:c&&"active"}),Object(d.jsx)(u,{title:"Crazy",onClick:function(){s(!n)},addActiveClass:n&&"active"})]})},f=(i(14),i(15),function(e){return Object(d.jsx)("div",{className:"card",style:{backgroundImage:"url('".concat(e.image,"')")},children:Object(d.jsx)("h3",{children:e.title})})}),y=i.p+"static/media/osita_1.c2dfa790.gif",j=i.p+"static/media/osita_2.d15236e2.gif",m=i.p+"static/media/osita_3.e82c9b86.gif",p=i.p+"static/media/osita_4.96f4f6e7.gif",b=i.p+"static/media/patience_1.84de743c.gif",h=i.p+"static/media/patience_2.8a362c0d.gif",k=i.p+"static/media/patience_3.1a8effeb.gif",O=i.p+"static/media/faint.ba0abc48.gif",w=i.p+"static/media/omg.32bc83a9.gif",x=[{title:"Why Are you Running",image:i.p+"static/media/running_1.cf690fcd.gif",keywords:["funke","akindele","running","why are you running"],topPick:!1,category:["funny"]},{title:"Calculating Money",image:y,keywords:["osita","calculating","money"],topPick:!0,category:[""]},{title:"Buttoning Shirt",image:j,keywords:["osita","buttoning","shirt"],topPick:!0,category:[""]},{title:"Fainting",image:O,keywords:["faint","phone"],topPick:!1,category:["funny"]},{title:"OMG WOW",image:w,keywords:["omg","wow","oh my god"],topPick:!1,category:["funny"]},{title:"Attention!",image:m,keywords:["sad","thinking","annoyed"],topPick:!1,category:[]},{id:3,title:"Sad Paw Paw",image:p,keywords:["sad","thinking","annoyed"],topPick:!1,category:["sad"]},{title:"Hei!",image:b,keywords:["shout","shouting","hei"],topPick:!1,category:["sad"]},{id:3,title:"Evil stare",image:h,keywords:["stare","evil"],topPick:!1,category:["funny"]},{id:3,title:"\ud83d\ude01\ud83d\ude2c\ud83d\ude10",image:k,keywords:["stare","evil","disgust"],topPick:!1,category:["funny"]},{title:"Slipper Chase",image:i.p+"static/media/chase.a4516c54.gif",keywords:["chase","slipper","running","run"],topPick:!1,category:["funny"]},{title:"Is It By Force?",image:i.p+"static/media/jenifa-1.b4438497.gif",keywords:[],topPick:!1,category:[]},{id:3,title:"Holding Knife",image:i.p+"static/media/holding_knife_1.68757424.gif",keywords:["omg","knife","crazy"],topPick:!1,category:["crazy"]},{id:3,title:"Move Abeg",image:i.p+"static/media/push_1.927eb52a.gif",keywords:["move","push"],topPick:!1,category:["funny"]},{id:3,title:"Roll Eyes",image:i.p+"static/media/roll_eyes_1.2cffec21.gif",keywords:["omg","wow","oh my god"],topPick:!1,category:[]},{id:3,title:"Flying Stone",image:i.p+"static/media/flying_stone.bf4e4953.gif",keywords:["omg","wow","oh my god"],topPick:!1,category:["crazy"]}],S=function(e){var t=e.isFunnySelected,i=e.isSadSelected,c=e.isCrazySelected,a=x.filter((function(e){return!0===e.topPick})),n=x.filter((function(e){return e.category.includes("funny")})),s=x.filter((function(e){return e.category.includes("sad")})),o=x.filter((function(e){return e.category.includes("crazy")}));return Object(d.jsxs)("div",{className:"feed",children:[function(){if(!t&&!i&&!c)return Object(d.jsxs)("div",{className:"popular-container",children:[Object(d.jsxs)("div",{className:"icon-heading-wrap",children:[Object(d.jsx)("i",{className:"fas fa-fire"}),Object(d.jsx)("h1",{children:"Popular"})]}),Object(d.jsx)("div",{className:"card-container",children:a.map((function(e){return Object(d.jsx)(f,{title:e.title,image:e.image})}))})]})}(),Object(d.jsxs)("div",{className:"icon-heading-wrap",children:[Object(d.jsx)("i",{class:"fas fa-hashtag"}),Object(d.jsx)("h1",{children:"Feed"})]}),Object(d.jsxs)("div",{className:"card-container",children:[function(){if(!t&&!i&&!c)return x.map((function(e){return Object(d.jsx)(f,{title:e.title,image:e.image})}))}(),t&&n.map((function(e){return Object(d.jsx)(f,{title:e.title,image:e.image})})),i&&s.map((function(e){return Object(d.jsx)(f,{title:e.title,image:e.image})})),c&&o.map((function(e){return Object(d.jsx)(f,{title:e.title,image:e.image})}))]})]})},v=(i(16),function(){return Object(d.jsx)("footer",{children:"Built by Emmanuel Ojiji"})}),C=(i(17),i(18),function(){return Object(d.jsx)("input",{type:"text",placeholder:"Search for a GIF"})});var P=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],n=Object(c.useState)(!1),s=Object(o.a)(n,2),r=s[0],u=s[1],f=Object(c.useState)(!1),y=Object(o.a)(f,2),j=y[0],m=y[1],p=Object(c.useState)(!1),b=Object(o.a)(p,2),h=b[0],k=b[1];return window.onscroll=function(){window.scrollY>300?k(!0):k(!1),console.log(window.scrollY)},Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"header-fixed",children:[Object(d.jsx)(l,{}),Object(d.jsx)(C,{})]}),Object(d.jsx)(g,{isFunnySelected:i,setIsFunnySelected:a,isSadSelected:r,setIsSadSelected:u,isCrazySelected:j,setIsCrazySelected:m}),Object(d.jsx)(S,{isFunnySelected:i,setIsFunnySelected:a,isSadSelected:r,setIsSadSelected:u,isCrazySelected:j,setIsCrazySelected:m}),Object(d.jsx)(v,{}),h&&Object(d.jsx)("button",{class:"scroll-up",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:"Back To Top"})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.48c86f26.chunk.js.map