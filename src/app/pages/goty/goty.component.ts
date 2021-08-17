import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: [
  ]
})
export class GotyComponent implements OnInit {

  public juegos: Game[]= [];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
      this.getNominados();
  }

  getNominados(){
    this.gameService.getNominados().subscribe((juegos) => {
      console.log(juegos);
      this.juegos = juegos;
    })
  }

  votarJuego(juego: Game){

    this.gameService.votarJuego(juego.id).subscribe((resp: {ok: boolean, msg: string}) => {

      if(resp.ok){
        Swal.fire('Gracias', `${resp.msg}`, 'success');
      } else {
        Swal.fire('Oops!', `${resp.msg}`, 'error');
      }
    })
  }

}
