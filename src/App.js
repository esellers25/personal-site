import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';



function App() {
  return (
    <section id="top">
      <NavBar />
      <div className="App">
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}

export default App;
