(self.webpackChunkgsswain=self.webpackChunkgsswain||[]).push([[903],{3464:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var r=a(7294),n=a(9187),l=a(4694),i=a(5697),o=a.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=d(t.slice(0,r)),l=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[n]=l,e}),{})}var g=!1;try{g=!0}catch(te){}function h(e){return l.parse.icon?l.parse.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function E(e){var t=e.forwardedRef,a=f(e,["forwardedRef"]),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,m=a.titleId,d=h(r),y=b("classes",[].concat(p(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,l=e.inverse,i=e.border,o=e.listItem,s=e.flip,m=e.size,u=e.rotation,f=e.pull,p=(c(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":l,"fa-border":i,"fa-li":o,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(m),null!=m),c(t,"fa-rotate-".concat(u),null!=u&&0!==u),c(t,"fa-pull-".concat(f),null!=f),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(a)),p(o.split(" ")))),w=b("transform","string"==typeof a.transform?l.parse.transform(a.transform):a.transform),N=b("mask",h(n)),k=(0,l.icon)(d,u({},y,{},w,{},N,{symbol:i,title:s,titleId:m}));if(!k)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var O=k.abstract,j={ref:t};return Object.keys(a).forEach((function(e){E.defaultProps.hasOwnProperty(e)||(j[e]=a[e])})),v(O[0],j)}E.displayName="FontAwesomeIcon",E.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=y(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[d(t)]=r}return e}),{attrs:{}}),i=r.style,o=void 0===i?{}:i,s=f(r,["style"]);return l.attrs.style=u({},l.attrs.style,{},o),t.apply(void 0,[a.tag,u({},l.attrs,{},s)].concat(p(n)))}.bind(null,r.createElement),w=a(8014),N=function(e){var t=e.footerData;return r.createElement("footer",{className:"resume-footer"},r.createElement("ul",{className:"footer-list"},t.contact.email&&r.createElement("li",{className:"footer-list-item"},r.createElement(E,{icon:w.FU$})," ",r.createElement("span",null,t.contact.email)),t.contact.mobile&&r.createElement("li",{className:"footer-list-item"},r.createElement(E,{icon:w.j1w})," ",r.createElement("span",null,t.contact.mobile)),t.portfolioUrl&&r.createElement("li",{className:"footer-list-item footer-list-item-portfolio"},r.createElement(E,{icon:w.cyx})," ",r.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.portfolioUrl},t.portfolioUrl))))},k=a(7190),O=function(e){var t=e.social,a=e.preferredName;return t&&r.createElement("section",{className:"social"},t.linkedInProfileUrl&&r.createElement("span",{className:"social-linkedin"},r.createElement(E,{icon:k.D9H})," ",r.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.linkedInProfileUrl,title:"See "+a+"'s Linkedin profile"},t.linkedInProfileUrl)),t.stackOverflowProfileUrl&&r.createElement("span",{className:"social-stack-overflow"},r.createElement(E,{icon:k.mGT})," ",r.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.stackOverflowProfileUrl,title:"See "+a+"'s StackOverflow profile"},t.stackOverflowProfileUrl)))},j=function(e){var t=e.summary;return t&&t.length>0&&r.createElement("section",{className:"header-summary"},r.createElement("ul",{className:"header-summary-list"},t.map((function(e,t){return r.createElement("li",{className:"header-summary-list-item",key:t},e)}))))},A=function(e){var t=e.headerData;return r.createElement("section",{className:"resume-header"},r.createElement("header",null,r.createElement("span",{className:"resume-header-name"},t.name)),r.createElement(j,{summary:t.summary}),r.createElement(O,{social:t.social,preferredName:t.preferredName}))},S=function(){return r.createElement(E,{icon:w.eTv,transform:{rotate:42},size:"lg",className:"styled-bullet"})},x=function(e){var t=e.achievements;return r.createElement("section",{className:"achievements"},r.createElement("header",{className:"achievements-header"},r.createElement(S,null),"Achievements"),r.createElement("ul",{className:"achievements-list"},t.map((function(e,t){return r.createElement("li",{key:t},e)}))))},P=a(7833),I=a(9490),D=a(4898),z={"aws-sa":P.Z,"azure-fu":I.Z,"azure-d-fu":D.Z},U=function(e){var t=e.badge;return r.createElement("a",{href:t.verificationUrl,target:"_blank",rel:"noreferrer",name:t.name,title:"See "+t.name},r.createElement("img",{className:"interactive-image",src:z[t.id],alt:t.name,height:"70px",width:"70px"}))},T=function(e){var t=e.badges;return r.createElement("section",{className:"badges"},t.map((function(e,t){return r.createElement(U,{badge:e,key:t})})))},C=function(e){var t=e.interests;return r.createElement("section",{className:"interests"},r.createElement("header",{className:"interests-header"},r.createElement(S,null),"Interests"),r.createElement("ul",{className:"interest-list"},t.map((function(e,t){return r.createElement("li",{key:t},e)}))))},_=a(18),L={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},F=function(e){return parseInt(e)},J=function(e){return 5-Math.ceil(e)},M=function(e){return 5-F(e)-J(e)},W=function(e){var t=e.number;return r.createElement(r.Fragment,null,F(t)>0&&(0,_.Z)(Array(F(t))).map((function(e,t){return r.createElement(E,{icon:w.Tab,key:t})})),M(t)>0&&(0,_.Z)(Array(M(t))).map((function(e,t){return r.createElement(E,{icon:w.a1Y,key:t})})),J(t)>0&&(0,_.Z)(Array(J(t))).map((function(e,t){return r.createElement(E,{icon:L,key:t})})))},G=function(e){var t=e.languages;return r.createElement("section",{className:"languages"},r.createElement("header",{className:"languages-header"},r.createElement(S,null),"Languages"),r.createElement("table",{className:"languages-list"},r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{className:"languages-col-1"},e.name+": "),r.createElement("td",{className:"languages-col-2"},r.createElement(W,{number:e.proficiency})," "))})))))},R=function(e){var t=e.skills;return r.createElement("section",{className:"skills"},r.createElement("header",{className:"skills-header"},r.createElement(S,null),"Professional Skills"),r.createElement("table",{className:"skills-list"},r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{className:"skills-col-1"},e.name+": "),r.createElement("td",{className:"skills-col-2"},r.createElement(W,{number:e.proficiency})))})))))},B=function(e){var t=e.education;return r.createElement("section",{className:"education-item"},r.createElement("div",{className:"education-item-qualification"},t.degree),r.createElement("div",{className:"education-item-institute"},t.institute),r.createElement("div",null,"Graduated in ",t.graduatedOn," with ",t.percentage,"%"))},Z=function(e){var t=e.education;return r.createElement("section",{className:"education"},r.createElement("header",{className:"education-header"},r.createElement(S,null),"Education"),t.map((function(e,t){return r.createElement(B,{education:e,key:t})})))},H=function(e){var t=e.otherRelevantData;return r.createElement(r.Fragment,null,t.badges&&r.createElement(T,{badges:t.badges}),t.skills&&r.createElement(R,{skills:t.skills}),t.achievements&&r.createElement(x,{achievements:t.achievements}),t.education&&r.createElement(Z,{education:t.education}),t.languages&&r.createElement(G,{languages:t.languages}),t.interests&&r.createElement(C,{interests:t.interests}))},Q=function(e){var t=e.project;return t&&r.createElement("section",{className:"project-sumary"},r.createElement("div",{className:"project_detail"},r.createElement("div",null,t.for&&r.createElement("span",{class:"project_for"},t.for),r.createElement("span",{class:"project_name"},t.name),r.createElement("span",{class:"project_role"},t.role),r.createElement("span",{class:"project_duration"},t.duration)),r.createElement("span",{class:"project_description"},r.createElement("p",null," ",t.description," "))))},q=function(e){var t=e.projects;return r.createElement("section",{className:"projects-summary"},r.createElement("header",{className:"projects-summary-header"},"Projects:"),t.map((function(e){return r.createElement(Q,{project:e})})))},Y=function(e){var t=e.employment;return t&&r.createElement("section",{className:"employment-item"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-6"},r.createElement("span",{className:"employment-item-organization"},t.organization),r.createElement("span",{className:"employment-item-job-title"},t.title)),r.createElement("div",{className:"col-sm-6 citydate"},r.createElement("div",{className:"employment-item-date"},r.createElement("span",{"data-section":"employment"},t.duration.start.month)," ",r.createElement("span",{"data-section":"employment"},t.duration.start.year)," ","-"," ",r.createElement("span",{"data-section":"employment"},t.duration.end.month)," ",r.createElement("span",{"data-section":"employment"},t.duration.end.year)))),t.summary&&r.createElement("div",{className:"employment-item-summary",dangerouslySetInnerHTML:{__html:t.summary}}),t.projects&&r.createElement(q,{projects:t.projects}))},$=function(e){var t=e.employmentData;return t&&r.createElement("section",{className:"employment-history"},r.createElement("header",{className:"employment-history-header"},r.createElement(S,null),"Employment History"),t.map((function(e,t){return r.createElement(Y,{employment:e,key:t})})))},K=function(e){var t=e.professionalSummaryData;return r.createElement(r.Fragment,null,r.createElement($,{employmentData:t.employmentHistory}))},V=function(e){var t=e.otherRelevantData,a=e.professionalSummaryData;return r.createElement("section",{className:"main"},r.createElement("section",{className:"other-relevant-data"},r.createElement(H,{otherRelevantData:t})),r.createElement("section",{className:"professional-summary"},r.createElement(K,{professionalSummaryData:a})))},X={header:{name:"Girija Shankar Swain",preferredName:"Girija",summary:["10+ years of professional experience in designing, developing enterprise applications","2+ years of professional experience in architecting, developing cloud native applications","AWS Certified Solutions Architect","Expertise in Microservices, Serverless, Event driven architecture","Expertise in Java and JavaScript","Beginner in Artificial Intelligence, Python, Azure"],social:{linkedInProfileUrl:"https://www.linkedin.com/in/girija-shankar-swain",stackOverflowProfileUrl:"https://stackoverflow.com/users/4601120/gsswain"}},professionalSummary:{employmentHistory:[{organization:"Aegon Life Insurance Company",title:"Principal Engineer",duration:{start:{month:"Feb",year:"2019"},end:{month:"Dec",year:"2020"}},summary:"As a Principal Engineer, I contributed towards the architecture, design and development of the new age cloud native insurance policy administration system using Domain Driven Design principles. I built the platform for the microservices based development and built various patterns around the workflow engine for asynchronous execution. More recently, I was working towards building a better customer experience leveraging AI technologies."},{organization:"T.I.A.A. Global Business Services (TIAA)",title:"Associate",duration:{start:{month:"Jul",year:"2017"},end:{month:"Oct",year:"2018"}},summary:"Worked as a Java full stack developer on a self-service account opening application. Improved page load times by <b>8x</b>. Upgraded the frontend stack from Angular 1.4 to Angular 5 taking a hybrid migration approach. Mentored junior developers, performed code reviews. Conducted a <a target='_blank' rel='noreferrer' href='https://gsswain.com/slides/webapp-performance/'>session</a> on web application performance improvement."},{organization:"J.P. Morgan Services India (JPMC)",title:"Associate",duration:{start:{month:"Feb",year:"2016"},end:{month:"May",year:"2017"}},summary:"Worked as a Java full stack developer on a few front office trade capturing system. Contributed to the in-house UI component library built using ReactJS. Used to perform code reviews, production level 3 support and run the scrum calls on rotational basis. Conducted sessions on SpringBoot, ProtoBuf."},{organization:"L&T Infotech (LTI)",title:"Software Associate",duration:{start:{month:"Dec",year:"2013"},end:{month:"Feb",year:"2016"}},summary:"Worked as a Java full stack developer on a few advisory applications of Nordea, developed a microservice using SpringBoot for i18n support and implemented authorization using Spring security. Implemented automated testing to reduce manual testing efforts and conducted a session on the same."}]},otherRelevantData:{badges:[{id:"aws-sa",name:"Girija's AWS Solution Architect badge",verificationUrl:"https://www.youracclaim.com/badges/0cf97440-4089-4fab-8245-a50644451e44/public_url"},{id:"azure-fu",name:"Girija's Azure Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/6f8283a0-a895-4d7c-8d9a-5368d1433248/public_url"},{id:"azure-d-fu",name:"Girija's Azure Data Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/8ce8dc6e-cd1c-4dfb-8979-eea208ffd2ab/public_url"}],skills:[{name:"Solution Design",proficiency:4},{name:"Application Architecture",proficiency:4},{name:"Technology Architecture",proficiency:4},{name:"AWS",proficiency:4},{name:"Azure",proficiency:2}],education:[{institute:"Indira Gandhi National Open University",degree:"Master of Computer Applications",percentage:"63",graduatedOn:"June 2016"},{institute:"Berhampur University",degree:"Bachelors in Computer Applications",percentage:"83",graduatedOn:"June 2010"}],achievements:["Annual Team Performance Award (2019-2020)","Quarterly Team Award (2019)","Quarterly Individual Performance Award (2018)","Team Performance Award (2015)","College Topper Award"],languages:[{name:"English",proficiency:5},{name:"Odia",proficiency:5},{name:"Hindi",proficiency:4}],interests:["Following Cricket","Travelling & Capturing Landscapes"]},footer:{contact:{email:"",mobile:""},portfolioUrl:"https://gsswain.com"}},ee=function(){return r.createElement(n.Z,null,r.createElement("section",{className:"resume-content"},r.createElement(A,{headerData:X.header}),r.createElement(V,{otherRelevantData:X.otherRelevantData,professionalSummaryData:X.professionalSummary}),r.createElement(N,{footerData:X.footer})))}}}]);
//# sourceMappingURL=component---src-pages-resume-js-25206c3d7e0c66f31ec0.js.map