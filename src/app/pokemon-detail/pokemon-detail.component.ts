import { Component, Input } from '@angular/core';
import { Pokemon } from '../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input({required:true}) pokemon!: Pokemon
}
