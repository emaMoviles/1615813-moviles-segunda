import { Injectable,inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingV = inject(LoadingController);
  toastV = inject(ToastController);

  router= inject(Router);
  Loading()
  {
    return this.loadingV.create({spinner:'crescent'})
  }
  async Toast(opts?: ToastOptions)
  {
    const toast= await this.toastV.create(opts);
    toast.present();
  }

  ruterLink(url:string)
  {
    return this.router.navigateByUrl(url);
  }

  saveInLocalStorage(key:string,value:any)
  {
    return localStorage.setItem(key,JSON.stringify(value))
  }
  getFromLocalStorage(key:string)
  {
    return JSON.parse(localStorage.getItem(key)) ;
  }
}
