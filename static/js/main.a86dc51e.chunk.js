(this.webpackJsonpintergra=this.webpackJsonpintergra||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(8),i=n.n(s),c=(n(17),n(7),n(1)),l=n(4),o=n(3),j=n.n(o),u=n(6),h=n(9),b=n(10),m=n(12),d=n(11),O=n(0),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,Object.keys(e.state).filter((function(t){if(""===e.state[t]&&"errors"!==e.state[t])return t}));case 3:t.sent.length>=1?alert("Please fill all fields"):console.log(e.state);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePhoneNumberValidation=function(t){var n=Object(l.a)({},e.state.errors);""===t.target.value?n[t.target.name]="Required":isNaN(t.target.value)?(n[t.target.name]="cant contain letters",e.setState(Object(c.a)({},t.target.name,""))):n[t.target.name]="",e.setState(Object(c.a)({errors:n},t.target.name,t.target.value))},e.handleEmailValidation=function(t){var n=Object(l.a)({},e.state.errors);if("email"===t.target.name){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.target.value)?n.email="":""===t.target.value?n.email="required":(n.email="enter a valid email",e.setState(Object(c.a)({},t.target.name,"")))}e.setState(Object(c.a)({errors:n},t.target.name,t.target.value))},e.handleChange=function(){var t=Object(u.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(l.a)({},e.state.errors),""===n.target.value?a[n.target.name]="Required":a[n.target.name]="",t.next=4,e.setState(Object(c.a)({errors:a},n.target.name,n.target.value));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleReset=function(){e.setState({firstName:"",lastName:"",email:"",phone:"",comments:"",points:""})},e.state={firstName:"",lastName:"",email:"",phone:"",comments:"",points:"",errors:{firstName:"",lastName:"",email:"",phone:"",comments:"",points:""}},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:" Feedback Form "}),Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" First Name "}),Object(O.jsx)("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChange(t)}})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{color:"red"},children:[" ",this.state.errors.firstName," "]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" Last Name "}),Object(O.jsx)("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{color:"red"},children:[" ",this.state.errors.lastName," "]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" Email "}),Object(O.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleEmailValidation(t)}}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{color:"red"},children:[" ",this.state.errors.email]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" Phone Number "}),Object(O.jsx)("input",{type:"text",name:"phone",minLength:"10",maxLength:"10",value:this.state.phone,onChange:function(t){return e.handlePhoneNumberValidation(t)}})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{color:"red"},children:[" ",this.state.errors.phone," "]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" Ratings "}),Object(O.jsx)("input",{type:"radio",name:"points",value:"1",onChange:function(t){return e.handleChange(t)}})," ","1",Object(O.jsx)("input",{type:"radio",name:"points",value:"2",onChange:function(t){return e.handleChange(t)}})," ","2",Object(O.jsx)("input",{type:"radio",name:"points",value:"2",onChange:function(t){return e.handleChange(t)}})," ","3",Object(O.jsx)("input",{type:"radio",name:"points",value:"2",onChange:function(t){return e.handleChange(t)}})," ","4",Object(O.jsx)("input",{type:"radio",name:"points",value:"2",onChange:function(t){return e.handleChange(t)}})," ","5"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:" Comments "}),Object(O.jsx)("input",{type:"text",name:"comments",value:this.state.comments,onChange:function(t){return e.handleChange(t)}})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{color:"red"},children:[" ",this.state.errors.comments," "]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:" Submit "})," \xa0",Object(O.jsxs)("button",{type:"button",onClick:this.handleReset,children:[" ","Reset"]})]})]})})}}]),n}(a.Component);var x=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),g()},7:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.a86dc51e.chunk.js.map