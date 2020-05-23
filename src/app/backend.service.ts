import { Injectable } from '@angular/core';
import { Person, MoviesResponse, MovieResponse } from './person';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  userLoggedInSource=new BehaviorSubject(false);
  userLoggedInObs=this.userLoggedInSource.asObservable();//part of rxjs 

  constructor(private httpObj:HttpClient) { 
   if(localStorage.getItem('token'))
     {
        this.userLoggedInSource.next(true);
     }
     else{
       this.userLoggedInSource.next(false);
     }

  }
  getPersons():Observable<Array<Person>>{
//   const persons:Person[]=[];
// persons.push(new Person(1,"Tejsingh",100)) 
// persons.push(new Person(2,"Mohan",540)) 
// persons.push(new Person(3,"Shayam",500)) 
// persons.push(new Person(4,"Mohan",200)) 
// return of(persons);
 let u = "http://localhost:8000/products";
 return this.httpObj.get<any>(u);

}
validateUser(username:string,password:string):Observable<boolean> {
  let u ="http://localhost:8000/auth/login";
return this.httpObj.post<any>(u,{email:username,password:password})
 .pipe(
  map(m=>{
     if( m.access_token){
       localStorage.setItem('token',m.access_token);
       localStorage.setItem('user',username);
       this.userLoggedInSource.next(true);
      return true;
     }
     else{
       return false;
     }
  })
   )
 }
  // .subscribe(
  // m=>console.log(m))
//   return of(false)
//  )
//   // if(username=="admin" && password=="admin")
  //      return of(true)

  //      else{
  //        return of(false);
  //      }

getName():string{
  return localStorage.getItem('user');
}

getMovies(term:string):Observable<MoviesResponse>
 { 
  let u ="https://www.omdbapi.com/?apikey=8daf3d32&s="+ term; 
  return this.httpObj.get<MoviesResponse>(u)
 }

 logout():boolean{
   localStorage.removeItem('user');
   localStorage.removeItem('token');
   this.userLoggedInSource.next(false);
   return true;
 }
IsAuthenticated():boolean{
  if(localStorage.getItem('token'))
    return true;
  else 
  return false;

}}