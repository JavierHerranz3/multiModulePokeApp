import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { Pokemon } from '../../../../core/models/pokemon.model';
@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [MatTabsModule, PokemonListComponent, CommonModule, PokemonListComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit {
  userToken: string | null;
  cargando:boolean = false;
  searchTerm: string = '';
  pokemonData: Pokemon[] = [];
  filteredPokemonData: Pokemon[] = [];
  isLoading: boolean = false;

  constructor(private authenticationService: AuthenticationService, private pokemonService: PokemonService){
    this.userToken = null;
  }
  ngOnInit(): void {
    this.authenticationService.authToken$.subscribe((value) => {this.userToken = value;
    });
    
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
      
    }
  }
}
