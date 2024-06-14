import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from 'src/assets/modelos/productos-model';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private ArticulosFavs: Articulo[] = [];
  private ArticulosFavsSuj: BehaviorSubject<Articulo[]> = new BehaviorSubject<Articulo[]>([]);

  ArticulosFavs$ = this.ArticulosFavsSuj.asObservable();

  constructor() { }

  obtenerArticulosFavs(): Articulo[] {
    return this.ArticulosFavs;
  }

  AgregarFavs(Articulo: Articulo)
  {
    const indice = this.ArticulosFavs.findIndex(x => x.nombre === Articulo.nombre);
    if (indice === -1) {
      this.ArticulosFavs.push(Articulo);
      this.ArticulosFavsSuj.next(this.ArticulosFavs);
    }
  }

  quitarFavs(articulo: Articulo): void {
    const indice = this.ArticulosFavs.findIndex(x => x.nombre === articulo.nombre);
    if (indice > -1) {
      this.ArticulosFavs.splice(indice, 1);
      this.ArticulosFavsSuj.next(this.ArticulosFavs);
    }
  }

}
