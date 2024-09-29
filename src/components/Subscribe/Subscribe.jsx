import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRole(null);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const renderForm = () => {
    if (selectedRole === 'student') {
      // Replace with your student Google Form URL
      return <iframe src="https://forms.office.com/r/1GcHN6HduV" title="Student Google Form" width="100%" height="400px"style={{ overflow: 'hidden'  }}></iframe>;
    } else if (selectedRole === 'teacher') {
      // Replace with your teacher Google Form URL
      return <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf1BPRQTtoSQTv_cNZM1fThQbKFAWPW_1yQXG_TSn8_UQISwg/viewform?usp=sf_link" title="Teacher Google Form" width="100%" height="400px"></iframe>;
    } else {
      return <p>Please select your role.</p>;
    }
  };

  return (
    <section className="bg-[#f7f7f7]" id="Subscribe">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              10+ Students, 5+ Tutors, Learning Together.
            </h1>
            <p>
            At Kaushalya Home Learning, we're more than just a tutoring service. We're a family of 5+ experienced tutors and 10+ dedicated students, all united by a passion for learning and growth.
            </p>
            <button
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
              onClick={handleOpenModal}
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Choose Your Role</h2>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleRoleSelect('student')}
              >
                Student
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleRoleSelect('teacher')}
              >
                Teacher
              </button>
            </div>
            <div className="mt-4">{renderForm()}</div>
            <button className="bg-gray-400 text-white px-4 py-2 rounded mt-2" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Subscribe;