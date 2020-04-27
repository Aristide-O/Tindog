import React from 'react';
import { Link } from 'react-router-dom'
import '../MatchButton.css'

function MatchButton (props) {

  return (
    <Link to={{
      pathname:'/Message',
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
