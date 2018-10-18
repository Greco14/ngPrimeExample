export interface StaffTypeResult {
    type: string;
    value: StaffType[];
    
}
export interface dropDownModels {
    label: string,
    value: string
}

export interface StaffType {
    _id: String,
    description: String,
    code: String,
    rol: String,
    actve: boolean,
    last_modifided_by: String,
    last_modifided_date: String
}
