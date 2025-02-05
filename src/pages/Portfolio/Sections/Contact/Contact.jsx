import { FaGithub, FaLinkedin, FaEnvelope, FaRegAddressCard } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ContactForm } from './components/ContactForm';
import MagnetButton from '../../../components/MagnetButton/MagnetButton';
import addressImg from '../../../../assets/svg/address.svg';
import linkedImg from '../../../../assets/svg/linkedin.svg';
import gitImg from '../../../../assets/svg/github.svg';
import emailImg from '../../../../assets/svg/email.svg';

export default function Contact({ linkedin, github, email, address }) {
  return (
    <section id="contact" className="py-16 text-black">
      <div className="container mx-auto px-6">
        <div className="text-4xl font-bold leading-[77px] text-center">Wanna build something great together ?</div>

        <h2 className="text-3xl font-bold mb-8 text-center mt-8">
          <MagnetButton>Get in Touch</MagnetButton>
        </h2>
        <div className=" mt-20">
          {/* <ContactForm /> */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-4">
            {/* Email */}
            <div className=" hover:text-[#FFDDAE] p-4 border rounded-lg">
              <div className="overflow-hidden h-10 w-10 p-2 border rounded-lg mb-8">
                <img src={emailImg} alt="address" />
              </div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-sm text-gray-500">Contact me via email.</p>
              <span className="color-primary italic font-semibold text-sm underline cursor-pointer hover:color-primary-hover transition-all">
                {email}
              </span>
            </div>

            {/* Github */}
            <div className="hover:text-[#FFDDAE] p-4 border rounded-lg">
              <div className="overflow-hidden h-10 w-10 p-2 border rounded-lg mb-8">
                <img src={gitImg} alt="address" />
              </div>
              <p className="text-lg font-semibold">Github</p>
              <p className="text-sm text-gray-500">Contact me via github.</p>
              <a
                href={github}
                target="blank"
                className="color-primary italic font-semibold text-sm underline cursor-pointer hover:color-primary-hover transition-all">
                My github profile
              </a>
            </div>

            {/* Linkedin */}
            <div className="hover:text-[#FFDDAE] p-4 border rounded-lg">
              <div className="overflow-hidden h-10 w-10 p-2 border rounded-lg mb-8">
                <img src={linkedImg} alt="address" />
              </div>
              <p className="text-lg font-semibold">Linkedin</p>
              <p className="text-sm text-gray-500">Contact me via linkedin.</p>
              <a
                href={linkedin}
                target="blank"
                className="color-primary italic font-semibold text-sm underline cursor-pointer hover:color-primary-hover transition-all">
                My linkedin profile
              </a>
            </div>

            {/* Address */}
            <div className="hover:text-[#FFDDAE] p-4 border rounded-lg">
              <div className="overflow-hidden h-10 w-10 p-2 border rounded-lg mb-8">
                <img src={addressImg} alt="address" />
              </div>
              <p className="text-lg font-semibold">Address</p>
              <p className="text-sm text-gray-500">My current address.</p>
              <span className="color-primary italic font-semibold text-sm underline cursor-pointer hover:color-primary-hover transition-all">
                {address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
