import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  Modal,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Form from "react-bootstrap/Form";

class AllAstrologerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astrologerList: [],
      From: "",
      To: "",
      astroid: "",
      userid: "",
      modal: false,
      price_high_to_low: [],
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
      .get("/admin/allAstro")
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });

    axiosConfig
      .get("/user/price_high_to_low")
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            price_high_to_low: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };

  submitHandler = (e, astroid, mobile) => {
    e.preventDefault();
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = astroid;
    let obj = {
      userid: userId,
      astroid: astroId,
      From: mobile, //parseInt(this.state.number)
      To: mobileNo, //parseInt(this.state.number)
    };
    axiosConfig
      .post(`/user/make_call`, obj)

      .then(response => {
        console.log("rhsagdhgshgdjhgj", response.data.data);
      })

      .catch(error => {
        console.log(error);
      });
  };

  filterMethod = name => {
    axiosConfig
      .get(`/user/` + name)
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };

  render() {
    const { astrologerList } = this.state;
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
                    <h1>Talk To Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* <section id="team" class="pb-5"> */}
        <section id="team" className="pb-0">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <form>
                    <ul>
                      {/* <li>
                        <span>
                          <Form.Check type="radio" aria-label="radio 1" />
                        </span>
                        Popularity
                      </li> */}
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                          <Label check>Experience : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                          <Label check>Experience : Low to High</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            // name="radio1"
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                          <Label check>Price : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            // name="radio1"
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                          <Label check>Price : Low to High</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            // name="radio1"
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                          <Label check>Rating : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            // name="radio1"
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                          <Label check> Rating : Low to High</Label>
                        </FormGroup>
                      </li>
                      {/* <li>
                        <span>
                          <Form.Check type="radio" aria-label="radio 7" name="exp_low_to_high" onChange={() => this.filterMethod("exp_low_to_high")}/>
                        </span>
                        Rating : High to Low
                      </li> */}
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row>
                  {astrologerList.length
                    ? astrologerList.map((astrologer, index) => {
                        return (
                          <Col md="4" key={index}>
                            <div className="image-flip">
                              <div className="mainflip flip-0">
                                <div className="frontside">
                                  <Link className="">
                                    <div className="card">
                                      <div className="card-body text-center">
                                        <p>
                                          <img src={astrologer?.img} alt="" />
                                        </p>
                                        <h4 className="card-title">
                                          {astrologer?.fullname}
                                        </h4>
                                        <ul className="mb-3">
                                          <li>
                                            Experience:{" "}
                                            <span>
                                              {astrologer?.exp_in_years}
                                            </span>
                                          </li>
                                          <li>
                                            Call Rate:{" "}
                                            <span>
                                              {astrologer?.callCharge}/
                                              {astrologer?.conrubute_hrs}
                                            </span>
                                          </li>
                                        </ul>
                                        {astrologer.waiting_queue === 0 ? (
                                          <>
                                            <Link
                                              className="btn btn-primary btn-sm sc"
                                              to={
                                                "/astrologerdetail/" +
                                                astrologer._id
                                              }
                                            >
                                              <span
                                                className="sr-btn"
                                                onClick={e =>
                                                  this.submitHandler(
                                                    e,
                                                    astrologer?._id,
                                                    astrologer?.mobile
                                                  )
                                                }
                                              >
                                                <i class="fa fa-phone"> Call</i>
                                              </span>
                                            </Link>
                                          </>
                                        ) : (
                                          <>
                                            <button className="btn btn-denger wr">
                                              <i class="fa fa-phone">Wait</i>
                                            </button>
                                          </>
                                        )}

                                        <br />
                                        <span value={this.state.waiting_queue}>
                                          {" "}
                                          Wait ~ {astrologer.waiting_queue}Min
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    : null}
                </Row>
              </Col>
            </Row>
          </Container>
          <div>
            {/* modal  */}
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
            </Modal>
          </div>
        </section>
      </LayoutOne>
    );
  }
}

export default AllAstrologerList;
