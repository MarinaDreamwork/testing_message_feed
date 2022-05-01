import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import FormData from 'form-data';
//import NewsCard from "./components/NewsCard"

const App = () => {

  const [messages, setMessages] = useState();

  useEffect(() => {
  
    let formData = new FormData();

    function getFirstTwentyMessages() {
      formData.append('actionName', 'MessagesLoad');
      formData.append('messageId', 0);

      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://f0665380.xsph.ru/');
      xhr.send(formData);
      console.log('formData', formData);
      xhr.onload = () => setMessages(JSON.parse(xhr.response));
    }
    getFirstTwentyMessages();
    console.log(messages);


  }, []);

  return ( 
    <>
      { messages 
      ? (
        messages.Messages.map(message => (<Layout key={message.id} message={message}/>))
      )
      : 'Loading....'
      }
    </>
    
   );
}
 
export default App;