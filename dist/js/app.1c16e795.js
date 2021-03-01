(function(t){function e(e){for(var s,c,r=e[0],u=e[1],a=e[2],h=0,d=[];h<r.length;h++)c=r[h],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,r=1;r<o.length;r++){var u=o[r];0!==n[u]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var s={},n={app:0},i=[];function c(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=s,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(o,s,function(e){return t[e]}.bind(null,s));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/cw3/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0938":function(t,e,o){"use strict";o("9c0e")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),s("ProductComponent",{attrs:{list:t.list,msg:"Welcome to Your Vue.js App"},on:{checkout:t.checkoutUpdate,displaySettings:t.setDisplay}}),s("checkoutComponent",{attrs:{list:t.list},on:{updatedCheckout:t.checkoutUpdate,displaySettings:t.setDisplay}})],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-content"},[t.list.showProducts?o("div",[o("div",{staticClass:"sortBy"},[o("label",{attrs:{for:"category"}},[t._v("Choose a category to sort with:")]),o("select",{attrs:{name:"category",id:"category"},on:{change:function(e){return t.onChangeCategory(e)}}},[o("option",{attrs:{value:"subject"}},[t._v("Subject")]),o("option",{attrs:{value:"location"}},[t._v("Location")]),o("option",{attrs:{value:"price"}},[t._v("Price")]),o("option",{attrs:{value:"spaces"}},[t._v("Spaces")])]),o("br"),o("br"),o("label",{attrs:{for:"order"}},[t._v("Choose an ascending or descending order:")]),o("select",{attrs:{name:"order",id:"order"},on:{change:function(e){return t.onChangeOrder(e)}}},[o("option",{attrs:{value:"asc"}},[t._v("Ascending")]),o("option",{attrs:{value:"desc"}},[t._v("Descending")])]),o("br"),o("br")]),o("div",{staticClass:"productList"},t._l(t.list.lessons,(function(e){return o("div",{key:e._id,staticClass:"product"},[o("div",{staticClass:"productTop"},[o("img",{staticClass:"image",attrs:{src:e.img_link}}),o("div",{staticClass:"productText"},[o("h3",[t._v(t._s(e.subject))]),o("p",[t._v(t._s(e.location))]),o("p",[t._v("price:"+t._s(e.price))]),o("p",[t._v("spaces:"+t._s(e.quantity))])])]),o("button",{staticClass:"button",on:{click:function(o){return t.addToCart(e._id)}}},[t._v(" Add to Cart ")])])})),0),t.list.showCheckoutButton?o("div",[o("button",{staticClass:"checkoutButton",attrs:{type:"button"},on:{click:function(e){return t.displayCheckout()}}},[t._v(" Checkout ")])]):t._e()]):t._e()])},r=[],u=(o("4160"),o("a434"),o("b0c0"),o("d3b7"),o("159b"),{name:"app",props:["list"],data:function(){return{object:{},order:"asc",category:"subject",name:"",number:"",isLet:!1,isNum:!1}},mounted:function(){this.getAllLessons()},methods:{isLetter:function(){var t=this.name;console.log("step 1"),/^[A-Za-z]+$/.test(t)?(this.isLet=!0,console.log("step 2")):this.isLet=!1},isNumber:function(){var t=this.number;console.log("here 1"),/^\d+$/.test(t)?(this.isNum=!0,console.log("here 2"),this.showError=!1):(this.isNum=!1,this.showError=!0)},getAllLessons:function(){var t=this;fetch("https://cw2heroku.herokuapp.com/api/products").then((function(t){return t.json()})).then((function(e){t.list.lessons=e,t.checkUpdateStock(),t.checkCheckout()}))},checkUpdateStock:function(){var t=this;this.list.checkoutItems=JSON.parse(localStorage.product),this.list.lessons.forEach((function(e){t.list.checkoutItems.forEach((function(t){e._id==t.id&&(e.quantity=e.quantity-t.quantity)}))}))},checkCheckout:function(){0!=this.list.checkoutItems.length?this.list.showCheckoutButton=!0:this.list.showCheckoutButton=!1},addToCart:function(t){var e=this,o=!0;this.list.lessons.forEach((function(s){s._id==t&&0!=s.quantity&&(e.object={id:s._id,subject:s.subject,location:s.location,price:s.price,img:s.img_link,quantity:1},e.list.checkoutItems.forEach((function(t){t.id==s._id&&(t.quantity++,o=!1)})),s.quantity--,(o||0==e.list.checkoutItems.length)&&e.list.checkoutItems.push(e.object),console.log(e.list.checkoutItems),localStorage.product=JSON.stringify(e.list.checkoutItems),e.checkCheckout()),e.$emit("checkout",e.list.checkoutItems)}))},onChangeCategory:function(t){console.log(t.target.value),this.category=t.target.value,this.sortBy()},displayCheckout:function(){this.list.showProducts=!1,this.list.showCheckout=!0,this.list.showSuccess=!1,this.$emit("displaySettings",this.list)},displayProducts:function(){this.list.showProducts=!0,this.list.showCheckout=!1,this.checkCheckoutButton()},onChangeOrder:function(t){console.log(2),console.log(t.target.value),this.order=t.target.value,this.sortBy()},deleteItem:function(t){for(var e=0;e<this.checkoutItems.length;e++)this.checkoutItems[e].id==t&&(this.checkoutItems[e].quantity--,this.lessons.forEach((function(e){e._id==t&&e.quantity++})),0==this.checkoutItems[e].quantity&&this.checkoutItems.splice(e,1));localStorage.product=JSON.stringify(this.checkoutItems)},sortBy:function(){var t=this;console.log(3),"asc"==this.order?(this.list.lessons.sort((function(e,o){return e[t.category]<o[t.category]?-1:1})),console.log(this.category)):"desc"==this.order&&this.list.lessons.sort((function(e,o){return e[t.category]>o[t.category]?-1:1}))}}}),a=u,l=(o("6815"),o("2877")),h=Object(l["a"])(a,c,r,!1,null,"7c49e200",null),d=h.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.list.showCheckout?o("div",[o("div",{staticClass:"productList"},t._l(this.list.checkoutItems,(function(e){return o("div",{key:e.id,staticClass:"productBought"},[o("div",{staticClass:"productTop"},[o("img",{staticClass:"image",attrs:{src:e.img}}),o("div",{staticClass:"productText"},[o("h3",[t._v(t._s(e.subject))]),o("p",[t._v(t._s(e.location))]),o("p",[t._v("price:"+t._s(e.price))]),o("p",[t._v("Quantity: "+t._s(e.quantity))])])]),o("button",{staticClass:"button",on:{click:function(o){return t.deleteItem(e.id)}}},[t._v(" Cancel item ")])])})),0),o("button",{attrs:{type:"button"},on:{click:function(e){return t.displayProducts()}}},[t._v("Go back")]),o("h3",[t._v("Please specify your name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{keypress:function(e){return t.checkForm()},keyup:function(e){return t.checkForm()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),o("h3",[t._v("Please specify your number:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"text",name:"number",id:"number",maxlength:"11"},domProps:{value:t.number},on:{keypress:function(e){return t.checkForm()},keyup:function(e){return t.checkForm()},input:function(e){e.target.composing||(t.number=e.target.value)}}}),this.list.showError?o("p",{staticStyle:{color:"red"}},[t._v(" Incomplete form or invalid characters entered! ")]):t._e(),this.list.showSubmitButton?o("div",[o("button",{attrs:{type:"button"},on:{click:function(e){return t.checkout()}}},[t._v("Submit Order")])]):t._e(),this.list.showSuccess?o("h1",{staticStyle:{color:"green"}},[t._v(" Thank you for buying these products! Have a nice day ")]):t._e()]):t._e()},f=[],m={props:["list"],data:function(){return{name:"",number:""}},methods:{checkForm:function(){""!=this.number&&""!=this.name?(this.list.showSubmitButton=!0,console.log(this.number),this.list.showError=!1):(this.list.showSubmitButton=!1,this.list.showError=!0)},deleteItem:function(t){for(var e=0;e<this.list.checkoutItems.length;e++)this.list.checkoutItems[e].id==t&&(this.list.checkoutItems[e].quantity--,this.list.lessons.forEach((function(e){e._id==t&&e.quantity++})),0==this.list.checkoutItems[e].quantity&&this.list.checkoutItems.splice(e,1));localStorage.product=JSON.stringify(this.list.checkoutItems),this.$emit("updatedCheckout",this.list.checkoutItems)},displayProducts:function(){this.list.showCheckout=!1,this.list.showProducts=!0,this.$emit("displaySettings",this.list)},checkout:function(){var t=this,e={};this.list.checkoutItems.forEach((function(o){var s={id:o.id,quantity:o.quantity,price:o.price,user:t.name,number:t.number};t.list.lessons.forEach((function(t){t._id==o.id&&(e={id:o.id,$set:{quantity:t.quantity}})})),fetch("https://cw2heroku.herokuapp.com/api/products/order",{method:"post",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(e){200==e.status&&(t.list.showSuccess=!0,localStorage.clear(),t.list.checkoutItems=[])}));try{fetch("https://cw2heroku.herokuapp.com/api/products/order",{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),console.log("success")}catch(n){console.log(n)}}))}}},g=m,k=(o("0938"),Object(l["a"])(g,p,f,!1,null,"7dc1d21c",null)),v=k.exports,y={name:"App",components:{ProductComponent:d,checkoutComponent:v},data:function(){return{list:{lessons:[],showProducts:!0,checkoutItems:[],showCheckoutButton:!1,showCheckout:!1,showSuccess:!1,showError:!1,showSubmitButton:!1},checkout:{}}},methods:{checkoutUpdate:function(t){this.checkout.checkoutItems=t,this.list.checkoutItems=t},setDisplay:function(t){this.list.showProducts=t.showProducts,this.list.showCheckoutButton=t.showCheckoutButton,this.list.showCheckout=t.showCheckout,this.list.showSuccess=t.showSuccess,this.list.showError=t.showError,this.list.showSubmitButton=t.showSubmitButton}}},b=y,w=(o("034f"),Object(l["a"])(b,n,i,!1,null,null,null)),_=w.exports,C=o("9483");Object(C["a"])("".concat("/cw3/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(_)}}).$mount("#app")},6815:function(t,e,o){"use strict";o("834e")},"834e":function(t,e,o){},"85ec":function(t,e,o){},"9c0e":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1c16e795.js.map