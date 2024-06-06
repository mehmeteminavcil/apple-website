import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { rightImg, watchImg } from "../utils/index";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(".link", {
      y: 0,
      opacity: 1,

      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link ">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2 " />
            </p>
            <p className="link ">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2 " />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
