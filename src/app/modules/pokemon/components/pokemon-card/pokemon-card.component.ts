import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';


@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent implements OnInit{
  @Input({required:true}) pokemon!: Pokemon
  
  @Output() detailClick: EventEmitter<void>
  
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.detailClick = new EventEmitter<void>()
    
   }

  ngOnInit(): void {
  }
  
  onDetailClick() {
    this.detailClick.emit()
  }  
}
