import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>    
      <ButtonComponent label='i m crazy' />
      <ImageComponent srcText='http://placecats.com/300/300' altText='cat playing mouse'/>
      <ImageComponent srcText='http://placecats.com/600/300' altText='cat playing bog'/>
 
      <ButtonComponent label='You are a Mad Bro' />

    </>
  );
}

export default App;
