(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),r=(c(36),c(37),c(8)),a=c(3),s=(c(38),c(10)),i=c.n(s),l=c(1),o=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},j=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r.c,{to:"/",className:o,children:"Home"}),Object(l.jsx)(r.c,{to:"/people","aria-current":"page",className:o,children:"People"})]})})})},d=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(a.b,{})})})]})},u=c(0),b=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},h=c(4),O=c(5),x=c(7),m="https://mate-academy.github.io/react_people-table/api/people.json";function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function f(){return(f=Object(x.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(500).then((function(){return fetch(m)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=c(15),g=c(9);function N(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(h.a)(e,2),n=t[0],r=t[1];null===r?c.delete(n):Array.isArray(r)?(c.delete(n),r.forEach((function(e){c.append(n,e)}))):c.set(n,r)})),c.toString()}var y=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),w=c(27),k=["children","params"],S=function(e){var t=e.children,c=e.params,n=Object(w.a)(e,k),a=Object(r.d)(),s=Object(h.a)(a,1)[0];return Object(l.jsx)(r.b,Object(v.a)(Object(v.a)({to:{search:N(s,c)}},n),{},{children:t}))},L=["16","17","18","19","20"],A=function(){var e=Object(r.d)(),t=Object(h.a)(e,2),c=t[0],n=t[1],a=c.get("sex")||"",s=c.get("query")||"",o=c.getAll("centuries")||[];return Object(l.jsxs)("nav",{className:"panel",children:[Object(l.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(l.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(y).map((function(e){var t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)(S,{params:{sex:n||null},className:i()({"is-active":a===n}),children:c},c)}))}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsxs)("p",{className:"control has-icons-left",children:[Object(l.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:s,onChange:function(e){n(N(c,{query:e.target.value||null}))}}),Object(l.jsx)("span",{className:"icon is-left",children:Object(l.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(l.jsx)("div",{className:"level-left",children:L.map((function(e){return Object(l.jsx)(S,{params:{centuries:o.includes(e)?o.filter((function(t){return e!==t})):[].concat(Object(g.a)(o),[e])},"data-cy":"century",className:i()("button mr-1",{"is-info":o.includes(e)}),children:e},e)}))}),Object(l.jsx)("div",{className:"level-right ml-4",children:Object(l.jsx)(S,{params:{centuries:null},"data-cy":"centuryALL",className:i()("button is-success",{"is-outlined":o.length}),children:"All"})})]})}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsx)(r.b,{to:{search:""},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})},P=(c(40),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function C(e,t,c){var n={sort:null,order:null};return e||(n.sort=c),e&&e!==c&&(n.sort=c),e!==c||t||(n.sort=c,n.order="desc"),n}var F=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),q=function(e){var t=e.person,c=Object(r.d)(),n=Object(h.a)(c,1)[0];return Object(l.jsx)(r.b,{to:{pathname:"../".concat(t.slug),search:n.toString()},className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},E=function(e){var t=e.person,c=t.sex,n=t.born,r=t.died,s=t.fatherName,o=t.motherName,j=t.father,d=t.mother,u=Object(a.r)().slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":t.slug===u}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(q,{person:t})}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:d?Object(l.jsx)(q,{person:d}):o||"-"}),Object(l.jsx)("td",{children:j?Object(l.jsx)(q,{person:j}):s||"-"})]})},_=function(e){var t=e.people,c=Object(r.d)(),n=Object(h.a)(c,1)[0],a=n.get("sort")||"",s=n.get("order")||"";return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object.entries(F).map((function(e){var t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[c,Object(l.jsx)(S,{params:C(a,s,n),children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:i()("fas",{"fa-sort":a!==n,"fa-sort-up":a===n&&!s,"fa-sort-down":a===n&&s})})})})]})},c)})),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(E,{person:e},e.slug)}))})]})};var M=function(){var e=Object(u.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!0),s=Object(h.a)(a,2),i=s[0],o=s[1],j=Object(u.useState)(!1),d=Object(h.a)(j,2),b=d[0],O=d[1],x=Object(r.d)(),m=Object(h.a)(x,1)[0],p=function(e,t){var c=Object(g.a)(e);if(t.sex&&(c=c.filter((function(e){return e.sex===t.sex}))),t.centuries.length&&(c=c.filter((function(e){return t.centuries.includes(Math.ceil(e.born/100).toString())}))),t.query){var n=t.query.toLowerCase();c=c.filter((function(e){var t,c;return e.name.toLowerCase().includes(n)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(n))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(n))}))}if(t.sort){var r=t.order?-1:1;c=Object(g.a)(c).sort((function(e,c){switch(t.sort){case"name":case"sex":return e[t.sort].localeCompare(c[t.sort])*r;case"born":case"died":return(e[t.sort]-c[t.sort])*r;default:return 1}}))}return c}(c,{sort:m.get("sort")||"",order:m.get("order")||"",sex:m.get("sex")||"",query:m.get("query")||"",centuries:m.getAll("centuries")||[]});return Object(u.useEffect)((function(){O(!1),o(!0),function(){return f.apply(this,arguments)}().then((function(e){return n(function(e){return e.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){return O(!0)})).finally((function(){return o(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!i&&Object(l.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(l.jsx)(A,{})}),Object(l.jsx)("div",{className:"column",children:Object(l.jsxs)("div",{className:"box table-container",children:[i&&Object(l.jsx)(P,{}),b&&!i&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!i&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),p.length||i?!!c.length&&!i&&Object(l.jsx)(_,{people:p}):Object(l.jsx)("p",{children:"There are no people matching the current search criteria"})]})})]})})]})},T=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},R=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)(a.e,{children:Object(l.jsx)(a.c,{children:Object(l.jsxs)(a.c,{path:"/",element:Object(l.jsx)(d,{}),children:[Object(l.jsx)(a.c,{index:!0,element:Object(l.jsx)(b,{})}),Object(l.jsx)(a.c,{path:"home",element:Object(l.jsx)(a.a,{to:"/",replace:!0})}),Object(l.jsx)(a.c,{path:"people",children:Object(l.jsx)(a.c,{path:":slug?",element:Object(l.jsx)(M,{})})}),Object(l.jsx)(a.c,{path:"*",element:Object(l.jsx)(T,{})})]})})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(R,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1843e1dd.chunk.js.map