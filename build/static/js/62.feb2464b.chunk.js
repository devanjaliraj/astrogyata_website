(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[62],{1116:function(e,t,n){"use strict";n.r(t);var a=n(196),o=n(197),l=n(207),c=n(198),r=n(199),i=n(0),s=n.n(i),p=n(2),u=n(603),m=n(604),d=n(617),f=n(645),h=n(611),g=n.n(h),b=n(201),v=(n(638),n(818)),E=n(810),y=n(811),S=n(203),k=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));console.log("first",e),S.a.get("/user/viewoneuser/".concat(e)).then((function(e){console.log("sjdfjdfg",e.data.data),o.setState({amount:e.data.data.amount})})).catch((function(e){console.log(e)})),S.a.get("/user/active_plans").then((function(e){console.log(e.data),!0===e.data.status&&o.setState({planList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response.data.data)}))},o.state={modal:!1,planList:[],data:{}},o.toggle=o.toggle.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this.state.planList;return s.a.createElement(b.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Add Money to Wallet"),s.a.createElement("h3",null,"Available balance : ",s.a.createElement("span",null,this.state.amount)))))))),s.a.createElement("section",null,s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{xl:"3",lg:"3",md:"3",sm:"6",xs:"6"},s.a.createElement(p.c,{to:"/walletaddform"},s.a.createElement("div",{className:"promoBox success-box info-ribbon"},s.a.createElement("aside",null,s.a.createElement("p",null,"100% extra")),s.a.createElement("h4",null,"Amount"),s.a.createElement("p",null)))),e.length?e.map((function(e,t){return s.a.createElement(d.a,{xl:"3",lg:"3",md:"3",sm:"6",xs:"6",key:t},s.a.createElement(p.c,{to:"/paymentdetail"},s.a.createElement("div",{className:"promoBox success-box info-ribbon"},s.a.createElement("aside",null,s.a.createElement("p",null,e.title)),s.a.createElement("h4",null,"INR ",e.amount))))})):null))),s.a.createElement(v.a,{size:"md",style:{maxWidth:"600px",width:"100%"},isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},s.a.createElement(E.a,{className:"wr-3",toggle:this.toggle},s.a.createElement("h2",{className:"wr-4"},"Apply Voucher Code")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"Wr-1 wr-t"},s.a.createElement("form",null,s.a.createElement(d.a,{md:"12"},s.a.createElement("input",{type:"text",placeholder:"Enter Your Voucher  Code"})),s.a.createElement(f.a,{className:"btn btn-success"},"Submit"))))))}}]),n}(s.a.Component);t.default=k},611:function(e,t,n){e.exports=n.p+"static/media/astrologin-bg.f858568c.jpg"},638:function(e,t,n){},645:function(e,t,n){"use strict";var a=n(7),o=n(15),l=n(202),c=n(20),r=n(0),i=n.n(r),s=n(4),p=n.n(s),u=n(77),m=n.n(u),d=n(55),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:d.n,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(l.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],l=e.block,c=e.className,r=e.close,s=e.cssModule,p=e.color,u=e.outline,h=e.size,g=e.tag,b=e.innerRef,v=Object(o.a)(e,f);r&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(u?"-outline":"")+"-"+p,y=Object(d.j)(m()(c,{close:r},r||"btn",r||E,!!h&&"btn-"+h,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),s);v.href&&"button"===g&&(g="a");var S=r?"Close":null;return i.a.createElement(g,Object(a.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:y,ref:b,onClick:this.onClick,"aria-label":n||S}))},t}(i.a.Component);g.propTypes=h,g.defaultProps={color:"secondary",tag:"button"},t.a=g},668:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function l(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function c(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,c=null,r=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?r="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==c||null!==r){var i=e.displayName||e.name,s="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==c?"\n  "+c:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",(function(){return c})),a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=62.feb2464b.chunk.js.map