import { Col, Container, Row } from 'react-bootstrap';
import  path  from '../images/iconssvg.svg';
import UserAvatar from '../images/user-avatar.png';

const Layout = ({ message }) => {
  console.log('message', message);

  const dateFormat = () => {
    const date = new Date(message.date);
    let dateHours = date.getHours();

    let dateMinutes = date.getMinutes();
    if(dateMinutes < 10) {
      dateMinutes = `0` + dateMinutes;
    }
    return `${dateHours}:${dateMinutes}`;
  }

  return ( 
    <Container className="wrapper-container d-flex flex-column justify-content-center">
      <div className='wrapper-main d-flex'>
        <div className="box1">
          <div className='box1-1'>
            <img alt='author-avatar' src={UserAvatar} /> 
            <p>{dateFormat()}</p>
          </div>
        </div>
        <div className='wrapper'>
          <Row className="d-flex first-row m-0 pt-3 flex-start">
            <Col sm={4} className='box2-1 p-0'>
              <p className='post-text-author mb-0 pb-2'>{message.author}</p>
              <p className='post-text-social mb-0'>{message.channel}</p>
            </Col>
            <Col sm={5} className='d-flex justify-content-end p-0'>
              <p className='button'>Левый</p>
              <p className='button'>Центр</p>
              <p className='button'>Правый</p>
            </Col>
            {/* <Col sm={3} className='icons-line box2.3 d-flex justify-content-end'>
              <svg className="icon">
                <use xlinkHref={ path + "#arrow"}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={ path + "#window-fullscreen"}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={ path + "#gear"}></use>
              </svg>
              <svg className="icon" >
                <use xlinkHref={ path + "#star-not-fill"}></use>
              </svg>
            </Col> */}
          </Row>
          <Row className='second-row'>
            <Col>
              <p className='post'>{message.content}</p>
            </Col>
          </Row>
          <div className='third-row'>
            <p className='post-further'>Далее</p>
            <img className='post-image' src={message.attachments[0]?.url} alt='here should be post image' />
          </div>
        </div>
      </div>
      <div className="box3">
        <span className='hash hash-new'>#Новое</span>
        <span className='hash hash-expert'>#Эксперт</span>
      </div>
    </Container> 
  );
}
 
export default Layout;