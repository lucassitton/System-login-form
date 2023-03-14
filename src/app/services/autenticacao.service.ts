import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http : HttpClient) { 

  }
  login(email : string, senha : string){
   
    return this.http.post(`${environment.api}usuario/autenticacao` ,{email : email, senha : senha}) ;;
    
  }
}
