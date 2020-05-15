import React from "react";
import axios from 'axios';

import CardType from './CardType';
import MatchButton from "./MatchButton";
import Navbar from './Navbar'
import NoButton from "./NoButton/NoButton";
import Footer from './Footer/Footer'
import SideBar from './SideBar'

import './MainPage.css'


class MainPage extends React.Component {
    state = {
        image : null,
        userName : null
    }

    getImage = () => {
        axios({
            method: "get",
            url: 'https://api.thedogapi.com/v1/images/search',
            headers: { 'x-api-key': "c05c2be9-d216-4f53-95de-6a5a06f0ae71" }
        })
            .then(
                (res) => {
                  this.setState({
                    image: res.data[0]
                });
                }
              )
          }

    getName = () => {
        axios
        .get("https://randomuser.me/api/")
        .then(res => this.setState({ userName: res.data.results[0] }));
    }

    fetchData = () =>{
        this.setState({ image: null, userName: null })
        this.getImage()
        this.getName()
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        return (
            <div>
                <div className='Mainpage'>
                    <SideBar right/>
                    <Navbar />
                    <div className="Page-Mainpage">
                        <CardType dogData={this.state}/>
                        <div className="Btn-Mainpage">
                            <NoButton fetch={()=>this.fetchData()}/>
                            <MatchButton name={this.state.userName} image={this.state.image}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default MainPage;
