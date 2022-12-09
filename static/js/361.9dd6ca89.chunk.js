"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361],{6666:function(n,e,t){t.d(e,{$0:function(){return l},NZ:function(){return h},V1:function(){return u},W2:function(){return s}});var r,o,a,i,c=t(168),d=t(4934),s=d.Z.div(r||(r=(0,c.Z)(["\n  background-color: #daffd7;\n  min-height: 100vh;\n  overflow-y: auto;\n"]))),l=d.Z.section(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding-top: 25px;\n  padding-bottom: 25px;\n"]))),u=d.Z.h1(a||(a=(0,c.Z)(["\n  margin-bottom: 25px;\n"]))),h=d.Z.h2(i||(i=(0,c.Z)(["\n  margin-bottom: 25px;\n"])))},5361:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,a,i,c,d,s,l,u,h,x=t(2791),p=t(9434),m=t(4270),f=t(885),g=t(2286),b=t(4719),Z=t(168),j=t(4934),v=j.Z.form(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=j.Z.label(o||(o=(0,Z.Z)(["\n  margin-bottom: 10px;\n"]))),w=j.Z.input(a||(a=(0,Z.Z)(["\n  margin-bottom: 10px;\n  width: 200px;\n  height: 25px;\n\n  border-radius: 3px;\n  outline: 1px solid #c22f2f;\n"]))),k=j.Z.button(i||(i=(0,Z.Z)(["\n  width: 120px;\n  height: 30px;\n  background-color: #ffe087;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  box-shadow: 0 0 4px 0px;\n\n  :hover,\n  :focus {\n    background-color: #fdd358;\n  }\n\n  :active {\n    box-shadow: inset 0 0 4px 0px;\n  }\n"]))),F=t(3329),A=function(){var n=(0,x.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,x.useState)(""),a=(0,f.Z)(o,2),i=a[0],c=a[1],d=(0,p.v9)(g.Af),s=(0,p.I0)(),l=function(n){"name"===n.target.name&&r(n.target.value),"number"===n.target.name&&c(n.target.value)};return(0,F.jsxs)(v,{onSubmit:function(n){n.preventDefault();var e=n.target,r={name:t,number:i},o=d.filter((function(n){return n.name===t}));0===o.length&&s((0,b.uK)(r)),0!==o.length&&window.alert("You have already this contact in your list"),e.reset()},children:[(0,F.jsx)(y,{htmlFor:"contactName",children:"Write down a name"}),(0,F.jsx)(w,{id:"contactName",type:"text",name:"name",onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"e. g., John Smith",required:!0}),(0,F.jsx)(y,{htmlFor:"contactTel",children:"Write down a phone number"}),(0,F.jsx)(w,{id:"contactTel",type:"tel",name:"number",onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,F.jsx)(k,{type:"submit",children:"Add contact"})]})},C=t(6895),N=j.Z.label(c||(c=(0,Z.Z)(["\n  margin-bottom: 10px;\n"]))),I=j.Z.input(d||(d=(0,Z.Z)(["\n  margin-bottom: 10px;\n  width: 200px;\n  height: 25px;\n\n  border-radius: 3px;\n  outline: 1px solid #c22f2f;\n\n  margin-bottom: 20px;\n"]))),T=function(){var n=(0,p.I0)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(N,{htmlFor:"contactFilter",children:"Find contact by name"}),(0,F.jsx)(I,{id:"contactFilter",name:"filter",type:"text",onChange:function(e){n((0,C.T)(e.currentTarget.value))}})]})},q=j.Z.p(s||(s=(0,Z.Z)(["\n  margin-bottom: 10px;\n  margin-right: 20px;\n"]))),z=j.Z.button(l||(l=(0,Z.Z)(["\n  width: 120px;\n  height: 20px;\n  background-color: #ffe087;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  box-shadow: 0 0 4px 0px;\n\n  :hover,\n  :focus {\n    background-color: #fdd358;\n  }\n"]))),S=function(n){var e=(0,p.I0)(),t=n.contact,r=t.name,o=t.number,a=t.id;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(q,{children:[r,": ",o]}),(0,F.jsx)(z,{type:"button",onClick:function(){return e((0,b.GK)(a))},children:"Delete contact"})]})},W=j.Z.li(u||(u=(0,Z.Z)(["\n  display: flex;\n  align-items: baseline;\n\n  :nth-of-type(n + 2) {\n    margin-top: 15px;\n  }\n"]))),$=function(){var n=(0,p.v9)(g.Af),e=(0,p.v9)(g.DI);return(0,F.jsx)("ul",{children:n&&e.map((function(n){return(0,F.jsx)(W,{children:(0,F.jsx)(S,{contact:n})},n.id)}))})},_=t(6666),D=j.Z.p(h||(h=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function P(){var n=(0,p.I0)(),e=(0,p.v9)(g.xU),t=(0,p.v9)(g.Af);return(0,x.useEffect)((function(){n((0,b.yF)())}),[n]),(0,F.jsxs)(_.W2,{children:[(0,F.jsx)(m.q,{children:(0,F.jsx)("title",{children:"Your contacts"})}),(0,F.jsx)("div",{children:e&&"Request in progress..."}),(0,F.jsxs)(_.$0,{children:[(0,F.jsx)(_.V1,{children:"Phonebook"}),(0,F.jsx)(_.NZ,{children:"Adding contact"}),(0,F.jsx)(A,{})]}),(0,F.jsxs)(_.$0,{children:[(0,F.jsx)(_.NZ,{children:"Your noted contacts"}),t.length>0?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(T,{}),(0,F.jsx)($,{})]}):(0,F.jsx)(D,{children:"There are no contacts. Please add some."}),e&&(0,F.jsx)("b",{children:"Loading contacts..."})]})]})}}}]);
//# sourceMappingURL=361.9dd6ca89.chunk.js.map