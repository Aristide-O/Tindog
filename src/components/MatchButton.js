import React from 'react';
import { Link } from 'react-router-dom';
import '../MatchButton.css';

function MatchButton (props) {
  return (
    <Link to={{
      pathname:'/FavoriteProfile',
      data:{
        dogName: props.name,
        dogImage: props.image,
      }
    }}>
      <button className="button-match" >
      </button>
    </Link>

)
}

export default MatchButton;
