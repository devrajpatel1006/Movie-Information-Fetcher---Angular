import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MovieResponse } from '../person';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  term:string="batman";
   movies:MovieResponse[]=[];
  constructor(private backend :BackendService) { }

  ngOnInit(){
  
  }
searchMovies()
{
  this.backend.getMovies(this.term).subscribe(
    m=>this.movies=m.Search)
  
}
}
