import './Work.media.less';
import './Work.less';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useWindowSize from '../../../hooks/useWindowSize';

export default function Work({ experience }) {
  useEffect(() => {
    Aos.init();
  }, []);

  const { width } = useWindowSize();
  return (
    <section className="work min-h-screen mt-10  text-white">
      <h3 className="text-center text-2xl font-bold mb-10 text-black ">Experience</h3>
      {experience.map((item) => (
        <div
          className="card-box"
          key={item.documentId}
          data-aos={width > 768 ? 'fade-left' : ''}
          data-aos-anchor-placement={width > 768 ? 'top-bottom' : ''}>
          <div className="card-container transform border-gray-500 hover:scale-105 transition-transform cursor-pointer">
            <div className="card-container__img-box">
              <div
                className="card-container__img-box-img bg-cover bg-center rounded-2xl overflow-hidden lg:min-w-[500px] lg:min-h-[350px] min-h-80"
                style={{ backgroundImage: `url(${item.img.url})` }}></div>
              <div className="card-container__img-box-overlay">
                <p className="card-container__img-box-overlay-text">
                  <p className="text-lg font-bold">Role: {item.position}</p>
                  <p className="text-sm font-light">Duration: {item.duration}</p>
                </p>
              </div>
            </div>
            <div className="card-container__info">
              <h3 className="card-title text-black">{item.company}</h3>
              <p className="card-description text-black text-sm !leading-[30px] md:text-base">
                <BlocksRenderer content={item.description} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
