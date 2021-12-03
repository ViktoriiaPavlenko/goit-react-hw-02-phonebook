(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__2F21w",input:"Filter_input__1xMf1"}},2:function(t,e,n){t.exports={list:"ContactsList_list__ndelD",item:"ContactsList_item__26BIL",info:"ContactsList_info__6VHcQ",button:"ContactsList_button__ovIZr",warning:"ContactsList_warning__36FrS"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),o=(n(18),n(13)),i=n(5),l=n(6),u=n(8),d=n(7),b=n(4),m=n(12),h=n(3),j=n.n(h),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=Object(b.a)(),t.telId=Object(b.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,htmlFor:this.nameId,children:["Name",Object(f.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,id:this.nameId})]}),Object(f.jsxs)("label",{className:j.a.label,htmlFor:this.telId,children:["Number",Object(f.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,id:this.telId})]}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=p,O=n(2),_=n.n(O),x=function(t){var e=t.contact,n=t.onDeleteContact;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("span",{className:_.a.info,children:[e.name,": ",e.number]}),Object(f.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})},v=function(t){var e=t.contacts,n=t.onDeleteContact;return 0===e.length?Object(f.jsx)("div",{className:_.a.warning,children:"You have no contacts!"}):Object(f.jsx)("ul",{className:_.a.list,children:e.map((function(t){return Object(f.jsx)("li",{className:_.a.item,children:Object(f.jsx)(x,{contact:t,onDeleteContact:n})},t.id)}))})},g=n(10),F=n.n(g),N=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:F.a.label,children:["Find contacts",Object(f.jsx)("input",{className:F.a.input,type:"text",value:e,onChange:n})]})},w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,s={id:Object(b.a)(),name:n,number:a};c.find((function(t){return s.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(s.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[s].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(C,{onSubmit:this.addNewContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(N,{value:t,onChange:this.handleChangeFilter}),Object(f.jsx)(v,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),y=w;n(20);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactsForm_form___Fb-7",label:"ContactsForm_label__FJr-7",input:"ContactsForm_input__2tj4T",button:"ContactsForm_button__20rBt"}}},[[21,1,2]]]);
//# sourceMappingURL=main.337cc31d.chunk.js.map