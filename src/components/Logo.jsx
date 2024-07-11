import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Logo = () => {

    const container = useRef(null);
    const tl1 = useRef(null);
    const tl2 = useRef(null);

    useGSAP(
        () => {

            gsap.set(".mini-letters", { opacity: 0 })
            gsap.set(".mini-dot", { scale: 0 })

            tl1.current = gsap
                .timeline()
                .from(".letters", { opacity: 0, x: -10, duration: .2, stagger: -0.1, transformOrigin: "center center", ease: 'back.out' })
                .from(".dot", { scale: 0, duration: 0.7, stagger: -0.2, ease: 'back.out', transformOrigin: "center center" }, '-=.5')

            tl2.current = gsap
                .timeline({ paused: true })
                .to(".mini-letters", { opacity: 1, duration: .3, transformOrigin: "center center", ease: 'back.out' })
                .to(".mini-dot", { scale: 1, duration: 0.3, stagger: -0.2, ease: 'back.out' }, '-=.2')
                
            ScrollTrigger.create({
                trigger: container.current,
                start: "+=800px center",
                end: "+=800px center",
                markers: true,
                onEnter: () => {
                    tl1.current.reverse().then(() => {
                        gsap.delayedCall(.1, () => tl2.current.play());
                    });
                },
                onLeaveBack: () => {
                    tl2.current.reverse().then(() => {
                        gsap.delayedCall(.1, () => tl1.current.play());
                    });
                },
                scrub: true
            })

            return () => {
                tl1.current.kill();
                tl2.current.kill();
            }
        },

        { scope: container }
    );

    return (
        <div ref={container}>
            <svg className='main__logo' viewBox="0 0 200 60">
                <g id="letter-7" className="letters">
                    <path d="M165.8,17.9v3.9h.1c.2-.4.5-.8.9-1.3.4-.5.8-1,1.4-1.4.6-.5,1.3-.9,2.2-1.2.8-.3,1.9-.5,3-.5s2.3.1,3.2.4c.8.3,1.5.6,2.1,1.1.6.4,1,.9,1.3,1.4.3.5.7,1,.9,1.6.5-1,1.1-1.8,1.8-2.4.7-.6,1.3-1,2-1.3.7-.3,1.3-.5,1.9-.6.6,0,1.1-.1,1.5-.1,2.1,0,3.6.3,4.7.9,1.1.6,1.9,1.4,2.4,2.2.5.9.8,1.8.9,2.7,0,1,.1,1.8.1,2.4v15.1h1.9v.8h-10v-.8h1.5v-17.2c0-1.6-.3-2.7-.8-3.6-.6-.8-1.5-1.2-2.8-1.2s-.9.1-1.5.3c-.6.2-1.1.6-1.7,1s-1,1-1.4,1.7c-.4.7-.6,1.6-.6,2.6v16.4h1.5v.8h-9.7v-.8h1.6v-17.6c0-1.6-.3-2.8-1-3.4-.7-.6-1.4-1-2.3-1-1.4,0-2.7.6-3.8,1.9-.3.4-.5.7-.8,1.1-.2.4-.4.8-.5,1.3-.1.5-.2,1.1-.3,1.7,0,.6,0,1.4,0,2.4v13.5h1.5v.8h-10v-.8h1.9v-22.2h-1.9v-.8h8.4Z" />
                </g>
                <g id="letter-6" className="letters">
                    <path d="M152.4,42.2c-1,.1-1.8.2-2.7.2-1.8,0-3.2-.3-4.1-1-.9-.7-1.4-1.6-1.6-2.8h-.1c-.6,1.5-1.4,2.5-2.4,3-1,.5-2.5.8-4.4.8s-1.7,0-2.6-.3c-.9-.2-1.7-.5-2.5-.9-.8-.4-1.4-1-1.8-1.7-.5-.7-.7-1.6-.7-2.6s.2-2,.6-2.7c.4-.7,1-1.3,1.6-1.8.7-.5,1.4-.9,2.3-1.2.8-.3,1.7-.6,2.6-.9,1.5-.4,2.7-.8,3.6-1.1.9-.3,1.6-.6,2.1-1,.5-.4.9-.7,1.1-1.2.2-.4.3-1,.3-1.7v-3.4c0-1-.2-1.9-.7-2.7-.5-.8-1.3-1.2-2.6-1.2s-1.5.2-2.2.6c-.6.4-.9,1.1-.9,2.1s0,.3,0,.6c0,.3,0,.6.1.9,0,.3,0,.6.1.9,0,.3,0,.5,0,.6,0,.6-.1,1-.4,1.3-.3.3-.5.5-.9.7-.3.1-.7.2-1.1.2-.4,0-.7,0-.9,0-.4,0-.7,0-1.1,0-.4,0-.7-.2-1-.4-.3-.2-.5-.5-.7-.9-.2-.4-.3-.9-.3-1.5,0-1,.3-1.8.8-2.6.5-.8,1.2-1.4,2.1-1.9.9-.5,1.8-.9,2.9-1.1,1.1-.3,2.2-.4,3.4-.4s2.6.1,3.9.3c1.2.2,2.2.6,3.1,1.2.9.6,1.6,1.4,2.1,2.4.5,1,.8,2.3.8,3.9v13.7c0,.7,0,1.3.3,1.9.2.5.7.8,1.5.8s.9,0,1.2-.3c.3-.2.6-.4.9-.8l.5.5c-.5.8-1.2,1.2-2.2,1.4M143.5,27.9c0,.2-.2.4-.4.6-.2.2-.5.4-1.1.7-.7.3-1.4.7-2,1-.7.3-1.3.7-1.8,1.2-.5.5-1,1.1-1.3,1.8-.3.7-.5,1.6-.5,2.7s0,1,0,1.6c0,.6.2,1.2.4,1.7.2.6.6,1,1.1,1.4.5.4,1.1.6,1.9.6s.9-.1,1.4-.3c.4-.2.9-.6,1.2-1,.4-.5.6-1.1.9-1.8.2-.8.3-1.7.3-2.7v-7.3h-.1Z" />
                </g>
                <g id="letter-5" className='letters'>
                    <path d="M115.4,17.9v4.7h.1c.6-1.4,1.5-2.6,2.6-3.6,1.1-1,2.5-1.5,4.3-1.5s2.7.4,3.7,1.2c.9.8,1.4,2,1.4,3.5s-.3,2-.8,2.6c-.5.6-1.4.9-2.5.9s-1.6-.2-2.3-.5c-.7-.3-1-1-1-2s0-.3,0-.6c0-.3,0-.6.1-.9,0-.3,0-.6.1-.9,0-.3,0-.4,0-.4,0-.3,0-.5-.2-.7,0-.2-.2-.3-.4-.4-.2-.1-.4-.2-.7-.2s-.8.2-1.3.5c-.5.4-1,.9-1.5,1.5-.5.7-.9,1.5-1.2,2.4-.3.9-.5,2-.5,3.2v14.2h2.6v.8h-11v-.8h1.8v-22.2h-1.8v-.8h8.3Z" />
                </g>
                <g id="letter-4" className='letters'>
                    <path d="M94.5,38.2c1.2.3,2.3.7,3.3,1.4.9.7,1.7,1.6,2.3,2.7.6,1.1.9,2.5.9,4.2s-.3,2.8-.9,4.2c-.6,1.4-1.4,2.6-2.5,3.7-1.1,1.1-2.5,1.9-4,2.6-1.6.7-3.4,1-5.4,1s-4.1-.3-5.4-.8c-1.3-.5-2.4-1.1-3.1-1.9-.7-.7-1.2-1.5-1.4-2.2-.2-.8-.3-1.4-.3-1.9,0-1,.2-1.9.6-2.7.4-.8,1-1.5,1.7-2,.7-.6,1.5-1.1,2.3-1.5.8-.4,1.7-.7,2.5-.9h0c-.7-.1-1.5-.2-2.5-.4-.9-.2-1.8-.5-2.6-.9-.8-.4-1.5-1.1-2-1.8-.5-.8-.8-1.7-.8-2.9s0-.5.1-1c0-.5.3-1,.6-1.7.3-.6.8-1.3,1.5-2,.7-.7,1.6-1.4,2.7-2-.3-.3-.7-.6-1.1-.9-.4-.4-.8-.8-1.1-1.2-.3-.5-.6-1-.9-1.6-.2-.6-.3-1.3-.3-2.1s.2-2.2.7-3.2c.5-1,1.2-1.9,2.1-2.7.9-.8,2-1.4,3.3-1.8,1.3-.4,2.8-.7,4.4-.7s3,.3,4.2.8c1.2.5,2.2,1.1,3,1.8.9-.8,1.7-1.5,2.4-1.9.7-.4,1.7-.6,2.9-.6s1.8.3,2.3.8c.5.5.8,1.2.8,2.1s-.2,1.3-.6,1.7c-.4.4-1,.6-1.7.6s-.9,0-1.2-.2c-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.3-.7,0-.2,0-.4-.1-.6,0-.5-.1-.9-.2-1.2,0-.3-.3-.4-.7-.4s-.5,0-.8.2c-.3.2-.8.5-1.5,1,.4.5.9,1.1,1.4,1.9.5.8.8,1.9.8,3.5s-.2,1.8-.5,2.7c-.3.9-.9,1.7-1.7,2.5-.8.7-1.8,1.3-3,1.8-1.2.5-2.7.7-4.5.7s-2.7-.1-3.8-.4c-1.1-.3-2-.6-2.8-.9-1,.7-1.7,1.3-1.8,1.8-.2.5-.3,1-.3,1.4,0,.9.4,1.6,1.1,2.1.7.4,1.7.7,2.9.7h5.9c1.4,0,2.7.1,3.9.4M82.9,52.5c.2.8.5,1.5,1,2.2.5.7,1.2,1.2,2,1.7.9.4,2,.7,3.3.7s2-.2,3-.6c.9-.4,1.8-.9,2.5-1.6.7-.7,1.3-1.5,1.7-2.4.4-.9.6-1.9.6-3s-.2-2-.5-2.7c-.4-.7-.8-1.2-1.3-1.6-.5-.4-1.1-.7-1.8-.8-.6-.1-1.2-.2-1.8-.2h-5.6c-1.1.9-1.9,1.8-2.5,2.7-.6.9-.9,2.1-.9,3.5s0,1.4.3,2.2M90.7,32.2c.5-.2.9-.5,1.3-1s.6-1.2.8-2.2c.2-.9.3-2.2.3-3.7s0-2.1-.1-3c0-.9-.3-1.7-.5-2.4-.3-.7-.7-1.2-1.2-1.6-.5-.4-1.3-.6-2.3-.6s-1.6.2-2.2.6c-.6.4-1,.9-1.3,1.5-.3.6-.5,1.3-.6,2.2-.1.8-.2,1.6-.2,2.5,0,1.7.1,3.1.3,4.2.2,1,.5,1.8.9,2.4.4.5.8.9,1.4,1,.5.1,1.1.2,1.7.2s1.2,0,1.7-.2" />
                </g>
                <g id="letter-3" className='letters'>
                    <path d="M61.3,1.7v.8h2v38.4h-2v.8h10.5v-.8h-2V1.7h-8.5Z" />
                </g>
                <g id="letter-2" className='letters'>
                    <path d="M55.3,17.9v23h2v.8h-10.5v-.8h2v-22.2h-2v-.8h8.5Z" />
                </g>
                <g id="letter-1" className='letters'>
                    <path d="M10,17.9v3.9h.1c.2-.4.5-.8.9-1.3.4-.5.8-1,1.4-1.4.6-.5,1.3-.9,2.2-1.2.8-.3,1.9-.5,3-.5s2.3.1,3.2.4c.8.3,1.5.6,2.1,1.1.6.4,1,.9,1.3,1.4.3.5.7,1,.9,1.6.5-1,1.1-1.8,1.8-2.4.7-.6,1.3-1,2-1.3.7-.3,1.3-.5,1.9-.6.6,0,1.1-.1,1.5-.1,2,0,3.6.3,4.7.9,1.1.6,1.9,1.4,2.4,2.2.5.9.8,1.8.9,2.7,0,1,.1,1.8.1,2.4v15.1h1.9v.8h-10v-.8h1.5v-17.2c0-1.6-.3-2.7-.8-3.6-.6-.8-1.5-1.2-2.8-1.2s-.9.1-1.5.3c-.6.2-1.1.6-1.7,1-.5.4-1,1-1.4,1.7-.4.7-.6,1.6-.6,2.6v16.4h1.5v.8h-9.7v-.8h1.6v-17.6c0-1.6-.3-2.8-1-3.4-.7-.6-1.4-1-2.3-1-1.4,0-2.7.6-3.8,1.9-.3.4-.5.7-.8,1.1-.2.4-.4.8-.5,1.3-.1.5-.2,1.1-.3,1.7,0,.6,0,1.4,0,2.4v13.5h1.5v.8H1.7v-.8h1.9v-22.2h-1.9v-.8h8.4Z" />
                </g>
                <g id="dot-bottom" className='dot'>
                    <path d="M48.5,51c.9-.9,2-1.4,3.2-1.4s2.3.5,3.2,1.4c.9.9,1.4,2,1.4,3.3s-.5,2.4-1.4,3.3c-.9.9-2,1.4-3.2,1.4s-2.3-.5-3.2-1.4c-.9-.9-1.4-2-1.4-3.3s.5-2.4,1.4-3.3" />
                </g>
                <g id="dot-top" className='dot'>
                    <path d="M77.6,2.4c.9-.9,2-1.4,3.2-1.4s2.3.5,3.2,1.4c.9.9,1.4,2,1.4,3.3s-.5,2.4-1.4,3.3c-.9.9-2,1.4-3.2,1.4s-2.3-.5-3.2-1.4c-.9-.9-1.4-2-1.4-3.3s.5-2.4,1.4-3.3" />
                </g>
            </svg>
            <svg className='mini__logo' viewBox="0 0 44.3 60">
                <g id="mini-letter-1" className='mini-letters'>
                    <path d="M10,17.9v3.9h.1c.2-.4.5-.8.9-1.3.4-.5.8-1,1.4-1.4.6-.5,1.3-.9,2.2-1.2.8-.3,1.9-.5,3-.5s2.3.1,3.2.4c.8.3,1.5.6,2.1,1.1.6.4,1,.9,1.3,1.4.3.5.7,1,.9,1.6.5-1,1.1-1.8,1.8-2.4.7-.6,1.3-1,2-1.3.7-.3,1.3-.5,1.9-.6.6,0,1.1-.1,1.5-.1,2,0,3.6.3,4.7.9,1.1.6,1.9,1.4,2.4,2.2.5.9.8,1.8.9,2.7,0,1,.1,1.8.1,2.4v15.1h1.9v.8h-10v-.8h1.5v-17.2c0-1.6-.3-2.7-.8-3.6-.6-.8-1.5-1.2-2.8-1.2s-.9.1-1.5.3c-.6.2-1.1.6-1.7,1-.5.4-1,1-1.4,1.7-.4.7-.6,1.6-.6,2.6v16.4h1.5v.8h-9.7v-.8h1.6v-17.6c0-1.6-.3-2.8-1-3.4-.7-.6-1.4-1-2.3-1-1.4,0-2.7.6-3.8,1.9-.3.4-.5.7-.8,1.1-.2.4-.4.8-.5,1.3-.1.5-.2,1.1-.3,1.7,0,.6,0,1.4,0,2.4v13.5h1.5v.8H1.7v-.8h1.9v-22.2h-1.9v-.8h8.4Z" />
                </g>
                <g id="mini-dot-bottom" className='mini-dot'>
                    <path d="M2.3,50.3c.9-.9,2-1.4,3.2-1.4s2.3.5,3.2,1.4c.9.9,1.4,2,1.4,3.3s-.5,2.4-1.4,3.3c-.9.9-2,1.4-3.2,1.4s-2.3-.5-3.2-1.4c-.9-.9-1.4-2-1.4-3.3s.5-2.4,1.4-3.3" />
                </g>
                <g id="mini-dot-top" className='mini-dot'>
                    <path d="M35.5,2.7c.9-.9,2-1.4,3.2-1.4s2.3.5,3.2,1.4c.9.9,1.4,2,1.4,3.3s-.5,2.4-1.4,3.3c-.9.9-2,1.4-3.2,1.4s-2.3-.5-3.2-1.4c-.9-.9-1.4-2-1.4-3.3s.5-2.4,1.4-3.3" />
                </g>
            </svg>
        </div>
    );
}

export default Logo;


