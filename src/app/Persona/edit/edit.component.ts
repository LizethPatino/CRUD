import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:ServiceService) { }

  datoUsuario:Persona;
  personaForm:FormGroup;

  ngOnInit() {
    this.personaForm = new FormGroup({
      nombre: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(10)])),
      apellidos:  new FormControl('', Validators.compose([Validators.minLength(5), Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(10)])),
    });
    this.editar();
  }
  
 
 editar(){
  let id=localStorage.getItem("id");
  this.service.getPersonaId(+id)
  .subscribe(data=>{
    this.datoUsuario=data;
    this.nombre.setValue(data.nombre);
    this.apellidos.setValue(data.apellidos);
  })
 }

  editarPersona(){
    this.datoUsuario.nombre = this.nombre.value;
    this.datoUsuario.apellidos = this.apellidos.value;
    this.service.editPersona(this.datoUsuario).subscribe(data=>{console.log("Actualizado con éxito")});
    
  }

  get nombre(){
    return this.personaForm.get('nombre');
  }

  get apellidos(){
    return this.personaForm.get('apellidos');
  }
}


