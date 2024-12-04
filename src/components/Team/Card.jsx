import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';  // Importing social icons

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Card = ({ name, age, position, detailInformation, image, socialLinks }) => {
  return (
    <motion.div
      variant={SlideLeft(Card.delay)}
      initial='initial'
      whileInView={"animate"}
      viewport={{ once: true}}
      className="card flex flex-col bg-[#f4f4f4] shadow-md rounded-lg p-5 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
      style={{ maxWidth: '300px' }} // Set a maximum width for the card
    >
      <div className="flex justify-center mb-4">
        <img src={image} alt={name} className="w-24 h-24 rounded-full" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
        <p className="text-gray-500 mb-4 text-center">Age: {age} | {position}</p>
        <div className="text-gray-700 line-clamp-8">
          {detailInformation}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-4">
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={20} />
          </a>
        )}
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={20} />
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
