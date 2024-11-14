import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Contact({ linkedin, github, email }) {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:outline-none focus:border-[#C6E7FF]"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded focus:outline-none focus:border-[#C6E7FF]"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea className="w-full p-2 border rounded h-32 focus:outline-none focus:border-[#C6E7FF]"></textarea>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toast.success('Success! Your operation was completed.');
                }}
                className="bg-[#FFDDAE] px-6 py-2 rounded-full hover:bg-[#C6E7FF] hover:color-primary-hover transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#C6E7FF]" />
              <span className="color-primary text-lg italic font-semibold underline cursor-pointer hover:color-primary-hover transition-all">
                {email}
              </span>
            </div>
            <div className="flex space-x-4">
              <a href={github} className="text-3xl text-[#C6E7FF] hover:text-[#FFDDAE]">
                <FaGithub />
              </a>
              <a href={linkedin} className="text-3xl text-[#C6E7FF] hover:text-[#FFDDAE]">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
