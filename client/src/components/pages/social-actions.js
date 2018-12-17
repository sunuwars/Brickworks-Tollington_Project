import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getUpcomingEvents from '../utils/getUpcomingEvents';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';
import logoImg from '../../../public/images/Brickworks-logo-small.png';

class SocialActions extends React.Component {
 
state = {
  upcomingEvents : [],
  pastEvents : [],
  allEvntLoading : true,
  pastEvntLoading: true,
}

  componentDidMount() {
    
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
  
  addEvent = () => {
    this.props.history.push('/topten');
  }
  
  render() {
    if (this.state.allEvntLoading || this.state.pastEvntLoading) {
      return (
        <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
        <main>
        <h3>loading...</h3>
        </main>
        </div>
      )
      
    } 
   
    const {upcomingEvents} = this.state;
    const {pastEvents} = this.state;

    return (
      
      // <React.Fragment>
      <div className='wrapper'>
        <h1 data-testid="social-actions-page"id="head-h1"><img id='logo-small' src={logoImg} alt='Brickworks logo'/></h1>
      
      
      <div className="page-div">
      <h1 className="page-heading">Social Actions</h1> 
      
    <UpcomingEvents upcomingEvents={this.state.upcomingEvents} />

    <PastEvents pastEvents={this.state.pastEvents}/>    
            
    <button className='button-large' onClick={this.addEvent}>Start a social action</button>
    </div>
    </div>
    // </React.Fragment>
    )
  }
  }
  


export default SocialActions;