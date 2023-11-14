import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { Modo } from 'src/app/models/modo';
import { Tipo } from 'src/app/models/tipo';
import { Settled } from 'src/app/models/model';
import { PrecedentsService } from 'src/app/service/precedents.service';
import { Clase } from 'src/app/models/clase';
import { Institucion } from 'src/app/models/institucion';
import { SettledService } from 'src/app/service/settled.service';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-settled',
  templateUrl: './settled.component.html',
  styleUrls: ['./settled.component.scss'],
})
export class SettledComponent implements OnInit {
  allModo!: Modo[];
  allTipo!: Tipo[];
  allClase!: Clase[];
  allInstitucion!: Institucion[];
  formSettled!: FormGroup;
  @Input() Settledlist: Settled[] = [];
  constructor(
    private precedentsservice: PrecedentsService,
    private settledService: SettledService,
    private fb: FormBuilder,
    private api:ApiService
  ) {
    this.formSettled = fb.group({
      fecha: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      numero: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      valor: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      tipo: new FormControl('', [Validators.required]),
      modo: new FormControl('', [Validators.required]),
      corte: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      institucion: new FormControl('', [Validators.required]),
      clase: new FormControl('', [Validators.required]),
      otro: new FormControl('', [Validators.required]),
      funcionario: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      entidad: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.allModo = this.precedentsservice.getModo();
    this.api.getTipo().subscribe((response: any) => {
      this.allTipo = response;
    });
    this.allClase = this.settledService.getClase();
    this.api.getInstitucion().subscribe((response: any) => {
      this.allInstitucion = response;
    });
  }
  submit(fData: any, formDirective: FormGroupDirective): void {
    console.log(this.formSettled.valid);
    if (this.formSettled.valid) {
      let precedents: Settled = this.formSettled.value;
      this.addPrecedents(precedents);
      formDirective.resetForm();
      this.formSettled.reset();
    }
  }

  addPrecedents(settled: Settled) {
    this.Settledlist.push(settled);
  }
}
