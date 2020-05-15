import React, { Component } from "react";
import Faq from "react-faq-component";
import Footer from "./Footer/Footer"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import "./Faq.css"
 
const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Who is Tindog made for ?",
            content: `For handlers and their dog (s)! `,
        },
        {
            title: "What is a WAAF ?",
            content:
                "We call a WAAF button which allows you to like a profile",
        },
        {
            title: "What is a GRRRF ?",
            content: `WAAF is the button that allows you to skip one profile and move on to the next.`,
        },
        {
            title: "How to send a message ?",
            content: `You can go directly through the message page or you can also go through the message icon when you are in the page of your favorites, to send him a message directly.`,
        },
        {
            title: "How to block a user ?",
            content: `Please contact the technical team.`,
        },
        {
            title: "How to delete my account ?",
            content: `We don't have that possibility yet, but it will come!`,
        },
        {
            title: "What is the package version",
            content: "v1.0.0",
        },
        {
            title: "L'équipe Tindog ?",
            content: "The Tindog team is a team of 5 developers who studied at the Wild Code School in Paris, to find out more, visit the About Us page"
        }
    ],
};
 
const styles = {
    bgColor: '#FFFFFF',
    titleTextColor: "#303030",
    rowTitleColor: "#383838",
    rowContentColor: '#424242',
    arrowColor: "salmon",
};
 
export default class App extends Component {
    render() {
        return (
            <div>
                <SideBar right/>
                <Navbar />
                <div className="wrapper-faq">
                    <Faq data={data} styles={styles} />
                </div>
                <Footer />
            </div>
        );
    }
}