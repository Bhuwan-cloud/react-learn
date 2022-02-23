import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <NavBar ></NavBar> */}
      <NavBar title="Text Utils" aboutText="About Us"></NavBar>
      <div className="container">
        <TextForm heading="Enter your Text" />
      </div>
    </>
  );
}

export default App;
