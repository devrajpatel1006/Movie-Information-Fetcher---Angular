import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { BackendService } from '../backend.service';
// import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:Person[] = [];

  selPersons:number=0;
// backendServiceObj:BackendService
  constructor(private backend2:BackendService)
  {}
  ngOnInit() {

   //this.persons=  this.backend2.getPersons();
    this.backend2.getPersons().subscribe(
      m=>{
        this.persons=m;
      }
    );
  
  }

  personCountHandled($event)
    {

      this.selPersons++;  
      // alert('f'+$event);
    }

  }

  
  
