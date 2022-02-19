import './App.css';
import React, { useState } from "react";

import Formulario from "./Formulario/Formulario";

function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  }


  return (
    <div className="App">
      <Formulario addProfile={addProfile}/>
    </div>
  );
}

export default App;