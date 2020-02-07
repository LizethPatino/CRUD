import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    contrasena:  new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
  });

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loguearse(){
    console.warn(this.loginForm.value);
  }

  get usuario(){
    return this.loginForm.get('usuario');
  }

  get contrasena(){
    return this.loginForm.get('contrasena');
  }

  login(){
    //console.log("entra aqui", this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data=> console.log("se genero el token"));
  }

}
