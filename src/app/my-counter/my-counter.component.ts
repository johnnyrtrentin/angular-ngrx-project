import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { increment, decrement, reset } from '../actions/counter.action';
import * as scoreBoardActions from '../actions/scoreboard.action';

import { State } from '../models/numbers.interface';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>;
  teste$: Observable<State>;
  score: Array<object> = [];

  constructor(private store: Store<{ count: number }>,
              private store2: Store <{ game: State }>) {

    this.count$ = store.pipe(select('count'));
    this.teste$ = store2.pipe(select('game'));
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  homeScore() {
    this.teste$.subscribe(result => {
      console.log(result)
    });

    this.store2.dispatch(scoreBoardActions.homeScore());
  }
  awayScore() {
    this.store2.dispatch(scoreBoardActions.awayScore());
  }
  resetScore() {
    this.store2.dispatch(scoreBoardActions.resetScore());
  }
}
