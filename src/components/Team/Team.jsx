// Team.jsx
import React from 'react';
import Card from './Card';
import LakshyaImage from '../../assets/lakshya.jpg';
import PawanImage from '../../assets/pawan.jpg';
import SaurabhImage from '../../assets/saurabh1.jpg';

const Team = () => {
  const teamData = [
    {
      name: 'Saurabh Sharma',
      age: 21,
      position: 'Founder',
      detailInformation:
        'Saurabh Sharma, a BTech 4th year student specializing in Data Science, excels in driving innovative solutions with his strong foundation in Machine Learning and data science. His 1.5 years of tutoring experience demonstrate his passion for sharing knowledge and fostering growth. ',
      image: SaurabhImage,
    },
    {
        name: 'Pawan Dwivedi',
        age: 21,
        position:"Founder", 
        detailInformation: 'Pawan Dwivedi, a BTech 4th year student, brings a unique blend of Artificial Intelligence, Machine Learning, computer science fundamentals, and marketing research expertise. With 2 years of tutoring experience, Pawan is dedicated to helping others succeed.',
        image: PawanImage,
    },
    {
        name: 'Lakshya Borasi',
        age: 21,
        position:'Founder',
        detailInformation: 'Lakshya Borasi, a BTech 4th year student of Artificial Intelligence and Machine Learning with a strong foundation in Web Technologies and Machine Learning. Lakshya is committed to sharing his knowledge and guiding others through his 2 years of tutoring experience.',
        image: LakshyaImage,
    },
    
    
  ];



  return (
    <section className="bg-white" id="team">
      <div className="container pb-9 pt-16">
        <h1 className="text-4xl font-bold text-left pb-5">Our Team</h1>
      </div>
      <div className="team flex flex-wrap justify-center gap-20">
        
        {teamData.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            age={member.age}
            position={member.position}
            detailInformation={member.detailInformation}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;