import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <section className="home-section-1">
        <Video />
      </section>

      <section className="home-section-2 ">
        <HomeHeroText />
        <HomeBottomText />
      </section>
    </div>
  );
};

export default Home;
