(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[86],{1158:function(e,t,a){"use strict";a.r(t);var n=a(196),o=a(197),l=a(207),i=a(198),r=a(199),c=a(0),s=a.n(c),u=a(2),m=a(606),p=a(607),d=a(618),h=a(824),g=a(817),f=a(818),E=a(611),_=a.n(E),v=(a(641),a(201)),b=a(78),y=a(822),w=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).componentDidMount=function(){b.a.get("/admin/allAstro").then((function(e){console.log(e.data),!0===e.data.status&&o.setState({astrologerList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)})),b.a.get("/user/price_high_to_low").then((function(e){console.log(e.data),!0===e.data.status&&o.setState({price_high_to_low:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},o.submitHandler=function(e,t,a){e.preventDefault();var n=localStorage.getItem("user_mobile_no"),o={userid:JSON.parse(localStorage.getItem("user_id")),astroid:t,From:a,To:n};b.a.post("/user/make_call",o).then((function(e){console.log("rhsagdhgshgdjhgj",e.data.data)})).catch((function(e){console.log(e)}))},o.filterMethod=function(e){b.a.get("/user/"+e).then((function(e){console.log(e.data),!0===e.data.status&&o.setState({astrologerList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},o.state={astrologerList:[],From:"",To:"",astroid:"",userid:"",modal:!1,price_high_to_low:[]},o.toggle=o.toggle.bind(Object(l.a)(o)),o}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=this.state.astrologerList;return s.a.createElement(v.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(_.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(m.a,null,s.a.createElement(p.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Talk To Astrologer"),s.a.createElement("p",null))))))),s.a.createElement("section",{id:"team",className:"pb-0"},s.a.createElement(m.a,null,s.a.createElement(p.a,null,s.a.createElement(d.a,{md:"3"},s.a.createElement("div",{className:"bx-list fbg"},s.a.createElement("h3",{className:"mb-3"},s.a.createElement("b",null,"Sort By:")),s.a.createElement("form",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 1",name:"exp_high_to_low",onChange:function(){return e.filterMethod("exp_high_to_low")}})),"Experience : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 2",name:"exp_low_to_high",onChange:function(){return e.filterMethod("exp_low_to_high")}})),"Experience : Low to High"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 3",name:"price_high_to_low",onChange:function(){return e.filterMethod("price_high_to_low")}})),"Price : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 4",name:"price_low_to_high",onChange:function(){return e.filterMethod("price_low_to_high")}})),"Price : Low to High"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 5",name:"rating_high_to_low",onChange:function(){return e.filterMethod("rating_high_to_low")}})),"Rating : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(y.a.Check,{type:"radio","aria-label":"radio 6",name:"rating_low_to_high",onChange:function(){return e.filterMethod("rating_low_to_high")}})),"Rating : Low to High"))))),s.a.createElement(d.a,{md:"9"},s.a.createElement(p.a,null,t.length?t.map((function(t,a){return s.a.createElement(d.a,{md:"4",key:a},s.a.createElement("div",{className:"image-flip"},s.a.createElement("div",{className:"mainflip flip-0"},s.a.createElement("div",{className:"frontside"},s.a.createElement(u.c,{className:""},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("p",null,s.a.createElement("img",{src:null===t||void 0===t?void 0:t.img,alt:""})),s.a.createElement("h4",{className:"card-title"},null===t||void 0===t?void 0:t.fullname),s.a.createElement("ul",{className:"mb-3"},s.a.createElement("li",null,"Experience:"," ",s.a.createElement("span",null,null===t||void 0===t?void 0:t.exp_in_years)),s.a.createElement("li",null,"Call Rate:"," ",s.a.createElement("span",null,null===t||void 0===t?void 0:t.callCharge,"/",null===t||void 0===t?void 0:t.conrubute_hrs))),0===t.waiting_queue?s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,{className:"btn btn-primary btn-sm sc",to:"/astrologerdetail/"+t._id},s.a.createElement("span",{className:"sr-btn",onClick:function(a){return e.submitHandler(a,null===t||void 0===t?void 0:t._id,null===t||void 0===t?void 0:t.mobile)}},s.a.createElement("i",{class:"fa fa-phone"}," Call")))):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-denger wr"},s.a.createElement("i",{class:"fa fa-phone"},"Wait"))),s.a.createElement("br",null),s.a.createElement("span",{value:e.state.waiting_queue}," ","Wait ~ ",t.waiting_queue,"Min"))))))))})):null)))),s.a.createElement("div",null,s.a.createElement(h.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},s.a.createElement(g.a,{toggle:this.toggle},"Modal title"),s.a.createElement(f.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))}}]),a}(s.a.Component);t.default=w},611:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},641:function(e,t,a){},673:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function l(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,i=null,r=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?r="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==a||null!==i||null!==r){var c=e.displayName||e.name,s="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==i?"\n  "+i:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;u.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return i})),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=86.2db03c46.chunk.js.map