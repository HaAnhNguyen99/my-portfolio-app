import './About.media.less';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function About({ description, profilePic, cv, role, name }) {
  return (
    <section id="about" className="pt-40 md:pt-48 pb-16 min-h-screen sm:pt-10">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex items-center justify-center">
            <div
              className={'rounded-full w-64 h-64 object-cover shadow-lg bg-profile-custom  '}
              style={{ backgroundImage: `url('${profilePic}')` }}
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-6 font-IBM ss:text-center">
              {description ? <BlocksRenderer content={description} /> : ''}
            </p>
            <div className="flex space-x-4 font-IBM ss:flex ss:justify-center ss:items-center">
              Check out my lastest
              <a
                href={cv}
                download
                rel="noopener noreferrer"
                target="_blank"
                className="font-IBM border-spacing-1 bold border-b-2 border-black border-opacity-40 ">
                &nbsp;cv&nbsp;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
