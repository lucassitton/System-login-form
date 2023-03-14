import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  

  constructor(private router : Router ){

  }
  redirecionaLogin() {
    this.router.navigate(["login"]);
  }


  
}

