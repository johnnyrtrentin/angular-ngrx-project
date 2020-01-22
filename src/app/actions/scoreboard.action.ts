import { createAction, props } from '@ngrx/store';
import { State } from '../models/numbers.interface';

export const homeScore = createAction('[Scoreborad], HomeScore');
export const awayScore = createAction('[Scoreborad], Away Score');
export const resetScore = createAction('[Scoreborad], Reset Score');
export const setScore = createAction('[Scoreborad], Set Score',
    props<{ game: State }>()
    );