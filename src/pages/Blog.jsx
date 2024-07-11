import React from 'react';
import { useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const Blog = () => {

     useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
        });

        return () => {
            // Clean up the ScrollSmoother instance when the component unmounts
            smoother.kill();
        };
    }, []);
    return (
        <>
            <section className='d-flex default-padding black-container align-items-center vh-100 first__section'>
                text
            </section>
            <section className='d-flex default-padding white-container align-items-center vh-100'>
                text
            </section>
            <section className='d-flex default-padding black-container align-items-center vh-100'>
                text
            </section>
            <section className='d-flex default-padding white-container align-items-center vh-100'>
                text
            </section>
        </>
    );
}

export default Blog;