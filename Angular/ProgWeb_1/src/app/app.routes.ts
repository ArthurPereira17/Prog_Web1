import { Routes } from '@angular/router';
import { Cadastro } from './view/cadastro/cadastro';
import { Home } from './view/home/home';
import { CadAlbum } from './view/cad-album/cad-album';

export const routes: Routes = [
    {
        path : "",
        component : Home
    },
    {
        path : "cadastro",
        component : Cadastro
    },
    {
        path : "album",
        component : CadAlbum
    }
];
