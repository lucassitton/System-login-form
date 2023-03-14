import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormBuilder().group({ email: new FormControl("", Validators.required), senha: new FormControl("", Validators.required)});         
  constructor(private router : Router, private service : AutenticacaoService ){

  }
   redirecionaCadastro() {
    this.router.navigate(["cadastro"]);
  }
  login(){
    if(this.form.invalid){
      alert("Campo inválido");
      return ;
    }
    else{
      this.service.login(this.form.value.email as string, this.form.value.senha as string).subscribe();

    }
    
  }
}
