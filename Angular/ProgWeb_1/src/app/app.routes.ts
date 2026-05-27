import { Routes } from '@angular/router';
import { Cadastro } from './view/cadastro/cadastro';
import { Home } from './view/home/home';

export const routes: Routes = [
    {
        path : "",
        component : Home
    },
    {
        path : "cadastro",
        component : Cadastro
    }
];
