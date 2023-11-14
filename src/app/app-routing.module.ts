import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAvailabilityComponent } from './components/budget-availability/budget-availability.component';
import { FactoriesComponent } from './components/factories/factories.component';
import { InformationGeneralComponent } from './components/information-general/information-general.component';
import { PrecedentsComponent } from './components/precedents/precedents.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SettledComponent } from './components/settled/settled.component';

const routes: Routes = [
  { path: 'informGeneral', component: InformationGeneralComponent },
  { path: 'factores', component: FactoriesComponent },
  { path: 'precedentes', component: PrecedentsComponent },
  { path: 'radicado', component: SettledComponent },
  { path: 'disponibilidad-presupuestal', component: BudgetAvailabilityComponent },
  { path: 'resolucion', component: ResolutionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const componentRouting=[InformationGeneralComponent,FactoriesComponent,PrecedentsComponent,SettledComponent,BudgetAvailabilityComponent,ResolutionComponent]
