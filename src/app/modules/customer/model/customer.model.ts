export interface IRecomendation {
    id: number;
    comment: string;
    ok: boolean;
}

export interface IPreference {
    id: number;
    date: string;
    comment: string;
    recommendation: IRecomendation;
}

export interface ICustomer {
    id: number;
    name: string;
    address: string;
    preference: IPreference;
}