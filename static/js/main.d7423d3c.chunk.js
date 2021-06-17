(this.webpackJsonppasswordreset2005=this.webpackJsonppasswordreset2005||[]).push([[0],{33:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),c=s(17),n=s.n(c),i=s(7),l=s(2),d=s(4),o=s(0),m=r.a.createContext(),j=m,u=function(e){var t=e.children,s=Object(a.useState)(""),r=Object(d.a)(s,2),c=r[0],n=r[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),j=l[0],u=l[1];return Object(o.jsx)(m.Provider,{value:{username:c,setUserName:n,useremail:j,setUserEmail:u},children:t})},b=s(8),p=s.n(b),h=s(10);var O=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(d.a)(s,2),c=r[0],n=r[1],m=Object(l.f)(),j=function(){var e=Object(h.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/forgotpassword",{method:"POST",body:JSON.stringify({email:c}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,u(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(s){200===s.status?(t.classList.remove("hidden"),setTimeout((function(){t.classList.add("hidden"),m.push("/")}),4e3)):(e.classList.remove("hidden"),setTimeout((function(){e.classList.add("hidden")}),1e3))};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("span",{className:"title",children:"Forgot Password?"}),Object(o.jsx)("div",{className:"forgot-img",children:Object(o.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"forgotpassword-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Invalid email. Please try again."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"Please check your email to verify if it's really you."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:j,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return n(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/",className:"link",children:"Sign in"})})]})]})};function x(e){Object(l.f)();var t=Object(a.useState)(""),s=Object(d.a)(t,2),r=(s[0],s[1]),c=Object(a.useState)(""),n=Object(d.a)(c,2),m=(n[0],n[1]),j=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=Object(l.g)().id;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:u}),Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Update Password"}),Object(o.jsx)("div",{className:"reset-img",children:Object(o.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"reset-password-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Password do not match. Please try again."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"You have successfully registered your new password."})}),Object(o.jsx)("p",{className:"hidden unauthorized",children:Object(o.jsx)("small",{className:"text-danger",children:"Unauthorized Access. Verify your email again."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:j,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputPass1",children:"New Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPass1","aria-describedby":"passHelp",required:!0,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPass2",children:"Repeat Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPass2","aria-describedby":"passHelp",required:!0,onChange:function(e){return m(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/forgot-password",className:"link",children:"Forgot Password"})})]})]})]})}var g=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(d.a)(s,2),c=r[0],n=r[1],m=Object(a.useState)(""),j=Object(d.a)(m,2),u=j[0],b=j[1],O=Object(a.useState)(""),x=Object(d.a)(O,2),g=x[0],v=x[1],f=Object(l.f)(),N=function(){var e=Object(h.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/register",{method:"POST",body:JSON.stringify({fullname:c,email:u,password:g}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,y(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(s){200===s.status?(e.classList.add("hidden"),t.classList.remove("hidden"),setTimeout((function(){f.push("/")}),1500)):(e.classList.remove("hidden"),t.classList.add("hidden"))};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Sign-up"}),Object(o.jsx)("div",{className:"welcome-img",children:Object(o.jsx)("img",{src:"/imgs/welcome.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"User already registered. You may try logging in."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"Successfully registered."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:N,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputFullName",children:"Full Name"}),Object(o.jsx)("input",{type:"text",className:"form-control my-2",id:"inputFullName","aria-describedby":"fullName",required:!0,onChange:function(e){return n(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Register"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/",className:"link",children:"Login"})})]})]})};var v=function(){var e=document.querySelector(".invalid"),t=Object(a.useContext)(j),s=Object(a.useState)(""),r=Object(d.a)(s,2),c=r[0],n=r[1],m=Object(a.useState)(""),u=Object(d.a)(m,2),b=u[0],O=u[1],x=Object(l.f)(),g=function(){var e=Object(h.a)(p.a.mark((function e(s){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/login",{method:"POST",body:JSON.stringify({email:c,password:b}),headers:{"Content-type":"application/json"}});case 3:return 200===(a=e.sent).status&&x.push("/dashboard"),e.next=7,a.json();case 7:r=e.sent,t.setUserName(r.name),t.setUserEmail(r.email),v(a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(t){200===t.status?e.classList.add("hidden"):e.classList.remove("hidden")};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Sign-in"}),Object(o.jsx)("div",{className:"login-img",children:Object(o.jsx)("img",{src:"/imgs/hello.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Invalid username or password"})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:g,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Login"})]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(i.b,{to:"/forgot-password",className:"link",children:"Forgot Password"}),Object(o.jsx)(i.b,{to:"/register",className:"link",children:"Sign up"})]})]})]})};var f=function(){var e=Object(l.f)(),t=Object(a.useContext)(j),s=t.username,r=t.useremail;""!==s&&(localStorage.setItem("username",s),localStorage.setItem("useremail",r));var c=localStorage.getItem("username"),n=localStorage.getItem("useremail");return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("span",{className:"navbar-brand",children:["Welcome, ",c]}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item active ",children:Object(o.jsxs)("span",{className:"nav-link",children:[" ",n]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"nav-link text-white btn btn-danger",id:"signout",onClick:function(){localStorage.setItem("username","Guest User"),localStorage.setItem("useremail",""),e.push("/")},children:"Sign out"})})]})})]})})};var N=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"text-center mt-5 text-white",children:[Object(o.jsx)("h1",{className:"h2 text-white",children:"404"}),Object(o.jsx)("p",{className:"h3 text-white",children:"Page Not Found!"})]})})};var y=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{className:"container px-0",children:Object(o.jsx)(u,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/register",component:g,exact:!0}),Object(o.jsx)(l.a,{path:"/dashboard",component:f,exact:!0}),Object(o.jsx)(l.a,{path:"/forgot-password",component:O,exact:!0}),Object(o.jsx)(l.a,{path:"/reset-password/:randomstring",component:x,exact:!0}),Object(o.jsx)(l.a,{path:"/",component:v,exact:!0}),Object(o.jsx)(l.a,{path:"*",component:N})]})})})})},w=(s(33),s(34),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),r(e),c(e),n(e)}))});n.a.render(Object(o.jsx)(y,{}),document.getElementById("root")),w()}},[[35,1,2]]]);
//# sourceMappingURL=main.d7423d3c.chunk.js.map