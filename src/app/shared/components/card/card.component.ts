import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Pokemon } from '../../../core/models/pokemon.model';
import { Router, RouterOutlet } from '@angular/router';
import { PokemonService } from '../../../modules/pokemon/components/services/pokemon.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
[x: string]: any;
  @Output() favouriteClick: EventEmitter<void>;
  @Output() detailClick: EventEmitter<void>;

  constructor(private router: Router, private pokemonService: PokemonService){
    this.favouriteClick = new EventEmitter<void>();
    this.detailClick = new EventEmitter<void>();
  }

  onFavouriteClick() {
    this.favouriteClick.emit();
  }

  onDetailClick() {
    this.detailClick.emit();
  }
}
