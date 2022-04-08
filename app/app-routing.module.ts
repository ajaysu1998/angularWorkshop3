import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {ErrorPagesComponent} from './error-pages/error-pages.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  
    {path: 'movieList', component: MovieListComponent},
    {path: 'homepage', component: HomePageComponent},
    {path: 'choreList', component: ChoresListComponent},
   
    {path: '**', component: ErrorPagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
