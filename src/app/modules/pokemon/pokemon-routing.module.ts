import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { FavouritePokemonListComponent } from './components/favourite-pokemon-list/favourite-pokemon-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '',
    component: PokemonPageComponent,
    children: [
      {
        path: 'favourites',
        component: FavouritePokemonListComponent,
      },
      {
        path: 'list',
        component: PokemonListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      }
    ],
  }, 

  {path: 'detail/:name',
    component: PokemonDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
