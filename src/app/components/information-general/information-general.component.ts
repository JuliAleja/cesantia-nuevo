import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Entidad } from 'src/app/models/entidad';
import { FiltroFuncionario } from 'src/app/models/filtrofuncionario';
import { Funcionario } from 'src/app/models/funcionario';
import { Municipio } from 'src/app/models/municipio';
import { ApiService } from 'src/app/service/api/api.service';
import { InfomationService } from 'src/app/service/infomation.service';

@Component({
  selector: 'app-information-general',
  templateUrl: './information-general.component.html',
  styleUrls: ['./information-general.component.scss'],
})
export class InformationGeneralComponent implements OnInit {
  allMunicipio: Municipio[] = [];
  allEntidad: Entidad[] = [];
  Entidads: Entidad[] = [];
  funcionario: Funcionario | any;
  filtroFuncionario:FiltroFuncionario |any;
  itemsMunicipio?: SelectItem[];
  tuDropdownControl = '';
  id: string | undefined;

  SendDataonChange(event: any) {
    console.log(event.target.value);
  }
  selected = '1';

  constructor(private api: ApiService, private fun: InfomationService) {}

  formInformation = new FormGroup({
    entidad: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    barrio: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$'),
    ]),
    ingreso: new FormControl('', [Validators.required]),
    dias: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  ngOnInit(): void {
    this.api.getMunicipio().subscribe((response: any) => {
      this.allMunicipio = response;
      this.itemsMunicipio = this.allMunicipio.map((municipio) => {
        return {
          value: `${municipio.cod_dpto?.trim()} ${municipio.cod_mpio?.trim()}`,
          label: municipio.nom_mpio?.trim(),
        };
      });
    });

    this.api.getEntidad().subscribe((response: any) => {
      this.Entidads = response;
      this.allEntidad = this.Entidads.map((l) => {
        return {
          Ent: l.Ent?.trim(),
          Entidad: l.Entidad?.trim(),
        };
      });
    });
    this.fun.recibirDatos().subscribe((datos) => {
      this.traerDatosFormulario(datos);
    });
  }

  submit() {
    if (!this.formInformation.valid)
    {
      const filtrado: FiltroFuncionario = {
        ent:this.formInformation.get("entidad")?.value,
        mpi_resi:this.formInformation.get("municipio")?.value,
        dir_resi:this.formInformation.get("direccion")?.value,
        bar_resi:this.formInformation.get("barrio")?.value,
        tel_resi:this.formInformation.get("telefono")?.value,
        fec_ing:this.formInformation.get("ingreso")?.value,
        dd_no_tra: this.formInformation.get("dias")?.value,
      };
      console.log("id",this.funcionario.cod_empl);

       this.api.putFuncionario(this.funcionario.cod_empl,filtrado).subscribe((response: any) => {
        console.log(response);

      });
    }else{
      console.log("id",this.funcionario.cod_empl);
    }
  }
  get f() {
    return this.formInformation.controls;
  }
  formatearTelefono(event: any) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos

    if (value.length === 10) {
      value = `${value.substring(0, 3)} ${value.substring(
        3,
        6
      )} ${value.substring(6, 10)}`;
    }

    this.formInformation.controls['telefono'].setValue(value);
  }
  traerDatosFormulario(data: Funcionario) {
    this.funcionario = data;
    this.formInformation.patchValue({
      entidad: data.ent?.trim(),
      municipio: data.mpi_resi?.trim(),
      direccion: data.dir_resi,
      barrio: data.bar_resi,
      telefono: data.tel_resi,
      dias: data.dd_no_tra,
      ingreso:data.fec_ing
    });
    this.formInformation.controls['ingreso'].setValue(data.fec_ing);
    this.formInformation.controls['entidad'].updateValueAndValidity();
    this.formInformation.controls['municipio'].updateValueAndValidity();
  }
}
