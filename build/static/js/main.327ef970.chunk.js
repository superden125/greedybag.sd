(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),i=(a(35),a(36),a(37),a(16)),o=a(29),u=a(13),s=a(12),m=a(5),d=a(14),f=a(8),v=a(59),p=a(60),E=a(61),b=a(52),h=a(54),g=a(62),O=a(28);var j=a(21),y=a.n(j),w=a(27),N=a(53),q=a(10),k=a(3),x=a.n(k);function I(e){var t=e.setFileNames,a=e.fileNames,n=e.setIsLoading,l=e.setInputFile,c=e.disabled;return r.a.createElement(b.a,null,r.a.createElement("legend",null,"File"),r.a.createElement(N.a,{for:"file",className:x()("sd-file-choose btn btn-primary",{disabled:c})},r.a.createElement(q.a,{icon:"file-upload"})," Upload"),r.a.createElement(h.a,{type:"file",name:"file",id:"file",onChange:function(e){return function(e){if(void 0!==e&&void 0!==e.target.files[0]){e.preventDefault();var a=[],r=new FileReader;t(e.target.files[0].name),r.onload=function(){var e=Object(w.a)(y.a.mark((function e(t){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!0),r=t.target.result.split(/\r\n|\n/),c=parseInt(r[0]),r.forEach((function(e,t){if(0!==t){var n=e.split(" "),r=n[2]%1===0?n[2]:"",l="";""!==r?n.slice(3).forEach((function(e){l+=e+" "})):n.slice(2).forEach((function(e){l+=e+" "})),a.push({name:l.trim(),value:n[0],weight:n[1],stock:r,qty:"",time:""})}})),l(c,a),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.readAsText(e.target.files[0])}}(e)},style:{display:"none"},disabled:c}),r.a.createElement("br",null),r.a.createElement(N.a,null,a))}var C=a(64),B=a(55),S=a(56),R=a(57),F=a(58),A=function(e){var t=e.className,a=e.title,l=e.content,c=Object(n.useState)(!1),i=Object(f.a)(c,2),o=i[0],u=i[1],s=function(){return u(!o)};return r.a.createElement("div",null,r.a.createElement(q.a,{icon:"question-circle",onClick:s,className:"sd-icon-type"}),r.a.createElement(C.a,{isOpen:o,toggle:s,className:t},r.a.createElement(B.a,{toggle:s},a),r.a.createElement(S.a,null,l),r.a.createElement(R.a,null,r.a.createElement(F.a,{color:"primary",onClick:s},"Nice!"))))};function T(e){var t=e.onTypeChange,a=e.type;return r.a.createElement(b.a,{tag:"fieldset"},r.a.createElement("legend",null,"Type"),r.a.createElement("div",{className:"form-type"},r.a.createElement(b.a,{check:!0},r.a.createElement(N.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"1",onChange:function(e){return t(e)}})," ","Balo1"),r.a.createElement(A,{title:"Balo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(N.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"2",onChange:function(e){return t(e)}})," ","Balo2"),r.a.createElement(A,{title:"Balo 2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(N.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"3",onChange:function(e){return t(e)}})," ","Balo3"),r.a.createElement(A,{title:"Balo 3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}))),r.a.createElement("div",{className:a.errors&&"is-invalid"}),a.errors&&r.a.createElement("span",{className:"invalid-feedback"},a.errors))}function L(e){var t=e.clearItem,a=e.addItem,n=e.onSubmit;return r.a.createElement("div",{className:"button-control"},r.a.createElement(F.a,{onClick:function(){return t()},color:"danger",className:"sd-btn"},r.a.createElement(q.a,{icon:"trash-alt"})," Clear")," ",r.a.createElement(F.a,{onClick:function(){return a()},color:"info",className:"sd-btn"},r.a.createElement(q.a,{icon:"plus-circle"})," Add Item")," ",r.a.createElement(F.a,{onClick:n,color:"success",className:"sd-btn"},r.a.createElement(q.a,{icon:"utensils"})," Greedy"))}var V=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)({value:"",touched:!1,errors:""}),o=Object(f.a)(i,2),u=o[0],j=o[1],y=Object(n.useState)([]),w=Object(f.a)(y,2),N=w[0],k=w[1],x=Object(n.useState)({value:0,errors:""}),C=Object(f.a)(x,2),B=C[0],S=C[1],R=Object(n.useState)(!1),F=Object(f.a)(R,2),A=F[0],V=F[1],W=Object(n.useState)(),D=Object(f.a)(W,2),U=D[0],G=D[1],J=Object(n.useState)(!1),X=Object(f.a)(J,2),Q=X[0],$=X[1],z=Object(n.useState)(!1),H=Object(f.a)(z,2),K=H[0],M=H[1],P={name:"",value:"",weight:"",stock:"",qty:"",time:""},Y=function(e,t){var a=l.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)):a}));c(a);var n=N.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,"")):a}));k(n)},Z=function(e){return function(t){if(t.target.value){var a=N.map((function(a,n){return e===n&&"name"!==t.target.name&&t.target.value%1!==0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must be number")):e===n&&"name"!==t.target.name&&parseInt(t.target.value)<=0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must > 0")):a}));k(a)}else{var n=N.map((function(a,n){return e===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Required")):a}));k(n)}}},_=function(){c([]),k([]),j({value:"",touched:!1,errors:""}),S(Object(m.a)(Object(m.a)({},B),{},{value:0})),V(!1),G(),M(!1)},ee=function(){return 0===B.value&&(S(Object(m.a)(Object(m.a)({},B),{},{errors:"Required"})),!0)};return console.log("re-render",Q),console.log(l.length>0&&"ok"),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(p.a,{form:!0},r.a.createElement(E.a,{md:3,className:"offset-md-2"},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(b.a,null,r.a.createElement("legend",null,"Weight"),r.a.createElement(h.a,{style:{width:"100px"},type:"number",name:"weight",id:"weight",value:u.value,onChange:function(e){j(Object(m.a)(Object(m.a)({},u),{},{value:e.target.value,errors:""}))},onBlur:function(e){j(Object(m.a)(Object(m.a)({},u),{},{touched:!0})),e.target.value?e.target.value%1!==0?j(Object(m.a)(Object(m.a)({},u),{},{errors:"Value must be number"})):parseInt(e.target.value)<=0&&j(Object(m.a)(Object(m.a)({},u),{},{errors:"Value must be > 0"})):j(Object(m.a)(Object(m.a)({},u),{},{errors:"Required"}))},className:u.errors&&"is-invalid"}),u.errors&&r.a.createElement("span",{className:"invalid-feedback"},u.errors)))),r.a.createElement(E.a,{md:3},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(T,{onTypeChange:function(e){S({value:e.target.value,errors:""})},type:B}))),r.a.createElement(E.a,{md:3},r.a.createElement("div",{className:"sd-fade-left-right"},r.a.createElement(I,{setFileNames:function(e){G(e)},fileNames:U,setIsLoading:$,setInputFile:function(e,t){_(),j(Object(m.a)(Object(m.a)({},u),{},{value:e,errors:""})),function(e){c(e),k([]),e.forEach((function(e){k((function(e){return[].concat(Object(d.a)(e),[P])}))}))}(t),M(!0)},disabled:K})))),r.a.createElement(L,{clearItem:_,addItem:function(){c([].concat(Object(d.a)(l),[P])),k([].concat(Object(d.a)(N),[P]))},onSubmit:function(){if(!ee()&&!function(){var e=!1;""===u.value&&(j(Object(m.a)(Object(m.a)({},u),{},{errors:"Required"})),e=!0);for(var t=Object(d.a)(N),a=0;a<l.length;a++){var n=Object(m.a)({},t[a]);""===l[a].name&&(n.name="Required",e=!0),""===l[a].value&&(n.value="Required",e=!0),""===l[a].weight&&(n.weight="Required",e=!0),""===l[a].stock&&"2"===B.value&&(n.stock="Required",e=!0),"2"!==B.value&&(n.stock=""),t[a]=n}return k(t),e}())switch(B.value){case"1":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),t-=e.qty*e.weight})),a}(l,parseInt(u.value))),void V(!0);case"2":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>e.stock&&(e.qty=e.stock),t-=e.qty*e.weight})),a}(l,parseInt(u.value))),void V(!0);case"3":return c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>1&&(e.qty=1),t-=e.qty*e.weight})),a}(l,parseInt(u.value))),void V(!0);default:return}}}),r.a.createElement("h2",{className:"text-center sd-fade-up-down"},"Table Items"),r.a.createElement(g.a,{striped:!0,className:"table-hover sd-fade-up-down"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"500px"}},"Name"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Stock"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null))),r.a.createElement(O.a,{typeName:"tbody",enterAnimation:{from:{transform:"translateX(-100%)",opacity:.1},to:{}},leaveAnimation:{from:{},to:{transform:"translateX(100%)",opacity:.1}}},l.length>0&&!Q&&l.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",id:"name",value:e.name?e.name:null,name:"name",onChange:function(e){return Y(e,t)},onBlur:Z(t),className:N[t]&&N[t].name&&"is-invalid"}),N[t].name&&r.a.createElement("span",{className:"invalid-feedback"},N[t].name)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.value,name:"value",onChange:function(e){return Y(e,t)},onBlur:Z(t),className:N[t].value&&"is-invalid"}),N[t].value&&r.a.createElement("span",{className:"invalid-feedback"},N[t].value)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.weight,name:"weight",onChange:function(e){return Y(e,t)},onBlur:Z(t),className:N[t].weight&&"is-invalid"}),N[t].weight&&r.a.createElement("span",{className:"invalid-feedback"},N[t].weight)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.stock,name:"stock",onChange:function(e){return Y(e,t)},onBlur:Z(t),className:N[t].stock&&"is-invalid",disabled:"2"!==B.value}),N[t].stock&&r.a.createElement("span",{className:"invalid-feedback"},N[t].stock)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",disabled:!0,value:e.qty,name:"qty",onChange:function(e){return Y(e,t)}})),r.a.createElement("td",null,r.a.createElement(q.a,{icon:"trash-alt",className:"icon-trash",onClick:function(){return function(e){var t=Object(d.a)(l);t.splice(e,1),c(t);var a=Object(d.a)(N);a.splice(e,1),k(a)}(t)}})))})),A&&r.a.createElement("tr",{className:"sd-total-row"},r.a.createElement("td",{className:"sd-total-title"},"Total:"),r.a.createElement("td",null,l.reduce((function(e,t){return e+t.qty*t.value}),0)),r.a.createElement("td",null,l.reduce((function(e,t){return e+t.qty*t.weight}),0)))))))},W=a(63);var D=function(e){return r.a.createElement(W.a,null,r.a.createElement(V,null))};function U(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"sd-header"},"Greedy Algorithm Web Applications"))}var G=function(){return i.b.add(o.a,u.c,u.a,u.d,u.b,u.e,u.d),r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.327ef970.chunk.js.map