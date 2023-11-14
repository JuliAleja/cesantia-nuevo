import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { Concepto } from 'src/app/models/concepto';
import { Factory } from 'src/app/models/model';
import { ApiService } from 'src/app/service/api/api.service';
import { FactoryService } from 'src/app/service/factory.service';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss'],
})
export class FactoriesComponent implements OnInit {
  allConcept: Concepto[]=[];
  formFactory: FormGroup;
  total!: number;

  @Input() Factorylist: Factory[] = [
    {
      concepto: 'Sueldo',
      valor: 2039863,
      factor: 2039863,
    },
    {
      concepto: 'Sobresueldo 20%',
      valor: 58000,
      factor: 58000,
    },
    {
      concepto: 'Auxilio Alimentacion',
      valor: 72749,
      factor: 72749,
    },
  ];

  constructor(private factoryService: FactoryService, private fb: FormBuilder,private api:ApiService
    ) {
    this.formFactory = fb.group({
      concepto: new FormControl('', [Validators.required]),
      valor: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      factor: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnInit(): void {
    this.api.getConcepto().subscribe(
      (response: any) => {
        console.log(response)
        this.allConcept = response;
        console.log("allConcept",this.allConcept);
      })

    this.total = this.Factorylist.reduce((sum, value) => (typeof value.valor == "number" ? sum + value.valor : sum), 0);
  }

  submit(fData: any,formDirective: FormGroupDirective): void {
    console.log(this.formFactory.valid);
    if (this.formFactory.valid) {
      let factory: Factory = this.formFactory.value;
      this.addFactory(factory);
      formDirective.resetForm();
      this.formFactory.reset();
    }
  }

  addFactory(factory: Factory) {
    this.Factorylist.push(factory);
  }
  get f() {
    return this.formFactory.controls;
  }
}
