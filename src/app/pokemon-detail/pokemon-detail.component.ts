import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../core/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../modules/pokemon/components/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  @Input({required:true}) pokemon!: Pokemon

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService){}
  ngOnInit(): void {
  }
  
  
}
