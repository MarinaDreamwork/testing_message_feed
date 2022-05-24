import { Col } from "react-bootstrap";

const SourceAuthor = ({ message }) => {
  return ( 
    <Col sm={4} className='box2-1 p-0'>
      <p className='post-text-author mb-0 pb-2'>{message.author}</p>
      <p className='post-text-social mb-0'>{message.channel}</p>
    </Col>
  );
}
 
export default SourceAuthor;