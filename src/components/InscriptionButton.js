import React from 'react';

import { Link } from "react-router-dom";
import Modal from 'react-modal';

import './InscriptionButton.css';

Modal.setAppElement(document.getElementById('.inscriptionButton-block1'));

class InscriptionButton extends React.Component {

state = {
            showModal: false
        }

    handleOpenModal = (event) => {
        event.preventDefault()
        this.setState({ showModal: true });
    }

    handleCloseModal = (event) => {
        event.preventDefault()
        this.setState({ showModal: false });
    }

    render() {
        return this.props.pseudo ?
            (
                <div className="inscriptionButton-block1">
                    <button className="inscriptionButton" type="send" onClick={this.handleOpenModal}>Sign-up</button>
                    <Modal
                        className="inscriptionButton-modal"
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div className="inscriptionButton-modalHeader">
                            <h2>BauBau!!</h2>
                        </div>
                        <div className="inscriptionButton-modalBody">
                            <h3>Congratulations! </h3>
                            <p>You are now on Tindog. Have fun smelling around!</p>
                        </div>
                        <Link to={{
                            pathname: "/myprofile",
                            data: {
                                pseudo: this.props.pseudo,
                                avatar: this.props.avatar,
                                location: this.props.location,
                                gender: this.props.gender,
                                description: this.props.description
                            }
                        }}>
                            <button className="inscriptionButton-closeModal" onClick={this.handleCloseModal}>Go tindogging</button>
                        </Link>
                    </Modal>
                </div>
            )
            : (
                <div className="inscriptionButton-block1">
                    <button className="inscriptionButton" type="send" onClick={this.handleOpenModal}>Sign-up</button>
                    <Modal
                        className="inscriptionButton-modalForm"
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div className="inscriptionButton-modalFormBody">
                            <h3>Please fill your information</h3>
                            <button className="inscriptionButton-closeModal-2 topright" onClick={this.handleCloseModal}></button>
                        </div>
                    </Modal>
                </div>

            )
    }
}

export default InscriptionButton