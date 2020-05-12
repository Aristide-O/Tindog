import React from 'react'
import './LoginButton.css'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';


class LoginButton extends React.Component {

    state = {
        showModal: false

    }

    handleOpenModal = (event) => {
        event.preventDefault()
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    // render()
    // {
    //     return (
    //     <Link to="/MainPage" >
    //      <button className="Login" type="send">Log in</button>
    //     </Link> 
    //    )

    
    



    render(){
    return this.props.email ? (
        <div>

        
        <button className="Login" type="send">Log in outside</button>
       <Link to="/MainPage" >
        <button className="Login" type="send">Log in inside link</button>
       </Link> 
       </div>
    ) :

    (
        <div>
            <button className="Login" type="send" onClick={this.handleOpenModal} >Log in modal </button>
            <Modal className="modalForm-I" isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
            <div className="modalFormBody-I">
                            <h3>Please fill all your information</h3>
                            <button className="inscriptionButton-closeModal-2 topright" onClick={this.handleCloseModal}></button>
                        </div>
            </Modal>
        </div>
    )
   

}
}



export default LoginButton
