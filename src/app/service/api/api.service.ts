import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders}from '@angular/common/http'
import{Observable}from 'rxjs';
import{Precedents} from '../../models/model'
import { Tipo } from 'src/app/models/tipo';
import { Municipio } from 'src/app/models/municipio';
import { Institucion } from 'src/app/models/institucion';
import { Entidad } from 'src/app/models/entidad';
import { Concepto } from 'src/app/models/concepto';
import { Funcionario } from 'src/app/models/funcionario';
import { FiltroFuncionario } from 'src/app/models/filtrofuncionario';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:String="http://127.0.0.1:3333";
  constructor(private http:HttpClient) { }

  getPrecedente():Observable<Precedents[]>{
    const direccion=this.url+"/Precedente/GetPrecedente";
    return this.http.get<Precedents[]>(direccion);
  }
  getTipo():Observable<Tipo[]>{
    const direccion=this.url+"/tipo";
    return this.http.get<Tipo[]>(direccion);
  }
  getMunicipio():Observable<Municipio[]>{
    const direccion=this.url+"/municipio";
    return this.http.get<Municipio[]>(direccion);
  }
  getInstitucion():Observable<Institucion[]>{
    const direccion=this.url+"/institucion";
    return this.http.get<Institucion[]>(direccion);
  }
  getEntidad():Observable<Entidad[]>{
    const direccion=this.url+"/entidad";
    return this.http.get<Entidad[]>(direccion);
  }
  getConcepto():Observable<Concepto[]>{
    const direccion=this.url+"/concepto";
    return this.http.get<Concepto[]>(direccion);
  }
  getFuncionario(id:number):Observable<Funcionario>{
    const direccion=this.url+`/funcionarios/${id}`;
    return this.http.get<Funcionario>(direccion);
  }
  putFuncionario(id:number ,funcionario:FiltroFuncionario):Observable<Funcionario>{
    const direccion=this.url+`/funcionarios/${id}`;
    return this.http.patch<Funcionario>(direccion,funcionario);
  }
}
