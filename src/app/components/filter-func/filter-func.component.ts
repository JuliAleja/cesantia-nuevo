import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { ApiService } from 'src/app/service/api/api.service';
import { InfomationService } from 'src/app/service/infomation.service';

@Component({
  selector: 'app-filter-func',
  templateUrl: './filter-func.component.html',
  styleUrls: ['./filter-func.component.scss']
})
export class FilterFuncComponent {
  formFilter: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api:ApiService,
    private func:InfomationService
  ) {
    this.formFilter = fb.group({
      cc: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),

    });
  }
  submit(fData: any, formDirective: FormGroupDirective): void {
    console.log(this.formFilter.valid);
    if (this.formFilter.valid) {
      const id=this.formFilter.get('cc')?.value
      this.api.getFuncionario(id).subscribe((response: any) => {
        this.func.enviarDatos(response);
      });

    }
  }
}
