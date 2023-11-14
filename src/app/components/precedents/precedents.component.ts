import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Precedents } from 'src/app/models/model';
import { Modo } from 'src/app/models/modo';
import { Tipo } from 'src/app/models/tipo';
import { PrecedentsService } from 'src/app/service/precedents.service';
import {ApiService} from 'src/app/service/api/api.service'
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-precedents',
  templateUrl: './precedents.component.html',
  styleUrls: ['./precedents.component.scss'],
})
export class PrecedentsComponent implements OnInit {
  allModo!: Modo[];
  allTipo: Tipo[]=[];
  formPrecedents: FormGroup;
  color: ThemePalette = 'primary';
  total!: number;
 Precedentlist: Precedents[]=[];

  constructor(
    private precedentsservice: PrecedentsService,
    private fb: FormBuilder,
    private api:ApiService
  ) {
    this.formPrecedents = fb.group({
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
      /*       estado: new FormControl('', [Validators.required])
       */
    });
  }

  ngOnInit(): void {
/*     this.api.getPrecedente().subscribe(
      (response: any) => {
        this.Precedentlist=response;


      }) */
    this.allModo = this.precedentsservice.getModo();
    this.api.getTipo().subscribe(
      (response: any) => {
        this.allTipo = response;
      })
    this.totalsum();
  }
  submit(fData: any, formDirective: FormGroupDirective): void {
    console.log(this.formPrecedents.valid);
    if (this.formPrecedents.valid) {
      let precedents: Precedents = this.formPrecedents.value;
      this.addPrecedents(precedents);
      this.totalsum();
      formDirective.resetForm();
      this.formPrecedents.reset();
    }
  }
  totalsum() {
    this.total = this.Precedentlist.reduce(
      (sum, value) =>
        typeof value.valor == 'number' ? sum + value.valor : sum,
      0
    );
  }
  addPrecedents(precedents: Precedents) {
    this.Precedentlist.push(precedents);
  }
  onReset() {
    this.formPrecedents.reset({
      fecha: '',
      numero: '',
      valor: '',
      tipo: '',
      modo: '',
    });
  }
   trackByFn(index: String, tipo: KeyValue<number, Tipo>) {
    return tipo.value;
  }
  get f() {
    return this.formPrecedents.controls;
  }
}
