import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeComponent } from '../episodes/episode/episode.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule {}
