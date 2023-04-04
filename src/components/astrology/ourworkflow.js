import React from "react"
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import "../../assets/scss/workflow.css"
// import chatimg from "../../assets/img/icon-img/chaticon.png";
// import callimg from "../../assets/img/icon-img/callicon.png";
// import videoimg from "../../assets/img/icon-img/video.png";


class OurWorkFlow extends React.Component {


    render() {

        return (
            <div className="col-lg-12 col-md-12 mb-30">
                <div className="category-home">
                    <section className="stt-2">
                        <Container>

                            <div className="heading">
                                <h2>Connect to Astrologers</h2>
                                <img src={textbottom} alt="" />
                            </div>
                            <Row>
                                <Col md="4">
                                    <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
                                        <Row>
                                            <Col md="5">
                                                <div className="process-step">
                                                    <i class="fa fa-commenting" aria-hidden="true"></i>
                                                    {/* <img src={chatimg} alt="" className="hm-img" /> */}
                                                </div>
                                            </Col>
                                            <Col md="7">
                                                <h5 className="bt-txt">Chat with Astrologer</h5>
                                                {/* <p><small>You can start a live chat with the astrologer of your choice using chat now functionality. </small></p> */}
                                            </Col>
                                            {/* <div class="process-line-l"></div> */}
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
                                        <Row>
                                            <Col md="5">
                                                <div className="process-step">
                                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                                    {/* <img src={callimg} alt="" className="hm-img" /> */}
                                                </div>
                                            </Col>
                                            <Col md="7">
                                                <h5 className="bt-txt">Talk to Astrologer</h5>
                                                {/* <p><small>You can start a live talk with the astrologer of your choice using talk now functionality. </small></p> */}
                                            </Col>
                                            {/* <div class="process-line-l"></div> */}
                                        </Row>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
                                        <Row>
                                            <Col md="5">
                                                <div className="process-step">
                                                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                                                    {/* <img src={videoimg} alt="" className="hm-img" /> */}
                                                </div>
                                            </Col>
                                            <Col md="7">
                                                <h5 className="bt-txt">Live Astrologer</h5>
                                                {/* <p><small>In a new way to interact with astrologers. where you can talk to astrologers via live sessions. </small></p> */}
                                            </Col>
                                            {/* <div class="process-line-l"></div> */}
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        );
    }
}


export default OurWorkFlow;
