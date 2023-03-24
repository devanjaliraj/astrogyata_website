import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg"

import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axiosConfig from "../../axiosConfig";
class WalletMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      planList: [],
      data: {},
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount = () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    console.log("first", user_id);
    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then((response) => {
        console.log("sjdfjdfg", response.data.data);
        this.setState({
          amount: response.data.data.amount,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/user/active_plans")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ planList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.data);
      });
  };

  render() {
    const { planList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#FFD59E",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
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
                    <h1>Add Money to Wallet</h1>
                    <h3>
                      Available balance : <span>{this.state.amount}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              <Col xl="3" lg="3" md="3" sm="6" xs="6">
                <Link to="/walletaddform">
                  <div className="promoBox success-box info-ribbon">
                    <aside>
                      <p>100% extra</p>
                    </aside>
                    <h4>Amount</h4>
                    <p></p>
                  </div>
                </Link>
              </Col>
              {planList.length
                ? planList.map((plan, index) => {
                  return (
                    <Col xl="3" lg="3" md="3" sm="6" xs="6" key={index}>
                      <Link to="/paymentdetail">
                        <div className="promoBox success-box info-ribbon">
                          <aside>
                            <p>{plan.title}</p>
                          </aside>
                          <h4>INR {plan.amount}</h4>
                        </div>
                      </Link>
                    </Col>
                  );
                })
                : null}

              {/*    <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 200</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col> */}
              {/* <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 300</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 500</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 1000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 2000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 100</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 3000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 4000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col> */}

              {/* <Col lg="12">
                             <div className="w-offer">
                                 <Button onClick={this.toggle} >
                                     <i class="fa fa-percent" aria-hidden="true"></i>

                                     apply voucher code

                                     <i class="fa fa-angle-right" aria-hidden="true"></i>

                                 </Button>
                             </div>
                         </Col> */}
            </Row>
          </Container>
        </section>

        {/* modal for recharge*/}

        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Apply Voucher Code</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1 wr-t">
              <form>
                <Col md="12">
                  <input type="text" placeholder="Enter Your Voucher  Code" />
                </Col>
                <Button className="btn btn-success">Submit</Button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}

export default WalletMoney;
