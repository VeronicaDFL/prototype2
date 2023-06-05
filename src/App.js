import { BrowserRouter,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
