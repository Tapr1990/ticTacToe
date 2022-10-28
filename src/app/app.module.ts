import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
