import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeComponent } from '../episodes/episode/episode.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    CharactersComponent,
    EpisodeComponent
  ]
})
export class ActorsModule { }
