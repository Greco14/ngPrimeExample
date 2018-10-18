import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,  of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from './data.services'
import * as featureActions from './../rgx/actions/staff-type.actions';

@Injectable()

export class MainDataService {
 

  constructor(private dataService: DataService,  private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService.getDatos()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
            ),
            catchError(error =>
              observableOf(new featureActions.LoadFailureAction({ error }))
            )
      	)
     )
  );
}
