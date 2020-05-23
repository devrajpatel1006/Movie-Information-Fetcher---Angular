import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
this.backend.logout();
this.router.navigateByUrl('/login');  
}

}
