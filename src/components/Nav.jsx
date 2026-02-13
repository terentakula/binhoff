import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(()=> {
    const tl = gsap.timeline()
    if(isMenuOpen){
      tl.to(".wrapper-list", {
        clipPath: "inset(0% 0% 0% 0% round 0%)",
        duration:1
      }),
      tl.to(".list li", {
        opacity:1,
        stagger:0.2
      }),
      tl.to(".list-btn", {
        opacity:1,
      })
    } else {
      tl.to(".wrapper-list", {
        clipPath: "inset(0% 0% 100% 0% round 0%)",
        duration:1
      }),
      tl.to(".list li", {
        opacity:0,
        stagger:0.3
      }),
      tl.to(".list-btn", {
        opacity:0,
      })
    }
  },[isMenuOpen])

  return (
    <>
      <nav className="fixed bg-neutral-50 w-full flex items-center justify-between py-6 px-10 border-b border-gray-300 z-30">
        <div className="text-2xl font-bold relative z-50">Binhoff</div>


        <div className="wrapper-list bg-neutral-400 fixed w-full h-screen top-0 left-0 flex items-center justify-center gap-4 sm:gap-x-40">
          <ul className="list flex flex-col items-center gap-10 text-2xl sm:text-6xl font-medium [&>*]:cursor-pointer">
            <li className="opacity-0">Location</li>
            <li className="opacity-0">About</li>
            <li className="opacity-0">Contact</li>
          </ul>

          <button className="list-btn opacity-0 font-bold border border-gray-300 py-3 px-8 rounded-full">
            sign up
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="font-bold border border-gray-300 py-3 px-8 rounded-full z-50"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>
    </>
  );
}

export default Nav;
