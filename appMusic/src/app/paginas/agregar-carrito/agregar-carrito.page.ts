import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CarritoService } from 'src/app/servicios/carrito.service';
@Component({
  selector: 'app-agregar-carrito',
  templateUrl: './agregar-carrito.page.html',
  styleUrls: ['./agregar-carrito.page.scss'],
})
export class AgregarCarritoPage implements OnInit {

  elementosCarrito: any[] = [];
  elementosTotales: number = 0;
  total: number = 0;
  envioGratis: number = 0; 
  subtotal: number = 0;
  seleccionarMetodoPago: string = '';
  metodosPago: string[] = ['Oxxo Pago', 'MasterCard', 'PagoPal','VISA'];

  constructor(private toast: ToastController,private carrito: CarritoService) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.elementosCarrito = this.carrito.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal() {
    this.elementosTotales = this.elementosCarrito.reduce((a, b) => a + b.quantity, 0);
    this.total = this.elementosCarrito.reduce((a, b) => a + (b.price * b.quantity), 0);
    this.subtotal = this.total + this.envioGratis;
  }

  agregarElementos(item: any) {
    this.carrito.Aumento(item);
    this.calcularTotal();
  }

  descontarElementos(item: any) {
    this.carrito.Descontar(item);
    this.calcularTotal();
  }

  LimpiarCarrito() {
    this.carrito.LimpiarCarro;
    this.cargarCarrito();
  }

  async Pago() {
    const toast = await this.toast.create({
      message: 'Pago Realizado con éxito',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
    this.LimpiarCarrito();
  }

}
