import { Component, OnInit } from '@angular/core';
import { Contato, RequestCreate, ResponseCreate } from '../Pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  request: RequestCreate = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    contatos: []
  }

  response: ResponseCreate

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }

  save() {
    this.pessoaService.createPessoa(this.request)
      .subscribe(res => {
        this.response = res
      })
  }

}
