import React, {Component} from 'react';
import "./App.css"; 


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: "Login",
      email: "",
      password: "",
      successEmail: "eduardo.lino@pucpr.br",
      successPassword: "123456",
      message: ""
    }

    this.change = this.change.bind(this)
    this.validation = this.validation.bind(this)
    
  }

  change(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validation() {
    if (this.state.successEmail === this.state.email && this.state.successPassword === this.state.password) {
      this.setState({message: "Acessado com sucesso!"});
    } else {
      this.setState({message: "Usuário ou senha incorretos!"});
    }
  }

  render(){
    return (
      <section className='background-component' style={{height:"100vh"}}>
        <div className='estilo'>
        <h1 className='estiloTitulo'> {this.state.title} </h1>
        <div className='estiloLogin'>
          <input placeholder = "E-mail" name = "email" value = {this.state.email} 
          type = "text" size = "25" onChange={this.change}/>
        </div>
        <div className='estiloLogin'>
        <input placeholder = "Senha" name = "password" value = {this.state.password} 
          type = "password" size = "25" onChange={this.change}/>
        </div>
        <div className='estiloLogin'>
          <button onClick = {this.validation}>Acessar</button>
        </div>
        <div className='estiloMensagem'>
          {this.state.message}
        </div>
        </div>
      </section>  
    )
  }

}

export default App;