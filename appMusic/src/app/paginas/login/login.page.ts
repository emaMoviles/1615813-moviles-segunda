import { Component,  inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { LogUsuario } from 'src/assets/modelos/logueo';
import { LoadingService } from 'src/app/servicios/loading.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  
  authServicio = inject(AuthService);
  
  loadingServicio = inject(LoadingService);
  enrutar = inject(Router);
  formUser= new FormGroup({
    'email':new FormControl('',[Validators.email,Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    'password':new FormControl('',[Validators.required])
  })
  
  async onSubmit() {
    if (this.formUser.valid) {
      const cargando =await this.loadingServicio.Loading();
      await cargando.present(); 
      this.authServicio.login(this.formUser.value as LogUsuario).then(respuesta => {
        this.enrutar.navigate(['/inicio']);
        
      }).catch(error => {
        this.loadingServicio.Toast({
          message:'correo o contraseña invalida',
          duration:2500,
          color:'danger',
          position:'middle',
          icon:'alert-circle-outline'
        })
      }).finally(()=>
      {
        cargando.dismiss();
      })
      
    }
  }
 

}
