import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoArticulos: any[] = [];
  constructor() { }
  obtenerCarrito() {
    return this.carritoArticulos;
  }

  AgregarCarrito(item: { name: any; }) {
    const indice = this.carritoArticulos.findIndex(i => i.name === item.name);
    if (indice > -1) {
      this.carritoArticulos[indice].quantity += 1;
    } else {
      this.carritoArticulos.push({ ...item, quantity: 1 });
    }
  }

  Aumento(item: { name: any; }) {
    const indice = this.carritoArticulos.findIndex(i => i.name === item.name);
    if (indice > -1) {
      this.carritoArticulos[indice].quantity += 1;
    }
  }

  Descontar(item: { name: any; }) {
    const indice = this.carritoArticulos.findIndex(i => i.name === item.name);
    if (indice > -1) {
      this.carritoArticulos[indice].quantity -= 1;
      if (this.carritoArticulos[indice].quantity === 0) {
        this.carritoArticulos.splice(indice, 1);
      }
    }
  }

  LimpiarCarro() {
    this.carritoArticulos = [];
  }

}
