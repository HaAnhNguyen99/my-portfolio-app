import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoCarousel = ({ skills }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
  };
  console.log(typeof skills);

  return (
    <div className="w-full mt-20 mx-auto">
      <Slider {...settings}>
        {skills?.map((skill) => (
          <div key={skill.id}>
            <img src={skill.img.url} alt={skill.skill_name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
