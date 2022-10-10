import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import Fixed from "../components/Fixed";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  const trigger1 = useRef();
  const trigger2 = useRef();
  const rootDiv = useRef();

  /* useEffect(() => {
      const s = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
      
      const tl1 = gsap.timeline()
        .to(".animDiv1", { scale: 1 });
      const tl2 = gsap.timeline()
        .to(".animDiv2", { scale: 1 });

      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl1,
        start: () => "top top",
        end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: trigger2.current,
        animation: tl2,
        start: () => "top top",
        end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
        scrub: true,
      });
    return () => {
      s.kill();
      ScrollTrigger.killAll();
    };
  }, []); */

  /* useLayoutEffect(() => {
      const s = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
      
      const tl1 = gsap.timeline()
        .to(".animDiv1", { scale: 1 });
      const tl2 = gsap.timeline()
        .to(".animDiv2", { scale: 1 });

      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl1,
        start: () => "top top",
        end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: trigger2.current,
        animation: tl2,
        start: () => "top top",
        end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
        scrub: true,
      });
    return () => {
      s.kill();
      ScrollTrigger.killAll();
    };
  }, []); */

  /* useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1,
        smoothTouch: 0.1,
      });

      const tl1 = gsap.timeline()
        .to(".animDiv1", { scale: 1 });
      const tl2 = gsap.timeline()
        .to(".animDiv2", { scale: 1 });

      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl1,
        start: () => "top top",
        end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: trigger2.current,
        animation: tl2,
        start: () => "top top",
        end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []); */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1,
        smoothTouch: 0.1,
      });

      const tl1 = gsap.timeline()
        .to(".animDiv1", { scale: 1 });
      const tl2 = gsap.timeline()
        .to(".animDiv2", { scale: 1 });

      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl1,
        start: () => "top top",
        end: () => `+=${trigger1.current.offsetHeight * 0.5}`,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: trigger2.current,
        animation: tl2,
        start: () => "top top",
        end: () => `+=${trigger2.current.offsetHeight * 0.5}`,
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>
            <div className=" triggers relative z-50 w-fit mx-auto">
              <div
                ref={trigger1}
                className=" text-blue-400 font-bold w-10 h-[200vh] bg-[#FFC000] "
              ></div>
              <div
                ref={trigger2}
                className=" text-blue-400 font-bold w-10 h-[200vh] bg-green-500 "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full h-screen inset-0">
        <div id="animDiv1" className="animDiv1 absolute inset-0 z-10 w-full h-screen bg-blue-500 scale-[30%]"></div>
        <div id="animDiv2" className="animDiv2 absolute inset-0 z-20 w-full h-screen bg-red-500 scale-0"></div>
      </div>
      {/* <Fixed /> */}
    </>
    
  );
};

export default Home;
