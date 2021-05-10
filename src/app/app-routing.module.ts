import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePessoaComponent } from './pessoas/create-pessoa/create-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component'

const routes: Routes = [
  { path: 'pessoas', component: PessoasComponent },
  { path: 'pessoas/create', component: CreatePessoaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
