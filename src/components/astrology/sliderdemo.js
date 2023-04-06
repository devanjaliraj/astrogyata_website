import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axiosConfig from "../../axiosConfig";
const SliderDemo = ({ data, sliderClass, sliderdemoClass }) => {
  const [userId, setUserId] = useState("");
  const [bestAstrology, setBestAstrology] = useState(data);

  const handleCalltogyta = data => {
    console.log(data);

    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));

    let obj = {
      userid: userId,
      astroid: data._id,
      From: data.mobile, //astrologer no
      To: mobileNo, //parseInt(this.state.number) user no
    };
    axiosConfig
      .post(`/user/make_call`, obj)

      .then(response => {
        console.log(response);
      })

      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    setBestAstrology(data);
  }, [data]);

  return (
    <div
      className={`${sliderdemoClass ? sliderdemoClass : " slider-demo"
        } text-center ${sliderClass ? sliderClass : ""} st-hit`}
    >
      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <Link to={"/astrologerdetail/" + data._id}>
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img src={data?.img} alt="" />
                  </p>
                  <h4 className="card-title">{data?.fullname}</h4>
                  <ul className="mb-3">
                    {/* <li>
                      Specility: <span>{data?.all_skills}</span>
                    </li> */}
                    {/* <li>
                      Language: <span>{data?.language}</span>
                    </li> */}
                    <li>
                      Experience: <span>{data?.exp_in_years}</span>
                    </li>
                    <li>
                      Call Rate:{" "}
                      <span>
                        {data?.callCharge}/{data?.conrubute_hrs}
                      </span>
                    </li>
                  </ul>
                  <Link className="btn btn-primary btn-sm st-d">
                    {data?.status}
                  </Link>
                  <Link
                    onClick={() => handleCalltogyta(data)}
                    className="btn btn-primary btn-sm"
                  >
                    <i class="fa fa-phone"></i> Call Now
                    <small>
                      {/* / 20{" "}
                                      <i class="fa fa-inr" aria-hidden="true">
                                        {data.conrubute_hrs}
                                      </i>{" "}
                                      per Hour */}
                    </small>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderDemo.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default SliderDemo;
