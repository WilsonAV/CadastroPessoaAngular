import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ResponsePessoas } from './Pessoa.model';
import { HttpClient, HttpHeaders } from "@angular/common/http"

const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = "http://localhost:8080/api/";


  constructor(private http: HttpClient) { }

  getPessoas(): Observable<ResponsePessoas> {
    return this.http.get<ResponsePessoas>(this.url + "pessoas");
  }

  createPessoa(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
