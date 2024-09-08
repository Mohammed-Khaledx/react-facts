
import Header from "./components/header";
import Main from "./components/main";
import React from "react";

function Home() {

  const [lightMode, setLightMode] = React.useState(true)
    
  function changeMode() {
    setLightMode(prevMode => !prevMode)
  }

  return (
    <>
      <Header lightMode = {lightMode}  toggleLightMode={changeMode}/>
      <Main lightMode ={lightMode}/>
    </>
  );
}

export default Home;
