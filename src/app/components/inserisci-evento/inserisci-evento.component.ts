import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { convertiData }  from '../../utils/date-converter';

@Component({
  selector: 'app-inserisci-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inserisci-evento.component.html',
  styleUrl: './inserisci-evento.component.css'
})
export class InserisciEventoComponent {

  nom?: string;
  des?: string;
  dat?: string;
  loc?: string;
  par?: number;

  constructor(private service: EventoService, private router: Router){

  }

  Inserisci() : void{

    let evt : Evento = {
      nome: this.nom,
      descrizione: this.des,
      data: convertiData(this.dat),
      location: this.loc,
      partecipanti: this.par,
    }
  
    this.service.Inserimento(evt).then( ris => {
      if(ris){
        alert("Inserimento effettuato con successo")
        this.router.navigateByUrl("eventi/lista")
      }
      else{
        alert("Errore di inserimento")
      }
    })

  }
}
