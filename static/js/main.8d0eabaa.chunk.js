(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),i=(a(35),a(36),a(37),a(16)),u=a(29),o=a(14),s=a(12),m=a(5),d=a(13),f=a(10),v=a(59),E=a(60),p=a(61),b=a(52),h=a(54),g=a(62),O=a(28);var j=a(21),y=a.n(j),q=a(27),w=a(53),k=a(9);function N(e){var t=e.setWeightFile,a=e.setItemsFile,l=Object(n.useState)(),c=Object(f.a)(l,2),i=c[0],u=c[1];return r.a.createElement(b.a,null,r.a.createElement("legend",null,"File"),r.a.createElement(w.a,{for:"file",className:"sd-file-choose btn btn-primary"},r.a.createElement(k.a,{icon:"file-upload"})," Upload"),r.a.createElement(h.a,{type:"file",name:"file",id:"file",onChange:function(e){return function(e){if(void 0!==e&&void 0!==e.target.files[0]){e.preventDefault();var n=[],r=new FileReader;u(e.target.files[0].name),r.onload=function(){var e=Object(q.a)(y.a.mark((function e(r){var l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=r.target.result.split(/\r\n|\n/),t(parseInt(l[0])),l.forEach((function(e,t){if(0!==t){var a=e.split(" "),r=a[2]%1===0?a[2]:"",l="";""!==r?a.slice(3).forEach((function(e){l+=e+" "})):a.slice(2).forEach((function(e){l+=e+" "})),n.push({name:l.trim(),value:a[0],weight:a[1],stock:r,qty:"",time:""})}})),a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.readAsText(e.target.files[0])}}(e)},style:{display:"none"}}),r.a.createElement("br",null),r.a.createElement(w.a,null,i))}var x=a(64),C=a(55),I=a(56),B=a(57),S=a(58),R=function(e){var t=e.className,a=e.title,l=e.content,c=Object(n.useState)(!1),i=Object(f.a)(c,2),u=i[0],o=i[1],s=function(){return o(!u)};return r.a.createElement("div",null,r.a.createElement(k.a,{icon:"question-circle",onClick:s,className:"sd-icon-type"}),r.a.createElement(x.a,{isOpen:u,toggle:s,className:t},r.a.createElement(C.a,{toggle:s},a),r.a.createElement(I.a,null,l),r.a.createElement(B.a,null,r.a.createElement(S.a,{color:"primary",onClick:s},"Nice!"))))};function W(e){var t=e.onTypeChange,a=e.type;return r.a.createElement(b.a,{tag:"fieldset"},r.a.createElement("legend",null,"Type"),r.a.createElement("div",{className:"form-type"},r.a.createElement(b.a,{check:!0},r.a.createElement(w.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"1",onChange:function(e){return t(e)}})," ","Balo1"),r.a.createElement(R,{title:"Balo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(w.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"2",onChange:function(e){return t(e)}})," ","Balo2"),r.a.createElement(R,{title:"Balo 2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(w.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"3",onChange:function(e){return t(e)}})," ","Balo3"),r.a.createElement(R,{title:"Balo 3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}))),r.a.createElement("div",{className:a.errors&&"is-invalid"}),a.errors&&r.a.createElement("span",{className:"invalid-feedback"},a.errors))}function F(e){var t=e.clearItem,a=e.addItem,n=e.onSubmit;return r.a.createElement("div",{className:"button-control"},r.a.createElement(S.a,{onClick:function(){return t()},color:"danger",className:"sd-btn"},r.a.createElement(k.a,{icon:"trash-alt"})," Clear")," ",r.a.createElement(S.a,{onClick:function(){return a()},color:"info",className:"sd-btn"},r.a.createElement(k.a,{icon:"plus-circle"})," Add Item")," ",r.a.createElement(S.a,{onClick:n,color:"success",className:"sd-btn"},r.a.createElement(k.a,{icon:"utensils"})," Greedy"))}var T=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)({value:"",touched:!1,errors:""}),u=Object(f.a)(i,2),o=u[0],j=u[1],y=Object(n.useState)([]),q=Object(f.a)(y,2),w=q[0],x=q[1],C=Object(n.useState)({value:0,errors:""}),I=Object(f.a)(C,2),B=I[0],S=I[1],R=Object(n.useState)(!1),T=Object(f.a)(R,2),A=T[0],V=T[1],D={name:"",value:"",weight:"",stock:"",qty:"",time:""};Object(n.useEffect)((function(){console.log(l)}),[A]);var U=function(e,t){var a=l.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)):a}));c(a);var n=w.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,"")):a}));x(n)},L=function(e){return function(t){if(t.target.value){var a=w.map((function(a,n){return e===n&&"name"!==t.target.name&&t.target.value%1!==0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must be number")):e===n&&"name"!==t.target.name&&parseInt(t.target.value)<=0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must > 0")):a}));x(a)}else{var n=w.map((function(a,n){return e===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Required")):a}));x(n)}}},G=function(){return 0===B.value&&(S(Object(m.a)(Object(m.a)({},B),{},{errors:"Required"})),!0)};return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(E.a,{form:!0},r.a.createElement(p.a,{md:3,className:"offset-md-2"},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(b.a,null,r.a.createElement("legend",null,"Weight"),r.a.createElement(h.a,{style:{width:"100px"},type:"number",name:"weight",id:"weight",value:o.value,onChange:function(e){j(Object(m.a)(Object(m.a)({},o),{},{value:e.target.value,errors:""}))},onBlur:function(e){j(Object(m.a)(Object(m.a)({},o),{},{touched:!0})),e.target.value?e.target.value%1!==0?j(Object(m.a)(Object(m.a)({},o),{},{errors:"Value must be number"})):parseInt(e.target.value)<=0&&j(Object(m.a)(Object(m.a)({},o),{},{errors:"Value must be > 0"})):j(Object(m.a)(Object(m.a)({},o),{},{errors:"Required"}))},className:o.errors&&"is-invalid"}),o.errors&&r.a.createElement("span",{className:"invalid-feedback"},o.errors)))),r.a.createElement(p.a,{md:3},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(W,{onTypeChange:function(e){S({value:e.target.value,errors:""})},type:B}))),r.a.createElement(p.a,{md:3},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(N,{setWeightFile:function(e){j(Object(m.a)(Object(m.a)({},o),{},{value:e,errors:""}))},setItemsFile:function(e){c([]),e.forEach((function(e){x((function(e){return[].concat(Object(d.a)(e),[D])})),c((function(t){return[].concat(Object(d.a)(t),[e])}))}))}})))),r.a.createElement(F,{clearItem:function(){c([]),x([]),j({value:"",touched:!1,errors:""}),S(Object(m.a)(Object(m.a)({},B),{},{value:0})),V(!1)},addItem:function(){c([].concat(Object(d.a)(l),[D])),x([].concat(Object(d.a)(w),[D]))},onSubmit:function(){if(!G()&&!function(){var e=!1;""===o.value&&(j(Object(m.a)(Object(m.a)({},o),{},{errors:"Required"})),e=!0);for(var t=Object(d.a)(w),a=0;a<l.length;a++){var n=Object(m.a)({},t[a]);""===l[a].name&&(n.name="Required",e=!0),""===l[a].value&&(n.value="Required",e=!0),""===l[a].weight&&(n.weight="Required",e=!0),""===l[a].stock&&"2"===B.value&&(n.stock="Required",e=!0),"2"!==B.value&&(n.stock=""),t[a]=n}return x(t),e}())switch(B.value){case"1":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),t-=e.qty*e.weight})),a}(l,parseInt(o.value))),void V(!0);case"2":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>e.stock&&(e.qty=e.stock),t-=e.qty*e.weight})),a}(l,parseInt(o.value))),void V(!0);case"3":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>1&&(e.qty=1),t-=e.qty*e.weight})),a}(l,parseInt(o.value))),void V(!0);default:return}}}),r.a.createElement("h2",{className:"text-center sd-fade-up-down"},"Table Items"),r.a.createElement(g.a,{striped:!0,className:"table-hover sd-fade-up-down"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"500px"}},"Name"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Stock"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null))),r.a.createElement(O.a,{typeName:"tbody",enterAnimation:{from:{transform:"translateX(-100%)",opacity:.1},to:{}},leaveAnimation:{from:{},to:{transform:"translateX(100%)",opacity:.1}}},l.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",id:"name",value:e?e.name:null,name:"name",onChange:function(e){return U(e,t)},onBlur:L(t),className:w[t]&&w[t].name&&"is-invalid"}),w[t].name&&r.a.createElement("span",{className:"invalid-feedback"},w[t].name)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.value,name:"value",onChange:function(e){return U(e,t)},onBlur:L(t),className:w[t].value&&"is-invalid"}),w[t].value&&r.a.createElement("span",{className:"invalid-feedback"},w[t].value)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.weight,name:"weight",onChange:function(e){return U(e,t)},onBlur:L(t),className:w[t].weight&&"is-invalid"}),w[t].weight&&r.a.createElement("span",{className:"invalid-feedback"},w[t].weight)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.stock,name:"stock",onChange:function(e){return U(e,t)},onBlur:L(t),className:w[t].stock&&"is-invalid",disabled:"2"!==B.value}),w[t].stock&&r.a.createElement("span",{className:"invalid-feedback"},w[t].stock)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",disabled:!0,value:e.qty,name:"qty",onChange:function(e){return U(e,t)}})),r.a.createElement("td",null,r.a.createElement(k.a,{icon:"trash-alt",className:"icon-trash",onClick:function(){return function(e){var t=Object(d.a)(l);t.splice(e,1),c(t);var a=Object(d.a)(w);a.splice(e,1),x(a)}(t)}})))})),A&&r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Total Weight"),r.a.createElement("td",null,l.reduce((function(e,t){return e+t.qty*t.weight}),0)),r.a.createElement("td",null,"Total Value"),r.a.createElement("td",null,l.reduce((function(e,t){return e+t.qty*t.value}),0)))))))},A=a(63);var V=function(e){return r.a.createElement(A.a,null,r.a.createElement(T,null))};function D(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"sd-header"},"Greedy Algorithm Web Applications"))}var U=function(){return i.b.add(u.a,o.c,o.a,o.d,o.b,o.e,o.d),r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8d0eabaa.chunk.js.map