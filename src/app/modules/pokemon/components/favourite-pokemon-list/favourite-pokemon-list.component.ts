import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-favourite-pokemon-list',
  templateUrl: './favourite-pokemon-list.component.html',
  styleUrl: './favourite-pokemon-list.component.css'
})
export class FavouritePokemonListComponent {
  favorites: number[] = [];
  constructor(private pokemonService: PokemonService) { }
}
