(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[81],{1133:function(e,t,a){"use strict";a.r(t);var n=a(201),l=a(195),o=a(196),r=a(197),i=a(198),c=a(0),u=a.n(c),m=a(2),s=a(603),p=a(604),E=a(614),d=a(701),h=a(665),v=a(687),g=a(641),f=a(608),b=a.n(f),y=(a(647),a(200)),k=a(203),N=a(629),S=a.n(N),_=a(703),C=a(1108),x=a(1109),O=a(1110),M=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.changeCountry=function(e){o.setState({selectedCountry:e}),k.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.timezones[0].zoneName}).then((function(e){var t,a;o.setState({timezone:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.timezone})})).catch((function(e){console.log(e)}))},o.changeCity=function(e){console.log("item",e),o.setState({submitPlaceHandler:e}),k.a.post("/user/geo_detail",{place:null===e||void 0===e?void 0:e.name}).then((function(e){var t,a,n,l;o.setState({latitude:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.geonames[0].latitude,longitude:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.geonames[0].longitude})})).catch((function(e){console.log(e)}))},o.submitCountryHandler=function(e){e.preventDefault();var t={country_code:o.state.country_code};console.log("shgdjhg",t),k.a.post("/user/time_zone",t).then((function(e){o.setState({data:e.data}),console.log("country_code",e.data.timezone),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.submitPlaceHandler=function(e){e.preventDefault();var t={place:o.state.place};console.log("shgdjhg",t),k.a.post("/user/geo_detail",t).then((function(e){var t;o.setState({data:e.data}),console.log("place",null===(t=e.data.geonames)||void 0===t?void 0:t.place_name),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.submitHandler=function(e){e.preventDefault();var t={day:o.state.day,month:o.state.month,year:o.state.year,hour:o.state.hour,min:o.state.min,lat:o.state.latitude,lon:o.state.longitude,tzone:o.state.timezone};console.log("shgdjhg",t),k.a.post("/user/ManglikDosh",t).then((function(e){o.setState({data1:!0}),console.log("data1",e.data.data),o.setState({ManglikDosh:e.data.data}),console.log("data11",e.data.data),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){S()("Error!","You clicked the button!","error"),console.log(e)}))},o.state={day:"",month:"",year:"",hour:"",min:"",lat:"",lon:"",tzone:"",ManglikDosh:{},state:[],city:[],country:[],selectedCountry:null,selectedState:null,selectedCity:null,timezone:null,latitude:"",longitude:"",data1:!1},o}return Object(o.a)(a,[{key:"handleInputChanged",value:function(e){this.setState({searchQuery:e.target.value}),k.a.post("/user/geo_detail",{place:this.state.searchQuery}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.state.searchQuery)}},{key:"render",value:function(){var e,t,a,n,l,o,r,i,c,f=this,k=this.state.ManglikDosh;return console.log("Magalik@@@@",k),!0===this.state.data1?(console.log("first",this.state.data1),u.a.createElement(y.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(s.a,null,u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"MANGLIK DOSH"),u.a.createElement("h3",null,"Get instant & accurate, Janam Kundli"))))))),u.a.createElement(s.a,null,u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"12"},u.a.createElement(d.a,{className:"mb-50 pt-d"},u.a.createElement("h3",null,"MANGLIK DOSH Online - Get Your Detailed Birth Chart with Predictions"),u.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? Then you have come to the right place. The online free kundali available on AstroGyata is a 100% free and authentic free Kundli that has been prepared after consulting more than 50 expert astrologers on board. The free kundli is such that it can give you a glimpse into various aspects of your life such as your career, love life, marriage, business and much more. The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions."),u.a.createElement("p",null,"Talking about future predictions, the kundali catered by AstroGyata to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the fre online kunldi, and let us know what you feel about it."),u.a.createElement("h3",null," MANGLIK DOSH"),u.a.createElement("div",{className:"match-bx bg-white"},u.a.createElement(p.a,null,!0===(null===k||void 0===k?void 0:k.is_mars_manglik_cancelled)?u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Is Mars Manglik Cancelled"),u.a.createElement("span",null,"Yes")):null,!0===(null===k||void 0===k?void 0:k.is_present)?u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Is Present"),u.a.createElement("span",null,"Yes")):null,(null===k||void 0===k?void 0:k.manglik_cancel_rule)>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Manglik Cancel Rule"),u.a.createElement("p",null,null===k||void 0===k?void 0:k.manglik_cancel_rule)):null,u.a.createElement("h3",null,"Manglik Report"),u.a.createElement("span",null,null===k||void 0===k?void 0:k.manglik_report),u.a.createElement("h3",null,"Manglik Status"),u.a.createElement("span",null,null===k||void 0===k?void 0:k.manglik_status),u.a.createElement("h3",null,"Percentage Manglik After Cancellation"),u.a.createElement("span",null,null===k||void 0===k?void 0:k.percentage_manglik_after_cancellation),u.a.createElement("h3",null,"Percentage Manglik Present "),u.a.createElement("span",null,null===k||void 0===k?void 0:k.percentage_manglik_present),null==(null===k||void 0===k||null===(e=k.manglik_present_rule)||void 0===e?void 0:e.based_on_aspect)?null:u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Manglik Present Rule"),u.a.createElement("h4",{className:"dosh"},"Based On Aspect"),null===k||void 0===k||null===(t=k.manglik_present_rule)||void 0===t||null===(a=t.based_on_aspect)||void 0===a?void 0:a.map((function(e,t){return u.a.createElement("p",{key:null===e||void 0===e?void 0:e._id},t+1,"-",e)}))),null==(null===k||void 0===k||null===(n=k.manglik_present_rule)||void 0===n?void 0:n.based_on_house)?null:u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",{className:"dosh"},"Based On House"),null===k||void 0===k||null===(l=k.manglik_present_rule)||void 0===l||null===(o=l.based_on_house)||void 0===o?void 0:o.map((function(e,t){return u.a.createElement("p",{key:null===e||void 0===e?void 0:e._id},t+1,"-",e)}))))))))))):u.a.createElement(y.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(s.a,null,u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"MANGLIK DOSH"),u.a.createElement("h3",null,"Get instant & accurate, Janam Kundli"))))))),u.a.createElement(s.a,null,u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"12"},u.a.createElement(d.a,{className:"mb-50 pt-d"},u.a.createElement("h3",null,"MANGLIK DOSH Online - Get Your Detailed Birth Chart with Predictions"),u.a.createElement("p",null,"Looking for your free Kundli from expert astrologers? Then you have come to the right place. The online free kundali available on AstroGyata is a 100% free and authentic free Kundli that has been prepared after consulting more than 50 expert astrologers on board. The free kundli is such that it can give you a glimpse into various aspects of your life such as your career, love life, marriage, business and much more. The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions."),u.a.createElement("p",null,"Talking about future predictions, the kundali catered by AstroGyata to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the fre online kunldi, and let us know what you feel about it."),u.a.createElement("div",{className:"match-bx"},u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"8"},u.a.createElement("h3",null," MANGLIK DOSH"),u.a.createElement(h.a,{onSubmit:this.submitHandler},u.a.createElement("div",{className:"form-m"},u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"2"},u.a.createElement("label",null,"Birth Day"),u.a.createElement(v.a,{className:"form-control",type:"select",name:"day",value:this.state.day,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"0"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"25"),u.a.createElement("option",null,"26"),u.a.createElement("option",null,"27"),u.a.createElement("option",null,"28"),u.a.createElement("option",null,"29"),u.a.createElement("option",null,"30"),u.a.createElement("option",null,"31"))),u.a.createElement(E.a,{md:"2"},u.a.createElement("label",null,"Birth Month"),u.a.createElement(v.a,{className:"form-control",type:"select",name:"month",value:this.state.month,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"))),u.a.createElement(E.a,{md:"2"},u.a.createElement("label",null,"Birth Year"),u.a.createElement(v.a,{className:"form-control",type:"select",name:"year",value:this.state.year,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",{value:"1942"},"1942"),u.a.createElement("option",{value:"1943"},"1943"),u.a.createElement("option",{value:"1944"},"1944"),u.a.createElement("option",{value:"1945"},"1945"),u.a.createElement("option",{value:"1946"},"1946"),u.a.createElement("option",{value:"1947"},"1947"),u.a.createElement("option",{value:"1948"},"1948"),u.a.createElement("option",{value:"1949"},"1949"),u.a.createElement("option",{value:"1950"},"1950"),u.a.createElement("option",{value:"1951"},"1951"),u.a.createElement("option",{value:"1952"},"1952"),u.a.createElement("option",{value:"1953"},"1953"),u.a.createElement("option",{value:"1954"},"1954"),u.a.createElement("option",{value:"1955"},"1955"),u.a.createElement("option",{value:"1956"},"1956"),u.a.createElement("option",{value:"1957"},"1957"),u.a.createElement("option",{value:"1958"},"1958"),u.a.createElement("option",{value:"1959"},"1959"),u.a.createElement("option",{value:"1960"},"1960"),u.a.createElement("option",{value:"1961"},"1961"),u.a.createElement("option",{value:"1962"},"1962"),u.a.createElement("option",{value:"1963"},"1963"),u.a.createElement("option",{value:"1964"},"1964"),u.a.createElement("option",{value:"1965"},"1965"),u.a.createElement("option",{value:"1966"},"1966"),u.a.createElement("option",{value:"1967"},"1967"),u.a.createElement("option",{value:"1968"},"1968"),u.a.createElement("option",{value:"1969"},"1969"),u.a.createElement("option",{value:"1970"},"1970"),u.a.createElement("option",{value:"1971"},"1971"),u.a.createElement("option",{value:"1972"},"1972"),u.a.createElement("option",{value:"1973"},"1973"),u.a.createElement("option",{value:"1974"},"1974"),u.a.createElement("option",{value:"1975"},"1975"),u.a.createElement("option",{value:"1976"},"1976"),u.a.createElement("option",{value:"1977"},"1977"),u.a.createElement("option",{value:"1978"},"1978"),u.a.createElement("option",{value:"1979"},"1979"),u.a.createElement("option",{value:"1980"},"1980"),u.a.createElement("option",{value:"1981"},"1981"),u.a.createElement("option",{value:"1982"},"1982"),u.a.createElement("option",{value:"1983"},"1983"),u.a.createElement("option",{value:"1984"},"1984"),u.a.createElement("option",{value:"1985"},"1985"),u.a.createElement("option",{value:"1986"},"1986"),u.a.createElement("option",{value:"1987"},"1987"),u.a.createElement("option",{value:"1988"},"1988"),u.a.createElement("option",{value:"1989"},"1989"),u.a.createElement("option",{value:"1990"},"1990"),u.a.createElement("option",{value:"1991"},"1991"),u.a.createElement("option",{value:"1992"},"1992"),u.a.createElement("option",{value:"1993"},"1993"),u.a.createElement("option",{value:"1994"},"1994"),u.a.createElement("option",{value:"1995"},"1995"),u.a.createElement("option",{value:"1996"},"1996"),u.a.createElement("option",{value:"1997"},"1997"),u.a.createElement("option",{value:"1998"},"1998"),u.a.createElement("option",{value:"1999"},"1999"),u.a.createElement("option",{value:"2000"},"2000"),u.a.createElement("option",{value:"2001"},"2001"),u.a.createElement("option",{value:"2002"},"2002"),u.a.createElement("option",{value:"2003"},"2003"),u.a.createElement("option",{value:"2004"},"2004"),u.a.createElement("option",{value:"2005"},"2005"),u.a.createElement("option",{value:"2006"},"2006"),u.a.createElement("option",{value:"2007"},"2007"),u.a.createElement("option",{value:"2008"},"2008"),u.a.createElement("option",{value:"2009"},"2009"),u.a.createElement("option",{value:"2010"},"2010"),u.a.createElement("option",{value:"2011"},"2011"),u.a.createElement("option",{value:"2011"},"2012"),u.a.createElement("option",{value:"2011"},"2013"),u.a.createElement("option",{value:"2011"},"2014"),u.a.createElement("option",{value:"2011"},"2015"),u.a.createElement("option",{value:"2011"},"2016"),u.a.createElement("option",{value:"2011"},"2017"),u.a.createElement("option",{value:"2011"},"2018"),u.a.createElement("option",{value:"2011"},"2019"),u.a.createElement("option",{value:"2011"},"2020"),u.a.createElement("option",{value:"2011"},"2021"),u.a.createElement("option",{value:"2011"},"2022"),u.a.createElement("option",{value:"2011"},"2023"),u.a.createElement("option",{value:"2011"},"2024"),u.a.createElement("option",{value:"2011"},"2025"),u.a.createElement("option",{value:"2011"},"2026"),u.a.createElement("option",{value:"2011"},"2021"),u.a.createElement("option",{value:"2011"},"2027"),u.a.createElement("option",{value:"2011"},"2028"),u.a.createElement("option",{value:"2011"},"2029"),u.a.createElement("option",{value:"2011"},"2030"))),u.a.createElement(E.a,{md:"2"},u.a.createElement("label",null,"Birth Hour"),u.a.createElement(v.a,{className:"form-control",type:"select",name:"hour",value:this.state.hour,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"24"))),u.a.createElement(E.a,{md:"2"},u.a.createElement("label",null,"Birth Minute"),u.a.createElement(v.a,{className:"form-control",type:"select",name:"min",value:this.state.min,onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"1"),u.a.createElement("option",null,"2"),u.a.createElement("option",null,"3"),u.a.createElement("option",null,"4"),u.a.createElement("option",null,"5"),u.a.createElement("option",null,"6"),u.a.createElement("option",null,"7"),u.a.createElement("option",null,"8"),u.a.createElement("option",null,"9"),u.a.createElement("option",null,"10"),u.a.createElement("option",null,"11"),u.a.createElement("option",null,"12"),u.a.createElement("option",null,"13"),u.a.createElement("option",null,"14"),u.a.createElement("option",null,"15"),u.a.createElement("option",null,"16"),u.a.createElement("option",null,"17"),u.a.createElement("option",null,"18"),u.a.createElement("option",null,"19"),u.a.createElement("option",null,"20"),u.a.createElement("option",null,"21"),u.a.createElement("option",null,"22"),u.a.createElement("option",null,"23"),u.a.createElement("option",null,"24"),u.a.createElement("option",null,"25"),u.a.createElement("option",null,"26"),u.a.createElement("option",null,"27"),u.a.createElement("option",null,"28"),u.a.createElement("option",null,"29"),u.a.createElement("option",null,"30"),u.a.createElement("option",null,"31"),u.a.createElement("option",null,"32"),u.a.createElement("option",null,"33"),u.a.createElement("option",null,"34"),u.a.createElement("option",null,"35"),u.a.createElement("option",null,"36"),u.a.createElement("option",null,"37"),u.a.createElement("option",null,"38"),u.a.createElement("option",null,"39"),u.a.createElement("option",null,"40"),u.a.createElement("option",null,"41"),u.a.createElement("option",null,"42"),u.a.createElement("option",null,"43"),u.a.createElement("option",null,"44"),u.a.createElement("option",null,"45"),u.a.createElement("option",null,"46"),u.a.createElement("option",null,"47"),u.a.createElement("option",null,"48"),u.a.createElement("option",null,"49"),u.a.createElement("option",null,"50"),u.a.createElement("option",null,"51"),u.a.createElement("option",null,"52"),u.a.createElement("option",null,"53"),u.a.createElement("option",null,"54"),u.a.createElement("option",null,"55"),u.a.createElement("option",null,"56"),u.a.createElement("option",null,"57"),u.a.createElement("option",null,"58"),u.a.createElement("option",null,"59"),u.a.createElement("option",null,"60")))),u.a.createElement(p.a,null,u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"Country"),u.a.createElement(_.a,{options:C.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry,onChange:function(e){f.changeCountry(e)}})),u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"State"),u.a.createElement(_.a,{options:null===x.a||void 0===x.a?void 0:x.a.getStatesOfCountry(null===(r=this.state.selectedCountry)||void 0===r?void 0:r.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState,onChange:function(e){f.setState({selectedState:e})}})),u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"City"),u.a.createElement(_.a,{options:O.a.getCitiesOfState(null===(i=this.state.selectedState)||void 0===i?void 0:i.countryCode,null===(c=this.state.selectedState)||void 0===c?void 0:c.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.submitPlaceHandler,onChange:function(e){f.changeCity(e)}})),u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"Birth Place Latitude"),u.a.createElement(v.a,{className:"form-control",placeholder:"00.00",maxLength:7,type:"text",name:"latitude",value:this.state.latitude,onChange:this.changeHandler})),u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"Birth Place Longitude"),u.a.createElement(v.a,{className:"form-control",placeholder:"00.000",maxLength:7,type:"text",name:"longitude",value:this.state.longitude,onChange:this.changeHandler})),u.a.createElement(E.a,{md:"4"},u.a.createElement("label",null,"Birth Place Time Zone"),u.a.createElement("input",{className:"form-control",type:"text",placeholder:"00.00",maxLength:5,name:"timezone",value:this.state.timezone,onChange:this.changeHandler}))),u.a.createElement(g.a,{className:"btn btn-primary"},"submit")))),u.a.createElement(E.a,{md:"4"},u.a.createElement("h3",null,"Saved Manglik Dosh Matches"),u.a.createElement("div",{className:"form-m"},u.a.createElement(p.a,null,u.a.createElement(E.a,null,u.a.createElement("h4",{className:"mt-3"},"Recent Views"),u.a.createElement("hr",null),u.a.createElement("div",{className:"mtkun-box"},u.a.createElement(m.c,null,u.a.createElement("div",{className:"k-bx"},u.a.createElement("p",null,"R")),u.a.createElement("div",{className:"k-bxx"},u.a.createElement("h5",null,"lorem"),u.a.createElement("p",null,"21/09/2022"),u.a.createElement("p",null,"Indore")),u.a.createElement("div",{className:"k-dlt"},u.a.createElement(m.c,{className:"Tansdel"},u.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))),u.a.createElement("div",{className:"mtkun-box"},u.a.createElement(m.c,null,u.a.createElement("div",{className:"k-bx"},u.a.createElement("p",null,"S")),u.a.createElement("div",{className:"k-bxx"},u.a.createElement("h5",null,"lorem"),u.a.createElement("p",null,"21/09/2022"),u.a.createElement("p",null,"Indore")),u.a.createElement("div",{className:"k-dlt"},u.a.createElement(m.c,{className:"Tansdel"},u.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))))))))))))))}}]),a}(u.a.Component);t.default=M},608:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},647:function(e,t,a){},665:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(202),r=a(20),i=a(0),c=a.n(i),u=a(4),m=a.n(u),s=a(77),p=a.n(s),E=a(55),d=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:E.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,r=e.tag,i=e.innerRef,u=Object(l.a)(e,d),m=Object(E.j)(p()(t,!!o&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},u,{ref:i,className:m}))},t}(i.Component);v.propTypes=h,v.defaultProps={tag:"form"},t.a=v},701:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),r=a.n(o),i=a(4),c=a.n(i),u=a(77),m=a.n(u),s=a(55),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:s.n,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,c=e.inverse,u=e.outline,E=e.tag,d=e.innerRef,h=Object(l.a)(e,p),v=Object(s.j)(m()(t,"card",!!c&&"text-white",!!i&&"card-body",!!o&&(u?"border":"bg")+"-"+o),a);return r.a.createElement(E,Object(n.a)({},h,{className:v,ref:d}))};d.propTypes=E,d.defaultProps={tag:"div"},t.a=d}}]);
//# sourceMappingURL=81.a597758c.chunk.js.map