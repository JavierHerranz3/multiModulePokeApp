import { Component, Input, OnInit, input } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';


import { Pokemon } from '../../../../core/models/pokemon.model';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PokemonService } from '../../components/services/pokemon.service';

@Component({
    selector: 'app-pokemon-page',
    templateUrl: './pokemon-page.component.html',
    styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent implements OnInit {
  @Input({required:true}) tab!: string;
  activeTab: number;
  userToken: string | null;
  cargando:boolean = false;
  searchTerm: string = '';
  pokemonData: Pokemon[] = [];
  filteredPokemonData: Pokemon[] = [];
  isLoading: boolean = false;

  constructor(private authenticationService: AuthenticationService, private pokemonService: PokemonService,
    private router: Router){
    this.userToken = null;
    this.activeTab = 0;
  }

  ngOnInit(): void {
    this.authenticationService.authToken$.subscribe((value) => {this.userToken = value;
    });
    
    const tab= this.router.url.split('/')[2];
    if(tab === 'list'){
      this.activeTab = 0;
    }

    if(tab === 'favourites'){
      this.activeTab = 1;
    }
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

  onSelectedTabChanged(event: MatTabChangeEvent){
    if(event.index === 0){
      this.router.navigateByUrl('pokemon/list');
      return;
    }
    if(event.index === 1) {
      this.router.navigateByUrl('pokemon/favourites');
      return;
    }
  }
}
