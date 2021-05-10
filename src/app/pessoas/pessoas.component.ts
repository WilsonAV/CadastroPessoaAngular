import { Component, OnInit } from '@angular/core';
import { ResponsePessoas } from './Pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  responsePessoas: ResponsePessoas;

  constructor(private pessoaService: PessoaService) {
    this.responsePessoas = this.responsePessoas;
  }

  ngOnInit(): void {
    this.pessoaService.getPessoas()
      .subscribe(res => this.responsePessoas = res)
  }

}
