import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of, switchMap, take, throwError } from "rxjs";
import { UserService } from "../services/user.service";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('login')) {
            return next.handle(request);
        }
        return this.userService.user$.pipe(
            take(1),
            switchMap(user => {
                if (user) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${user.token}`
                        }
                    });
                    return next.handle(request);
                } else {
                    return throwError(() => new HttpResponse({ status: 401, statusText: 'Unauthorized'}));
                }
            })
        );
    }
}

export const tokenInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
};