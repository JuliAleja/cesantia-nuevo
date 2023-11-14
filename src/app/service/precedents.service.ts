import * as Rx from "rxjs";
import { Injectable } from '@angular/core';
import { Modo } from '../models/modo';
import { Tipo } from '../models/tipo';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PrecedentsService {
  tipo: Tipo[] = [];
  constructor(private api: ApiService) {}
  getModo(): Modo[] {
    let modo = [new Modo('1', 'Estudio'), new Modo('2', 'Otros')];
    return modo;
  }
  getTipo(): Rx.Observable<Tipo[]> {
   return this.api.getTipo().pipe(
    Rx.map((tipo: any) => {
      return tipo.registros.map((element: any) => ({
        tip_cesa: element.tip_cesa,
      }));
    }),
    Rx.toArray()
  );
  }
}
