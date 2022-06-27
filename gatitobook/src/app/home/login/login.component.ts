import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['animais'])
    }, (error) => {
      console.log("Usuário ou senha incorretos");
      console.log(error);
    });

  }

}
