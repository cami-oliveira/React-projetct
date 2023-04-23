import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import App from '../../App.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            birthDate: "",
            email: "",
            password: ""
        }

        this.change = this.change.bind(this)
        this.validation = this.validation.bind(this)
    }

    change(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async validation() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(async (retorno) => {

                await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                    name: this.state.name,
                    surname: this.state.surname,
                    birthDate: this.state.birthDate
                });

            });
    }

    render() {
        return (
            <section className='background-component-SignUp' style={{ height: "100vh" }}>
                <div className='estiloSignUp'>
                    <h1 className='estiloTituloSignUp'>Página de Cadastro</h1>
                    <div className='estiloSignUpPlaceholder'>
                        <input className='estiloInput' placeholder="Nome" name="name" value={this.state.name}
                            type="text" size="40" onChange={this.change} />
                    </div>
                    <div className='estiloSignUpPlaceholder'>
                        <input className='estiloInput' placeholder="Sobrenome" name="surname" value={this.state.surname}
                            type="text" size="40" onChange={this.change} />
                    </div>
                    <div className='estiloSignUpPlaceholder'>
                        <input className='estiloInputDate' placeholder="Data de Nascimento" name="birthDate" value={this.state.birthDate}
                            type="date" size="40" onChange={this.change} />
                    </div>
                    <div className='estiloSignUpPlaceholder'>
                        <input className='estiloInput' placeholder="E-mail" name="email" value={this.state.email}
                            type="text" size="40" onChange={this.change} />
                    </div>
                    <div className='estiloSignUpPlaceholder'>
                        <input className='estiloInput' placeholder="Senha" name="password" value={this.state.password}
                            type="password" size="40" onChange={this.change} />
                    </div>
                    <div className='estiloSignUpPlaceButtons'>
                        <Link to="/"><button className='estiloButtonSignUp' onClick={this.validation}>Cadastrar</button></Link>
                    </div>
                    <div className='estiloSignUpPlaceButtons'>
                        <Link to="/"><button className='estiloButtonSignUp'>Voltar</button></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignUp;