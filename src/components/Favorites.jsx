import path from '../images/iconssvg.svg';
import PropTypes from 'prop-types';

const Favorites = ({ onToggleFavorites, message }) => {
    return (
      <svg className="icon" onClick={() => onToggleFavorites(message.id)}>
        <use className='icon-link' xlinkHref={ path + (message.favorites 
      ? '#star-fill' : '#star-not-fill')} ></use>
      </svg>
  )
}

Favorites.propTypes = {
  onToggleFavorites: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
}
 
export default Favorites;