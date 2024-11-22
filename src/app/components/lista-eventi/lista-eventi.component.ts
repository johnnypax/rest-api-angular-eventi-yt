import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-eventi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-eventi.component.html',
  styleUrl: './lista-eventi.component.css'
})
export class ListaEventiComponent {

  elenco: Evento[] = new Array();

  constructor(private service: EventoService){
  }

  ngOnInit(){
    this.service.Lista().then( ris => {
      this.elenco = ris;
    });
  }

}
