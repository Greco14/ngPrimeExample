import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { StaffType } from './../models/staff-type'

export const featureAdapter: EntityAdapter<any> = createEntityAdapter<any>({});

export interface State extends EntityState<any> {
  isLoading?: boolean;
  error?: any;
  items: StaffType[];
}
export interface Items {
  items: StaffType[]
}
export interface ModalEdit {
  isOpen: boolean
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    items: null
  }
);