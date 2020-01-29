import React, { useState } from 'react';

const Form = (props) => {
  const [member] = useState();

  const saveMember = (event) => {
    event.preventDefault();
    props.setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
    const addToTeamList = props.addToTeamList;
    addToTeamList(member);
  }

  // if (!member) {
  //   return <div>Team Members Loading...</div>
  // }

  return (
    <div>
      <form onSubmit={saveMember}>
        <label>
          First Name: 
          <input type="text" name="firstName"></input>
        </label>
        <label>
          Last Name: 
          <input type="text" name="lastName"></input>
        </label>
        <label>
          Role: 
          <input type="text" name="role"></input>
        </label>
        <label>
          Primary Stack: 
          <input type="text" name="primaryStack"></input>
        </label>
      </form>
    </div>
  )
};

export default Form;