import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    types: [],
    weight: 0,
    abilities: [],
    description: '',
    height: 0,
    is_default: false,
    order: 0,
    forms: [],
    game_indices: [],
    sprites: any,
    held_items: [],
    location_area_encounters: '',
    moves: [],
    stats: [],
    past_types: [],
    species: undefined,
    cries: undefined
  };

  getBackgroundPokemon(type: string): string {
    switch (type) {
      case 'fire':
        return 'fire-background';
      case 'water':
        return 'water-background';
      case 'grass':
        return 'grass-background';
      case 'electric':
        return 'electric-background';
      default:
        return 'default-background';
    }
  }

  addFavouritePokemon(pokemon: Pokemon) {
    this.pokemonService.addFavouritePokemon(pokemon);
  }

}
