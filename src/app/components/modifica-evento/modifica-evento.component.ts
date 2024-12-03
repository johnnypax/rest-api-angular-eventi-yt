import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { convertiDataIso, convertiData } from '../../utils/date-converter';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-modifica-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifica-evento.component.html',
  styleUrl: './modifica-evento.component.css'
})
export class ModificaEventoComponent {

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
  ){

  }

  ngOnInit(){
    this.rottaAttiva.params.subscribe( async (risultato) => {
      const codice = risultato['codice'];

      if(codice && codice.trim() !== ""){
        let evt = await this.service.Dettaglio(codice);

        if(evt){
          this.codi = evt.codice
          this.nome = evt.nome
          this.desc = evt.descrizione
          this.data = convertiDataIso(evt.data)
          this.loca = evt.location
          this.part = evt.partecipanti
        }
      }
    } )
  }

  Modifica() : void {
    let evt : Evento = {
      codice: this.codi,
      nome: this.nome,
      descrizione: this.desc,
      data: convertiData(this.data),
      location: this.loca,
      partecipanti: this.part
    }

    this.service.Modifica(evt).then( ris => {
      if(ris){
        alert("Modifica effettuata con successo!");
        this.router.navigateByUrl(`/eventi/dettaglio/${this.codi}`)
      }
      else{
        alert("Errore di modifica")
      }
    })
  }

}
