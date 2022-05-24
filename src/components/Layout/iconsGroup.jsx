import { Col } from "react-bootstrap";
import Favorites from "../Favorites";
import Icon from "./icon";

const IconsGroup = ({ message, onToggleFavorites }) => {
  return ( 
    <Col sm={3} className='icons-line d-flex justify-content-end'>
      <Icon iconId='#arrow' />
      <Icon iconId='#window-fullscreen' />
      <Icon iconId='#gear' />
      <Favorites message={message} onToggleFavorites={onToggleFavorites} />
    </Col>
   );
}
 
export default IconsGroup;