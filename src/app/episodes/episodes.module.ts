import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeComponent } from './episode/episode.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    EpisodeComponent
  ]
})
export class EpisodesModule { }
