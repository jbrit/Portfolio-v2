import { gsap } from "gsap";
import React, { useEffect, VFC } from "react";
import { clearCanvas, drawCursor, lerp, resizeCanvas } from "../utils";

const Mouse: VFC = () => {
  // set the starting position of the cursor outside of the screen
  let clientXRef = React.useRef(-10);
  let clientYRef = React.useRef(-10);
  let lastXRef = React.useRef(-10);
  let lastYRef = React.useRef(-10);
  let ballXRef = React.useRef(-10);
  let ballYRef = React.useRef(-10);
  const innerCursor = React.useRef<HTMLDivElement>(null);
  const canvas = React.useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvas.current!.getContext("2d");
    const handleResize = () =>
      resizeCanvas(ctx!, window.innerWidth, window.innerHeight);
    window.addEventListener("resize", handleResize);
    const initCursor = () => {
      canvas.current!.width = window.innerWidth;
      canvas.current!.height = window.innerHeight;
      // add listener to track the current mouse position
      document.addEventListener("mousemove", (e) => {
        clientXRef.current = e.clientX;
        clientYRef.current = e.clientY;
      });
      const render = () => {
        const interPolated = [
          lerp(lastXRef.current, clientXRef.current, 0.1),
          lerp(lastYRef.current, clientYRef.current, 0.1),
          lerp(ballXRef.current, clientXRef.current, 0.075),
          lerp(ballYRef.current, clientYRef.current, 0.075),
        ];
        if (innerCursor.current)
          gsap.set(innerCursor.current, {
            x: interPolated[0],
            y: interPolated[1],
          });
        clearCanvas(ctx!);
        drawCursor(ctx!, interPolated[2], interPolated[3], 20);
        lastXRef.current = interPolated[0];
        lastYRef.current = interPolated[1];
        ballXRef.current = interPolated[2];
        ballYRef.current = interPolated[3];
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div ref={innerCursor} className="cursor cursor--small"></div>
      <canvas ref={canvas} className="cursor cursor--canvas"></canvas>
    </>
  );
};

export default Mouse;
