import { Component, HostListener, OnInit } from '@angular/core';

import { Pokemon } from '../../../../core/models/pokemon.model';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';



@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemonData: Pokemon[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;
  selectedPokemon: Pokemon | null = null;
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit(): void {
    this.loadInitialData();
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.isLoading) {
      this.loadMorePokemon();
    }
  }

  loadInitialData(): void {
    this.isLoading = true;
    this.pokemonService.fetchPokemons(this.limit, this.offset).subscribe(data => {
      this.pokemonData = data;
      this.isLoading = false;
    });
  }

  loadMorePokemon(): void {
    this.isLoading = true;
    this.offset += this.limit;
    this.pokemonService.fetchPokemons(this.limit, this.offset).subscribe(data => {
      if (data.length > 0) {
        this.pokemonData = this.pokemonData.concat(data);
      }
      this.isLoading = false;
    });
  }

  onDetailPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon','detail', pokemon.name]);
  }
  addToFavourites(pokemon: Pokemon): void {
    // Llama al método addToFavorites del servicio PokemonService para agregar el Pokemon a la lista de favoritos
    this.pokemonService.addToFavorites(pokemon.name);
  }

}




