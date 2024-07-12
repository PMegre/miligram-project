import React from 'react';
import './App.css';

//Components
import Header from "./components/Header";
import Router from "./router/Router";
import CustomCursor from './components/CustomCursor';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother , ScrollTrigger);

function App() {

  useGSAP(() => {

        const smoother = ScrollSmoother.create({
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
        });

        // Additional ScrollTrigger setup if needed

        return () => {
            smoother.revert();
        };
  }, []);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Router />
        </div>
      </div>
      <CustomCursor />
    </>
  );
}

export default App;
