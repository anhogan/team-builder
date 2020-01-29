import React from 'react';

const TeamList = (props) => {
  return (
    <div>
      <h3>Team Members</h3>
      {props.members.map(member => (
        <div key={member.id}>
          <h3>{member.firstName} {member.lastName}</h3>
          <h4>Role: {member.role}</h4>
          <p>Primary Stack: {member.primaryStack}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  )
};

export default TeamList;