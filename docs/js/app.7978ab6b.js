(function(e){function t(t){for(var n,l,s=t[0],r=t[1],c=t[2],d=0,m=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1273:function(e,t,a){"use strict";var n=a("1d78"),o=a.n(n);o.a},"198b":function(e,t,a){},"1d78":function(e,t,a){},"207b":function(e,t,a){},"2bfd":function(e,t,a){},"2e59":function(e,t,a){},3151:function(e,t,a){"use strict";var n=a("3b27"),o=a.n(n);o.a},"3b27":function(e,t,a){},"42ee":function(e,t,a){},"431e":function(e,t,a){"use strict";var n=a("e2e8"),o=a.n(n);o.a},"55e4":function(e,t,a){},5601:function(e,t,a){"use strict";var n=a("198b"),o=a.n(n);o.a},"56c9":function(e,t,a){},7257:function(e,t,a){},"7cc6":function(e,t,a){"use strict";var n=a("2e59"),o=a.n(n);o.a},8681:function(e,t,a){},"8c94":function(e,t,a){"use strict";var n=a("7257"),o=a.n(n);o.a},"8f37":function(e,t,a){"use strict";var n=a("56c9"),o=a.n(n);o.a},"90e5":function(e,t,a){"use strict";var n=a("953a"),o=a.n(n);o.a},"94a6":function(e,t,a){"use strict";var n=a("42ee"),o=a.n(n);o.a},"953a":function(e,t,a){},ad11:function(e,t,a){"use strict";var n=a("8681"),o=a.n(n);o.a},b8e3:function(e,t,a){"use strict";var n=a("207b"),o=a.n(n);o.a},cd49:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"OButton",(function(){return A})),a.d(n,"OCheckbox",(function(){return q})),a.d(n,"OCrate",(function(){return K})),a.d(n,"ODatalist",(function(){return ee})),a.d(n,"OElement",(function(){return E})),a.d(n,"OFieldset",(function(){return le})),a.d(n,"OInput",(function(){return _e})),a.d(n,"OLabel",(function(){return P})),a.d(n,"OLegend",(function(){return $e})),a.d(n,"ORadio",(function(){return Se})),a.d(n,"OSelect",(function(){return Be})),a.d(n,"OTextarea",(function(){return Ue})),a.d(n,"OValidationMessage",(function(){return fe}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=a("8c4f"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main",attrs:{id:"app"}},[a("h1",[e._v("vonion 🧅")]),a("app-nav"),a("router-view")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"columns"},e._l(e.routes,(function(t){return a("router-link",{key:t.key,staticClass:"column is-narrow",attrs:{to:{name:t.name}}},[e._v(" "+e._s(t.text)+" ")])})),1)])},c=[],u=o["a"].extend({name:"AppNav",data:function(){return{routes:[{text:"Select",name:"Select",key:"select"},{text:"Input",name:"Input",key:"input"},{text:"Textarea",name:"Textarea",key:"textarea"},{text:"Checkbox",name:"Checkbox",key:"checkbox"},{text:"Radio",name:"Radio",key:"radio"},{text:"Button",name:"Button",key:"button"},{text:"Crate",name:"Crate",key:"crate"},{text:"Datalist",name:"Datalist",key:"datalist"},{text:"Element",name:"Element",key:"element"},{text:"Fieldset",name:"Fieldset",key:"fieldset"},{text:"Label",name:"Label",key:"label"},{text:"Legend",name:"Legend",key:"legend"},{text:"Examples",name:"Examples",path:"/examples"}]}}}),d=u,m=a("2877"),p=Object(m["a"])(d,r,c,!1,null,null,null),v=p.exports,f=o["a"].extend({name:"App",components:{AppNav:v}}),b=f,h=(a("3151"),Object(m["a"])(b,l,s,!1,null,"cc281360",null)),x=h.exports,_=(a("fb98"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("button",e._g(e._b({staticClass:"button",class:{chive:e.isChive,"red-onion":e.isRedOnion}},"button",Object.assign({},{type:"button"},e.$attrs),!1),e.$listeners),[e._t("default")],2)])}),g=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"element",class:{row:e.isRow}},[e._t("default")],2)},y=[],M=o["a"].extend({name:"OElement",props:{isRow:Boolean}}),k=M,$=(a("431e"),Object(m["a"])(k,O,y,!1,null,"7aeb1176",null)),E=$.exports,C=o["a"].extend({name:"OButton",components:{OElement:E},props:{isChive:Boolean,isRedOnion:Boolean}}),N=C,j=(a("7cc6"),Object(m["a"])(N,_,g,!1,null,"71757652",null)),A=j.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",{attrs:{"is-row":""}},[a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"checkbox",attrs:{type:"checkbox",id:e.id},domProps:{value:e.value,checked:Array.isArray(e.vModel)?e._i(e.vModel,e.value)>-1:e.vModel},on:{change:function(t){var a=e.vModel,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=e.value,l=e._i(a,i);n.checked?l<0&&(e.vModel=a.concat([i])):l>-1&&(e.vModel=a.slice(0,l).concat(a.slice(l+1)))}else e.vModel=o}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))),a("o-label",{staticClass:"label",attrs:{for:e.id}},[e._t("default")],2)],1)},w=[],D=(a("c740"),a("fb6a"),a("45fc"),a("a434"),a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",e._g(e._b({staticClass:"label"},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),L=[],V=o["a"].extend({name:"OLabel"}),R=V,B=(a("1273"),Object(m["a"])(R,D,L,!1,null,"b57378a6",null)),P=B.exports,T=o["a"].extend({name:"OCheckbox",components:{OElement:E,OLabel:P},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean],value:{default:!0,type:[String,Number,Array,Object,Boolean]}},computed:{isArrayModel:function(){return Array.isArray(this.vModelValue)},vModel:{get:function(){var e=this;return this.isArrayModel?this.vModelValue.some((function(t){return JSON.stringify(t)===JSON.stringify(e.value)})):this.vModelValue===this.value},set:function(e){var t=this;if(this.isArrayModel){var a=this.vModelValue.slice(),n=a.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t.value)}));n>=0?a.splice(n,1):a.push(this.value),this.$emit("change",a)}else this.$emit("change",e)}}}}),F=T,I=(a("8c94"),Object(m["a"])(F,S,w,!1,null,"21d5bac4",null)),q=I.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("div",{staticClass:"crate",class:{chive:e.isChive,"red-onion":e.isRedOnion}},[e._t("default")],2)])},H=[],J=o["a"].extend({name:"OCrate",components:{OElement:E},props:{isChive:Boolean,isRedOnion:Boolean}}),W=J,G=(a("94a6"),Object(m["a"])(W,U,H,!1,null,"2cd40d70",null)),K=G.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),"checkbox"===e.$attrs.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"datalist",attrs:{id:e.id,list:e.id+"-datalist",type:"checkbox"},domProps:{checked:Array.isArray(e.vModel)?e._i(e.vModel,null)>-1:e.vModel},on:{change:function(t){var a=e.vModel,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=null,l=e._i(a,i);n.checked?l<0&&(e.vModel=a.concat([i])):l>-1&&(e.vModel=a.slice(0,l).concat(a.slice(l+1)))}else e.vModel=o}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))):"radio"===e.$attrs.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"datalist",attrs:{id:e.id,list:e.id+"-datalist",type:"radio"},domProps:{checked:e._q(e.vModel,null)},on:{change:function(t){e.vModel=null}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))):a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"datalist",attrs:{id:e.id,list:e.id+"-datalist",type:e.$attrs.type},domProps:{value:e.vModel},on:{input:function(t){t.target.composing||(e.vModel=t.target.value)}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))),a("datalist",{attrs:{id:e.id+"-datalist"}},[e._t("option")],2)],1)},Y=[],Q=o["a"].extend({name:"ODatalist",components:{OLabel:P,OElement:E},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("change",e)}}}}),X=Q,Z=(a("ad11"),Object(m["a"])(X,z,Y,!1,null,"7038114c",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("fieldset",e._g(e._b({staticClass:"fieldset"},"fieldset",e.$attrs,!1),e.$listeners),[e._t("default")],2)])},ae=[],ne=o["a"].extend({name:"OFieldset",components:{OElement:E}}),oe=ne,ie=(a("8f37"),Object(m["a"])(oe,te,ae,!1,null,"16116bb2",null)),le=ie.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("div",{staticClass:"flex-space-between"},[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),a("o-validation-message",{attrs:{parent:this}})],1),"checkbox"===Object.assign({},{type:"text"},e.$attrs).type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:"checkbox"},domProps:{checked:Array.isArray(e.vModel)?e._i(e.vModel,null)>-1:e.vModel},on:{change:function(t){var a=e.vModel,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=null,l=e._i(a,i);n.checked?l<0&&(e.vModel=a.concat([i])):l>-1&&(e.vModel=a.slice(0,l).concat(a.slice(l+1)))}else e.vModel=o}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}}))):"radio"===Object.assign({},{type:"text"},e.$attrs).type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:"radio"},domProps:{checked:e._q(e.vModel,null)},on:{change:function(t){e.vModel=null}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}}))):a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:Object.assign({},{type:"text"},e.$attrs).type},domProps:{value:e.vModel},on:{input:function(t){t.target.composing||(e.vModel=t.target.value)}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}})))])},re=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("small",{directives:[{name:"show",rawName:"v-show",value:e.isTouched,expression:"isTouched"}],staticClass:"validation-message",class:{valid:this.isValid,invalid:!this.isValid}},[e._v(" "+e._s(e.validationMessage)+" ")])},ue=[],de=(a("96cf"),a("1da1")),me=o["a"].extend({name:"OValidationMessage",props:{parent:{type:o["a"],required:!0}},data:function(){return{isTouched:!1,isValid:!0,validationMessage:""}},mounted:function(){this.setupListeners()},methods:{setupListeners:function(){var e=this;return Object(de["a"])(regeneratorRuntime.mark((function t(){var a,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:a=e.parent.$el.querySelector("input, select, textarea"),a&&(n=function(){e.isTouched=!0,e.handleIsValid()},o=function(){e.handleIsValid(),e.isTouched=!1},i=function(){e.handleIsValid(),e.isTouched=!1},a.addEventListener("blur",n),a.addEventListener("input",o),a.addEventListener("change",i));case 4:case"end":return t.stop()}}),t)})))()},handleIsValid:function(){var e=this.parent.$el.querySelector(":invalid, :valid");e&&(this.isValid=e.validity.valid,this.validationMessage=e.validationMessage)}}}),pe=me,ve=(a("e11c"),Object(m["a"])(pe,ce,ue,!1,null,"1035909b",null)),fe=ve.exports,be=o["a"].extend({name:"OInput",components:{OLabel:P,OElement:E,OValidationMessage:fe},model:{prop:"vModelValue",event:"input"},props:{id:String,vModelValue:[String,Number]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("input",e)}}}}),he=be,xe=(a("5601"),Object(m["a"])(he,se,re,!1,null,"4f27dff3",null)),_e=xe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("legend",e._g(e._b({staticClass:"legend"},"legend",e.$attrs,!1),e.$listeners),[e._t("default")],2)},Oe=[],ye=o["a"].extend({name:"OLegend"}),Me=ye,ke=(a("b8e3"),Object(m["a"])(Me,ge,Oe,!1,null,"727d175c",null)),$e=ke.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",{attrs:{"is-row":""}},[a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"radio",attrs:{type:"radio",id:e.id},domProps:{value:e.value,checked:e._q(e.vModel,e.value)},on:{change:function(t){e.vModel=e.value}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))),a("o-label",{staticClass:"label",attrs:{for:e.id}},[e._t("default")],2)],1)},Ce=[],Ne=o["a"].extend({name:"ORadio",components:{OElement:E,OLabel:P},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean],value:{required:!0,type:[String,Number,Array,Object,Boolean]}},computed:{vModel:{get:function(){return this.vModelValue},set:function(){this.$emit("change",this.value)}}}}),je=Ne,Ae=(a("d7c3"),Object(m["a"])(je,Ee,Ce,!1,null,"09479bea",null)),Se=Ae.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("div",{staticClass:"flex-space-between"},[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),a("o-validation-message",{attrs:{parent:this}})],1),a("select",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"select",attrs:{id:e.id},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vModel=t.target.multiple?a:a[0]}}},"select",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}})),[e._t("option")],2)])},De=[],Le=o["a"].extend({name:"OSelect",components:{OElement:E,OLabel:P,OValidationMessage:fe},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("change",e)}}}}),Ve=Le,Re=(a("f27a"),Object(m["a"])(Ve,we,De,!1,null,"55f4d64c",null)),Be=Re.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("div",{staticClass:"flex-space-between"},[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),a("o-validation-message",{attrs:{parent:this}})],1),a("textarea",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"textarea",attrs:{id:e.id},domProps:{value:e.vModel},on:{input:function(t){t.target.composing||(e.vModel=t.target.value)}}},"textarea",Object.assign({},{rows:4,cols:40},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}})))])},Te=[],Fe=o["a"].extend({name:"OTextarea",components:{OElement:E,OLabel:P,OValidationMessage:fe},model:{prop:"vModelValue",event:"input"},props:{id:String,vModelValue:[String,Number]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("input",e)}}}}),Ie=Fe,qe=(a("f1bb"),Object(m["a"])(Ie,Pe,Te,!1,null,"f29dae40",null)),Ue=qe.exports,He=n;function Je(e){for(var t in He){var a=He[t];e.component(t,a)}}var We=Je,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Button"}},[a("o-button",[e._v("Click me!")]),a("o-button",{attrs:{"is-chive":""}},[e._v("No, click me!")]),a("o-button",{attrs:{"is-red-onion":""}},[e._v("I'm nice and silent.")])],1)},Ke=[],ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("h3",[e._v(e._s(e.title))]),e._t("default"),e.data?a("div",{staticClass:"demo-controls"},[a("h4",[e._v("Data")]),a("div",{staticClass:"data"},[a("o-button",{on:{click:function(t){e.showData=!e.showData}}},[e._v(e._s(e.showData?"hide data":"show data"))]),a("pre",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[e._v(e._s(e.data))])],1)]):e._e()],2)},Ye=[],Qe=o["a"].extend({name:"OComponentDemo",props:{title:String,data:Object},data:function(){return{showData:!1}}}),Xe=Qe,Ze=(a("90e5"),Object(m["a"])(Xe,ze,Ye,!1,null,"e7d5b090",null)),et=Ze.exports,tt=o["a"].extend({name:"OButtonDemo",components:{OButton:A,OComponentDemo:et}}),at=tt,nt=Object(m["a"])(at,Ge,Ke,!1,null,null,null),ot=nt.exports,it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Crate"}},[a("o-crate",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")]),a("o-crate",{attrs:{"is-chive":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")]),a("o-crate",{attrs:{"is-red-onion":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")])],1)},lt=[],st=o["a"].extend({name:"OCrateDemo",components:{OCrate:K,OComponentDemo:et}}),rt=st,ct=Object(m["a"])(rt,it,lt,!1,null,null,null),ut=ct.exports,dt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Datalist",data:e.data}},[a("o-datalist",{attrs:{id:"pet"},scopedSlots:e._u([{key:"option",fn:function(){return[a("option",{attrs:{value:"Dog"}}),a("option",{attrs:{value:"Cat"}}),a("option",{attrs:{value:"Bird"}}),a("option",{attrs:{value:"Cucumber"}}),a("option",{attrs:{value:"Horse"}})]},proxy:!0}]),model:{value:e.data.pet,callback:function(t){e.$set(e.data,"pet",t)},expression:"data.pet"}},[e._v(" Pet ")])],1)},mt=[],pt=o["a"].extend({name:"ODatalistDemo",data:function(){return{data:{country:"",pet:""}}},components:{ODatalist:ee,OComponentDemo:et}}),vt=pt,ft=Object(m["a"])(vt,dt,mt,!1,null,null,null),bt=ft.exports,ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Checkbox",data:e.data}},[a("o-checkbox",{attrs:{id:"apple"},model:{value:e.data.apple,callback:function(t){e.$set(e.data,"apple",t)},expression:"data.apple"}},[e._v("Apple")]),a("o-checkbox",{attrs:{id:"banana"},model:{value:e.data.banana,callback:function(t){e.$set(e.data,"banana",t)},expression:"data.banana"}},[e._v("Banana")]),a("o-checkbox",{attrs:{id:"cucumber"},model:{value:e.data.cucumber,callback:function(t){e.$set(e.data,"cucumber",t)},expression:"data.cucumber"}},[e._v("Cucumber")]),a("strong",[e._v("Array model")]),a("o-checkbox",{attrs:{id:"fruits-apple",value:"APPLE"},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Apple")]),a("o-checkbox",{attrs:{id:"fruits-banana",value:{value:"BANANA"}},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Banana")]),a("o-checkbox",{attrs:{id:"fruits-cucumber",value:["CUCUMBER"]},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Cucumber")])],1)},xt=[],_t=o["a"].extend({name:"OCheckboxDemo",data:function(){return{data:{apple:!0,banana:!1,cucumber:!1,fruits:[{value:"BANANA"}]}}},components:{OCheckbox:q,OComponentDemo:et}}),gt=_t,Ot=Object(m["a"])(gt,ht,xt,!1,null,null,null),yt=Ot.exports,Mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Input",data:e.data}},[a("o-input",{attrs:{id:"firstName"},model:{value:e.data.firstName,callback:function(t){e.$set(e.data,"firstName",t)},expression:"data.firstName"}},[e._v("First name")]),a("o-input",{attrs:{id:"lastName"},model:{value:e.data.lastName,callback:function(t){e.$set(e.data,"lastName",t)},expression:"data.lastName"}},[e._v("Last name")]),a("o-input",{attrs:{id:"age",type:"number"},model:{value:e.data.age,callback:function(t){e.$set(e.data,"age",e._n(t))},expression:"data.age"}},[e._v("Age")])],1)},kt=[],$t=o["a"].extend({name:"OInputDemo",data:function(){return{data:{firstName:"John",lastName:"Doe",age:12}}},components:{OInput:_e,OComponentDemo:et}}),Et=$t,Ct=Object(m["a"])(Et,Mt,kt,!1,null,null,null),Nt=Ct.exports,jt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Radio",data:e.data}},[a("o-radio",{attrs:{id:"radio-fruit-apple",name:"fruit",value:"APPLE"},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Apple")]),a("o-radio",{attrs:{id:"radio-fruit-banana",name:"fruit",value:{value:"BANANA"}},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Banana")]),a("o-radio",{attrs:{id:"radio-fruit-cucumber",name:"fruit",value:["CUCUMBER"]},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Cucumber")])],1)},At=[],St=o["a"].extend({name:"ORadioDemo",data:function(){return{data:{fruit:"APPLE"}}},components:{ORadio:Se,OComponentDemo:et}}),wt=St,Dt=Object(m["a"])(wt,jt,At,!1,null,null,null),Lt=Dt.exports,Vt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Select",data:e.data}},[a("o-select",{attrs:{id:"country"},scopedSlots:e._u([{key:"option",fn:function(){return[a("option",{attrs:{value:"SWEDEN"}},[e._v("Sweden")]),a("option",{domProps:{value:{value:"DENMARK"}}},[e._v("Denmark")]),a("option",{domProps:{value:["FINLAND"]}},[e._v("Finland")]),a("option",{attrs:{value:"NORWAY"}},[e._v("Norway")])]},proxy:!0}]),model:{value:e.data.country,callback:function(t){e.$set(e.data,"country",t)},expression:"data.country"}},[e._v(" Country ")]),a("o-select",{attrs:{id:"pet",multiple:"",size:"3"},scopedSlots:e._u([{key:"option",fn:function(){return[a("option",{attrs:{value:"DOG"}},[e._v("Dog")]),a("option",{attrs:{value:"CAT"}},[e._v("Cat")]),a("option",{attrs:{value:"BIRD"}},[e._v("Bird")]),a("option",{attrs:{value:"CUCUMBER"}},[e._v("Cucumber")]),a("option",{attrs:{value:"HORSE"}},[e._v("Horse")])]},proxy:!0}]),model:{value:e.data.pet,callback:function(t){e.$set(e.data,"pet",t)},expression:"data.pet"}},[e._v(" Pet ")])],1)},Rt=[],Bt=o["a"].extend({name:"OInputDemo",data:function(){return{data:{country:"SWEDEN",pet:["DOG","BIRD"]}}},components:{OSelect:Be,OComponentDemo:et}}),Pt=Bt,Tt=Object(m["a"])(Pt,Vt,Rt,!1,null,null,null),Ft=Tt.exports,It=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Textarea",data:e.data}},[a("o-textarea",{attrs:{id:"description"},model:{value:e.data.description,callback:function(t){e.$set(e.data,"description",t)},expression:"data.description"}},[e._v("Description")]),a("o-textarea",{attrs:{id:"story",rows:"5"},model:{value:e.data.story,callback:function(t){e.$set(e.data,"story",t)},expression:"data.story"}},[e._v("Story")])],1)},qt=[],Ut=o["a"].extend({name:"OTextareaDemo",data:function(){return{data:{description:"",story:"Once upon a time..."}}},components:{OTextarea:Ue,OComponentDemo:et}}),Ht=Ut,Jt=Object(m["a"])(Ht,It,qt,!1,null,null,null),Wt=Jt.exports,Gt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Element"}},[a("o-element",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")])],1)},Kt=[],zt=o["a"].extend({name:"OElementDemo",components:{OElement:E,OComponentDemo:et}}),Yt=zt,Qt=Object(m["a"])(Yt,Gt,Kt,!1,null,null,null),Xt=Qt.exports,Zt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Fieldset"}},[a("o-fieldset",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")])],1)},ea=[],ta=o["a"].extend({name:"OFieldsetDemo",components:{OFieldset:le,OComponentDemo:et}}),aa=ta,na=Object(m["a"])(aa,Zt,ea,!1,null,null,null),oa=na.exports,ia=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Label"}},[a("o-label",[e._v(" First name ")]),a("o-label",[e._v(" Middle name ")]),a("o-label",[e._v(" Last name ")])],1)},la=[],sa=o["a"].extend({name:"OLabelDemo",components:{OLabel:P,OComponentDemo:et}}),ra=sa,ca=Object(m["a"])(ra,ia,la,!1,null,null,null),ua=ca.exports,da=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Legend"}},[a("o-legend",[e._v(" Hobbies: ")]),a("o-legend",[e._v(" Animals: ")])],1)},ma=[],pa=o["a"].extend({name:"OLegendDemo",components:{OLegend:$e,OComponentDemo:et}}),va=pa,fa=Object(m["a"])(va,da,ma,!1,null,null,null),ba=fa.exports,ha=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Examples")]),a("examples-nav"),a("router-view")],1)},xa=[],_a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"columns"},e._l(e.routes,(function(t){return a("router-link",{key:t.key,staticClass:"column is-narrow",attrs:{to:{name:t.name}}},[e._v(" "+e._s(t.text)+" ")])})),1)])},ga=[],Oa=o["a"].extend({name:"AppNav",data:function(){return{routes:[{text:"Form example",name:"FormExample",key:"form-example"}]}}}),ya=Oa,Ma=Object(m["a"])(ya,_a,ga,!1,null,null,null),ka=Ma.exports,$a=o["a"].extend({name:"Examples",components:{ExamplesNav:ka}}),Ea=$a,Ca=Object(m["a"])(Ea,ha,xa,!1,null,null,null),Na=Ca.exports,ja=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Form example",data:e.data}},[a("form",{on:{submit:e.onSubmit}},[a("o-crate",{attrs:{"is-chive":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum accusamus eligendi molestias laudantium rerum tempora in adipisci dolore. Maxime modi accusamus debitis similique aperiam exercitationem, deleniti iusto corporis ad. ")]),a("o-input",{attrs:{required:""},model:{value:e.data.firstName,callback:function(t){e.$set(e.data,"firstName",t)},expression:"data.firstName"}},[e._v("First name")]),a("o-input",{attrs:{required:""},model:{value:e.data.lastName,callback:function(t){e.$set(e.data,"lastName",t)},expression:"data.lastName"}},[e._v("Last name")]),a("o-fieldset",[a("o-legend",[e._v("Hobbies:")]),a("o-checkbox",{attrs:{id:"hobbies-ONEWHEEL",value:"ONEWHEEL"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Onewheel")]),a("o-checkbox",{attrs:{id:"hobbies-HORSES",value:"HORSES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Horses")]),a("o-checkbox",{attrs:{id:"hobbies-COMPUTERS",value:"COMPUTERS"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Computers")]),a("o-checkbox",{attrs:{id:"hobbies-CATS",value:"CATS"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Cats")]),a("o-checkbox",{attrs:{id:"hobbies-VIDEO_GAMES",value:"VIDEO_GAMES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Video games")]),a("o-checkbox",{attrs:{id:"hobbies-BOARD_GAMES",value:"BOARD_GAMES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Board games")])],1),a("o-textarea",{attrs:{required:"",minlength:"10",cols:"100"},model:{value:e.data.about,callback:function(t){e.$set(e.data,"about",t)},expression:"data.about"}},[e._v("About")]),a("o-select",{attrs:{required:""},scopedSlots:e._u([{key:"option",fn:function(){return e._l(100,(function(t){return a("option",{key:t},[e._v(e._s(t))])}))},proxy:!0}]),model:{value:e.data.age,callback:function(t){e.$set(e.data,"age",e._n(t))},expression:"data.age"}},[e._v(" Age ")]),a("o-fieldset",[a("o-legend",[e._v("Gender:")]),a("o-radio",{attrs:{id:"gender-MALE",name:"gender",value:"MALE"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Male")]),a("o-radio",{attrs:{id:"gender-FEMALE",name:"gender",value:"FEMALE"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Female")]),a("o-radio",{attrs:{id:"gender-UNKNOWN",name:"gender",value:"UNKNOWN"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Unknown")])],1),a("o-button",{attrs:{type:"submit","is-chive":""}},[e._v("Submit")]),a("o-button",{attrs:{type:"button"},on:{click:e.onClickCancel}},[e._v("Cancel")])],1)])},Aa=[],Sa=(a("ac1f"),a("5319"),o["a"].extend({name:"FormExample",data:function(){return{data:{firstName:"John",lastName:"",hobbies:["ONEWHEEL","COMPUTERS"],about:"",age:null,gender:"MALE"}}},methods:{onSubmit:function(){alert("The form was submitted with:\n".concat(JSON.stringify(this.data,null,2)))},onClickCancel:function(){this.$router.replace({name:"Examples"})}},components:{OComponentDemo:et}})),wa=Sa,Da=Object(m["a"])(wa,ja,Aa,!1,null,null,null),La=Da.exports;o["a"].config.productionTip=!1,o["a"].use(i["a"]),o["a"].use(We);var Va=new i["a"]({routes:[{name:"Button",path:"/button",component:ot},{name:"Crate",path:"/crate",component:ut},{name:"Datalist",path:"/datalist",component:bt},{name:"Checkbox",path:"/checkbox",component:yt},{name:"Input",path:"/input",component:Nt},{name:"Radio",path:"/radio",component:Lt},{name:"Select",path:"/select",component:Ft},{name:"Textarea",path:"/textarea",component:Wt},{name:"Element",path:"/element",component:Xt},{name:"Fieldset",path:"/fieldset",component:oa},{name:"Label",path:"/label",component:ua},{name:"Legend",path:"/legend",component:ba},{name:"Examples",path:"/examples",component:Na,children:[{name:"FormExample",path:"form-example",component:La}]}]});new o["a"]({render:function(e){return e(x)},router:Va}).$mount("#app")},d7c3:function(e,t,a){"use strict";var n=a("2bfd"),o=a.n(n);o.a},e11c:function(e,t,a){"use strict";var n=a("f80d"),o=a.n(n);o.a},e2e8:function(e,t,a){},f1bb:function(e,t,a){"use strict";var n=a("55e4"),o=a.n(n);o.a},f26b:function(e,t,a){},f27a:function(e,t,a){"use strict";var n=a("f26b"),o=a.n(n);o.a},f80d:function(e,t,a){},fb98:function(e,t,a){}});
//# sourceMappingURL=app.7978ab6b.js.map