import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [MatTabsModule, PokemonListComponent, CommonModule],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit {
  userToken: string | null;
  cargando:boolean = false;

  constructor(private authenticationService: AuthenticationService){
    this.userToken = null;
  }
  ngOnInit(): void {
    this.authenticationService.authToken$.subscribe((value) => {this.userToken = value;
    });
  } 
}
