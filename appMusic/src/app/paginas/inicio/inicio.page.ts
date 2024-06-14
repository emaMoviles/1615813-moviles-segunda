
import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { ToastController } from '@ionic/angular';
import { Articulo } from 'src/assets/modelos/productos-model';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  servicio = inject(AuthService);
  nombreUsuario:string=this.servicio.getCurrentUSer();
  
  apartados: string = 'all';
  articulos = [
    { nombre: 'Green Dress', precio: 450.00, categoria: 'Dress', imagen: 'assets/images/articulos-imagenes/vestido-corto-verde.webp' },
    { nombre: 'White Dress', precio: 359.90, categoria: 'Dress', imagen: 'assets/images/articulos-imagenes/vestido-blanco.jpg' },
    { nombre: 'Purple Dress', precio: 550.00, categoria: 'Dress', imagen: 'assets/images/articulos-imagenes/vestido-morado.webp' },
    { nombre: 'Modern Dress', precio: 199.90, categoria: 'Dress', imagen: 'assets/images/articulos-imagenes/vestido-newdesign-webp' },
    { nombre: 'Stylish Dress', precio: 790.99, categoria: 'Dress', imagen: 'assets/images/articulos-imagenes/vestido-mezclilla.png' },
    { nombre: 'Basic Watch', precio: 79.90, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/reloj-basico.jpg' },
    { nombre: 'Gold Watch', precio: 2500.00, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/reloj-dorado.jpg' },
    { nombre: 'Modiya Watch', precio: 2750.00, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/reloj-modiya.jpg' },
    { nombre: 'Black Watch', precio: 1490.00, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/reloj-negro.jpg' },
    { nombre: 'Rolex Gold', precio: 70500.99, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/rolex-dorado.webp' },
    { nombre: 'Rolex Prsidente', precio: 110450.99, categoria: 'Watch', imagen: 'assets/images/articulos-imagenes/rolex-presidente.jpg' },
    { nombre: 'Blue Blazer', precio: 900.00, categoria: 'Blazer', imagen: 'assets/images/articulos-imagenes/balzer-blue.jpg' },
    {nombre: 'Brown Blazer' ,precio: 949.90 ,categoria: 'Blazer',imagen: 'assets/images/articulos-imagenes/blazer-brown.jpg'},
    {nombre: 'Gray Blazer',precio: 1050.00,categoria: 'Blazer' ,imagen: 'assets/images/articulos-imagenes/blazer-gray.avif'},
    {nombre: 'Light Yellow Blazer',precio: 1200.00,categoria: 'Blazer' ,imagen: 'assets/images/articulos-imagenes/blazer-light.jpg'},
    {nombre: 'Marron Blazer',precio: 1200.00,categoria: 'Blazer',imagen: 'assets/images/articulos-imagenes/blazer-marron.webp'},
    {nombre: 'Yellow Blazer',precio: 1500.00,categoria:'Blazer',imagen: 'assets/images/articulos-imagenes/blazer-yellow.jpg'},
    {nombre: 'White Hat',precio: 540.00,categoria: 'Hat',imagen: 'assets/images/articulos-imagenes/sombrero-blanco.jpg'},
    {nombre: 'Light Hat',precio: 350.00,categoria: 'Hat',imagen: 'assets/images/articulos-imagenes/sombrero-claro.jpg'},
    {nombre: 'Elegant Hat',precio: 700.00,categoria: 'Hat',imagen: 'assets/images/articulos-imagenes/sombrero-cuero.jpg'},
    {nombre: 'Funny Hat',precio: 300.00,categoria: 'Hat',imagen: 'assets/images/articulos-imagenes/sombrero-pluma.jpg'},
    {nombre: 'Solar Hat',precio: 450.00,categoria: 'Hat',imagen: 'assets/images/articulos-imagenes/sombrero-solar.jpg'},
    {nombre: 'Quaker Hat', precio: 259.90,categoria: 'Hat', imagen: 'assets/images/articulos-imagenes/sombrero-vaquero.jpg'},
    {nombre: 'Green Hat', precio: 300.00,categoria: 'Hat', imagen: 'assets/images/articulos-imagenes/sombrero-verde.jpg'},
  ];
  busqueda = '';
  ArticulosFiltrados = [...this.articulos];

  toast=inject(ToastController);
  nav=inject(NavController);
  favs=inject(FavoritosService);
  

  ngOnInit() {
    this.filtrar();
  }
  async AgregarFavoritos(articulo: Articulo) {
    this.favs.AgregarFavs(articulo);
    const toast = await this.toast.create({
      message: 'Articulo se agrego exitosamente',
      duration: 3000,
      color: 'primary'
    });
    toast.present();
  }


  filtrar(event?: any) {
    if (event && event.target) {
      this.busqueda = event.target.value.toLowerCase();
    }

    let filtrado = this.articulos;

    if (this.apartados !== 'all') {
      filtrado = filtrado.filter(item => item.categoria === this.apartados);
    }

    if (this.busqueda) {
      filtrado = filtrado.filter(
        item => item.nombre.toLowerCase().includes(this.busqueda));
    }

    this.ArticulosFiltrados = filtrado;
  }

  detalleProducto(articulo: any) {
    this.nav.navigateForward('/caracteristicas', {
      queryParams: {
        item: JSON.stringify(articulo)
      }
    });
  }

    
  

}
