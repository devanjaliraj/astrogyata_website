(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[69],{1128:function(e,t,a){"use strict";a.r(t);var n=a(196),l=a(197),r=a(198),o=a(199),s=a(0),c=a.n(s),i=a(2),u=a(606),d=a(607),m=a(618),f=a(611),v=a.n(f),b=a(201),p=(a(641),a(692)),h=a(78),g=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={userChatList:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));console.log(t),h.a.get("/user/getOne_Conversation_Wallet/".concat(t)).then((function(t){console.log("userChatList",t.data.data),!0===t.data.status&&e.setState({userChatList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userChatList;return c.a.createElement(b.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(m.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"User Chat History"))))))),c.a.createElement("section",null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(m.a,{lg:"12"},c.a.createElement("div",{className:""},c.a.createElement(p.a,{striped:!0,className:""},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#Conversation ID"),c.a.createElement("th",null,"Astrologer Name"),c.a.createElement("th",null,"Conversation Type"),c.a.createElement("th",null,"Rate"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Deducation"),c.a.createElement("th",null,"Date/Time"),c.a.createElement("th",null,"Action"))),e.length?e.map((function(e,t){var a,n,l;return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,null===e||void 0===e?void 0:e.conversationId),c.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.fullname),c.a.createElement("td",null,null===e||void 0===e?void 0:e.type),c.a.createElement("td",null,null===e||void 0===e||null===(n=e.astroid)||void 0===n?void 0:n.callCharge,"/Min."),c.a.createElement("td",null,null===e||void 0===e||null===(l=e.userid)||void 0===l?void 0:l.amount,"Rs."),c.a.createElement("td",null,null===e||void 0===e?void 0:e.deductedAmt,"Rs."),c.a.createElement("td",null,null===e||void 0===e?void 0:e.createdAt),c.a.createElement("td",null,c.a.createElement(i.c,{className:"Tansdel"},c.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"})))))})):null)))))))}}]),a}(c.a.Component);t.default=g},611:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},618:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(0),o=a.n(r),s=a(4),c=a.n(s),i=a(77),u=a.n(i),d=a(54),m=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),v=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),b={tag:d.n,xs:v,sm:v,md:v,lg:v,xl:v,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,c=Object(l.a)(e,m),i=[];r.forEach((function(t,n){var l=e[t];if(delete c[t],l||""===l){var r=!n;if(Object(d.h)(l)){var o,s=r?"-":"-"+t+"-",m=h(r,t,l.size);i.push(Object(d.j)(u()(((o={})[m]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),a))}else{var f=h(r,t,l);i.push(f)}}})),i.length||i.push("col");var f=Object(d.j)(u()(t,i),a);return o.a.createElement(s,Object(n.a)({},c,{className:f}))};g.propTypes=b,g.defaultProps=p,t.a=g},641:function(e,t,a){},692:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(0),o=a.n(r),s=a(4),c=a.n(s),i=a(77),u=a.n(i),d=a(54),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],f={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.n,responsiveTag:d.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},v=function(e){var t=e.className,a=e.cssModule,r=e.size,s=e.bordered,c=e.borderless,i=e.striped,f=e.dark,v=e.hover,b=e.responsive,p=e.tag,h=e.responsiveTag,g=e.innerRef,E=Object(l.a)(e,m),j=Object(d.j)(u()(t,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!f&&"table-dark",!!v&&"table-hover"),a),O=o.a.createElement(p,Object(n.a)({},E,{ref:g,className:j}));if(b){var N=Object(d.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return o.a.createElement(h,{className:N},O)}return O};v.propTypes=f,v.defaultProps={tag:"table",responsiveTag:"div"},t.a=v}}]);
//# sourceMappingURL=69.3ec98d5d.chunk.js.map