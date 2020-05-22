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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  AboutComponent,
       PersonComponent,
       PersonListComponent,
       DirectivePraticeComponent,
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }