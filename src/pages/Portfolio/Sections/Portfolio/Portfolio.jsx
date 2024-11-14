import default_pj_preview_img from '../../../../assets/imgs/default-pj-img.png';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useEffect, useState } from 'react';
import { BiCodeAlt, BiMobile, BiCloud } from 'react-icons/bi';
import { getProjects, getCategories } from '../../../../libs/api/api';
import Aos from 'aos';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.box', {
    duration: 3,
    rotation: 360,
    x: 400,
    ease: 'none',

    scrollTrigger: {
      trigger: '.flex',
      markers: false,
      scrub: 1,
      start: 'top center',
    },
  });

  useEffect(() => {
    async function getData() {
      const project_data = await getProjects();
      setProjects(project_data);

      const categories_data = await getCategories();
      setActiveFilter(categories_data);
    }

    getData();
    Aos.init();
  }, []);

  return (
    <section id="portfolio" className="py-16 border-t-2 border-black border-opacity-40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="box green"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform border-gray-500 hover:scale-105 transition-transform"
                data-aos="fade-down"
                data-aos-offset="1000px"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom">
                <img
                  src={project.pj_preview_img ? project.pj_preview_img.url : default_pj_preview_img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <BlocksRenderer content={project.desc} />
                  </p>
                  <div className="categories mb-3 flex max-w-full flex-wrap gap-2">
                    {project.categories.map((category) => {
                      return (
                        <p
                          className="text-[#047db6] bg-[#a3e9fe] px-2 py-1 rounded-[20px] text-sm text-center "
                          key={category.id}>
                          {category.category_name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    {project.live_link !== null && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        className="text-[#C6E7FF] hover:text-[#FFDDAE]">
                        Live Demo
                      </a>
                    )}
                    {project.repo_link !== 'null' && (
                      <a
                        href={project.repo_link}
                        target="_blank"
                        className="text-[#C6E7FF] hover:text-[#FFDDAE]">
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
