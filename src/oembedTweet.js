console.log('hello')
// const getEmbed = async () => {
    let oembedResponse = await fetch(new Request('https://publish.twitter.com/oembed?url=https://twitter.com/SSunuwar5/status/1075698388367228928'));
    
    console.log('oembedResponse=', oembedResponse);
    // let oembedTweet = oembedResponse.json();
    // console.log('oembedTweet=', oembedTweet);
// }

getEmbed();





// const getSMEs = async () => {
//     const response = await fetch(`/smes`);
  
//     const body = await response.json();
  
//     if (response.status !== 200) throw Error(body.message);
  
//     return body;
//   };
  
//   export default getSMEs;