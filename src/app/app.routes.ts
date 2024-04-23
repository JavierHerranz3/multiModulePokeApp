import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/autentication/pages/login-page/login-page.component';
import { BerriesComponent } from './modules/berries/pages/berries-page/berries.component';
import { ItemsComponent } from './modules/items/pages/items-page/items.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {path: 'login', component: LoginPageComponent},
    {path:'pokemon', loadChildren: () => import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
    },

{path: 'berries', component: BerriesComponent},
{path: 'items', component: ItemsComponent},



];
    

