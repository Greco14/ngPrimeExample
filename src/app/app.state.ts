import { StaffType } from './rgx/models/staff-type';
import { ModalEdit } from './rgx/states/state';

export interface items {
  items: StaffType[]
}
export interface AppState {
  items: StaffType[];
  modalEdit: ModalEdit;
}