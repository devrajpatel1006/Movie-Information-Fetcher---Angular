import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directive-pratice',
  templateUrl: './directive-pratice.component.html',
  styleUrls: ['./directive-pratice.component.css']
})
export class DirectivePraticeComponent implements OnInit {
  testObj = {id:6,name:"testing",price:199};
  selectedCountry:Number;
  persons =[
    
      {id:1,name:"tej"},
      {id :2,name:"tri"},
      {id:3,name:"tushar"}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getColor():string{
    if(this.testObj.id>5)
    return "green";
    else
      return "grey";
  }

  getColorObj():Object{
    if(this.testObj.id>5)
    return {'background-color':'red','color':'blue'};
    else
    return {'background-color':'blue'};
    } 

}