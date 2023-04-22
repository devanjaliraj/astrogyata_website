import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,

} from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";

export default function AstroProfileVideo() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>



            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>
            <Col md="3" className="videoimg">
                <div className="product-grid8">
                    <div class="product-image8">
                        {/* <Link to="/poojadetail"> */}
                        <img src={astro3} alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </Col>




        </Slider>
    );
}


// import React from "react";
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/scss/image-gallery.scss";

// class AstroProfileVideo extends React.Component {
//     render() {

//         const images = [
//             {
//                 original: 'https://www.youtube.com/watch?v=w30S6J25ZYo&list=RDw30S6J25ZYo&start_radio=1',
//                 thumbnail: 'https://i.redd.it/ox5jy15956r51.jpg',
//             },
//             {
//                 original: 'https://i.redd.it/ox5jy15956r51.jpg',
//                 thumbnail: 'https://www.youtube.com/watch?v=w30S6J25ZYo&list=RDw30S6J25ZYo&start_radio=1'
//             },
//             {
//                 original: 'https://i.redd.it/ox5jy15956r51.jpg',
//                 thumbnail: 'https://i.redd.it/ox5jy15956r51.jpg'
//             }
//         ]

//         return (
//             <ImageGallery items={images} />
//         );
//     }

// } export default AstroProfileVideo;