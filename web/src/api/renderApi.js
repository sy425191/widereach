const RenderVideo = async (videoId) => {
  const response = await fetch(`http://localhost:3001/render/${videoId}`);
  return response.json();
};
export default RenderVideo;
