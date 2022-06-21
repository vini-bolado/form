import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

 // controlNome: FormControl = new FormControl('')

 formUsuario: FormGroup = new FormGroup({
  nome: new FormControl('', [Validators.required]),
  username: new FormControl('',[Validators.required, Validators.minLength(8)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  senha: new FormControl('',[Validators.required,Validators.minLength(8)]),
  genero: new FormControl('',[Validators.required]),
  aceitaTermo: new FormControl(false)
 })

  constructor() { }

  ngOnInit(): void {
  }

  enviar():void {
    console.log(this.formUsuario.value); // retorna apenas os valores digitados nos campos
    console.log(this.formUsuario.controls); // retorna todos os dados dos campos
  }


}
