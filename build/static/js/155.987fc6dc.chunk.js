(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[155],{813:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t(0),c=t.n(n),s=t(2),r=t(78);a.default=function(e){var a=e.data,t=e.sliderClass,i=e.sliderdemoClass,o=Object(n.useState)(""),m=Object(l.a)(o,2),d=(m[0],m[1],Object(n.useState)(a)),u=Object(l.a)(d,2),v=(u[0],u[1]);return Object(n.useEffect)((function(){v(a)}),[a]),c.a.createElement("div",{className:"".concat(i||" slider-demo"," text-center ").concat(t||""," st-hit")},c.a.createElement("div",{className:"image-flip"},c.a.createElement("div",{className:"mainflip flip-0"},c.a.createElement("div",{className:"frontside"},c.a.createElement(s.c,{to:"/astrologerdetail/"+a._id},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{src:null===a||void 0===a?void 0:a.img,alt:""})),c.a.createElement("h4",{className:"card-title"},null===a||void 0===a?void 0:a.fullname),c.a.createElement("ul",{className:"mb-3"},c.a.createElement("li",null,"Experience: ",c.a.createElement("span",null,null===a||void 0===a?void 0:a.exp_in_years)),c.a.createElement("li",null,"Call Rate:"," ",c.a.createElement("span",null,null===a||void 0===a?void 0:a.callCharge,"/",null===a||void 0===a?void 0:a.conrubute_hrs))),c.a.createElement(s.c,{className:"btn btn-primary btn-sm st-d"},null===a||void 0===a?void 0:a.status),c.a.createElement(s.c,{onClick:function(){return function(e){console.log(e);var a=localStorage.getItem("user_mobile_no"),t={userid:JSON.parse(localStorage.getItem("user_id")),astroid:e._id,From:e.mobile,To:a};r.a.post("/user/make_call",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(a)},className:"btn btn-primary btn-sm"},c.a.createElement("i",{class:"fa fa-phone"})," Call Now",c.a.createElement("small",null)))))))))}}}]);
//# sourceMappingURL=155.987fc6dc.chunk.js.map