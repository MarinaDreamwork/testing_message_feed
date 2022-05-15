import FormData from 'form-data';

export function getMessages(key, value, setMessagesFunction) {
  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  formData.append('actionName', 'MessagesLoad');
  formData.append(key, value);
    
  xhr.open('POST', 'http://f0665380.xsph.ru/');
  xhr.send(formData);
  xhr.onload = () => setMessagesFunction(JSON.parse(xhr.response));
}