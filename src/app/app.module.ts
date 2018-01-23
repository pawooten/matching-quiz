import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatchGalleryComponent } from './components/match-gallery/match-gallery.component';
import { MatchTileComponent } from './components/match-tile/match-tile.component';
import { MatchPanelComponent } from './components/match-panel/match-panel.component';

import { MatchService } from './services/match-service/match-service';
import { MatchTargetComponent } from './components/match-target/match-target.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchGalleryComponent,
    MatchTileComponent,
    MatchPanelComponent,
    MatchTargetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MatchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
