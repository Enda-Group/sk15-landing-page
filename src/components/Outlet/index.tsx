import React, { useEffect, useRef } from "react";
import anime from "animejs"; // Ensure you install anime.js: `npm install animejs`

const Outlet = () => {
  const countRef58 = useRef<HTMLDivElement>(null);
  const countRef90 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const countup = (el: HTMLElement, target: number) => {
      const data = { count: 0 };
      anime({
        targets: data,
        count: [0, target],
        duration: 6000,
        round: 1,
        delay: 200,
        easing: "easeOutCubic",
        update: () => {
          el.innerText = data.count.toLocaleString();
        },
      });
    };

    const makeCountup = (el: HTMLElement) => {
      const target = parseInt(el.textContent || "0", 10);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countup(el, target);
            observer.unobserve(el);
          }
        });
      });

      observer.observe(el);
    };

    if (countRef58.current) {
      makeCountup(countRef58.current);
    }
    if (countRef90.current) {
      makeCountup(countRef90.current);
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 justify-center items-center">
        <div ref={countRef58} className="font-poppins font-bold text-[1.2rem] text-right">
          58
        </div>
        <h3 className="font-poppins text-[0.6rem]">Outlets</h3>
      </div>

      <div className="grid grid-cols-2 justify-center items-center">
        <div ref={countRef90} className="font-poppins font-bold text-[1.2rem] text-right">
          90
        </div>
        <h3 className="font-poppins text-[0.6rem]">Srikandi</h3>
      </div>
    </div>
  );
};

export default Outlet;
