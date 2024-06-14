import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Articulo } from 'src/assets/modelos/productos-model';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnDestroy,OnInit {

  
  private subscripcion: Subscription | null = null;
  articulosFavoritos: Articulo[] = [];
  constructor(private favoritos: FavoritosService, private nav: NavController) {}

  ngOnInit() {
    this.cargarFavoritos();
    this.subscripcion = this.favoritos.ArticulosFavs$.subscribe(items => {
      this.articulosFavoritos = items;
    });
  }

  ngOnDestroy() {
    if (this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }

  cargarFavoritos() {
    this.articulosFavoritos = this.favoritos.obtenerArticulosFavs();
  }

  removerDeFavoritos(articulo: Articulo) {
    this.favoritos.quitarFavs(articulo);
  }

  
  detalleArticulo(articulo: any) {
    this.nav.navigateForward('/caracteristicas', {
      queryParams: {
        item: JSON.stringify(articulo)
      }
    });
  }
}
