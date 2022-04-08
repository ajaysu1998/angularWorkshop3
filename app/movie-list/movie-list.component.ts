import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/utility/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked = false;
  movieSearch:string="";

  MyMovies = [
    {
      id: 1,

      title: "Spider-Man: No Way Home",

      director: 'Nayan Dongre', rDate: '1/1/2022', image: '../../assets/A1.jpg'
    },
    {
      id: 2,

      title: "Eternals",

      director: 'Nayan Dongre', rDate: '11/12/2022', image: '../../assets/A2.jpg'
    },
    {
      id: 3,

      title: "the 355",

      director: ' Nayan Dongre', rDate: '21/12/2022', image: '../../assets/A3.jpg'
    },
    {
      id: 4,

      title: "The Requin",

      director: 'Nayan Dongre', rDate: '13/12/2022', image: '../../assets/A4.jpg'
    },
    {
      id: 5,

      title: "Red notice",

      director: ' Nayan Dongre', rDate: '23/12/2022', image: '../../assets/A5.jpg'
    },
    {
      id: 6,

      title: "Ameriacan siege",

      director: ' Nayan Dongre', rDate: '11/12/2022', image: '../../assets/A6.jpg'
    },
    {
      id: 7,

      title: "Vemon",

      director: ' Nayan Dongre', rDate: '9/12/2022', image: '../../assets/A7.jpg'
    },
    {
      id: 8,

      title: "Matrix",

      director: ' Nayan Dongre', rDate: '5/12/2022', image: '../../assets/A8.jpg'
    },
    {
      id: 9,

      title: "Pne shot ",

      director: ' Nayan Dongre', rDate: '17/12/2022', image: '../../assets/A9.jpg'
    },
    {
      id: 10,

      title: "Red notice",

      director: ' Nayan Dongre', rDate: '8/12/2022', image: '../../assets/A10.jpg'
    }
  ]




  Watchlist = [
    {
      id: 10,

      title: "Red notice",

      director: ' Nayan Dongre', rDate: '12/12/2022', image: '../../assets/A10.jpg'
    }


  ]



  addtoWatchlist(mymovie: Movie) {
    if (this.Watchlist.includes(mymovie)) {
      alert('this movie already exists in the')
    }
    else {
      this.Watchlist.unshift(mymovie);
    }
  }


  removeMovie(watch: Movie): void {

    const index: number = this.Watchlist.indexOf(watch);
    this.Watchlist.splice(index, 1);
  }

  sortByName(){
    this.MyMovies.sort((a, b) => a.title.localeCompare(b.title));
   }

   sortByDate(){
    this.MyMovies.sort((a, b) => a.rDate.localeCompare(b.rDate));
   }

}
