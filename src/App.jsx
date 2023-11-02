import './App.css'
import Add from './pages/Add';
import Detail from './pages/Detail';
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Category from './pages/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />          
          <Route path="/detail/:id" element={<Detail />} />        
          <Route path="/work" element={<Category category="work" />} />
          <Route path="/family" element={<Category category="family" />} />
          <Route path="/personal" element={<Category category="personal" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

