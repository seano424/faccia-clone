import { useEffect } from "react";

const useMouseOver = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseover", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleClick);
    };
  });
};

export default useMouseOver;