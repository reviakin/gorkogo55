import React from "react";
import { Card, Nav } from "react-bootstrap";

const searchHeader = props => {
  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#disabled">Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
};

export default searchHeader;
