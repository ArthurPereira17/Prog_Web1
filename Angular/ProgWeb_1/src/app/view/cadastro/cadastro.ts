import { Component } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  vPessoa: Pessoa = {
    idPessoa: 1,
    nome: "Arthur",
    cidade: "Blumenau",
    salario: 2500.00
  };

  percAumento: number = 0;

  calculaAumento(percentual: number): void {
    const aumentoValor = (percentual / 100) * this.vPessoa.salario;
    this.vPessoa.salario += aumentoValor;
  }

  vetorPessoas: Pessoa[] = [
    {
      idPessoa: 1,
      nome: "Arthur",
      cidade: "Blumenau",
      salario: 8500.00
    },
    {
      idPessoa: 2,
      nome: "Maria",
      cidade: "Joinville",
      salario: 3000.00
    },
    {
      idPessoa: 3,
      nome: "João",
      cidade: "Florianópolis",
      salario: 2800.00
    },
    {
      idPessoa: 4,
      nome: "Ana",
      cidade: "Blumenau",
      salario: 9600.00
    },
    {
      idPessoa: 5,
      nome: "Carlos",
      cidade: "Joinville",
      salario: 3200.00
    }
  ]
  editaPessoa(pessoa: Pessoa): void {
    this.vPessoa = pessoa;
  }
}
