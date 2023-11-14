import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class InfomationService {

  constructor() { }
  private datosSubject = new Subject<Funcionario>();

  // Método para enviar datos al componente padre
  enviarDatos(datos: Funcionario) {
    this.datosSubject.next(datos);
  }

  // Método para suscribirse a los cambios en el componente hijo
  recibirDatos() {
    return this.datosSubject.asObservable();
  }
}
