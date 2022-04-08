import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { SerachMoviePipe } from './pipes/serach-movie.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
  
    NavbarComponent,
    FooterComponent,
    ErrorPagesComponent,
    SerachMoviePipe,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
