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
    },
    {
      id: 2,
      firstName: 'Nate',
      lastName: 'Collins',
      role: 'Senior Software Engineer',
      primaryStack: 'Ruby'
    },
    {
      id: 3,
      firstName: 'Amanda',
      lastName: 'Hogan',
      role: 'Software Engineer',
      primaryStack: 'React'
    }
  ]);

  const addMember = (member) => {
    const newMember = {
      id: Date.now(),
      firstName: '',
      lastName: '',
      role: '',
      primaryStack: ''
    }
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <TeamList members={teamMember}/>
      <Form 
        addMember={addMember} />
    </div>
  );
}

export default App;
