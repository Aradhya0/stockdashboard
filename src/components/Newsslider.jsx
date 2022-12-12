import React, { Component } from "react";
import "../newsslider.css";
// import icon from '../assets/images/news.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Paper, Button } from '@mui/material'
// import Carousel from 'react-material-ui-carousel'




// const Newsslider = ({news}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         adaptiveHeight: true
//       };
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
  <div>
        <h1>Breaking News</h1>
        <Slider {...settings}>
          <div><h2>Lorem Ipsum is a god</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
          <div><h2>Lorem Ipsum is a god</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
          <div><h2>Lorem Ipsum is a god</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
          <div><h2>Lorem Ipsum is a godajdisdfjisdjisfji</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
          <div><h2>Lorem Ipsum is a god</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
          <div><h2>Lorem Ipsum is a god</h2>
            <h3>This man is an absolute legend. I can't be bothered to listen to my tutor when 
         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
         I'm speaking on behalf of allthe CS students hereWe thank you!</h3>
          </div>
        </Slider>
      </div> 
      
// {<div className="news">
//     <div className="news-container">
//         <img src={icon} alt="icon"></img>
//     <div className="newstext-container">
//         <h1>Breaking News</h1>
//         <br></br>
//         <h2>This man is an absolute legend. I can't be bothered to listen to my tutor when 
//         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
//          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
//          I'm speaking on behalf of allthe CS students hereWe thank you!</h2>
//     </div>
//     </div>

   
//     <div className="news-container">
//     <div className="image-container">
//         <img src={icon} alt="icon"></img>
//     </div>
//     <div className="newstext-container">
//         <h1>Breaking News</h1>
//         <br></br>
//         <h2>This man is an absolute legend. I can't be bothered to listen to my tutor when 
//         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
//          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
//          I'm speaking on behalf of allthe CS students hereWe thank you!</h2>
//     </div>
//     </div>
//     <div className="news-container">
//     <div className="image-container">
//         <img src={icon} alt="icon"></img>
//     </div>
//     <div className="newstext-container">
//         <h1>Breaking News</h1>
//         <br></br>
//         <h2>This man is an absolute legend. I can't be bothered to listen to my tutor when 
//         I can do a simple youtube search and be done with the current topic in less than 30 minutes.
//          Thank you for your contribution to our CS society, and I'm looking forward to learn from you more things. 
//          I'm speaking on behalf of allthe CS students hereWe thank you!</h2>
//     </div>
//     </div>
// </div>   

    )
// };

// export default Newsslider;
    }
}