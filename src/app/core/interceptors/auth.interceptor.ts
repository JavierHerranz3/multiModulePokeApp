import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Token } from '@angular/compiler';

export const authInterceptor: HttpInterceptorFn = (req: any, next) => {
  const authService = inject(AuthenticationService);
 if (authService.authToken$.value) {
  const newReq = req.clone({headers: 
    req.headers.append('X-autentication-Token', authService.authToken$.value),
  });
  return next(newReq);
 }
  return next(req);
};
