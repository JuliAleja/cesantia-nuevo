import { Concepto } from './concepto';
import { Tipo } from './tipo';
export interface Factory {
  concepto?:String,
  valor?:number,
  factor?:number
}
export class Precedents {
  public id:number | any;
  public fecha:string | any;
  public numero:number | any;
  public valor:number | any;
  public tipo_id:number | any;
  public modo:string | any;
  public estado:number | any;
  public tipos?:Tipo;
}
export interface Settled {
  fecha?:string,
  numero?:number,
  valor?:number,
  tipo?:string,
  modo?:string,
  corte?:string,
  institucion?:string,
  clase?:string,
  otro?:string,
  funcionario?:string,
  cargo?:string,
  entidad?:string,
}
