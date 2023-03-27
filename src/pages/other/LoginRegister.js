import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import LayoutOne from "../../layouts/LayoutOne";
import { Label, Input, Form, Button, Row, Col } from "reactstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import swal from "sweetalert";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
      passMsg: "",
      cnfmPassword: "",
      password: "",
      mobileError: ""
    };
  }

  //Image Submit Handler
  onChangeHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  otpHandler = e => {
    e.preventDefault();
    console.log("dddddhh", this.state);
    axios
      .post(`http://13.234.48.35:8000/user/userVryfyotp`, {
        mobile: parseInt(this.state.mobile),
        otp: parseInt(this.state.otp),
      })
      .then(response => {
        console.log("@@@####", response.data);
        // let id = response.data.user;
        if (response.data.status === true) {
          this.setState({ otpMsg: response.data.msg });
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("token", JSON.stringify(response?.data?.token));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response?.data?.data?._id)
          );
          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.data?.mobile)
          );
          if (response.data.msg === "otp verified") {
            swal("otp verified");
            // window.location.replace('/')
            this.props.history.push("/");
          }
        }
      })
      .catch(error => {
        console.log(error);
        //this.setState({ errormsg: error });
      });
  };
  // loginpassHandler = e => {
  //   e.preventDefault();
  //   console.log("dddddddddhh", this.state);

  //   axios
  //     .post(`http://13.234.48.35:8000/user/loginWithPassword`, {
  //       mobile: parseInt(this.state.mobile),
  //       otp: parseInt(this.state.otp),
  //     })
  //     .then(response => {
  //       console.log("@@@####", response.data);
  //       // let id = response.data.user;
  //       if (response.data.status === true) {
  //         this.setState({ otpMsg: response.data.msg });
  //         localStorage.setItem(
  //           "userData",
  //           JSON.stringify(response?.data?.data)
  //         );
  //         localStorage.setItem("token", JSON.stringify(response?.data?.token));
  //         localStorage.setItem(
  //           "user_id",
  //           JSON.stringify(response?.data?.data?._id)
  //         );
  //         localStorage.setItem(
  //           "user_mobile_no",
  //           JSON.stringify(response?.data?.data?.mobile)
  //         );
  //         if (response.data.msg === "otp verified") {
  //           swal("otp verified");
  //           // window.location.replace('/')
  //           this.props.history.push("/");
  //         }
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       console.log(error.response);
  //       // swal("Error!", "User doesn't Exist", "error");
  //     });
  // };
  loginHandler = e => {
    e.preventDefault();
    if (this.state.mobile !== "") {
      let obj = {
        mobile: parseInt(this.state.mobile),
      };
      axios
        .post(`http://13.234.48.35:8000/user/userlogin`, obj)
        .then(response => {
          console.log("@@@####", response.data);
          this.setState({ otpMsg: response.data.msg });
          if (response.data.msg === "otp Send Successfully") {
            localStorage.setItem("mobileNumber", this.state.mobile);
            swal("otp Send Successfully");
            // this.props.history.push('/')
          }
        })
        .catch(error => {
          console.log(error);
          console.log(error.response);
          swal("Error!", "User doesn't Exist", "error");
        });
    } else {
      this.setState({ mobileError: "Please enter mobile number" });
    }

  };
  // otp = true;
  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state.data);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("city", this.state.city);
    data.append("dob", this.state.dob);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);

    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    // this.setState({ otp: false });
    axios
      .post(`http://13.234.48.35:8000/user/usersignup`, data)
      .then(response => {
        console.log(response.data.msg);
        localStorage.setItem("auth-token", response.data.token);
        this.setState({
          // token: response.data.token,
          otpMsg: response.data.otp,
        });
        swal("Success!", " Register Successful Done!", "success");
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error.response);
        swal("Error!", "Something went wrong", "error");
      });
  };
  render() {
    // console.log(this.state.otp);
    return (
      <Fragment>
        <MetaTags>
          <title>Astrogyata</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <LayoutOne headerTop="visible">
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login">
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="register">
                            <h4>Register</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            {this.state.otpMsg === "otp Send Successfully" ? (
                              <div className="login-register-form">
                                <Form onSubmit={this.otpHandler}>
                                  <Input
                                    type="otp"
                                    name="otp"
                                    required
                                    placeholder="Enter OTP"
                                    value={this.state.otp}
                                    onChange={this.changeHandler}
                                  />
                                  <div className="button-box">
                                    <div className="login-toggle-btn">
                                      {/* <input type="checkbox" />
                                      <label className="ml-10">
                                        Remember me
                                      </label> */}
                                      <Link
                                        to={
                                          process.env.PUBLIC_URL + "/password"
                                        }
                                      >
                                        Login with password
                                      </Link>
                                    </div>
                                    <button type="submit">
                                      <span>OTP Verify</span>
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            ) : (
                              <div className="login-register-form">
                                <Form onSubmit={this.loginHandler}>
                                  <Row>
                                    <Col md="12">
                                      <PhoneInput
                                        country={"us"}
                                        value={this.state.mobile}
                                        onChange={mobile =>
                                          this.setState({ mobile })
                                        }
                                        width="100%"
                                      />
                                      {this.state.mobileError !== "" ? <span style={{ color: 'red' }}>{this.state.mobileError}</span> : null}
                                    </Col>
                                  </Row>

                                  {/* <Input
                                    type="number"
                                    name="mobile"
                                    maxLength="12"
                                    required
                                    placeholder="Enter Your Mobile No."
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  /> */}
                                  {/* <Input
                                    type="password"
                                    name="password"
                                    // maxLength="12"
                                    // required
                                    placeholder="Enter Your password"
                                    // value={this.state.mobile}
                                    // onChange={this.changeHandler}
                                  /> */}
                                  <div className="button-box">
                                    {/* <div className="button-box"> */}
                                    <div className="login-toggle-btn">
                                      {/* <input type="checkbox" />
                                      <label className="ml-10">
                                        Remember me
                                      </label> */}
                                      <Link
                                        to={
                                          process.env.PUBLIC_URL +
                                          "/ForgotPassword"
                                        }
                                      >
                                        Forgot Password?
                                      </Link>
                                    </div>
                                    {/* <button type="back">Back</button>
                                      <button type="submit">SendOTP</button>
                                    </div> */}
                                    <div className="login-toggle-btn"></div>
                                    <button type="submit">
                                      <span>Login</span>
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            )}
                          </div>
                        </Tab.Pane>
                        {/* Register the user now */}
                        <Tab.Pane eventKey="register">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <Form
                                className="text-center"
                                onSubmit={this.submitHandler}
                                method="post"
                              >
                                <Row>
                                  <Col md="12">
                                    <Label>User Image</Label>
                                    <Input
                                      type="file"
                                      name="userimg"
                                      onChange={this.onChangeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="text"
                                      name="fullname"
                                      required
                                      placeholder="Enter Your Fullname"
                                      value={this.state.fullname}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="email"
                                      name="email"
                                      required
                                      placeholder="Enter Your Email"
                                      value={this.state.email}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <PhoneInput
                                      country={"us"}
                                      value={this.state.mobile}
                                      onChange={mobile =>
                                        this.setState({ mobile })
                                      }
                                      width="80%"
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="password"
                                      name="password"
                                      maxLength="12"
                                      required
                                      placeholder="Enter Your password"
                                      value={this.state.password}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    {" "}
                                    <Input
                                      type="password"
                                      name="cnfmPassword"
                                      maxLength="12"
                                      required
                                      placeholder="Enter Your Confirm password"
                                      value={this.state.cnfmPassword}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>

                                  <Col md="6">
                                    <Input
                                      type="date"
                                      name="dob"
                                      required
                                      placeholder="Date of birth"
                                      value={this.state.dob}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="time"
                                      name="dob"
                                      required
                                      placeholder="Time of birth "
                                      // value={this.state.dob}
                                      // onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="text"
                                      name="dob"
                                      required
                                      placeholder="Place of birth "
                                      // value={this.state.dob}
                                      // onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="text"
                                      name="Country"
                                      required
                                      placeholder="Enter Country"
                                      // value={this.state.city}
                                      // onChange={this.changeHandler}
                                      className="form-controller"
                                    />{" "}
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="text"
                                      name="city"
                                      required
                                      placeholder="Enter city"
                                      value={this.state.city}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    />{" "}
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="text"
                                      name="state"
                                      required
                                      placeholder="Enter state"
                                      // value={this.state.city}
                                      // onChange={this.changeHandler}
                                      className="form-controller"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <Input
                                      type="select"
                                      name="gender"
                                      placeholder=""
                                      value={this.state.gender}
                                      onChange={this.changeHandler}
                                      className="form-controller"
                                    >
                                      <option>Select Gender</option>
                                      <option>Male</option>
                                      <option>Female</option>
                                    </Input>
                                  </Col>
                                </Row>
                                <div className="button-box">
                                  <Button type="submit">
                                    <span>Register</span>
                                  </Button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                  <>
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <div className="button-box">
                          <div className="login-toggle-btn"></div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}
