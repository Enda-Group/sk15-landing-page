import React from "react";
import "./styles.scss";

const BookASlot = () => {
  return (
    <div className="rotating-button-container p-2">
      {/* Circle with rotating text */}
      <div className="rotating-circle animate-spin-slow">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <defs>
            <path
              id="circlePath"
              d="M60,10a50,50 0 1,1 0,100a50,50 0 1,1 0,-100"
            />
          </defs>
          <text fill="black" fontSize="1rem" fontFamily="Poppins" letterSpacing="0.5">
            <textPath xlinkHref="#circlePath">
              Book A Slot • Book A Slot •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Arrow inside with a link */}
      <div className="rotating-arrow">
        <a
          href="https://sitikhadijah.com/products/laman-khadijah-admission-with-sewing-experience"
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-link"
        >
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default BookASlot;
