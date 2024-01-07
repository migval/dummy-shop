import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlSegmentGroup, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.user$.pipe(
    map((user) => {
      if (user) {
        return true;
      }
      return router.createUrlTree(['/login']);
    }));
};
