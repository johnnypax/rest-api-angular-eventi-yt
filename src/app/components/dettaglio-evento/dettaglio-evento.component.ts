import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettaglio-evento.component.html',
  styleUrl: './dettaglio-evento.component.css'
})
export class DettaglioEventoComponent {

  codi?: string;
  nome?: string;
  desc?: string;
  data?: string;
  loca?: string;
  part?: number;

  constructor(
    private rottaAttiva: ActivatedRoute, 
    private service: EventoService,
    private router: Router
  ){}

  ngOnInit(){
    this.rottaAttiva.params.subscribe( async (risultato) => {
      const codice = risultato['codice'];

      if(codice && codice.trim() !== ""){
        let evt : Evento | null = await this.service.Dettaglio(codice);

        if(evt){
          this.codi = evt.codice
          this.nome = evt.nome
          this.desc = evt.descrizione
          this.data = evt.data
          this.loca = evt.location
          this.part = evt.partecipanti
        }
      }
    })
  }

  Elimina(varCodice: string | undefined) : void {
    if(varCodice){
      this.service.Eliminazione(varCodice).then(ris => {
        if(ris){
          alert("Eliminazione effettuata con successo")

          this.router.navigateByUrl("/")
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
