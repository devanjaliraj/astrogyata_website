(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[76],{1173:function(e,t,n){"use strict";n.r(t);n(114);var r=n(25),a=n(0),o=n.n(a),c=n(2),l=(n(115),n(621)),i=n.n(l),u=n(204),f=n(44),s=n(116),p=n(71),d=n(201),m=n(620);n(78);t.default=Object(f.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,n,r){e(Object(p.e)(t,n,r))},addToWishlist:function(t,n,r){e(Object(s.d)(t,n,r))},deleteFromWishlist:function(t,n,r){e(Object(s.f)(t,n,r))},deleteAllFromWishlist:function(t){e(Object(s.e)(t))}}}))((function(e){var t=e.location.pathname,n=Object(a.useState)([]),l=Object(r.a)(n,2),f=l[0];l[1];return Object(a.useEffect)((function(){}),[]),o.a.createElement(a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("title",null,"Flone | MyOrder"),o.a.createElement("meta",{name:"description",content:"Wishlist page of flone react minimalist eCommerce template."})),o.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(u.BreadcrumbsItem,{to:""+t},"My Order"),o.a.createElement(d.a,{headerTop:"visible"},o.a.createElement(m.a,null),o.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},o.a.createElement("div",{className:"container"},f&&f.length>=1?o.a.createElement(a.Fragment,null,o.a.createElement("h3",{className:"cart-page-title"},"Your Order Items"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"table-content table-responsive cart-table-content"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ORDER ID"),o.a.createElement("th",null,"Image"),o.a.createElement("th",null,"Product Name"),o.a.createElement("th",null,"QUANTITY"),o.a.createElement("th",null,"AMOUNT"),o.a.createElement("th",null,"Order Status"),o.a.createElement("th",null,"action"))),o.a.createElement("tbody",null,null===f||void 0===f?void 0:f.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"product-price-cart"},o.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.cus_orderId)),o.a.createElement("td",{className:"product-thumbnail"},o.a.createElement(c.c,{to:"#"},o.a.createElement("img",{className:"img-fluid",src:""+e.product.product_img[0],alt:""}))),o.a.createElement("td",{className:"product-name text-center"},o.a.createElement(c.c,{to:"/product-sticky/"},e.product.product_name),o.a.createElement("br",null),"COLOR: ",null===e||void 0===e?void 0:e.color,o.a.createElement("br",null),"SIZE: ",null===e||void 0===e?void 0:e.size),o.a.createElement("td",{className:"product-price-cart"},o.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.product_qty)),o.a.createElement("td",{className:"product-price-cart"},o.a.createElement("span",{className:"amount"}),null===e||void 0===e?void 0:e.product_price),o.a.createElement("td",{className:"product-price-cart"},o.a.createElement("span",{className:"amount"}),null===e||void 0===e?void 0:e.status))})))))))):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"item-empty-area text-center"},o.a.createElement("div",{className:"item-empty-area__icon mb-30"},o.a.createElement("i",{className:"pe-7s-cart"})),o.a.createElement("div",{className:"item-empty-area__text"},"No Product Found ",o.a.createElement("br",null)," ",o.a.createElement(c.c,{to:"/"},"Shop Now")))))))))}))},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(4)),o=l(n(34)),c=n(629);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,y,b,h=function(e){function t(){return u(this,t),s(this,p(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,c.getDuplicateTitle)();n&&(0,c.removeChild)(a,n)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(a,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(n.prototype,a),l&&f(n,l),t}(r.Component);m=h,y="contextTypes",b={extract:a.default.func},y in m?Object.defineProperty(m,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[y]=b;var v=h;t.default=v,e.exports=t.default},620:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n(204);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}},621:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(n(628)),a=c(n(619)),o=c(n(630));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(0),o=(r=n(4))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return l(this,t),u(this,f(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(n.prototype,r),o&&i(n,o),t}(a.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:o.default.func});var d=p;t.default=d,e.exports=t.default},629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var c=e[r],l=c.props.id;(l?!t.id[l]:0===a.filter((function(e){var n=c.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(c),o.forEach((function(e){var n=c.props[e];n&&(t[e][n]=c)})))},c=e.length-1;c>=0;c--)r(c);return n}(r)),[n],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=c(n(4)),o=c(n(619));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,m,y,b=function(e){function t(){return i(this,t),f(this,s(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.Component);d=b,m="propTypes",y={title:a.default.string},m in d?Object.defineProperty(d,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[m]=y;var h=b;t.default=h,e.exports=t.default}}]);
//# sourceMappingURL=76.49881e1a.chunk.js.map