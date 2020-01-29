import React, { useState } from 'react';

const Form = (props) => {
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    role: '',
    primaryStack: ''
  });

  const handleChange = (event) => {
    setMember({...member, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMember(member);
    setMember({firstName: '', lastName: '', role: '', primaryStack: ''});
  };

  return (
    <div>
      <h2>Add a Team Member</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text" 
            name="firstName"
            onChange={handleChange}
            value={member.firstName} />
        <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName"
            type="text" 
            name="lastName"
            onChange={handleChange}
            value={member.lastName} />
        <label htmlFor="role">Role</label>
          <input 
            id="role"
            type="text" 
            name="role"
            onChange={handleChange}
            value={member.role} />
        <label htmlFor="primaryStack">Primary Stack</label>
          <input 
            id="primaryStack"
            type="text" 
            name="primaryStack"
            onChange={handleChange}
            value={member.primaryStack} />
        <button>Add to Team</button>
      </form>
    </div>
  )
};

export default Form;