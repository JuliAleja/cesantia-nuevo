import { Injectable } from '@angular/core';
import { Clase } from '../models/clase';
import { Institucion } from '../models/institucion';

@Injectable({
  providedIn: 'root'
})
export class SettledService {
  getClase(): Clase[] {
    let clase = [
        new Clase('1', 'Clase 1'),
        new Clase('2', 'Clase 2'),
    ]
    return clase;
}
  getInstitucion(): Institucion[] {
    let institucion = [
        new Institucion('1', 'Institucion 1'),
        new Institucion('2', 'Institucion 2'),
    ]
    return institucion;
}

  constructor() { }
}
