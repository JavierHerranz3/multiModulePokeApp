import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  private favouritePokemons: Pokemon[] = [];
  defaultLimit = 20; // Cantidad predeterminada de resultados por página

  constructor(private http: HttpClient) {

   }

   getAllPokemonDetails(offset: number = 0, limit: number = 20): Observable<Pokemon[]> {
    const url = `${this.url}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        return response.results.map((pokemon: any) => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
            // Incluye otras propiedades que necesites de acuerdo a tu interfaz Pokemon
          };
        });
      })
    );
  }

   addFavouritePokemon(pokemon: Pokemon): void {
    this.favouritePokemons.push(pokemon);
  }
}
