import { BehaviorSubject } from 'rxjs';

export interface IState {
    isLogedIn: BehaviorSubject<boolean>;
}

export enum EStateProps {
    isLogedIn = 'isLogedIn'
}
