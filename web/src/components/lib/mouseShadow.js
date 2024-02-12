import { useEffect, useRef } from "react";

const MouseShadowComponent = ({ context }) => {
  const shadowRef = useRef(null);
  useEffect(() => {
    const FollowMouseShadow = (shadowRef) => {
      const shadow = shadowRef.current;
      console.log(context);
      context?.addEventListener("mousemove", (e) => {
        shadow.style.left = e.pageX + "px";
        shadow.style.top = e.pageY + "px";
      });
    };
    FollowMouseShadow(shadowRef);

    return () => {
      context?.removeEventListener("mousemove", () => {});
    };
  }, [context]);

  return (
    <div
      className="absolute duration-100"
      style={{
        boxShadow: "0 0 80px 20px rgba(255, 0, 255, 0.4)",
      }}
      ref={shadowRef}
    ></div>
  );
};

export default MouseShadowComponent;
