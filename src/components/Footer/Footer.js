import React from 'react'
import paws from '../Icons-footer/paws.png'


const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer-background">
                <div className="footer-faq">
                    <ul>
                        <li><a href="#AboutUs">About Us</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                    </ul>
                </div>
                <div className="icon-footer">
                    <img className="icon-footer-paws" src={paws} alt='logo' />
                </div>
                <div className="footer-contact">
                    <ul>
                        <li><a href="https://fr-fr.facebook.com/WildCodeSchool/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/wildcodeschool" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div className="icon-footer">
                    <img className="icon-footer-paws" src={paws} alt='logo' />
                </div>
                <div>
                    <ul>
                        <li><a href="https://www.instagram.com/wildcodeschool/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://fr.linkedin.com/school/wild-codes-chool/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    </ul>
                </div>
            </footer>
        </div>


    )
}

export default Footer