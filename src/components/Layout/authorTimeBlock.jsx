import PropTypes from 'prop-types';
import UserAvatar from '../../images/user-avatar.png';
import { dateFormat } from '../../utils/utils';

const AuthorTimeBlock = ({ message }) => {
  return ( 
    <div className='wrapper-main-left'>
      <div className='author-time-block'>
        <img alt='author-avatar' src={UserAvatar} /> 
        <p>{dateFormat(message)}</p>
      </div>
    </div>
   );
};
AuthorTimeBlock.propTypes = {
  message: PropTypes.object.isRequired
}
 
export default AuthorTimeBlock;