import React from "react";
import { Link } from "react-router-dom";

const Tweet = ({id_str, text, user}) => {
  // con/st tweeted-ago = time-function( created_at)
  return (
    <React.Fragment>
      <li id="tweet-text"> <a href={'https://twitter.com/'+ user.screen_name}> <img src={user.profile_image_url_https} alt='user-profile-image' class='twitter-profile-img'/> </a>
        <a href={"https://twitter.com/SSunuwar5/status/" + id_str+ '?ref_src=twsrc%5Etfw' }>{text}</a> 
        
      </li>
     
      <li id='tweet-by'> By <a href={'https://twitter.com/'+ user.screen_name}>{user.screen_name} </a></li>
    </React.Fragment>
  )
}

const EventComp = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser,
  email_event_organiser, telephone_event_organiser, event_time_duration, recurring_event_description }) => {


  return (


    <ul className='social-action-ul'>
      <Link key={event_id} to={'/event-detailed/' + event_name} >
        <li className='li-style1 no-left-margin'>{event_name.split('rec')[0]}</li>

        {/* <li>{event_description}</li> */}
        <li className="social-action-li">{event_date_time}</li>
        <li className="social-action-li">{event_time_duration}, {recurring_event_description}</li>

        <li className="social-action-li">{event_location}</li>
        {/* <li>{fullname_event_organiser}</li>
        <li>{email_event_organiser}</li>
        <li>{telephone_event_organiser}</li> */}
      </Link >
    </ul>

  )
}

const EventByThemeComp = ({ event_id, event_name, event_description, date_time, event_location, theme }) => {
  return (
    <ul>
      <li>{event_id}</li>
      <li>{event_name}</li>
      <li>{event_description}</li>
      <li>{date_time}</li>
      <li>{event_location}</li>
      <li>{theme}</li>
    </ul>
  )
}

const SingleEvent = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser,
  email_event_organiser, telephone_event_organiser, Photo }) => {
  if (Photo) {
    return (
      <div key={event_id} >
        <li><img className='single-event-img' src={Photo[0].url} /></li>
        <li className="social-action-li"> {event_description}</li>
        <li className="social-action-li"> {event_date_time}</li>
        <li className="social-action-li"> {event_location}</li>
        <li className="social-action-li"> {fullname_event_organiser}</li>
        <li className="social-action-li"> {email_event_organiser}</li>
        <li className="social-action-li"> {telephone_event_organiser}</li>
      </div>
    )
  }
  else {
    return (
      <div key={event_id} >
        <li className="social-action-li"> {event_description}</li>
        <li className="social-action-li"> {event_date_time}</li>
        <li className="social-action-li"> {event_location}</li>
        <li className="social-action-li"> {fullname_event_organiser}</li>
        <li className="social-action-li"> {email_event_organiser}</li>
        <li className="social-action-li"> {telephone_event_organiser}</li>

      </div>

    )
  }
}
const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p id='error-container' key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>

const TwitterTimeLine = ({twitterTimeLine}) => {
    return (
      <React.Fragment>
                      
        {twitterTimeLine.map( (event, index) => (
          <ul class='social-media-ul'>
          <Tweet key={index}{...event} />
          </ul>
          ))}
      </React.Fragment>
    )
  }

const UpcomingEvents = ({ upcomingEvents }) => {
  if (upcomingEvents.length !== 0) {
    return (
      <React.Fragment>
        <h2 className="page-hTwo page-hTwo-social-action" >Upcoming Events</h2>
        {upcomingEvents.map(event => (
          <EventComp key={event.fields.event_id} {...event.fields} />
        ))}
      </React.Fragment>
    )
  } else {
    // return '';
    return (
      <React.Fragment>
        <h2 className="page-hTwo page-hTwo-social-action" >Upcoming Events</h2>
        <h4 class='coming-soon-h4'> coming soon, please come back again </h4>
      </React.Fragment>
    )
  }
}

const PastEvents = ({ pastEvents }) => {
  if (pastEvents.length !== 0) {
    return (
      <React.Fragment>
        <h2 className="page-hTwo page-hTwo-social-action" id="past-events-hTwo">Past Events</h2>
        {pastEvents.map(event => (
          <EventComp key={event.fields.event_id} {...event.fields} />
        ))}

      </React.Fragment>
    )
  } else {
    return '';
  }
}

export { SingleEvent, FormErrors, EventComp, EventByThemeComp, UpcomingEvents, PastEvents, TwitterTimeLine, Tweet };
