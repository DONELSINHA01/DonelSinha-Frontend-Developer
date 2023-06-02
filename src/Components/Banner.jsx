import React, { useEffect, useState } from 'react';
import '../Styles/Banner.css';

const Banner = () => {
  const supportingStatements = [
    'Unleash your curiosity and witness groundbreaking space missions',
    'Experience the future of space exploration with SpaceX',
    'Join us on an incredible journey beyond the Earth',
    'Discover the wonders of the universe through SpaceX missions',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationEnabled, setAnimationEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationEnabled(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % supportingStatements.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isAnimationEnabled) {
      const timer = setTimeout(() => {
        setAnimationEnabled(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimationEnabled]);

  return (
    <div className="banner">
      <div className="banner-image"></div>
      <div className="tagline">
        <h1>Explore the Space with SpaceX</h1>
        {supportingStatements.map((statement, index) => (
          <p
            key={index}
            className={`supporting-statement ${
              index === currentIndex ? 'fade-in-animation' : 'fade-out-animation'
            }`}
          >
            {statement}
          </p>
        ))}
        <div className="scroll-down-text">
          <p>Scroll Down</p>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
