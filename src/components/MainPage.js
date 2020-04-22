import React from "react";

import axios from 'axios';

import CardType from './CardType';
import MatchButton from "./MatchButton";
import Navbar from './Navbar'
import NoButton from "./NoButton/NoButton";

import '../components/Navbar.css';


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
            .then(res => this.setState({ image: res.data[0] }))
    }

    getName = () => {
        axios
        .get("https://randomuser.me/api/")
        .then(res => this.setState({ userName: res.data.results[0] }));
    }

    fetchData = () =>{
        console.log('Hello, there')
        this.getImage()
        this.getName()
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        console.log(this.state)
        return (
            <div className='Mainpage'>
                <Navbar />
                <CardType dogData={this.state}/>
                <NoButton fetch={()=>this.fetchData()}/>
                <MatchButton />
            </div>
        )
    }


export default MainPage;
