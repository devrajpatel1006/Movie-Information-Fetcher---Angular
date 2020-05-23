    import { Component, OnInit, Inject } from '@angular/core';
    import { TestClass } from '../person';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string="";
  constructor(private backend:BackendService){}
  //   @Inject("MyToken") private v,@Inject("MyTest") private v2:TestClass) { 
  //     alert(v);
  //     alert(v2.age *100); 
  // }
 
  ngOnInit() {  
  this.name =this.backend.getName();
  }

}
