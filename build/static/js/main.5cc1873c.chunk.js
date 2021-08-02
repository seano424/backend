(this["webpackJsonpv2-phonebook"]=this["webpackJsonpv2-phonebook"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(16),o=n.n(a),s=(n(22),n(17)),u=n(5),l=(n(23),n(0));function i(e){var t=e.filter,n=e.handleFilter;return Object(l.jsx)("input",{value:t,onChange:n})}var d={width:"100%",backgroundColor:"#81F7E5",border:"none",fontWeight:"bold",padding:"4px"};function b(e){var t=e.handleSubmit,n=e.newName,r=e.setNewName,c=e.newNumber,a=e.setNewNumber;return Object(l.jsxs)("form",{className:"App-form",onSubmit:t,children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"placeholder-gray-500 placeholder-opacity-25 pl-3 my-1 border-2 rounded border-blue-400 text-gray-900",placeholder:"Enter a Name",value:n,onChange:function(e){return r(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"placeholder-gray-500 placeholder-opacity-25 pl-3 my-1 border-2 rounded border-blue-400 text-gray-900",placeholder:"Enter a Number",value:c,onChange:function(e){return a(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{style:d,className:"uppercase",type:"submit",children:"add to phonebook"})})]})}var j=n(4),h=n.n(j),f="/api/persons",p={getAll:function(){return h.a.get(f).then((function(e){return e.data}))},create:function(e){return h.a.post(f,e).then((function(e){return e.data}))},update:function(e,t){return h.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},destroy:function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}};function m(e){var t=e.persons,n=e.setPersons,r=e.filter;return Object(l.jsx)("ul",{children:t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})).map((function(e){return Object(l.jsxs)("div",{className:"flex justify-between items-center",children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("button",{className:"bg-red-500 py-2 px-4 my-1 rounded",onClick:function(){return r=e.id,n(t.filter((function(e){return e.id!==r}))),void p.destroy(r);var r},children:"delete"})]},e.id)}))})}var x=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(u.a)(a,2),d=o[0],j=o[1],h=Object(r.useState)(""),f=Object(u.a)(h,2),x=f[0],O=f[1],N=Object(r.useState)(""),v=Object(u.a)(N,2),g=v[0],w=v[1];return Object(r.useEffect)((function(){p.getAll().then((function(e){c(e)}))}),[]),console.log(n),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h2",{className:"font-black text-4xl",children:"Phonebook"}),Object(l.jsx)("h3",{className:"text-2xl font-black pt-10",children:"Find a name"}),Object(l.jsx)(i,{filter:g,handleFilter:function(e){w(e.target.value)}}),Object(l.jsx)("h3",{className:"text-2xl font-black pt-10",children:"Enter a new contact"}),Object(l.jsx)(b,{newName:d,setNewName:j,newNumber:x,setNewNumber:O,handleSubmit:function(e){e.preventDefault();var t=n.map((function(e){return e.name.toLowerCase()!==d.toLowerCase()})),r={name:d,number:x};!t.includes(!1)&&p.create(r).then((function(e){c([].concat(Object(s.a)(n),[e])),j(""),O("")}))}}),Object(l.jsx)("h2",{className:"font-black text-3xl pt-10",children:"Numbers"}),Object(l.jsx)(m,{persons:n,setPersons:c,filter:g})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.5cc1873c.chunk.js.map