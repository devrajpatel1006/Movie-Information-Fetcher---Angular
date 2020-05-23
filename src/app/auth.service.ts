import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private backend:BackendService) { }
  canActivate():Observable<boolean>| boolean{
   return this.backend.IsAuthenticated();     

  }
}
