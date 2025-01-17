import './Portfolio.media.less';
import './Portfolio.less';
import default_pj_preview_img from '../../../../assets/imgs/default-pj-img.png';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useLayoutEffect, useState } from 'react';
import { getProjects } from '../../../../libs/api/api';
import Loading from '../../../components/Loading';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
        console.log(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-16 border-t-2 border-black border-opacity-40 font-IBM min-h-svh">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="block md:flex md:flex-wrap flex-col md:flex-row gap-8 relative w-full">
            {projects?.map((project) => {
              return (
                <div key={project.id} className="portfolio-container hover:scale-105 transition-transform relative flex flex-col">
                  <img
                    className="w-full max-h-[80vh] object-cover blur-lg hidden md:block"
                    src={project.pj_preview_img ?? project.pj_preview_img.url}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="portfolio-container__content  text-black z-10">
                    <div className="portfolio-container__content__detail-box">
                      <div className="detail-box__img w-full object-cover opacity-70">
                        <img
                          className="w-full max-h-[80vh] object-cover "
                          src={project.pj_preview_img ? project.pj_preview_img.url : default_pj_preview_img}
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="detail-box__content">
                        <h3 className="detail-box__content__title font-bold text-center">{project.title}</h3>
                        <div className=" detail-box__content__desc text-sm">
                          <BlocksRenderer content={project.desc} />
                        </div>

                        <div className="categories mt-3 flex max-w-full flex-wrap gap-2">
                          {project.categories.map((category) => {
                            return (
                              <p className="text-[#a8bfc4] bg-[#f2f2f2] px-2 py-1 rounded-[20px] text-sm text-center " key={category.id}>
                                {category.category_name}
                              </p>
                            );
                          })}
                        </div>

                        <div className="mt-3">
                          <a href={project.repo_link} target="_blank" className="detail-box__content__links text-sm">
                            repo link
                          </a>
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
