import { Row } from "react-bootstrap";
import ButtonGroup from "../buttonGroup";
import IconsGroup from "../iconsGroup";
import SourceAuthor from "../sourseAuthor";
import PropTypes from 'prop-types';

const MessageInfo = ({ message, onToggleFavorites, buttonNames }) => {
  return ( 
    <Row className="d-flex first-row m-0 pt-3 flex-start">
      <SourceAuthor message={message}/>
      <ButtonGroup buttonNames={buttonNames}/>
      <IconsGroup message={message} onToggleFavorites={onToggleFavorites}/>
    </Row>
   );
};
MessageInfo.propTypes = {
  message: PropTypes.object.isRequired,
  onToggleFavorites: PropTypes.func.isRequired,
  buttonNames: PropTypes.array.isRequired
};

 
export default MessageInfo;