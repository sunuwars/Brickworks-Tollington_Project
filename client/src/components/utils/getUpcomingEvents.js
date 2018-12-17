
 const checkResponse = response => {
  if(response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  // response.forEach( (val) => console.log(val.fields));
  console.log('response is response is ', response);
  return response.json();
}
// getAllEventsAirTable
//   .then(res => { //res is an array of objects
//     res.forEach((val) => console.log(val.fields));
//   })
//   .catch(err => console.log(err)); 
export const getUpcomingEvents = () => {
  console.log('INSIDE UTILS222');
  return fetch(`/api/getUpcomingEventsAirTable`)
  .then(checkResponse)
  .catch(err => {
    throw new Error(`fetch getUpcomingEvents failed ${err}`);
  })
}

// getUpcomingEventsAirTable
//   .then(res => { //res is an array of objects
//     res.forEach((val) => console.log(val.fields));
//   })
//   .catch(err => console.log(err)); 

export default getUpcomingEvents;