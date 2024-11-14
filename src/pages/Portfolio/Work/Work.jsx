import './Work.media.less';
import './Work.less';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Work({ experience }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="work min-h-screen mt-10 font-IBM text-white">
      <h3 className="text-center text-2xl font-bold mb-10 text-black ">Experience</h3>
      {experience.map((item) => (
        <div
          className="card-box"
          key={item.documentId}
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom">
          <div className="card-container transform border-gray-500 hover:scale-105 transition-transform cursor-pointer">
            <div className="card-container__img-box">
              <img
                className="card-container__img"
                src={item.images.url}
                alt="company image"
                loading="lazy"
              />
            </div>
            <div className="card-container__info  ">
              <h3 className="card-title">{item.company}</h3>
              <p className="card-position">{item.position}</p>
              <p className="card-duration">{item.duration}</p>
              <p className="card-description">
                <BlocksRenderer content={item.description} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
