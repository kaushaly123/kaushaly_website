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

  const handleOpenModal = (role) => {
    setSelectedRole(role); // Set role to display the respective form
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRole(null);
  };

  const renderForm = () => {
    if (selectedRole === "student") {
      return (
        <iframe
          src="https://forms.office.com/r/1GcHN6HduV"
          title="Student Form"
          width="100%"
          height="400px"
          style={{ overflow: "hidden" }}
        ></iframe>
      );
    } else if (selectedRole === "teacher") {
      return (
        <iframe
          src="https://forms.office.com/r/6YryKPpUTv"
          title="Teacher Form"
          width="100%"
          height="400px"
          style={{ overflow: "hidden" }}
        ></iframe>
      );
    }
    return null; // If no role is selected, render nothing
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
              100+ Students, 50+ Tutors, Learning Together.
            </h1>
            <p>
              At Kaushalya Home Learning, we're more than just a tutoring
              service. We're a family of 50+ experienced tutors and 100+
              dedicated students, all united by a passion for learning and
              growth.
            </p>
            <div className="space-x-4">
              <button
                className="primary-btn !mt-8 inline-flex items-center gap-4 group"
                onClick={() => handleOpenModal("student")}
              >
                Student
                <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
              </button>
              <button
                className="primary-btn !mt-8 inline-flex items-center gap-4 group"
                onClick={() => handleOpenModal("teacher")}
              >
                Teacher
                <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md relative w-[90%] max-w-lg">
            <h2 className="text-xl font-bold mb-4">
              {selectedRole === "student" ? "Student Form" : "Teacher Form"}
            </h2>
            <div className="overflow-hidden">{renderForm()}</div>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded mt-4 absolute top-4 right-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Subscribe;
