import { Action } from '@ngrx/store';
import { StaffType } from './../models/staff-type';

export enum ActionTypes {
  LOAD_REQUEST = '[My Feature] Load Request',
  LOAD_FAILURE = '[My Feature] Load Failure',
  LOAD_SUCCESS = '[My Feature] Load Success',
  MODAL_OPEN = '[MODAL] Is Open',
  MODAL_CLOSE = '[MODAL] Is Close'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: StaffType[] }) {}
}

export class OpenModal implements Action {
  readonly type = ActionTypes.MODAL_OPEN;
  constructor(public payload: {isOpen: boolean}){}
}
export class CloseModal implements Action {
  readonly type = ActionTypes.MODAL_CLOSE;
  constructor(public payload: {isOpen: boolean}){}
}


export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | OpenModal | CloseModal;