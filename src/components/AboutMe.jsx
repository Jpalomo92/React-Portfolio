import React from 'react';
import '../styles/AboutMe.css'


const AboutMe = () => {
  return (
    <section>
      <section>
        <h2 className='aboutMe'>About Me</h2>
      </section>
      <section className='about-me-container'>
        <div className='about-me-content'></div>
        <img className= 'profilepic' src='./images/Profile.JPG' alt="Profile Picture" />
        <p>
        Thank you for taking the time to visit my page! My name is Julian Palomo, and I was born and raised in Houston, Texas. Although I love my state very much,
        I also love traveling around different states and visiting their cities. One thing that I love to do while traveling is visiting the national
        parks. It's important for me to appreciate the local geography and natural lanscapes. I think living in a flat city all my life
        has helped appreciate what other places have to offer.
        </p>
        <p>
        When I was younger, I knew I wanted to travel around the world. I used this goal as my motivation to get where I am today. 
        </p>
        <p> I decided to take two years off after graduating High School in 2013 so I could save up for college. During these two years, 
        I landed a job in the logistics industry and became an air export coordinator. To say the least, working in the logistics
        industry developed my ability to work in a fast paced environment. 
        I continued working here throughout my college career during the summer and winter breaks. 
        </p>
        <p>
        After graduating from Texas State in 2019 with a B.B.A. Major in Finance, I then became a Realtor and quickly realized that real estate was not for me.
        In February of 2020, I began working in Accounting for a tax consulting firm, and have been working there ever since.
        </p>
        <p>
         Although I'm very grateful for my career, I have decided to pursue my dream of becoming a full stack developer.
        </p>
        <p>
        It's interesting looking back and realizing that coding was always a part of my life. I remember making it a hobby of mine when Myspace was the most popular
        thing out there. I would write codes for myself and friends to make customized profiles. From then on, I was either taking coding classes as an 
        elective or just practicing on my own. 
        </p>
        <p>
        Even though it's taken me many years to pursue this interest of mine, I'm happy to now be doing so. 
        </p>
        <p> 
        Thank you again for taking the time to read a little about me. Please note that the time and effort I've put into building this portfolio and 
        the applications below, are only a fraction of the hard work that I am able and willing to put in.
        </p>
        <p>
        If you have any questions or would like to discuss my experience further, you can find my contact information
        in the Contact section.
        </p>
      </section>
    </section>
  );
};

export default AboutMe;