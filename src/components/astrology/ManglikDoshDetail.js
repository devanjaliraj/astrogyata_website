import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class ManglikDoshDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
      hour: "",
      min: "",
      lat: "",
      lon: "",
      tzone: "",
      data: "",
      place: "",
      country_code: "",
      manglik_report: "",
      manglik_status: "",
      percentage_manglik_after_cancellation: "",
      percentage_manglik_present: "",
      dosh: {},
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    this.setState({
      day: id,
      month: id,
      year: id,
      hour: id,
      min: id,
      lat: id,
      lon: id,
      tzone: id,
    });
    let payload = {
      day: id,
      month: id,
      year: id,
      hour: id,
      min: id,
      lat: id,
      lon: id,
      tzone: id,
    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/ManglikDosh`, payload)
      .then(response => {
        console.log("dosh", response.data.data?.manglik_present_rule);
        this.setState({ dosh: response.data.data });
      })

      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  }

  render() {
    const { dosh } = this.state;
    console.log("gdfjsgj", dosh);
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#ffcc01",
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
                    <h1>Daily Horoscope</h1>
                    <h3>{dosh.manglik_status}</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="ptb-0">
          <Container>
            <form onSubmit={this.submitHandler}>
              <Row>
                {/* <Col lg="4">
                                    <div className="scope-st">
                                        <h3>SELECT OTHER SIGN</h3>
                                        <Input className="form-control"
                                            type="select"
                                            name="zodiacName"
                                            placeholder="Enter rashi"
                                            value={this.state.zodiacName}
                                            onChange={this.changeHandler}>
                                            <option value="select">---Select---</option>
                                            <option value="aries">Aries</option>
                                            <option value="taurus">Taurus</option>
                                            <option value="gemini">Gemini</option>
                                            <option value="cancer">Cancer</option>
                                            <option value="leo">Leo</option>
                                            <option value="virgo">Virgo</option>
                                            <option value="libra">Libra</option>
                                            <option value="scorpio">Scorpio</option>
                                            <option value="sagittarius">Sagittarius</option>
                                            <option value="capricorn">Capricorn</option>
                                            <option value="aquarius">Aquarius</option>
                                            <option value="pisces">Pisces</option>
                                        </Input>
                                        <Button className="btn btn-warning">submit</Button>
                                    </div>
                                </Col> */}
                <Col lg="12">
                  <div className="scope-1">
                    <h3>Rashi Name</h3>
                    <p>{dosh.percentage_manglik_after_cancellation}</p>

                    <h3>personal life</h3>
                    <p>{dosh?.manglik_present_rule?.based_on_aspect}</p>

                    {/* <h3>Profession</h3>
                    <p>{manglikDosh?.prediction?.profession}</p>

                    <h3>Health</h3>
                    <p>{manglikDosh?.prediction?.health}</p>

                    <h3>Travel</h3>
                    <p>{manglikDosh?.prediction?.travel}</p>

                    <h3>Luck</h3>
                    <p>{manglikDosh?.prediction?.luck}</p>

                    <h3>Emotions</h3>
                    <p>{manglikDosh?.prediction?.emotions}</p> */}
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default ManglikDoshDetail;
