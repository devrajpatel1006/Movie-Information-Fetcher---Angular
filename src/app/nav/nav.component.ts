import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    isAuthenticated:boolean=false;
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
   this.backend.userLoggedInObs.subscribe(m=>this.isAuthenticated=m);
  }

}
