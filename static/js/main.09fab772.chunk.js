(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},35:function(e,t,a){},36:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),c=a.n(l),i=(a(34),a(35),a(36),a(16)),u=a(28),o=a(13),s=a(11),m=a(5),d=a(14),v=a(9),f=a(58),p=a(59),E=a(60),b=a(51),h=a(53),g=a(61);var O=a(21),j=a.n(O),y=a(27),q=a(52),w=a(10);function k(e){var t=e.setWeightFile,a=e.setItemsFile,l=Object(n.useState)(),c=Object(v.a)(l,2),i=c[0],u=c[1];return r.a.createElement(b.a,null,r.a.createElement("legend",null,"File"),r.a.createElement(q.a,{for:"file",className:"sd-file-choose btn btn-primary"},"Upload ",r.a.createElement(w.a,{icon:"file-upload"})),r.a.createElement(h.a,{type:"file",name:"file",id:"file",onChange:function(e){return function(e){if(void 0!==e&&void 0!==e.target.files[0]){e.preventDefault();var n=[],r=new FileReader;u(e.target.files[0].name),r.onload=function(){var e=Object(y.a)(j.a.mark((function e(r){var l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=r.target.result.split(/\r\n|\n/),t(parseInt(l[0])),l.forEach((function(e,t){if(0!==t){var a=e.split(" "),r=a[2]%1===0?a[2]:"",l="";""!==r?a.slice(3).forEach((function(e){l+=e+" "})):a.slice(2).forEach((function(e){l+=e+" "})),n.push({name:l.trim(),value:a[0],weight:a[1],stock:r,qty:"",time:""})}})),a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.readAsText(e.target.files[0])}}(e)},style:{display:"none"}}),r.a.createElement("br",null),r.a.createElement(q.a,null,i))}var N=a(63),x=a(54),C=a(55),I=a(56),B=a(57),R=function(e){var t=e.className,a=e.title,l=e.content,c=Object(n.useState)(!1),i=Object(v.a)(c,2),u=i[0],o=i[1],s=function(){return o(!u)};return r.a.createElement("div",null,r.a.createElement(w.a,{icon:"question-circle",onClick:s,className:"sd-icon-type"}),r.a.createElement(N.a,{isOpen:u,toggle:s,className:t},r.a.createElement(x.a,{toggle:s},a),r.a.createElement(C.a,null,l),r.a.createElement(I.a,null,r.a.createElement(B.a,{color:"primary",onClick:s},"Nice!"))))};function S(e){var t=e.onTypeChange,a=e.type;return r.a.createElement(b.a,{tag:"fieldset"},r.a.createElement("legend",null,"Type"),r.a.createElement("div",{className:"form-type"},r.a.createElement(b.a,{check:!0},r.a.createElement(q.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"1",onChange:function(e){return t(e)}})," ","Balo1"),r.a.createElement(R,{title:"Balo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(q.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"2",onChange:function(e){return t(e)}})," ","Balo2"),r.a.createElement(R,{title:"Balo 2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),r.a.createElement(b.a,{check:!0},r.a.createElement(q.a,{check:!0,className:"form-type-items"},r.a.createElement(h.a,{type:"radio",name:"radio1",value:"3",onChange:function(e){return t(e)}})," ","Balo3"),r.a.createElement(R,{title:"Balo 3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}))),r.a.createElement("div",{className:a.errors&&"is-invalid"}),a.errors&&r.a.createElement("span",{className:"invalid-feedback"},a.errors))}function F(e){var t=e.clearItem,a=e.addItem,n=e.onSubmit;return r.a.createElement("div",{className:"button-control"},r.a.createElement(B.a,{onClick:function(){return t()},color:"danger",className:"sd-btn"},r.a.createElement(w.a,{icon:"trash-alt"})," Clear")," ",r.a.createElement(B.a,{onClick:function(){return a()},color:"info",className:"sd-btn"},r.a.createElement(w.a,{icon:"plus-circle"})," Add Item")," ",r.a.createElement(B.a,{onClick:n,color:"success",className:"sd-btn"},r.a.createElement(w.a,{icon:"utensils"})," Greedy"))}var W=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)({value:"",touched:!1,errors:""}),u=Object(v.a)(i,2),o=u[0],O=u[1],j=Object(n.useState)([]),y=Object(v.a)(j,2),q=y[0],w=y[1],N=Object(n.useState)({value:0,errors:""}),x=Object(v.a)(N,2),C=x[0],I=x[1],B={name:"",value:"",weight:"",stock:"",qty:"",time:""},R=function(e,t){var a=l.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)):a}));c(a);var n=q.map((function(a,n){return t===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,"")):a}));w(n)},W=function(e){return function(t){if(t.target.value){var a=q.map((function(a,n){return e===n&&"name"!==t.target.name&&t.target.value%1!==0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must be number")):e===n&&"name"!==t.target.name&&parseInt(t.target.value)<=0?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Value must > 0")):a}));w(a)}else{var n=q.map((function(a,n){return e===n?Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},t.target.name,"Required")):a}));w(n)}}},T=function(){return 0===C.value&&(I(Object(m.a)(Object(m.a)({},C),{},{errors:"Required"})),!0)};return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(p.a,{form:!0},r.a.createElement(E.a,{md:3,className:"offset-md-2"},r.a.createElement(b.a,null,r.a.createElement("legend",null,"Weight"),r.a.createElement(h.a,{style:{width:"100px"},type:"number",name:"weight",id:"weight",value:o.value,onChange:function(e){O(Object(m.a)(Object(m.a)({},o),{},{value:e.target.value,errors:""}))},onBlur:function(e){O(Object(m.a)(Object(m.a)({},o),{},{touched:!0})),e.target.value?e.target.value%1!==0?O(Object(m.a)(Object(m.a)({},o),{},{errors:"Value must be number"})):parseInt(e.target.value)<=0&&O(Object(m.a)(Object(m.a)({},o),{},{errors:"Value must be > 0"})):O(Object(m.a)(Object(m.a)({},o),{},{errors:"Required"}))},className:o.errors&&"is-invalid"}),o.errors&&r.a.createElement("span",{className:"invalid-feedback"},o.errors))),r.a.createElement(E.a,{md:3},r.a.createElement(S,{onTypeChange:function(e){I({value:e.target.value,errors:""})},type:C})),r.a.createElement(E.a,{md:3},r.a.createElement(k,{setWeightFile:function(e){O(Object(m.a)(Object(m.a)({},o),{},{value:e,errors:""}))},setItemsFile:function(e){c([]),e.forEach((function(e){w((function(e){return[].concat(Object(d.a)(e),[B])})),c((function(t){return[].concat(Object(d.a)(t),[e])}))}))}}))),r.a.createElement(F,{clearItem:function(){c([]),w([]),O({value:"",touched:!1,errors:""}),I(Object(m.a)(Object(m.a)({},C),{},{value:0}))},addItem:function(){c([].concat(Object(d.a)(l),[B])),w([].concat(Object(d.a)(q),[B]))},onSubmit:function(){if(!T()&&!function(){var e=!1;""===o.value&&(O(Object(m.a)(Object(m.a)({},o),{},{errors:"Required"})),e=!0);for(var t=Object(d.a)(q),a=0;a<l.length;a++){var n=Object(m.a)({},t[a]);""===l[a].name&&(n.name="Required",e=!0),""===l[a].value&&(n.value="Required",e=!0),""===l[a].weight&&(n.weight="Required",e=!0),""===l[a].stock&&"2"===C.value&&(n.stock="Required",e=!0),"2"!==C.value&&(n.stock=""),t[a]=n}return w(t),e}())switch(console.log(C),C.value){case"1":return void c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),t-=e.qty*e.weight})),a}(l,parseInt(o.value)));case"2":return void c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>e.stock&&(e.qty=e.stock),t-=e.qty*e.weight})),a}(l,parseInt(o.value)));case"3":return void c(function(e,t){var a=e.slice().sort((function(e,t){return t.value/t.weight-e.value/e.weight}));return a.forEach((function(e){e.qty=parseInt(t/e.weight),e.qty>1&&(e.qty=1),t-=e.qty*e.weight})),a}(l,parseInt(o.value)));default:return}}}),r.a.createElement("h2",{className:"text-center"},"Table Items"),r.a.createElement(g.a,{striped:!0,className:"table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"500px"}},"Name"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Stock"),r.a.createElement("th",null,"Qty"))),r.a.createElement("tbody",null,l.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",id:"name",value:e?e.name:null,name:"name",onChange:function(e){return R(e,t)},onBlur:W(t),className:q[t]&&q[t].name&&"is-invalid"}),q[t].name&&r.a.createElement("span",{className:"invalid-feedback"},q[t].name)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.value,name:"value",onChange:function(e){return R(e,t)},onBlur:W(t),className:q[t].value&&"is-invalid"}),q[t].value&&r.a.createElement("span",{className:"invalid-feedback"},q[t].value)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.weight,name:"weight",onChange:function(e){return R(e,t)},onBlur:W(t),className:q[t].weight&&"is-invalid"}),q[t].weight&&r.a.createElement("span",{className:"invalid-feedback"},q[t].weight)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",value:e.stock,name:"stock",onChange:function(e){return R(e,t)},onBlur:W(t),className:q[t].stock&&"is-invalid",disabled:"2"!==C.value}),q[t].stock&&r.a.createElement("span",{className:"invalid-feedback"},q[t].stock)),r.a.createElement("td",null,r.a.createElement(h.a,{type:"text",disabled:!0,value:e.qty,name:"qty",onChange:function(e){return R(e,t)}})))}))))))},T=a(62);var V=function(e){return r.a.createElement(T.a,null,r.a.createElement(W,null))};function A(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"sd-header"},"Greedy Algorithm Web Applications"))}var D=function(){return i.b.add(u.a,o.c,o.a,o.d,o.b,o.e),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.09fab772.chunk.js.map