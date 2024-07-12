import React from 'react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const About = () => {

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
            <main>
                <section className='d-flex default-padding black__container align-items-center vh-100 first__section'>
                    text
                </section>
                <section className='d-flex default-padding white__container align-items-center vh-100'>
                    text
                </section>
                <section className='d-flex default-padding black__container align-items-center vh-100'>
                    text
                </section>
                <section className='d-flex default-padding white__container align-items-center vh-100'>
                    text
                </section>
            </main>
        </>
    );
}

export default About;