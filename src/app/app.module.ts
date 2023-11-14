import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
//ESTILOS
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
//ROUTES
import { AppRoutingModule ,componentRouting} from './app-routing.module';
//HTTP
import {HttpClientModule} from '@angular/common/http'
//COMPONENTS
import { AppComponent } from './app.component';
import { BudgetAvailabilityComponent } from './components/budget-availability/budget-availability.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterFuncComponent } from './components/filter-func/filter-func.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    componentRouting,
    BudgetAvailabilityComponent,
    ResolutionComponent,
    SidebarComponent,
    FooterComponent,
    FilterFuncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSlideToggleModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    PanelModule,
    MatIconModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-*' }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
