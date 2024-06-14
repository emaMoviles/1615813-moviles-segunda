import { LogUsuario } from 'src/assets/modelos/logueo';
import {FormControl, FormGroup,  Validators} from '@angular/forms';
import { Component, OnInit ,inject} from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingService } from 'src/app/servicios/loading.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage{
  enrutar = inject(Router);
  authServicio = inject(AuthService);
  loadingServicio = inject(LoadingService);

  formUser= new FormGroup({
    'uid': new FormControl(''),
    'name':new FormControl('',[Validators.required,Validators.minLength(4)]),
    'email':new FormControl('',[Validators.email,Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    'password':new FormControl('',[Validators.required])
  })
  
 
  async onSubmit() {
    if (this.formUser.valid) {
      const cargando =await this.loadingServicio.Loading();
      await cargando.present(); 
      
      this.authServicio.logout(this.formUser.value as LogUsuario).then(async respuesta => {
        
        await this.authServicio.updateUser(this.formUser.value.name);
        let uid=respuesta.user?.uid;
        this.formUser.controls.uid.setValue(uid);
        this.setUserInfo(uid);
        await this.enrutar.navigate(['/inicio']);
      }).finally(()=>
      {
        cargando.dismiss();
      })
      
    }
  }

  async setUserInfo(uid:string) {
    if (this.formUser.valid) {
      const cargando =await this.loadingServicio.Loading();
      await cargando.present(); 
      let path = `users/${uid}`;
      delete this.formUser.value.password;
      this.authServicio.setDocument(path,this.formUser.value).then(async respuesta => {
        this.loadingServicio.saveInLocalStorage('user',this.formUser.value);
      }).finally(()=>
      {
        cargando.dismiss();
      })
      
    }
  }

 

}
