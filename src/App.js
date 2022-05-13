
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { getMessages } from '../src/api/api'
import { addFavoritesField } from "./utils/utils";
import { Container } from "react-bootstrap";
import Preloader from "./components/Preloader";
//import NewsCard from "./components/NewsCard"

const App = () => {

  const [messages, setMessages] = useState();
  //const [newMessages, setNewMessages] = useState();
  const [isDownOrder, setIsDownOrder] = useState(true);
  const [favoriteMessages, setFavoriteMessages] = useState([]);

  const handleToggleFavorites = (id) => {
    const favoritedMessage = favoriteMessages.map(message => {
      if(id === message.id) {
        if(!message.favorites) {
          return {...message, favorites: true};
        } else {
          return {...message, favorites: false}
        }
      }
      return {...message}
  });
    setFavoriteMessages(favoritedMessage);
    localStorage.setItem('messages', JSON.stringify(favoritedMessage));
  }

  const handleChangeOrder = (status) => {
    status === 'up' ? setIsDownOrder(false) : setIsDownOrder(true)
  }

  useEffect(() => {
    // receiving the first 20-ty messages
    getMessages('messageId', 0, setMessages);
    
    // messages?.Messages.length > 0 
    //   && setFavoriteMessages( [
    //   ...messages.Messages, {...messages.Messages, favorites: false}
    // ]) 
    // if(!localStorage.getItem('messages')) {
     //favoriteMessages.length > 0  && localStorage.setItem('messages', JSON.stringify(favoriteMessages));
    // }
    //getMessages('oldMessages', true, setMessages);
  }, []);

  useEffect(()=> {
    messages?.Messages.length > 0 && setFavoriteMessages(addFavoritesField(messages?.Messages));
    if(!localStorage.getItem('messages')) {
      messages?.Messages.length > 0 && localStorage.setItem('messages', JSON.stringify(addFavoritesField(messages?.Messages)));
    }
  }, [messages])

  // useEffect(() => {
  //   setInterval(() => {
  //     getMessages('messageId', 2698, setNewMessages);
  //     getMessages('oldMessages', true, setNewMessages);
  //     getMessages('oldMessages', true, setMessages);
  //   }, 5000);
  // }, []);

  return ( 
    <>
    <Container className='wrapper-arrows d-flex flex-column mt-3 mb-3'>
      <div className='d-flex justify-content-center m-1'>
        <div className='arrow-down' onClick={() => handleChangeOrder('down')}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
          </svg>
        </div>
          <span className='arrow-down-text p-1'>Новые сообщения отобразить внизу</span>
      </div>
      <div className='d-flex justify-content-center m-1'>
        <div className='arrow-up' onClick={() => handleChangeOrder('up')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </div>
        <span className='arrow-up-text p-1'>Новые сообщения отобразить наверху</span>
      </div>
      </Container>
      { 
          // нужно написать, что если есть данные в localStorage, то использовать их, если нет, то массив favoriteMessages
          
          favoriteMessages.length > 0
          ? (isDownOrder ? JSON.parse(localStorage.getItem('messages')) : JSON.parse(localStorage.getItem('messages')).reverse()).map(message => (<Layout key={message.id} message={message} onToggleFavorites={handleToggleFavorites}/>))
        : <Preloader />
      }
      {/* {
        newMessages !== 'no message' ?
        newMessages?.Messages.map(newMessage => <Layout key={newMessage.id} message={newMessage} onToggleFavorites={handleToggleFavorites} />) :
        null
      } */}
    </>
    
   );
}

 
export default App;