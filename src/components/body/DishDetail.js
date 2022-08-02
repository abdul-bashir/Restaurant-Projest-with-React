import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import dateFormat from "dateformat"; 
const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            {props.dish.description}
            </CardText>
            <CardText>
            {props.dish.price}/-
          </CardText>
        </CardBody>
      </Card>
      <hr />
      <LoadComments comments={props.dish.comments} />
    </div>
  );
};
export default DishDetail;
