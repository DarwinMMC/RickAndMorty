import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsModule } from './characters/characters.module';
import { CoreModule } from './core/core.module';
import { EpisodesModule } from './episodes/episodes.module';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopNavComponent,
    CoreModule,
    ActorsModule,
    EpisodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
