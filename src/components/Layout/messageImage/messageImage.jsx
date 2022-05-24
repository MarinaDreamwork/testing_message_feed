const MessageImage = ({ message }) => {
  return ( 
    <div className='third-row'>
      <p className='post-further'>Далее</p>
      <div className='post-image' style={{backgroundImage: `url(${message.attachments[0]?.url})`, backgroundSize: 'cover'}}>
      </div>
    </div>
   );
}
 
export default MessageImage;