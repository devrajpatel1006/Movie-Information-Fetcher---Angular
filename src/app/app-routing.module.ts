import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person-list/person-list.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';

const routes : Routes =[
{path:'home',component:HomeComponent,canActivate:[AuthService]},
{path:'persons',component:PersonListComponent,canActivate:[AuthService]},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent,canActivate:[AuthService]},
{path:'movies',component:MoviesComponent,canActivate:[AuthService]},
{path:'',redirectTo:'/home',pathMatch:'full'},
{ path:'**',component:PageNotFoundComponentComponent }
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule {

}
