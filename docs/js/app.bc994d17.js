(function(e){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"1eb9":function(e,t,a){},"28e6":function(e,t,a){},"389c":function(e,t,a){},"437c":function(e,t,a){},"46d9":function(e,t,a){},"4b55":function(e,t,a){"use strict";var n=a("67fe"),o=a.n(n);o.a},"4d6c":function(e,t,a){"use strict";var n=a("4fe6"),o=a.n(n);o.a},"4fe6":function(e,t,a){},5782:function(e,t,a){"use strict";var n=a("46d9"),o=a.n(n);o.a},6294:function(e,t,a){"use strict";var n=a("437c"),o=a.n(n);o.a},"67fe":function(e,t,a){},"6aa0":function(e,t,a){"use strict";var n=a("1eb9"),o=a.n(n);o.a},"6ad8":function(e,t,a){"use strict";var n=a("c27a"),o=a.n(n);o.a},"72c6":function(e,t,a){},7463:function(e,t,a){"use strict";var n=a("d7ae"),o=a.n(n);o.a},"77a9":function(e,t,a){},7998:function(e,t,a){"use strict";var n=a("72c6"),o=a.n(n);o.a},"904f":function(e,t,a){"use strict";var n=a("389c"),o=a.n(n);o.a},"9db2":function(e,t,a){"use strict";var n=a("9f0b"),o=a.n(n);o.a},"9f0b":function(e,t,a){},ab8e:function(e,t,a){},add9:function(e,t,a){"use strict";var n=a("d350"),o=a.n(n);o.a},c277:function(e,t,a){"use strict";var n=a("77a9"),o=a.n(n);o.a},c27a:function(e,t,a){},c90b:function(e,t,a){"use strict";var n=a("ab8e"),o=a.n(n);o.a},cd49:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"OButton",(function(){return j})),a.d(n,"OCheckbox",(function(){return U})),a.d(n,"OCrate",(function(){return K})),a.d(n,"OElement",(function(){return E})),a.d(n,"OFieldset",(function(){return ee})),a.d(n,"OInput",(function(){return re})),a.d(n,"OLabel",(function(){return V})),a.d(n,"OLegend",(function(){return me})),a.d(n,"ORadio",(function(){return xe})),a.d(n,"OSelect",(function(){return Me})),a.d(n,"OTextarea",(function(){return je}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=a("8c4f"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main",attrs:{id:"app"}},[a("h1",[e._v("vonion 🧅")]),a("app-nav"),a("router-view")],1)},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"columns"},e._l(e.routes,(function(t){return a("router-link",{key:t.key,staticClass:"column is-narrow",attrs:{to:{name:t.name}}},[e._v(e._s(t.text))])})),1)])},c=[],u=o["a"].extend({name:"AppNav",data:function(){return{routes:[{text:"Select",name:"Select",key:"select"},{text:"Input",name:"Input",key:"input"},{text:"Textarea",name:"Textarea",key:"textarea"},{text:"Checkbox",name:"Checkbox",key:"checkbox"},{text:"Radio",name:"Radio",key:"radio"},{text:"Button",name:"Button",key:"button"},{text:"Crate",name:"Crate",key:"crate"},{text:"Examples",name:"Examples",path:"/examples"}]}}}),d=u,m=a("2877"),p=Object(m["a"])(d,s,c,!1,null,null,null),v=p.exports,f=o["a"].extend({name:"App",components:{AppNav:v}}),b=f,h=(a("6294"),a("4b55"),Object(m["a"])(b,r,l,!1,null,"09d09488",null)),x=h.exports,_=(a("fb98"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("button",e._g(e._b({staticClass:"button",class:{chive:e.isChive,"red-onion":e.isRedOnion}},"button",Object.assign({},{type:"button"},e.$attrs),!1),e.$listeners),[e._t("default")],2)])}),O=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"element"},[e._t("default")],2)},y=[],k=o["a"].extend({name:"OElement"}),M=k,$=(a("9db2"),Object(m["a"])(M,g,y,!1,null,"33c1c0e6",null)),E=$.exports,C=o["a"].extend({name:"OButton",components:{OElement:E},props:{isChive:Boolean,isRedOnion:Boolean}}),N=C,A=(a("6ad8"),Object(m["a"])(N,_,O,!1,null,"5cffc985",null)),j=A.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"checkbox",attrs:{type:"checkbox",id:e.id},domProps:{value:e.value,checked:Array.isArray(e.vModel)?e._i(e.vModel,e.value)>-1:e.vModel},on:{change:function(t){var a=e.vModel,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=e.value,r=e._i(a,i);n.checked?r<0&&(e.vModel=a.concat([i])):r>-1&&(e.vModel=a.slice(0,r).concat(a.slice(r+1)))}else e.vModel=o}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))),a("o-label",{staticClass:"label",attrs:{for:e.id}},[e._t("default")],2)],1)},w=[],D=(a("c740"),a("fb6a"),a("45fc"),a("a434"),a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",e._g(e._b({staticClass:"label"},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),B=[],R=o["a"].extend({name:"OLabel"}),L=R,P=(a("5782"),Object(m["a"])(L,D,B,!1,null,"34f1ec09",null)),V=P.exports,T=o["a"].extend({name:"OCheckbox",components:{OElement:E,OLabel:V},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean],value:{default:!0,type:[String,Number,Array,Object,Boolean]}},computed:{isArrayModel:function(){return Array.isArray(this.vModelValue)},vModel:{get:function(){var e=this;return this.isArrayModel?this.vModelValue.some((function(t){return JSON.stringify(t)===JSON.stringify(e.value)})):this.vModelValue===this.value},set:function(e){var t=this;if(this.isArrayModel){var a=this.vModelValue.slice(),n=a.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(t.value)}));n>=0?a.splice(n,1):a.push(this.value),this.$emit("change",a)}else this.$emit("change",e)}}}}),I=T,F=(a("c277"),Object(m["a"])(I,S,w,!1,null,"56e20884",null)),U=F.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("div",{staticClass:"crate",class:{chive:e.isChive,"red-onion":e.isRedOnion}},[e._t("default")],2)])},J=[],W=o["a"].extend({name:"OCrate",components:{OElement:E},props:{isChive:Boolean,isRedOnion:Boolean}}),G=W,q=(a("add9"),Object(m["a"])(G,H,J,!1,null,"21a31891",null)),K=q.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("fieldset",e._g(e._b({staticClass:"fieldset"},"fieldset",e.$attrs,!1),e.$listeners),[e._t("default")],2)])},Y=[],Q=o["a"].extend({name:"OFieldset",components:{OElement:E}}),X=Q,Z=(a("7998"),Object(m["a"])(X,z,Y,!1,null,"0ead60f6",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),"checkbox"===Object.assign({},{type:"text"},e.$attrs).type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:"checkbox"},domProps:{checked:Array.isArray(e.vModel)?e._i(e.vModel,null)>-1:e.vModel},on:{change:function(t){var a=e.vModel,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);n.checked?r<0&&(e.vModel=a.concat([i])):r>-1&&(e.vModel=a.slice(0,r).concat(a.slice(r+1)))}else e.vModel=o}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}}))):"radio"===Object.assign({},{type:"text"},e.$attrs).type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:"radio"},domProps:{checked:e._q(e.vModel,null)},on:{change:function(t){e.vModel=null}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}}))):a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"input",attrs:{id:e.id,type:Object.assign({},{type:"text"},e.$attrs).type},domProps:{value:e.vModel},on:{input:function(t){t.target.composing||(e.vModel=t.target.value)}}},"input",Object.assign({},{type:"text"},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}})))],1)},ae=[],ne=o["a"].extend({name:"OInput",components:{OLabel:V,OElement:E},model:{prop:"vModelValue",event:"input"},props:{id:String,vModelValue:[String,Number]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("input",e)}}}}),oe=ne,ie=(a("e2ab"),Object(m["a"])(oe,te,ae,!1,null,"75282e89",null)),re=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("legend",e._g(e._b({staticClass:"legend"},"legend",e.$attrs,!1),e.$listeners),[e._t("default")],2)},se=[],ce=o["a"].extend({name:"OLegen"}),ue=ce,de=(a("4d6c"),Object(m["a"])(ue,le,se,!1,null,"4560a63e",null)),me=de.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"radio",attrs:{type:"radio",id:e.id},domProps:{value:e.value,checked:e._q(e.vModel,e.value)},on:{change:function(t){e.vModel=e.value}}},"input",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}}))),a("o-label",{staticClass:"label",attrs:{for:e.id}},[e._t("default")],2)],1)},ve=[],fe=o["a"].extend({name:"ORadio",components:{OElement:E,OLabel:V},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean],value:{required:!0,type:[String,Number,Array,Object,Boolean]}},computed:{vModel:{get:function(){return this.vModelValue},set:function(){this.$emit("change",this.value)}}}}),be=fe,he=(a("904f"),Object(m["a"])(be,pe,ve,!1,null,"1e4a29a7",null)),xe=he.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),a("select",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"select",attrs:{id:e.id},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vModel=t.target.multiple?a:a[0]}}},"select",e.$attrs,!1),Object.assign({},e.$listeners,{change:function(){}})),[e._t("option")],2)],1)},Oe=[],ge=o["a"].extend({name:"OSelect",components:{OElement:E,OLabel:V},model:{prop:"vModelValue",event:"change"},props:{id:String,vModelValue:[String,Number,Array,Object,Boolean]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("change",e)}}}}),ye=ge,ke=(a("c90b"),Object(m["a"])(ye,_e,Oe,!1,null,"59f49b38",null)),Me=ke.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-element",[a("o-label",{attrs:{for:e.id}},[e._t("default")],2),a("textarea",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.vModel,expression:"vModel"}],staticClass:"textarea",attrs:{id:e.id},domProps:{value:e.vModel},on:{input:function(t){t.target.composing||(e.vModel=t.target.value)}}},"textarea",Object.assign({},{rows:4,cols:40},e.$attrs),!1),Object.assign({},e.$listeners,{input:function(){}})))],1)},Ee=[],Ce=o["a"].extend({name:"OTextarea",components:{OElement:E,OLabel:V},model:{prop:"vModelValue",event:"input"},props:{id:String,vModelValue:[String,Number]},computed:{vModel:{get:function(){return this.vModelValue},set:function(e){this.$emit("input",e)}}}}),Ne=Ce,Ae=(a("7463"),Object(m["a"])(Ne,$e,Ee,!1,null,"606e3774",null)),je=Ae.exports,Se=n;function we(e){for(var t in Se){var a=Se[t];e.component(t,a)}}var De=we,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Button"}},[a("o-button",[e._v("Click me!")]),a("o-button",{attrs:{"is-chive":""}},[e._v("No, click me!")]),a("o-button",{attrs:{"is-red-onion":""}},[e._v("I'm nice and silent.")])],1)},Re=[],Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("h3",[e._v(e._s(e.title))]),e._t("default"),a("div",{staticClass:"demo-controls"},[a("h4",[e._v("Data")]),a("div",{staticClass:"data"},[a("o-button",{on:{click:function(t){e.showData=!e.showData}}},[e._v(e._s(e.showData?"hide data":"show data"))]),a("pre",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}]},[e._v(e._s(e.data))])],1)])],2)},Pe=[],Ve=o["a"].extend({name:"OComponentDemo",props:{title:String,data:Object},data:function(){return{showData:!1}}}),Te=Ve,Ie=(a("6aa0"),Object(m["a"])(Te,Le,Pe,!1,null,"5764acce",null)),Fe=Ie.exports,Ue=o["a"].extend({name:"OButtonDemo",components:{OButton:j,OComponentDemo:Fe}}),He=Ue,Je=Object(m["a"])(He,Be,Re,!1,null,null,null),We=Je.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Crate",data:e.data}},[a("o-crate",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")]),a("o-crate",{attrs:{"is-chive":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")]),a("o-crate",{attrs:{"is-red-onion":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto sunt velit facilis voluptatem dolore alias pariatur exercitationem harum, incidunt labore sint veniam eos fugit, accusantium earum impedit tempore deleniti. ")])],1)},qe=[],Ke=o["a"].extend({name:"OCrateDemo",data:function(){return{data:{}}},components:{OCrate:K,OComponentDemo:Fe}}),ze=Ke,Ye=Object(m["a"])(ze,Ge,qe,!1,null,null,null),Qe=Ye.exports,Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Checkbox",data:e.data}},[a("o-checkbox",{attrs:{id:"apple"},model:{value:e.data.apple,callback:function(t){e.$set(e.data,"apple",t)},expression:"data.apple"}},[e._v("Apple")]),a("o-checkbox",{attrs:{id:"banana"},model:{value:e.data.banana,callback:function(t){e.$set(e.data,"banana",t)},expression:"data.banana"}},[e._v("Banana")]),a("o-checkbox",{attrs:{id:"cucumber"},model:{value:e.data.cucumber,callback:function(t){e.$set(e.data,"cucumber",t)},expression:"data.cucumber"}},[e._v("Cucumber")]),a("strong",[e._v("Array model")]),a("o-checkbox",{attrs:{id:"fruits-apple",value:"APPLE"},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Apple")]),a("o-checkbox",{attrs:{id:"fruits-banana",value:{value:"BANANA"}},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Banana")]),a("o-checkbox",{attrs:{id:"fruits-cucumber",value:["CUCUMBER"]},model:{value:e.data.fruits,callback:function(t){e.$set(e.data,"fruits",t)},expression:"data.fruits"}},[e._v("Cucumber")])],1)},Ze=[],et=o["a"].extend({name:"OCheckboxDemo",data:function(){return{data:{apple:!0,banana:!1,cucumber:!1,fruits:[{value:"BANANA"}]}}},components:{OCheckbox:U,OComponentDemo:Fe}}),tt=et,at=Object(m["a"])(tt,Xe,Ze,!1,null,null,null),nt=at.exports,ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Input",data:e.data}},[a("o-input",{attrs:{id:"firstName"},model:{value:e.data.firstName,callback:function(t){e.$set(e.data,"firstName",t)},expression:"data.firstName"}},[e._v("First name")]),a("o-input",{attrs:{id:"lastName"},model:{value:e.data.lastName,callback:function(t){e.$set(e.data,"lastName",t)},expression:"data.lastName"}},[e._v("Last name")]),a("o-input",{attrs:{id:"age",type:"number"},model:{value:e.data.age,callback:function(t){e.$set(e.data,"age",e._n(t))},expression:"data.age"}},[e._v("Age")])],1)},it=[],rt=o["a"].extend({name:"OInputDemo",data:function(){return{data:{firstName:"John",lastName:"Doe",age:12}}},components:{OInput:re,OComponentDemo:Fe}}),lt=rt,st=Object(m["a"])(lt,ot,it,!1,null,null,null),ct=st.exports,ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Radio",data:e.data}},[a("o-radio",{attrs:{id:"radio-fruit-apple",name:"fruit",value:"APPLE"},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Apple")]),a("o-radio",{attrs:{id:"radio-fruit-banana",name:"fruit",value:{value:"BANANA"}},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Banana")]),a("o-radio",{attrs:{id:"radio-fruit-cucumber",name:"fruit",value:["CUCUMBER"]},model:{value:e.data.fruit,callback:function(t){e.$set(e.data,"fruit",t)},expression:"data.fruit"}},[e._v("Cucumber")])],1)},dt=[],mt=o["a"].extend({name:"ORadioDemo",data:function(){return{data:{fruit:"APPLE"}}},components:{ORadio:xe,OComponentDemo:Fe}}),pt=mt,vt=Object(m["a"])(pt,ut,dt,!1,null,null,null),ft=vt.exports,bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Select",data:e.data}},[a("o-select",{attrs:{id:"country"},scopedSlots:e._u([{key:"option",fn:function(){return[a("option",{attrs:{value:"SWEDEN"}},[e._v("Sweden")]),a("option",{domProps:{value:{value:"DENMARK"}}},[e._v("Denmark")]),a("option",{domProps:{value:["FINLAND"]}},[e._v("Finland")]),a("option",{attrs:{value:"NORWAY"}},[e._v("Norway")])]},proxy:!0}]),model:{value:e.data.country,callback:function(t){e.$set(e.data,"country",t)},expression:"data.country"}},[e._v(" Country ")]),a("o-select",{attrs:{id:"pet",multiple:"",size:"3"},scopedSlots:e._u([{key:"option",fn:function(){return[a("option",{attrs:{value:"DOG"}},[e._v("Dog")]),a("option",{attrs:{value:"CAT"}},[e._v("Cat")]),a("option",{attrs:{value:"BIRD"}},[e._v("Bird")]),a("option",{attrs:{value:"CUCUMBER"}},[e._v("Cucumer")]),a("option",{attrs:{value:"HORSE"}},[e._v("Horse")])]},proxy:!0}]),model:{value:e.data.pet,callback:function(t){e.$set(e.data,"pet",t)},expression:"data.pet"}},[e._v(" Pet ")])],1)},ht=[],xt=o["a"].extend({name:"OInputDemo",data:function(){return{data:{country:"SWEDEN",pet:["DOG","BIRD"]}}},components:{OSelect:Me,OComponentDemo:Fe}}),_t=xt,Ot=Object(m["a"])(_t,bt,ht,!1,null,null,null),gt=Ot.exports,yt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Textarea",data:e.data}},[a("o-textarea",{attrs:{id:"description"},model:{value:e.data.description,callback:function(t){e.$set(e.data,"description",t)},expression:"data.description"}},[e._v("Description")]),a("o-textarea",{attrs:{id:"story",rows:"5"},model:{value:e.data.story,callback:function(t){e.$set(e.data,"story",t)},expression:"data.story"}},[e._v("Story")])],1)},kt=[],Mt=o["a"].extend({name:"OTextareaDemo",data:function(){return{data:{description:"",story:"Once upon a time..."}}},components:{OTextarea:je,OComponentDemo:Fe}}),$t=Mt,Et=Object(m["a"])($t,yt,kt,!1,null,null,null),Ct=Et.exports,Nt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Examples")]),a("examples-nav"),a("router-view")],1)},At=[],jt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"columns"},e._l(e.routes,(function(t){return a("router-link",{key:t.key,staticClass:"column is-narrow",attrs:{to:{name:t.name}}},[e._v(" "+e._s(t.text)+" ")])})),1)])},St=[],wt=o["a"].extend({name:"AppNav",data:function(){return{routes:[{text:"Form example",name:"FormExample",key:"form-example"}]}}}),Dt=wt,Bt=Object(m["a"])(Dt,jt,St,!1,null,null,null),Rt=Bt.exports,Lt=o["a"].extend({name:"Examples",components:{ExamplesNav:Rt}}),Pt=Lt,Vt=Object(m["a"])(Pt,Nt,At,!1,null,null,null),Tt=Vt.exports,It=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("o-component-demo",{attrs:{title:"Form example",data:e.data}},[a("form",{on:{submit:e.onSubmit}},[a("o-crate",{attrs:{"is-chive":""}},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum accusamus eligendi molestias laudantium rerum tempora in adipisci dolore. Maxime modi accusamus debitis similique aperiam exercitationem, deleniti iusto corporis ad. ")]),a("o-input",{model:{value:e.data.firstName,callback:function(t){e.$set(e.data,"firstName",t)},expression:"data.firstName"}},[e._v("First name")]),a("o-input",{model:{value:e.data.lastName,callback:function(t){e.$set(e.data,"lastName",t)},expression:"data.lastName"}},[e._v("Last name")]),a("o-fieldset",[a("o-legend",[e._v("Hobbies:")]),a("o-checkbox",{attrs:{id:"hobbies-ONEWHEEL",value:"ONEWHEEL"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Onewheel")]),a("o-checkbox",{attrs:{id:"hobbies-HORSES",value:"HORSES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Horses")]),a("o-checkbox",{attrs:{id:"hobbies-COMPUTERS",value:"COMPUTERS"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Computers")]),a("o-checkbox",{attrs:{id:"hobbies-CATS",value:"CATS"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Cats")]),a("o-checkbox",{attrs:{id:"hobbies-VIDEO_GAMES",value:"VIDEO_GAMES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Video games")]),a("o-checkbox",{attrs:{id:"hobbies-BOARD_GAMES",value:"BOARD_GAMES"},model:{value:e.data.hobbies,callback:function(t){e.$set(e.data,"hobbies",t)},expression:"data.hobbies"}},[e._v("Board games")])],1),a("o-textarea",{attrs:{cols:"100"},model:{value:e.data.about,callback:function(t){e.$set(e.data,"about",t)},expression:"data.about"}},[e._v("About")]),a("o-select",{scopedSlots:e._u([{key:"option",fn:function(){return e._l(100,(function(t){return a("option",{key:t},[e._v(e._s(t))])}))},proxy:!0}]),model:{value:e.data.age,callback:function(t){e.$set(e.data,"age",e._n(t))},expression:"data.age"}},[e._v(" Age ")]),a("o-fieldset",[a("o-legend",[e._v("Gender:")]),a("o-radio",{attrs:{id:"gender-MALE",name:"gender",value:"MALE"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Male")]),a("o-radio",{attrs:{id:"gender-FEMALE",name:"gender",value:"FEMALE"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Female")]),a("o-radio",{attrs:{id:"gender-UNKNOWN",name:"gender",value:"UNKNOWN"},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}},[e._v("Unknown")])],1),a("o-button",{attrs:{type:"submit","is-chive":""}},[e._v("Submit")]),a("o-button",{attrs:{type:"button"},on:{click:e.onClickCancel}},[e._v("Cancel")])],1)])},Ft=[],Ut=(a("ac1f"),a("5319"),o["a"].extend({name:"FormExample",data:function(){return{data:{firstName:"John",lastName:"Doesson",hobbies:["ONEWHEEL","COMPUTERS"],about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum accusamus eligendi molestias laudantium rerum tempora in adipisci dolore. Maxime modi accusamus debitis similique aperiam exercitationem, deleniti iusto corporis ad.",age:10,gender:"MALE"}}},methods:{onSubmit:function(){alert("The form was submitted with:\n".concat(JSON.stringify(this.data,null,2)))},onClickCancel:function(){this.$router.replace({name:"Examples"})}},components:{OComponentDemo:Fe}})),Ht=Ut,Jt=Object(m["a"])(Ht,It,Ft,!1,null,null,null),Wt=Jt.exports;o["a"].config.productionTip=!1,o["a"].use(i["a"]),o["a"].use(De);var Gt=new i["a"]({routes:[{name:"Button",path:"/button",component:We},{name:"Crate",path:"/crate",component:Qe},{name:"Checkbox",path:"/checkbox",component:nt},{name:"Input",path:"/input",component:ct},{name:"Radio",path:"/radio",component:ft},{name:"Select",path:"/select",component:gt},{name:"Textarea",path:"/textarea",component:Ct},{name:"Examples",path:"/examples",component:Tt,children:[{name:"FormExample",path:"form-example",component:Wt}]}]});new o["a"]({render:function(e){return e(x)},router:Gt}).$mount("#app")},d350:function(e,t,a){},d7ae:function(e,t,a){},e2ab:function(e,t,a){"use strict";var n=a("28e6"),o=a.n(n);o.a},fb98:function(e,t,a){}});
//# sourceMappingURL=app.bc994d17.js.map