import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/autentication/pages/login-page/login-page.component';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';
import { BerriesComponent } from './modules/berries/pages/berries-page/berries.component';
import { ItemsComponent } from './modules/items/pages/items-page/items.component';
import { PokemonCardComponent } from './modules/pokemon/components/pokemon-card/pokemon-card.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {path: 'login', component: LoginPageComponent},
    {path: 'pokemon', component: PokemonPageComponent},
    {path: 'berries', component: BerriesComponent},
    {path: 'items', component: ItemsComponent},
    { path: 'pokemon-card/:id', component: PokemonCardComponent}
];
