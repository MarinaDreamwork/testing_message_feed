import path from '../../images/icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ iconId }) => {
  return ( 
    <svg className="icon">
      <use xlinkHref={ path + iconId}></use>
    </svg>
   );
};

Icon.propTypes = {
  iconId: PropTypes.string.isRequired
}
 
export default Icon;