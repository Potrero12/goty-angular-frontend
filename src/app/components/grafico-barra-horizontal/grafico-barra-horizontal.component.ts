import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styles: [
  ]
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  // public intervalo;

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }

  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'


  constructor() {

    const newResults = [...this.results];
    
    // this.intervalo = setInterval(() => {
    //   for (let i in newResults){
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results = [...newResults];

    // }, 1500)

  }

  ngOnDestroy(){
    // clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }

}
