import React from "react";
import Swiper from "react-id-swiper";
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import textbottom from "../../assets/img/textbottom.png";

import axiosConfig from "../../axiosConfig";

class HomeVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeList: [],
    };
  }
  componentDidMount() {
    axiosConfig.get(`/admin/video_list`).then(res => {
      console.log(res);
      this.setState({ youtubeList: res.data.data });
    });
  }

  render() {
    const { youtubeList } = this.state;
    const settings = {
      loop: true,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
      // watchSlidesVisibility: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      renderPrevButton: () => (
        <button className="swiper-button-prev ht-swiper-button-nav gt-1">
          <i className="pe-7s-angle-left" />
        </button>
      ),
      renderNextButton: () => (
        <button className="swiper-button-next ht-swiper-button-nav gt-2">
          <i className="pe-7s-angle-right" />
        </button>
      ),
    };

    return (
      <div className="mt-20">
        <Container>
          <div className="heading">
            <h2>Watch Astrologers Video</h2>
            <img src={textbottom} alt="" />
          </div>

          <Col>
            {/* {this.state.youtubeList?.map(data => (
              <div key={data?._id} className="v-bx">
                <iframe
                  style={{ position: "relative !important" }}
                  key={data?._id}
                  className="vdl-l"
                  src={`https://www.youtube.com/embed/${data?.youtube_link}`}
                ></iframe>
              </div>
            ))} */}
            <Swiper {...settings}>
              {this.state.youtubeList
                ? youtubeList.map(data => {
                    return (
                      <div key={data?._id} className="v-bx">
                        <ReactPlayer
                          style={{ position: "relative !important" }}
                          url={`https://www.youtube.com/embed/${data.youtube_link}`}
                          playing
                          className="vdl-l"
                        />
                      </div>
                    );
                  })
                : null}
            </Swiper>
          </Col>
        </Container>
      </div>
    );
  }
}

export default HomeVideoList;

// import PropTypes from "prop-types";
// import Swiper from "react-id-swiper";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "reactstrap";
// import astro3 from "../../assets/img/team/astro3.jpg";
// import ReactPlayer from "react-player";
// import textbottom from "../../assets/img/textbottom.png";
// import axiosConfig from "../../axiosConfig";

// const HomeVideoList = ({ data, sliderClass, HomeVideoList }) => {
//   const [userId, setUserId] = useState("");
//   const [bestAstrology, setBestAstrology] = useState(data);
//   const [youtubelist, setyoutubelist] = useState([]);

//   // useEffect(() => {
//   //   var user_id = localStorage.getItem("user_id");
//   //   setUserId(user_id);
//   // });
//   const youtubedata = () => {
//     axiosConfig
//       .get(`/admin/video_list`)
//       .then(res => {
//         setyoutubelist(res?.data?.data);
//         console.log(res.data.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
//   const settings = {
//     loop: true,
//     slidesPerView: 4,
//     grabCursor: true,
//     spaceBetween: 10,
//     breakpoints: {
//       1024: {
//         slidesPerView: 4,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       640: {
//         slidesPerView: 2,
//       },
//       320: {
//         slidesPerView: 1,
//       },
//     },
//     // watchSlidesVisibility: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     renderPrevButton: () => (
//       <button className="swiper-button-prev ht-swiper-button-nav gt-1">
//         <i className="pe-7s-angle-left" />
//       </button>
//     ),
//     renderNextButton: () => (
//       <button className="swiper-button-next ht-swiper-button-nav gt-2">
//         <i className="pe-7s-angle-right" />
//       </button>
//     ),
//   };

//   useEffect(() => {
//     youtubedata();
//     setBestAstrology(data);
//   }, [data]);

//   return (
//     <div className="mt-20 mb-50">
//       <Container>
//         <div className="heading">
//           <h2>Watch Astrologers Video</h2>
//           <img src={textbottom} alt="" />
//         </div>

//         <Row>
//           <Swiper {...settings}>
//             {youtubelist?.map(data => (
//               <div key={data?._id} className="v-bx">
//                 <iframe
//                   style={{ position: "relative !important" }}
//                   key={data?._id}
//                   className="vdl-l"
//                   src={`https://www.youtube.com/embed/${data?.youtube_link}`}
//                 ></iframe>
//               </div>
//             ))}
//           </Swiper>
//         </Row>
//       </Container>
//       <hr></hr>
//     </div>
//   );
// };

// HomeVideoList.propTypes = {
//   data: PropTypes.object,
//   sliderClass: PropTypes.string,
// };

// export default HomeVideoList;
