import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Liste de film';

  showMovies: boolean = true;

  moviesList: string[] = ["OldBoy", "Parasite", "Le seigneur des anneaux","Le parrain","Laligne verte"];
}