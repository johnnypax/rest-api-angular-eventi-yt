import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-eventi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-eventi.component.html',
  styleUrl: './lista-eventi.component.css'
})
export class ListaEventiComponent {

  elenco: Evento[] = new Array();

  constructor(private service: EventoService, private router: Router){
  }

  ngOnInit(){
    this.RefreshLista();
  }

  private RefreshLista(){
    this.service.Lista().then( ris => {
      this.elenco = ris;
    });
  }

  Elimina(varCodice: string | undefined): void {
    if(varCodice){
      this.service.Eliminazione(varCodice).then(ris => {
        if(ris){
          alert("Eliminazione effettuata con successo")

          this.RefreshLista();
        }
        else
          alert("Errore di eliminazione")
      })
    }
    else{
      alert("ERRORE, codice non presente")
    }
  }

  Modifica(varCodice: string | undefined) : void {
    if(varCodice)
      this.router.navigateByUrl(`/eventi/modifica/${varCodice}`)
  }

}
