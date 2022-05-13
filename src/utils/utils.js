export const dateFormat = (obj) => {
    const date = new Date(obj.date);
    let dateHours = date.getHours();

    let dateMinutes = date.getMinutes();
    if(dateMinutes < 10) {
      dateMinutes = `0` + dateMinutes;
    }
    return `${dateHours}:${dateMinutes}`;
  }

  export function addFavoritesField (initialArray) {
    initialArray.forEach((data) => {
      data['favorites'] = false;
    })
 
    return initialArray;
  }


