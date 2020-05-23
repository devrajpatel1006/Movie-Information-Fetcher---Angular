import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
// import { MyNgIfDirective } from './my-ng-if.directive';
// import { MyTestPipePipe } from './my-test-pipe.pipe';
// import { MyhighligterDirective } from './myhighligter.directive';

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
      //  MyNgIfDirective,
      //  MyTestPipePipe,
      //  MyhighligterDirective,
 
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
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpErrorInterceptorService,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }