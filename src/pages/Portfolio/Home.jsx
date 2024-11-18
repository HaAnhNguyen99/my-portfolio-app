import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import About from './Sections/About/About';
import Skill from './Sections/Skill/Skill';
import Contact from './Sections/Contact/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Portfolio from './Sections/Portfolio/Portfolio';
import { getProfile, getExperience } from '../../libs/api/api';
import { ClipLoader } from 'react-spinners';

import Work from './Work/Work';
import Loading from '../components/Loading';
export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [cv, setCv] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shortName, setShortName] = useState('');
  const [experience, setExperience] = useState([]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    async function getData() {
      const profile = await getProfile();
      const experience = await getExperience();

      setDescription(profile.description);
      setName(profile.name);
      setRole(profile.role);
      setProfilePic(profile.profile_pic);
      setCv(profile.cv);
      setLinkedin(profile.linkedin);
      setGithub(profile.github);
      setEmail(profile.email);
      setShortName(profile.short_name);

      setExperience(experience);
      setIsLoading(false);
    }

    getData();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-IBM">
      <div className="bg-[#FBFBFB] min-h-screen content sm:!mt-0 sm:!px-0" id="content">
        <Header shortName={shortName} isFixed={isFixed} />
        <About description={description} profilePic={profilePic} cv={cv} role={role} name={name} />
        <Skill />
        <Work experience={experience} />
        <Portfolio />
        <Contact linkedin={linkedin} github={github} email={email} />
        <Footer />
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#FFDDAE] p-3 rounded-full shadow-lg hover:bg-[#C6E7FF] transition-colors"
            aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}
