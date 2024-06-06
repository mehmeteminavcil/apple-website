import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      scale: 2,
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to("#gameVideo", {
      scrollTrigger: {
        trigger: "#gameVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="w-full my-20 flex-center">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip. <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                id="gameVideo"
                className="pointer-events-none "
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-3 mb-5 font-semibold text-center text-gray">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container">
            <div className="flex flex-col justify-center flex-1 gap-4">
              <p className="hiw-text g_fadeIn">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our{" "}
                <span className="text-white">
                  best graphic performance by far
                </span>
                .
              </p>

              <p className="hiw-text g_fadeIn">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive
                </span>
                , with incredibly detailed environments and characters.
              </p>
            </div>

            <div className="flex flex-col justify-center flex-1 g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
