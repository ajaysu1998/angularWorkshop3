import { Component, OnInit } from '@angular/core';
import { Imovies } from 'src/app/utilities/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

movieSearch:string="";


  // moviesToWatch:string[] = ["Lagan","Sholay","Terminator","RRR"];
  moviesToWatch:Imovies[]=[{id:1, name:'RRR',date:"10/08/2022",image:"../../../assets/popular_movies1.jfif",directorName:"Mr Vijay_Maddy"},
{id:2, name:'sholay',date: "03/08/2022",image:"../../../assets/popular_movies2.jfif",directorName:"Mr Karan_John"},
{id:3, name:'terminator',date: "02/08/2022",image:"../../../assets/popular_movies3.jfif",directorName:"Mr Rajiv_Rocky"},
{id:4, name:'lagan',date:"01/08/2022",image:"../../../assets/popular_movies4.jfif",directorName:"Mr Virat_Chiku"}]

  // moviesToWatch =[
  //   {id:1, name:'RRR'},
  //   {id:2, name:'Sholay'},
  //   {id:3, name:'Terminator'},
  //   {id:4, name:'Lagan'},
  // ]
  watchedMovies:Imovies[] =[];
    
    
  

  // watchedMovies:string[] = ["Lagan"];
  constructor() { }

  ngOnInit(): void {
  }
  add_to_watched_list(item:any){
    console.log(item)
 let temp=this.moviesToWatch.indexOf(item);
    this.watchedMovies.push(item)
    this.moviesToWatch.splice(temp,1);
   }
   sortByName(){
    this.moviesToWatch.sort((a, b) => a.name.localeCompare(b.name));
   }

  
}
