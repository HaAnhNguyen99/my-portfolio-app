import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import default_pj_preview_img from "../../../../../assets/imgs/default-pj-img.png";
import right_arrow from "../../../../../assets/svg/right-arrow.svg";
import "./Projects.less";

export const Projects = ({ projects }) => {
  return (
    <>
      <div className="block md:flex md:flex-wrap color-secondary flex-col md:flex-row gap-8 relative w-full">
        {projects?.map((project) => {
          return (
            <div
              key={project.id}
              className="portfolio-container px-[15px] justify-around mb-32 transition-transform relative flex flex-col">
              <div className="project_items flex gap-16 flex-row-reverse">
                <div className="project_items__content justify-around cursor-pointer tr basis-3/5">
                  <h3 className="text-[2em] font-bold  py-2 ">
                    {project.title}–
                  </h3>
                  <p className="flex gap-10">
                    {project.short_desc}
                    <img
                      className="right-arrorw tranform rotate-[-45deg] transition-transform duration-700"
                      src={right_arrow}
                      alt="right arrow"
                      width={60}
                    />
                  </p>
                  <div className="border-2 border-primary rounded-2xl overflow-hidden mt-6">
                    <img
                      sizes="(max-width: 479px) 82vw, (max-width: 767px) 62vw, (max-width: 991px) 438px, 500.828125px"
                      className="w-full object-cover "
                      src={
                        project.pj_preview_img
                          ? project.pj_preview_img.url
                          : default_pj_preview_img
                      }
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="self-end px-[50px] py-[30px] h-fit mb-10">
                  <div className="text-base">
                    <p>Project</p>
                    {project.positions.map((category) => {
                      return (
                        <span className="text-2xl" key={category.id}>
                          {category.name}
                          <span className="not-last-child">/</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-10">
                    <p className="text-base">Team size</p>
                    <p className="text-2xl">{project.team_size}</p>
                  </div>

                  <div className="mt-10">
                    <a
                      href={project.repo_link}
                      target="_blank"
                      className="repo-btn text-white bold bg-secondary rounded-full px-10 py-4 text-sm flex items-center w-fit">
                      <span>Repo link</span>
                      <svg
                        width="20px"
                        height="20px"
                        className="text-sm ml-2"
                        viewBox="0 0 72 72"
                        id="emoji"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        transform="rotate(90) matrix(-1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="color">
                            <path
                              id="_x2934__xFE0F__1_"
                              fill="#ffffff"
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
