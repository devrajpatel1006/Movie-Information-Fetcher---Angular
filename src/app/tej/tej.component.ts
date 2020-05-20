import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tej',
  templateUrl: './tej.component.html',
  styleUrls: ['./tej.component.css']
})
export class TejComponent implements OnInit {
  counter:number=0;
 @Input() size:number=23;
 @Output() sizeChange = new EventEmitter<Object>();
  
  constructor() { }

  ngOnInit(): void {
  }
inc(){
  if(this.size>30)
  {
    this.sizeChange.emit({size:this.size,type:2});
  }
 
 this.counter++; return ++this.size;
}
dec(){
 
  this.counter++; return --this.size;
}

}
