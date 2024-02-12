const SyncVideoCanvas = (video, canvas) => {
  const ctx = canvas.getContext("2d");

  const draw = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  video.addEventListener("play", () => {
    const loop = () => {
      if (!video.paused && !video.ended) {
        draw();
        requestAnimationFrame(loop);
      }
    };
    loop();
  });
};

export { SyncVideoCanvas };
