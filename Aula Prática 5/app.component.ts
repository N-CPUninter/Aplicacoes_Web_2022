import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';

  constructor(private http: HttpClient) {}

  cep: string ='';

  endereco : any;
  retorno={
    rua : '',
    cidade : '',
    estado : ''
  }

  //logradouro=rua, localidade=cidade, uf=estado

  pesquisado = false;
  espera = false;


  pesquisa(){
    this.espera = true;
    this.cep=this.cep.replace(/\D/g, '');

    const url = 'http://viacep.com.br/ws'+this.cep+'/json/';

    this.http.get(url).subscribe( (res) =>{
      this.endereco = res;

      this.retorno.rua = this.endereco.logradouro;
      this.retorno.cidade  = this.endereco.localidade;
      this.retorno.estado = this.endereco.uf;
    });
    this.pesquisado = true;
    this.espera = false;

    console.log(this.retorno.rua);


  }

  limpa(){
    this.pesquisado=false;
    this.espera=false;
    this.cep="";
    this.endereco="";
    this.retorno.rua="";
    this.retorno.cidade="";
    this.retorno.estado="";
  }

}