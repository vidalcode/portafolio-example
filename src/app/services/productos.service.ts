import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private Http: HttpClient) {
    this.cargarProductos();
   }

   cargarProductos() {;
     
      return this.Http.get<Producto[]>('https://angular-html-d937b-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: Producto[])  => {
        console.log(resp[1].titulo);
        this.productos = resp;
        this.cargando = false;
      } )};
   
}
