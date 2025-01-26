import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRegAddressCard,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { ContactForm } from "./components/ContactForm";
import MagnetButton from "../../../components/MagnetButton/MagnetButton";
import addressImg from "../../../../assets/svg/address.svg";
import linkedImg from "../../../../assets/svg/linkedin.svg";
import gitImg from "../../../../assets/svg/github.svg";
import emailImg from "../../../../assets/svg/email.svg";

export default function Contact({ linkedin, github, email, address }) {
  return (
    <section id="contact" className="py-16 text-black">
      <div className="container mx-auto px-6">
        <div className="text-4xl leading-[77px] text-center">
          Wanna build something great together ?
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center mt-10">
          <MagnetButton>Get in Touch</MagnetButton>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <ContactForm /> */}
          <div className="space-y-6">
            <div className="text-3xl hover:text-[#FFDDAE] flex items-center gap-2 p-4 border rounded-lg">
              <img src={emailImg} alt="address" />
              <span className="color-primary text-lg italic font-semibold underline cursor-pointer hover:color-primary-hover transition-all">
                {email}
              </span>
            </div>
            <div className="text-3xl hover:text-[#FFDDAE] flex items-center gap-2 p-4 border rounded-lg">
              <a
                href={github}
                target="blank"
                className="text-2xl flex hover:text-[#FFDDAE]">
                <img src={gitImg} alt="address" />
              </a>
            </div>
            <div>
              <a
                href={linkedin}
                target="blank"
                className="flex text-3xl hover:text-[#FFDDAE]  items-center gap-2 p-4 border rounded-lg">
                <img src={linkedImg} alt="address" />
              </a>
            </div>

            <p>
              <img src={addressImg} alt="address" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
