import React from "react";
import Header from "./Components/Header";
import Meme from './Components/Meme'
import Img from './troll-face.png'

function App() {
  return (
    <div className="App">
      <Header
        navLogo={Img}
        title="Meme Generator"
        project="React Cource - Project 3" 
      />
      <Meme/>
    </div>
  );
}

export default App;
