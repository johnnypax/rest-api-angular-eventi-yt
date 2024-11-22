import { Evento } from "./evento";

export class Risposta {
    status?: string;
    data?: Evento[] | Evento | string
}
