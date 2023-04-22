import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import App from '../../App.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Login",
      email: "",
      password: "",
      message: "Você ainda não possui um cadastro? Cadastre-se aqui!"
    }

    this.change = this.change.bind(this)
    this.validation = this.validation.bind(this)
  }

  change(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

   async validation() {

    await  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then (()=> {
      window.location.href = "./home";

    })
    .catch((erro)=>{

      console.log("heloou")
      

    })
  }

  render() {
    return (
      <section className='background-component' style={{ height: "100vh" }}>
        <div className='estilo'>
          <h1 className='estiloTitulo'> {this.state.title} </h1>
          <div className='estiloLogin'>
            <input placeholder="E-mail" name="email" value={this.state.email}
              type="text" size="25" onChange={this.change} />
          </div>
          <div className='estiloLogin'>
            <input placeholder="Senha" name="password" value={this.state.password}
              type="password" size="25" onChange={this.change} />
          </div>
          <div className='estiloLogin'>
            <Link to="/NotFound"><button onClick={this.validation}>Acessar</button></Link>
          </div>
          <div className='estiloSubTitulo'>
            {this.state.message}
          </div>
          <div>
          <Link to="/cadastro"><button onClick={this.validation}>Cadastrar</button></Link>
          </div>
        </div>
      </section>
    )
  }

}

export default Login;