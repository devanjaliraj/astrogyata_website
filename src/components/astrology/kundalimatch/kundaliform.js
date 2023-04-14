import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Input, Button, Table } from "reactstrap";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import MatchSearch from "../MatchSearch";
import axiosConfig from "../../../axiosConfig";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import swal from "sweetalert";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import girl from "../../../assets/img/girl.png";
import boy from "../../../assets/img/boy-img.png";
class KundaliForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m_day: "",
      m_month: "",
      m_year: "",
      m_hour: "",
      m_min: "",
      m_lat: "",
      m_lon: "",
      m_tzone: "",
      f_day: "",
      f_month: "",
      f_year: "",
      f_hour: "",
      f_min: "",
      f_lat: "",
      f_lon: "",
      f_tzone: "",
      data1: false,

      matchmakingreport: {},
      data: {},
      state: [],
      city: [],
      country: [],
      selectedCountryM: null,
      selectedStateM: null,
      selectedCity: null,
      timezoneM: null,
      latitudeM: "",
      longitudeM: "",
      selectedCountryF: null,
      selectedStateF: null,
      selectedCityF: null,
      timezoneF: null,
      latitudeF: "",
      longitudeF: "",
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleInputChangedM(event) {
    this.setState({
      searchQuery: event.target.value,
    });
    axiosConfig
      .post(`/user/geo_detail`, {
        place: this.state.searchQuery,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.searchQuery);
  }
  changeCountryM = itemM => {
    this.setState({ selectedCountryM: itemM });

    axiosConfig
      .post(`http://13.234.48.35:8000/user/time_zone`, {
        country_codeM: itemM?.timezonems[0].zoneNameM,
      })
      .then(response => {
        this.setState({ timezoneM: response?.data?.data?.timezoneM });
      })
      .catch(error => {
        console.log(error);
      });
  };
  changeCityM = itemM => {
    console.log("itemM", itemM);
    this.setState({
      submitPlaceHandlerM: itemM,

    });

    axiosConfig
      .post(`http://13.234.48.35:8000/user/geo_detail`, {
        place: itemM?.name,
      })
      .then(response => {
        this.setState({
          latitudeM: response?.data?.data?.geonames[0].latitudeM,
          longitudeM: response?.data?.data?.geonames[0].longitudeM,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  submitCountryHandlerM = e => {
    e.preventDefault();
    let payload = {
      country_codeM: this.state.country_codeM,

    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/time_zone`, payload)
      .then(response => {
        this.setState({ data: response.data });
        console.log("country_code", response.data.timezoneM);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  submitPlaceHandlerM = e => {
    e.preventDefault();
    let payload = {
      place: this.state.place,
    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/geo_detail`, payload)
      .then(response => {
        this.setState({ data: response.data });
        console.log("place", response.data.geonames?.place_name);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
    axiosConfig
      .post(`/user/geo_detail`, {
        place: this.state.searchQuery,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.searchQuery);
  }
  changeCountryF = itemF => {
    this.setState({ selectedCountryF: itemF });

    axiosConfig
      .post(`http://13.234.48.35:8000/user/time_zone`, {
        country_codeF: itemF?.timezonefs[0].zoneNameF,
      })
      .then(response => {
        this.setState({ timezoneF: response?.data?.data?.timezoneF });
      })
      .catch(error => {
        console.log(error);
      });
  };
  changeCityF = itemF => {
    console.log("itemF", itemF);
    this.setState({
      submitPlaceHandlerF: itemF,
    });

    axiosConfig
      .post(`http://13.234.48.35:8000/user/geo_detail`, {
        place: itemF?.name,
      })
      .then(response => {
        this.setState({
          latitudeF: response?.data?.data?.geonames[0].latitudeF,
          longitudeF: response?.data?.data?.geonames[0].longitudeF,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  submitCountryHandlerF = e => {
    e.preventDefault();
    let payload = {

      country_codeF: this.state.country_codeF,
    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/time_zone`, payload)
      .then(response => {
        this.setState({ data: response.data });
        console.log("country_code", response.data.timezoneF);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  submitPlaceHandlerF = e => {
    e.preventDefault();
    let payload = {
      place: this.state.place,
    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/geo_detail`, payload)
      .then(response => {
        this.setState({ data: response.data });
        console.log("place", response.data.geonames?.place_name);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  submitHandler = e => {
    e.preventDefault();
    let payload = {
      m_day: this.state.m_day,
      m_month: this.state.m_month,
      m_year: this.state.m_year,
      m_hour: this.state.m_hour,
      m_min: this.state.m_min,
      m_lat: this.state.latitudeM,
      m_lon: this.state.longitudeM,
      m_tzone: this.state.timezoneM,

      f_day: this.state.f_day,
      f_month: this.state.f_month,
      f_year: this.state.f_year,
      f_hour: this.state.f_hour,
      f_min: this.state.f_min,
      f_lat: this.state.latitudeF,
      f_lon: this.state.longitudeF,
      f_tzone: this.state.timezoneF,
    };
    console.log("djfkjhf", payload);
    axiosConfig
      .post(`/user/match_making_report`, payload)
      .then(response => {
        this.setState({ data1: true })
        console.log("matchmakingreport", response.data.data.ashtakoota);
        // this.setState({ matchmakingreport: response.data.data });
        console.log("matchmakingreport", response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        //window.location.reload('/askQuestion')
        // this.props.history.push("/kundalimatchlist");
      })

      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    const { matchmakingreport } = this.state;
    const { data } = this.state;
    console.log("firstResponse", data)
    if (this.state.data1 === true) {
      console.log("first", this.state.data1)


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
                      <h1>Kundli Matching</h1>
                      <h3>Find your right one, through matchmaking</h3>
                      <h3>{matchmakingreport?.ashtakoota?.received_points}</h3>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <Container>
            <div className="mat-main">
              <h3>Horoscope Matching</h3>
              <Row>
                <Col md="4">
                  <div className="mat-box">
                    <h3>Basic Details</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Male</th>
                          <th>Female</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data?.ashtakoota?.received_points}</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col md="4">
                  <div className="mat-box">
                    <h3>Ashtakoot</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description </th>
                          <th>Matching Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col md="4">
                  <div className="mat-box">
                    <h3>Dashakoot</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description </th>
                          <th>Matching Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
              <div className="bx-conclusion">
                <Row>
                  <h2 className="mb-20 mat">Conclusion</h2>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1">
                        <h2>50%</h2>
                      </div>
                      <div className="matbox-2">
                        <h3>Ashtakoot</h3>
                        <p>
                          Ashtakoot Matching between male and female is 21.5
                          points out of 36 points. This is the medium score.
                          Hence, marriage can be approved.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1">
                        <h2>50%</h2>
                      </div>
                      <div className="matbox-2">
                        <h3>Dashakoot</h3>
                        <p>
                          Dashakoot Matching between male and female is 18
                          points out of 36 points. This is the medium score.
                          Hence, marriage can be approved.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="bx-conclusion">
                <Row>
                  <h2 className="mb-20 mat">Manglik Report</h2>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={boy} alt="" />
                      </div>
                      <div className="matbox-2">
                        <h3>John</h3>
                        <p>
                          Manglik Status: <span className="sp-mat">No</span>
                        </p>
                        <p>
                          You are not Manglik, which does not lead to any
                          problems.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={girl} alt="" />
                      </div>
                      <div className="matbox-2">
                        <h3>Juli</h3>
                        <p>
                          Manglik Status: <span className="sp-mat">No</span>
                        </p>
                        <p>
                          You are not Manglik, which does not lead to any
                          problems.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </LayoutOne>
      );
    } else {

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
                      <h1>Kundli Matching</h1>
                      <h3>Find your right one, through matchmaking</h3>
                      <h3>{matchmakingreport?.ashtakoota?.received_points}</h3>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <Container>
            <Row>
              <Col md="12">
                <Card className="mb-50 pt-d">
                  <h3>
                    Free Match Making - Boy and Girl is missing/or provide gender Drop Down
                  </h3>
                  <p>
                    Kundali Match Making is an important consideration to get
                    married. Under Kundli Match (Kundali/ Gunas Milan) Making with
                    the help of comparing birth charts of individuals find
                    compatibility for the purpose of marriage. This involves
                    analyzing the positions of the stars and planets at the time
                    of birth and comparing them between two individuals to see how
                    well their astrological profiles match by looking for specific
                    astrological compatibility factors, such as mutual planetary
                    aspects, the presence of beneficial yogas, and compatibility
                    in various life areas, such as wealth, health, and children.
                  </p>
                  <p>
                    You are planning to get married, and need help in Kundali
                    Match Making, then you are at right place, we can match the
                    Kundali for you. The Kundali Match Making software developed
                    by us in consultation of top astrologers. Kundali Match Making
                    gives you insights; such as the number of guns matching for
                    the girl and the boy, what they are compatible in, what their
                    future would be like if they get married, and so much more.
                    Online software can save you time and get the accurate result
                    without consulting any astrologer. Further, for detail
                    consultation or any doubt, you may connect our astrologer.
                  </p>
                  <div className="match-bx">
                    <form onSubmit={this.submitHandler}>
                      <Row>
                        <Col md="12">
                          <h3>Fill Up Partner's Detail</h3>
                          <Row>
                            <Col md="6">
                              <div className="form-m">
                                <Row>
                                  <Col md="12">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Name"
                                    />
                                  </Col>
                                  <Col md="12">
                                    <label>Gender</label>
                                    <select
                                      type="select"
                                      className="form-control"
                                    // value={this.state.gender}
                                    // onChange={this.changeHandler}
                                    // name="gender"
                                    >
                                      <option selected>select...</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Day</label>
                                    <Input
                                      className="form-control"
                                      name="m_day"
                                      type="select"
                                      value={this.state.m_day}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1</option>
                                      {/* <option>0</option> */}
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                      <option>31</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Month</label>
                                    <Input
                                      className="form-control"
                                      name="m_month"
                                      type="select"
                                      value={this.state.m_month}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Year</label>
                                    <Input
                                      className="form-control"
                                      name="m_year"
                                      type="select"
                                      value={this.state.m_year}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1990</option>
                                      <option value="1942">1942</option>
                                      <option value="1943">1943</option>
                                      <option value="1944">1944</option>
                                      <option value="1945">1945</option>
                                      <option value="1946">1946</option>
                                      <option value="1947">1947</option>
                                      <option value="1948">1948</option>
                                      <option value="1949">1949</option>
                                      <option value="1950">1950</option>
                                      <option value="1951">1951</option>
                                      <option value="1952">1952</option>
                                      <option value="1953">1953</option>
                                      <option value="1954">1954</option>
                                      <option value="1955">1955</option>
                                      <option value="1956">1956</option>
                                      <option value="1957">1957</option>
                                      <option value="1958">1958</option>
                                      <option value="1959">1959</option>
                                      <option value="1960">1960</option>
                                      <option value="1961">1961</option>
                                      <option value="1962">1962</option>
                                      <option value="1963">1963</option>
                                      <option value="1964">1964</option>
                                      <option value="1965">1965</option>
                                      <option value="1966">1966</option>
                                      <option value="1967">1967</option>
                                      <option value="1968">1968</option>
                                      <option value="1969">1969</option>
                                      <option value="1970">1970</option>
                                      <option value="1971">1971</option>
                                      <option value="1972">1972</option>
                                      <option value="1973">1973</option>
                                      <option value="1974">1974</option>
                                      <option value="1975">1975</option>
                                      <option value="1976">1976</option>
                                      <option value="1977">1977</option>
                                      <option value="1978">1978</option>
                                      <option value="1979">1979</option>
                                      <option value="1980">1980</option>
                                      <option value="1981">1981</option>
                                      <option value="1982">1983</option>
                                      <option value="1983">1983</option>
                                      <option value="1984">1984</option>
                                      <option value="1985">1985</option>
                                      <option value="1986">1986</option>
                                      <option value="1987">1987</option>
                                      <option value="1988">1988</option>
                                      <option value="1989">1989</option>
                                      <option value="1990">1990</option>
                                      <option value="1991">1991</option>
                                      <option value="1992">1992</option>
                                      <option value="1993">1993</option>
                                      <option value="1994">1994</option>
                                      <option value="1995">1995</option>
                                      <option value="1996">1996</option>
                                      <option value="1997">1997</option>
                                      <option value="1998">1998</option>
                                      <option value="1999">1999</option>
                                      <option value="2000">2000</option>
                                      <option value="2001">2001</option>
                                      <option value="2002">2002</option>
                                      <option value="2003">2003</option>
                                      <option value="2004">2004</option>
                                      <option value="2005">2005</option>
                                      <option value="2006">2006</option>
                                      <option value="2007">2007</option>
                                      <option value="2008">2008</option>
                                      <option value="2009">2009</option>
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2011">2014</option>
                                      <option value="2011">2015</option>
                                      <option value="2011">2016</option>
                                      <option value="2011">2017</option>
                                      <option value="2011">2018</option>
                                      <option value="2011">2019</option>
                                      <option value="2011">2020</option>
                                      <option value="2011">2021</option>
                                      <option value="2011">2022</option>
                                      <option value="2011">2023</option>
                                      <option value="2011">2024</option>
                                      <option value="2011">2025</option>
                                      <option value="2011">2026</option>
                                      <option value="2011">2021</option>
                                      <option value="2011">2027</option>
                                      <option value="2011">2028</option>
                                      <option value="2011">2029</option>
                                      <option value="2011">2030</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Hour</label>
                                    <select
                                      className="form-control"
                                      name="m_hour"
                                      type="select"
                                      value={this.state.m_hour}
                                      onChange={this.changeHandler}
                                    >
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                    </select>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Minute</label>
                                    <select
                                      className="form-control"
                                      name="m_min"
                                      value={this.state.m_min}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                      <option>31</option>
                                      <option>32</option>
                                      <option>33</option>
                                      <option>34</option>
                                      <option>35</option>
                                      <option>36</option>
                                      <option>37</option>
                                      <option>38</option>
                                      <option>39</option>
                                      <option>40</option>
                                      <option>41</option>
                                      <option>42</option>
                                      <option>43</option>
                                      <option>44</option>
                                      <option>45</option>
                                      <option>46</option>
                                      <option>47</option>
                                      <option>48</option>
                                      <option>49</option>
                                      <option>50</option>
                                      <option>51</option>
                                      <option>52</option>
                                      <option>53</option>
                                      <option>54</option>
                                      <option>55</option>
                                      <option>56</option>
                                      <option>57</option>
                                      <option>58</option>
                                      <option>59</option>
                                      <option>60</option>
                                    </select>
                                  </Col>
                                  <Row>
                                    <Col md="12">
                                      <label>Country</label>
                                      <Select

                                        options={Country.getAllCountries()}
                                        getOptionLabel={options => {
                                          return options["name"];
                                        }}
                                        getOptionValue={options => {
                                          return options["name"];
                                        }}
                                        value={this.state.selectedCountryM}
                                        onChange={itemM => {
                                          this.changeCountryM(itemM);
                                        }}
                                      />
                                    </Col>

                                    <Col md="6">
                                      <label>State</label>
                                      <Select
                                        options={State?.getStatesOfCountry(
                                          this.state.selectedCountryM?.isoCode
                                        )}
                                        getOptionLabel={options => {
                                          return options["name"];
                                        }}
                                        getOptionValue={options => {
                                          return options["name"];
                                        }}
                                        value={this.state.selectedStateM}
                                        onChange={itemM => {
                                          this.setState({ selectedStateM: itemM });
                                        }}
                                      />
                                    </Col>

                                    <Col md="6">
                                      <label>City</label>
                                      <Select
                                        options={City.getCitiesOfState(
                                          this.state.selectedStateM?.countryCode,
                                          this.state.selectedStateM?.isoCode
                                        )}
                                        getOptionLabel={options => {
                                          return options["name"];
                                        }}
                                        getOptionValue={options => {
                                          return options["name"];
                                        }}
                                        value={this.state.submitPlaceHandlerM}
                                        onChange={itemM => {
                                          this.changeCityM(itemM);
                                        }}
                                      />
                                    </Col>

                                    {/* <Col md="4">
                                    <label>Birth Place Latitude</label>
                                    <Input
                                      className="form-control"
                                      placeholder="00.00"
                                      maxLength={7}
                                      type="text"
                                      name="latitudeM"
                                      value={this.state.latitudeM}
                                      onChange={this.changeHandler}
                                    />
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Place Longitude</label>
                                    <Input
                                      className="form-control"
                                      placeholder="00.000"
                                      maxLength={7}
                                      type="text"
                                      name="longitude"
                                      value={this.state.longitude}
                                      onChange={this.changeHandler}
                                    />
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Place Time Zone</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="00.00"
                                      maxLength={5}
                                      name="timezoneM"
                                      value={this.state.timezoneM}
                                      onChange={this.changeHandler}
                                    />
                                  </Col> */}
                                  </Row>

                                  {/* <Col md="12">
                                  <label>Birth Place Latitude</label>
                                  <Input
                                    // type="tel"
                                    maxLength={8}
                                    name="latitude"
                                    placeholder="00.00"
                                    value={this.state.latitude}
                                    onChange={this.changeHandler}
                                  />
                                </Col>
                                <Col md="12">
                                  <label>Birth Place Longitude</label>
                                  <input
                                    name="longitude"
                                    placeholder="00.000"
                                    maxLength={8}
                                    value={this.state.longitude}
                                    onChange={this.changeHandler}
                                  />
                                </Col>
                                <Col md="12">
                                  <label>Birth Place Time Zone</label>
                                  <input
                                    name="timezone"
                                    placeholder="00.00"
                                    maxLength={8}
                                    value={this.state.timezone}
                                    onChange={this.changeHandler}
                                  />
                                </Col> */}
                                </Row>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-m">
                                <Row>
                                  <Col md="6">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Name"
                                    />
                                  </Col>
                                  <Col md="6">
                                    <label>Gender</label>
                                    <select
                                      type="select"
                                      className="form-control"
                                    // value={this.state.gender}
                                    // onChange={this.changeHandler}
                                    // name="gender"
                                    >
                                      <option selected>select...</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Day</label>
                                    <Input
                                      className="form-control"
                                      name="f_day"
                                      type="select"
                                      value={this.state.f_day}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1</option>
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                      <option>31</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Month</label>
                                    <Input
                                      className="form-control"
                                      name="f_month"
                                      type="select"
                                      value={this.state.f_month}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Year</label>
                                    <Input
                                      className="form-control"
                                      name="f_year"
                                      type="select"
                                      value={this.state.f_year}
                                      onChange={this.changeHandler}
                                    >
                                      <option>1990</option>
                                      <option value="1942">1942</option>
                                      <option value="1943">1943</option>
                                      <option value="1944">1944</option>
                                      <option value="1945">1945</option>
                                      <option value="1946">1946</option>
                                      <option value="1947">1947</option>
                                      <option value="1948">1948</option>
                                      <option value="1949">1949</option>
                                      <option value="1950">1950</option>
                                      <option value="1951">1951</option>
                                      <option value="1952">1952</option>
                                      <option value="1953">1953</option>
                                      <option value="1954">1954</option>
                                      <option value="1955">1955</option>
                                      <option value="1956">1956</option>
                                      <option value="1957">1957</option>
                                      <option value="1958">1958</option>
                                      <option value="1959">1959</option>
                                      <option value="1960">1960</option>
                                      <option value="1961">1961</option>
                                      <option value="1962">1962</option>
                                      <option value="1963">1963</option>
                                      <option value="1964">1964</option>
                                      <option value="1965">1965</option>
                                      <option value="1966">1966</option>
                                      <option value="1967">1967</option>
                                      <option value="1968">1968</option>
                                      <option value="1969">1969</option>
                                      <option value="1970">1970</option>
                                      <option value="1971">1971</option>
                                      <option value="1972">1972</option>
                                      <option value="1973">1973</option>
                                      <option value="1974">1974</option>
                                      <option value="1975">1975</option>
                                      <option value="1976">1976</option>
                                      <option value="1977">1977</option>
                                      <option value="1978">1978</option>
                                      <option value="1979">1979</option>
                                      <option value="1980">1980</option>
                                      <option value="1981">1981</option>
                                      <option value="1982">1983</option>
                                      <option value="1983">1983</option>
                                      <option value="1984">1984</option>
                                      <option value="1985">1985</option>
                                      <option value="1986">1986</option>
                                      <option value="1987">1987</option>
                                      <option value="1988">1988</option>
                                      <option value="1989">1989</option>
                                      <option value="1990">1990</option>
                                      <option value="1991">1991</option>
                                      <option value="1992">1992</option>
                                      <option value="1993">1993</option>
                                      <option value="1994">1994</option>
                                      <option value="1995">1995</option>
                                      <option value="1996">1996</option>
                                      <option value="1997">1997</option>
                                      <option value="1998">1998</option>
                                      <option value="1999">1999</option>
                                      <option value="2000">2000</option>
                                      <option value="2001">2001</option>
                                      <option value="2002">2002</option>
                                      <option value="2003">2003</option>
                                      <option value="2004">2004</option>
                                      <option value="2005">2005</option>
                                      <option value="2006">2006</option>
                                      <option value="2007">2007</option>
                                      <option value="2008">2008</option>
                                      <option value="2009">2009</option>
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2011">2014</option>
                                      <option value="2011">2015</option>
                                      <option value="2011">2016</option>
                                      <option value="2011">2017</option>
                                      <option value="2011">2018</option>
                                      <option value="2011">2019</option>
                                      <option value="2011">2020</option>
                                      <option value="2011">2021</option>
                                      <option value="2011">2022</option>
                                      <option value="2011">2023</option>
                                      <option value="2011">2024</option>
                                      <option value="2011">2025</option>
                                      <option value="2011">2026</option>
                                      <option value="2011">2021</option>
                                      <option value="2011">2027</option>
                                      <option value="2011">2028</option>
                                      <option value="2011">2029</option>
                                      <option value="2011">2030</option>
                                    </Input>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Hour</label>
                                    <select
                                      className="form-control"
                                      name="f_hour"
                                      type="select"
                                      value={this.state.f_hour}
                                      onChange={this.changeHandler}
                                    >
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                    </select>
                                  </Col>
                                  <Col md="4">
                                    <label>Birth Minute</label>
                                    <select
                                      className="form-control"
                                      name="f_min"
                                      value={this.state.f_min}
                                      onChange={this.changeHandler}
                                    >
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                      <option>31</option>
                                      <option>32</option>
                                      <option>33</option>
                                      <option>34</option>
                                      <option>35</option>
                                      <option>36</option>
                                      <option>37</option>
                                      <option>38</option>
                                      <option>39</option>
                                      <option>40</option>
                                      <option>41</option>
                                      <option>42</option>
                                      <option>43</option>
                                      <option>44</option>
                                      <option>45</option>
                                      <option>46</option>
                                      <option>47</option>
                                      <option>48</option>
                                      <option>49</option>
                                      <option>50</option>
                                      <option>51</option>
                                      <option>52</option>
                                      <option>53</option>
                                      <option>54</option>
                                      <option>55</option>
                                      <option>56</option>
                                      <option>57</option>
                                      <option>58</option>
                                      <option>59</option>
                                      <option>60</option>
                                    </select>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md="12">
                                    <label>Country</label>
                                    <Select

                                      options={Country.getAllCountries()}
                                      getOptionLabel={options => {
                                        return options["name"];
                                      }}
                                      getOptionValue={options => {
                                        return options["name"];
                                      }}
                                      value={this.state.selectedCountryF}
                                      onChange={itemF => {
                                        this.changeCountryF(itemF);
                                      }}
                                    />
                                  </Col>

                                  <Col md="6">
                                    <label>State</label>
                                    <Select
                                      options={State?.getStatesOfCountry(
                                        this.state.selectedCountryF?.isoCode
                                      )}
                                      getOptionLabel={options => {
                                        return options["name"];
                                      }}
                                      getOptionValue={options => {
                                        return options["name"];
                                      }}
                                      value={this.state.selectedStateF}
                                      onChange={itemF => {
                                        this.setState({ selectedStateF: itemF });
                                      }}
                                    />
                                  </Col>

                                  <Col md="6">
                                    <label>City</label>
                                    <Select
                                      options={City.getCitiesOfState(
                                        this.state.selectedStateF?.countryCode,
                                        this.state.selectedStateF?.isoCode
                                      )}
                                      getOptionLabel={options => {
                                        return options["name"];
                                      }}
                                      getOptionValue={options => {
                                        return options["name"];
                                      }}
                                      value={this.state.submitPlaceHandlerF}
                                      onChange={itemF => {
                                        this.changeCityF(itemF);
                                      }}
                                    />
                                  </Col>

                                  {/* <Col md="4">
                                  <label>Birth Place Latitude</label>
                                  <Input
                                    className="form-control"
                                    placeholder="00.00"
                                    maxLength={7}
                                    type="text"
                                    name="latitudeF"
                                    value={this.state.latitudeF}
                                    onChange={this.changeHandler}
                                  />
                                </Col>
                                <Col md="4">
                                  <label>Birth Place Longitude</label>
                                  <Input
                                    className="form-control"
                                    placeholder="00.000"
                                    maxLength={7}
                                    type="text"
                                    name="longitude"
                                    value={this.state.longitude}
                                    onChange={this.changeHandler}
                                  />
                                </Col>
                                <Col md="4">
                                  <label>Birth Place Time Zone</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="00.00"
                                    maxLength={5}
                                    name="timezoneF"
                                    value={this.state.timezoneF}
                                    onChange={this.changeHandler}
                                  />
                                </Col> */}
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        {/* <Col md="4">
                        <h3>Saved Matches</h3>
                        <div className="form-m">
                          <Row>
                            <Col>
                              <MatchSearch />
                              <h4 className="mt-3">Recent Views</h4>
                              <hr></hr>
                              <div className="mtkun-box">
                                <Link>
                                  <div className="k-bx">
                                    <p>R</p>
                                  </div>
                                  <div className="k-bxx">
                                    <h5>lorem</h5>
                                    <p>21/09/2022</p>
                                    <p>Indore</p>
                                  </div>
                                  <div className="k-dlt">
                                    <Link className="Tansdel">
                                      <i
                                        class="fa fa-trash-o"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                              <div className="mtkun-box">
                                <Link>
                                  <div className="k-bx">
                                    <p>S</p>
                                  </div>
                                  <div className="k-bxx">
                                    <h5>lorem</h5>
                                    <p>21/09/2022</p>
                                    <p>Indore</p>
                                  </div>
                                  <div className="k-dlt">
                                    <Link className="Tansdel">
                                      <i
                                        class="fa fa-trash-o"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col> */}
                      </Row>

                      <Button className="btn btn-primary">Match Horoscope</Button>

                      <Row> </Row>
                    </form>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </LayoutOne>

      );
    }

  }
}

export default KundaliForm;
