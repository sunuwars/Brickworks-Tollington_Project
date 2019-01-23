
const checkResponse = response => {
  if(response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  console.log('getTwitterTimeLine response is response is ', response);
  return response.json();
}

export const getTwitterTimeLine = () => {
  console.log('INSIDE UTILS getTwitterTimeLine');
  return fetch(`/api/getTwitterTimeLine`)
  .then(checkResponse)
  .catch(err => {
    throw new Error(`fetch getTwitterTimeLine failed ${err}`);
  })
}


export default getTwitterTimeLine;

// return fetch(`/api/getTwitterTimeLine`)
// .then( (response) => checkResponse(response))
// .catch( err => {
//   console.log(err)
// })

// const checkResponse = (response) => {
//   if(response.status !== 200) {
//     console.log('problem')
//     return 
//   }
//   return response.json();
// }