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
const [receivedIds, setReceivedIds] = useState([]);

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
    //setReceivedIds(getInitialIds(favoriteMessages));
    if(!localStorage.getItem('messages')) {
      messages?.Messages.length > 0 && localStorage.setItem('messages', JSON.stringify(addFavoritesField(messages?.Messages)));
    }
    //console.log('receivedIds', receivedIds);
    //console.log('Math.max(...receivedIds)', Math.max(...receivedIds));
  }, [messages]);

  // useEffect(() => {
  //   setInterval(() => {
  //     getMessages('messageId', Math.max(...receivedIds) > 0 && Math.max(...receivedIds), setNewMessages);
  //     (newMessages?.Messages.length > 0 && newMessages?.Messages !== 'no message') && setFavoriteMessages(prevState => [...prevState, ...addFavoritesField(newMessages?.Messages)]);
  //    (newMessages?.Messages.length > 0 && newMessages?.Messages !== 'no message') && addNewIds(favoriteMessages);
  //   }, 5000);
  // }, []);

  // favoriteMessages?.length > 0 && setLastId(Number(favoriteMessages[favoriteMessages.length-1]?.id))

  // useEffect(() => {
  //   setInterval(() => {
  //    console.log('lastId', lastId);
      //firstMessages.length > 0 && getMessages('messageId', Number(localStorageData[localStorageData.length - 1].id), setNewMessages);
      // getMessages('oldMessages', true, setMessages)

      // заглушка - нам нужно новое сообщение добавлять к уже имеющимся в localStorage - пока сделаем так:
      //(newMessages?.Messages?.length > 0 && newMessages?.Messages !== 'no message') && newestMessages.push(addFavoritesField(newMessages?.Messages));
      //newestMessages?.length > 0 && localStorage.setItem('messages', [...localStorageData, ...JSON.stringify(newestMessages)]);
      // localStorage.setItem('messages', [...JSON.parse(localStorage.getItem('messages')), ...JSON.stringify(addFavoritesField(newMessages?.Messages))]);
    //}, 5000); 
  //}, []);
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
      {/* {
        newestMessages.length > 0 ?
        newestMessages.map(newMessage => <Layout key={newMessage.id} message={newMessage} onToggleFavorites={handleToggleFavorites} />) :
        null
      } */}
    </>
    
   );
}

 
export default App;