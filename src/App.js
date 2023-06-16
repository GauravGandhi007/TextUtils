import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
    
      <Navbar title="TextUtils" aboutText="About Text" />
      <div className="container mb-3">
      <TextForm heading="Enter the text to Analize below"/>
      </div>
    
    </>
  );
}

export default App;
