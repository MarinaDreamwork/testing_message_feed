import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

const ButtonGroup = ({ buttonNames }) => {
  return ( 
    <Col sm={5} className='d-flex justify-content-end p-0'>
      {buttonNames.map((buttonName, index) => <p key={index} className='button'>{buttonName}</p>) }
    </Col>
   );
};

ButtonGroup.propTypes = {
  buttonNames: PropTypes.array.isRequired
};
 
export default ButtonGroup;