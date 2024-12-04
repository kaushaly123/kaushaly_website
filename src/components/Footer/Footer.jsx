import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f6f4f4]" id="contact" >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Kaushaly - Home Learning</h1>
            <p className="text-dark2">
            Kaushaly is your personalized learning platform, Connect with expert tutors, master any subject, and achieve your goals. 
            We empower learners of all ages, offering flexible and convenient access to quality instruction.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Personalised Tutoring
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Subject Expertise
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Flexible Scheduling
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Progress Tracking
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="/">Home</a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#services">Services</a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#team">Our Team</a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <h2>kaushalylearning@gmail.com</h2>
            </div>
            <div className="flex items-center">
              <h3>Contact No. 9407272540, 9589362921</h3>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://wa.me/message/TFB5IFVLHJBEG1">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/kaushaly_learning/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566109052750&mibextid=ZbWKwL">
                <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
