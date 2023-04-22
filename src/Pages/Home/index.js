import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            birthDate: ""


        }
    }

    async componentDidMount() {

        await firebase.auth().onAuthStateChanged(async (usuario)=> {

            if(usuario) {
                var uid = usuario.uid;


                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno)=>{

                    this.setState({

                        name: retorno.data().name,
                        surname: retorno.data().surname,
                        birthDate: retorno.data().birthDate
                    });
                });
            }

        });

    }

    render() {
        return (
            <div>
                Nome: {this.state.name} <br/>
                Sobrenome: {this.state.surname} <br/>
                Data de Nascimento: {this.state.birthDate} <br/>
                <Link to="/login"><button>Voltar</button></Link>
            </div>
        )
    }
}

export default Home;