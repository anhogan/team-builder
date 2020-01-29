import React, { useState } from 'react';
import TeamList from './TeamList';

const Form = (props) => {
  const [member] = useState();
  const [teamList, setTeamList] = useState([]);

  const addToTeamList = member => {
    setTeamList([...teamList, member])
  };

  const saveMember = (event) => {
    event.preventDefault();
    props.setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
    const addToTeamList = addToTeamList();
    addToTeamList(member);
  };

  const handleChange = (event) => {
    props.setTeamMember({...props.teamMember, [event.target.name]: event.target.value});
  };

  return (
    <div>
      <TeamList members={teamList} />
      <h3>Add a Team Member</h3>
      <form onSubmit={saveMember}>
        <label>
          First Name: 
          <input
            type="text" 
            name="firstName"
            onChange={event => handleChange(event)}></input>
        </label>
        <label>
          Last Name: 
          <input 
            type="text" 
            name="lastName"
            onChange={event => handleChange(event)}></input>
        </label>
        <label>
          Role: 
          <input 
            type="text" 
            name="role"
            onChange={event => handleChange(event)}></input>
        </label>
        <label>
          Primary Stack: 
          <input 
            type="text" 
            name="primaryStack"
            onChange={event => handleChange(event)}></input>
        </label>
        <button>Add to Team</button>
      </form>
    </div>
  )
};

export default Form;