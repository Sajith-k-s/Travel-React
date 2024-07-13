
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Explore from './Components/Explore';
import Services from './Components/Services';
import Destination from './Components/Destination';
import Discount from './Components/Discount';
import Footer from './Components/Footer';



function App() {

  return (
   <div>
    <Navbar/>
    <Explore/>
    <Services/>
    <Destination/>
    <Discount/>
    <Footer/>
    </div>
  );
}

export default App;
