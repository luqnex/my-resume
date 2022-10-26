import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window) {
      const windowMatchMedia = window.matchMedia(
        "screen and (max-width:750px)"
      );

      setIsMobile(windowMatchMedia.matches);

      /* if (windowMatchMedia.matches) {
      }

      window.addEventListener("resize", () => {
        if (window.innerWidth < 450) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }); */
    }
  }, []);

  return [isMobile];
};
