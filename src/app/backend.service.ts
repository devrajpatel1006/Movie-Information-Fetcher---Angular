import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getPersons():Array<Person>{
  const persons:Person[]=[];
persons.push(new Person(1,"Tejsingh",100)) 
persons.push(new Person(2,"Mohan",540)) 
persons.push(new Person(3,"Shayam",500)) 
persons.push(new Person(4,"Mohan",200)) 
return persons;
}
validateUser(username:string,password:string):boolean{
  if(username=="admin" && password=="admin")
       return true;
       else{
         return false;
       }
}

}