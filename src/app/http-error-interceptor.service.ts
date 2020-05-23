import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService {

  constructor(private backend :BackendService) { }

intercept(req,next)
 {
   return next.handle(req)
     .pipe(
       catchError(err=>{
         if(err.status==401)
         {debugger;
           this.backend.logout();
           location.reload(true);
          }        const error= err.error.message||err.statusText;
         return throwError(error);
       })
     )
 }

}
