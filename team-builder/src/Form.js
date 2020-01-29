import React, { useState } from 'react';

const Form = (props) => {
  const [member] = useState();

  const saveMember = (event) => {
    event.preventDefault();
    props.setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
    const addToTeamList = props.addToTeamList;
    addToTeamList(member);
  }

  const handleChange = (event) => {
    props.setTeamMember({...props.teamMember, [event.target.name]: event.target.value});
  };

  // if (!member) {
  //   return <div>Team Members Loading...</div>
  // }

  return (
    <div>
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
      </form>
    </div>
  )
};

export default Form;