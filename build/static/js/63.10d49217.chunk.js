(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[63],{1117:function(e,a,t){"use strict";t.r(a);var n=t(196),l=t(197),r=t(198),s=t(199),o=t(0),c=t.n(o),i=t(812),u=(t(638),t(203)),d=t(603),m=t(604),f=t(617),b=t(201),p=t(611),g=t.n(p),h=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));u.a.get("/user/walletHistory/".concat(e)).then((function(e){console.log(e.data),!0===e.data.status&&l.setState({WalletTransacList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)})),u.a.get("/user/viewoneuser/".concat(e)).then((function(e){console.log("sjdfjdfg",e.data.data),l.setState({amount:e.data.data.amount})})).catch((function(e){console.log(e)}))},l.state={WalletTransacList:[],data:{}},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.WalletTransacList;return c.a.createElement(b.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(d.a,null,c.a.createElement(m.a,null,c.a.createElement(f.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"Wallet Transactions"),c.a.createElement("h3",null,"Available balance : ",c.a.createElement("span",null,this.state.amount)))))))),c.a.createElement("section",null,c.a.createElement(d.a,null,c.a.createElement(m.a,null,c.a.createElement(f.a,{lg:"12"},c.a.createElement("div",{className:""},c.a.createElement(i.a,{striped:!0,className:""},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"# T/C ID."),c.a.createElement("th",null,"Amount Before"),c.a.createElement("th",null,"Transaction Amount"),c.a.createElement("th",null,"Amount After"),c.a.createElement("th",null,"Date/Time"),c.a.createElement("th",null,"Transaction Type"))),c.a.createElement("tbody",null,e.length?e.map((function(e,a){return c.a.createElement("tr",null,c.a.createElement("th",null,e.transaction_id,e.conversationId),c.a.createElement("td",null,e.beforeAmt),c.a.createElement("td",null,e.deductedAmt," ",e.creditedAmt),c.a.createElement("td",null,e.finalAmt),c.a.createElement("td",null,e.createdAt),c.a.createElement("td",null,e.tran_Type))})):null))))))))}}]),t}(c.a.Component);a.default=h},611:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},617:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(0),s=t.n(r),o=t(4),c=t.n(o),i=t(77),u=t.n(i),d=t(55),m=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:d.n,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,c=Object(l.a)(e,m),i=[];r.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var r=!n;if(Object(d.h)(l)){var s,o=r?"-":"-"+a+"-",m=h(r,a,l.size);i.push(Object(d.j)(u()(((s={})[m]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=h(r,a,l);i.push(f)}}})),i.length||i.push("col");var f=Object(d.j)(u()(a,i),t);return s.a.createElement(o,Object(n.a)({},c,{className:f}))};v.propTypes=p,v.defaultProps=g,a.a=v},638:function(e,a,t){},812:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(0),s=t.n(r),o=t(4),c=t.n(o),i=t(77),u=t.n(i),d=t(55),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],f={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.n,responsiveTag:d.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},b=function(e){var a=e.className,t=e.cssModule,r=e.size,o=e.bordered,c=e.borderless,i=e.striped,f=e.dark,b=e.hover,p=e.responsive,g=e.tag,h=e.responsiveTag,v=e.innerRef,E=Object(l.a)(e,m),j=Object(d.j)(u()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!f&&"table-dark",!!b&&"table-hover"),t),T=s.a.createElement(g,Object(n.a)({},E,{ref:v,className:j}));if(p){var O=Object(d.j)(!0===p?"table-responsive":"table-responsive-"+p,t);return s.a.createElement(h,{className:O},T)}return T};b.propTypes=f,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b}}]);
//# sourceMappingURL=63.10d49217.chunk.js.map