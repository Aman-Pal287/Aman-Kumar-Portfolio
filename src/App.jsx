import FullScreenNav from "./components/navigation/FullScreenNav";
import Navbar from "./components/navigation/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className=" text-white">
      <Navbar />
      {/* <FullScreenNav /> */}
      <Mainroutes />
    </div>
  );
};

export default App;
