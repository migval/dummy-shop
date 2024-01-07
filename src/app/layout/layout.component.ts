import { Component } from "@angular/core";
import { AuthService } from "../auth/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

    constructor(private authService: AuthService, private router: Router) { }

    public logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}