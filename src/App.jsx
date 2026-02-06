import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Rahul Kanyal
      </footer>
    </div>
  );
}

export default App;