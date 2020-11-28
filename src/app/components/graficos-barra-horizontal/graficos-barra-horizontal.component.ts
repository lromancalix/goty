import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graficos-barra-horizontal',
  templateUrl: './graficos-barra-horizontal.component.html',
  styleUrls: ['./graficos-barra-horizontal.component.css']
})
export class GraficosBarraHorizontalComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    //Object.assign(this, { single });
   }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
