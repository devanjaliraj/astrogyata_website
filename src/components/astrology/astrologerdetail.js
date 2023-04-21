import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import PrettyRating from "pretty-rating-react";
import LayoutOne from "../../layouts/LayoutOne";
import AstroProfileVideo from "./AstroProfileVideo";
import { Container, Row, Col, Button, } from "reactstrap";
import LinearProgress from "@mui/material/LinearProgress";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
  // heart: ['#9b111e', '#a83f39'],
};

class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      To: "",
      Form: "",
      astrid: "",
      userid: "",
      astroId: "",
      astroMobile: "",
      avg_rating: [false],
      allminrechargeList: [],
    };
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount = () => {
    axiosConfig
      .get("/user/all_min_recharge")
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          Exp: response.data.data.Exp,
          msg: response.data.data.msg,
          img: response.data.data.img[0],
          sunday: response.data.data.sunday,
          monday: response.data.data.monday,
          friday: response.data.data.friday,
          astroId: response?.data?.data?._id,
          tuesday: response.data.data.tuesday,
          status: response?.data?.data?.status,
          thursday: response.data.data.thursday,
          saturday: response.data.data.saturday,
          fullname: response.data.data.fullname,
          language: response.data.data.language,
          long_bio: response.data.data.long_bio,
          wednesday: response.data.data.wednesday,
          astroMobile: response?.data?.data?.mobile,
          all_skills: response.data.data.all_skills,
          avg_rating: response.data.data.avg_rating,
          callCharge: response.data.data.callCharge,
          exp_in_years: response.data.data.exp_in_years,
          // availability: response.data.data.availability,

        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const icons = {
      star: {
        complete: farStar,
        half: faStarHalfAlt,
        empty: farStar,
      },
    };
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
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
                    <h1>Astrologer Detail</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="category-home">
            <section className="pt-0">
              <Container>
                <section className="dt-astro">
                  <Row>
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img src={this.state?.img} alt="" className="pic-as" />
                      </div>
                    </Col>
                    <Col md="9">
                      {/* <Rating name="no-value" value={null} /> */}
                      <div className="as-content mt-60">
                        <h3>{this.state.fullname}</h3>
                        <div className="review-rating">
                          <PrettyRating
                            value={this.state.avg_rating}
                            icons={icons.star}
                            setColors={["#d9ad26", "#d9ad26", "#434b4d"]}
                          />
                        </div>
                        <ul>
                          <li>
                            Language:
                            <span>{this.state.language}</span>
                          </li>
                          <li>
                            Specility: <span> {this.state.all_skills}</span>
                          </li>
                          <li>
                            Experience: <span>{this.state.exp_in_years}</span>
                          </li>
                          <li>
                            Call Rate: <span>{this.state.callCharge}</span>
                          </li>
                          <li>
                            <span className="">{this.state.status}</span>{" "}
                          </li>
                        </ul>
                      </div>
                      <Row>
                        <Col md="3" className="mt-30">
                          {/* <Link to="/"> */}
                          <Link to="/UserRequestForm">
                            <Button className="btn-as st" onClick={this.toggle}>
                              <i
                                className="fa fa-commenting"
                                aria-hidden="true"
                              ></i>{" "}
                              Start Chat
                              <small className="sm-text">
                                {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                                {/* {this.state.callCharge} */}
                              </small>
                            </Button>
                          </Link>
                        </Col>
                        <Col md="3" className="mt-30">
                          {/* <Button className="btn-as st" onClick={this.toggle}> */}
                          {/* <Link to="/Call"> */}
                          <Link to="/UserRequestFormCall">
                            <Button
                              className="btn-as st"
                              onClick={this.toggle}
                            // onClick={(e) =>
                            //   this.submitHandler(
                            //     e,
                            //     this.state.astroId,
                            //     this.state.astroMobile
                            //   )
                            // }
                            >
                              <i className="fa fa-phone" aria-hidden="true"></i>
                              Start Call
                              <small className="sm-text">
                                {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                                {/* {this.state.callCharge} */}
                              </small>
                            </Button>
                          </Link>
                        </Col>
                        <Col md="3" className="mt-30">
                          <Link to="/VideoCall">
                            {/* <Link to="/UserRequestFormVideoCall"> */}
                            <Button className="btn-as st" onClick={this.toggle}>
                              <i
                                class="fa fa-video-camera"
                                aria-hidden="true"
                              ></i>{" "}
                              Start Video
                              <small className="sm-text">
                                {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                                {/* {this.state.callCharge} */}
                              </small>
                            </Button>
                          </Link>
                        </Col>
                        <Col md="3" className="mt-30">
                          <Link to="/LiveVideo">
                            <Button className="btn-as st" onClick={this.toggle}>
                              <i
                                class="fa fa-youtube-play"
                                aria-hidden="true"
                              ></i>{" "}
                              Start Live
                              <small className="sm-text">
                                {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                                {/* {this.state.callCharge} */}
                              </small>
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div>
                    <AstroProfileVideo />
                  </div>
                </section>
                <section className="mt-50 mb-30">
                  <div className="description-review-wrapper">
                    <Tab.Container defaultActiveKey="productDescription">
                      <Nav
                        variant="pills"
                        className="description-review-topbar"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="additionalInfo">
                            About Information
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="description-review-bottom">
                        <Tab.Pane eventKey="additionalInfo">
                          <div className="product-anotherinfo-wrapper">
                            <p>{this.state.long_bio}</p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="productReviews">
                          <h3>RATINGS <i class="fa fa-star"></i></h3>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <p></p>
                                </div>
                                <div className="col-md-6">
                                  <LinearProgress
                                    className="m-1 mb-3 "
                                    style={{ color: "#14958f" }}
                                    variant="determinate"
                                    value={70}
                                  />
                                  <LinearProgress
                                    className="m-1 mb-3 "
                                    style={{ color: "#ff" }}
                                    variant="determinate"
                                    value={30}
                                  />
                                  <LinearProgress
                                    className="m-1 mb-3 "
                                    style={{ color: "#14958f" }}
                                    variant="determinate"
                                    value={30}
                                  />
                                  <LinearProgress
                                    className="m-1 mb-3 "
                                    style={{ color: "#14958f" }}
                                    variant="determinate"
                                    value={30}
                                  />
                                  <LinearProgress
                                    className="m-1 mb-3 "
                                    style={{ color: "#14958f" }}
                                    variant="determinate"
                                    value={10}
                                  />
                                </div>
                              </div>
                              <hr />
                              <div className="review-wrapper">
                                <div className="single-review">
                                  *{" "}
                                  <div className="review-img">
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/testimonial/1.jpg"
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className="review-content">
                                    <div className="review-top-wrap">
                                      <div className="review-left">
                                        <div className="review-name">
                                          <h4
                                            style={{
                                              textTransform: "capitalize",
                                              margin: 5,
                                            }}
                                          >
                                            lorem ipsum
                                          </h4>
                                        </div>
                                        <div className="review-rating">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="review-bottom">
                                      <p
                                        style={{
                                          display: "inline",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        Vestibulum ante ipsum primis aucibus
                                        orci luctustrices posuere cubilia Curae
                                        Suspendisse viverra ed viverra. Mauris
                                        ullarper euismod vehicula. Phasellus
                                        quam nisi, congue id nulla.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* avai */}
                            <div className="col-md-6">
                              <div className="avai-box text-center">
                                <h3>Availability</h3>
                                <div className="tab-bxx p-1">
                                  <Tab.Container defaultActiveKey="">
                                    <Nav variant="pills" className="rt_tab">
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_one">
                                          Monday
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_two">
                                          Tuesday
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_three">
                                          Wednesday
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_four">
                                          Thursday
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_five">
                                          Friday
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_six">
                                          Saturday

                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item className="rt_tab">
                                        <Nav.Link eventKey="tab_six">
                                          Sunday
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="description-review-bottom">
                                      <Tab.Pane eventKey="tab_one">
                                        {this.state.monday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_two">
                                        {this.state.tuesday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_three">
                                        {this.state.wednesday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_four">
                                        {this.state.thursday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_five">
                                        {this.state.friday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_six">
                                        {this.state.saturday}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="tab_six">
                                        {this.state.sunday}
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </section>
              </Container>
            </section>
          </div>
        </div>
        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                Minimum balance of 5 minutes (INR 25.0) is required to start
                call with RajnishM
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>
        {/* <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                <Row>
                  {allminrechargeList.length
                    ? allminrechargeList?.map((allminrecharge, index) => {
                        return (
                          <Col>
                            <span className="btn-as st" onClick={this.toggle}>
                              {allminrecharge?.minute}
                            </span>
                          </Col>
                        );
                      })
                    : null}
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      30 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      45 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      1 Hour
                    </Button>
                  </Col>
                </Row>
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>  */}
      </LayoutOne>
    );
  }
}
export default AstrologerDetail;
export function getUserID() {
  const name = JSON.parse(localStorage.getItem("userData"));
  const names = name.fullname;
  return names;
}

// export function getUserID(userid, roomid, userName) {
//   return fetch(
//     `http://13.233.228.168:8000/user/allchatwithuser/638dcc72ef0c127a0c5a0426`
//   ).then((res) => res.json());
// }
