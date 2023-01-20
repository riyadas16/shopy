import Home from "./Redux/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Aboutus from "./Redux/Aboutus";
import Login from "./Redux/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Monster from "./Components/Monster";
function App() {
  return (
    <div className="App">
       <BrowserRouter> 
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/aboutus' element={ <Aboutus />}></Route>
          <Route path='*' element={ <div>404 Page Not Found</div>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
        </Routes>
      </BrowserRouter> 
      {/* <Monster/> */}

     
    </div>
  );
}

export default App;
