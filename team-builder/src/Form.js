import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Form = (props) => {
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    role: '',
    primaryStack: ''
  });

  const handleChange = (event) => {
    console.log(member);
    setMember({...member, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMember(member);
    console.log(member);
    setMember({firstName: '', lastName: '', role: '', primaryStack: ''});
  };

  return (
    <div>
      <h4>Add a Team Member</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text" 
            name="firstName"
            onChange={handleChange}
            value={member.firstName} />
        </div>
        <div className="form-input-container">
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName"
            type="text" 
            name="lastName"
            onChange={handleChange}
            value={member.lastName} />
        </div>
        <div className="form-input-container">
          <label htmlFor="role">Role</label>
          <input 
            id="role"
            type="text" 
            name="role"
            onChange={handleChange}
            value={member.role} />
        </div>
        <div className="form-input-container">
          <label htmlFor="primaryStack">Primary Stack</label>
          <input 
            id="primaryStack"
            type="text" 
            name="primaryStack"
            onChange={handleChange}
            value={member.primaryStack} />
        </div>
        <Button>Add to Team</Button>
      </form>
    </div>
  )
};

export default Form;