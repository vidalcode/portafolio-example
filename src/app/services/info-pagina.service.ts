import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(public http: HttpClient) {
    console.log('Servicio de infoPagina listo');

    //leer el archivo JSON

    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      console.log( resp.NombreCorto );
      this.cargada = true;
      this.info = resp;
    })
  }
}
