import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            birthDate: ""


        }
    }

    async componentDidMount() {

        await firebase.auth().onAuthStateChanged(async (usuario) => {

            if (usuario) {
                var uid = usuario.uid;


                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {

                        this.setState({

                            name: retorno.data().name,
                            surname: retorno.data().surname,
                            birthDate: new Date(retorno.data().birthDate).toLocaleDateString()
                        });
                    });
            }

        });

    }

    render() {
        return (
            <section className='background-component-Home' style={{ height: "100vh" }}>
                <div className='estilo'>
                    <div className='estiloMensagemHome'>
                        Nome: {this.state.name}
                    </div>
                    <div className='estiloMensagemHome'>
                        Sobrenome: {this.state.surname}
                    </div>
                    <div className='estiloMensagemHome'>
                        Data de Nascimento: {this.state.birthDate}
                        <div />
                        <div className='estiloLettersButton'>
                            <Link to="/login"><button className='estiloButtonHome'>Voltar</button></Link>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Home;