(self.webpackChunkgsswain=self.webpackChunkgsswain||[]).push([[903],{1115:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ae}});var n=a(7294),r=a(6335),i=a.p+"static/pdf-download-a832519ae60f610b8f4a2460e85fc75c.png",l=function(){return n.createElement("div",{className:"download-resume-container"},n.createElement("a",{href:"/static/Girija-Shankar-Swain-Resume.pdf",rel:"noreferrer",name:"Girija's Resume PDF",title:"Download Girija's Resume PDF",className:"download-resume-link",download:!0},n.createElement("span",{className:"download-text"},"Download"),n.createElement("img",{src:i,alt:"Download PDF",className:"download-pdf-image"})))},o=a(4694),s=a(5697),c=a.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=g(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=i:e[r]=i,e}),{})}var E=!1;try{E=!0}catch(ne){}function b(e){return o.parse.icon?o.parse.icon(e):null===e?null:"object"===m(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function w(e){var t=e.forwardedRef,a=p(e,["forwardedRef"]),n=a.icon,r=a.mask,i=a.symbol,l=a.className,s=a.title,c=a.titleId,m=b(n),f=v("classes",[].concat(y(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,i=e.inverse,l=e.border,o=e.listItem,s=e.flip,c=e.size,m=e.rotation,f=e.pull,d=(u(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":i,"fa-border":l,"fa-li":o,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),null!=c),u(t,"fa-rotate-".concat(m),null!=m&&0!==m),u(t,"fa-pull-".concat(f),null!=f),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(a)),y(l.split(" ")))),g=v("transform","string"==typeof a.transform?o.parse.transform(a.transform):a.transform),h=v("mask",b(r)),k=(0,o.icon)(m,d({},f,{},g,{},h,{symbol:i,title:s,titleId:c}));if(!k)return function(){var e;!E&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var O=k.abstract,A={ref:t};return Object.keys(a).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(A[e]=a[e])})),N(O[0],A)}w.displayName="FontAwesomeIcon",w.propTypes={border:c().bool,className:c().string,mask:c().oneOfType([c().object,c().array,c().string]),fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf(["horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),size:c().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var N=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),i=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=h(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[g(t)]=n}return e}),{attrs:{}}),l=n.style,o=void 0===l?{}:l,s=p(n,["style"]);return i.attrs.style=d({},i.attrs.style,{},o),t.apply(void 0,[a.tag,d({},i.attrs,{},s)].concat(y(r)))}.bind(null,n.createElement),k=a(8014),O=function(e){var t=e.footerData;return n.createElement("footer",{className:"resume-footer"},n.createElement("ul",{className:"footer-list"},t.contact.email&&n.createElement("li",{className:"footer-list-item"},n.createElement(w,{icon:k.FU$})," ",n.createElement("span",null,t.contact.email)),t.contact.mobile&&n.createElement("li",{className:"footer-list-item"},n.createElement(w,{icon:k.j1w})," ",n.createElement("span",null,t.contact.mobile)),t.portfolioUrl&&n.createElement("li",{className:"footer-list-item footer-list-item-portfolio"},n.createElement(w,{icon:k.cyx})," ",n.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.portfolioUrl},t.portfolioUrl))))},A=a(7190),j=function(e){var t=e.social,a=e.preferredName;return t&&n.createElement("section",{className:"social"},t.linkedInProfileUrl&&n.createElement("span",{className:"social-linkedin"},n.createElement(w,{icon:A.D9H})," ",n.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.linkedInProfileUrl,title:"See "+a+"'s Linkedin profile"},t.linkedInProfileUrl)),t.stackOverflowProfileUrl&&n.createElement("span",{className:"social-stack-overflow"},n.createElement(w,{icon:A.mGT})," ",n.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.stackOverflowProfileUrl,title:"See "+a+"'s StackOverflow profile"},t.stackOverflowProfileUrl)))},S=function(e){var t=e.summary;return t&&t.length>0&&n.createElement("section",{className:"header-summary"},n.createElement("ul",{className:"header-summary-list"},t.map((function(e,t){return n.createElement("li",{className:"header-summary-list-item",key:t},e)}))))},D=function(e){var t=e.headerData;return n.createElement("section",{className:"resume-header"},n.createElement("header",null,n.createElement("span",{className:"resume-header-name"},t.name)),n.createElement(S,{summary:t.summary}),n.createElement(j,{social:t.social,preferredName:t.preferredName}))},P=function(){return n.createElement(w,{icon:k.eTv,transform:{rotate:42},size:"lg",className:"styled-bullet"})},x=function(e){var t=e.achievements;return n.createElement("section",{className:"achievements"},n.createElement("header",{className:"achievements-header section-header"},n.createElement(P,null),"Achievements"),n.createElement("ul",{className:"achievements-list"},t.map((function(e,t){return n.createElement("li",{key:t},e)}))))},z=a(7833),C=a(9490),I=a(4898),T={"aws-sa":z.Z,"azure-fu":C.Z,"azure-d-fu":I.Z},U=function(e){var t=e.badge;return n.createElement("a",{href:t.verificationUrl,target:"_blank",rel:"noreferrer",name:t.name,title:"See "+t.name},n.createElement("img",{className:"interactive-image",src:T[t.id],alt:t.name,height:"70px",width:"70px"}))},F=function(e){var t=e.badges;return n.createElement("section",{className:"badges"},t.map((function(e,t){return n.createElement(U,{badge:e,key:t})})))},_=function(e){var t=e.interests;return n.createElement("section",{className:"interests"},n.createElement("header",{className:"interests-header section-header"},n.createElement(P,null),"Interests"),n.createElement("ul",{className:"interest-list"},t.map((function(e,t){return n.createElement("li",{key:t},e)}))))},M=a(18),G={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},L=function(e){return parseInt(e)},R=function(e){return 5-Math.ceil(e)},W=function(e){return 5-L(e)-R(e)},B=function(e){var t=e.number;return n.createElement(n.Fragment,null,L(t)>0&&(0,M.Z)(Array(L(t))).map((function(e,t){return n.createElement(w,{icon:k.Tab,key:t})})),W(t)>0&&(0,M.Z)(Array(W(t))).map((function(e,t){return n.createElement(w,{icon:k.a1Y,key:10+t})})),R(t)>0&&(0,M.Z)(Array(R(t))).map((function(e,t){return n.createElement(w,{icon:G,key:20+t})})))},J=function(e){var t=e.languages;return n.createElement("section",{className:"languages"},n.createElement("header",{className:"languages-header section-header"},n.createElement(P,null),"Languages"),n.createElement("table",{className:"languages-list"},n.createElement("tbody",null,t.map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",{className:"languages-col-1"},e.name+": "),n.createElement("td",{className:"languages-col-2"},n.createElement(B,{number:e.proficiency})," "))})))))},Z=function(e){var t=e.skills;return n.createElement("section",{className:"skills"},n.createElement("header",{className:"skills-header section-header"},n.createElement(P,null),"Professional Skills"),n.createElement("table",{className:"skills-list"},n.createElement("tbody",null,t.map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",{className:"skills-col-1"},e.name+": "),n.createElement("td",{className:"skills-col-2"},n.createElement(B,{number:e.proficiency})))})))))},H=function(e){var t=e.education;return n.createElement("section",{className:"education-item"},n.createElement("div",{className:"education-item-qualification"},t.degree),n.createElement("div",{className:"education-item-institute"},t.institute),n.createElement("div",null,"Graduated in ",t.graduatedOn," with ",t.percentage,"%"))},q=function(e){var t=e.education;return n.createElement("section",{className:"education"},n.createElement("header",{className:"education-header section-header"},n.createElement(P,null),"Education"),t.map((function(e,t){return n.createElement(H,{education:e,key:t})})))},K=function(e){var t=e.otherRelevantData;return n.createElement(n.Fragment,null,t.badges&&n.createElement(F,{badges:t.badges}),t.skills&&n.createElement(Z,{skills:t.skills}),t.achievements&&n.createElement(x,{achievements:t.achievements}),t.education&&n.createElement(q,{education:t.education}),t.languages&&n.createElement(J,{languages:t.languages}),t.interests&&n.createElement(_,{interests:t.interests}))},Q=function(e){var t=e.project;return t&&n.createElement("section",{className:"project-sumary"},n.createElement("div",{className:"project_detail"},n.createElement("div",null,t.for&&n.createElement("span",{class:"project_for"},t.for),n.createElement("span",{class:"project_name"},t.name),n.createElement("span",{class:"project_role"},t.role),n.createElement("span",{class:"project_duration"},t.duration)),n.createElement("span",{class:"project_description"},n.createElement("p",null," ",t.description," "))))},V=function(e){var t=e.projects;return n.createElement("section",{className:"projects-summary"},n.createElement("header",{className:"projects-summary-header"},"Projects:"),t.map((function(e){return n.createElement(Q,{project:e})})))},Y=function(e){var t=e.employment;return t&&n.createElement("section",{className:"employment-item"},n.createElement("header",{className:"employment-item-header"},n.createElement("div",null,n.createElement("span",{className:"employment-item-header-circle"}),n.createElement("span",{className:"employment-item-job-title"},t.title)," ","at"," ",n.createElement("span",{className:"employment-item-organization"},t.organization))),n.createElement("main",{className:"employment-item-main"},n.createElement("div",null,n.createElement("div",{className:"employment-item-date"},n.createElement("span",{"data-section":"employment"},t.duration.start.month)," ",n.createElement("span",{"data-section":"employment"},t.duration.start.year)," ","-"," ",n.createElement("span",{"data-section":"employment"},t.duration.end.month)," ",n.createElement("span",{"data-section":"employment"},t.duration.end.year))),t.summary&&n.createElement("div",{className:"employment-item-summary",dangerouslySetInnerHTML:{__html:t.summary}}),t.projects&&n.createElement(V,{projects:t.projects})))},$=function(e){var t=e.employmentData;return t&&n.createElement("section",{className:"employment-history"},n.createElement("header",{className:"employment-history-header section-header"},n.createElement(P,null),"Employment Timeline"),t.map((function(e,t){return n.createElement(Y,{employment:e,key:t})})))},X=function(e){var t=e.professionalSummaryData;return n.createElement(n.Fragment,null,n.createElement($,{employmentData:t.employmentHistory}))},ee=function(e){var t=e.otherRelevantData,a=e.professionalSummaryData;return n.createElement("section",{className:"main"},n.createElement("section",{className:"other-relevant-data"},n.createElement(K,{otherRelevantData:t})),n.createElement("section",{className:"professional-summary"},n.createElement(X,{professionalSummaryData:a})))},te={header:{name:"Girija Shankar Swain",preferredName:"Girija",summary:["10+ years of professional experience in designing, developing enterprise applications","2+ years of professional experience in architecting, developing cloud native applications on AWS","AWS Certified Solutions Architect","Well versed in TOGAF ADM","Expertise in Microservices, Serverless, Event driven architecture and Domain Driven Design","Expertise in Java and JavaScript","Beginner in Artificial Intelligence, Python, Azure"],social:{linkedInProfileUrl:"https://www.linkedin.com/in/girija-shankar-swain",stackOverflowProfileUrl:"https://stackoverflow.com/users/4601120/gsswain"}},professionalSummary:{employmentHistory:[{organization:"Aegon Life Insurance Company",title:"Principal Engineer",duration:{start:{month:"Feb",year:"2019"},end:{month:"Dec",year:"2020"}},summary:"As a Principal engineer, I improved engineering practices, grew the engineering team, architected and built a cloud native solution on AWS. Below are some of the highlights:\n          <ul>\n            <li> Worked closely with the CTO, Head of engineering and key business stakeholders on strategic and operational goals. </li>\n            <li> Mentored and managed a team of software engineers from Aegon Life and Saksoft (our consulting partner) and grew the engineering team in quantity and quality. </li>\n            <li> Initiated and facilitated Architecture Review Board for evolving the architecture. </li>\n            <li> Collaborated with the Aegon Europe team on designing and building Knowledge Management System and Conversational engine (Chatbot). </li>\n            <li> Contributed across platoform, services and experience layer of the architecture and solution. </li>\n            <li> Designed and built the event-driven cloud native platform from scratch (using SpringBoot2 and Spring-Cloud-AWS) which addressed cross-cutting concerns like monitoring, observability, resilience etc. </li>\n            <li> Designed and built a multi-tenant policy administration system with B2B insurance sales which allowed onboarding of e-commerce platforms like PayTM, MobiKwik, Flipkart etc. </li>\n            <li> Built various patterns around the business process engine (Camunda) for asynchronous execution. </li>\n          </ul>\n          "},{organization:"Credit Suisse",title:"Assistant Vice President",duration:{start:{month:"Oct",year:"2018"},end:{month:"Feb",year:"2019"}}},{organization:"T.I.A.A. Global Business Services",title:"Associate",duration:{start:{month:"Jul",year:"2017"},end:{month:"Oct",year:"2018"}}},{organization:"J.P. Morgan Services India (JPMC)",title:"Associate",duration:{start:{month:"Feb",year:"2016"},end:{month:"May",year:"2017"}}},{organization:"L&T Infotech",title:"Software Associate",duration:{start:{month:"Dec",year:"2013"},end:{month:"Feb",year:"2016"}}},{organization:"Tata Consultancy Services",title:"Systems Engineer",duration:{start:{month:"Aug",year:"2010"},end:{month:"Dec",year:"2013"}}}]},otherRelevantData:{badges:[{id:"aws-sa",name:"Girija's AWS Solution Architect badge",verificationUrl:"https://www.youracclaim.com/badges/0cf97440-4089-4fab-8245-a50644451e44/public_url"},{id:"azure-fu",name:"Girija's Azure Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/6f8283a0-a895-4d7c-8d9a-5368d1433248/public_url"},{id:"azure-d-fu",name:"Girija's Azure Data Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/8ce8dc6e-cd1c-4dfb-8979-eea208ffd2ab/public_url"}],skills:[{name:"AWS - Solution Architecture",proficiency:4},{name:"Application Architecture",proficiency:4},{name:"Technology Architecture",proficiency:4},{name:"Business Analysis",proficiency:4},{name:"Azure",proficiency:2}],education:[{institute:"Indira Gandhi National Open University",degree:"Master of Computer Applications",percentage:"63",graduatedOn:"June 2016"},{institute:"Berhampur University",degree:"Bachelors in Computer Applications",percentage:"83",graduatedOn:"June 2010"}],achievements:["Annual Team Performance Award (2019-2020)","Quarterly Team Award (2019)","Quarterly Individual Performance Award (2018)","Team Performance Award (2015)","College Topper Award"],languages:[{name:"English",proficiency:5},{name:"Odia",proficiency:5},{name:"Hindi",proficiency:4}],interests:["Following Cricket","Travelling & Capturing Landscapes"]},footer:{contact:{email:"",mobile:""},portfolioUrl:"https://gsswain.com"}},ae=function(){return n.createElement(r.Z,{titleSuffix:"Resume"},n.createElement(n.Fragment,null,n.createElement("section",{className:"resume-content"},n.createElement(D,{headerData:te.header}),n.createElement(ee,{otherRelevantData:te.otherRelevantData,professionalSummaryData:te.professionalSummary}),n.createElement(O,{footerData:te.footer})),n.createElement(l,null)))}}}]);
//# sourceMappingURL=component---src-pages-resume-js-4348dab975891915908e.js.map