import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PokemonPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiModulePokeApp';
}
