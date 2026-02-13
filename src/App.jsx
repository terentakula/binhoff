import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Property from "./components/Property";
import Feedback from "./components/Feedback";
import Mission from "./components/Mission";
import News from "./components/News";
import Opportunity from "./components/Opportunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, CustomEase);

const animationSettings = {
  toggleActions: "play none none reverse",
  start: "top center",
  end: "bottom bottom",
  scrub: false,
};

function App() {
  useGSAP(() => {
    gsap.from(".img-container", {
      xPercent: 200,
      duration: 2,
      scrollTrigger: {
        trigger: ".img-container",
        // ...animationSettings,
      },
    });

    gsap.utils.toArray(".img-container img").forEach((img, index) => {
      gsap.fromTo(
        img,
        {
          opacity: 0,
          scaleY: 1 * index + 1,
          translateY: 0,
        },
        {
          opacity:1,
          scaleY: 1,
          translateY: (index + 1) % 2 == 0 ? 15 * index + 1 : 0,
          duration: 2.5,
          stagger: 3,
          // scrollTrigger: {
          //   markers: true,
          //   trigger: ".img-container",
          //   toggleActions: "play none none play ",
          //   start: "top 90%",
          //   end: "bottom bottom",
          // },
        }
      );
    });

    gsap.from(".text-content >*", {
      opacity: 0,
      y: 300,
      duration: 2,
      scrollTrigger: {
        trigger: ".text-content",
        ...animationSettings,
      },
    });

    gsap.from(".swiper-container-wrapper", {
      xPercent: 100,
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".swiper-container-wrapper",
        ...animationSettings,
      },
    });

    gsap.from(".bg-text", {
      y: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".bg-text",
        ...animationSettings,
      },
    });

    gsap.from(".article", {
      opacity: 0,
      y: 100,
      stagger: {
        amount: 2,
      },
      duration: 2,
      scrollTrigger: {
        trigger: ".article",
        ...animationSettings,
      },
    });

    gsap.from(".box", {
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".box",
        ...animationSettings,
      },
    });
  }, { scope: document.body });

  return (
    <>
      <Nav />
      <Welcome />
      <Property />
      <Feedback />
      <Mission />
      <News />
      <Opportunity />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
