import { React } from 'react';
import { Card, Col } from 'react-bootstrap';

function QuestionCards(props) {
  return (
    <Col>
      <Card className="bg-light mx-3 my-2">
        <Card.Body className="mx-3">
          <h4 className="text-center">{props.question}</h4>
          <ul>
            <button className="btn btn-primary m-1">{props.answers[0]}</button>
            <br />
            <button className="btn btn-primary m-1">{props.answers[1]}</button>
            <br />
            <button className="btn btn-primary m-1">{props.answers[2]}</button>
            <br />
            <button className="btn btn-primary m-1">{props.answers[3]}</button>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default QuestionCards;
