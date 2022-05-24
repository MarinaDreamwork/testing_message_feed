import PropTypes from 'prop-types';
import IconArrowDown from './iconArrowDown';
import IconArrowUp from './iconArrowUp';

const IconsArrowWrapper = ({ onChangeOrder }) => {
  const iconArrows = [
    {
      component: <IconArrowDown onChangeOrder={onChangeOrder} />, 
      class: 'arrow-down-text p-1 w-100', 
      text: 'Новые сообщения отобразить внизу'
    },
    {
      component: <IconArrowUp onChangeOrder={onChangeOrder} />, 
      class: 'arrow-up-text p-1 w-100', 
      text: 'Новые сообщения отобразить наверху'
    }
  ];
  return (
    <div className='d-flex justify-content-center'>
      {
        iconArrows.map((iconArrow, index) => (
          <div 
            key={index} 
            className='d-flex m-2'>
              {iconArrow.component}
            <span 
              className={iconArrow.class}>
                {iconArrow.text}
            </span>
          </div>
        ))
      }
    </div>
  );
};

IconsArrowWrapper.propTypes = {
  onChangeOrder: PropTypes.func.isRequired
};
 
export default IconsArrowWrapper;