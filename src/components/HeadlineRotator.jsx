import React, { useState, useEffect, useRef } from 'react';

function HeadlineRotator() {
  // Define arrays of headline texts
  const headlineTexts = ['Brands', 'Photos', 'Videos', 'Design', 'Websites'];
  const headlineRealTexts = ['Strategy', 'Performance', 'Identity', 'Experiences'];

  // State to keep track of the current index, headline texts, and whether to animate
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTexts, setCurrentTexts] = useState(headlineTexts);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const activeTextRef = useRef(null); // Reference for the active text element

  // Effect to update the texts based on the body class
  useEffect(() => {
    const updateTexts = () => {
      if (document.body.classList.contains('real__mode__on')) {
        setCurrentTexts(headlineRealTexts);
      } else {
        setCurrentTexts(headlineTexts);
      }
    };

    updateTexts(); // Initial check

    // Add an event listener for changes to the body class
    const observer = new MutationObserver(updateTexts);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Cleanup function to disconnect the observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array to run the effect only once

  // Effect to change the current index every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShouldAnimate(true); // Trigger animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentTexts.length);
        setShouldAnimate(false); // Turn off animation after change
      }, 500); // Wait for the animation duration before changing index
    }, 3000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentTexts.length]); // Run the effect when the length of currentTexts changes

  // Effect to calculate the width of the active text element
  useEffect(() => {
    if (activeTextRef.current) {
      const activeTextWidth = activeTextRef.current.offsetWidth;
      document.documentElement.style.setProperty('--active-width', `${activeTextWidth}px`);
    }
  }, [currentIndex, currentTexts]); // Recalculate width whenever currentIndex or currentTexts changes

  return (
    <div className='dynamic__wrapper' style={{ width: shouldAnimate ? '0' : 'var(--active-width)' }}>
      {currentTexts.map((text, index) => (
        <span
          ref={index === currentIndex ? activeTextRef : null} // Set reference for the active text element
          key={index}
          className={`dynamic__text ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default HeadlineRotator;
