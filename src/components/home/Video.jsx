const Video = () => {
  return (
    <>
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src="video.mp4"
      ></video>
    </>
  );
};

export default Video;
