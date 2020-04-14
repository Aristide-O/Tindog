import React from 'react'
import './PersonalInformation.css'

class PersonalInformation extends React.Component{
    constructor(props){
    super(props)
    this.state = {
                    pseudo : '',
                    firstName: '',
                    sex: '',
                    dateOfBirth: '',
                    location:'',
                   }

    this.handleChangePseudo=this.handleChangePseudo.bind(this);
    this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
    this.handleChangeSex=this.handleChangeSex.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
     }

    handleChangePseudo(event) {
        this.setState({pseudo: event.target.value} );
      }
    handleChangeFirstName(event) {
        this.setState({firsName: event.target.value} );
      }
    handleChangeSex(event) {
        this.setState({sex: event.target.value} );
      }
    // handleSubmitEmail(event) {
    //     alert('E\' stato inserito un nome: ' + this.state.email);
    //     event.preventDefault();
    //   }

    render() {
    return (
        <div className="blockPersonalInformation">
            <div id="pseudo">
                <label htmlFor="pseudo">Pseudo: </label>
                <input 
                id = "Pseudo" 
                type="text" 
                value ={this.state.pseudo} 
                onChange = {this.handleChangePseudo}
                />
            </div>
            <div id="firstName">
                <label htmlFor="firstName">First Name: </label>
                <input 
                id = "text" 
                type="text" 
                value ={this.state.FirstName} 
                onChange = {this.handleChangeFirstName}
                />
            </div>
        </div>
    )

}
}

export default PersonalInformation