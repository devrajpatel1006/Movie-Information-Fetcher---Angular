import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  term:string="batman";
   movies:Object[]=[];
  constructor(private backend :BackendService) { }

  ngOnInit(){
  
  }
searchMovies()
{
  this.backend.getMovies(term).subscribe(
    m=>this.movies=m.Search)
  
}
}
