import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class Numerology extends React.Component {
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
                                        <h1>Numerology</h1>
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
                                    <h3>Numerology</h3>
                                    <p>

                                        Under numerology assigns symbolic meanings to numbers and their combinations. It is based on the idea that each number has a unique vibration that can influence a person's life, personality, and destiny. Numerologists use a person's birth date, name, or other numerical values associated with them to calculate and interpret their life number and number of destiny and other significant numbers. They then use this information to provide insights into a person's character traits, strengths, weaknesses, and potential life path. Numerology is often used in conjunction with other practices, such as astrology and tarot.
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
export default Numerology;
