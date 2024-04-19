import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router){}

  goTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
