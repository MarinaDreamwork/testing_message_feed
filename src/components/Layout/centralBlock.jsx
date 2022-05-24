import MessageContent from "./messageContent/messageContent";
import MessageImage from "./messageImage/messageImage";
import MessageInfo from "./messageInfo/messageInfo";
import PropTypes from 'prop-types';

const CentralBlock = ({ message, onToggleFavorites, buttonNames }) => {
  return ( 
    <div className='wrapper-main-center'>
      <MessageInfo message={message} onToggleFavorites={onToggleFavorites} buttonNames={buttonNames}/>
      <MessageContent message={message}/>
      <MessageImage message={message} />
    </div>
  );
};

CentralBlock.propTypes = {
  message: PropTypes.object.isRequired,
  onToggleFavorites: PropTypes.func.isRequired,
  buttonNames: PropTypes.array.isRequired
};
 
export default CentralBlock;