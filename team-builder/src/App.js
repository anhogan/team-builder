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
      firstName: member.firstName,
      lastName: member.lastName,
      role: member.role,
      primaryStack: member.primaryStack
    }
    setTeamMember([...teamMember, newMember]);
  };

  const [editMember, setEditMember] = useState({
    firstName: '',
    lastName: '',
    role: '',
    primaryStack: ''
  });

  const membertoEdit = (member) => {
    const editMember = {
      id: member.id,
      firstName: member.firstName,
      lastName: member.lastName,
      role: member.role,
      primaryStack: member.primaryStack
    }
    setEditMember(editMember);
  };

  return (
    <div className="App">
      <TeamList 
        members={teamMember}
        membertoEdit={membertoEdit} />
      <Form 
        member={teamMember}
        addMember={addMember}
        editMember={editMember} />
    </div>
  );
}

export default App;
