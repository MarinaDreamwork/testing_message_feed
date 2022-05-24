import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { getMessages } from '../src/api/api'
import { addFavoritesField } from "./utils/utils";
import { Container } from "react-bootstrap";
import Preloader from "./components/Preloader";
import IconsArrowWrapper from "./components/icons/iconsArrowWrapper";

const App = () => {

  const [messages, setMessages] = useState();
  const [newMessages, setNewMessages] = useState();
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
    };

  const handleChangeOrder = (status) => {
    status === 'up' ? setIsDownOrder(false) : setIsDownOrder(true)
  }

  useEffect(() => {
    // receiving the first 20-ty messages
    getMessages('messageId', 0, setMessages);
  }, []);

  useEffect(()=> {
    messages?.Messages.length > 0 && setFavoriteMessages(addFavoritesField(messages?.Messages));
    if(!localStorage.getItem('messages')) {
      messages?.Messages.length > 0 && localStorage.setItem('messages', JSON.stringify(addFavoritesField(messages?.Messages)));
    }
  }, [messages]);

  useEffect(() => {
    (newMessages?.Messages?.length > 0 && newMessages?.Messages !== 'no message') && setFavoriteMessages([
      ...addFavoritesField(messages?.Messages),
      ...addFavoritesField(newMessages?.Messages)
    ]);
    localStorage.setItem('messages', JSON.stringify(favoriteMessages));
  }, [newMessages])

  useEffect(() => {
    setInterval(() => {
      messages?.Messages?.length > 0 && getMessages('messageId', favoriteMessages[favoriteMessages?.length - 1]?.id, setNewMessages);
    }, 5000); 
  });

  return ( 
    <>
      <Container className='wrapper-arrows d-flex flex-column mt-3 mb-3'>
        <IconsArrowWrapper onChangeOrder={handleChangeOrder} />
      </Container>
    { 
        JSON.parse(localStorage.getItem('messages'))?.length > 0
        ? (isDownOrder ? JSON.parse(localStorage.getItem('messages')): JSON.parse(localStorage.getItem('messages')).reverse()).map(message => (<Layout key={message.id} message={message} onToggleFavorites={handleToggleFavorites}/>))
        : <Preloader />
    }
  </>  
  );
}

 
export default App;