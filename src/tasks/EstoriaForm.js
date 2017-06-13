import React, { Component } from 'react';


class EstoriaForm extends Component {
	render() {
		return(
			<div className="row">
				<form className="col s12" onSubmit={this._handleSubmit.bind(this)}>
					<h5>+1 Personagem</h5>
						<div className="input-field col s12">

								<input placeholder="Nome" id="nome" ref={ input => this._nome = input} /><br/>
								<input placeholder="Foto do Personagem" id="foto" ref={ input => this._foto = input} /><br/>
								<input placeholder="Raça" id="raca" ref={ input => this._raca = input} /><br/>
								<input placeholder="Planeta Origem" id="planeta" ref={ input => this._planeta = input} /><br/>
								<input placeholder="Força" id="forca" ref={ input => this._forca = input} /><br/>
								<textarea placeholder="Habilidades" ref={ textarea => this._habilidade = textarea}>
								</textarea>
								<button className="btn waves-effect waves-light" type="submit">Enviar</button>
						</div>
				</form>
			</div>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		let nome = this._nome.value;
		let foto = `css/images/`+this._foto.value+`.jpg`;
		let raca = this._raca.value;
		let planeta = this._planeta.value;
		let forca = this._forca.value;
		let Habilidade = this._habilidade.value;

		this.props.adicionarEstoria(nome, foto, raca, planeta, forca, Habilidade);

	}
}

export default EstoriaForm;