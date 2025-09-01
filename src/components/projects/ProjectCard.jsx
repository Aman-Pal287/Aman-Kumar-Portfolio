const ProjectCard = (props) => {
  const { image1, image2 } = props.image;
  console.log(image1, image2);

  return (
    <>
      <div className="relative group w-1/2 h-full hover:rounded-[50px] transition-all overflow-hidden  ">
        <img
          className="w-full transition-all group-hover:scale-105 h-full object-cover"
          src={image1}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/20">
          <h2 className="uppercase pt-2 px-5 text-6xl text-white border-white font-[font1] border-2 rounded-full ">
            Vior le project
          </h2>
        </div>
      </div>
      <div className="relative group w-1/2 h-full hover:rounded-[50px] transition-all overflow-hidden  ">
        <img
          className="w-full transition-all group-hover:scale-105 h-full object-cover"
          src={image2}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black/20">
          <h2 className="uppercase pt-2 px-5 text-6xl text-white border-white font-[font1] border-2 rounded-full ">
            Vior le project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
