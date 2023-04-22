import React from "react";
import Swiper from "react-id-swiper";
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import textbottom from "../../assets/img/textbottom.png";

import axiosConfig from "../../axiosConfig";

class HomeVideoList extends React.Component {
    // constructor(props) {
    //     super(props);
    state = {
        youtubeList: [],
    };

    componentDidMount() {
        axiosConfig
            .get(`/admin/video_list`)
            .then((res) => {
                console.log(res);
                this.setState({ productList: res.data.data });
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
        // const [data, setData] = useState([]);
        // useEffect(() => {
        //     async function fetchData() {
        //         const response = await fetch('/admin/video_list');
        //         const json = await response.json();
        //         setData(json);
        //     }
        //     fetchData();
        // }, []);
        return (

            <div className="mt-20">
                <Container>
                    <div className="heading">
                        <h2>Watch Astrologers Video</h2>
                        <img src={textbottom} alt="" />
                    </div>

                    <Row>

                        <Swiper {...settings}>
                            <div>   {this.state.youtubeList.length
                                ? youtubeList.map((data, index) => {
                                    return (
                                        <div className="v-bx" >
                                            {/* <iframe
                                                allowfullscreen="true"
                                                width="100%"
                                                height="280px"
                                                style={{
                                                    borderRadius: "12px",
                                                }}
                                                src={`https://www.youtube.com/embed/${data?.youtube_link?.split("=")[1]
                                                    }`}
                                            ></iframe> */}
                                            <ReactPlayer
                                                style={{ position: "relative !important" }}
                                                // url={item.youtube_link}
                                                url={`https://www.youtube.com/embed/${data.youtube_link[0]
                                                    }`}
                                                playing
                                                className="vdl-l"
                                            />

                                        </div>);
                                })
                                : null}</div>




                        </Swiper>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default HomeVideoList;
