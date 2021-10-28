(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/shopflix.9a39b439.png"},14:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/devcon.6de89752.png"},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(11),n(2)),l=n(0),o=function(e){var t=e.setAboutSelected,n=e.setPortfolioSelected,a=e.setContactSelected,c=e.setResumeSelected;return Object(l.jsxs)("header",{className:"flex-row space-between px-4",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("span",{"aria-label":"name",children:"Carlopher Jay"})})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",onClick:function(){t(!0),n(!1),a(!1),c(!1)},children:"About me"}),Object(l.jsx)("li",{className:"mx-2",onClick:function(){n(!0),t(!1),a(!1),c(!1)},children:"Portfolio"}),Object(l.jsx)("li",{className:"mx-2",onClick:function(){a(!0),n(!1),t(!1),c(!1)},children:"Contact me"}),Object(l.jsx)("li",{className:"mx-2",onClick:function(){c(!0),a(!1),n(!1),t(!1)},children:"Resume"})]})})]})},d=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"flex-row center ",children:[Object(l.jsx)("div",{className:"mx-2",children:Object(l.jsx)("a",{href:"https://github.com/csarmiento17",type:"button",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{alt:"instagram",src:"https://img.icons8.com/ios-filled/50/000000/github.png"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/carlopher-jay-sarmiento-60692261/",type:"button",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{alt:"linkedin",src:"https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v2.png"})})})]})})},j=n.p+"static/media/mypic.ea252b32.jpg",m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"flex-row center",children:Object(l.jsx)("img",{className:"img-thumbnail img-round",src:j,alt:"profile"})}),Object(l.jsx)("p",{className:"flex-row center text-center",children:"I'm a Software Engineer with more than 10 years of experience. I've had experience in development and support of software application created in React and SharePoint."})]})},b=function(e){console.log(e);var t=e.data,n=t.name,a=t.image,c=t.url;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"card",style:{width:250,height:250,margin:5},children:Object(l.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("img",{className:"card-img-top",src:a.default,alt:"Card"}),Object(l.jsx)("div",{className:"flex-row center",children:n})]})})})},h=[{id:1,name:"Shopflix",image:n(13),url:"https://shopflix-jay.herokuapp.com/"},{id:2,name:"Dev Connector",image:n(14),url:"https://dev-connector-jay.herokuapp.com/"}],u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h3",{className:"flex-row center my-3",children:"Recent Projects"}),Object(l.jsx)("div",{className:"flex-row center",children:h.map((function(e){return Object(l.jsx)(b,{data:e},e.id)}))})]})})},x=n(3),O=n(5);var p=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],d=i[1],j=n.name,m=n.email,b=n.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));o||(c(Object(O.a)(Object(O.a)({},n),{},Object(x.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:h})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title flex-row center",children:"Carlopher Jay Sarmiento"}),Object(l.jsxs)("div",{className:"card-text flex-row center font-sm text-center",children:["sarmientocarlopher@gmail.com | +1 416 7003856 ",Object(l.jsx)("br",{})," 36 Thorncliffe Park Dr. Apt. 606 East York, ON M4H1J8"]}),Object(l.jsx)("div",{className:"font-md my-4",children:"WORK EXPERIENCE"}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["Stonewell Financial Service Inc | React Developer (Mar 2021 - Sep 2021)",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Developed reusable components (e.g., Applicant\u2019s Information, Summary and Payment, Modal Dialog)"}),Object(l.jsx)("li",{children:"\u2022 Integrates open-source package like reCAPTCHA in Login page"}),Object(l.jsx)("li",{children:"\u2022 Created a Dashboard and implemented restriction of component depending on user\u2019s role"})]})]}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["Litera Corp. | React / SharePoint Developer (Mar 2017 \u2013 Mar 2021)",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Developed and maintained web applications using React, Redux, Redux-Saga and Material UI"}),Object(l.jsx)("li",{children:"\u2022 Created Unit Testing using Jest and Enzyme"}),Object(l.jsx)("li",{children:"\u2022 Performed bug fixes and enhancements on SharePoint Document Management System made using WPF and CSOM"})]})]}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["American International Group | SharePoint Developer ( Mar 2015 \u2013 Mar 2017)",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Enhanced and support existing SharePoint applications using HTML, CSS and JavaScript to extend SharePoint functionalities (e.g., Forms, Cascading dropdown list)"}),Object(l.jsx)("li",{children:"\u2022 Performs other jobs or responsibilities as may be designated by the Manager or Team Leader (e.g., Training of junior team members, interview candidates and consulted by other projects for development approach on the specified requirements)."})]})]}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["Coats | SharePoint Developer ( Aug 2013 \u2013 Mar 2015)",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Enhanced and support existing SharePoint applications using HTML, CSS and JavaScript to extend SharePoint functionalities (e.g., Forms, Cascading dropdown list)"}),Object(l.jsx)("li",{children:"\u2022 Performs other jobs or responsibilities as may be designated by the Manager or Team Leader (e.g., Training of junior team members, interview candidates and consulted by other projects for development approach on the specified requirements)."})]})]}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["KForce Global Solutions Inc. | SharePoint Developer (Jul 2012 \u2013 Aug 2013)",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Developed and maintained custom SharePoint sites built in HTML, CSS and Javascript"}),Object(l.jsx)("li",{children:"\u2022 Developed Workflow using SharePoint Designer 2010/2013."}),Object(l.jsx)("li",{children:"\u2022 Reports/discusses status to the Team Leader and raise issues, if any."})]})]}),Object(l.jsxs)("div",{className:"font-sm my-2",children:["Accenture Inc. | SharePoint Developer (Mar 2010 \u2013 Jul 2012 )",Object(l.jsxs)("ul",{className:"my-2",children:[Object(l.jsx)("li",{children:"\u2022 Migrated Lotus Notes data to MOSS 2007 using Quest Tool"}),Object(l.jsx)("li",{children:"\u2022 Modified SharePoint 2010 masterpage using HTML, CSS and JQuery"}),Object(l.jsx)("li",{children:"\u2022 Created Detailed Design that will be used as an approach on how to migrate a Lotus Notes into SharePoint"}),Object(l.jsx)("li",{children:"\u2022 Support SharePoint 2010 built using server-side code and managed deployment to production"}),Object(l.jsx)("li",{children:"\u2022 Managed SharePoint Services in Central Administration like SharePoint Search and Search scope, Taxonomy, User Profile Services etc."})]})]}),Object(l.jsx)("div",{className:"font-md my-4",children:"EDUCATION"}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"font-sm my-2",children:["Full Stack Coding Bootcamp ",Object(l.jsx)("br",{}),"University of Toronto School of Continuing Studies",Object(l.jsx)("br",{}),"Jun 2021 \u2013 Nov 2021"]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"font-sm my-4",children:["Bachelor of Science in Computer Science ",Object(l.jsx)("br",{}),"STI College, Philippines",Object(l.jsx)("br",{}),"Jun 2004- May 2008"]})})]})})})};var g=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),j=i[0],b=i[1],h=Object(a.useState)(!1),x=Object(r.a)(h,2),O=x[0],g=x[1],S=Object(a.useState)(!1),v=Object(r.a)(S,2),y=v[0],N=v[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{setAboutSelected:c,setPortfolioSelected:b,setContactSelected:g,setResumeSelected:N}),Object(l.jsxs)("main",{children:[!j&&!O&&!y&&!n&&Object(l.jsx)(m,{}),n&&Object(l.jsx)(m,{}),j&&Object(l.jsx)(u,{}),O&&Object(l.jsx)(p,{}),y&&Object(l.jsx)(f,{})]}),Object(l.jsx)(d,{})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a82effbe.chunk.js.map