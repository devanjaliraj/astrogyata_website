import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";

import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class KalsharpDoshDetail extends React.Component {
    render() {
        return (
            <LayoutOne headerTop="visible">
                <section className="pt-0 pb-0">
                    <div
                        className=""
                        style={{
                            // backgroundColor: '#ffcc01',
                            // width: '100%',
                            // padding: '70px 0px',
                            // backgroundSize: 'cover',
                            float: "left",
                            width: "100%",
                            backgroundColor: "#272727",
                            position: "relative",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            color: "#ffffff",
                            padding: " 50px 0px 50px 0px",
                            backgroundImage: `url(${astrologinbg})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: " no-repeat",
                            textAlign: "center",
                        }}
                    >
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="leftcont text-left">
                                        <h1>KALSHARP DOSH DETAIL </h1>
                                        <p></p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section className="ptb-0">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="scope-1">
                                    <h3>Kalsharp Dosh Detail</h3>
                                    <p>
                                        Kalasarpa Dosha, also known as Kalsharp Dosh, is a condition in Vedic astrology that is believed to occur when all the seven planets in an individual's birth chart are situated between the two lunar nodes, Rahu and Ketu. The term "Kalasarpa" means "serpent of time," and it is believed that this condition can cause various negative effects on an individual's life.
                                    </p>

                                    <p>
                                        According to Vedic astrology, the presence of Kalasarpa Dosha in an individual's birth chart can cause delays and obstacles in various aspects of life, such as career, education, health, marriage, and financial stability. It is also believed to create mental stress, fear, and anxiety in individuals.
                                    </p>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default KalsharpDoshDetail;
