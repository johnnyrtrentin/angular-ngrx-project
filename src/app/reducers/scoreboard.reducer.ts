import { Action, createReducer, on } from '@ngrx/store';

import * as ScoreboardPageActions from '../actions/scoreboard.action';

import { State } from '../models/numbers.interface';

export const initialState: State = {
    home: 0,
    away: 0
}

const scoreBoardReducer = createReducer(initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ ...state, home: 0, away: 0 })),
    on(ScoreboardPageActions.setScore, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: State | undefined, action: Action) {
    return scoreBoardReducer(state, action);
}