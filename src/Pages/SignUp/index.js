import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

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
        .then ( async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.name,
                sobrenome: this.state.surname,
                birthDate: this.state.birthDate
            });

        });
    }

    render() {
        return (
            <section className=''>
                <div className=''>
                    <h1>Página de Cadastro</h1>
                    <div>
                        <input placeholder="Nome" name="name" value={this.state.name}
                            type="text" size="25" onChange={this.change} />
                        <br />
                        <input placeholder="Sobrenome" name="surname" value={this.state.surname}
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
                    <div>
                        <Link to="/"><button>Voltar</button></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignUp;