import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './view/header/header';
import { Footer } from './view/footer/footer';
import { Nav } from './view/nav/nav';
import { Home } from './view/home/home';
import { Cadastro } from './view/cadastro/cadastro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Nav, Home, Cadastro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProgWeb_1');
}
