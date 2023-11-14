import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-budget-availability',
  templateUrl: './budget-availability.component.html',
  styleUrls: ['./budget-availability.component.scss'],
})
export class BudgetAvailabilityComponent implements OnInit {
  formBudget!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formBudget = fb.group({
      fecha_r: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      numero_r: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      fecha_d: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      numero_d: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnInit(): void {}
}
