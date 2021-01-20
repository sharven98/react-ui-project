import './App.css';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Testimonial from './components/testimonials';


function App() {
  return (
    <>
    <div className="container1" >
      <Navbar />
      <Intro />
    </div>
    <div className="container2" >
      <Testimonial />
    </div>


    </>

  );
}

export default App;
