import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      ...options,
    });

    // Nếu DOM thay đổi (optional)
    AOS.refresh();
  }, [options]);
};

export default useAOS;
