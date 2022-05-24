import { Col, Row } from "react-bootstrap";

const MessageContent = ({ message }) => {
  return ( 
    <Row className='second-row'>
      <Col>
        <p className='post'>{message.content}</p>
      </Col>
    </Row>
   );
}
 
export default MessageContent;