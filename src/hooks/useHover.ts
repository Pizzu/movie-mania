import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return { ref, hover };
};
