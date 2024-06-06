import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import ModelSection from "./components/ModelSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <ModelSection />
    </main>
  );
}

export default App;
