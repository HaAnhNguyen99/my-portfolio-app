import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React from 'react';
import default_pj_preview_img from '../../../../../assets/imgs/default-pj-img.png';
import right_arrow from '../../../../../assets/svg/right-arrow.svg';
import './Projects.less';
import useWindowSize from '../../../../../hooks/useWindowSize';

export const Projects = ({ projects }) => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="block md:flex md:flex-wrap  color-secondary flex-col md:flex-row gap-8 relative w-full">
        {projects?.map((project) => {
          return (
            <div
              key={project.id}
              className="portfolio-container rounded-lg pt-4 md:pt-0 px-[15px] justify-around mb-20 md:mb-32 transition-transform relative flex flex-col">
              <div className="project_items flex gap-16 md:flex-row-reverse flex-col">
                <div className="project_items__content justify-around cursor-pointer tr basis-3/5">
                  <h3 className="text-[1.2em] text-center md:text-left md:text-[2em] font-bold py-2 ">{project.title}–</h3>
                  <p className="text-sm md:text-base md:flex gap-10 text-justify ">
                    {project.short_desc}
                    {width > 768 && (
                      <img
                        className="right-arrorw tranform rotate-[-45deg] transition-transform duration-700"
                        src={right_arrow}
                        alt="right arrow"
                        width={width > 768 ? 60 : 40}
                      />
                    )}
                  </p>
                  <div className="border-2 border-primary rounded-2xl overflow-hidden mt-6">
                    <img
                      sizes="(max-width: 479px) 82vw, (max-width: 767px) 62vw, (max-width: 991px) 438px, 500.828125px"
                      className="w-full object-cover"
                      src={project.pj_preview_img ? project.pj_preview_img.url : default_pj_preview_img}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full md:w-fit gap-2 items-center md:items-start md:flex-col self-end px-1 md:px-[50px] py-4 md:py-[30px] h-fit mb-10">
                  <div className="text-base">
                    <p className="font-bold text-center md:text-left">Role</p>
                    <div className="flex gap-1 flex-wrap">
                      {project.positions.map((category) => {
                        return (
                          <span className="text-sm  md:text-2xl" key={category.id}>
                            {category.name}
                            <span className="not-last-child">/</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="md:mt-10">
                    <p className="text-sm md:text-base font-bold">Team size</p>
                    <p className="text-sm md:text-2xl text-center md:text-left">{project.team_size}</p>
                  </div>

                  <div className="md:mt-10">
                    <a
                      href={project.repo_link}
                      target="_blank"
                      className="repo-btn text-white bold bg-secondary rounded-full px-4 md:px-10 py-2 md:py-4 text-sm flex items-center w-fit">
                      <span className="whitespace-nowrap">Repo link</span>
                      <svg
                        width="20px"
                        height="20px"
                        className="text-sm ml-2"
                        viewBox="0 0 72 72"
                        id="emoji"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        transform="rotate(90) matrix(-1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="color">
                            <path
                              id="_x2934__xFE0F__1_"
                              fill="currentColor"
                              stroke="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                              d="M40.1841,12L26.1294,26.8587l3.7285,3.413l7.5107-7.9438v16.4924c0,10.5232-5.7598,15.6386-17.6094,15.6386h-1V60h1 c14.9902,0,23.2461-7.522,23.2461-21.1797V22.3331l7.5078,7.9386l3.7275-3.413L40.1841,12z"></path>
                          </g>
                          <g id="hair"></g>
                          <g id="skin"></g>
                          <g id="skin-shadow"></g>
                          <g id="line">
                            <path
                              id="_x2934__xFE0F__1_"
                              fill="none"
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                              d="M40.1841,12L26.1294,26.8587l3.7285,3.413l7.5107-7.9438v16.4924c0,10.5232-5.7598,15.6386-17.6094,15.6386h-1V60h1 c14.9902,0,23.2461-7.522,23.2461-21.1797V22.3331l7.5078,7.9386l3.7275-3.413L40.1841,12z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
