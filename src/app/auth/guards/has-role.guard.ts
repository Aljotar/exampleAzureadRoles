import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Profile } from '../model/roles.type';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanLoad, CanActivate {
  constructor(private authService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasRole(route);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.hasRole(route);
  }

  private hasRole(route: Route | ActivatedRouteSnapshot) {
    const allowedRoles = route.data?.['allowedRoles'];

    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.profile))),
      tap((hasRole) => hasRole === false && alert('Acceso Denegado'))
    );
  }
}

// Only available for v14.2 and above
export function hasRole(allowedRoles: Profile[]) {
  return () =>
    inject(UserService).user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.profile))),
      tap((hasRole) => hasRole === false && alert('Acceso Denegado'))
    );
}