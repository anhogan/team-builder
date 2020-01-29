import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row } from 'reactstrap'

const TeamList = (props) => {
  return (
    <div>
      <h2>Team Members</h2>
      <Row>
      <Col sm="12">
        {props.members.map(member => (
          <Card key={member.id}>
            <CardTitle>{member.firstName} {member.lastName}</CardTitle>
            <CardSubtitle>Role: {member.role}</CardSubtitle>
            <CardText>Primary Stack: {member.primaryStack}</CardText>
            <Button>Edit</Button>
          </Card>
        ))}
      </Col>
      </Row>
    </div>
  )
};

export default TeamList;