import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from 'src/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile[data]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private _data!: Character;

  /** Character info. */
  @Input() set data(value: Character) {
    value.episode.forEach((episode, index) => {
      value.episode[index] = episode.split('/').at(-1) || '';
    });
    this._data = value;
  }

  get data(): Character {
    return this._data;
  }

  @Output() closeProfile = new EventEmitter<void>();

  /**
   * Emit event close profile to characters component.
   */
  eventCloseProfile(): void {
    this.closeProfile.emit();
  }
}
