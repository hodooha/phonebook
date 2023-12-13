import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PhoneCard = ({item}) => {
  return (
    <div>
      <Row className="phone-card">
        <Col lg={2}>
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default PhoneCard;
