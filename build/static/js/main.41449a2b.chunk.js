(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(40)},19:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(12),r=n.n(l),o=(n(19),n(2)),c=n(3),i=function(e){return u.a.createElement("form",{onSubmit:e.submitCommand},u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Nimi: "),u.a.createElement("td",null,u.a.createElement("input",{value:e.nameValue,onChange:e.nameChange,placeholder:"Nimi"}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Numero: "),u.a.createElement("td",null,u.a.createElement("input",{value:e.numberValue,onChange:e.numberChange,placeholder:"Numero"}))))),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"Lis\xe4\xe4")))},m=function(e){var t=e.filterChange;return u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Rajaa n\xe4ytett\xe4vi\xe4: "),u.a.createElement("td",null,u.a.createElement("input",{onChange:t,placeholder:"Nimi tai numero..."})))))},f=function(e){var t=e.person,n=e.handler;return u.a.createElement("tr",null,u.a.createElement("td",null,t.name),u.a.createElement("td",null,t.number),u.a.createElement("td",null,u.a.createElement("button",{onClick:n},"poista")))},s=function(e){var t=e.nimet,n=e.handleDelete;return u.a.createElement("table",null,u.a.createElement("tbody",null,t.map(function(e){return u.a.createElement(f,{person:e,key:t.indexOf(e),handler:function(){return n(e.id)}})})))},d=function(e){var t=e.message,n=e.messageType;return null===t?null:u.a.createElement("div",{className:n},t)},h=n(4),b=n.n(h),p="/api/persons",E=function(){return b.a.get(p).then(function(e){return e.data})},j=function(e){return b.a.post(p,e).then(function(e){return e.data})},v=function(e){return b.a.delete("".concat(p,"/").concat(e)).then(function(e){return e.data})},g=function(e,t){return b.a.put("".concat(p,"/").concat(e),t).then(function(e){return e.data})},w=(n(39),function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),f=Object(c.a)(r,2),h=f[0],b=f[1],p=Object(a.useState)(""),w=Object(c.a)(p,2),y=w[0],O=w[1],C=Object(a.useState)(""),x=Object(c.a)(C,2),k=x[0],N=x[1],L=Object(a.useState)({text:null,type:"info"}),T=Object(c.a)(L,2),S=T[0],K=T[1];Object(a.useEffect)(function(){E().then(function(e){l(e)})},[]);var P=0!==k.length?n.filter(function(e){return e.name.toLowerCase().includes(k.toLowerCase())|e.number.includes(k)}):n;return u.a.createElement("div",{className:"base"},u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(d,{message:S.text,messageType:S.type}),u.a.createElement(m,{filterChange:function(e){return N(e.target.value)}}),u.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),u.a.createElement(i,{submitCommand:function(e){e.preventDefault();var t=h.trim();if(0!==t.length||0!==y.trim().length)if(0!==t.length)if(0!==y.trim().length)if(y&&n.find(function(e){return e.name.toLowerCase()===t.toLowerCase()})){if(window.confirm("".concat(t," on jo luettelossa. Korvataanko vanha numero uudella?"))){var a=n.find(function(e){return e.name.toLowerCase()===t.toLowerCase()}),u=Object(o.a)({},a,{number:y});return void g(u.id,u).then(function(e){l(n.map(function(t){return t.id!==u.id?t:e})),b(""),O("")}).then(function(){K({text:"K\xe4ytt\xe4j\xe4n ".concat(u.name," numeroksi p\xe4ivitettiin ").concat(u.number,"."),type:"info"})}).then(setTimeout(function(){K(Object(o.a)({},S,{text:null}))},5e3)).catch(function(e){K({text:"K\xe4ytt\xe4j\xe4n ".concat(u.name," numeron muuttamisessa oli ongelma: ").concat(e,"."),type:"error"}),setTimeout(function(){K(Object(o.a)({},S,{text:null}))},7e3)})}}else{var r={name:t,number:y};j(r).then(function(e){l(n.concat(e)),b(""),O("")}).then(function(){K({text:"Lis\xe4ttiin ".concat(r.name," numerolla ").concat(r.number,"."),type:"info"})}).then(setTimeout(function(){K(Object(o.a)({},S,{text:null}))},5e3)).catch(function(e){K({text:"K\xe4ytt\xe4j\xe4n ".concat(r.name," lis\xe4\xe4misess\xe4 oli ongelma: ").concat(e,"."),type:"error"}),setTimeout(function(){K(Object(o.a)({},S,{text:null}))},7e3)})}else window.alert("Puhelinnumero on pakollinen.");else window.alert("Nimi on pakollinen.");else window.alert("Nimi ja puhelinnumero ovat pakollisia kentti\xe4.")},nameChange:function(e){return b(e.target.value)},nameValue:h,numberChange:function(e){return O(e.target.value)},numberValue:y}),u.a.createElement("h3",null,"Numerot"),u.a.createElement(s,{nimet:P,handleDelete:function(e){return function(e){var t=n.find(function(t){return t.id===e}).name;window.confirm("Poistetaanko ".concat(t," puhelinluettelosta?"))&&v(e).then(l(n.filter(function(t){return t.id!==e}))).then(function(){K({text:"Poistettiin ".concat(t,"."),type:"info"})}).then(setTimeout(function(){K(Object(o.a)({},S,{text:null}))},5e3)).catch(function(e){K({text:"K\xe4ytt\xe4j\xe4 ".concat(t," oli jo poistettu."),type:"error"}),setTimeout(function(){K(Object(o.a)({},S,{text:null}))},7e3)})}(e)}}))});r.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.41449a2b.chunk.js.map