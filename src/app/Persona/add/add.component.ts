import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personaForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(10)])),
    apellidos:  new FormControl('', Validators.compose([Validators.minLength(5), Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(10)])),
  });

  constructor() { }

  ngOnInit() {
  }

  crear(){
    console.warn(this.personaForm.value);
  }

  get nombre(){
    return this.personaForm.get('nombre');
  }

  get apellidos(){
    return this.personaForm.get('apellidos');
  }
}


