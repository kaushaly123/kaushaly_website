import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16" id="aboutus">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-16">
        "Kaushaly - Your Personalized Learning Platform!" Founded in 2022,
        Kaushaly connects learners with expert tutors, offering affordable fees,
        one-to-one mentorship, homework help, and exam preparation. With proven
        results and comprehensive support, we make mastering any subject simple
        and enjoyable for every student.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company History */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <p className="text-gray-700">
            Kaushalya Home Learning is committed to inspiring a generation of
            lifelong learners in India by empowering students to reach their
            full potential through revolutionary home education.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p className="text-gray-700">
            Our mission is to foster a love of learning, encourage continuous
            growth, and provide innovative and effective solutions to transform
            the home learning experience in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
