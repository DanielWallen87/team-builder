import React, { useState } from 'react';

import data from "./data";

import Team from "./Components/Team";
import TeamForm from "./Components/TeamForm";

import './App.css';

function App() {
  const [team, setTeam] = useState(data);

  const addNewMember = member => {
    setTeam([...team, member])
  }

  // if (!team) {
  //   return null;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Justice League Sign-Up Form</h1>
          <TeamForm addNewMember={addNewMember} />
          {(!team) ? null : <Team team={team} />}
      </header>
    </div>
  );
}

export default App;
