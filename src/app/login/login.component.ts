import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:string;


  constructor(private backend2:BackendService,private router:Router) {}

  ngOnInit() {  }
  onLoginClicked()
  {
    // var result = this.backend2.validateUser(this.username,this.password)
    this.backend2.validateUser(this.username,this.password).subscribe(
      m=>{
          console.log(m)
        if(m)
          this.router.navigate(['/home']);
        // this.message="Valid User";
        else{
        //  this.message="Invalid User";
        }}
   
   
    )
}
  onClear()
   {
     this.username="";
     this.password="";
     this.message="";
   }

}
