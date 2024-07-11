import React, { useContext, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import TransitionContext from '../context/TransitionContext';

const TransitionComponent = ({ children }) => {
  
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  const nodeRef = useRef(null);  // Add a ref to get the node reference

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        nodeRef={nodeRef}  // Attach the ref to the Transition component
        timeout={250}
        onEnter={() => {
          // Scroll to the top of the page immediately
          window.scrollTo(0, 0);

          // Your existing onEnter animation code
          toggleCompleted(false);
          gsap.set(nodeRef.current, { autoAlpha: 0, scale: 0.95, xPercent: -100 });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(nodeRef.current, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(nodeRef.current, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={() => {
          // Your existing onExit animation code
          gsap
            .timeline({ paused: true })
            .to(nodeRef.current, { scale: 0.95, duration: 0.2 })
            .to(nodeRef.current, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play();
        }}
      >
        {/* Attach the ref to the child element */}
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
