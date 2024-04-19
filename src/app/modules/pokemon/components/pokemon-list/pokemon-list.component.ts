import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonData: Pokemon[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;
  largeImage: string | null = null;;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.loadInitialData();
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

  showLargeImage(pokemon: Pokemon): void {
    this.largeImage = pokemon.sprites.front_default;
  }
}

 // onSearch(){
   // console.log(this.name);
  //}



