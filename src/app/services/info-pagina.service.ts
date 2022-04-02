import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(public http: HttpClient) {
    this.cargarEquipo();
    //leer el archivo JSON

    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    })
  }

  private cargarInfo() {
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    })
  }

  private cargarEquipo(){
    //leer el archivo JSON
    this.http.get('https://angular-html-d937b-default-rtdb.firebaseio.com/equipo.json').subscribe( (resp: any ) => {
      this.cargada = true;
      this.equipo = resp;
    })
  }
}
