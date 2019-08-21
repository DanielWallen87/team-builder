import React, { useState } from 'react';

import data from "./data";

// In this case, imports only need to go on app since it's returning all the information passed up through props.
import Team from "./Components/Team";
import TeamForm from "./Components/TeamForm"; 

import './App.css';

function App() {
  const [team, setTeam] = useState(data); // sets the current state of "team" array to the info in data.js

  const addNewMember = member => { // creates new team member (member) and adds to existing team (...team)
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
          <Team team={team} />
          {/* Renders components and user inputs */}
      </header>
    </div>
  );
}

export default App;
