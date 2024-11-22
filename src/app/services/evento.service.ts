import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { Risposta } from '../models/risposta';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  async Lista(): Promise<Evento[]> {
    let risultato : Risposta = await (await fetch("http://localhost:4000/events")).json()
  
    if(risultato.status == "SUCCESS")
      if(Array.isArray(risultato.data))      //Verifichiamo che sia una lista di oggetti
        return risultato.data;
    else
      console.log(risultato.data);            //Stringa contenente errore

    return [];
  }

  async Inserimento(evt: Evento): Promise<boolean>{
    let risultato : Risposta = await (await fetch("http://localhost:4000/events", 
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(evt)
      }
    )).json();

    if(risultato.status == "SUCCESS")
      return true;

    console.log(risultato.data);
    return false;
  }
}
