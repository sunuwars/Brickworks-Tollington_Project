const Twitter = require('twitter');
require("env2")("./config.env");
const client = new Twitter({ consumer_key: process.env.consumer_key ,
                        consumer_secret: process.env.consumer_secret,
                        access_token_key: process.env.access_token_key,
                        access_token_secret: process.env.access_token_secret
                    })
// console.log('config=',process.env.access_token_key)
// console.log('T=',T)
// console.log('hi')

client.get( 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=SSunuwar5&count=5', function(err, data, response) {
    console.log('hello world')
    data.map((val) => {
        console.log('val=', val)
        console.log('tweet_status_id=',val.id_str);
    })
    // console.log('data=',data);
    // console.log('response=', response)
                })
