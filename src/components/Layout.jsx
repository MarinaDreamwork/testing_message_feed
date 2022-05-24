import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthorTimeBlock from './Layout/authorTimeBlock';
import HashesBlock from './Layout/hashesBlock';
import CentralBlock from './Layout/centralBlock';

const Layout = ({ message, onToggleFavorites }) => {
  const buttonNames = ['Левый', 'Центр', 'Правый'];
  console.log('message', message);

  return ( 
    <Container className="wrapper-container d-flex flex-column justify-content-center mb-2">
      <div className='wrapper-main d-flex'>
        <AuthorTimeBlock message={message} />
        <CentralBlock message={message} onToggleFavorites={onToggleFavorites} buttonNames={buttonNames}/>
      </div>
      <HashesBlock />
    </Container> 
  );
}

Layout.propTypes = {
  message: PropTypes.object.isRequired,
  onToggleFavorites: PropTypes.func.isRequired
}
 
export default Layout;