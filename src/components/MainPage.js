import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import CardType from './CardType';


class MainPage extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink exact to="/"></NavLink>
                    </li>
                </ul>
                <CardType />
            </div>
        )
    }
}




{/* <Navbar /> */ }
{/* <div className="background">
        <div className="button">
          <SignIn />
          <SignUp />
        </div> */}
{/* </div>  */ }
{/* <InscriptionPage/> 
<CardType />
 <Footer /> */ }

export default MainPage;