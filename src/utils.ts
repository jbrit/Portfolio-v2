export function lerp(start: number, end: number, t: number) {
  return start + t * (end - start);
}

export function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

export function drawCursor(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.stroke();
}

export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

export const resizeCanvas = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.canvas.width = width;
  ctx.canvas.height = height;
};