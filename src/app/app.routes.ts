import { Routes } from '@angular/router';
import { ListaEventiComponent } from './components/lista-eventi/lista-eventi.component';
import { InserisciEventoComponent } from './components/inserisci-evento/inserisci-evento.component';
import { DettaglioEventoComponent } from './components/dettaglio-evento/dettaglio-evento.component';
import { ModificaEventoComponent } from './components/modifica-evento/modifica-evento.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "eventi/lista",
        pathMatch: "full"
    },
    {
        path: "eventi/lista",
        component: ListaEventiComponent
    },
    {
        path: "eventi/inserisci",
        component: InserisciEventoComponent
    },
    {
        path: "eventi/dettaglio/:codice",
        component: DettaglioEventoComponent
    },
    {
        path: "eventi/modifica/:codice",
        component: ModificaEventoComponent
    }
];
