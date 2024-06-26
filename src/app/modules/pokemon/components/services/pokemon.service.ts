import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon } from '../../../../core/models/pokemon.model';

@Injectable()
export class PokemonService {
  private favorites: string[] = [];
  private favoritesSubject = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  fetchPokemons(limit: number, offset: number): Observable<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url).pipe(
      map((data) => data.results), // Extraemos solo los resultados de la respuesta

      mergeMap((results: any[]) => {
        // Mapeamos cada resultado a un Observable que emite un Pokemon
        // Esto nos proporciona una forma eficiente de manejar múltiples solicitudes HTTP en paralelo y combinar los resultados en un solo lugar.
        const pokemonObservables: Observable<Pokemon>[] = results.map(
          (result) => {
            return this.fetchPokemonByName(result.name); // Llamada a fetchPokemonByName
          }
        );
        return forkJoin(pokemonObservables); // Combinamos los observables en uno solo
      })
    );
  }
    

  fetchPokemonByName(name: string): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.http.get<any>(url).pipe(
      map((data) => ({
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        is_default: data.is_default,
        order: data.order,
        weight: data.weight,
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        forms: data.forms.map((form: any) => form.name),
        game_indices: data.game_indices.map((gameIndex: any) => gameIndex.version.name),
        held_items: data.held_items.map((item: any) => item.item.name),
        location_area_encounters: data.location_area_encounters,
        moves: data.moves.map((move: any) => move.move.name),
        species: data.species.name,
        sprites: data.sprites,
        cries: data.cries, // Reemplaza esto con la propiedad correcta de sprites si está disponible
        stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
        types: data.types.map((type: any) => type.type.name),
        past_types: data.types.map((type: any) => type.type.name), // Reemplaza esto con la propiedad correcta si está disponible
        description: '', // Añade una descripción si tienes una fuente para ella
      }))
    );
  }

  addToFavorites(pokemonName: string): void {
    if (!this.isFavorite(pokemonName)) {
      this.favorites.push(pokemonName);
      this.favoritesSubject.next(this.favorites);
    }
  }

  removeFromFavorites(pokemonName: String): void {
    this.favorites = this.favorites.filter(name => name !== pokemonName);
    this.favoritesSubject.next(this.favorites);
  }

 // getFavorites(): BehaviorSubject<String[]> {
   // return this.favoritesSubject;
  //}

  isFavorite(pokemonName: string): boolean {
    return this.favorites.includes(pokemonName);
  }
}

