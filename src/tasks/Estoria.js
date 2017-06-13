import React, { Component } from 'react';

class Estoria extends Component{

    constructor() {
    super();

    this.state = {
      exibirEstoria: false
      }
    }

    _handleClick(event) {
      event.preventDefault();
      this.setState({ exibirEstoria: !this.state.exibirEstoria });
    }

	render(){
    let descricao;
    let textoBotao = <i className="material-icons">assignment</i>;

    if(this.state.exibirEstoria) {
      descricao = <div className="descricao"><p>Personagem: <b>{this.props.nome}</b><br/>
                  Raça: <b>{this.props.raca}</b><br/>
                  Planeta: <a href="#"><i className="material-icons">language</i> {this.props.planeta}</a><br/>
                  Força: <a href="#"><i className="material-icons">stars</i>{this.props.forca}</a><br/>
                  Habilidades: <b>{this.props.habilidade}</b>
                  </p></div>;
                  
      textoBotao = <i className="material-icons">visibility_off</i>;
      }

      //console.log(this.props.descricao);
      ///<span className="card-title">
      ///</span>
		return(
            <div className="col s3">
              <div className="card indigo darken-3">
                <div className="card-content white-text char">
                    
                    <img className="img-circle" src={this.props.foto}  alt="Smiley face" />
                    
                      {descricao}
                </div>
                <div className="card-action">
                    <a className="right" href="#"
                        onClick={this._handleClick.bind(this)}>{textoBotao}</a>
                    <a className="right" href="#"
                        onClick={this._handleDelete.bind(this)}>
                        <i className="material-icons">delete</i></a>
                    <br/>
                </div>
              </div>
            </div>
          );
	}

  _handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  }
}

export default Estoria;

