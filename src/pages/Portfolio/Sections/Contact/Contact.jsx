import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ContactForm } from './components/ContactForm';

export default function Contact({ linkedin, github, email }) {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <ContactForm /> */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#C6E7FF]" />
              <span className="color-primary text-lg italic font-semibold underline cursor-pointer hover:color-primary-hover transition-all">
                {email}
              </span>
            </div>
            <div className="flex space-x-4">
              <a href={github} target="blank" className="text-3xl text-[#C6E7FF] hover:text-[#FFDDAE]">
                <FaGithub />
              </a>
              <a href={linkedin} target="blank" className="text-3xl text-[#C6E7FF] hover:text-[#FFDDAE]">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
