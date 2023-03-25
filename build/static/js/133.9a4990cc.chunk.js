(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[133],{1037:function(e,t,a){"use strict";a.r(t);var c=a(25),r=a(0),n=a.n(r),l=a(618),o=a.n(l),m=a(681),u=a(203),s=a(45),i=a(195),d=a(201),p=a(616),E=a(847),b=a(679);t.default=Object(s.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(r.useState)("grid three-column"),s=Object(c.a)(l,2),f=s[0],g=s[1],v=Object(r.useState)(""),O=Object(c.a)(v,2),h=O[0],j=O[1],N=Object(r.useState)(""),S=Object(c.a)(N,2),C=S[0],P=S[1],w=Object(r.useState)(""),k=Object(c.a)(w,2),y=k[0],x=k[1],F=Object(r.useState)(""),L=Object(c.a)(F,2),T=L[0],H=L[1],z=Object(r.useState)(0),B=Object(c.a)(z,2),D=B[0],I=B[1],J=Object(r.useState)(1),_=Object(c.a)(J,2),R=_[0],q=_[1],A=Object(r.useState)([]),G=Object(c.a)(A,2),K=G[0],M=G[1],Q=Object(r.useState)([]),U=Object(c.a)(Q,2),V=U[0],W=U[1],X=t.pathname;return Object(r.useEffect)((function(){var e=Object(i.g)(a,h,C),t=Object(i.g)(e,y,T);W(e=t),M(e.slice(D,D+15))}),[D,a,h,C,y,T]),n.a.createElement(r.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,"Flone | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(u.BreadcrumbsItem,{to:""+X},"Shop"),n.a.createElement(d.a,{headerTop:"visible"},n.a.createElement(p.a,null),n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(E.a,{getLayout:function(e){g(e)},getFilterSortParams:function(e,t){x(e),H(t)},productCount:a.length,sortedProductCount:K.length,products:a,getSortParams:function(e,t){j(e),P(t)}}),n.a.createElement(b.a,{layout:f,products:K}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(m.a,{totalRecords:V.length,pageLimit:15,pageNeighbours:2,setOffset:I,currentPage:R,setCurrentPage:q,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},847:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(195),l=function(e){var t=e.products,a=e.getSortParams,c=Object(n.b)(t),l=Object(n.c)(t),o=Object(n.f)(t),m=Object(n.d)(t);return r.a.createElement("div",{className:"product-filter-wrapper",id:"product-filter-wrapper"},r.a.createElement("div",{className:"product-filter-wrapper__inner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Categories"),c?r.a.createElement("ul",null,c.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("category",e),Object(n.h)(t)}},e))}))):"No categories found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Color"),l?r.a.createElement("ul",null,l.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("color",e),Object(n.h)(t)}},e))}))):"No colors found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Size"),o?r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(n.h)(t)}},e))}))):"No sizes found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter product-filter--tag"},r.a.createElement("h5",null,"Tag"),m?r.a.createElement("ul",null,m.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("tag",e),Object(n.h)(t)}},e))}))):"No tags found")))))},o=function(e){var t=e.getFilterSortParams,a=e.productCount,o=e.sortedProductCount,m=e.products,u=e.getSortParams;return r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("div",{className:"shop-select"},r.a.createElement("select",{onChange:function(e){return t("filterSort",e.target.value)}},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"priceHighToLow"},"Price - High to Low"),r.a.createElement("option",{value:"priceLowToHigh"},"Price - Low to High"))),r.a.createElement("p",null,"Showing ",o," of ",a," result")),r.a.createElement("div",{className:"filter-active"},r.a.createElement("button",{onClick:function(e){return Object(n.i)(e)}},r.a.createElement("i",{className:"fa fa-plus"})," filter"))),r.a.createElement(l,{products:m,getSortParams:u}))};t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,n=e.productCount,l=e.sortedProductCount,m=e.products,u=e.getSortParams;return r.a.createElement(c.Fragment,null,r.a.createElement(o,{getLayout:t,getFilterSortParams:a,productCount:n,sortedProductCount:l,products:m,getSortParams:u}))}}}]);
//# sourceMappingURL=133.9a4990cc.chunk.js.map