import { Spinner } from "react-bootstrap";

const Preloader = ({ variant }) => {
  return ( 
    <div className='mt-3 d-flex justify-content-center'>
      <Spinner animation="grow" variant={variant} />
    </div>
  );
}
 
export default Preloader;