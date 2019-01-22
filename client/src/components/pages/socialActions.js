import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getUpcomingEvents from '../utils/getUpcomingEvents';
import getTwitterTimeLine from '../utils/getTwitterTimeLine';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents, TwitterTimeLine} from './eventComp';
import logoImg from '../../../public/images/Brickworks-logo-small.png';
import twitterIconWhite from '../../../public/images/twitter-logo1.svg';
import twitterIconBlue from '../../../public/images/twitter-logo.svg';

class SocialActions extends React.Component {
 
state = {
  upcomingEvents : [],
  pastEvents : [],
  allEvntLoading : true,
  pastEvntLoading: true,
  twitterTimeLine: {}
}

  componentDidMount() {
  
    
    getTwitterTimeLine()
    .then(response => {
      this.setState( {twitterTimeLine: response});
    } )
    .catch(err => console.log(err));

    getUpcomingEvents()
    .then(response => {
      //set upcomingEvents state
      this.setState( { upcomingEvents: response, allEvntLoading: false});
      //pass data to parent
      this.props.extractData(this.state.upcomingEvents);
    })
    .catch(err => console.log(err));

    getPastEvents()
    .then(response => {
   
    this.setState( { pastEvents : response, pastEvntLoading:false});
    this.props.extractData(this.state.pastEvents);
    
    })
    .catch(err => console.log(err));


  }
  
  startSocialAction = () => {
    this.props.history.push('/start-a-social-action');
  }
  
  render() {
    if (this.state.allEvntLoading || this.state.pastEvntLoading) {
      return (
        <div className='wrapper'>
        {/* <h1 data-testid="social-actions-page">Social Actions</h1> */}
        <main>
        <h3>loading...</h3>
        </main>
        </div>
      )
      
    } 
    // if api call to get twitterTimeLine is not finished 
    // if (Object.keys(this.state.twitterTimeLine).length === 0 && this.state.twitterTimeLine.constructor === Object ) {
    //   return (
    //     <h3>LOADING...</h3>
    //   )
    // }
    const {upcomingEvents} = this.state;
    const {pastEvents} = this.state;
    // const statusId = '1075698388367228928';
    const {twitterTimeLine} = this.state;
    console.log("twitterTimeLine here=", twitterTimeLine)
    return (
      
      <React.Fragment>
      <div className='wrapper'>
        <h1 data-testid="social-actions-page"id="head-h1"><img id='logo-small' src={logoImg} alt='Brickworks logo'/></h1>
      
        <h1 className="page-heading">Social Actions</h1>
        <div id="list-social-action"  >
          {/* <div className= "page-div page-left-main"> */}
          <div id="table-row">

          <div className= "page-left-main">
          
            
            
            <UpcomingEvents upcomingEvents={this.state.upcomingEvents} />

            <PastEvents pastEvents={this.state.pastEvents}/>   

            
                  
            <button className='button-large' onClick={this.startSocialAction}>Start a social action</button>
          </div>

          <div className='social-media-feed'>
            <div className='follow-container'>
              <h4 ><img src={twitterIconBlue} alt="twitter icon"/> Follow on Twitter </h4>
              <div className="follow-btn">
                <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fsocial-action.herokuapp.com%2F&ref_src=twsrc%5Etfw&screen_name=SSunuwar5&tw_p=followbutton" className="twitter-follow-button" data-show-count="false"><img id="follow-twitter-icon"src={twitterIconWhite} alt="twitter icon"/><span id="white">  Follow @SSunuwar5  </span></a>
              </div>
            </div>
            
            <div className='tweets'>
            <h4 ><img src={twitterIconBlue} alt="twitter icon"/>  Recent Tweets  </h4>
              {/* <TwitterTimeLine twitterTimeLine= {this.state.twitterTimeLine} />  */}
              <TwitterTimeLine twitterTimeLine= {twitterTimeLine} /> 

            </div>

            
           
          </div>

          </div>
      </div>
    </div>
     </React.Fragment>
    )
  }
  }
  


export default SocialActions;