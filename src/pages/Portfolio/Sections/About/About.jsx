import { useEffect } from 'react';
import './About.less';
import './About.media.less';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getTechStack } from '../../../../libs/api/api';
import { useState } from 'react';

export default function About({ description, profilePic, cv, role, name }) {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getTechStack();
      setTechStack(data);
    }

    getData();
  }, []);

  return (
    <section id="about" className="pt-40 md:pt-48 pb-16 min-h-screen sm:pt-10">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center gap-12 ">
          <div className="md:w-1/3 flex items-center justify-center">
            <div
              className={'rounded-full w-64 h-64 object-cover shadow-lg bg-profile-custom  '}
              style={{ backgroundImage: `url('${profilePic}')` }}
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-6 text-justify md:text-left ">{description ? <BlocksRenderer content={description} /> : ''}</p>
            <div className="flex space-x-4  ss:flex ss:justify-center ss:items-center">
              Check out my lastest
              <a
                href={cv}
                download
                rel="noopener noreferrer"
                target="_blank"
                className=" border-spacing-1 bold border-b-2 border-black border-opacity-40 ">
                &nbsp;cv&nbsp;
              </a>
            </div>
            <div className="overflow-hidden flex md:flex-row flex-col mt-20 items-center ">
              <span className="whitespace-nowrap lg:whitespace-normal sm:pb-7 md:pb-0">Current favorite tech stack/tools:</span>
              <div className="flex justify-center items-center mt-6 mb-10 md:mb-0 md:mt-0">
                {techStack.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="techstack-item transition-all duration-700 relative flex   rounded-full overflow-hidden border-gray-950 border border-opacity-40 ml-2">
                      <img
                        src={item.hover_img.url}
                        alt={item.name}
                        className="w-10 h-10 object-cover transition-all duration-700 !m-0 relative hidden-img"
                      />
                      <img
                        src={item.img.url}
                        alt={item.name}
                        className="w-10 h-10 object-cover transition-all duration-700  m-0 hover:translate-x-10"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
