import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);

  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.5,
      scale: 1.2,
    });
  }, [currentPath]);

  return (
    <div>
      <section
        className="page-transition-animation h-screen w-full fixed top-0 z-10"
        ref={stairParentRef}
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </section>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
