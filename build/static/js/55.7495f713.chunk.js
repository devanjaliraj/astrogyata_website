(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[55],{1099:function(e,t,a){"use strict";a.r(t);var n=a(196),c=a(197),o=a(198),l=a(199),r=a(0),i=a.n(r),s=a(2),d=a(603),m=a(604),u=a(617),p=a(787),f=a(611),b=a.n(f),g=(a(975),a(677),a(976),a(201)),E=a(204),v=a(834),h=a.n(v),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={data:{}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;localStorage.setItem("product_id",t),E.a.get("/admin/viewoneProduct/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data,image:t.data.data.image[0]})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return i.a.createElement(g.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Product Detail"))))))),i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"12"},i.a.createElement(p.a,{className:"mb-50"},i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"4"},i.a.createElement("div",{className:"preview-pic tab-content"},i.a.createElement("img",{src:null===(e=this.state)||void 0===e?void 0:e.image,alt:"",width:"100%"}))),i.a.createElement(u.a,{md:"8"},i.a.createElement("div",{className:"details"},i.a.createElement("h3",{className:"product-title"},this.state.data.productname),i.a.createElement("p",null,h()(this.state.data.desc)),i.a.createElement("h4",{className:"price"},"Starting From: ",i.a.createElement("span",null,"$",this.state.data.price)),i.a.createElement("div",{class:"action"},i.a.createElement(s.c,{to:"/consultantlist/"+this.state.data._id},i.a.createElement("button",{className:"add-to-cart btn btn-default",type:"button"},"Book Now")))))))))))}}]),a}(i.a.Component);t.default=j},611:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},677:function(e,t,a){},787:function(e,t,a){"use strict";var n=a(7),c=a(15),o=a(0),l=a.n(o),r=a(4),i=a.n(r),s=a(77),d=a.n(s),m=a(55),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:m.n,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.color,r=e.body,i=e.inverse,s=e.outline,p=e.tag,f=e.innerRef,b=Object(c.a)(e,u),g=Object(m.j)(d()(t,"card",!!i&&"text-white",!!r&&"card-body",!!o&&(s?"border":"bg")+"-"+o),a);return l.a.createElement(p,Object(n.a)({},b,{className:g,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},836:function(e,t){},975:function(e,t,a){e.exports=a.p+"static/media/Pj.316d312d.jpg"},976:function(e,t,a){e.exports=a.p+"static/media/pagetitle.504c1cba.jpg"}}]);
//# sourceMappingURL=55.7495f713.chunk.js.map