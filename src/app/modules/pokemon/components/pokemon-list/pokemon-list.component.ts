import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pokemon-list',
    standalone: true,
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, PokemonCardComponent, MatFormField, FormsModule]
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

  verDetallePokemon(name: string) {
    this.router.navigate(['/pokemon-card', name]);
  }
  addToFavourites(pokemon: Pokemon): void {
    // Llama al método addToFavorites del servicio PokemonService para agregar el Pokemon a la lista de favoritos
    this.pokemonService.addToFavorites(pokemon.name);
  }

  onSearch(): void {
    // Filtra los Pokémon según el término de búsqueda
    if (this.searchTerm.trim() !== '') {
      // Convierte el término de búsqueda a minúsculas para que la búsqueda no distinga entre mayúsculas y minúsculas
      const searchTermLowerCase = this.searchTerm.trim().toLowerCase();
      // Filtra una copia de los datos originales y actualiza pokemonData con los resultados filtrados
      this.pokemonData = this.pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTermLowerCase)
      );
    } else {
      // Si el campo de búsqueda está vacío, muestra todos los Pokémon nuevamente
      this.loadInitialData();
    }
  }
}




