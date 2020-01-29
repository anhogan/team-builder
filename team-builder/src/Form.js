import React, { useState } from 'react';

const Form = (props) => {
  const [member] = useState();

  const saveMember = (event) => {
    event.preventDefault();
    props.setTeamMember({firstName: '', lastName: '', role: '', primaryStack: ''});
    const addToTeamList = props.addToTeamList;
    addToTeamList(member);
  }

  if (!member) {
    return <div>Team Members Loading...</div>
  }

  return (
    <div>
      <form onSubmit={saveMember}>
        <label>
          <input type="text" name="firstName" value={props.teamMember.firstName}></input>
        </label>
        <label>
          <input type="text" name="lastName" value={props.teamMember.lastName}></input>
        </label>
        <label>
          <input type="text" name="role" value={props.teamMember.role}></input>
        </label>
        <label>
          <input type="text" name="primaryStack" value={props.teamMember.primaryStack}></input>
        </label>
      </form>
    </div>
  )
};

export default Form;