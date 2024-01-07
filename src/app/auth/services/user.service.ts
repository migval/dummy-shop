import { Injectable } from "@angular/core";
import { UserDto } from "./dtos/user.dto";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user$ = new BehaviorSubject<UserDto | null>(null);
    public user$ = this._user$.asObservable();

    constructor() {
        const user = localStorage.getItem('user');
        if (user) {
            this._user$.next(JSON.parse(user));
        }
    }

    public setUser(user: UserDto | null): void {
        localStorage.setItem('user', JSON.stringify(user));
        this._user$.next(user);
    }
}