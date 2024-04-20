import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Sprites, Species, Cries } from '../../../../core/models/pokemon.model';


@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Usa el ID para obtener los datos del Pokemon desde tu servicio o arreglo de datos
    // this.pokemon = this.pokemonDataService.getPokemonById(id);
  }
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    location_area_encounters: '',
    moves: [],
    species: { name: '', url: '' },
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null,
      other: {
        dream_world: { front_default: '', front_female: null },
        home: { front_default: '', front_female: null, front_shiny: '', front_shiny_female: null },
        'official-artwork': { front_default: '', front_shiny: '' },
        showdown: {
          back_default: '',
          back_female: null,
          back_shiny: '',
          back_shiny_female: null,
          front_default: '',
          front_female: null,
          front_shiny: '',
          front_shiny_female: null
        }
      },
      versions: {
        'generation-i': { 'red-blue': { back_default: '', back_gray: '', front_default: '', front_gray: '' }, yellow: { back_default: '', back_gray: '', front_default: '', front_gray: '' } },
        'generation-ii': { crystal: { back_default: '', back_shiny: '', front_default: '', front_shiny: '' }, gold: { back_default: '', back_shiny: '', front_default: '', front_shiny: '' }, silver: { back_default: '', back_shiny: '', front_default: '', front_shiny: '' } },
        'generation-iii': { emerald: { front_default: '', front_shiny: '' }, 'firered-leafgreen': { back_default: '', back_shiny: '', front_default: '', front_shiny: '' }, 'ruby-sapphire': { back_default: '', back_shiny: '', front_default: '', front_shiny: '' } },
        'generation-iv': { 'diamond-pearl': { back_default: '', back_female: null, back_shiny: '', back_shiny_female: null, front_default: '', front_female: null, front_shiny: '', front_shiny_female: null }, 'heartgold-soulsilver': { back_default: '', back_female: null, back_shiny: '', back_shiny_female: null, front_default: '', front_female: null, front_shiny: '', front_shiny_female: null }, platinum: { back_default: '', back_female: null, back_shiny: '', back_shiny_female: null, front_default: '', front_female: null, front_shiny: '', front_shiny_female: null } },
        'generation-v': { 'black-white': { animated: { back_default: '', back_female: null, back_shiny: '', back_shiny_female: null, front_default: '', front_female: null, front_shiny: '', front_shiny_female: null }, back_default: '', back_female: null, back_shiny: '', back_shiny_female: null, front_default: '', front_female: null, front_shiny: '', front_shiny_female: null } },
        'generation-vi': { 'omegaruby-alphasapphire': { front_default: '', front_female: null, front_shiny: '', front_shiny_female: null }, 'x-y': { front_default: '', front_female: null, front_shiny: '', front_shiny_female: null } },
        'generation-vii': { icons: { front_default: '', front_female: null }, 'ultra-sun-ultra-moon': { front_default: '', front_female: null, front_shiny: '', front_shiny_female: null } },
        'generation-viii': { icons: { front_default: '', front_female: null } }
      }
    },
    cries: { latest: '', legacy: '' },
    stats: [],
    types: [],
    past_types: [],
    description: ''
  };


}
