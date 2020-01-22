import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

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

  constructor( private service:ServiceService) { }

  ngOnInit() {
  }

  crearPersona(){
    console.warn(this.personaForm.value);
    this.service.addPersona(this.personaForm.value).subscribe(data=> console.log("Se ha enviado correctamente"));
  }

  get nombre(){
    return this.personaForm.get('nombre');
  }

  get apellidos(){
    return this.personaForm.get('apellidos');
  }
}


