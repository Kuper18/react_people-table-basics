(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(6),s=c(2),r=(c(31),c(32),c(10)),j=c.n(r),i=(c(33),c(3)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:l,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:l,to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(0),O=(c(35),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.person;return Object(i.jsx)(a.b,{className:j()({"has-text-danger":"f"===t.sex}),to:"/people/".concat(t.slug),children:t.name})},p=function(e){var t=e.people,c=Object(s.r)().personSlug,n=function(e,t){return e?Object(i.jsx)(u,{person:e}):t||"-"};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var a=e.sex,s=e.born,r=e.died,l=e.fatherName,o=e.motherName,b=e.slug,d=t.find((function(e){return e.name===o})),h=t.find((function(e){return e.name===l}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":b===c}),children:[Object(i.jsx)("td",{children:n(e)}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:n(d,o)}),Object(i.jsx)("td",{children:n(h,l)})]},b)}))})]})},m=function(){var e=Object(h.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!0),s=Object(d.a)(a,2),r=s[0],j=s[1],l=Object(h.useState)(!1),o=Object(d.a)(l,2),b=o[0],u=o[1],m=Object(h.useState)(""),f=Object(d.a)(m,2),v=f[0],g=f[1];return Object(h.useEffect)((function(){x().then((function(e){n(e),u(!0),e.length||(g("There are no people on the server"),u(!1))})).catch((function(e){throw g("Something went wrong"),e})).finally((function(){j(!1)}))}),[]),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),v.includes("went wrong")&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:v}),v.includes("no people")&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:v}),b&&Object(i.jsx)(p,{people:c})]})})},f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)(m,{})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(s.c,{path:"/home",element:Object(i.jsx)(s.a,{to:"/"})}),Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.c,{path:":personSlug?",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.04e8df66.chunk.js.map