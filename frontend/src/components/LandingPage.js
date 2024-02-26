import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div>
      <div className="bgAnimation" id="bgAnimation">
        <div className="backgroundAmim"></div>
      </div>
      <div className="container">
        <nav>
          <h1><span>Arnab </span>Gei</h1>
          <ul>
            <li>Home</li>
            <li>Prediction</li>
            <li>About Devs</li>
            <li>FAQs</li>
            <li>Explore</li>
          </ul>
        </nav>
        <section>
          <div className="textBox">
            <h1><span>Career</span> Guide</h1><br />
            <p>Your one stop solution <br /> To all your career problems. </p> <br />
            <button className="homeBtn" style={{ '--i': '#fff' }}>Join Our Community</button>
            <button className="homeBtn" style={{ '--i': '#fff' }}>Lorem ipsum</button>
            <li className="homeBtn" style={{ '--i': '#CC00FF' }}>Explore</li>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
