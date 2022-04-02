import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto-interface';
import { ProductoCompleto } from '../interfaces/producto-completo-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private Http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos() {
   return new Promise((resolve, reject) => {
    return this.Http.get<Producto[]>(
      'https://angular-html-d937b-default-rtdb.firebaseio.com/productos_idx.json'
    ).subscribe((resp: Producto[]) => {
      this.productos = resp;
      this.cargando = false;
    });
   })
  }

  getProducto(id: string) { 
    return this.Http.get<ProductoCompleto>(
      `https://angular-html-d937b-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  getBuscarProducto(termino: string) {
    if(this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      })
    }else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
