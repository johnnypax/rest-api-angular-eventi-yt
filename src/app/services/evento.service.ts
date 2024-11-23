import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { Risposta } from '../models/risposta';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  private isEvento(obj: any): obj is Evento{
    if(typeof obj !== 'object' || obj === null) return false;

    return (
      (typeof obj.codice === 'string' || obj.codice === undefined) &&
      (typeof obj.nome === 'string' || obj.nome === undefined) &&
      (typeof obj.descrizione === 'string' || obj.descrizione === undefined) &&
      (typeof obj.data === 'string' || obj.data === undefined) &&
      (typeof obj.location === 'string' || obj.location === undefined) &&
      (typeof obj.partecipanti === 'number' || obj.partecipanti === undefined)
    );
  }

  async Lista(): Promise<Evento[]> {
    try{

      const response = await fetch("http://localhost:4000/events");

      if(!response.ok){
        console.log(`Errore HTTP: ${response.status}`)
        return [];
      }

      const risultato: Risposta = await response.json();

      if(risultato.status === "SUCCESS")
        if(Array.isArray(risultato.data)){
          if(risultato.data.every(e => this.isEvento(e)))
            return risultato.data;
          else
            console.log("Dati non validi, campi alterati")
        }
        else
          console.log("Dati non validi")
      else
        console.log("Errore di API", risultato.data);
      
    } catch (error) {
      console.log(`ERRORE: ${error}`);
    }

    return [];
    
  }

  async Inserimento(evt: Evento): Promise<boolean>{
    try{
      
      const response = await fetch("http://localhost:4000/events", 
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(evt)
        }
      );

      if(!response.ok){
        console.log(`Errore HTTP: ${response.status}`);
        return false;
      }

      const risultato : Risposta = await response.json();

      if(risultato.status === "SUCCESS")
        return true;

      console.log(`Errore API: ${risultato.data}`)

    } catch (error){
      console.log(`ERRORE: ${error}`)
    }

    return false;
  }
}
