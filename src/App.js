import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      {/* <NavBar ></NavBar> */}
      <NavBar title="Text Analyzer" aboutText="About Us"></NavBar>
      <div className="container">
        <TextForm heading="Enter your Text" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
