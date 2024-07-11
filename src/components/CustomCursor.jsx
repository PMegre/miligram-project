import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.easeOut',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Hide the original cursor
    document.body.style.cursor = 'none';

    // Hide cursor for links, buttons, and input fields
    const interactableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], input[type="reset"], label');
    const interactableFormElements = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    
    interactableElements.forEach(element => {
      element.style.cursor = 'none';
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, duration: 0.3 });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });

    interactableFormElements.forEach(element => {
      element.style.cursor = 'none';
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, width: '1px', height: '15px', borderRadius: '0', duration: 0.3 });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, width: '20px', height: '20px', borderRadius: '100px', duration: 0.3 });
      });
    });

    return () => {
    // Remove the mousemove event listener
    window.removeEventListener('mousemove', moveCursor);

    // Restore the body's cursor style to 'auto' (default)
    document.body.style.cursor = 'auto';

    // Function to remove event listeners and reset cursor style for an element
    const removeEventListeners = (element, enterHandler, leaveHandler) => {
        // Reset the cursor style to the default 'auto'
        element.style.cursor = 'auto';
        // Remove the event listeners
        element.removeEventListener('mouseenter', enterHandler);
        element.removeEventListener('mouseleave', leaveHandler);
    };

    // Iterate over interactable elements and remove event listeners
    interactableElements.forEach(element => {
        removeEventListeners(element, element.mouseEnterHandler, element.mouseLeaveHandler);
    });

    // Iterate over interactable form elements and remove event listeners
    interactableFormElements.forEach(element => {
        removeEventListeners(element, element.mouseEnterHandler, element.mouseLeaveHandler);
    });
};

  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: '-10px',
        left: '-10px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'white',
        pointerEvents: 'none', // So it doesn't interfere with mouse events on other elements
        zIndex: 9999, // Ensure it's on top of other elements
        mixBlendMode: 'difference', // Optional: for better visibility on various backgrounds
      }}
    />
    
  );
};

export default CustomCursor;
