import React from 'react';
import { Link } from 'react-router-dom'

import match from '../icons-navbar/animal-care.png'

import '../MatchButton.css'

function MatchButton (props) {

  return (
    <Link to={{
      pathname:'/MyProfile',
      data:{
        dogName: props.name,
      }
    }}>
      {/* this.props.location.data */}
      <button className="button-match" >
      </button>
    </Link>

  )
}


export default MatchButton;
