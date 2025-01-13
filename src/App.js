import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/home/main_page";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/icon.css";
import "./assets/css/main.css";
import "./assets/css/trainer.css";
import "./assets/css/curriculum.css";
import "./assets/css/facility.css";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AnapichPage from "./page/anapich/anapichPage";
import ClassPage from "./page/class/classPage";
import SpeechPage from "./components/Class/speechPage";
import LocatoinPage from "./page/anapich/locationPage";
import HostPage from "./components/Class/hostPage";
import ModelPage from "./components/Class/modelPage";
import KidsPage from "./components/Class/kidsPage";
import BeautyPage from "./components/Class/BeautyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/anapich" element={<AnapichPage />} />
        <Route path="/location" element={<LocatoinPage />} />

        <Route path="/class" element={<ClassPage />} />


        <Route path="/class/speech" element={<SpeechPage />} />
        <Route path="/class/speech/1" element={<SpeechPage />} />
        <Route path="/class/speech/2" element={<SpeechPage />} />
        <Route path="/class/speech/3" element={<SpeechPage />} />
        <Route path="/class/speech/4" element={<SpeechPage />} />
        <Route path="/class/speech/5" element={<SpeechPage />} />
        <Route path="/class/speech/6" element={<SpeechPage />} />
        <Route path="/class/speech/7" element={<SpeechPage />} />
        <Route path="/class/speech/8" element={<SpeechPage />} />
        <Route path="/class/speech/9" element={<SpeechPage />} />

        <Route path="/class/model" element={<ModelPage />} />
        <Route path="/class/model/1" element={<ModelPage />} />
        <Route path="/class/model/2" element={<ModelPage />} />
        <Route path="/class/model/3" element={<ModelPage />} />
        <Route path="/class/model/4" element={<ModelPage />} />
        <Route path="/class/model/5" element={<ModelPage />} />

        <Route path="/class/kids" element={<KidsPage />} />
        <Route path="/class/kids/1" element={<KidsPage />} />
        <Route path="/class/kids/2" element={<KidsPage />} />
        <Route path="/class/kids/3" element={<KidsPage />} />

        <Route path="/class/host" element={<HostPage />} />

        <Route path="/class/beauty" element={<BeautyPage />} />
        <Route path="/class/beauty/1" element={<BeautyPage />} />
        <Route path="/class/beauty/2" element={<BeautyPage />} />
        <Route path="/class/beauty/3" element={<BeautyPage />} />

        <Route path="/trainer" element={<MainPage />} />
        <Route path="/facility" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;
