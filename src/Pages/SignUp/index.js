import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import firebase from '../../Firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
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
        await firebase.firestore().collection("usuario").add({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            birthDate: this.state.birthDate,
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        return (
            <section className=''>
                <div className=''>
                    <h1>Página de Cadastro</h1>
                    <div>
                        <input placeholder="Nome" name="nome" value={this.state.nome}
                            type="text" size="25" onChange={this.change} />
                        <br />
                        <input placeholder="Sobrenome" name="sobrenome" value={this.state.sobrenome}
                            type="text" size="25" onChange={this.change} />
                        <br />
                        <input placeholder="Data de Nascimento" name="birthDate" value={this.state.birthDate}
                            type="text" size="25" onChange={this.change} />
                        <br />
                        <input placeholder="E-mail" name="email" value={this.state.email}
                            type="text" size="25" onChange={this.change} />
                        <br />
                        <input placeholder="Senha" name="password" value={this.state.password}
                            type="password" size="25" onChange={this.change} />
                    </div>
                    <div className=''>
                        <button onClick={this.validation}>Cadastrar</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignUp;