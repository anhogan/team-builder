import React, { useState } from 'react';
import TeamList from './TeamList';
import Form from './Form';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      firstName: 'Eric',
      lastName: 'Li',
      role: 'Engineering Manager',
      primaryStack: 'Python'
    }
  ]);

  const handleChange = (event) => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
  };

  return (
    <div className="App">
      <TeamList members={teamMember}/>
      <Form 
        teamMember={teamMember} 
        setTeamMember={setTeamMember} />
    </div>
  );
}

export default App;
