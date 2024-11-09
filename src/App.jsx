import { AarogyamFeatures } from "./components/AarogyamFeatures";
import {Footer} from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Problems } from "./components/Problems";
import { TeamSection } from "./components/TeamSection";
import { TransformSection } from "./components/TransformSection";
function App() {
  //color palette
  const colors = {
    primary: "#2C5530", // Deep forest green
    secondary: "#8B4513", // Saddle brown
    accent: "#DAA520", // Golden rod
    background: "#FAF3E0", // Light khaki
    light: "#F5DEB3", // Wheat
    dark: "#1C2C1B", // Dark forest
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      {/* Hero Section */}
      <HeroSection />

      <AarogyamFeatures/>

      <Problems/>

      <TeamSection/>

      <TransformSection/>

      <Footer/>
    </div>
  );
}

export default App
