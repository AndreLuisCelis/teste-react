import React, { ChangeEvent, Component } from 'react';
import { appSocket } from './appSocket';


interface State {
  mensagem: string;
}


export class EntradaTexto extends Component<{}, State> {

  nome = "usuario";

  state: State = {
    mensagem: ""
  };

handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(`Novo texto: ${e.currentTarget.value}`);
this.setState({
      mensagem: e.currentTarget.value
    });
  };

handleClick = () => {
    console.log("Botão clicado");

appSocket.emit("nova-mensagem", {
      nome: this.nome,
      mensagem: this.state.mensagem
    });
this.setState({
      mensagem: ""
    });
  };
  
render() {
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.mensagem} />
        <div>
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}