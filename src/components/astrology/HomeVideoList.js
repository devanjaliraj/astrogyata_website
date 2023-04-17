import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import textbottom from "../../assets/img/textbottom.png";

function HomeVideoList() {
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
                <Row>
                    <Swiper {...settings}>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=Isyq2apnaOk"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=jCl_yFqSBtg"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=Xq5im6BrhTw"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=opCDc7ae3GI"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=VAn5Csn4bJY"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=BCNIO-T-j_E"
                                playing
                                className="vdl-l"
                            />
                        </div>
                        {/* <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://youtube.com/watch?v=2RGu_tLeqk4"
                                playing
                                className="vdl-l"
                            />
                        </div> */}
                        <div className="v-bx">
                            <ReactPlayer
                                style={{ position: "relative !important" }}
                                url="https://www.youtube.com/watch?v=M6TdmuIYwAs"
                                playing
                                className="vdl-l"
                            />
                        </div>
                    </Swiper>
                </Row>
            </Container>
        </div>
    );
}

export default HomeVideoList;
