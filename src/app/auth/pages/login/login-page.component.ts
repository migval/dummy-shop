import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { catchError } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

    public username: string = '';
    public password: string = '';

    invalidLogin: boolean = false;

    constructor(private authService: AuthService) { }

    public isValidForm(): boolean {
        return this.username.trim().length > 0 && this.password.length > 0;
    }

    public login(event: Event): void {
        event.preventDefault();
        this.authService.login(this.username, this.password)
        .pipe(
            catchError((err) => {
                if (err.status === 400) {
                    this.invalidLogin = true;
                }
                return err;
            })
        )
        .subscribe((user) => {
            console.log(user);
        });
    }
}