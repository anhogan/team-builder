import React from 'react';

const TeamList = (props) => {
  return (
    <div>
      <h3>Team Members</h3>
      {props.members.map(member => (
        <span>{member.firstName}</span>
        // <span>{member.lastName}</span>
        // <span>{member.role}</span>
        // <span>{member.primaryStack}</span>
      ))}
      <button>Edit</button>
    </div>
  )
};

export default TeamList;