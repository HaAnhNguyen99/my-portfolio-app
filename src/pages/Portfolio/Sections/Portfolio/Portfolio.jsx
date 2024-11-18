import './Portfolio.less';
import default_pj_preview_img from '../../../../assets/imgs/default-pj-img.png';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getProjects } from '../../../../libs/api/api';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Loading from '../../../components/Loading';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const containerRef = useRef(null);
  const listRefs = useRef([]);
  const listChildrenRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  projects &&
    setTimeout(() => {
      listRefs.current.map((el, index) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            xPercent: 100,
            opacity: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            xPercent: gsap.utils.wrap([0, 0]),
            opacity: 1,
            ease: 'power2.in',
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: 'center-=200 center+=200',
              toggleActions: 'play pause resume reverse',
              markers: 'true',
            },
          }
        );

        gsap.fromTo(
          listChildrenRefs.current[index],
          {
            autoAlpha: 0,
            xPercent: -100,
            opacity: 0,
          },
          {
            duration: 1,
            autoAlpha: 1,
            xPercent: -50,
            opacity: 1,
            ease: 'power2.in',
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: 'center-=200 center+=200',
              toggleActions: 'play pause resume reverse',
              markers: 'true',
            },
          },
          '+=1'
        );
      });

      // setTimeout(() => {
      //   listChildrenRefs.current.map((el, index) => {
      //     gsap.fromTo(
      //       el,
      //       {
      //         autoAlpha: 0,
      //         xPercent: -100,
      //         opacity: 0,
      //       },
      //       {
      //         duration: 1,
      //         autoAlpha: 1,
      //         xPercent: gsap.utils.wrap([-100, 100]),
      //         opacity: 1,
      //         ease: 'power1.inOut',
      //         scrollTrigger: {
      //           id: `section-${index + 1}`,
      //           trigger: el,
      //           start: 'center-=200 center+=200',
      //           toggleActions: 'play pause resume reverse',
      //           markers: 'true',
      //         },
      //       }
      //     );
      //   });
      // }, 500);
    }, 1000);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-16 border-t-2 border-black border-opacity-40 font-IBM min-h-svh">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="block md:flex md:flex-wrap flex-col md:flex-row gap-8 relative w-full">
            {projects?.map((project, index) => {
              return (
                <div
                  key={project.id}
                  ref={(el) => (listRefs.current[index] = el)}
                  className="portfolio-container hover:scale-105 transition-transform relative flex flex-col">
                  <img
                    className="w-full max-h-[80vh] object-cover blur-lg hidden md:block"
                    src={
                      project.pj_preview_img ? project.pj_preview_img.url : default_pj_preview_img
                    }
                    alt={project.title}
                    loading="lazy"
                  />

                  <div
                    ref={(el) => (listChildrenRefs.current[index] = el)}
                    className="portfolio-container__content  text-black z-10">
                    <div className="portfolio-container__content__detail-box">
                      <div className="detail-box__img w-full object-cover opacity-70">
                        <img
                          className="w-full max-h-[80vh] object-cover "
                          src={
                            project.pj_preview_img
                              ? project.pj_preview_img.url
                              : default_pj_preview_img
                          }
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="detail-box__content">
                        <h3 className="detail-box__content__title text-2xl font-bold text-center">
                          {project.title}
                        </h3>
                        <div className="detail-box__content__desc text-sm">
                          <BlocksRenderer content={project.desc} />
                        </div>

                        <div className="categories mt-3 flex max-w-full flex-wrap gap-2">
                          {project.categories.map((category) => {
                            return (
                              <p
                                className="text-[#a8bfc4] bg-[#f2f2f2] px-2 py-1 rounded-[20px] text-sm text-center "
                                key={category.id}>
                                {category.category_name}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
