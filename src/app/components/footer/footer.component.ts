import { Component, OnInit } from '@angular/core';
import { InfomationService } from 'src/app/service/infomation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 date=new Date();
 nombre?:string;
  constructor(private fun:InfomationService) { }

  ngOnInit(): void {
    this.fun.recibirDatos().subscribe((datos) => {
      this.nombre = `${datos.ape_empl} ${datos.nom_empl}`;
    });
  }

}
