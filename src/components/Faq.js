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
            content: `Pour les maitres et leur(s) chien(s) ! `,
        },
        {
            title: "What is a WAAF ?",
            content:
                "On appel un WAAF le bouton qui te permet de liker un profil",
        },
        {
            title: "What is a GRRRF ?",
            content: `Le WAAF, c'est le bouton qui te permet de nexter un profil et de passer au suivant`,
        },
        {
            title: "How to send a message ?",
            content: `Vous pouvez passer directement par la page message ou vous pouvez également passer par l'icone message lorsque vou setes dans la page de vos favoris, pour lui envoyer directement un message.`,
        },
        {
            title: "How to block a user ?",
            content: `Veuillez contacter l'équipe technique.`,
        },
        {
            title: "How to delete my account ?",
            content: `Nous n'avons pas encore cette possibilité, mais cela viendra !`,
        },
        {
            title: "What is the package version",
            content: "v1.0.0",
        },
        {
            title: "L'équipe Tindog ?",
            content: "L'équipe Tindog est une team de 5 developpeurs ayant fait leurs études à la Wild Code School à Paris, pour en savoir plus, rendez-vous sur la page About Us"
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