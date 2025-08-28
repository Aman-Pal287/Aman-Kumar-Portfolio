import "./HomeHeroText.scss";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <main className="homeHeroText-main ">
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[17vh]">
        L'étincelle
      </div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[17vh]">
        qui
        <div className="h-[7vw] w-[15vw] rounded-[8vw] overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[17vh]">
        la créativité
      </div>
    </main>
  );
};

export default HomeHeroText;
