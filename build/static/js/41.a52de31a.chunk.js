(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[41,147,158],{1178:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(633),r=t.n(s),c=t(886),o=(t(887),t(888)),i=t.n(o),m=t(889),u=t.n(m),d=function(e){var a=e.data,t=e.sliderClass;return n.a.createElement("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img ".concat(t||""),style:{backgroundImage:"url(".concat(""+a.image,")")}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12"},n.a.createElement("div",{className:"slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 mtt"},n.a.createElement("h3",{className:"animated no-style",dangerouslySetInnerHTML:{__html:a.title}}),n.a.createElement("h1",{className:"animated",dangerouslySetInnerHTML:{__html:a.subtitle}}),n.a.createElement("div",{className:"slider-btn-brown btn-hover"}))),n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12"},n.a.createElement("img",{src:u.a,className:"st-1",alt:"",width:"400px"}),n.a.createElement("img",{src:i.a,className:"st-2",alt:""})))))},p=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement("div",{className:"slider-area"},n.a.createElement("div",{className:"slider-active nav-style-1"},n.a.createElement(r.a,e,c&&c.map((function(e,a){return n.a.createElement(d,{data:e,key:a,sliderClass:"swiper-slide"})})))))},E=t(200),g=t(848),v=t(25),h=(t(890),t(2)),f=t(203),b=function(e){var a=e.data,t=(e.singlePost,Object(l.useState)("")),s=Object(v.a)(t,2),r=(s[0],s[1],Object(l.useState)(a)),c=Object(v.a)(r,2),o=(c[0],c[1]);return Object(l.useEffect)((function(){o(a)}),[a]),n.a.createElement("div",{className:"col-lg-4 col-sm-6"},n.a.createElement("div",{className:"blog-wrap mb-30 scroll-zoom"},n.a.createElement("div",{className:"blog-img"},n.a.createElement(h.c,{to:"/blog-standard/"+(null===a||void 0===a?void 0:a._id)},n.a.createElement("img",{src:null===a||void 0===a?void 0:a.img,alt:""})),n.a.createElement("div",{className:"blog-category-names"},n.a.createElement("span",{className:"purple"}))),n.a.createElement("div",{className:"blog-content-wrap"},n.a.createElement("div",{className:"blog-content text-center"},n.a.createElement("h3",null,null===a||void 0===a?void 0:a.name),n.a.createElement("span",null,"By Admin"," "),n.a.createElement("p",null)))))},N=t(205),y=t.n(N),w=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,s=Object(l.useState)([]),r=Object(v.a)(s,2),c=r[0],o=r[1];return Object(l.useEffect)((function(){f.a.get("/user/active_blog_category").then((function(e){console.log(e.data.data),!0===e.data.status&&o(e.data.data)})).catch((function(e){console.log(e)}))}),[]),n.a.createElement("div",{className:"blog-area ".concat(a||""," ").concat(t||"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"heading mt-70"},n.a.createElement("h2",null,"Blogs "),n.a.createElement("img",{src:y.a,alt:""})),n.a.createElement("div",{className:"row"},c&&c.map((function(e,a){return n.a.createElement(b,{data:e,key:a,sliderClass:"swiper-slide rtt"})})))))},C=(t(891),t(808)),x=t(849),j=t(893),A=function(e){var a=e.data,t=e.spaceBottomClass,l=e.textAlignClass;return n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"support-wrap-5 support-shape ".concat(t||""," ").concat(l||"")},n.a.createElement("div",{className:"support-icon"},n.a.createElement("img",{className:"animated img-secure",src:""+a.image,alt:""})),n.a.createElement("div",{className:"support-content-5"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.subtitle))))},O=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass;return n.a.createElement("div",{className:"support-area ".concat(a||""," ").concat(t||"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",null,"Why Choose Astrogyata ?"),n.a.createElement("img",{src:y.a,alt:"",className:"sb-img"})),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("div",{className:"row feature-icon-two-wrap"},j&&j.map((function(e,a){return n.a.createElement(A,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center",key:a})}))))))},k=t(850),B=t(851),S=t(603),P=t(604),T=t(894),_=t.n(T);var V=function(){var e={loop:!0,slidesPerView:4,grabCursor:!0,spaceBetween:10,breakpoints:{1024:{slidesPerView:4},768:{slidesPerView:3},640:{slidesPerView:2},320:{slidesPerView:1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav gt-1"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav gt-2"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement("div",{className:"mt-20"},n.a.createElement(S.a,null,n.a.createElement("div",{className:"heading"},n.a.createElement("h2",null,"Watch Astrologers Video"),n.a.createElement("img",{src:y.a,alt:""})),n.a.createElement(P.a,null,n.a.createElement(r.a,e,n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=Isyq2apnaOk",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=jCl_yFqSBtg",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=Xq5im6BrhTw",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=opCDc7ae3GI",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=VAn5Csn4bJY",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=BCNIO-T-j_E",playing:!0,className:"vdl-l"})),n.a.createElement("div",{className:"v-bx"},n.a.createElement(_.a,{style:{position:"relative !important"},url:"https://www.youtube.com/watch?v=M6TdmuIYwAs",playing:!0,className:"vdl-l"}))))))},L=t(811);a.default=function(){return n.a.createElement(E.a,{headerTop:"visible"},n.a.createElement(p,null),n.a.createElement(g.default,null),n.a.createElement(O,{spaceBottomClass:"pb-30",spaceTopClass:"pt-30"}),n.a.createElement(L.default,null),n.a.createElement(x.default,null),n.a.createElement(B.default,null),n.a.createElement(k.default,null),n.a.createElement(V,null),n.a.createElement(C.a,{spaceTopClass:"pt-30",spaceBottomClass:"pb-30"}),n.a.createElement(w,{spaceBottomClass:"pb-55"}))}},794:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/icon-img/stclient.png","countNum":1300,"title":"Satisfied Clients"},{"id":"2","image":"/assets/img/icon-img/stastro.png","countNum":20,"title":"Astrologers"},{"id":"3","image":"/assets/img/icon-img/stusers.png","countNum":4000,"title":"Registered Users"}]')},808:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=t(794),r=t(25),c=t(825),o=t.n(c),i=t(826),m=t.n(i),u=function(e){var a=e.data,t=e.spaceBottomClass,s=e.textAlignClass,c=Object(l.useState)(!1),i=Object(r.a)(c,2),u=i[0],d=i[1];return n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},n.a.createElement("div",{className:"single-count ".concat(s||""," ").concat(t||"")},n.a.createElement("div",{className:"count-icon"},n.a.createElement("img",{className:"animated img-secure",src:""+a.image,alt:""})),n.a.createElement("h2",{className:"count"},n.a.createElement(m.a,{onChange:function(e){e&&d(!0)},offset:{top:10},delayedCall:!0},n.a.createElement(o.a,{end:u?a.countNum:0}))),n.a.createElement("span",null,a.title)))};a.a=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,l=e.bgClass;return n.a.createElement("div",{className:"funfact-area ".concat(a||""," ").concat(t||""," ").concat(l||"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},s&&s.map((function(e,a){return n.a.createElement(u,{data:e,spaceBottomClass:"mb-30",key:a,textAlignClass:"text-center"})})))))}},810:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t(0),s=t.n(n),r=t(2),c=t(203);a.default=function(e){var a=e.data,t=e.sliderClass,o=e.sliderdemoClass,i=Object(n.useState)(""),m=Object(l.a)(i,2),u=(m[0],m[1],Object(n.useState)(a)),d=Object(l.a)(u,2),p=(d[0],d[1]);return Object(n.useEffect)((function(){p(a)}),[a]),s.a.createElement("div",{className:"".concat(o||" slider-demo"," text-center ").concat(t||""," st-hit")},s.a.createElement("div",{className:"image-flip"},s.a.createElement("div",{className:"mainflip flip-0"},s.a.createElement("div",{className:"frontside"},s.a.createElement(r.c,{to:"/astrologerdetail/"+a._id},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("p",null,s.a.createElement("img",{src:null===a||void 0===a?void 0:a.img,alt:""})),s.a.createElement("h4",{className:"card-title"},null===a||void 0===a?void 0:a.fullname),s.a.createElement("ul",{className:"mb-3"},s.a.createElement("li",null,"Experience: ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.exp_in_years)),s.a.createElement("li",null,"Call Rate:"," ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.callCharge,"/",null===a||void 0===a?void 0:a.conrubute_hrs))),s.a.createElement(r.c,{className:"btn btn-primary btn-sm st-d"},null===a||void 0===a?void 0:a.status),s.a.createElement(r.c,{onClick:function(){return function(e){console.log(e);var a=localStorage.getItem("user_mobile_no"),t={userid:JSON.parse(localStorage.getItem("user_id")),astroid:e._id,From:e.mobile,To:a};c.a.post("/user/make_call",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(a)},className:"btn btn-primary btn-sm"},s.a.createElement("i",{class:"fa fa-phone"})," Call Now",s.a.createElement("small",null)))))))))}},811:function(e,a,t){"use strict";t.r(a);var l=t(195),n=t(196),s=t(197),r=t(198),c=t(0),o=t.n(c),i=t(2),m=t(603),u=t(604),d=t(614),p=t(205),E=t.n(p),g=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{className:"ptb-30"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading"},o.a.createElement("h2",null,"Free Astrologer Services"),o.a.createElement("img",{src:E.a,alt:"",className:"sb-img"})),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/heroscopestwo"},o.a.createElement("h3",null,"Horoscopes"),o.a.createElement("p",null,"A horoscope is a forecast of a person's future astrologers?.")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/kundaliform"},o.a.createElement("h3",null," Match Matching"),o.a.createElement("p",null,"Kundali Match Making to get married. ")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/manglikdosh"},o.a.createElement("h3",null,"Manglik Dosh"),o.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? ")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/pitraDosh"},o.a.createElement("h3",null,"Pitra Dosh"),o.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? "))))," ",o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/kalsharpDosh"},o.a.createElement("h3",null,"Kalsharp Dosh"),o.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? ")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/lalKitab"},o.a.createElement("h3",null,"Lal Kitab"),o.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? "))))," "))))),o.a.createElement("section",{className:"ptb-30"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading"},o.a.createElement("h2",null,"Paid Astrologer Services"),o.a.createElement("img",{src:E.a,alt:"",className:"sb-img"})),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/allastrochatlist"},o.a.createElement("h3",null,"Chat with Astrologer"),o.a.createElement("p",null,"Chat with an astrologers online at Astrogyata! Chat Now! ")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/#/"},o.a.createElement("h3",null,"Call Astrologer"),o.a.createElement("p",null,"Chat with an  astrologers online anytime at Astrogyata! Call Now! ")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/#/"},o.a.createElement("h3",null,"Video Call Astrologer"),o.a.createElement("p",null,"Video Call with an astrologer online at Astrogyata! Video Call Now!")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/askQuestionList"},o.a.createElement("h3",null,"Ask Question "),o.a.createElement("p",null," Ask Question with an astrologers online anytime at Astrogyata! Ask Question Now!")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/allastrologerlist"},o.a.createElement("h3",null,"Talk Astrologer"),o.a.createElement("p",null," Talk to experienced astrologers online anytime at Astrogyata! Call Now!")))),o.a.createElement(d.a,{md:"2"},o.a.createElement("div",{className:"serve-1"},o.a.createElement(i.c,{to:"/bookEvent"},o.a.createElement("h3",null,"Book Puja "),o.a.createElement("p",null," Puja to experienced astrologers online anytime at Astrogyata! Book Now!"))))))))))}}]),t}(o.a.Component);a.default=g},824:function(e,a,t){},827:function(e,a,t){e.exports=t.p+"static/media/abot.6d282265.png"},828:function(e,a,t){e.exports=t.p+"static/media/astro2.50c958da.jpg"},848:function(e,a,t){"use strict";t.r(a);var l=t(195),n=t(196),s=t(197),r=t(198),c=t(0),o=t.n(c),i=t(2),m=t(603),u=t(604),d=t(614),p=t(205),E=t.n(p),g=(t(824),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"stt-2"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading"},o.a.createElement("h2",null,"Connect to Astrologers"),o.a.createElement("img",{src:E.a,alt:""})),o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"4"},o.a.createElement("div",{className:"process-box process-left","data-aos":"fade-right","data-aos-duration":"1000"},o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"5"},o.a.createElement("div",{className:"process-step"},o.a.createElement("i",{class:"fa fa-commenting-o","aria-hidden":"true"}))),o.a.createElement(d.a,{md:"7"},o.a.createElement(i.c,{to:"/allastrochatlist"},o.a.createElement("h5",{className:"bt-txt"},"Chat with Astrologer")),"                                            ")))),o.a.createElement(d.a,{md:"4"},o.a.createElement("div",{className:"process-box process-left","data-aos":"fade-right","data-aos-duration":"1000"},o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"5"},o.a.createElement("div",{className:"process-step"},o.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}))),o.a.createElement(d.a,{md:"7"},o.a.createElement(i.c,{to:"/allastrologerlist"},o.a.createElement("h5",{className:"bt-txt"},"Talk to Astrologer")))))),o.a.createElement(d.a,{md:"4"},o.a.createElement("div",{className:"process-box process-left","data-aos":"fade-right","data-aos-duration":"1000"},o.a.createElement(u.a,null,o.a.createElement(d.a,{md:"5"},o.a.createElement("div",{className:"process-step"},o.a.createElement("i",{class:"fa fa-file-video-o","aria-hidden":"true"}))),o.a.createElement(d.a,{md:"7"},o.a.createElement(i.c,{to:"/liveAstrologer"},o.a.createElement("h5",{className:"bt-txt"},"Live Astrologer")))))))))))}}]),t}(o.a.Component));a.default=g},849:function(e,a,t){"use strict";t.r(a);var l=t(195),n=t(196),s=t(197),r=t(198),c=t(0),o=t.n(c),i=t(603),m=t(604),u=t(614),d=t(205),p=t.n(d),E=t(827),g=t.n(E),v=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",null,o.a.createElement(i.a,null,o.a.createElement("div",{className:"heading"},o.a.createElement("h2",null,"About Us"),o.a.createElement("img",{src:p.a,alt:"",className:"sb-img"})),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6"},o.a.createElement("div",null,o.a.createElement("img",{src:g.a,alt:"",gclassName:"ab-img",className:"abt-img"}))),o.a.createElement(u.a,{lg:"6"},o.a.createElement("div",{className:""},o.a.createElement("h3",null,"Astrogyata Connects You With Best Astrologers"),o.a.createElement("p",null,"Astrology is a practice that originated thousands of years ago in which people study the positions of celestial bodies, such as the sun, moon, and planets, in the belief that they have an influence on human affairs and natural phenomena. Based on the positions of these bodies, astrologers create birth charts or horoscopes that are said to reveal someone's personality traits, life path, and potential future events."),o.a.createElement("p",null,"There are total nine planets in the astrology are Sun (Surya), Moon (Chandra), Mars (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra), Saturn (Shani), Rahu (north node of the moon), and Ketu (south node of the moon)."),o.a.createElement("p",null,"Among these planets, some planets are known as friendly planets, meaning the presence of them brings positivity to your life. And then, there are also planets that have a negative effect on human life. The latter would be planets like Rahu and Ketu. Their presence in one\u2019s Kundli is said to bring pain and misery. The impact of planets on one\u2019s life depends upon the position of these planets in houses. There are total twelve houses in Kundli and all of these houses represent one thing or the other"))))))))}}]),t}(o.a.Component);a.default=v},850:function(e,a,t){"use strict";t.r(a);var l=t(195),n=t(196),s=t(197),r=t(198),c=t(0),o=t.n(c),i=t(2),m=t(603),u=t(604),d=t(614),p=t(205),E=t.n(p),g=(t(828),t(43)),v=t.n(g),h=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={productList:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://13.234.48.35:8000/admin/getProduct").then((function(a){console.log(a),e.setState({productList:a.data.data})}))}},{key:"render",value:function(){var e=this.state.productList;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading mt-40"},o.a.createElement("h2",null,"Our Trending Products"),o.a.createElement("img",{src:E.a,alt:""})),o.a.createElement(u.a,null,o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"pt-0"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,null,this.state.productList.length?e.map((function(e,a){return o.a.createElement(d.a,{md:"3"},o.a.createElement("div",{className:"product-grid8"},o.a.createElement("div",{class:"product-image8"},o.a.createElement(i.c,{to:"/poojadetail"},o.a.createElement("img",{src:e.image,alt:"",className:"Ptd-img"}))),o.a.createElement("div",{className:"product-content"},o.a.createElement("div",{className:"price"},o.a.createElement("i",{class:"fa fa-inr","aria-hidden":"true"})," ",e.price),o.a.createElement("h3",{className:"title"},o.a.createElement(i.c,null,e.productname," ")),o.a.createElement(i.c,{className:"all-deals"},"View More",o.a.createElement("i",{class:"fa fa-angle-right icon"})))))})):null)))))))}}]),t}(o.a.Component);a.default=h},851:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t(0),s=t.n(n),r=t(633),c=t.n(r),o=t(205),i=t.n(o),m=t(810),u=t(203);a.default=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,r=e.spaceLeftClass,o=e.spaceRightClass,d=e.bgColorClass,p=e.sliderdemoClass,E=(e.backgroundImage,{slidesPerView:4,loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:4,direction:"horizontal",spaceBetween:15},640:{slidesPerView:2,direction:"horizontal",spaceBetween:15},320:{slidesPerView:2,direction:"horizontal",spaceBetween:15}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return s.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},s.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return s.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},s.a.createElement("i",{className:"pe-7s-angle-right"}))}}),g=Object(n.useState)([]),v=Object(l.a)(g,2),h=v[0],f=v[1];return Object(n.useEffect)((function(){u.a.get("/admin/allAstro").then((function(e){console.log(e.data.data),!0===e.data.status&&f(e.data.data)})).catch((function(e){console.log(e)}))}),[]),s.a.createElement("div",{className:" ".concat(a||"","  ").concat(t||""," ").concat(r||"","  ").concat(o||""," ").concat(d||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12  ml-auto mr-auto"},s.a.createElement("div",{className:"heading"},s.a.createElement("h2",null,"Best Astrologers"),s.a.createElement("img",{src:i.a,alt:""})),s.a.createElement("div",{className:" nav-style-1 nav-testi-style"},s.a.createElement(c.a,E,h&&h.map((function(e,a){return s.a.createElement(m.default,{data:e,key:a,sliderClass:"swiper-slide rtt",sliderdemoClass:p})}))))))))}},886:function(e){e.exports=JSON.parse('[{"id":1,"title":"AstroGyata Your true Guide to world of Progress.","subtitle":"","image":"/assets/img/slider/slider-31.jpg","url":"/shop-grid-standard"},{"id":2,"title":"AstroGyata Your true Guide to world of Progress.","subtitle":"","image":"/assets/img/slider/slider-32.jpg","url":"/shop-grid-standard"},{"id":3,"title":"AstroGyata Your true Guide to world of Progress.","subtitle":"","image":"/assets/img/slider/slider-33.jpg","url":"/shop-grid-standard"}]')},887:function(e,a,t){e.exports=t.p+"static/media/handbgone .73a08160.png"},888:function(e,a,t){e.exports=t.p+"static/media/om.b343f9ec.png"},889:function(e,a,t){e.exports=t.p+"static/media/gif.2260a8b6.png"},890:function(e){e.exports=JSON.parse("{}")},891:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-2.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')},893:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/secure-3.png","title":"100% Data Security","subtitle":"In today\'s digital age, data security is of utmost importance. To achieve 100% data security, it is essential to implement robust security measures that are constantly updated to keep up with evolving threats. We take all the essential steps to protect the data security and privacy by using of proper encryption, role based access, proper data backup at different locations, deployment of well qualified team for a robust incident response. "},{"id":2,"image":"/assets/img/icon-img/secure-2.png","title":"100% Certified Astrologers ","subtitle":"We have a robust on boarding process for an astrologer by verifying their credentials and past experience, reputation to ensure that they are qualified to provide astrology services."}]')}}]);
//# sourceMappingURL=41.a52de31a.chunk.js.map