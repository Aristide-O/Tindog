import React from 'react';

import { Link } from "react-router-dom";
import Modal from 'react-modal';

import './InscriptionButton.css';

class InscriptionButton extends React.Component {

state = {
            showModal: false
        }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return this.props.pseudo ?
            (
                <div className="inscriptionButton-block1">
                    <button className="inscriptionButton" type="send" onClick={this.handleOpenModal}>Sign-up</button>
                    <Modal
                        className="modal"
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div className="modalHeader">
                            <h2>BauBau!!</h2>
                        </div>
                        <div className="modalBody">
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
                        className="modalForm"
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div className="modalFormBody">
                            <h3>Please fill your information</h3>
                            <button className="inscriptionButton-closeModal-2 topright" onClick={this.handleCloseModal}></button>
                        </div>
                    </Modal>
                </div>

            )
    }
}

export default InscriptionButton