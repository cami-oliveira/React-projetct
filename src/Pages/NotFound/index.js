import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='background-component-NotFound' style={{ height: "100vh" }}>
                <div className='estilo'>
                    <h1 className='estiloMensagem'>Ops...</h1>
                    <div>
                        <h2 className='estiloMensagem'>Usuário não encontrado. Você já possui cadastro? <br />
                            Volte para a página inicial.</h2>
                    </div>
                    <div className='estiloTitulo'>
                    <Link to="/login"><button className='estiloButtonNotFound'>Página Inicial</button></Link>
                    </div> 
                </div>
            </section>
        )
    }
}

export default NotFound;
