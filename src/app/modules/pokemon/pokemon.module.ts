import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FavouritePokemonListComponent } from './components/favourite-pokemon-list/favourite-pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from '../../shared/components/card/card.component';
import { PokemonService } from './components/services/pokemon.service';
import { PokemonDetailComponent } from '../../pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonListComponent,
    PokemonCardComponent,
    FavouritePokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    CardComponent,
  ],
  providers: [PokemonService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PokemonModule { }
