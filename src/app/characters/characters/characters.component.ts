import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { Characters } from 'src/models/characters';
import { Character } from 'src/models';
import { ProfileComponent } from 'src/app/characters/profile/profile.component';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  /** Characters. */
  characters: Character[] = [];

  characterSelected!: number;

  showProfile = false;

  indexSelected = 0;

  currentPage = 1;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Show/hidden character profile.
   *
   * @param index Index selected.
   */
  toggleProfile(index:number):void{
    this.showProfile = !this.showProfile;
    this.indexSelected = index;
  }

  getCharacters(): void {
    this.dataService
      .getCharacters(this.currentPage)
      .pipe(first())
      .subscribe({
        next: (characters) => {
          this.characters = this.characters
            ? this.characters.concat(characters.results)
            : characters.results;
          if (this.currentPage < characters.info.pages) {
            this.currentPage++;
          }
        },
      });
  }
}
