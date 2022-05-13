import { Col, Container, Row } from 'react-bootstrap';
import  path  from '../images/iconssvg.svg';
import UserAvatar from '../images/user-avatar.png';
import Favorites from './Favorites';
import PropTypes from 'prop-types';
import { dateFormat } from '../utils/utils';
import Settings from './Settings';

const Layout = ({ message, onToggleFavorites }) => {
  
  //console.log('message', message);

  return ( 
    <Container className="wrapper-container d-flex flex-column justify-content-center mb-2">
      <div className='wrapper-main d-flex'>
        <div className="box1">
          <div className='box1-1'>
            <img alt='author-avatar' src={UserAvatar} /> 
            <p>{dateFormat(message)}</p>
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
            <Col sm={3} className='icons-line d-flex justify-content-end'>
              <svg className="icon">
                <use xlinkHref={ path + "#arrow"}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={ path + "#window-fullscreen"}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={ path + "#gear"}></use>
              </svg>
              <Favorites message={message} onToggleFavorites={onToggleFavorites}/>
            </Col>
          </Row>
          <Row className='second-row'>
            <Col>
              <p className='post'>{message.content}</p>
            </Col>
          </Row>
          <div className='third-row'>
            <p className='post-further'>Далее</p>
            <div className='post-image' style={{backgroundImage: `url(${message.attachments[0]?.url})`, backgroundSize: 'cover'}}>
            </div>
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

Layout.propTypes = {
  message: PropTypes.object.isRequired,
  onToggleFavorites: PropTypes.func.isRequired
}
 
export default Layout;