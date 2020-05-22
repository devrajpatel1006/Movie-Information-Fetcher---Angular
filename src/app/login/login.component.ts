import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:string;


  constructor(private backend2:BackendService) {}

  ngOnInit() {  }
  onLoginClicked()
  {
    var result = this.backend2.validateUser(this.username,this.password)
    if(result)
       this.message="Valid User";
       else{
         this.message="Invalid User";
       }}
  
  onClear()
   {
     this.username="";
     this.password="";
     this.message="";
   }

}
