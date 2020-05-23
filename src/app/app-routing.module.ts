import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person-list/person-list.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LogoutComponent } from './logout/logout.component';

const routes : Routes =[
{path:'home',component:HomeComponent},
{path:'persons',component:PersonListComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'movies',component:MoviesComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{ path:'**',component:PageNotFoundComponentComponent }
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule {

}
