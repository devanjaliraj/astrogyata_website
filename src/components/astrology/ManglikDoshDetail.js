import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";

import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class ManglikDoshDetail extends React.Component {
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
                    <h1>MANGLIK DOSH DETAIL </h1>
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
                  <h3>Manglik Dosh Detail</h3>
                  <p>
                    In Vedic astrology Manglik Dosh is to describe a specific astrological condition that is believed to affect the marriage and relationships of an individual. In this condition, the planet Mars is placed in certain houses of a person's birth chart, which is believed to cause negative effects on their marital life.
                  </p>

                  <p>
                    According to Vedic astrology, if Mars is placed in the 1st, 4th, 7th, 8th, or 12th house of a person's birth chart, it is said to cause Manglik Dosh. It is believed that the presence of this condition in a person's birth chart may cause delays or obstacles in their marriage, as well as problems in their married life.
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
export default ManglikDoshDetail;
