import autoAnimate from "@formkit/auto-animate";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "./useClickOutside";

const useCustomAutoAnimate = ({
  defaultVisible = true,
}: {
  defaultVisible?: boolean;
}) => {
  const [visible, setVisible] = useState<boolean>(defaultVisible);
  const parent = useRef(null);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };
  useClickOutside(parent, () => {
    if (visible) {
      setVisible(false);
    }
  });

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, {
        duration: 150,
        easing: "linear",
        disrespectUserMotionPreference: false,
      });
  }, [parent]);
  return { visible, setVisible, parent, handleClick };
};

export default useCustomAutoAnimate;
