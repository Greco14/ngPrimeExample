import { Action } from '@ngrx/store';
import { Actions, ActionTypes} from './../actions/staff-type.actions';
import { featureAdapter, State, ModalEdit } from './../states/state';
import { StaffType } from './../models/staff-type';
import { items } from '../../app.state';

export const initialState = [];
export const modalInitialState: ModalEdit = {
    isOpen: false
} 

 
export function reducer (state = initialState, action: Actions): any {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST:
            return state
        case ActionTypes.LOAD_FAILURE:
            return [ ...state, action.payload.error]
        case ActionTypes.LOAD_SUCCESS:
            return action.payload.items
        default:
        return state;
    }
}

export function reducerModal (state = modalInitialState, action: Actions): any {
    switch (action.type) {
        case ActionTypes.MODAL_OPEN:
            return {isOpen: true}
        case ActionTypes.MODAL_CLOSE:
            return {isOpen: false}
    }
}