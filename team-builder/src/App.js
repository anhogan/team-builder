import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({
    firstName: '',
    lastName: '',
    role: '',
    primaryStack: ''
  });

  // const [teamList, setTeamList] = useState([]);

  // const handleChange = (event) => {
  //   setTeamMember({...teamMember, [event.target.name]: event.target.value});
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
  // };

  // const addToTeamList = member => {
  //   setTeamList([...teamList, member])
  // };

  return (
    <div className="App">
      <Form 
        teamMember={teamMember} 
        setTeamMember={setTeamMember} />
    </div>
  );
}

export default App;
