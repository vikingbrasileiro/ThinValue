import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardTilesComponent } from './widget/board-tiles/board-tiles.component';
import { BoardComponent } from './widget/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardTilesComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
