import NetHeader from "./Components/NetHeader";
import NetFooter from "./Components/NetFooter";
import NetFilms from "./Components/NetFilms";
import NetNavBar from "./Components/NetNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = function() {
  return (
    <BrowserRouter>
      <NetNavBar />
      <NetHeader/>
      <Routes>
        <Route path='/Movies' element={<NetFilms/>} />
      </Routes>
      <NetFooter/>
      
    </BrowserRouter>
  );
}

export default App;
