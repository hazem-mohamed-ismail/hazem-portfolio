import { useEffect, useState } from "react";
import "./ToTopButton.css";
function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 300);
    });
  }, []);

  return (
    <div
      className="position-fixed bottom-0 end-0 mb-5 me-4"
      style={{ zIndex: 1000 }}
    >
      <button
        className={`to-top-button  ${isVisible ? "show-btn" : ""} `}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          fill="currentColor"
          viewBox="0 0 24 24"
          transform="rotate(180)"
        >
          <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
        </svg>
      </button>
    </div>
  );
}

export default ToTopButton;
