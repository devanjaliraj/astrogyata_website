(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[62],{1111:function(e,t,a){"use strict";a.r(t);var n=a(202),l=a(196),o=a(197),r=a(198),c=a(199),i=a(0),u=a.n(i),m=a(606),s=a(607),p=a(618),E=a(691),d=a(692),v=a(666),h=a(690),b=a(644),f=a(611),g=a.n(f),y=(a(648),a(201)),C=a(78),N=a(632),S=a.n(N),k=a(693),j=a(1112),O=a(1113),L=a(1114),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.changeCountry=function(e){o.setState({selectedCountry:e}),C.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.timezones[0].zoneName}).then((function(e){var t,a;o.setState({timezone:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.timezone})})).catch((function(e){console.log(e)}))},o.changeCity=function(e){console.log("item",e),o.setState({submitPlaceHandler:e}),C.a.post("/user/geo_detail",{place:null===e||void 0===e?void 0:e.name}).then((function(e){var t,a,n,l;o.setState({latitude:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.geonames[0].latitude,longitude:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.geonames[0].longitude})})).catch((function(e){console.log(e)}))},o.submitCountryHandler=function(e){e.preventDefault();var t={country_code:o.state.country_code};console.log("shgdjhg",t),C.a.post("/user/time_zone",t).then((function(e){o.setState({data:e.data}),console.log("country_code",e.data.timezone),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.submitPlaceHandler=function(e){e.preventDefault();var t={place:o.state.place};console.log("shgdjhg",t),C.a.post("/user/geo_detail",t).then((function(e){var t;o.setState({data:e.data}),console.log("place",null===(t=e.data.geonames)||void 0===t?void 0:t.place_name),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.submitHandler=function(e){e.preventDefault();var t={day:o.state.day,month:o.state.month,year:o.state.year,hour:o.state.hour,min:o.state.min,lat:o.state.latitude,lon:o.state.longitude,tzone:o.state.timezone};console.log("shgdjhg",t),C.a.post("/user/lalkitab_horoscope",t).then((function(e){o.setState({data1:!0}),console.log("data1",e.data.data),o.setState({data:e.data.data}),console.log("data11",e.data.data)})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.state={data1:!1,day:"",month:"",year:"",hour:"",min:"",lat:"",lon:"",tzone:"",data:[],state:[],city:[],country:[],selectedCountry:null,selectedState:null,selectedCity:null,timezone:null,latitude:"",longitude:""},o}return Object(o.a)(a,[{key:"handleInputChanged",value:function(e){this.setState({searchQuery:e.target.value}),C.a.post("/user/geo_detail",{place:this.state.searchQuery}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.state.searchQuery)}},{key:"render",value:function(){var e,t,a,n=this,l=this.state.data;return console.log("firstResponse",l),!0===this.state.data1?(console.log("first",this.state.data1),u.a.createElement(y.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(m.a,null,u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"Lal Kitab"),u.a.createElement("h3",null,"Get instant & accurate, LalKitab"))))))),u.a.createElement(m.a,null,u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"12"},u.a.createElement(E.a,{className:"mb-50 pt-d"},u.a.createElement("h3",null,"Lal Kitab Online - Get Your Detailed Birth Chart with Predictions"),u.a.createElement("p",null,"Lal Kitab is a remarkable branch of Vedic astrology. Collection of the 5 books, written during the period of 1939-1952 is called Lal Kitab. Written in ancient Urdu language, first time in the history of astrology, Lal Kitab introduced a new style of horoscope analysis with quick and affordable remedies. Authorship of the books seems to be disputed. However, finding by our research community shows that the books were written by Pt. Roop Chand Joshi."),u.a.createElement("div",{className:"match-bx"},u.a.createElement("div",null,u.a.createElement(p.a,{md:"12"},u.a.createElement("h3",null,"Saved LalKitab "),u.a.createElement(d.a,{striped:!0,className:""},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Sign "),u.a.createElement("th",null,"Sign Name "),u.a.createElement("th",null,"Planet"),u.a.createElement("th",null,"Planet Degree "),u.a.createElement("th",null,"Planet Small "))),u.a.createElement("tbody",null,l.map((function(e){var t,a,n;return u.a.createElement("tr",null,u.a.createElement("th",null,e.sign),u.a.createElement("td",null,e.sign_name),u.a.createElement("td",null,null===e||void 0===e||null===(t=e.planet)||void 0===t?void 0:t.map((function(e){return u.a.createElement("p",{className:"tableL"},e)}))),u.a.createElement("td",null,null===e||void 0===e||null===(a=e.planet_small)||void 0===a?void 0:a.map((function(e){return u.a.createElement("p",{className:"tableL"},e)}))),u.a.createElement("td",null,null===e||void 0===e||null===(n=e.planet_small)||void 0===n?void 0:n.map((function(e){return u.a.createElement("p",{className:"tableL"},e)}))))}))))))))))))):u.a.createElement(y.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(m.a,null,u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"Lal Kitab"),u.a.createElement("h3",null,"Get instant & accurate, LalKitab"))))))),u.a.createElement(m.a,null,u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"12"},u.a.createElement(E.a,{className:"mb-50 pt-d"},u.a.createElement("h3",null,"Lal Kitab Online - Get Your Detailed Birth Chart with Predictions"),u.a.createElement("p",null,"Lal Kitab is a remarkable branch of Vedic astrology. Collection of the 5 books, written during the period of 1939-1952 is called Lal Kitab. Written in ancient Urdu language, first time in the history of astrology, Lal Kitab introduced a new style of horoscope analysis with quick and affordable remedies. Authorship of the books seems to be disputed. However, finding by our research community shows that the books were written by Pt. Roop Chand Joshi."),u.a.createElement("div",{className:"match-bx"},u.a.createElement("div",null,u.a.createElement(p.a,{md:"12"},u.a.createElement("h3",null," LAL KITAB"),u.a.createElement(v.a,null,u.a.createElement("div",{className:"form-m"},u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"2"},u.a.createElement("label",null,"Day"),u.a.createElement(h.a,{className:"form-control",type:"select",name:"day",value:this.state.day,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"0"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"25"),u.a.createElement("option",null,"26"),u.a.createElement("option",null,"27"),u.a.createElement("option",null,"28"),u.a.createElement("option",null,"29"),u.a.createElement("option",null,"30"),u.a.createElement("option",null,"31"))),u.a.createElement(p.a,{md:"2"},u.a.createElement("label",null," Month"),u.a.createElement(h.a,{className:"form-control",type:"select",name:"month",value:this.state.month,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"))),u.a.createElement(p.a,{md:"2"},u.a.createElement("label",null," Year"),u.a.createElement(h.a,{className:"form-control",type:"select",name:"year",value:this.state.year,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",{value:"1942"},"1942"),u.a.createElement("option",{value:"1943"},"1943"),u.a.createElement("option",{value:"1944"},"1944"),u.a.createElement("option",{value:"1945"},"1945"),u.a.createElement("option",{value:"1946"},"1946"),u.a.createElement("option",{value:"1947"},"1947"),u.a.createElement("option",{value:"1948"},"1948"),u.a.createElement("option",{value:"1949"},"1949"),u.a.createElement("option",{value:"1950"},"1950"),u.a.createElement("option",{value:"1951"},"1951"),u.a.createElement("option",{value:"1952"},"1952"),u.a.createElement("option",{value:"1953"},"1953"),u.a.createElement("option",{value:"1954"},"1954"),u.a.createElement("option",{value:"1955"},"1955"),u.a.createElement("option",{value:"1956"},"1956"),u.a.createElement("option",{value:"1957"},"1957"),u.a.createElement("option",{value:"1958"},"1958"),u.a.createElement("option",{value:"1959"},"1959"),u.a.createElement("option",{value:"1960"},"1960"),u.a.createElement("option",{value:"1961"},"1961"),u.a.createElement("option",{value:"1962"},"1962"),u.a.createElement("option",{value:"1963"},"1963"),u.a.createElement("option",{value:"1964"},"1964"),u.a.createElement("option",{value:"1965"},"1965"),u.a.createElement("option",{value:"1966"},"1966"),u.a.createElement("option",{value:"1967"},"1967"),u.a.createElement("option",{value:"1968"},"1968"),u.a.createElement("option",{value:"1969"},"1969"),u.a.createElement("option",{value:"1970"},"1970"),u.a.createElement("option",{value:"1971"},"1971"),u.a.createElement("option",{value:"1972"},"1972"),u.a.createElement("option",{value:"1973"},"1973"),u.a.createElement("option",{value:"1974"},"1974"),u.a.createElement("option",{value:"1975"},"1975"),u.a.createElement("option",{value:"1976"},"1976"),u.a.createElement("option",{value:"1977"},"1977"),u.a.createElement("option",{value:"1978"},"1978"),u.a.createElement("option",{value:"1979"},"1979"),u.a.createElement("option",{value:"1980"},"1980"),u.a.createElement("option",{value:"1981"},"1981"),u.a.createElement("option",{value:"1982"},"1982"),u.a.createElement("option",{value:"1983"},"1983"),u.a.createElement("option",{value:"1984"},"1984"),u.a.createElement("option",{value:"1985"},"1985"),u.a.createElement("option",{value:"1986"},"1986"),u.a.createElement("option",{value:"1987"},"1987"),u.a.createElement("option",{value:"1988"},"1988"),u.a.createElement("option",{value:"1989"},"1989"),u.a.createElement("option",{value:"1990"},"1990"),u.a.createElement("option",{value:"1991"},"1991"),u.a.createElement("option",{value:"1992"},"1992"),u.a.createElement("option",{value:"1993"},"1993"),u.a.createElement("option",{value:"1994"},"1994"),u.a.createElement("option",{value:"1995"},"1995"),u.a.createElement("option",{value:"1996"},"1996"),u.a.createElement("option",{value:"1997"},"1997"),u.a.createElement("option",{value:"1998"},"1998"),u.a.createElement("option",{value:"1999"},"1999"),u.a.createElement("option",{value:"2000"},"2000"),u.a.createElement("option",{value:"2001"},"2001"),u.a.createElement("option",{value:"2002"},"2002"),u.a.createElement("option",{value:"2003"},"2003"),u.a.createElement("option",{value:"2004"},"2004"),u.a.createElement("option",{value:"2005"},"2005"),u.a.createElement("option",{value:"2006"},"2006"),u.a.createElement("option",{value:"2007"},"2007"),u.a.createElement("option",{value:"2008"},"2008"),u.a.createElement("option",{value:"2009"},"2009"),u.a.createElement("option",{value:"2010"},"2010"),u.a.createElement("option",{value:"2011"},"2011"),u.a.createElement("option",{value:"2011"},"2012"),u.a.createElement("option",{value:"2011"},"2013"),u.a.createElement("option",{value:"2011"},"2014"),u.a.createElement("option",{value:"2011"},"2015"),u.a.createElement("option",{value:"2011"},"2016"),u.a.createElement("option",{value:"2011"},"2017"),u.a.createElement("option",{value:"2011"},"2018"),u.a.createElement("option",{value:"2011"},"2019"),u.a.createElement("option",{value:"2011"},"2020"),u.a.createElement("option",{value:"2011"},"2021"),u.a.createElement("option",{value:"2011"},"2022"),u.a.createElement("option",{value:"2011"},"2023"),u.a.createElement("option",{value:"2011"},"2024"),u.a.createElement("option",{value:"2011"},"2025"),u.a.createElement("option",{value:"2011"},"2026"),u.a.createElement("option",{value:"2011"},"2021"),u.a.createElement("option",{value:"2011"},"2027"),u.a.createElement("option",{value:"2011"},"2028"),u.a.createElement("option",{value:"2011"},"2029"),u.a.createElement("option",{value:"2011"},"2030"))),u.a.createElement(p.a,{md:"2"},u.a.createElement("label",null," Hour"),u.a.createElement(h.a,{className:"form-control",type:"select",name:"hour",value:this.state.hour,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"24"))),u.a.createElement(p.a,{md:"2"},u.a.createElement("label",null," Minute"),u.a.createElement(h.a,{className:"form-control",type:"select",name:"min",value:this.state.min,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"24"),u.a.createElement("option",null,"25"),u.a.createElement("option",null,"26"),u.a.createElement("option",null,"27"),u.a.createElement("option",null,"28"),u.a.createElement("option",null,"29"),u.a.createElement("option",null,"30"),u.a.createElement("option",null,"31"),u.a.createElement("option",null,"32"),u.a.createElement("option",null,"33"),u.a.createElement("option",null,"34"),u.a.createElement("option",null,"35"),u.a.createElement("option",null,"36"),u.a.createElement("option",null,"37"),u.a.createElement("option",null,"38"),u.a.createElement("option",null,"39"),u.a.createElement("option",null,"40"),u.a.createElement("option",null,"41"),u.a.createElement("option",null,"42"),u.a.createElement("option",null,"43"),u.a.createElement("option",null,"44"),u.a.createElement("option",null,"45"),u.a.createElement("option",null,"46"),u.a.createElement("option",null,"47"),u.a.createElement("option",null,"48"),u.a.createElement("option",null,"49"),u.a.createElement("option",null,"50"),u.a.createElement("option",null,"51"),u.a.createElement("option",null,"52"),u.a.createElement("option",null,"53"),u.a.createElement("option",null,"54"),u.a.createElement("option",null,"55"),u.a.createElement("option",null,"56"),u.a.createElement("option",null,"57"),u.a.createElement("option",null,"58"),u.a.createElement("option",null,"59")," ",u.a.createElement("option",null,"60")))),u.a.createElement(s.a,null,u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"Country"),u.a.createElement(k.a,{options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry,onChange:function(e){n.changeCountry(e)}})),u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"State"),u.a.createElement(k.a,{options:null===O.a||void 0===O.a?void 0:O.a.getStatesOfCountry(null===(e=this.state.selectedCountry)||void 0===e?void 0:e.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState,onChange:function(e){n.setState({selectedState:e})}})),u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"City"),u.a.createElement(k.a,{options:L.a.getCitiesOfState(null===(t=this.state.selectedState)||void 0===t?void 0:t.countryCode,null===(a=this.state.selectedState)||void 0===a?void 0:a.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.submitPlaceHandler,onChange:function(e){n.changeCity(e)}})),u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"Birth Place Latitude"),u.a.createElement(h.a,{className:"form-control",placeholder:"00.00",maxLength:7,type:"text",name:"latitude",value:this.state.latitude,onChange:this.changeHandler})),u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"Birth Place Longitude"),u.a.createElement(h.a,{className:"form-control",placeholder:"00.000",maxLength:7,type:"text",name:"longitude",value:this.state.longitude,onChange:this.changeHandler})),u.a.createElement(p.a,{md:"4"},u.a.createElement("label",null,"Birth Place Time Zone"),u.a.createElement("input",{className:"form-control",type:"text",placeholder:"00.00",maxLength:5,name:"timezone",value:this.state.timezone,onChange:this.changeHandler}))),u.a.createElement(b.a,{className:"btn btn-primary",onClick:function(e){n.submitHandler(e)},type:"submit"},"submit")))))))))))}}]),a}(i.Component);t.default=x},611:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},648:function(e,t,a){},666:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(203),r=a(20),c=a(0),i=a.n(c),u=a(4),m=a.n(u),s=a(77),p=a.n(s),E=a(54),d=["className","cssModule","inline","tag","innerRef"],v={children:m.a.node,inline:m.a.bool,tag:E.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,r=e.tag,c=e.innerRef,u=Object(l.a)(e,d),m=Object(E.j)(p()(t,!!o&&"form-inline"),a);return i.a.createElement(r,Object(n.a)({},u,{ref:c,className:m}))},t}(c.Component);h.propTypes=v,h.defaultProps={tag:"form"},t.a=h},691:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),r=a.n(o),c=a(4),i=a.n(c),u=a(77),m=a.n(u),s=a(54),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:s.n,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.color,c=e.body,i=e.inverse,u=e.outline,E=e.tag,d=e.innerRef,v=Object(l.a)(e,p),h=Object(s.j)(m()(t,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(u?"border":"bg")+"-"+o),a);return r.a.createElement(E,Object(n.a)({},v,{className:h,ref:d}))};d.propTypes=E,d.defaultProps={tag:"div"},t.a=d},692:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),r=a.n(o),c=a(4),i=a.n(c),u=a(77),m=a.n(u),s=a(54),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],E={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:s.n,responsiveTag:s.n,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},d=function(e){var t=e.className,a=e.cssModule,o=e.size,c=e.bordered,i=e.borderless,u=e.striped,E=e.dark,d=e.hover,v=e.responsive,h=e.tag,b=e.responsiveTag,f=e.innerRef,g=Object(l.a)(e,p),y=Object(s.j)(m()(t,"table",!!o&&"table-"+o,!!c&&"table-bordered",!!i&&"table-borderless",!!u&&"table-striped",!!E&&"table-dark",!!d&&"table-hover"),a),C=r.a.createElement(h,Object(n.a)({},g,{ref:f,className:y}));if(v){var N=Object(s.j)(!0===v?"table-responsive":"table-responsive-"+v,a);return r.a.createElement(b,{className:N},C)}return C};d.propTypes=E,d.defaultProps={tag:"table",responsiveTag:"div"},t.a=d}}]);
//# sourceMappingURL=62.3da369c9.chunk.js.map