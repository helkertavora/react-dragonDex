import React, { Component } from 'react';
import jQuery from 'jquery';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';



class Taskboard extends Component{
   constructor() {
    super();
    this.state = {
        estorias : []
    }
}

  _excluirEstoria(estoriaId) {
    jQuery.ajax({
    method: 'DELETE',
    url: `http://localhost:3001/estorias/${estoriaId}`
  });

   const estorias = this.state.estorias;
    estorias.splice(estoriaId, 1);
    
    this.setState({estorias});
  }   

  componentDidMount() {
    this._timer =
    setInterval(() => this._buscarEstorias(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
}
 
  componentWillMount() {
    this._buscarEstorias();
  }


 

_buscarEstorias() {
      jQuery.ajax({
      method: 'GET',
      url: 'http://localhost:3001/estorias',
      success: (estorias) => {
           this.setState({estorias})
    }
});
}

_getEstorias() {
const estorias = this.state.estorias;
      
console.log(estorias);

return estorias.map( estoria =>
    <Estoria
    nome={estoria.nome} foto={estoria.foto} raca={estoria.raca} planeta={estoria.planeta}
    forca={estoria.forca} habilidade={estoria.habilidade} key={estoria.id} 
    id={estoria.id}
    onDelete={this._excluirEstoria.bind(this)} />);
}


	
	render(){
    const estorias = this._getEstorias(); 

		return(<div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Dragon Ball Personagens</h1>
              <h3>{this._getTitulo(estorias.length)} </h3>
                <div className="row">
              	{estorias}
                </div>
                <EstoriaForm adicionarEstoria={this._adicionarEstoria.bind(this)} />
            </div>
          </div>); 
	}

  _getTitulo(totalDeEstorias) {
    if(totalDeEstorias === 0) {
        return "DragonDex vazio";
        } else if (totalDeEstorias === 1) {
        return "1 Personagens";
        } else {
        return `${totalDeEstorias} Personagens`;
    }
}

_adicionarEstoria(nome, foto, raca, planeta, forca, habilidade) {
        const estoria = {  nome, foto, raca, planeta, forca, habilidade };
         jQuery.post('http://localhost:3001/estorias', estoria ).success(novaEstoria => { 
                  this.setState({estorias:this.state.estorias.concat([novaEstoria]) });
        });

        this.setState({ 
          estorias: this.state.estorias.concat([estoria]) 
        });
        
  }

}
export default Taskboard;

