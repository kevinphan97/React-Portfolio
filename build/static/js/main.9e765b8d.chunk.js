(this["webpackJsonpreact-portfolio-challenge"]=this["webpackJsonpreact-portfolio-challenge"]||[]).push([[0],{36:function(e){e.exports=JSON.parse('[{"id":1,"name":"Camping Buddy","image":"../../public/images/Camping-Buddy.png","github":"https://github.com/lucawic/api-pro","live":"https://lucawic.github.io/api-pro/","technologies":"HTML, CSS, Javascript, API, JQuery"},{"id":2,"name":"CarMart","image":"/images/Car-Mart.png","github":"https://github.com/jhlanger/Group-Project-2","live":"https://gp2carmart.herokuapp.com","technologies":"HTML, CSS, Javascript, Express.js, Node.js"},{"id":3,"name":"Password Generator","image":"/images/Password-Generator.png","github":"https://github.com/kevinphan97/Password-Generator","live":"https://kevinphan97.github.io/Password-Generator/","technologies":"HTML, CSS, Javascript"},{"id":4,"name":"Workday Scheduler","image":"/images/Work-Day-Scheduler.png","github":"https://github.com/kevinphan97/Work-Day-Scheduler","live":"https://kevinphan97.github.io/Work-Day-Scheduler/","technologies":"HTML, CSS, Javascript, Local Storage"},{"id":5,"name":"Tech Blog","image":"images/Tech-Blog.png","github":"https://github.com/kevinphan97/My-First-TechBlog","live":"https://fathomless-cliffs-56912.herokuapp.com","technologies":"HTML, CSS, Javascript, MySQL, Express.js"},{"id":6,"name":"Note Taker","image":"/images/Note-Taker.png","github":"https://github.com/kevinphan97/Note-Taker-Express","live":"https://calm-forest-03598.herokuapp.com/","technologies":"HTML, CSS, Javascript, Local Storage, Node.js, Express.js"}]')},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(13),i=n.n(s),r=(n(41),n(17)),o=n(18),l=n(24),j=n(23),h=n(15),b=n(6),m=n(54),d=n(2);var u=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.a,{class:"navbar-container",expand:"lg",bg:"white",sticky:"top",children:[Object(d.jsx)(h.b,{className:"nav-link",to:"/",children:Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Kevin Phan"})})}),Object(d.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(h.b,{to:"/about",children:Object(d.jsx)("div",{class:"nav-font text-light",children:"About"})})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(h.b,{to:"/projects",children:Object(d.jsx)("div",{class:"nav-font text-light",children:"Projects"})})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(h.b,{to:"/contact",children:Object(d.jsx)("div",{class:"nav-font text-light",children:"Contact"})})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(h.b,{to:"/resume",children:Object(d.jsx)("div",{class:"nav-font text-light",children:"Resume"})})})]})]})})};var g=function(){return Object(d.jsxs)("section",{row:!0,nopadding:!0,children:[Object(d.jsx)("h2",{main:!0,center:!0,children:"Kevin Phan"}),Object(d.jsx)("img",{class:"mb-5",id:"personal-img",src:"https://github.com/kevinphan97/React-Portfolio/blob/main/public/images/Me.jpg",alt:"Kevin Phan"}),Object(d.jsx)("p",{children:"I graduated Arizona State University in 2019 with a B.S. in Health Sciences (Pre-Professional). I am currently undergoing a full-stack web developement bootcamp offered by the University of Arizona which is finishing in November of 2021."})]})},p=n(30);var x=function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:e.image,alt:e.name})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("p",{className:"card-title",children:e.name}),Object(d.jsx)("p",{className:"technologies",children:e.technologies}),Object(d.jsxs)("p",{className:"icon-container",children:[Object(d.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(p.b,{size:"3rem"})}),Object(d.jsx)("a",{href:e.live,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(p.a,{size:"3rem"})})]})]})]})},O=n(36);function v(e){return Object(d.jsx)("div",{className:"wrapper",children:e.children})}var f=function(){return Object(d.jsx)("section",{className:"container",children:Object(d.jsx)(v,{id:"card-data",children:O.map((function(e){return Object(d.jsx)(x,{image:e.image,name:e.name,github:e.github,live:e.live,technologies:e.technologies},e.id)}))})})},k=n(7),S=n(3),N=n(16);var w=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(N.a)(e,2),n=t[0],c=t[1],s=n.name,i=n.email,r=n.message,o=Object(a.useState)(""),l=Object(N.a)(o,2),j=l[0],h=l[1];function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);h(t?"":"Please enter a valid email address")}else e.target.length?h(""):h("Please enter a name");j||c(Object(S.a)(Object(S.a)({},n),{},Object(k.a)({},e.target.name,e.target.value)))}return Object(d.jsx)("section",{className:"container",children:Object(d.jsxs)("form",{id:"contact-form",class:"justify-content-center",children:[Object(d.jsxs)("div",{class:"mt-6",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:s,onBlue:b})]}),Object(d.jsxs)("div",{class:"mt-6",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:i,onBlue:b})]}),Object(d.jsxs)("div",{class:"mt-6",children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message"}),Object(d.jsx)("input",{class:"form-control",name:"message",defaultValue:r,onBlue:b,rows:"5"})]}),j&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-message",children:j})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{id:"button",class:"btn btn-primary",type:"submit",onsubmit:function(e){e.preventDefault()},children:"Submit"})})]})})};var y=function(){return Object(d.jsx)("section",{className:"container",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{class:"justify-content-center mt-5",children:[Object(d.jsx)("h2",{className:"header-title",children:"Proficiencies"}),Object(d.jsxs)("p",{children:["HTML, CSS, Javascript, Node.js, Express.js, SQL, Sequelize, ",Object(d.jsx)("br",{}),"NoSQL, MongoDB, Mongoose, Firebase, React.js"]})]}),Object(d.jsx)("a",{href:"https://github.com/kevinphan97/React-Portfolio/raw/main/assets/Kevin%20Phan%20Resume%20(bootcamp).docx",class:"link",children:"Resume"})]})})},P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(h.a,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(u,{})}),Object(d.jsxs)("div",{className:"navigation-container",children:[Object(d.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(b.a,{to:"/about"})}}),Object(d.jsx)(b.b,{path:"/about",component:g}),Object(d.jsx)(b.b,{path:"/projects",component:f}),Object(d.jsx)(b.b,{path:"/contact",component:w}),Object(d.jsx)(b.b,{path:"/resume",component:y})]})]})}}]),n}(a.Component),C=n(25);var M=function(){return Object(d.jsxs)("footer",{className:"footer bg-light fixed-bottom",children:[Object(d.jsx)("a",{href:"https://github.com/kevinphan97",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(C.a,{size:"3rem"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/kevin-phan-a772aa222/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(C.c,{size:"3rem"})}),Object(d.jsx)("a",{href:"https://www.instagram.com/kevinnbphan/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(C.b,{size:"3rem"})})]})};var L=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{}),Object(d.jsx)(M,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.9e765b8d.chunk.js.map