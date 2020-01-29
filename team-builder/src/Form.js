import React, { useState } from 'react';

const Form = (props) => {
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    role: '',
    primaryStack: ''
  });

  const handleChange = event => {
    setMember({...member, [event.target.name]: event.target.value});
  };

  return (
    <div>
      <h3>Add a Team Member</h3>
      <form>
        <label>
          First Name: 
          <input
            type="text" 
            name="firstName"
            onChange={handleChange}></input>
        </label>
        <label>
          Last Name: 
          <input 
            type="text" 
            name="lastName"
            onChange={handleChange}></input>
        </label>
        <label>
          Role: 
          <input 
            type="text" 
            name="role"
            onChange={handleChange}></input>
        </label>
        <label>
          Primary Stack: 
          <input 
            type="text" 
            name="primaryStack"
            onChange={handleChange}></input>
        </label>
        <button>Add to Team</button>
      </form>
    </div>
  )
};

export default Form;