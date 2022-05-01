import { Container, Row, Col, Image } from "react-bootstrap";

const NewsCard = () => {
  return ( 
    <Container className='d-flex justify-content-center news-card-wrapper'>
      <Row className='me-2'>
        <Col className='author_additional_info p-0'>
          <Image className='author-avatar'/>
          <p className='news-time mt-2'>time</p>
        </Col>
      </Row>
      <Row>
        <Col className='author-info'>
          <p className='author-name'>Author's name</p>
          <p className='author-post-in-social'>Author's post in social media</p>
        </Col>
        <Col className='icons'>
          
          <i class="bi bi-star"></i>
        </Col>
      </Row>
    </Container>
   );
}
 
export default NewsCard;