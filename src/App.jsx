
import { DisplaySection } from "./components/DisplaySection";
import Jumbbotron from "./components/Jumbbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbbotron />
      <SoundSection />
      <DisplaySection />
    </div>
  );
}
export default App;
