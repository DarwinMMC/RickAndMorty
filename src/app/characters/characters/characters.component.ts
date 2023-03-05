import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { Character } from 'src/models';
import { ProfileComponent } from 'src/app/characters/profile/profile.component';
import { DataService } from 'src/app/core/data.service';
import { InfinityScrollDirective } from 'src/helpers/directives/infinity-scroll.directive';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, ProfileComponent, InfinityScrollDirective],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  /** Characters. */
  characters: Character[] = [];

  /** If should render profile section. */
  showProfile = false;

  /** Element selected. */
  indexSelected = 0;

  /** Current page of characters. */
  currentPage = 1;

  /** Is loading request. */
  isLoading = false;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Show/hidden character profile.
   *
   * @param index Index selected.
   */
  toggleProfile(index: number): void {
    this.showProfile = !this.showProfile;
    this.indexSelected = index;
  }

  /** Get characters. */
  getCharacters(): void {
    this.isLoading = true;
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
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }

  /** Event infinity scroll- */
  scrollDown(): void {
    !this.isLoading && this.getCharacters();
  }
}
