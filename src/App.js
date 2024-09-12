import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';



function App() {
  return (
    <section id="top">
      <NavBar />
      <div className="App">
        <About />
        <Contact />
      </div>
    </section>
  );
}

export default App;
