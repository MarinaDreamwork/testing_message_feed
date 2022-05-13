import { Spinner } from "react-bootstrap";

const Preloader = () => {
  return ( 
    <div className='mt-3 d-flex justify-content-center'>
      <Spinner animation="grow" variant="success" />
    </div>
  );
}
 
export default Preloader;