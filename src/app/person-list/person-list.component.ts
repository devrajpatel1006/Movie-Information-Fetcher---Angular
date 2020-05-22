import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
// import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:Person[] = [];
  selPersons:number=0;

  // constructor(private backenService: BackendServiceService) {
  // // }

  ngOnInit() {
    this.persons.push(new Person(1,"Tejsingh",100)) 
    this.persons.push(new Person(2,"Mohan",540)) 
    this.persons.push(new Person(3,"Shayam",500)) 
    this.persons.push(new Person(4,"Mohan",200)) 
     
  
  }

  personCountHandled($event)
    {

      this.selPersons++;
      // alert('f'+$event);
    }

  }

  
  
    //   );
  // }
  
