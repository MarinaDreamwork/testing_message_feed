export const dateFormat = (obj) => {
    const date = new Date(obj.date);
    let dateHours = date.getHours();

    let dateMinutes = date.getMinutes();
    if(dateMinutes < 10) {
      dateMinutes = `0` + dateMinutes;
    }
    return `${dateHours}:${dateMinutes}`;
  }

  export function addFavoritesField(initialArray) {
    console.log('initialArray', initialArray);
    initialArray.forEach((data) => {
      data['favorites'] = false;
    })
 
    return initialArray;
  }

  export function checkIncomingIds(maxId, incomingArray, transformData, addDataToTheList) {
    for(let i = 0; i < incomingArray.length; i++) {
      if(maxId !== incomingArray[i].id) {
        addDataToTheList((prevState) => [...prevState, transformData(incomingArray[i])]);
      } 
    }
    //   console.log('incomingArrayData', incomingArray[i].id);
    //   for(let j = 0; j < existingArray.length; j++) {
    //     console.log('existingArrayData', existingArray[j].id);
    //     if(incomingArray[i].id !== existingArray[j].id) {
    //       console.log('incomingArray[i]', incomingArray[i]);
    //       initialArray.length > 0 && addDataToTheList((prevState) => [...prevState, transformData(incomingArray[i])]);
    //     }
    //   }
    // }
  }

  export function getInitialIds(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
      arr.push(Number(array[i].id));
    }
    return arr;
    // return array.forEach(favoriteMessage => func(prevState => ([
    //   ...prevState,
    //   Number(favoriteMessage.id)
    // ])));
  }

  export function addNewIds(array, newArray, func) {
    let arr = [];
    for(let i = 0; i < newArray.length; i++) {
      arr.push(Number(newArray[i].id));
      console.log('newArray[i]', Number(newArray[i].id));
    }
    return arr;
  }