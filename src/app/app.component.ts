import { Usuario } from './models/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Usuario = {
    termos: true,
    email:'',
    genero:'',
    nome:'',
    senha:'',
    username:''
  }


  salvarUsuario(){
    alert('usuario salvo com sucesso')
    console.log(this.user)
  }
}
