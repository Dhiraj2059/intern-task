import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rabina Baral',
      position: 'Manager',
      testimonial: 'TaskTest has increased our brand presence among students, and provided quality leads data with customized Ad Campaigns. With their great effort and strategy, we are able to drive business growth with more students conversions for France and Bangladesh academic programs.',
      image: '/images/girl 1.png'
    },
    {
      id: 2,
      name: 'Sandhya Neupane',
      position: 'HR Manager',
      testimonial: 'Being the sole distributors for Mahindra passenger vehicles in Nepal, audience segmentation according to different car models is crucial. TaskTest successfully helped us generate sales for new model launches, and provide 360 degree online marketing services for Mahindra Nepal.',
      image: '/images/girl 2.png'
    },
    {
      id: 3,
      name: 'Samikshya KC',
      position: 'Digital Marketing Officer',
      testimonial: 'I have been associated with TaskTest for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months. Not only it is a blessing to work with the profoundly experienced team. I am grateful and proud to be a part of the TaskTest.',
      image: '/images/girl 3.png'
    },
    {
      id: 4,
      name: 'Samaya Rana',
      position: 'Web Developer',
      testimonial: 'I have been associated with TaskTest for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months. Not only it is a blessing to work with the profoundly experienced team. I am grateful and proud to be a part of the TaskTest.',
      image: '/images/man 1.png'
    },
    {
      id: 5,
      name: 'Rahul Bhandari',
      position: 'Networking Officer',
      testimonial: 'I have been associated with TaskTest for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months. Not only it is a blessing to work with the profoundly experienced team. I am grateful and proud to be a part of the TaskTest.',
      image: '/images/man 2.png'
    },
    {
      id: 6,
      name: 'Naresh Patel',
      position: 'Accountant',
      testimonial: 'I have been associated with TaskTest for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months. Not only it is a blessing to work with the profoundly experienced team. I am grateful and proud to be a part of the TaskTest.',
      image: '/images/man 3.png'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="testimonial">"{member.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;