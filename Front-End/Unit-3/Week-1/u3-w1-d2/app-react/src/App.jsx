import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
    </>
  );
}

export default App;
