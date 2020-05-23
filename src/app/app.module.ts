import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AboutComponent } from './about/about.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';
import { DirectivePraticeComponent } from './directive-pratice/directive-pratice.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { TestClass } from './person';
import { MoviesComponent } from './movies/movies.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  AboutComponent,
       PersonComponent,
       PersonListComponent,
       DirectivePraticeComponent,
       LoginComponent,
       MoviesComponent,
       NavComponent,
       PageNotFoundComponentComponent,
       LogoutComponent,
 
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: "MyToken",
      useValue :123
     } ,
  {
    provide :"MyTest",
    useClass:TestClass
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }