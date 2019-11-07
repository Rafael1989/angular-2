import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

    ultimoId = 0;
    nome = 'Rafael';
    adicionado = false;
    @Output() funcionarioAdicionado = new EventEmitter();

    adicionar() {
      this.adicionado = true;
      const funcionario = {
        id: ++this.ultimoId,
        nome: this.nome
      };

      this.funcionarioAdicionado.emit(funcionario); // vai chamar o metodo aoAdicionar do appcomponent
    }
}
