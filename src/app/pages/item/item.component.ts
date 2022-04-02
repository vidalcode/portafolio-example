import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductoCompleto } from 'src/app/interfaces/producto-completo-interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto?: ProductoCompleto;
  id: string = "";

  constructor(private route: ActivatedRoute, public productoService:ProductosService) { }

  ngOnInit() {
   

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productoService.getProducto(params['id']).subscribe( (producto: ProductoCompleto)  => {
        console.log(producto);
        this.producto = producto;
      }, error => {
        console.log(error);
      } );
    });



  }

}

