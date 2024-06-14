import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ActivatedRoute } from '@angular/router';
import {  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.page.html',
  styleUrls: ['./caracteristicas.page.scss'],
})
export class CaracteristicasPage implements OnInit {
  articulo: any;
  talla: string = '';
  
  

  constructor( private toast: ToastController, private carrito: CarritoService,private route: ActivatedRoute) {
    
    this.route.queryParams.subscribe(parametros => 
      {
       if (parametros && parametros['articulo']) 
       {
        this.articulo = JSON.parse(parametros['articulo']);
       }
    });
  }

  ngOnInit() {}

  async AgregaraCarrito() {
    this.carrito.AgregarCarrito(this.articulo);
    const toast = await this.toast.create({
      message: 'El articulo se ha añadido al carrito',
      duration: 3000,
      color: 'primary',
      position: 'bottom'
    });
    toast.present();
  }

}
