import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { counterReducer } from './reducers/counter.reducer';
import * as scoreBoard from './reducers/scoreboard.reducer';

import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, game: scoreBoard.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
